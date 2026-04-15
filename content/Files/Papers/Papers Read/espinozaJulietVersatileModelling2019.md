---
Title: Juliet a versatile modelling tool for transiting and non-transiting exoplanetary systems 
tags: #Astrophysics-Earth-and-Planetary-Astrophysics  #GP-Model #RV-analysis 

citekey: espinozaJulietVersatileModelling2019

collection:

- Papers to Read

status: unread

dateread:
---
# Notes
## Abstract
- Present $\texttt{juliet}$ used for analysis of transits, radial velocities, or both
	- Model transits, radial velocities, and stochastic processes (here with [[Gaussian Process Model|Gaussian process]])
- Use nested sampling algorithms
	- Perform thorough sampling of parameter space
	- Perform model comparison via bayesian evidences
## Main Paper
### Introduction
- How $\texttt{juliet}$ differentiates itself
	- There are seven open-source tools that can perform both photometric and RV analysis in order to constrain the physical and orbital parameters of a transiting exoplanet
		- $\texttt{EXOFAST}$ is the most versatile
			- Fit photometry and RVs from different instruments
			- Perform modeling of stellar properties jointly
			- Can't account for different noise processes in both photometry and RVs
		- Further exploration of alternatives in text
		- Shared disadvantage: none provide tools to perform formal model comparison between different models
	- No general tool available that allows for incorporation of transits and RVs from data from different instruments
	- Want a tool that can incorporate both linear and GP regression in both transits and RVs, take into account multiple-planet systems, provide quantitative measure of evidence of different models
### Data Modeling within $\texttt{JULIET}$
- Introduce probabilistic models $\texttt{juliet}$ assumes when performing photometric/RV fits to data
- For both consider common model with each data point $y(t_{i},l)$ at time $t_{i,l}$ 
	- $i$ index for each instrument
	- $l$ index identifying datapoint in given instrument
- $y(t_{i},l)\sim \mathcal{M}_{i}(t_{i},l)+\mathrm{LM}_{i}(t_{i},l)+\epsilon_{i}(t_{i},l)$
	- $\mathcal{M}_{i}(t_{i},l)$ particular photometric or RV model for instrument $i$. 
		- Depends on physical planetary parameters of the system being modeled and instrumental parameters
	- $\mathrm{LM}_{i}$ is a linear model for instrument $i$ with $\mathrm{LM}_{i}(t_{i},l)=\sum_{n=0}^{p_{i}}x_{n,i}(t_{i},l)\theta_{n,i}^{\mathrm{LM}}$
		- $x_{n,i}(t_{i},l)$ are the $p_{i}+1$ linear regressors at time $t_{i,l}$ for instrument $i$ 
		- $\theta_{n,i}^{\mathrm{LM}}$ are coefficients of the regressors
	- $\epsilon_{i}(t_{i},l)$ is a zero-mean noise term
		- Can model with GPs
		- Can be individual for each instrument or common to all
