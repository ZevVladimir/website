
---
**Title**: Deep Gaussian Processes 

tags: #Computer-Science-Machine-Learning #Statistics-Machine-Learning #Mathematics-Probability #paper 

citekey: damianouDeepGaussianProcesses2013

collection:

- Papers Read

status: unread

dateread:

---
# Notes
## Abstract
- Deep [[Gaussian Process Model|GP]]s are a deep belief network based on Gaussian process mappings
- Data is modeled as the output of a multivariate GP
	- The inputs to one GP are governed by another GP
- Perform inference by approximate variational marginalization
	- Strict lower bound on marginal likelihood which is used for model selection (number of layers and nodes per layer)
	- Can be applied to relatively large datasets
## Main Paper
### Introduction
- Traditional approach to deep learning
	- Based on binary latent variables and the restricted Boltzmann machine
	- Deep hierarchies are constructed by stacking these models and various approximate inference techniques to estimate parameters
### The Model
- **Standard GP Modelling**
	- Input $\boldsymbol{X}\in \mathcal{R}^{N\times Q}$ output $\boldsymbol{Y}\in \mathcal{R}^{N\times D}$
	- Want to estimate the unobserved latent function $f=f(\boldsymbol{x})$ responsible for generating $\boldsymbol{Y}$ given $\boldsymbol{X}$
	- $y_{n}=f(\boldsymbol{x}_{n}+\epsilon_{n}),\;\epsilon\\sim \mathcal{N}(\boldsymbol{0},\sigma_{\epsilon}\boldsymbol{I})$
		- $f$ is drawn from a Guassian process: $f(\boldsymbol{x})\sim \mathcal{GP}(\boldsymbol{0},k(x,x'))$
	- Denote covariance function (kernel) hyperparameters with $\boldsymbol{\theta}$
	- The latent function instantiations: $\boldsymbol{F}=\{\boldsymbol{f}_{n}\}_{n}^N$ is normally distributed so marginal likelihood is calculable analytically: $p(\boldsymbol{Y|X})=\int \prod_{n=1}^{N}p(\boldsymbol{y_{n}|f_{n}})p(\boldsymbol{f_{n}|x_{n}})d\boldsymbol{F}=\mathcal{N}(\boldsymbol{Y|0,K}_{NN}+\sigma_{\epsilon}^2\boldsymbol{I}),\boldsymbol{K}_{NN}=k(\boldsymbol{X,X})$
	- Generative procedure:
		- $y_{nd}=f_{d}(x_{n})+\epsilon_{nd}$ where $\epsilon$ is Gaussian with variance $\sigma_{\epsilon}^2$ and $\boldsymbol{F}=\{\boldsymbol{f}_{d}\}^D_{d=1}$ with $f_{nd}=f_{d}(\boldsymbol{x}_{n})$
		- GP priors: $p(\boldsymbol{F|X})=\prod_{d=1}^{D}\mathcal{N}(\boldsymbol{f}_{d}|\boldsymbol{0,K}_{NN})$
		- The prior is gaussian allowing for non-linear mappings to be marginalized out analytically to get the likelihood $p(\boldsymbol{Y|X})=\prod_{d=1}^{D}\mathcal{N}(\boldsymbol{y}_{d}|\boldsymbol{0,K}_{NN}+\sigma_{\epsilon}^2)$
- **Deep Gaussian Process**
	- Corresponds to a graphical model with three kinds of noes
		- Leaf nodes $\boldsymbol{Y}\in \mathcal{R}^{N\times D}$ which are observed
		- Intermediate latent spaces $\boldsymbol{X}_{h}\in \mathcal{R}^{N\times Q_{h}}$ with $h=1,\dots H-1$ where $H$ is the number of hidden layers
			- Act as inputs for the layer below (including leaves) and as outputs for the layer above
		- Parent latent node $\boldsymbol{Z}=\boldsymbol{X}_{H}\in \mathcal{R}^{N\times Q_{Z}}$
			- Can be unobserved and potentially constrained with prior of choice
			- Or constitute the given inputs for a supervised learning task (this paper focuses on unsupervised)
	- Adding layers adds significantly to number of model parameters $\boldsymbol{X}_{h}$ and to the regularization challenge
		- So seek to variationally marginalize out the whole latent space
		- Define automatic relevance determination covariance functions for the GPs: $k(\boldsymbol{x}_{i},\boldsymbol{x}_{j})=\sigma_{ard}^2e^{-1/2 \sum_{q=1}^{Q}w_{q}(x_{i,q}-x_{j,q})^{2}}$
			- Assumes different weight $w_{q}$ for each latent dimension
			- This can be exploited to "switch off" irrelevant dimensions by forcing that weight towards 0
			- But this introduces nonlinearities making Bayesian treatment challenging
- **Bayesian Training**
	- Requires optimization of model evidence: $\log p(\boldsymbol{Y})=\log \int_{\boldsymbol{X,Z}}p(\boldsymbol{Y|X})p(\boldsymbol{X|Z})p(\boldsymbol{Z})$
	- Bunch of statistics and math I don't get :D
### Extending the hierarchy
- Easy to extend model vertically by adding more hidden layers or horizontally by considering conditional independencies of the latent variables belonging to the same layer
- **Deep multiple-output Gaussian processes**
	- After training model want the columns of $\boldsymbol{Y}$ that encode similar information will be assigned relevance weight vectors that are also similar
	- ARD (automatic relevance determination weights) parameters play a role similar to weights in a neural network while the latent variables are like the neurons which learn hierarchies of features 
- **Parameters and complexity**
	- Adding more layers to the hierarchy does not introduce many more model parameters
		- Introducing points and the parameters of $q(\boldsymbol{X})$ and $q(\boldsymbol{Z})$ are variational rather than model parameters
		- In addition the complexity of each generative GP mapping is $O(NM^2)$ not $O(N^3)$
## Conclusion
- Introduced framework for efficient Bayesian training of hierarchical Gaussian process mappings
	- Approximately marginalizes out the latent space
		- Allows for automatic structure discovery in the hierarchy
	- Successfully learned hierarchy of features for natural human motion and pixels of handwriting digits
- Deep hierarchy proposed can be used with inputs governing the top layer of the hierarchy 
	- Leads to powerful model based on GPs but not itself a GP
	- Wish to test for applications in: #future-work 
		- Multitask learning
		- Modelling non-stationary data
		- **Data involving jumps**
- #future-work need to test on very large datasets
	- Could use stochastic variational inference

> [!Cite]

Damianou, Andreas C., and Neil D. Lawrence. “Deep Gaussian Processes.” arXiv:1211.0358. Preprint, arXiv, March 23, 2013. [https://doi.org/10.48550/arXiv.1211.0358](https://doi.org/10.48550/arXiv.1211.0358).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Damianou, A]] 
**Author**: [[Files/Authors/Lawrence, N]] 


> **Year**: 2013  

> **Citekey**: damianouDeepGaussianProcesses2013 

> **itemType**: preprint 

> **DOI**:: 10.48550/arXiv.1211.0358   

  
> [!Abstract]

>

> In this paper we introduce deep Gaussian process (GP) models. Deep GPs are a deep belief network based on Gaussian process mappings. The data is modeled as the output of a multivariate GP. The inputs to that Gaussian process are then governed by another GP. A single layer model is equivalent to a standard GP or the GP latent variable model (GP-LVM). We perform inference in the model by approximate variational marginalization. This results in a strict lower bound on the marginal likelihood of the model which we use for model selection (number of layers and nodes per layer). Deep belief networks are typically applied to relatively large data sets using stochastic gradient descent for optimization. Our fully Bayesian treatment allows for the application of deep models even when data is scarce. Model selection by our variational bound shows that a five layer hierarchy is justified even when modelling a digit data set containing only 150 examples.

>.



# Annotations%% begin annotations %%





%% end annotations %%
