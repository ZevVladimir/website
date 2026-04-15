
---
tags: #Astrophysics-Instrumentation-and-Methods-for-Astrophysics #GP-Model #RV-analysis  #Quasi-Periodic-Kernel

citekey: stockGaussianProcessesRadial2023

collection:

- Papers Read

- Papers to Read

status: unread

dateread:

---
# Notes
## Abstract
- Analyze the performance and properties of the quasi-periodic kernel
- Find that the QP-GP rotation parameter matches the simulated rotation period of the star, the length scale cannot be directly connected to the spot lifetimes on the stellar surface
- Can be advantageous to constrain the QP-GP hyper-parameters depending on the application and the goal
## Main Paper
### Introduction
- M dwarfs
	- Have a high degree of magnetic activity 
	- Are in general spot dominated
	- No stellar oscillations have been observed for M dwarfs and are expected to be  in the cm/s range
### Methods
- **Setup of investigated stellar activity configurations**
	- Focus on effects of: on stellar astrophysical noise
		- Spot sizes
		- Spot distributions
		- Spot lifetime
		- Spot number
		- Stellar rotation period 
	- Neglect instrumental jitter
#### **The quasi-periodic Gaussian process [[Quasi-periodic kernel|QP]]-[[Gaussian Process Model|GP]]**
- **Hyperparameters**
	- Physical motivation for the hyperparameters can be difficult
	- The amplitude hyperparameter, $\sigma_{GP}^{2}$, defines the absolute strength of the covariance. Can be considered the outcome of many physical processes
		- Spot size
		- Number of visible spots on the surface
		- Temperature contrast
		- Thus can not connect to a single physical parameter
	- Length scale, $l$ defines the correlation length of the signal
		- Large values suggest strong correlation for data points separated in time
		- Small values lead to weak or no correlation
		- Generally related to the life-time of activity features on the star (ex. stellar spots)
	- $P$ correlates data points that are roughly one period apart from each other
		- Should be directly connectable to the stellar rotation period
	- $\Gamma$ describes the harmonic complexity
		- Small values of $\Gamma$: points with a lag other than a multiple of $P$ are more highly correlated than for larger values of $\Gamma$ 
		- Larger values of $\Gamma$: points are less correlated if their lag is not close to a multiple of $P$
		- Related to the number of variations during one full rotation of the star and can include information about the average distribution of active regions on the surface
- **Priors**
	- Use wide and unconstrained priors to allow for maximum flexibility
	- Or curtail flexibility as much as possible to reduce "overfitting-like" behavior
		- Apply more constrained and often physically motivated priors
		- Want to incorporate all the information available into the fit
	- $\sigma_{GP}^{2}$ is difficult to constrain to to degeneracy of parameters affecting it
		- The scatter of the RV data of the star provides a physically meaningful maximum
		- Distribution is often chosen to be positive and uniform or log uniform
	- $l$ is commonly modeled with a uniform or log-uniform prior spanning large range of possible values
		- Small length scale leads to dominating squared-exponential kernel and signal decays before 1 rotation has finished
	- $P$ is common to use a uniform or log-uniform prior that spans the range of physically possible stellar rotation periods
		- Ranges from less than a day to hundreds of days
		- If possible to get an estimate from auxiliary data can further constrain
	- $\Gamma$ affect the flexibility of the GP
		- Larger values make it very flexible
		- Can be useful to impose an upper limit on $\Gamma$
		- An upper limit should be set to allow for a maximum of 2-3 inflection points within 1 rotation period
### Results of QP-GP fits to synthetic RV activity only data
- $l_{GP}$ and $P_{GP}$
	- Can be correlated given that both are in the exponential product
	- Shorter length scales mean the signal of the rotation period is less coherent over the time of observations
	- The distribution of $l_{GP}$ vs $P_{GP}$ is in three forms:
		- o-shaped distribution generally representative of spot lifetimes that are at least five time the rotation period
		- triangle-shape: A triangle that is often related to the simulated stellar rotation period on top of a plateau with small $l_{GP}$ which occurs with a dominant exponential-squared term like when the spot lifetime is close to or smaller than the rotation period
		- bar-shape: caused by how the decay of the signal cannot be constrained given the data or time of observations. Interpreted as a signal that is coherent over the entire time of observations