- Given vector of physical parameters o the planets that define the photometric or RV models $\vec{\theta}_{\mathcal{P}}$ $\texttt{juliet}$ can handle 2 types of possible models
	- Instrument-by-instrument model
		- Log-likelihood of each instrument is assumed to be different
		- Full log-likelihood is easily separable as sum of log-likelihoods for each instrument
		- Total log-likelihood of model $\mathcal{D}_{I}$
			- With vector that defines each instrumental model $\vec{\theta}_{i}$ (with coefficients $\theta_{n,i}^{\mathrm{LM}}$ and hyperparameters of chosen noise model for instrument $i$)
			- With vector $\vec{y}_{i}=(y(t_{i,0}),y(t_{i,1}),\dots,y(t_{i,N_{i}}))^T$
			- $\ln p(\mathcal{D}_{I}|\vec{\theta}_{\mathcal{P}},\vec{\theta}_{0},\vec{\theta}_{1},\dots)=\sum_{i=0}\ln p(\vec{y}_{i}|\vec{\theta}_{\mathcal{P}},\vec{\theta}_{i})$
			- Assume likelihood for each instrument follows likelihood of $N_{i}$ dimensional multivariate Gaussian
				- $\ln p(\vec{y}_{i}|\vec{\theta}_{\mathcal{P}},\vec{\theta}_{i})=-\dfrac{1}{2}\left[ N_{i}\ln2\pi+\ln |\Sigma_{i}|\vec{r}_{i}^T\Sigma_{i}^{-1}\vec{r}_{i} \right]$
				- Each element of $\vec{r}_{i}$: $r_{i,l}=y_{i}(t_{l},i)-\mathcal{M}_{i}(t_{i},l)-\mathrm{LM}_{i}(t_{l},i)$
	- Global model
		- Noise model for either the whole photometric or RV dataset is common to all instruments
		- $\epsilon_{i}(t_{i,l})\equiv\epsilon(t_{i,l})+\bar{\epsilon}_{i}(t_{i,l})$
			- $\bar{\epsilon}_{i}(t_{i,l})\sim N(0,\sigma_{w,i}^{2}+\sigma_{t_{i,l}}^{2})$
			- $N(\mu,\sigma^{2})$ is a normal distribution with mean $\mu$ and variance $\sigma^{2}$
			- $\sigma^{2}_{t_{i,l}}$ are formal uncertainties for datapoint $y(t_{i,l})$
			- $\sigma_{w,i}^{2}$ is a jitter term that can be defined/fitted for instrument $i$
		- Full dataset $\mathcal{D}_{I}$ is modeled together without specific noise models on each instrument
			- Total log-likelihood then: $\ln p(\vec{y},\vec{\theta})=-\dfrac{1}{2}\left[ N_{I}\ln2\pi+\ln |\Sigma_{I}|+\vec{r}^T\Sigma_{I}^{-1}\vec{r} \right]$
				- $N_{I}=\sum N_{i}$
				- Elements of $\vec{r}$, $r(t_{i,l})=y(t_{i,l})-\mathcal{M}_{i}(t_{i,l})=\mathrm{LM}_{i}(t_{i,l})$
				- Elements of covariance matrix $\Sigma_{I}$, $\Sigma_{I}(t_{i,l},t_{j,m})=k(x_{i,l},x_{j,m})+(\sigma_{w,i}^{2}+\sigma_{t_{i,l}}^{2})\delta_{t_{i,l},t_{j,m}}$
					- $\delta_{t_{i,l},t_{j,m}}$ is a Kronecker's delta
					- $k(\cdot)$ being either zero for pure white noise or equal to defined kernel
	- Physical difference in models
		- Instrument-by-instrument assumes each instrument provides distinct realization of a noise process
			- Even if they have same hyperparameters they would come from *different realizations* of the same process
		- Global model assumes that not only all instruments share the same hyperparameters of the selected noise model it comes from the *same realization* of the process
		- Global model is very useful for observations of physical processes with the same instrument over different seasons
		- Instrument-by-instrument is useful for observations of instruments with different bandpasses/different underlying noise processes
#### Photometric Modeling
- Model for photometry of each instrument, $\mathcal{M}_{i}(t_{i,l})=\left[ \mathcal{T}_{i}(t_{i,l})D_{i}+(1-D_{i}) \right]\left( \dfrac{1}{1+D_{i}M_{i}} \right)$
	- $\mathcal{T}_{i}(t_{i,l})$ is the full transit model including any number of $N_{p}^{\mathcal{T}}$ planets in the system for instrument $i$
	- $D_{i}$ is a dilution factor for the given instrument
	- $M_{i}$ is the mean offset out-of-transit flux
