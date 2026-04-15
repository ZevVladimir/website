
---
tags: #Astrophysics-Instrumentation-and-Methods-for-Astrophysics, #Astrophysics-Earth-and-Planetary-Astrophysics, #Statistics-Applications, #RV-analysis  #GP-Model #Stars #MAROON-X 

citekey: haraStatisticalMethodsExoplanet2023

collection:

- Papers to Read

status: unread

dateread:

---
# Notes
## Abstract
- Frame RV data analysis as a problem of detection and parameter estimation in unevenly sampled, multivariate time series
- Objectives of the review:
	- Introduce the motivation, methodological challenges, and numerical challenges of RV data analysis
	- Unify existing advanced approaches to identify areas for improvement
## Main Paper
- Benefits of RV method
	- Can detect planets spanning a wide range of orbital periods
	- Does not require a precise orientation of the orbital plane
### Data and Model
- **Doppler shifts**
	- Measure RV of star with the Doppler effect: $\lambda=\lambda_{0} 1+\dfrac{\dfrac{1}{c}\mathbf{k \cdot v}}{\sqrt{ 1- \dfrac{v^2}{c^2} }}$
	- As the star moves the Doppler effect causes the apparent wavelength of spectral lines to change
	- Can measure changes of spectra as a function of time: $RV(t)\equiv \mathbf{k \cdot v}(t)$
- **Forward model of planetary effects**
	- Orbiting planet also causes a reflex motion of the star causing RV variations
	- Thus the star's RV projected onto the line of sight at time t depends on the planet's mass and orbital parameters given by [[Keplerian Signal]]
	- For most planetary systems planet-planet interactions are small and can be approximated as a linear superposition: $RV(t)=c_{0}+c_{1}t+\sum_{j=1}^{n}f(t;K_{j},P_{j},e_{j},\omega_{j}M_{0j})$
		- Where f is the [[Keplerian Signal]] per planet
		- There is a constant or linear trend from the proper motion due to the motion of the observed star and Sun around the galactic center
	- For multiple instruments should replace $c_{0}$ in the equation with $\sum_{j=1}^{m}c_{0}^j \chi_{j}(t)$
		- Where $\chi_{j}(t)=1$ if the measurement at t is taken by instrument j and 0 otherwise
- **Basic model of observed data**
	- RV measurements have nominal uncertainty based off the observation
	- Assume independent Gaussian measurement noise at each time $t_{i}$ also add a jitter term which is another Gaussian noise term so:
		- $y(t_{0})=RV(t)+\epsilon(t)$
		- $\epsilon(t_{i}) \sim N(0,\sigma_{t_{i}}^2+\sigma_{J}^2)$
- **Other processes affecting RVs**
	- Stellar effects
		- If the hot gas on the stellar surface has different brightness and velocities then that will impact the Doppler spectroscopy
		- [[Stellar Granulation]]: Convection creates a pattern of evolving convection cells
			- Creates a stationary noise with a Lorentzian or super-Lorentzian power spectrum
		- [[Facula]] and star spots result from local enhancement of magnetic field
			- Results in an imbalance in flux from the approaching and receding side of the rotating star
			- Reduces upward convection resulting in an additional RV effect
			- Quasi periodic due to evolution of the star surface over a rotation
### Statistical Framework
- **Model of RV**
	- The RV from the spectra $\hat{RV(t_{i})}=RV(t_{i})+RV_{contam}(t_{i})+\delta(t_{i})$
		- Where $RV(t_{i})=RV_{planets}(t_{i})+RV_{g}(t_{i}),i=1,\dots,N$
		- Where $RV_{planets}(t_{i})$ and $RV_{g}(t_{i})$ are induced by planets and by other gravitational effects
	- Modeling $RV_{contam}(t)$
		- Induced by star and instrument
		- Do not have constant frequency, phase, and amplitude
		- Cause a Doppler shift and cause the shape of the spectrum to vary with time
		- Can use the shape variations of the spectra to predict this signal (such as with a ML model)
- **Challenges of RV data analysis**
	- Want to know the vector $\mathbf{\theta=(\theta_{1},\dots,\theta_{n})}$ which represents the planetary system
		- n is the number of planets which can be unknown
		- $\theta_{j}$ is the the orbital elements of the planet
	- Also the vector $\mathbf{\eta}$ which is all the relevant non-planetary parameters
		- Offset
		- Drift
		- Stellar rotation period
		- Noise amplitude and time scale
	- Want to know $\mathbf{\theta}$ based off $\mathbf{D}$ or the lowest level data: $p(\mathbf{\Theta,\eta|D})$ 
	- But can't know $\mathbf{D}$ so estimate it with an estimate of the RV time series $\hat{RV}=(\hat{RV}(t_{i}))_{i=1,\dots ,N}$ and ancillary indicators $\mathbf{I=(I_{j}(t_{i}))_{j=1..p,i=1..N}}$
	- So $p(\mathbf{\theta,\eta|D})\approx p(\mathbf{\theta,\eta|I,\hat{RV}})= \dfrac{p(\mathbf{I,RV_{contam}+\epsilon|\theta,\eta})p(\mathbf{\theta,\eta})}{p(\mathbf{I,\hat{RV}})}$
		- $p(\theta,\eta)$ is the prior distribution
		- $p(y|\theta,\eta)$ is the likelihood
			- Where $y=(\hat{RV},I)$
