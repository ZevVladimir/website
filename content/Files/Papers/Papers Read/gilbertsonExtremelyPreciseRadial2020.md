
---
**Title**:: Toward Extremely Precise Radial Velocities. II. A Tool for Using Multivariate Gaussian Processes to Model Stellar Activity 

tags: #GP-Model #Astrophysics-Solar-and-Stellar-Astrophysics #Stellar-Activity #RV #Astrophysics-Earth-and-Planetary-Astrophysics 

citekey: gilbertsonExtremelyPreciseRadial2020

collection:

- Papers to Read

status: unread

dateread:

---
# Notes
## Abstract
- Present flexible and computationally efficient package GPLinearODEMaker.jl 
	- Models multivariate time series
	- Uses a linear combination of univariate [[Gaussian Process Model|GP]]s and their derivatives
- Fit measurements of a simulated active solar spectra time series with many evolving starspots
- With the package can explore the effect of different kernels
- Find that local kernels could increase the sensitivity and precision of Doppler planet searches relative to the [[Quasi-periodic kernel]]
## Main Paper
### Introduction
- Stellar variability leads to potential false claims of exoplanet discovery due to their periods overlapping with range of potential planet orbital periods
- Processes that contribute to stellar variability
	- Pulsations
	- [[Stellar Granulation]]
	- Star spots
	- [[Facula]]
	- Long term magnetic cycles
- Present their GLOM package which builds on [[rajpaulGaussianProcessFramework2015]] and [[jonesImprovingExoplanetDetection2020]]
	- But design it in a general way as to be applicable to other astronomy tasks and potentially other fields with time series
### Statistical Model
- Provides likelihood for modeling multivariate time series as linear combinations of univariate GPs and their derivatives
#### [[Gaussian process regression model|Gaussian Process Regression]]
- GPR is particularly good for modeling correlated noise when underlying noise model is poorly understood or very complex
	- Doppler exoplanet surveys typically have residuals greater than expected from photon noise
	- Before observations were far enough apart could model excess scatter (jitter) as uncorrelated noise
	- Modern observations have closely spaced observations resulting in more coherent signals of stellar activity so a GP is a better model
#### Multivariate GPR
- GPs are generally used to model a single output
- If the output is expected to be correlated then can build a multivariate GP based on the relationship between the various outputs
	- Simplest to assume independent GPs for each output
		- Likely to result in model that is more flexible than appropriate
		- Likely to result in too broad posterior distributions and reduced marginal likelihood
	- Or can represent each output as a linear function of a smaller number of univariate GPs called cokriging
		- But a simple linear combination is unlikely to be suited for modeling stellar variability 
		- This is mainly due to the rotationally linked phenomena
	- Can also construct GP using linear operations (e.g. differentiation and convolution) on latent GPs
		- GLOM considers each GP output to be proportional to a linear combination of a latent GP and its time derivatives
		- This means observations of each GP output contribute to learning the behavior of one shared latent GP
	- There is a temporal lag between traditional activity indicators and perturbations to the apparent RV due to stellar activity
#### GLOM Model Description
- Uses a class of GP models that express each observable quantity $q_{i}(t)$ as a linear combination of a single GP $X(t)$ and its derivative
	$$
	\begin{align}
	q_{0}(t)&=m_{0}(t)+a_{00}X(t)+a_{01}\dot{X}(t)+a_{02}\ddot{X}(t)+\epsilon_{0}(t) \\
	q_{l}(t)&=m_{l}(t)+a_{l0}X(t)+a_{l1}\dot{X(t)}+a_{l2}\ddot{X}(t)+\epsilon_{l}(t)
	\end{align}
	$$
	- $m_{i}(t)$ is the mean function for each $q_{i}(t)$ 
	- $a_{ij}$ are the hyperparameters that control the relative amplitude of the GP components
	- $X(t)$ is the latent GP that links the outputs required to be at least twice differentiable
	- $\epsilon_{i}$ is the measured uncertainty, here are assumed to be white noise
