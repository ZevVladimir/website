
---
Title: Gaussian Process Regression for Astronomical Time Series 

tags: #paper

citekey: aigrainGaussianProcessRegression2023

collection:

- Papers Read

status: unread

dateread:

---
# Notes
## Abstract
- Review of [[Gaussian Process Model]] in astronomy giving introduction, theory, advice, and examples
## Main Paper
- Gaussian processes define a probability distribution over random functions
	- Model the covariance between pairs of samples from the process guided by physical domain knowledge and/or available data
- Computationally expensive: scales cubically with data set size
- **Definition of Gaussian Process Regression**
	- A stochastic process based on the Gaussian probability distribution
		- Describes a random variable extended to infinite number of dimensions
		- This means that you can define the probability distribution over functions
	- With sample $y={y_{i_{i=1,\dots,N}}}$
	- With inputs $x_{i}$ corresponding to sample $y_{i}$
	- Then the GP is $p(y)=N(\mathbf{m},\mathbf{K})$
		- $\mathbf{m}$ is the mean vector
			- $m_{i}=m(x_{i},\theta)$
		- $\mathbf{K}$ is the covariance matrix
			- $K_{ij}=k(x_{i},x_{j},\phi)$
		- $\theta,\phi$ are the hyperparameters of the GP
	- Never observe the unknown function that provided the data but instead infer a probability distribution from the noisy observations
- **Least squares**
	- Gaussian process can be thought of as a generalization of least-squares regression
	- In least squares want to minimize $\chi^2 \equiv \sum_{i=1}^N \dfrac{(y_{i}-m_{i})^2}{\sigma^2_{i}}$
		- $y=y_{i=1,\dots,N}$ is observation taken at time $t={t_{i}}$ with associated uncertainty $\sigma_{i}$
		- $m(t,\theta)$ is a model function controlled by parameters $\theta={\theta_{j=1,\dots,M}}$
	- Where the model comes from
		- Say observations are given by $y_{i}=m(t_{i,\theta})+\epsilon_{i}$
			- $\epsilon_{i}$ is the measurement error/noise
			- $\epsilon_{i}$ is drawn from a gaussian distribution 
			- $p(\epsilon_{i})=N(0,\sigma_{i}^2)\equiv \dfrac{1}{\sqrt{ 2\pi }\sigma_{i}}\exp(-\dfrac{\epsilon_{i}^2}{2\sigma_{i}^2})$
		- The likelihood of the ith observation is then: $L_{i}(\theta)\equiv p(y_{i}|\theta)=N(m_{i},\sigma_{i}^2)=\dfrac{1}{\sqrt{ 2\pi }\sigma_{i}}\exp[-\dfrac{(y_{i}-m_{i})^2}{2\sigma _{i}^2}]$
		- Since we assume the noise is uncorrelated the likelihood of the whole dataset is: $L(\theta)=p(\mathbf{y}|\theta)=\prod_{i=1}^NL_{i}$
		- Then $\ln L=const-0.5\chi^2$ where the constant only depends on $\sigma$
	- If you know the uncertainties maximizing L is equivalent to minimizing $\chi^2$
- **Link to Gaussian process regression**
	- Rewrite likelihood in matrix form: $L(\theta,\phi)= \dfrac{1}{\sqrt{ |2\pi \mathbf{K}| }}\exp(-\dfrac{1}{2}(\mathbf{y-m})^T\mathbf{K}^{-1}(\mathbf{y-m}))$
		- $\mathbf{K}$ is a purely diagonal (N,N) matrix with elements: $K_{ij}=\delta_{ij}\sigma_{i}^2$
			- The covariance matrix of the model
		- | | is the determinant
	- To make a GP make the covariance more flexible: $K_{ij}=k(t_{i},t_{j},\mathbf{\phi})+\delta_{ij}\sigma_{i}^2$
		- Where k is a covariance or kernel function
		- Can have nonzero off diagonal elements
	- Since the likelihood depends on the determinant of the covariance matrix the term (kernel function?) automatically penalizes more complex models
	- Kernel function encodes beliefs about the random elements of the model while the mean function encodes beliefs about the deterministic component
- **Inference with a GP**
	- First select kernel function with educated guess as to its hyper parameters
	- Compute the GP covariance matrix
	- Evaluate the likelihood of the model
	- Optimize with respect to hyperparameters (training the GP)
	- Then optimize the posterior distribution with respect to the hyperparameters
	- Can condition the GP on observations (conditioning the GP)