- Motivation for model
	- Precise photometric instruments (TESS) will provide photometry contaminated by flux of nearby sources due to large pixel size
		- This will contaminate "true" transit parameters
	- Predicted "self-dilution" of a planet due to light from the exoplanet's night-side diluting transit signature
		- $F_{T}$ is the out-of-transit flux of the target star in a given passband
		- $\sum_{n}F_{n}$ is the total flux of any $n$ other sources in the photometric aperture used to obtain the observed flux of the target as a function of time $F_{O}(t)$
		- $F_{O}(t)=\mathcal{T}(t)F_{T}+\sum_{n}F_{n}$
			- $\mathcal{T}(t)$ is 1 for out-of-transit times $t$ and $<1$ at in-transit times
		- Physical out-of-transit flux is then $F_{T}+\sum_{n}F_{n}$
		- Assume *estimated* out-of-transit flux is $F_{T}+\sum_{n}F_{n}+E$ 
			- $E$ is a real constant for the offset flux from the real out-of-transit flux
		- Then relative flux: $\hat{F}_{O}(t)=F_{O}(t)=\left[ \mathcal{T}(t)D+(1-D) \right]\left( \dfrac{1}{1+D(E/F_{T})} \right)$
			- $D=\dfrac{1}{1+\sum_{n}F_{n}/F_{T}}$
			- The smaller $D_{i}$ is the larger the dilution by instrument $i$ is
	- Transit model $\mathcal{T}_{i}(t_{i,l})$ is generated with $\texttt{batman}$
		- Full transit model obtained by subtracting 1 to the transit model of each of the $N_{p}^{{\mathcal{T}}}$ planets
			- This gives percentage of light occulted by all planets
		- Then add 1 to the result to have a normalized total transit lightcurve
		- Allows for fitting multi-planetary transiting systems
		- But not able to model planet-planet transits 
		- Within $\texttt{juliet}$ parametrize eccentricity and [[Argument of periastron]]
			- Directly
			- Use first and second Laplace parameters $\mathcal{E}_{1}=e\sin\omega$, $\mathcal{E}_{2}=e\cos\omega$
				- With eccentricity $e=\sqrt{ \mathcal{E}_{1}^{2}+\mathcal{E}_{2}^{2}}$
				- Argument of periastron: $\omega =\mathrm{atan2}(\mathcal{E}_{1},\mathcal{E}_{2})$
			- Via transformations $\mathcal{S}_{1}=\sqrt{ e }\sin\omega$ and $\mathcal{S}_{2}=\sqrt{ e }\cos\omega$
				- $e=\mathcal{S}_{1}^{2}+\mathcal{S}_{2}^{2}$
				- $\omega=\mathrm{atan2}(\mathcal{S}_{1},\mathcal{S}_{2})$
		- Transform impact parameter to get inclination of orbit for $\texttt{batman}$
			- $i_{p}=\arccos \left[ \dfrac{b}{a/R_{*}}\left( \dfrac{1+e\sin\omega}{1-e^{2}} \right) \right]$
	- For limb darkening do not use direct parametrization
		- Whenever possible fit for the limb-darkening coefficients
		- For two-parameter laws use parametrization with two parameters $q_{i,1}$ and $q_{i,2}$ are defined between 0 and 1 sampled
			- Use transformations to go from $(q_{i,1},q_{i,2})$ plane to limb darkening coefficients $(u_{i,1},u_{i,2})$
		- Use one set of limb-darkening coefficients unique to each instrument and common among different planets observed with the same instrument
