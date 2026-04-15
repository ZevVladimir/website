---
tags: [Machine Learning, Simulation, Bayesian Parameter Estimation]
aliases: [SBI, Implicit likelihood inference, ILI, Likelihood-free inference, LFI]
---
SBI is a framework for Bayesian parameter estimation in scientific simulations where likelihood evaluations are not feasible.

[TransferLab Article](https://transferlab.ai/series/simulation-based-inference/#:~:text=Simulation%2Dbased%20inference%20(SBI)%20refers%20to%20statistical%20inference%20on,do%20not%20require%20explicit%20likelihoods.)
### Bayesian parameter inference for Simulation-based models
- Primary challenge with simulation based models is finding parameters settings to accurately replicate observed data $x_{o}$
	- An option is to search for best-fit parameter settings $\theta^*$ with grid search or standard optimization algorithms
		- Fails for high-dimensional problems
		- Complicates 
			- Identification of multiple valid parameter settings
			- Expression of parameter uncertainties
			- Description of parameter interactions
		- More principled approach is to use Bayesian parameter inference
			- Don't obtain single-point estimates but obtain a distribution over model parameters conditioned on observed data, $p(\theta|x_{o})$
			- The posterior distribution characterizes the entire parameter space
				- Highlights regions likely to reproduce $x_{o}$
				- Identifies all possible parameter settings to explain $x_{o}$
				- Quantifies parameter uncertainties and correlations
			- Formally: 
				- Given 
					- Prior $p(\theta)$ that characterizes prior knowledge of parameters
					- Likelihood $p(x|\theta)$ defined by the simulation-based model
				- Bayesian inference wants to infer the posterior over the parameters with Bayes' rule: $p(\theta|x)=\dfrac{p(x|\theta)p(\theta)}{p(x)}$
### Simulation-based Inference
- Goal is to facilitate Bayesian parameter inference for simulation-based models
- Challenge for SBI comes from complexity of the simulators and the difficulty of computing the likelihood $p(x|\theta)$
	- Since the simulator $f(\theta)$ acts like a black box can't explicitly determine or write down an expression for its likelihood
	- Also can't use MCMC or Variational Inference (VI) since they need efficient access to $p(x|\theta)$
	- Have to approximate $p(\theta|x_{o})$ using only simulated data $(\theta,x)$ and no access to model's likelihood
- Constraint for SBI
	- Computational intensity of simulations
	- SBI methods generally vary in their efficiency in using simulated data
	- Divided into two categories
		- Classical SBI approaches based on rejection sampling (Approximate Bayesian Computation, ABC)
		- Modern SBI approaches with artificial neural networks (Neural simulation-based inference)
### Classical SBI: Approximate Bayesian Computation (ABC)
- Define a distance function between simulated and observed data $d(x,x_{o})$
- Simulate data $x_{i}$ using parameters $\theta_{i}$ that is sampled from the prior
- Accept or reject $\theta_{i}$ based on a threshold parameter $\epsilon$ with $d(x,x_{o})<\epsilon$
- Then obtain distribution of accepted parameters: $q_{\epsilon}(\theta|d(x,x_{o})<\epsilon)$
- This converges to true posterior distribution as amount of simulated data approaches infinity and $\epsilon$ approaches 0
- ABC struggles with dimensionality
	- As dimensionality increases the number of required model simulations grows exponentially
- Generally necessitate ad-hoc choices of distance functions, rejection thresholds and summary statistics
### Modern SBI: neural density estimation
- Use artificial neural networks to learn a parametric approximation to the unknown $p(\theta|x_{o})$
- Train the NN only on simulated data and then apply to the observed data to obtain desired posterior approximation
- Three categories based on whether they directly approximate the posterior distribution, the likelihood, or the ratio of likelihoods
#### Neural posterior estimation (NPE)
- Directly approximates the posterior from simulated data
- Use training dataset $(\theta_{i},x_{i}):i=1,\dots,N$ train an amortized conditional neural density estimator
- Use this to approximate the posterior over the model parameters $q_{\phi}(\theta|x)\approx p(\theta|x)$ 
	- $q_{\phi}$ is parametrized by a NN with parameters $\phi$ with $x$ as input and outputting a density $\theta$
- NN parameters are optimized by minimizing the negative log-posterior density under the current estimate of the posterior: $\mathcal{L}(\phi)=-\dfrac{1}{N}\sum_{i=1}^{N}\log q_{\phi}(\theta_{i}|x_{i})$
- Can also use different versions with
	- Neural posterior score estimation: use score-matching (or diffusion) networks
	- Flow matching posterior estimation (FMPE): use continuous normalizing flows with flow matching
- Features of NPE
	- After training once enables fully amortized Bayesian inference
	- Can handle high-dimensional structured data
#### Neural Likelihood Estimation (NLE)
- Focuses on approximating the likelihood $p(x|\theta)$ rather than the posterior
- Train the conditional density estimator $q_{\phi}$ to map simulation parameters $\theta$ to data $x$ emulating the simulator: $x\sim q_{\phi}(x|\theta)\approx f(\theta)$
- $q_{\phi}(x|\theta)$ provides a tractable density that can be evaluated and sampled from
	- Can use standard approximate Bayesian inference methods for SBI on it
- Features of NLE
	- Ability to emulate the simulator
		- Can generate synthetic data using a single forward pass
		- Supports efficient and flexible changing of hierarchical inference settings
- Challenges of NLE
	- Difficult to use with high-dimensional data $x$
	- Doesn't support learning embeddings in $x$
	- Only partially amortized 
		- NN is trained only once
		- But inference with MCMC and VI must be repeated for each new observation $x_{o}$
#### Neural Ratio Estimation (NRE)
- Trains a NN to predict the likelihood-to-evidence ratio for a given parameter
- This then enables standard Bayesian inference methods
- Like NLE
	- Allows for flexible inference in hierarchical settings with iid-data
	- Partially amortized
- Unlike NLE and NPE
	- Does not perform conditional density estimation
	- Treats task of learning a density ratio as a classification problem
		- Classifier that inputs parameters $\theta$ and data $x$ and learns the corresponding likelihood-to-evidence ratio
		- Enables learning embeddings of both $\theta$ and $x$
#### All-in-one Simulation Based Inference
- Trained on joint distribution of parameters and data
- Allows inference given arbitrary conditionals of the joint
- Combines transformer architecture with denoising score-matching
### Challenges
#### Limited training data and large parameter spaces
- There is limited training data since simulations are difficult/costly to run
- To mitigate this perform multiple rounds of NN training (sequential inference approach)
	- Generate new training dat not from the prior but from a suitable proposal distribution (like current posterior estimate)
- Tradeoff for multi-round inference
	- Requires retraining for each new observation
	- Leads to numerical instabilities (primarily for NPE)
	- For NLE and NRE samplinng new training data from the proposal distribution is generally slower than sampling from the prior
- Promising approach is to develop more effective density estimators
	- Flow matching for efficient and scalable training of continuous normalizing flows
#### Learning summary statistics with embedding networks
- Challenge for SBI is in extracting relevant features and reducing data dimensionality for efficient processing
- NN based SBI like NPE and NRE can automatically learn embedding networks
#### Posterior accuracy
- Detecting and mitigating inaccuracies and biases:
	- Posterior predictive checks test whether data simulated with parameters sampled from posterior accurately reproduce observed data
	- Simulation based calibration and multi-dimensional coverage diagnostics use simulated data to evaluate statistical calibration of posterior uncertainties
	- Balanced neural ratio estimation introduces a regularized loss function that balances posterior accuracy against potential overconfidence
#### Model misspecification
- If a model is well specified it is capable of reproducing the observed data
- To assess model misspecification
	- Conduct prior predictive check
		- Evaluate whether simulated data resembles observed data
	- Learn an error model atop the simulator
	- Mitigate during inference process with generalized Bayesian inference framework