- **Making Predictions**
	- GP provides a full probability distribution for the function at any desired location(s) in the input domain
	- Given observations **y** at times **t** want to know $\mathbf{y}_{\star}$ at times $\mathbf{t}_{\star}$
		- Or $p(\mathbf{y_{\star}|y})$
	- This predictive distribution is also Gaussian so mean and covariance are given by
		- $\mathbf{f_{\star}}=\mathbf{m_{\star}}+\mathbf{K_{\star}^T K^{-1}}(y-m)$
		- $\mathbf{C_{\star}=K_{\star \star}-K_{\star}^T K^{-1} K_{\star}}$
	- GP is a linear predictor
	- Predictive mean for $t_{\star}$ is a linear combination of the observations: $f_{\star}=\mathbf{w^T y}$
		- $\mathbf{w=K^{-1} k_{\star}}$
		- $\mathbf{k_{\star}}= k(\mathbf{t},t_{\star},\mathbf{\phi})$
	- Can also linearly be written as a combination of covariance functions
	- Predictive covariance is independent of the data
	- Since $\mathbf{K}$  is positive semidefinite $\mathbf{K^{-1}}$ is as well. 
		- $\mathbf{k_{\star}^T K^{-1}}k_{\star}\geq 0$
		- $Var(f_{\star})\leq k(t_{\star},t_{\star})$
- **GP Covariance Functions**
	- Kernel function can be any positive scalar function giving rise to a positive semidefinite covariance matrix over the input domain
	- General practice if you can't find a physics based justification for the model is to take sums and products and/or other complex operations of commonly used kernel functions to create models that have the desired covariance structure and take the ones that work best
- **Multivariate GPs**
	- Have to be more careful with defining a sensible distance metric
	- Can fit a length scale parameter for each input dimension or include support for covariance between different input dimensions
- **Hyperparameter Inference**
	- To take uncertainty into account it is best to treat hyperparameters as parameters of the model
		- Fit for both $\theta$ the parameters of the mean model and for the hyperparameters $\phi$
	- Can use GP as a drop-in replacement anywhere chi-squared objective is currently being used
		- Barring computational costs and other complicating factors
- GP systematics models tend to produce exoplanet spectra with larger uncertainties than parametric ones
- **Quasi periodic Gaussian process models for stellar light curves**
	- Simple QP covariance function gives rise to functions which reproduce the light curves of rotating stars with evolving active regions remarkably well
	- QP kernel provides phenomenological and not physically motivated description of variability
		- But some of the parameters lend themselves to physical interpretation
		- Ex: period of the GP provides precise and accurate measure of stellar rotation period
		- QP does not give access to physical properties of spots
- **Stellar activity in RVs**
	- Effects of active regions on RV observations
		- Dark spots rotating on stellar surface distort profile of spectral lines (remove small contribution first from blue wing then line core then red wing of each spectral line)
		- In absence of active regions spectral lines of Sun-like stars display a net blue-shift due to granulation
			- In a [[Facula]] convection is suppressed so localized reduction in convective blue shift
	- Generally active regions produce QP RV variations modeled with the same QP GPs as light curves
		- But due to planetary signatures sharing the same timescales as activity signals there is a significant risk of overfitting
		- Compounded by sparse time sampling of ground-based observation
### Challenges, Pitfalls, and Solutions
#### Scalable Gaussian Process Inference
- Core computations are likelihood function and predictive distributions
	- Require the solution to a linear system whose dimension scales with the number of datapoints
	- Can use optimized linear algebra libraries 
	- Can also use acceleration with GPU
	- Still generally scales with number of data points $O(N^3)$ this limits datasets to less than a few hundred points
- Scalable methods
	- Approximate
		- Rely on algorithms from computational linear algebra
		- Construct low-rank/structured approximations to the covariance matrix
	- Exact on a restricted function space
		- Restricted to a particular class of covariance functions or data with a specific structure
		- Generally more used in astronomy due to structure of time-series data
		- Most widely used algorithms are based on SDEs (stochastic differential equations) and require data to be sortable
#### Overfitting
- Found that overfitting is overstated as a concern
- GP models are penalized with unspecific hyperparameters
- Prefer to explain as much of the data as possible with the mean model
- But this can still happen like when in RV planet searches the ephemeris of the planet is unknown
	- Here the hyperparameters are poorly constrained and so the highly multimodal nature of the posterior surface means that the standard Bayesian inference and model comparison techniques can be misleading
- To deal with this
	- Cross validation
	- Performing exhaustive injection-recovery tests
#### Model Misspecification
- Common example in Astro: use of Gaussian observation model when there are outliers in the dataset with extremely large residuals
	- These outliers can not be properly modeled as generated by Gaussian noise