- GLOM requires hyperparameters $\theta=(\phi,a_{00},\dots,a_{l2})$
	- $\phi$ is the set of hyperparameters for the chosen kernel function controlling $X(t)$
#### Optimization and Marginalization with the GLOM Model
- To find the GP model most compliant with data ($\boldsymbol{x}$) and potentially the prior beliefs $p(\theta)$ is found by either:
	- Maximizing the log likelihood of a GP: $\ln(p(\theta|\boldsymbol{x}))=l(\theta|\boldsymbol{x})$
	- Maximizing the log unnormalized posterior $l(\theta|\boldsymbol{x})+\ln(p(\theta))$ when priors have been elicited
- The log likelihood $l$ given by hyperparameters $\theta$, mean function $\boldsymbol{\mu}$ and data $\boldsymbol{x}$ is equivalent to evaluating the probability density function of a multivariate distribution with mean $\boldsymbol{\mu}$ and covariance $\Sigma$
	- $l(\theta|\boldsymbol{x})=-\dfrac{1}{2}(N\log(2\pi)+\log(|\Sigma|))+(\boldsymbol{x-\mu})^T\Sigma^{-1}(\boldsymbol{x-\mu})$
	- $N$ is the dimensionality of the normal distribution (here $N=N_{\mathrm{meas}}=l\times N_{\mathrm{obs}}$)
	- $\Sigma=\Sigma_{\mathrm{GP}}+\Sigma_{\epsilon}$ with $\Sigma_{GP}$ being the covariance of the GP components and $\Sigma_{\epsilon}$ being the covariance of the measurement errors
	- $\boldsymbol{\mu}$ is constructed from the mean functions of each $q_{i}$ with $\boldsymbol{\mu}=\left\{ m_{0}(t(0)),m_{1}(t_{0})\dots,m_{l}(t_{0}),m_{0}(t_{1}),m_{1}(t_{1})\dots,m_{l}(t_{l})\dots,m_{0}(t_{N_{\mathrm{obs}}}),m_{1}(t_{N_{\mathrm{obs}}}),\dots,m_{l}(t_{N_{\mathrm{obs}}}) \right\}$
- Find that the estimation of the best fit of $\theta$ is more efficient using the gradient of likelihood (see text)
- Additionally optimization converges faster when using Hessian information (see text) 
	- The analytical Hessian allows to distiguish between local maxima and saddle points
	- Also can be used to estimate the Bayesian evidence for a model
### Example Application of GLOM to EPRV Exoplanet Surveys
#### Context for application
- **Analysis of Doppler Exoplanet Surveys in the absence of Stellar Variability**
	- Apparent Doppler shifts are generally estimated by maximizing a [[Cross-Correlation Function]] between the observations and either a high S/N template spectrum or a CCF "mask"
		- Traditional CCF approach is finding the Doppler shift for the template that matches the $\chi^{2}$ for comparing observations to the Doppler-shifted template
		- CCF breaks down since the intrinsic stellar spectrum is changing
	- To characterize exoplanets the time series of measured RVs are modeled as a combination of
		- True planetary signals
		- Uncorrelated measurement noise
		- (Potentially) contribution from stellar activity
	- This process is broken up into:
		- Global search stage (brute force search)
		- Local exploration stage at each potential orbital period
		- For multiplanet systems generally iterate the global search stage to find approximate orbital periods for all detectable planets
- **Challenge of Stellar Variability**
	- Can appear like planetary signals
	- Starspots:
		- On the side of the star moving towards the observer the amount of blueshifted light decreases creating a distortion in the spectral lines
		- This makes the star look more redshifted
		- As the spot rotates less blueshifted light is obscured while more redshifted light is
		- This creates a periodic Doppler shift
	- Magnetic fields from starspots inhibit strength of convective blueshift
	- Other stellar activity exacerbate this issue
