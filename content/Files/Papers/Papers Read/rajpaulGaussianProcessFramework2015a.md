
---
tags: #Astrophysics-Instrumentation-and-Methods-for-Astrophysics, #Astrophysics-Earth-and-Planetary-Astrophysics #GP-Model #RV-analysis  #Stars #Quasi-Periodic-Kernel 

citekey: rajpaulGaussianProcessFramework2015

collection:

- MAROON-X/To Read

- Papers to Read

status: unread

dateread:

---
# Notes
## Abstract
- Present a [[Gaussian Process Model|GP]] framework to model RV time series jointly with ancillary activity indicators
- Allows for the activity component of RV time series to be constrained and disentangled from planetary components
## Main Paper
### Stellar Nuisance Signals
- Main phenomena that interfere with RV measurements
	- Oscillation of external envelopes in Sun-like stars
		- RV variations on the order of 10s cm/s over minutes
	- Granulation phenomena driven by convective flows in the external layers of Sun-like stars
		- T variations on order of m/s over several minutes and up to 2 days
	- Rotationally modulated phenomena associated with active regions (dark spots, bright plages, and faculae)
		- Main contribution to RV perturbation comes from the strong magnetic fields associated with these active regions which suppress the net blueshift normally associated with convective cells
		- Strength of perturbations varies and can be as high as 10s m/s over a period of the star's rotation period
	- Long-term magnetic activity cycles
		- RV perturbations of up to 10s m/s over many years
- Work in [[0aigrainSimpleMethodEstimate2012]] shows relationship between photometric brightness and RV variations of a spotted star
- Can gain information by modeling the RV time series jointly with other parameters. These parameters like the chromospheric activity indicators or CCF bisector span are sensitive to activity but not planets
### Proposed Formalism
#### Formulation of the Physical Model
- Extension of FF' framework in [[0aigrainSimpleMethodEstimate2012]]
	- Showed that $\Delta RV=V_{r}F(t)\dot{F}(t)+V_{c}F^2(t)$
		- First term is rotational modulation signal
		- Second term is the suppression of convective blueshift in magnetized regions
- Want to estimate RV variations using activity diagnostics other than photometry. Choose $\log R_{HK}'$ index and the inverse slope of the bisector of the [[Cross-Correlation Function|CCF]] or the bisector inverse slope (BIS)
	- $\log R_{HK}'=L_{c}F^2(t)$
	- $BIS=B_{r}F(t)\dot{F}(t)+B_{c}F^2(t)$
	- With $L_{c},B_{r},B_{c}$ being free parameters
	- Each time series also has its own noise term treated as white
	- These equations are relating activity-sensititve observables to spot coverage
#### Gaussian Process Framework
- Marginal likelihood for the data given a GP model is: $\log[\cal{L}_{m,k}(\theta,\phi)]=-\dfrac{1}{2} \mathbf{r^t K^{-1} r^T} - \dfrac{1}{2} \log(\det \mathbf{K}) - \dfrac{n}{2}\log(2\pi)$
	- $\mathbf{r=y-m}$ is the residuals of the data after the mean function has been subtracted
- Way to formulate physically motivated, statistically proper priors for each hyper-parameter but can:
	- Maximize $\cal{L}_{m,k}$ with respect to all hyper-parameters
		- Fix the uninteresting ones (generally $\phi$) to their maximum a posteriori (MAP) values
		- Marginalize fully over the remaining parameters of interest (generally in $\theta$)
#### Choice of Latent Covariance Function
- **Squared-exponential covariance**
	- $\gamma^{(G,G)}(t,t')=\beta^2 \exp \left[- \dfrac{(t-t')^2}{2\lambda^2}\right]$
		- With $\beta$ governing the output scale (gain/amplitude)
		- $\lambda$ controlling the time scale
	- Simple and infinitely differentiable
		- So the GP will generate functions with no sharp discontinuities
	- Since RV data has activity-induced variations for up to three distinct time scales generalize to: $\gamma_{se}^{(G,G)}(t,t')=\sum_{i=1}^{N} \beta_{i}^2 \exp \left[- \dfrac{(t-t')^2}{2\lambda_{i}^2}\right]$
		- $\beta_{i}$ controls relative amplitude for each of the N components
		- Each has evolutionary time scale $\lambda_{i}$
	- Found that for 3 elements:
		- Long time scale term was unnecessary
		- Medium had to be fairly flexible and so longer term variations were captured by this term
		- Short scale was generally required