- **Detection of stellar rotation periods**
	- Tested two GP priors one unconstrained and one with the length scale constrained
	- For both when the spot lifetime was at least a few times larger than the rotation period the rotation period was derived accurately and precisely
	- If the spot lifetime was close to the stellar rotation timescale the estimates were less precise
		- This is expected as the signal's coherence decreases if the positions, size, and number of spots change significantly over 1 rotation
		- Period determination is additionally hurt if the spot distribution is positionally uncorrelated
	- For short spots the constrained prior performs better but still is sensitive to spot distribution and lifetimes
- **Limitations in correctly identifying the star spot lifetimes**
	- Longer simulated spot lifetimes result in longer correlation length scales of the QP-GP but no 1:1 correspondence
	- Especially for shortest spot lifetimes found many samples with length scale parameters much larger than simulated spot life
		- Could be due to how much more dynamic these are with many spots forming and decaying so there isn't enough of a coherent signal
- **Dependence of QP-GP length scale and period on jitter and RV uncertainty**
	- Difference between RV uncertainties and jitter
		- RV uncertainties the shift of the measured value is taken into account by the larger error bars of the data
		- This does not occur for white noise contribution from jitter
	- Find that the length scale is sensitive to the ratio between the simulated stellar activity amplitude $\sigma_{model}$ and the applied jitter $\sigma_{jitter}$ as well as the RV uncertainty $\sigma_{RV}$
	- If ratio between $\sigma_{\mathrm{model}}$ and either $\sigma_{RV}$ or $\sigma_{\mathrm{jitter}}$ is close to 1 the length scale is generally larger
	- If ratio is greater then $l_{GP}$ approaches lower boundary
	- The rotation period shows more stable behavior independent of the ratio
### Results of QP-GP fits to combined simulated activity and planetary signals
- Compare five different models
	- Keplerian model with only white noise
	- Keplerian model with unconstrained GP
	- Keplerian model with length scale constrained GP
	- Keplerian model with a GP with a constrained rotation period
	- Keplerian model with a GP constrained in both length scale and rotation period
- **Accuracy**
	- Use median symmetric accuracy (MSA): $\xi=100\left(\exp\left(\mathcal{M}|\ln(Q_{i})|\right)-1\right)$
		- $\mathcal{M(\dots)}$ is the median function
		- $\ln(Q_{i})$ is the natural log of the accuracy ratio
		- $Q_{i}=\dfrac{x_{1}}{y_{i}}$ is the accuracy ratio with $x_{i}$ being the predicted value (median of the posterior distribution for a fit to simulation i) and $y_{i}$ is the actual value of simulation i
		- Can be interpreted as a percentage error
	- Find that using a Keplerian with a QP-GP provides the best performance
		- Constraining the rotation period improves the analysis
		- Interestingly constraining only the length scale can lead to less accurate planet parameters
		- Constraining rotation period and length scale is almost indistinguishable from only constraining rotation period
- **Precision**
	- Investigate the distance between injected and retrieved median posterior parameters in terms of standard deviations
	- Find overall that the GPs with constraints on period and period and length scale perform best 
	- But there are configurations where completely unconstrained or even just a Keplerian result in smallest standard deviation distance
### Discussion
- **QP-GP rotation and length scale hyperparameter**
	- By considering $l_{GP}$ and $P_{GP}$ together a rotation period can be determined by the QP-GP in most cases even if the spot lifetime is on the order of the rotation period or less
	- Can be advantageous to define lower limit for the length scale
- **Best practices**
	- Adding a GP improves overall accuracy of derived planet parameters even if activity signal is weaker than planetary signal
	- GP Prior choice has only little influence on accuracy and precision of planetary parameters
	- Best GP is constrained to the stellar rotation period sometimes in combination with the length scale
	- Thus can be essential to take photometry or other data into consideration
	- Length scale constrained prior should only be used to detect rotation periods from time series data but not for simultaneous modeling of activity and planetary signals