- **Distinguishing Planetary Perturbations and Stellar Variability**
	- In principle subtle differences in how planets and stellar activity affect spectra can be used
		- Planets are strictly periodic with a uniform impact
		- Stellar variability is fundamentally transient and wavelength-dependent
	- Traditionally when analyzing RVs initially assume stellar variability is not significantly affecting the spectra
### Example model
- Use multivariate GP model based on performance in detecting planets in the presence of a single nonevolving spot:
- $$
\begin{align}
\widehat{RV}(t)&=m_{0}(t)+a_{00}X(t)+a_{01}\dot{X}(t)+\epsilon_{0} \\
\widehat{DPCA_{1}}(t)&=m_{1}(t)+a_{10}X(t)+a_{12}\ddot{X}(t)+\epsilon_{1} \\
\widehat{DPCA_{2}}(t) &= m_{2}(t) + a_{21}\dot{X}(t)+\epsilon_{2}
\end{align}
$$
	- DPCA is Doppler-constrained PCA
	- Mean functions $m_{1}(t)$ and $m_{2}(t)$ are set to 0
	- $m_{0}(t)$ is set to the RV perturbation predicted given planet masses and orbits
		- parametrized by [[Radial velocity signal amplitude|K]], $P$ (period), $e$ (eccentricity), $\omega$ (periastron direction), $M_{0}$ ([[Mean Anomaly]] at epoch)
	- Assume $\epsilon(t_{p})\sim N(0,\Sigma_{\epsilon})$
#### GP Kernel Functions
- Each kernel function requires hyperparameters ($\phi$)
- **White-noise Kernel**
	- $k_{\mathrm{white}}(t,t')=\delta(t-t')$
	- Assumes any 2 draws from the GP at different values are uncorrelated
- **SE Kernel**
	- $k_{\mathrm{SE}}(t,t')=\exp \left( - \dfrac{(t-t')^{2}}{2\lambda_{\mathrm{SE}}^{2}} \right)$
	- $\lambda_{\mathrm{SE}}$ is the timescale of local correlations
	- Common choice as it can approximate any continuous function on any subset of the input space
	- Struggles to model processes where there are sharp changes (active region appears on the surface or rotates into view)