- **Quasi-periodic Covariance**
	- Formed by multiplying stationary kernel with a periodic one
	- $\gamma_{qp}^{(G,G)}(t,t')=\exp \left\{ - \dfrac{\sin^2[\dfrac{\pi(t-t')}{P}]}{2\lambda_{P}^2} - \dfrac{(t-t')^2}{2\lambda_{e}^2}\right\}$
		- P and $\lambda_{P}$ correspond to the period and length scale of the periodic component
		- $\lambda_{e}$ is an evolutionary time-scale
		- No need for amplitude as it is controlled by model parameters
	- Physically motivated but not easy to interpret
### Model framework summary
- Assume underlying stochastic process giving rise to activity signals in observables can be described by a GP with a suitably chosen covariance function
- Can use physically motivated or empirical models to provide analytical links between this GP and the available observables 
- With addition of noise and deterministic components all observables can be modeled jointly as GPs
	- Ancillary time series serve to constrain any activity component of the RVs
### Model Results
- Injecting planetary signals to see if framework can disentangle activity-induced RV variations from a planetary signal
- Find that modeling the ancillary, activity sensitive time series in conjunction with $\Delta RV$ allows for the activity component of $\Delta RV$ to be very well constrained without subsuming the non-activity RV signals by the same model
- More difficult to disentangle injected Keplerian signals as amplitude is smaller relative to activity signals
- If amplitude of Keplerian signal was not much smaller then even if the period of the signal is similar to the activity signal it was not much harder to disentangle
- Shortcomings #future-work 
	- Their simulations did not include any spot evolution
	- Non-informative priors were placed on all model parameters/hyper-parameters. Priors informed by better understanding of the kernel or more physically-motivated priors for Keplerian signals would improve it
	- Did not include any plages
## Conclusion
- Framework models RV time series jointly with one or more ancillary, activity sensitive time series, to better constrain activity signals
- Framework treats underlying stochastic process giving rise to the activity signals with a GP with a suitably chosen covariance function
- Then link the GP to the observables with addition of noise and deterministic components
- Future areas to pursue #future-work 
	- Developing more realistic relationship between RV and ancillary time series
		- Through empirical means
		- Through theoretical considerations
	- Perform more comprehensive studies of planet detection rates and false-positive rates with the framework
	- Expand tests to include plages and spot evolution
	- Investigate more physically motivated GP covariance function
		- Something from Matern class (with limited number of differentiations)
	- Investigate more physically motivated priors for all model (hyper)parameters
		- To compute Bayes factors and perform model comparison
		- Require marginalization over GP hyper-parameters
	- Use high-resolution spectra to construct a quantity that is a more sensitive proxy to stellar activity
		- Artificial neural network to get a quantity from a large dataset
	- Using a GP component to model correlated instrumental noise rather than keeping it in the white-noise component

> [!Cite]

Rajpaul, V., S. Aigrain, M. A. Osborne, S. Reece, and S. Roberts. “A Gaussian Process Framework for Modelling Stellar Activity Signals in Radial Velocity Data.” _Monthly Notices of the Royal Astronomical Society_ 452, no. 3 (2015): 2269–91. [https://doi.org/10.1093/mnras/stv1428](https://doi.org/10.1093/mnras/stv1428).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Rajpaul, V]] 
**Author**: [[Files/Authors/Aigrain, S]] 
**Author**: [[Files/Authors/Osborne, M. A.]] 
**Author**: [[Files/Authors/Reece, S]] 
**Author**: [[Files/Authors/Roberts, S]] 


> **Year**: 2015  

> **Citekey**: rajpaulGaussianProcessFramework2015a 

> **itemType**: journalArticle 

> **Journal**: *Monthly Notices of the Royal Astronomical Society* 

> **Volume**: 452 

> **Issue**: 3  

> **Pages**: 2269-2291 

> **DOI**:: 10.1093/mnras/stv1428   

  
> [!Abstract]

>

> To date, the radial velocity (RV) method has been one of the most productive techniques for detecting and confirming extrasolar planetary candidates. Unfortunately, stellar activity can induce RV variations which can drown out or even mimic planetary signals – and it is notoriously difficult to model and thus mitigate the effects of these activity-induced nuisance signals. This is expected to be a major obstacle to using next-generation spectrographs to detect lower mass planets, planets with longer periods, and planets around more active stars. Enter Gaussian processes (GPs) which, we note, have a number of attractive features that make them very well suited to disentangling stellar activity signals from planetary signals. We present here a GP framework we developed to model RV time series jointly with ancillary activity indicators (e.g. bisector velocity spans, line widths, chromospheric activity indices), allowing the activity component of RV time series to be constrained and disentangled from e.g. planetary components. We discuss the mathematical details of our GP framework, and present results illustrating its encouraging performance on both synthetic and real RV data sets, including the publicly available Alpha Centauri B data set.

>.



# Annotations%% begin annotations %%





%% end annotations %%