## Conclusion
- The rotation period hyper-parameter of the QP-GP is in agreement with the stellar rotation period
- QP-GP length scale hyper-parameter correlates with the star's spot lifetime but no 1:1 connection
- Constraining the length scale of the QP-GP in the case of a plateau of samples that do not favor any specific rotation period significantly increases the efficiency of detecting the correct value of the rotation period
- To find precise and accurate planet parameters best to fit for stellar activity
- Best results when QP-GP was constrained to the rotation period or constrained to rotation period and had a minimum length scale

> [!Cite]

Stock, Stephan, Jonas Kemmer, Diana Kossakowski, Silvia Sabotta, Sabine Reffert, and Andreas Quirrenbach. “Gaussian Processes for Radial Velocity Modeling - Better Rotation Periods and Planetary Parameters with the Quasi-Periodic Kernel and Constrained Priors.” _Astronomy & Astrophysics_ 674 (June 2023): A108. [https://doi.org/10.1051/0004-6361/202244629](https://doi.org/10.1051/0004-6361/202244629).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Stock, S]] 
**Author**: [[Files/Authors/Kemmer, J]] 
**Author**: [[Files/Authors/Kossakowski, D]] 
**Author**: [[Files/Authors/Sabotta, S]] 
**Author**: [[Files/Authors/Reffert, S]] 
**Author**: [[Files/Authors/Quirrenbach, A]] 


> **Year**: 2023  

> **Citekey**: stockGaussianProcessesRadial2023 

> **itemType**: journalArticle 

> **Journal**: *Astronomy & Astrophysics* 

> **Volume**: 674  

> **Pages**: A108 

> **DOI**:: 10.1051/0004-6361/202244629   

  
> [!Abstract]

>

> <i>Context.<i/> Instrumental radial velocity (RV) precision has reached a level where the detection of planetary signals is limited by the ability to understand and simultaneously model stellar astrophysical “noise.” A common method for mitigating the effects of stellar activity is Gaussian process (GP) regression.<i>Aims.<i/> In this study we present an analysis of the performance and properties of the quasi-periodic (QP) GP kernel, which is the multiplication of the squared-exponential kernel by the exponential-sine-squared kernel, based on an extensive set of synthetic RVs, into which the signature of activity was injected.<i>Methods.<i/> The stellar activity within our synthetic data sets was simulated using astrophysically motivated models with different spot distributions and spot lifetimes rotating on the surface of a modeled late-type star. We used dynamic nested sampling to fit different model sets, including QP–GPs, Keplerian models, white noise models, and combinations of these, to synthetic RV time series data that in some cases included additional injected planetary signals.<i>Results.<i/> We find that while the QP–GP rotation parameter matches the simulated rotation period of the star, the length scale cannot be directly connected to the spot lifetimes on the stellar surface. Regarding the setup of the priors for the QP–GP, we find that it can be advantageous to constrain the QP–GP hyperparameters in different ways depending on the application and the goal of the analysis. We find that a constraint on the length scale of the QP–GP can lead to a significant improvement in identifying the correct rotation period of the star, while a constraint on the rotation hyperparameter tends to lead to improved planet detection efficiency and more accurately derived planet parameters. Even though for most of the simulations the Bayesian evidence performed as expected, we identified not far-fetched cases where a blind adoption of this metric would lead to wrong conclusions.<i>Conclusions.<i/> We conclude that modeling stellar astrophysical noise by using a QP–GP considerably improves detection efficiencies and leads to precise planet parameters. Nevertheless, there are also cases in which the QP–GP does not perform optimally, for example RV variations dynamically evolving on short timescales or a mixture of a very stable activity component and random variations. Knowledge of these limitations is essential for drawing correct conclusions from observational data.

>.



# Annotations%% begin annotations %%





%% end annotations %%