- **Matern Kernel**
	- $k_{\mathrm{M}5/2}(t,t')=\left( 1+\Delta t+ \dfrac{\Delta t^{2}}{3} \right)e^{-\Delta t}$
	- $\Delta t=\sqrt{ 5 }|t-t'|/\lambda_{\mathrm{M}5/2}$
	- $\Lambda_{\mathrm{M}5/2}$ is the timescale of local variations
	- Generally more suited for modeling rougher behavior
	- Lowest order Matern kernel that can be calculated quickly and is at least twice meansquare differentiable
- **[[Quasi-periodic kernel|QP]] Kernel**
	- $k_{\mathrm{QP}}(t,t')=\exp \left( - \sin \dfrac{^{2}(\pi(t-t')/\tau_{P})}{2\lambda_{P}^{2}} - \dfrac{(t-t')^{2}}{2\lambda_{\mathrm{SE}}^{2}} \right)$
	- $\lambda_{\mathrm{SE}}$ is the timescale of local correlations
	- $\tau_{P}$ is the timescale of periodic correlations
	- $\lambda_{P}$ describes the relative importance of the periodic and local correlations
	- Used to fit functions that are locally periodic but do not maintain a constant amplitude or coherent phase
	- Physically motivated but results in extremely smooth behavior of $X(t))$
#### Impact of GP Kernel Choice on Planet Characterization
- Compare results of modeling simulated spectroscopic time series using different GP covariance kernels
1.  **QP:** model apparent RVs and spectroscopic indicators with base model and QP kernel (both apparent RVs and spectroscopic indicators)
2. **Matern 5/2**: model apparent RVs and spectroscopic indicators with base model and M5/2 kernel (both apparent RVs and spectroscopic indicators)
3. **Jitter**: model only apparent RVs as white noise 
4. **No activity model (NAM)**: model only apparent RVs and assume stellar variability does not result in any perturbations to apparent RV
- Consider both no-planet case and one planet case
- Establish a detection criterion with well-characterized false-discovery criterion
	- If choosing a critical evidence ratio threshold for detecting a planet that does not depend on the number of observations
		- Would expect that the false-discovery rate could be small for a small number of observations
		- This would then increase as more observations are taken
	- Calibrate the critical evidence ratio by computing evidence ratio for a large sample of simulated data sets that are comparable to the available observations and do not have any planetary signals
		- the $1-q$ quantile of evidence ratios sets the minimum evidence ratio to detect a planet with a false-discovery rate of $q$
		- Critical threshold is specific to 
			- Survey properties
			- Properties of the simulated data sets
			- Model assumptions
		- Comparing shapes and scales of evidence ratio distributions helps to anticipate the ability of each model to detect planets
			- Also can help determine what model to use and if a more simple one can work just as well
### Discussion
- GLOM model for jointly modeling a planet and stellar variability significantly outperforms either ignoring stellar variability or treating it as white noise
- GLOM with $M 5/2$ GP kernel provides more sensitivity to low-mass planets than the QP kernel
- #future-work 
	- Acceleration for large datasets by speeding up matrix factorizations or incorporating special, computationally efficient kernel functions
	- Use GPLinearODEMaker to accelerate future research by
		- Exploring more GP kernels
		- Exploring utility of various activity indicators
	- Can be used in a power based stellar activity model selection
	- Incorporated into more detail models allowing for practical complications
		- Telluric absorption
		- Observing with multiple instruments
		- Searching for multiple planets around one star
## Conclusion
- 

> [!Cite]

Gilbertson, Christian, Eric B. Ford, David E. Jones, and David C. Stenning. “Toward Extremely Precise Radial Velocities. II. A Tool for Using Multivariate Gaussian Processes to Model Stellar Activity.” _The Astrophysical Journal_ 905, no. 2 (2020): 155. [https://doi.org/10.3847/1538-4357/abc627](https://doi.org/10.3847/1538-4357/abc627).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Gilbertson, C]] 
**Author**: [[Files/Authors/Ford, E]] 
**Author**: [[Files/Authors/Jones, D]] 
**Author**: [[Files/Authors/Stenning, D]] 


> **Year**: 2020  

> **Citekey**: gilbertsonExtremelyPreciseRadial2020 

> **itemType**: journalArticle 

> **Journal**: *The Astrophysical Journal* 

> **Volume**: 905 

> **Issue**: 2  

> **Pages**: 155 

> **DOI**:: 10.3847/1538-4357/abc627   

  
> [!Abstract]

>

> The radial velocity method is one of the most successful techniques for the discovery and characterization of exoplanets. Modern spectrographs promise measurement precision of 0.2–0.5 m s−1 for an ideal target star. However, the intrinsic variability of stellar spectra can mimic and obscure true planet signals at these levels. Rajpaul et al. and Jones et al. proposed applying a physically motivated, multivariate Gaussian process (GP) to jointly model the apparent Doppler shift and multiple indicators of stellar activity as a function of time, so as to separate the planetary signal from various forms of stellar variability. These methods are promising, but performing the necessary calculations can be computationally intensive and algebraically tedious. In this work, we present a flexible and computationally efficient software package, GPLinearODEMaker.jl, for modeling multivariate time series using a linear combination of univariate GPs and their derivatives. The package allows users to easily and efficiently apply various multivariate GP models and different covariance kernel functions. We demonstrate GPLinearODEMaker.jl by applying the Jones et al. model to fit measurements of the apparent Doppler shift and activity indicators derived from simulated active solar spectra time series affected by many evolving starspots. We show how GPLinearODEMaker.jl makes it easy to explore the effect of different choices for the GP kernel. We find that local kernels could significantly increase the sensitivity and precision of Doppler planet searches relative to the widely used quasiperiodic kernel.

>.



# Annotations%% begin annotations %%





%% end annotations %%