### Detecting Planets and Estimating their Orbital Elements
- **Likelihood**
	- Assume the likelihood to be Gaussian
		- $\cal{L}$ $\equiv p(\mathbf{y|\theta,\eta})= \dfrac{e^{-\frac{1}{2}[y-g(t;\theta,\eta)]^T V(\eta)^{-1}[y-g(t;\theta,\eta)]}}{\sqrt{ (2\pi)^N | V(\eta) |}}$
		- Where $|V(\eta)|$ is the determinant of the covariance matrix $V(\eta)$ which is diagonal with i-th element $\sigma_{t_{i}}^2+\sigma_{j}^2$
		- $\mathbf{g}$ is the sum of Keplerians and an affine function
		- $\mathbf{\eta}=\sigma_{J},c_{0},c_{1}$
- **Planet Detection via Periodograms**
	- Computing posterior distribution with all the elements of the likelihood function is computationally intensive so using periodogram is an effective alternative
	- Periodograms consist in comparing the log-likelihoods of two models: base model $H_{0}$ and a model $K_{\omega}$ which includes $H_{0}$ and aa periodic component at frequency $\omega$
	- Lomb-Scargle Periodogram
		- $H_{0}$ is Gaussian white noise
		- $K_{\omega}$ is same white noise plus a sine function with likelihoods:
			- $H_{0}:\mathbf{g=0}$
			- $K_{\omega}:\mathbf{g}(A,B,\omega)=A\cos\omega t+B\sin\omega t$
				- $\mathbf{g}$ is the exact RV signature of a planet with a circular orbit and period $P=\dfrac{2\pi}{\omega}$
			- $\mathbf{V}=\mathrm{diag}((\sigma_{i}^2)_{i=1,\dots,N})$ for both models
		- For a given $\omega$ maximizing the likelihood with respect to A and B is equivalent to minimizing the sum of squares
		- The periodogram is then the difference of the log-likelihoods of models $H_{0}$ and $K_{\omega}$ as a function of $\omega$
	- Comparing models with Periodogram
		- Compute the probability distribution $p(\mathrm{max}_{\omega}\cal{P}(\omega ))$ of the maximum of the periodogram $\mathrm{max}_{\omega}\cal{P}(\omega))$ under null hypothesis $H_0$
		- Compute this on the data to be analyzed $\cal{P}_{d}$ a grid of frequencies $\Omega=(\omega_{i})_{i=1..N}$ and define a [[False Alarm Probability]] $p(\mathrm{max}_{\omega \in\Omega}\mathcal{P}(\omega)\geq \mathcal{P}_{d}|H_{0})$
		- FAP is most robustly estimated by generating signals under the null hypothesis
		- The FAP estimated is the fraction of simulations with a maximum peak greater than $\mathcal{P}_{d}$
			- Computationally expensive and generally need $n>10^4$ for astronomy with $\sim n$ simulations needed
- **Bayesian Approach to Planet Detection**
	- Compute the Bayesian evidence or the marginal likelihood of the n-planet model
		- $\Theta_{n}$ is the parameter space of all possible combinations of n planets
		- $p(\mathbf{y}|n)=\int \int_{\Theta_{n}}p(\mathbf{y|\theta,\eta},n)d\mathbf{\theta}d\mathbf{\eta}$
		- Where $p(\mathbf{y|\theta,\eta,n})$ is given by the likelihood equation above
	- The ratio of the Bayesian evidences for models with $n+1$ and $n$ planets is the Bayes factor
		- A Bayes factor strongly favoring an $(n+1)$ planet model over an $n$ planet one does not mean that there is a $n+1$ planet
	- Difficult to compute Bayesian evidence accurately
### Model: Specifying the Priors and Likelihood
- Historically:
	- To represent RV variations use a linear combination of ancillary indicators $\mathbf{RV}_{\mathrm{contam}}=\sum_{j}\alpha_{j}\mathbf{I}_{j}$
	- This ignores that the indicators themselves are noisy
	- Also there can be phase shifts between activity induced changes in RVs and ancillary indicators reducing correlation
- Can also represent the signals corrupting RVs as correlated Gaussian noise
	- Can follow the likelihood equation but assume that $\mathbf{y}$ is the RV time series and specify $\mathbf{V}$ with a kernel
	- This gives correlation between value of the stellar RV signal at $t$ and $t+\Delta t$
	- Using a GP representation of the RV has serious limitations:
		- Acts as a frequency filter
		- Can decrease significance of viable planet candidates
	- Can instead still use same equation but $\mathbf{y}$ is the concatenation of RV and ancillary indicators time series in the framework of GPs