- Common approach is to build a 2 component mixture model for the observations to infer which data points are outliers
	- Does not generalize to GP models 
	- Because when there is correlated noise the observation model is no longer independent over data points
- Common approach in astrophysics is to perform an initial iterative sigma clipping procedure
	- Fit the GP model to full dataset 
	- Compute predictive distribution at observed times
	- Remove data points with significantly low likelihood under this predictive distribution
	- Iterate over these steps until no more outliers are removed
- Some work has been done to use Student's-t processes as generalizations of GPs
	- Can model processes with heavier tails than GPs
	- May be more robust to model misspecification
	- But it is not a good model of a dataset with outliers because underlying functions have to be smooth
- Better option could be to use GP model for the true function with a per-observation Student's-t noise model
## Conclusion
- GPR is rooted in probability theory and so is readily interpretable and allows for quantification of confidence
- GP models are extremely flexible
	- Good to explain variability on all scales
	- But no longer can trust that a good fit is the correct one
- Future in RV time series
	- Development of more physically motivated GP models for stellar variability
	- Systematic use of GPR as part of detrending and detection pipelines for exoplanet transit and RV surveys
- General future
	- Problem of non-Gaussianity
		- Assume Gaussianity and is good enough in practice but isn't strictly correct
		- Problematic when extreme precision required on hyperparameters or data with significant outliers
	- Intelligent observation planning# Notes
## Abstract
- Review of [[Gaussian Process Model]] in astronomy giving introduction, theory, advice, and examples
## Main Paper
- Gaussian processes define a probability distribution over random functions
	- Model the covariance between pairs of samples from the process guided by physical domain knowledge and/or available data
- Computationally expensive: scales cubically with data set size
- **Definition of Gaussian Process Regression**
	- A stochastic process based on the Gaussian probability distribution
		- Describes a random variable extended to infinite number of dimensions
		- This means that you can define the probability distribution over functions
	- With sample $y={y_{i_{i=1,\dots,N}}}$
	- With inputs $x_{i}$ corresponding to sample $y_{i}$
	- Then the GP is $p(y)=N(\mathbf{m},\mathbf{K})$
		- $\mathbf{m}$ is the mean vector
			- $m_{i}=m(x_{i},\theta)$
		- $\mathbf{K}$ is the covariance matrix
			- $K_{ij}=k(x_{i},x_{j},\phi)$
		- $\theta,\phi$ are the hyperparameters of the GP
	- Never observe the unknown function that provided the data but instead infer a probability distribution from the noisy observations
- **Least squares**
	- Gaussian process can be thought of as a generalization of least-squares regression
	- In least squares want to minimize $\chi^2 \equiv \sum_{i=1}^N \dfrac{(y_{i}-m_{i})^2}{\sigma^2_{i}}$
		- $y=y_{i=1,\dots,N}$ is observation taken at time $t={t_{i}}$ with associated uncertainty $\sigma_{i}$
		- $m(t,\theta)$ is a model function controlled by parameters $\theta={\theta_{j=1,\dots,M}}$
	- Where the model comes from
		- Say observations are given by $y_{i}=m(t_{i,\theta})+\epsilon_{i}$
			- $\epsilon_{i}$ is the measurement error/noise
			- $\epsilon_{i}$ is drawn from a gaussian distribution 
			- $p(\epsilon_{i})=N(0,\sigma_{i}^2)\equiv \dfrac{1}{\sqrt{ 2\pi }\sigma_{i}}\exp(-\dfrac{\epsilon_{i}^2}{2\sigma_{i}^2})$
		- The likelihood of the ith observation is then: $L_{i}(\theta)\equiv p(y_{i}|\theta)=N(m_{i},\sigma_{i}^2)=\dfrac{1}{\sqrt{ 2\pi }\sigma_{i}}\exp[-\dfrac{(y_{i}-m_{i})^2}{2\sigma _{i}^2}]$
		- Since we assume the noise is uncorrelated the likelihood of the whole dataset is: $L(\theta)=p(\mathbf{y}|\theta)=\prod_{i=1}^NL_{i}$
		- Then $\ln L=const-0.5\chi^2$ where the constant only depends on $\sigma$
	- If you know the uncertainties maximizing L is equivalent to minimizing $\chi^2$