#### Radial-velocity modeling
- Mode used to model RV for each instrument is $\mathcal{M}_{i}(t_{i,l})=\mathcal{K}(t_{i,l})+\mu_{i}+Q(t'_{i,l})^{2}At_{i,l}'+B$
	- $\mathcal{K}(t_{i,l})$ is the full Keplerian signal including any number of $N_{p}^{\mathrm{RV}}$ planets
	- $\mu_{i}$ instrument dependent systemic velocity
	- $Q,\;A,\;B$ define optional quadratic and linear terms and intercept for long term trend present in data
	- Use $\texttt{radvel}$ to compute model of $\mathcal{K}(t_{i,l})$
	- Parameters to define model for Keplerian of planet $k \in [1,\dots,N_{p}^{\mathrm{RV}}$ 
		- Semi amplitude of the variation $K_{k}$
		- Period of orbit $P_{k}$
		- Time of transit center $t_{0,k}$
		- Argument of periastron passage $\omega_{k}$
		- Eccentricity of orbit $e_{k}$
#### Noise models supported within $\texttt{juliet}$
- Simplest noise model is white-noise with $\epsilon_{i}(t_{i,l})\sim N(0,\sigma_{w,i}^{2}+\sigma_{t_{i,l}}^{2})$
	- $\sigma_{w,i}$ is a jitter term
	- $\sigma_{t_{i,l}}$ is the error bar of each data point
	- Thus covariance matrix $\Sigma_{i}$ is diagonal matrix with $\sigma_{w,i}^{2}+\sigma_{t_{i,l}}^{2}$
- If assumed as a multi-dimensional GP then $\texttt{juliet}$ assumes $\epsilon_{i}(t_{i,l})\sim \mathcal{GP}\left( 0,\Sigma_{i}(\boldsymbol{X}_{i}) \right)$
	- $\mathcal{GP}\left( \vec{0},\Sigma_{i}(\boldsymbol{X}_{i}) \right)$ is a multidimensional GP
	- $\boldsymbol{X}_{i}$ is a $D_{i}\times N_{i}$ matrix
		- $D_{i}$ external parameter defining GP kernel for instrument $i$
		- Which defines the $N_{i}\times N_{i}$ covariance matrix of process $\Sigma_{i}$
		- Elements of covariance matrix $\Sigma_{l,m}=k_{i}(\vec{x}_{l},\vec{x}_{m})+(\sigma_{w,i}^{2}+\sigma_{t_{i,l}}^{2})\delta_{l,m}$
			- $\sigma_{w,i}$ and $\sigma_{t_{i,l}}$ are the same as for white noise
			- $\delta_{l,m}$ is Kronecker delta
			- $k_{i}(\vec{x}_{l},\vec{x}_{m})$ is the kernel of GP for instrument $i$
				- $\vec{x}_{l}$ and $\vec{x}_{m}$ are column vectors of columns $l$ and $m$ of the $\boldsymbol{X}$ matrix
		- Supports many kernels
			- Flexible squared exponential kernel
			- Exponential which converges to Matern 3/2
			- [[Quasi-periodic kernel]]
#### Stellar Density Modeling
- Scaled semi-major axis and orbital period (obtained from transiting exoplanet light curves) provide the stellar density of the star from Kepler's third law $\hat{\rho}_{*}=[(3\pi/(GP^{2}_{k}))](a_{k}/R_{*})^{3}$
	- G is the gravitational constant
	- Using $M=\hat{\rho}_{*} \dfrac{4}{3}\pi R_{*}^{3}$
- Now with better precision can use estimated stellar density to constrain $a_{k}/R_{*}$ and $P_{k}$ of transiting planets observed in transiting lightcurves
	- Periods are usually constrained by periodicity of transits so stellar density constrains $a_{k}/R_{*}$ for transiting planets
	- Parametrizing in this way allows for the breaking of degeneracies in the transit modeling for a precise estimation of the [[Impact parameter]]
- Can incorporate measured stellar density in two ways if one transiting planet and one way if multiple
	- One transiting planet
		- $y^{\mathrm{SD}}\sim \hat{\rho}_{*}+\epsilon_{\mathrm{SD}}$
			- $y^{\mathrm{SD}}$ is a separate dataset from photometry and RVs
			- $\rho_{*}$ is the stellar density with error $\sigma_{\rho_{*}}$
			- $\epsilon_{\mathrm{SD}}\sim N(0,\sigma_{\rho_{*}})$ 
		- Log-likelihood of parameters $\vec{\theta}=(a/R_{*},P)^T$ is the logarithm of the probability ensity function of a gaussian distribution with $\mu=(\rho_{*}-\hat{\rho_{*}})$ and variance $\sigma_{\rho_{*}}^{2}$
	- $k$ transiting planets
		- Each planet would impose a different stellar desnity through $a_{k}/R_{*}$ when the star can only have one
		- Can fit directly for stellar density which then with $P_{k}$ gives $a_{k}/R_{*)}$
#### Dynamic, Importance and/or Nested Sampling
- Performing posterior sampling to 
	- Obtain posterior distribution of $\vec{\theta}$ given data $\mathcal{D},p(\vec{\theta},\mathcal{D})$ 
	- Estimate bayesian evidences $Z_{i}=p(\mathcal{D}|M_{i})$ for model comparison of each model $M_{i}$ with posterior odds $p(M_{i}|\mathcal{D})/p(M_{j}|\mathcal{D})=(Z_{i}/Z_{j})p(M_{i})/p(M_{j})$
- Three sampling schemes
	- **Nested sampling**
		- Estimate the bayesian evidence of a model, $Z$
		- Note that defining the "prior volume": $X(\lambda)=\int_{\mathcal{L}(\vec{\theta})>\lambda}p(\vec{\theta})d\theta_{1}d\theta_{2}\dots d\theta_{N}=\int_{0}^1 \mathcal{L}(X)dX$
		- MC sampling methods are used to sequentially shrink prior volume by sampling points from prior $p(\vec{\theta})$
		- Sample $N_{\mathrm{live}}$ points from prior
		- Sequentially replace in each iteration the live-point with the lowest likelihood with a new live-point with a higher one
			- Update bayesian evidence by difference $\Delta Z$
			- Stopping/convergence defined by evidence tolerance $\Delta z$
	- **Importance nested sampling**
		- Instead of rejecting all samples that don't have a larger likelihood than the lowest likelihood sampled in the current live-point sample, use all sampled points from prior assigning different weights to each value
	- Drawback of nested sampling algorithm
		- Focused on evidence calculations so posterior distribution of parameters $p(\vec{\theta}|\mathcal{D})$ is only a by-product
		- So not necessarily exploring parameter space as efficiently as possible
		- This is because $N_{\mathrm{live}}$ is kept constant so prior volume shrinking rate is constant
	- **Dynamic nested sampling**
		- Can dynamically change $N_{\mathrm{live}}$
		- This makes defining the convergence criteria more complicated
### Discussion
- $\texttt{juliet}$ flexible and efficient at exploring wide parameter spaces and providing quantitative measures of evidence of adding/or not extra parameters/models on the fits
#### GP hyperparameter sharing within $\texttt{juliet}$
- Hyperparameters of kernels can be shared not only with a GP in the RV dataset but also with photometric datasets
	- Can be used to estimate rotation period of star using photometry from different ground based instruments
#### $\texttt{juliet}$ as a planet detection tool
- Versatility of $\texttt{juliet}$ in kernel types for modeling stellar activity helps to find planets
- Can handle different instruments and transits providing better constraints
- #future-work compare against other simpler and faster methods
## Conclusion
- Present $\texttt{juliet}$ which performs efficient fitting of photometry, RV, or both
- Show $\texttt{juliet}$ is versatile for multiple-instruments, dilutions, GPs, and multi-planetary sstems
- #future-work 
	- Incorporate support for secondary eclipses with $\texttt{batman}$
	- Model photometric effects like $\texttt{starry}$ and $\texttt{spiderman}$
	- Incorporate GP kernels on request
		- Relatively to add with $\texttt{george}$ and $\texttt{celerite}$
## Questions
- 

> [!Cite]

Espinoza, Néstor, Diana Kossakowski, and Rafael Brahm. “Juliet: A Versatile Modelling Tool for Transiting and Non-Transiting Exoplanetary Systems.” _Monthly Notices of the Royal Astronomical Society_ 490, no. 2 (2019): 2262–83. [https://doi.org/10.1093/mnras/stz2688](https://doi.org/10.1093/mnras/stz2688).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Espinoza, Néstor]] 
**Author**: [[Files/Authors/Kossakowski, D]] 
**Author**: [[Files/Authors/Brahm, R]] 


> **Year**: 2019  

> **Citekey**: espinozaJulietVersatileModelling2019 

> **itemType**: journalArticle 

> **Journal**: *Monthly Notices of the Royal Astronomical Society* 

> **Volume**: 490 

> **Issue**: 2  

> **Pages**: 2262-2283 

> **DOI**:: 10.1093/mnras/stz2688   

  
> [!Abstract]

>

> Here we present juliet, a versatile tool for the analysis of transits, radial-velocities, or both. juliet is built over many available tools for the modelling of transits, radial-velocities and stochastic processes (here modelled as Gaussian Processes; GPs) in order to deliver a tool/wrapper which can be used for the analysis of transit photometry and radial-velocity measurements from multiple instruments at the same time, using nested sampling algorithms which allows it to not only perform a thorough sampling of the parameter space, but also to perform model comparison via bayesian evidences. In addition, juliet allows to fit transiting and non-transiting multi-planetary systems, and to fit GPs which might share hyperparameters between the photometry and radial-velocities simultaneously (e.g., stellar rotation periods), which might be useful for disentangling stellar activity in radial-velocity measurements. Nested Sampling, Importance Nested Sampling and Dynamic Nested Sampling is performed with publicly available codes which in turn give juliet multi-threading options, allowing it to scale the computing time of complicated multi-dimensional problems. We make juliet publicly available via GitHub.

>.



# Annotations%% begin annotations %%





%% end annotations %%
