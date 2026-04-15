
---
tags: #GP-Model #MAROON-X #Interprability #Stars #Astrophysics-Solar-and-Stellar-Astrophysics 

citekey: lugerMappingStellarSurfaces2021

collection:

- Papers to Read

status: unread

dateread:

---
# Notes
## Abstract
- [[Gaussian Process Model|GP]]s excel at marginalization over the stellar signal when the variability due to starspots is treated a a nuisance
- Less useful when the starspot signal is of primary interest
	- Not clear which parameters of the GP relate to the physical parameters of the starspot
- Derive a closed-form expression for a GP describing the light curve of a rotating, evolving stellar surface conditioned on a given distribution of starspot sizes, constrasts and latittudes
- Implemented in [starry_process](https://github.com/rodluger/starry_process) [[lugerStarry_processInterpretableGaussian2021]]
## Main Paper
### Introduction
- Relatively straightforward to derive posterior constraints on hyper-parameters of an effective GP model for observations it isn't clear what they say about the stellar surface
	- Often kernel is chosen ad-hoc and so is effective but not interpretable description
	- Except for: astroseismic studies and stellar rotation period studies
- When the goal is to learn about the stellar surface common approach has been to explicitly forward model the surface
	- Allows you to compute a stellar light curve or spectral time series conditioned on certain surface properties
	- Degeneracies make it impossible to know the exact configuration of starspots and other features on the stellar surface from rotational light curve alone
### A GP for Starspots
- **Overview of GPs**
	- A [[Gaussian Process Model|GP]] is fully specified by a mean function $m(t)$ and a kernel function $k(t,t')$ 
	- A random vector-valued variable $\mathbb{f}$ defined on a $(K\times_{1})$ time array $\mathbf{t}$ is "distributed as a GP" such that $\mathbb{f}\sim \mathcal{N}(\mu,\Sigma)$
		- $\mu_{i}=m(t_{i})$
		- $\Sigma_{i,j}=k(t_{i},t_{j})$
	- GPs are easy to sample from due to their relationship to multivariate Gaussians
	- Multivariate Gaussian distributions have a closed-form (marginal) likelihood function so it is easy to compute the probability of one's data conditioned on a given value of $\mathbf{\mu}, \mathbf{\Sigma}$ (the likelihood)
		- Can maximize the likelihood to infer optimal values of the model parameters
		- Or can use it to compute probability of the parameters given in the data
		- Can evaluate the likelihood in a fraction of a second for $K\lesssim 10^4$
	- They are non parametric as there is no explicit functional form of $\mathbb{f}$
	- GP is a stochastic process that can take on any functional form dependent on $\Sigma$
		- Often times further restrict by assuming the process is stationary: $\Sigma_{i,j}=k(t_{i},t_{j})=k(|t_{i}-t_{j})\equiv k(\Delta t)$
		- This assumes that it is independent of phase (or here value of time t)
		- Then a kernel of a stationary process is a 1D function
- **Spherical Harmonics**
	- [[Spherical Harmonics]]
	- They are a very convenient way to describe starspot distributions
	- There is a linear relationship between spherical harmonic expansion of a stellar surface and total disk integrated flux (the light curve): $\mathbf{f=1+\mathcal{A}}(I,P,\mathbf{u})\mathbf{y}$
		- $\mathbf{1}$ is the ones vector
		- $\mathbf{\mathcal{A}}$ is the starry design matrix that transforms from spherical harmonic basis to flux basis
		- $I$ is the stellar inclination
		- $P$ is the stellar rotation period
		- $\mathbf{u}$ is the stellar limb darkening coefficients and the observation times
- **Computing the GP**
	- Random vector of $K$ flux measurements: $\mathbb{f}=\mathbb{f}_{0}\mathbb{f}_{1}\dots \mathbb{f}_{K-1}$ at times $\mathbf{t}=(t_{0}t_{1\dots t_{K-1}})$
	- Want to compute the mean $\mathbf{\mu}(I,P,\mathbf{u,\theta})$ and covariance $\mathbf{\Sigma}(I,P,\mathbf{u,\theta})$ of $\mathbb{f}$ to fully describe how flux measurements are distributed: $\mathbb{f}(I,P,\mathbf{u,\theta})\sim \mathcal{N}(\mathbf{\mu}(I,P,\mathbf{u,\theta}),\mathbf{\Sigma}(I,P,\mathbf{u,\theta}))$
		- Can compute the mean and covariance from the expectation values of $\mathbb{f}$ and $\mathbb{ff}^T$
			- $\mathbf{\mu}(I,P,\mathbf{u,\theta})=E[\mathbb{f}|I,P,\mathbf{u,\theta}]$
			- $\Sigma(I,P,\mathbf{u,\theta})=E[\mathbb{ff}^T|I,P,\mathbf{u,\theta}]-\mathbf{\mu}(I,P,\mathbf{u,\theta})\mathbf{\mu}^T(I,P,\mathbf{u,\theta})$
		- Using relationship between flux and spherical harmonic coefficient
			- $\mathbf{\mu}(I,P,\mathbf{u,\theta})=\mathbf{1}+\mathcal{A}(I,P,\mathbf{u})\mathbf{\mu_{y}(\theta)}$
			- $\Sigma(I,P,\mathbf{u,\theta})=\mathcal{A}(I,P,\mathbf{u})\Sigma_{y}(\mathbf{\theta})\mathcal{A}^T(I,P,\mathbf{u})$
				- $\mathbf{\mu}_{y}(\mathbf{\theta})=E[\mathbb{y}|\mathbf{\theta}]$
				- $\Sigma_{y}(\theta)=E[\mathbb{yy}^T|\mathbf{\theta}]-\mathbf{\mu}_{y}(\theta)\mathbf{\mu}_{y}^T(\mathbf{\theta})$
				- Where $\mathbb{y}$ is the spherical harmonic coefficient vectors
			- These expressions are given by integrals:
				- $E[\mathbb{y}|\boldsymbol{\theta}]=\int \mathbb{y(x)}p(\mathbb{x}|\boldsymbol{\theta})d\mathbb{x}$
				- $E[\mathbb{yy}^T|\boldsymbol{\theta}]=\int \mathbb{y(x)y}^T(\mathbb{x})p(\mathbb{x}|\boldsymbol{\theta})d\mathbb{x}$
				- Where $\mathbb{x}$ is a random vector-valued variable corresponding to a particular distribution of feautres on the surface
				- $p(\mathbb{x}|\boldsymbol{\theta})$ is the probability density function
				- These integrals can have closed-form solutions that are evaluated quickly see Appendix C
			- $\boldsymbol{\theta}=(n \; c \; \mu_{\phi} \; \sigma_{\phi} \; r)^T$
				- $n$ is the number of star spots
				- $c$ is their contrast
				- $\mu_{\phi}$ and $\sigma_{\phi}$are the mode and standard deviation of the spot latitude distribution
				- $r$ is the radius of the spots
	- Given the mean and covariance can evaluate the log marginal likelihood of the m-th dataset conditioned on a specific value of $\boldsymbol{\theta}$
		- Can infer the statistical properties of the starspots from the entries in $\boldsymbol{\theta}$
		- $\ln \mathcal{L}_{m}(I,P,\boldsymbol{{u,\theta}})=-\dfrac{1}{2}\boldsymbol{r_{m}}^T(I,P,\boldsymbol{u,\theta})\cdot[\boldsymbol{\Sigma}(I,P,\boldsymbol{u,\theta})+\boldsymbol{C_{m}}]^{-1}\cdot \boldsymbol{r_{m}}(I,P,\boldsymbol{u,\theta})-\dfrac{1}{2}\ln|\boldsymbol{\Sigma}(I,P,\boldsymbol{u,\theta})+\boldsymbol{C_{m}}-\dfrac{K}{2}\ln(2\pi)$
			- Residual vector: $\boldsymbol{r_{m}}(I,P,\boldsymbol{u,\theta})\equiv f_{m}-\boldsymbol{\mu}(I,P,\boldsymbol{u,\theta})$
			- Data covariance: $\boldsymbol{C_{m}}$
		- Joint likelihood is the product of individual likelihoods: $\ln \mathcal{L}(I,P,\boldsymbol{u,\theta})=\sum_{m}\ln \mathcal{L}_{m}(I,P,\boldsymbol{u,\theta})$
- **Marginalizing over Inclination**
	- Total number parameters with $M$ stars that have similar spot properties is $N=4M+5$
		- Each star has 4 stellar properties (inclination, period, 2 limb darkening coefficients)
		- Share 5 spot properties $\boldsymbol{\theta}$
	- Inclination is not possible to reliably estimate in a preprocessing step
	- So explicitly marginalize over stellar inclination:
		- $\boldsymbol{\mu}(P,\boldsymbol{u,\theta})=E[\mathbb{f}|P,\boldsymbol{u,\theta}]=1+\boldsymbol{e_{I}}$
		- $\boldsymbol{\Sigma}(P,\boldsymbol{u,\theta})=E[\mathbb{ff}^T|P,\boldsymbol{u,\theta}]-\boldsymbol{\mu}(P,\boldsymbol{u,\theta})\boldsymbol{\mu}^T(P,\boldsymbol{u,\theta})=\boldsymbol{E_{i}-\boldsymbol{e_{I}e_{I}}}^T$
		- Inclination first moment:
			- $\boldsymbol{e_{I}}\equiv \int \mathcal{A}(\mathbb{I},P,\boldsymbol{u})E[\mathbb{y}|\boldsymbol{\theta}]p(\mathbb{I})d\mathbb{I}$
		- Inclination second moment
			- $\boldsymbol{E_{I}}\equiv \int \mathcal{A}(\mathbb{I},P,\boldsymbol{u})E[\mathbb{yy}^T|\boldsymbol{\theta}]\cdot \mathcal{A}^T(\mathbb{I},P,\boldsymbol{u})p(\mathbb{I})d\mathbb{I}$
			- With $\mathbb{I}$ the random variable corresponding to the inclination
			- With the expectation values as defined by the integrals before
		- Mean of GP is constant: $\boldsymbol{\mu}(P,\boldsymbol{u,\theta})=(1+\boldsymbol{e_{I}})\boldsymbol{I}\equiv \mu \boldsymbol{1}$
- **Normalization Correction**
	- The normalization of light curves to their mean or median level changes the covariance structure by correlating observations in nontrivial way
	- Normalization: $\mathbb{\tilde{f}}=\mathbb{\dfrac{f}{\langle f \rangle}}$
		- $\mathbb{\tilde{f}}$ is the normalized unit-mean light curve
		- $\mathbb{f}$ is the measured light curve
		- $\langle \mathbb{f} \rangle$ is the sample mean 
	- Have to correct expression for covariance matrix of the GP when using normalization
	- Instead much better to model the (unknown) amplitude of the data as a multiplicative latent variable
		- This is also bad as removes computational benefit of marginalizing out the inclination by adding another parameter
	- If the variance of a stellar light curve is small compared to its mean then can use an approximate expression for normalized GP: $\boldsymbol{\tilde{\Sigma}}\approx \dfrac{A}{\mu^2}\boldsymbol{\Sigma}+z((A+B)(\boldsymbol{1-q}))\times(\boldsymbol{1-q})^T-A\boldsymbol{qq}^T$
		- $z\equiv \dfrac{\langle \Sigma \rangle}{\mu^2}$ the ratio of the average element in $\boldsymbol{\Sigma}$ to the square of the mean of the GP
		- $\boldsymbol{q}$ is the ratio of the average of each row in $\boldsymbol{\Sigma}$ to the average element in $\boldsymbol{\Sigma}$
		- $A,B$ are order unity and zero scalars
			- $A\equiv \sum_{i=0}^{i_{max}}  \dfrac{2i+1}{2^ii!}z^i$
			- $B\equiv \sum_{i=0}^{i_{max}} \dfrac{2i(2i+1)!}{2^ii!}z^i$
			- $i_{max}$ is the largest value for which the series coefficient at $i_{max}$ is smaller than the coefficient at $i_{max}-1$
	- Can marginalize over unknown normalization by modeling normalized flux as a draw from a GP:
		- $\mathbb{\tilde{f}}(P,\boldsymbol{u,\theta})\sim \mathcal{N}(\boldsymbol{1,\tilde{\Sigma}}(P,\boldsymbol{u,\theta}))$
		- Fine if $z\ll 1$
- **Summary**
	- Model mean normalized flux $\mathbb{\tilde{f}}$ as a GP: $\mathbb{\tilde{f}}(P,\boldsymbol{u,\theta})\sim \mathcal{N}(\boldsymbol{1,\tilde{\Sigma}}(P,\boldsymbol{u,\theta}))$
		- The hyper-parameters of this GP $\boldsymbol{\theta}=(n\;c\;\mu_{\phi}\;\sigma_{\phi}\;\boldsymbol{r})^T$
		- Are stellar rotation period $P$, vector of limb-darkening coefficients $\boldsymbol{u}$, and vector of parameters describing spot distribution
			- number of spots $n$
			- contrast $c$
			- $\mu_{\phi},\sigma_{\phi}$ mode and standard deviation of the latitude distribution
			- radius of the spots $\boldsymbol{r}$
		- $\boldsymbol{\tilde{\Sigma}}$ is the covariance for the normalized process
### Discussion
- **Small Spots**
	- By using spherical harmonics have a limitation on the resolution of surface features
	- Can increase degree used but their algorithm becomes unstable so would require re parametrization
	- Also another method that makes some assumptions to do better with small spots at the sacrifice of describing larger ones
- **Bright Spots**
	- By choosing a negative value for the contrast can model the effect of bright spots
	- May be difficult or impossible to tell the difference between dark and bright spots via the GP approach
		- Lack any information about the correct normalization of the light curve
		- GP covariance is only dependent on $c^{2}$ which means that light and dark spots are treated the same
		- At least when using single band photometry
		- But the true likelihood function (not a gaussian approximation) likely has higher-order moments that could have information about this
### Extensions
- **Modeling Transits and RV Data Sets**
	- stantaneous RV shit v induced by a rotating spotted star can be approximated as $v= \dfrac{\iint_{S}IVdS}{\iint IdS}$
		- I is the stellar intensity at a point on the surface 
		- V is the radial component of the rotational velocity vector at that point
		- Integral is taken over the projected disk of the star
		- 
## Conclusion
- Present a GP model for stellar variability whose hyperparameters explicitly correspond to physical properties on the surface
	- Can compute likelihood function for stellar light curves marginalized over nuisance parameters (specific size, positions, and contrasts of individual spots)
	- Can then do inference on interesting parameters (distribution of spot sizes, latitudes, and contrasts)
- Has exact closed-form solution and is computationally efficient
- Works best for ensemble analyses
- GP can accurately infer:
	- The angular size of spots
	- The mode and standard deviation of their distribution in latitude
	- Stellar inclinations
- Can be used to model small Sun-like spots
- GP can be extended to model time-variable surfaces
- GP can be used in exoplanet transit modeling and extended to RV datasets

> [!Cite]

Luger, Rodrigo, Daniel Foreman-Mackey, and Christina Hedges. “Mapping Stellar Surfaces. II. An Interpretable Gaussian Process Model for Light Curves.” _The Astronomical Journal_ 162, no. 3 (2021): 124. [https://doi.org/10.3847/1538-3881/abfdb9](https://doi.org/10.3847/1538-3881/abfdb9).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Luger, R]] 
**Author**: [[Files/Authors/Foreman-Mackey, D]] 
**Author**: [[Files/Authors/Hedges, C]] 


> **Year**: 2021  

> **Citekey**: lugerMappingStellarSurfaces2021 

> **itemType**: journalArticle 

> **Journal**: *The Astronomical Journal* 

> **Volume**: 162 

> **Issue**: 3  

> **Pages**: 124 

> **DOI**:: 10.3847/1538-3881/abfdb9   

  
> [!Abstract]

>

> The use of Gaussian processes (GPs) as models for astronomical time series data sets has recently become almost ubiquitous, given their ease of use and flexibility. In particular, GPs excel at marginalization over the stellar signal when the variability due to starspots is treated as a nuisance, as in exoplanet transit modeling. However, these effective models are less useful in cases where the starspot signal is of primary interest, since it is not obvious how the parameters of the GP relate to physical parameters like the spot size, contrast, and latitudinal distribution. Instead, it is common practice to explicitly model the effect of individual starspots on the light curve and attempt to infer their properties via optimization or posterior inference. Unfortunately, this process is ill-posed and often computationally intractable when applied to stars with more than a few spots and/or to ensembles of many stars. Here we derive a closed-form expression for a GP that describes the light curve of a rotating, evolving stellar surface conditioned on a given distribution of starspot sizes, contrasts, and latitudes. We demonstrate that this model is correctly calibrated, allowing one to robustly infer physical parameters of interest from one or more light curves, including the typical spot radii and latitudes. Our GP has far-ranging implications for understanding the variability and magnetic activity of stars from light curves and radial velocity measurements, as well as for modeling correlated noise in exoplanet searches. Our implementation is efficient, user-friendly, and open-source, available in the package starry_process.

>.



# Annotations%% begin annotations %%





%% end annotations %%