- **Link to Gaussian process regression**
	- Rewrite likelihood in matrix form: $L(\theta,\phi)= \dfrac{1}{\sqrt{ |2\pi \mathbf{K}| }}\exp(-\dfrac{1}{2}(\mathbf{y-m})^T\mathbf{K}^{-1}(\mathbf{y-m}))$
		- $\mathbf{K}$ is a purely diagonal (N,N) matrix with elements: $K_{ij}=\delta_{ij}\sigma_{i}^2$
			- The covariance matrix of the model
		- | | is the determinant
	- To make a GP make the covariance more flexible: $K_{ij}=k(t_{i},t_{j},\mathbf{\phi})+\delta_{ij}\sigma_{i}^2$
		- Where k is a covariance or kernel function
		- Can have nonzero off diagonal elements
	- Since the likelihood depends on the determinant of the covariance matrix the term (kernel function?) automatically penalizes more complex models
	- Kernel function encodes beliefs about the random elements of the model while the mean function encodes beliefs about the deterministic component
- **Inference with a GP**
	- First select kernel function with educated guess as to its hyper parameters
	- Compute the GP covariance matrix
	- Evaluate the likelihood of the model
	- Optimize with respect to hyperparameters (training the GP)
	- Then optimize the posterior distribution with respect to the hyperparameters
	- Can condition the GP on observations (conditioning the GP)
- **Making Predictions**
	- GP provides a full probability distribution for the function at any desired location(s) in the input domain
	- Given observations **y** at times **t** want to know $\mathbf{y}_{\star}$ at times $\mathbf{t}_{\star}$
		- Or $p(\mathbf{y_{\star}|y})$
	- This predictive distribution is also Gaussian so mean and covariance are given by
		- $\mathbf{f_{\star}}=\mathbf{m_{\star}}+\mathbf{K_{\star}^T K^{-1}}(y-m)$
		- $\mathbf{C_{\star}=K_{\star \star}-K_{\star}^T K^{-1} K_{\star}}$
	- GP is a linear predictor
	- Predictive mean for $t_{\star}$ is a linear combination of the observations: $f_{\star}=\mathbf{w^T y}$
		- $\mathbf{w=K^{-1} k_{\star}}$
		- $\mathbf{k_{\star}}= k(\mathbf{t},t_{\star},\mathbf{\phi})$
	- Can also linearly be written as a combination of covariance functions
	- Predictive covariance is independent of the data
	- Since $\mathbf{K}$  is positive semidefinite $\mathbf{K^{-1}}$ is as well. 
		- $\mathbf{k_{\star}^T K^{-1}}k_{\star}\geq 0$
		- $Var(f_{\star})\leq k(t_{\star},t_{\star})$
- **GP Covariance Functions**
	- Kernel function can be any positive scalar function giving rise to a positive semidefinite covariance matrix over the input domain
	- General practice if you can't find a physics based justification for the model is to take sums and products and/or other complex operations of commonly used kernel functions to create models that have the desired covariance structure and take the ones that work best
- **Multivariate GPs**
	- Have to be more careful with defining a sensible distance metric
	- Can fit a length scale parameter for each input dimension or include support for covariance between different input dimensions
- **Hyperparameter Inference**
	- To take uncertainty into account it is best to treat hyperparameters as parameters of the model
		- Fit for both $\theta$ the parameters of the mean model and for the hyperparameters $\phi$
	- Can use GP as a drop-in replacement anywhere chi-squared objective is currently being used
		- Barring computational costs and other complicating factors
- GP systematics models tend to produce exoplanet spectra with larger uncertainties than parametric ones
- **Quasi periodic Gaussian process models for stellar light curves**
	- Simple QP covariance function gives rise to functions which reproduce the light curves of rotating stars with evolving active regions remarkably well
	- QP kernel provides phenomenological and not physically motivated description of variability
		- But some of the parameters lend themselves to physical interpretation
		- Ex: period of the GP provides precise and accurate measure of stellar rotation period
		- QP does not give access to physical properties of spots
- **Stellar activity in RVs**
	- Effects of active regions on RV observations
		- Dark spots rotating on stellar surface distort profile of spectral lines (remove small contribution first from blue wing then line core then red wing of each spectral line)
		- In absence of active regions spectral lines of Sun-like stars display a net blue-shift due to granulation
			- In a [[Facula]] convection is suppressed so localized reduction in convective blue shift
	- Generally active regions produce QP RV variations modeled with the same QP GPs as light curves
		- But due to planetary signatures sharing the same timescales as activity signals there is a significant risk of overfitting
		- Compounded by sparse time sampling of ground-based observation
### Challenges, Pitfalls, and Solutions
#### Scalable Gaussian Process Inference
- Core computations are likelihood function and predictive distributions
	- Require the solution to a linear system whose dimension scales with the number of datapoints
	- Can use optimized linear algebra libraries 
	- Can also use acceleration with GPU
	- Still generally scales with number of data points $O(N^3)$ this limits datasets to less than a few hundred points
