
---
**Title**:: Quasi-periodic Gaussian processes for stellar activity: From physical to kernel parameters 

tags: #GP-Model #Quasi-Periodic-Kernel #Astrophysics-Solar-and-Stellar-Astrophysics #Stellar-Modeling #Stellar-Activity

citekey: nicholsonQuasiperiodicGaussianProcesses2022

collection:

- Papers to Read

status: unread

dateread:

---
# Notes
## Abstract
- For spotted stars the most possible GP covariance function is the [[Quasi-periodic kernel]]
	- The hyperparameters of the GP have plausible interpretation in terms of physical properties of the star and its spots
- Test reliability of interpretation of hyperparameters using a [[Quasi-periodic kernel|QP]]-[[Gaussian Process Model|GP]] and a [[Quasi-periodic plus cosine kernel|QPC]] [[Gaussian Process Model|GP]] 
- Find excellent agreement between input stellar rotation period and the period of the GPs
- Find hyperprameters derived from light and RV curves for a given star are in good agreement with the period and evolution time-scales
	- But harmonic complexity of the GP is systematically higher for RV than light-curve data
## Main Paper
### Introduction
- QP kernel is often used for modeling stellar activity signals
- But not always the best choice
	- Sometimes a simpler, a-periodic kernels can perform better [[gilbertsonExtremelyPreciseRadial2020]]
	- But explicitly encodes belief that underlying signal should be quasi-periodic
- Observed light and RV curves often have significant power not only at stellar rotation period but also at first few harmonics
	- This is not naturally reproduced by the standard QP kernel
- GP models are very much phenomenological
	- More physically motivated done by [[lugerMappingStellarSurfaces2021a]]
		- But not yet widely used or extended to RV data
- QP GP has recovered stellar rotation periods from light curves [[angusInferringProbabilisticStellar2018]] but other hyperparameters have not been investigated in detail yet
- Common application of QP GP is to filter stellar activity from RV time-series
	- When following up planet candidates it is common practice to 'train' the GP on the light curve data first
	- Then use the posterior distribution over the hyperparameters of the QP as a prior for the RV analysis
	- Might not be advisable
		- Photometric data is rarely contemporaneous with the RVs (HPs of a GP fit to the light curve can vary significantly over the solar cycle) [[kosiarekPhotometryProxyStellar2020]]
		- Analysis of simultaneous photometry and RVs found consistent periods and evolution time-scales but significant differences in the length scale parameter (controls harmonic complexity)
### Modeling Spotted Star Light Curves with Quasi-Periodic GPs
- Simulate light curves with spot model
- **Fitting light curves using a GP**
	- GP is no longer the 'correct model'
		- Samples from GPs cannot reproduce simulated light curves exactly 
		- So add jitter term when modeling light curves (fit for this term)
	- Optimum GP hyperparameters were found using MCMC
- **Results**
	- QP GP recovers the stellar rotation period for all but one of the model light curves
		- Slightly worse performance or shorter rotation periods due to finite sampling
	- Strong correlation between spot evolution time-scale and the QP GP length scale parameter
		- Gets worse as the spot evolution time scale approaches the total time span of the data
		- When spot emergence is much faster than decay the light curves can be more affected by a significant change from a large spot forming which is difficult to reproduce with only 1 evolution length scale
	- No physical interpretation for the harmonic complexity
	- **Comparison between QPC and QP**
		- Across all three hyperparameters the values were almost identical
		- This is explained by the fact that for almost all of the solutions the value of $f$ is very small or zero and so the QPC is behaving like the QP
### Applying the QP kernel to model RV time series
- RV time series generated have the same sampling and duration as the light curves so not representative of real data
- RV QP GP recovers the model stellar rotation periods well
- Light curve and RV solutions for length scale are in good agreement but differ at larger length scales
- RV and light curve have very different solutions for $\Gamma$
	- RV gives much larger values 
- QPC gives almost identical solutions to that of the QP kernel
	- More models had a value of $f$ above 0.1 and so the cosine accounts for more of the signal