- Can analyze RV and ancillary indicators simultaneous with a likelihood $p(\mathbf{RV,I|D)})$ in the GP framework
- Can also use the GP framework to model simultaneously the RVs derived in different spectral bands
- Can also base the kernel of the extended data on explicit physical models of the star [[haraStatisticalModelStellar2025]] [[lugerMappingStellarSurfaces2021]]
### Analysis Methods: Deeper Levels
- **Estimating RV**
	- For sub m/s level the shape of the stellar spectrum changes and there is no unambiguous definition of RV. So to estimate requires explicitly assumptions
	- Three families of methods to extract the velocity
		- Cross correlating the spectrum with an idealized mask: $CCF(\Delta\lambda)=f*\mathrm{Mask}(\Delta\lambda)$
			- $*$ is convolution operator
			- Computes an average line shape
			- Each line improves the SNR but also contributes a bias
			- CCF loses information about differences in shapes of each line
			- Lacks a mechanism to recognize stellar variability
		- Template matching
			- Measuring RV based on a template or model spectrum and a Taylor expansion for the spectrum as a function of velocity
			- Based on $f(\lambda) \simeq f_{0}(\lambda)+ \dfrac{RV}{c} \dfrac{\mathrm{d}f_{0}}{\mathrm{d}\log\lambda}(\lambda)$
				- $f_{0}(\lambda)$ is a reference spectrum
				- c is the speed of light
			- Lacks a mechanism to recognize stellar variability
		- Build a forward model of the spectrum: $f(\lambda^0)=\left[f_{0}(\lambda^{bc})+\dfrac{RV}{c} \dfrac{\mathrm{d}f_{0}}{\mathrm{d}\log\lambda}(\lambda^{bc})\right]T(\lambda^0)*IP(\lambda^0)$
			- $f(\lambda^0)$ is the spectrum of the observer frame
			- $\lambda^{bc}=\lambda^0\{1+v_{bc}(t)/c\}/\sqrt{ 1-v_{bc}^2(t)/c^2 }$
				- The wavelength in a frame that accounts for $v_{bc}(t)$ the known motion of the observatory relative to the solar system barycenter (barycenter correction)
			- $T(\cdot)$ is an atmospheric transmission profile
			- $IP(\cdot)$ is the instrument response
- **Estimating nuisance RV signals**
	- Must specify a statistical model for $p(\mathbf{I,RV_{\mathrm{contam}}|\theta,\eta})$
	- First: choose method of dimension reduction to get $\mathbf{I}$ then form for likelihood which describes $\mathbf{I}$ and $\mathbf{RV_{\mathrm{contam}}}$
	- Analysis of solar data suggests only 6-13 basis vectors are necessary to model solar variability at resolution and SNR of HARPS-N
		- Can reduce spectra to an RV and 2-6 indicators potentially
## Conclusion
- Presented steps to RV data analysis separating into 3 problems
	- Reducing information of the spectrum into an RV time series
	- Modeling nuisance signals and the prior information on planetary and nuisance parameters
	- Deciding how many planets are present an what their orbital elements are 
- #future-work 
	- Ensure that all information in the spectra is used and that the RV and indicators derived are reliable summary statistics
	- How to validate choices for each step as effective tools for detecting and characterizing low mass planets due to stellar variability
		- Bayesian model comparison
		- Can evaluate accuracy and precision of model mitigating stellar variability via its ability to predict $RV_{\mathrm{contam}}$
		- Using large planet injection-recovery tests

> [!Cite]

Hara, Nathan C., and Eric B. Ford. “Statistical Methods for Exoplanet Detection with Radial Velocities.” _Annual Review of Statistics and Its Application_ 10, no. 1 (2023): 623–49. [https://doi.org/10.1146/annurev-statistics-033021-012225](https://doi.org/10.1146/annurev-statistics-033021-012225).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Hara, N]] 
**Author**: [[Files/Authors/Ford, E]] 


> **Year**: 2023  

> **Citekey**: haraStatisticalMethodsExoplanet2023 

> **itemType**: journalArticle 

> **Journal**: *Annual Review of Statistics and Its Application* 

> **Volume**: 10 

> **Issue**: 1  

> **Pages**: 623-649 

> **DOI**:: 10.1146/annurev-statistics-033021-012225   

  
> [!Abstract]

>

> Exoplanets can be detected with various observational techniques. Among them, radial velocity (RV) has the key advantages of revealing the architecture of planetary systems and measuring planetary mass and orbital eccentricities. RV observations are poised to play a key role in the detection and characterization of Earth twins. However, the detection of such small planets is not yet possible due to very complex, temporally correlated instrumental and astrophysical stochastic signals. Furthermore, exploring the large parameter space of RV models exhaustively and efficiently presents difficulties. In this review, we frame RV data analysis as a problem of detection and parameter estimation in unevenly sampled, multivariate time series. The objective of this review is two-fold: to introduce the motivation, methodological challenges, and numerical challenges of RV data analysis to nonspecialists, and to unify the existing advanced approaches in order to identify areas for improvement.

>.



# Annotations%% begin annotations %%





%% end annotations %%