- Scalable methods
	- Approximate
		- Rely on algorithms from computational linear algebra
		- Construct low-rank/structured approximations to the covariance matrix
	- Exact on a restricted function space
		- Restricted to a particular class of covariance functions or data with a specific structure
		- Generally more used in astronomy due to structure of time-series data
		- Most widely used algorithms are based on SDEs (stochastic differential equations) and require data to be sortable
#### Overfitting
- Found that overfitting is overstated as a concern
- GP models are penalized with unspecific hyperparameters
- Prefer to explain as much of the data as possible with the mean model
- But this can still happen like when in RV planet searches the ephemeris of the planet is unknown
	- Here the hyperparameters are poorly constrained and so the highly multimodal nature of the posterior surface means that the standard Bayesian inference and model comparison techniques can be misleading
- To deal with this
	- Cross validation
	- Performing exhaustive injection-recovery tests
#### Model Misspecification
- Common example in Astro: use of Gaussian observation model when there are outliers in the dataset with extremely large residuals
	- These outliers can not be properly modeled as generated by Gaussian noise
- Common approach is to build a 2 component mixture model for the observations to infer which data points are outliers
	- Does not generalize to GP models 
	- Because when there is correlated noise the observation model is no longer independent over data points
- Common approach in astrophysics is to perform an initial iterative sigma clipping procedure
	- Fit the GP model to full dataset 
	- Compute predictive distribution at observed times
	- Remove data points with significantly low likelihood under this predictive distribution
	- Iterate over these steps until no more outliers are removed
- Some work has been done to use Student's-t processes as generalizations of GPs
	- Can model processes with heavier tails than GPs
	- May be more robust to model misspecification
	- But it is not a good model of a dataset with outliers because underlying functions have to be smooth
- Better option could be to use GP model for the true function with a per-observation Student's-t noise model
## Conclusion
- GPR is rooted in probability theory and so is readily interpretable and allows for quantification of confidence
- GP models are extremely flexible
	- Good to explain variability on all scales
	- But no longer can trust that a good fit is the correct one
- Future in RV time series
	- Development of more physically motivated GP models for stellar variability
	- Systematic use of GPR as part of detrending and detection pipelines for exoplanet transit and RV surveys
- General future
	- Problem of non-Gaussianity
		- Assume Gaussianity and is good enough in practice but isn't strictly correct
		- Problematic when extreme precision required on hyperparameters or data with significant outliers
	- Intelligent observation planning


> [!Cite]

Aigrain, Suzanne, and Daniel Foreman-Mackey. “Gaussian Process Regression for Astronomical Time Series.” _Annual Review of Astronomy and Astrophysics_ 61, no. Volume 61, 2023 (2023): 329–71. [https://doi.org/10.1146/annurev-astro-052920-103508](https://doi.org/10.1146/annurev-astro-052920-103508).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Aigrain, S]] 
**Author**: [[Files/Authors/Foreman-Mackey, D]] 


> **Year**: 2023  

> **Citekey**: aigrainGaussianProcessRegression2023 

> **itemType**: journalArticle 

> **Journal**: *Annual Review of Astronomy and Astrophysics* 

> **Volume**: 61 

> **Issue**: Volume 61, 2023  

> **Pages**: 329-371 

> **DOI**:: 10.1146/annurev-astro-052920-103508   

  
> [!Abstract]

>

> The past two decades have seen a major expansion in the availability, size, and precision of time-domain data sets in astronomy. Owing to their unique combination of flexibility, mathematical simplicity, and comparative robustness, Gaussian processes (GPs) have emerged recently as the solution of choice to model stochastic signals in such data sets. In this review, we provide a brief introduction to the emergence of GPs in astronomy, present the underlying mathematical theory, and give practical advice considering the key modeling choices involved in GP regression. We then review applications of GPs to time-domain data sets in the astrophysical literature so far, from exoplanets to active galactic nuclei, showcasing the power and flexibility of the method. We provide worked examples using simulated data, with links to the source code; discuss the problem of computational cost and scalability; and give a snapshot of the current ecosystem of open-source GP software packages. In summary: ▪ GP regression is a conceptually simple but statistically principled and powerful tool for the analysis of astronomical time series. ▪ It is already widely used in some subfields, such as exoplanets, and gaining traction in many others, such as optical transients. ▪ Driven by further algorithmic and conceptual advances, we expect that GPs will continue to be an important tool for robust and interpretable time-domain astronomy for many years to come.

>.



# Annotations%% begin annotations %%





%% end annotations %%