### Impact of RV time sampling
- To better model ground based sparser sampling. Add noise to data then resample the model RV curves
- GP model is lest well constrained
- With decreased sampling scatter around the input value increases for smaller. values of stellar rotation period
	- Important to samle both the stellar rotation period and the orbital period(s) of candidate planets
- Spot model used to generate the data leads to modest but noticeable high frequency features
	- QP GP struggles to reproduce these
- Noise properties of the data are a key factor in driving the measured $\Gamma$ values
## Conclusion
- **Relation between QP GP hyperparameters and stellar properties**
	- Find almost perfect recovery of input stellar rotation period
	- Find correlation between spot evolution time and QP GP length scale
		- Can be used as an indicator of spot decay time and evolution
	- Harmonic complexity $\Gamma$ does not have intuitive physical interpretation
		- Some correlation with physical stellar properteis
- **QP GP regression on photometry vs RVs**
	- Although period and length scale hyperparameters match for both types of data harmonic complexity term doesn't
	- $\Gamma$ is consistently higher because RV time series will behave as a combination of the photometric time-series and its first derivative
	- #future-work did not investigate use of photometric data to constrain a GP on RVs taken months or years after 
- **Comparative performance of the QP and QPC kernels**
	- Behave almost identically for the recovery of stellar rotation period and spot evolution times in both photometric and RV data
		- QPC tended to have small values of $f$ especially for photometric data
	- In RV data the fraction $f$ of the cosine component was higher on average
	- Both kernels gave rise to very small numbers of outliers (not matching period and evolution time scale) with QPC slightly less
	- QP is simpler and generally do not find evidence to justify the extra cost of the QPC for the increased performance
- **Impact of 'realistic' noise and time sampling on QP GP analysis of RVs**
	- Recovery in evolution time and period is limited to 
		- The total time span of the data
			- Limits ability to reproduce long evolution times
		- The minimum separation of the data
			- Impacts the ability to sample the shorter period and evolution's times with decreasing amounts of data

> [!Cite]

Nicholson, B A, and S Aigrain. “Quasi-Periodic Gaussian Processes for Stellar Activity: From Physical to Kernel Parameters.” _Monthly Notices of the Royal Astronomical Society_ 515, no. 4 (2022): 5251–66. [https://doi.org/10.1093/mnras/stac2097](https://doi.org/10.1093/mnras/stac2097).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Nicholson, B A]] 
**Author**: [[Files/Authors/Aigrain, S]] 


> **Year**: 2022  

> **Citekey**: nicholsonQuasiperiodicGaussianProcesses2022 

> **itemType**: journalArticle 

> **Journal**: *Monthly Notices of the Royal Astronomical Society* 

> **Volume**: 515 

> **Issue**: 4  

> **Pages**: 5251-5266 

> **DOI**:: 10.1093/mnras/stac2097   

  
> [!Abstract]

>

> In recent years, Gaussian Process (GP) regression has become widely used to analyse stellar and exoplanet time-series data sets. For spotted stars, the most popular GP covariance function is the quasi-periodic (QP) kernel, whose hyperparameters of the GP have a plausible interpretation in terms of physical properties of the star and spots. In this paper, we test the reliability of this interpretation by modelling data simulated using a spot model using a QP GP, and the recently proposed quasi-periodic plus cosine (QPC) GP, comparing the posterior distributions of the GP hyperparameters to the input parameters of the spot model. We find excellent agreement between the input stellar rotation period and the QP and QPC GP period, and very good agreement between the spot decay time-scale and the length scale of the squared exponential term. We also compare the hyperparameters derived from light and radial velocity (RV) curves for a given star, finding that the period and evolution time-scales are in good agreement. However, the harmonic complexity of the GP, while displaying no clear correlation with the spot properties in our simulations, is systematically higher for the RV than for the light-curve data. Finally, for the QP kernel, we investigate the impact of noise and time-sampling on the hyperparameters in the case of RVs. Our results indicate that good coverage of rotation period and spot evolution time-scales is more important than the total number of points, and noise characteristics govern the harmonic complexity.

>.



# Annotations%% begin annotations %%





%% end annotations %%
