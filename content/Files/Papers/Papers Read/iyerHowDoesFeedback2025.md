
---
**Title**:: How does feedback affect the star formation histories of galaxies? 

tags: #Astrophysics-Cosmology-and-Nongalactic-Astrophysics #Astrophysics-Astrophysics-of-Galaxies 

citekey: iyerHowDoesFeedback2025

collection:

- Papers to Read

status: unread

dateread:

---
# Notes
## Abstract
- Using CAMELS study effects of varying feedback and cosmology on the average star formation histories (SFH) of of galaxies at $z\sim0$ in IllustrisTNG, SIMBA, Astrid
- Find galaxy SFHs in all are sensitive to changes in stellar feedback
- Effects of varying AGN feedback depend on model-dependent implementations of 
	- BH seeding
	- BH accretion
	- BH feedback
- Find strong interaction terms that couple stellar and AGN feedback
	- Usually by regulating amount of gas available for the BH
## Main Paper
### Introduction
- Formation and evolution of galaxies is complex and multi-scale
	- Regulated by growth of DM halos on cosmological scales to the accretion and feedback from supermassive black holes on sub-parsec scales
	- Stochastic inflow of pristine gas into a DM halo follows accretion history of the halo
		- Provides fuel for in-situ star formation and stellar populations from galaxy mergers
	- Preventative and ejective feedback regulate availability of cold dense gas in the ISM and thus the SFR
	- Stellar feedback works locally
		- Disrupt and regulate star formation
		- Drive galactic winds
		- Primarily studied in low-mass halos and early galaxies
	- SMBHs co-evolve with the galaxy itself
		- Eventually drive strong outflows that lift gas out of halo and heat the CGM gas
		- Eventually shut down star formation in galaxies
- The interplay between gas supply and feedback mechanisms leaves distinct imprints on a galaxy's SFH
### Methods
- Use normalizing flows to sample the average SFH
- Within the $(SFH|\Theta)$ space where $\Theta$ is a set of CAMELS box parameters and galaxy properties
- Then predict either
	- SFHs given a set of CAMELS parameters
	- Perform inference to predict the CAMELS parameters given a distribution of SFHs
#### Sampling the average SFHs with normalizing flows
- Train a [[Bijection|bijective]] neural networks with two goals
	- Understand effect of varying cosmology and feedback on the average SFHs of galaxies
	- Quantify the constraints on feedback and cosmology given observation measurements of galaxy SFHs in the context of the different CAMELS models
- The two bijective neural networks are [[Simulation-Based Inference|Implicit likelihood inference]] models
	- Learn distributions $P(\Theta(\{SFH_{i}\})|\Theta_{sim})$ and $P(\Theta_{sim}|\Theta(\{SFH_{i}\}))$
		- $\Theta_{sim}$ are the CAMEL box parameters and halo mass
		- $\Theta(\{SFH_{i}\})$ are samples of average SFH of 100 galaxies in a given box or other state variables of interest
### Discussion
#### What Shapes the SFHs of Galaxies in CAMELS?
- **Cosmology and early growth**:
	- Cosmological parameters ($\Omega_{m}$ and $\sigma_{8}$) primarily affect early evolution of galaxies
		- Set the rate of structure formation and halo mass assembly
	- Higher values of $\sigma_{8}$ mean earlier collapse of density perturbations
		- More rapid gas accretion
		- More star formation
	- $\Omega_{m}$ changes amount of baryonic matter relative to DM
		- Affects the depth of the potential well at fixed halo number density
		- Higher $\Omega_{8}$ means deeper wells with galaxies retaining more baryons against feedback processes
			- Earlier rises and higher peaks in SFHs
			- Earlier BH growth which quenches galaxies earlier
- **Stellar feedback**:
	- Affects all aspects of the average SFH by directly affecting star formation
		- Changes amount of baryons available in lower mass halos
		- Affects the star formation efficiency
		- Inhibits growth of BH delaying quenching
	- Effects are often mass dependent and difficult to disentangle from other properties
- **AGN feedback**:
	- Primarily affects timescale and manner of quenching
	- Mainly affects higher-mass halos with larger SMBHs
	- Stronger feedback doesn't always mean quenching galaxies faster
		- Can inhibit growth of BH leading to longer star formation period
	- AGN and stellar feedback can be strongly coupled
- **Baryon cycling**:
	- Roughly imprinted on the SFHs through the duration over which prolonged, bursty, inefficient star formation can be sustained
## Conclusion
- Using CAMELS investigate how cosmology, stellar and AGN feedback shape the star formation histories of galaxies across cosmic time
- Identify how feedback regulates galaxy evolution
	- Coupling between stellar and AGN feedback is crucial in determining SFH shapes beyond individual effects
	- When galaxy SFHs are parameterized with a double power-law model
		- Different parts of the SFH exhibit robust correlations with physical quantities
	- Varying parameters that affect strengths of mass- and energy-loading of galactic winds create distinct signatures in both timing and efficiency of baryon cycling consistent across simulations
		- 
## Questions
- 

> [!Cite]

Iyer, Kartheik G., Tjitske K. Starkenburg, Greg L. Bryan, et al. “How Does Feedback Affect the Star Formation Histories of Galaxies?” arXiv:2508.21152. Preprint, arXiv, August 28, 2025. [https://doi.org/10.48550/arXiv.2508.21152](https://doi.org/10.48550/arXiv.2508.21152).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Iyer, K]] 
**Author**: [[Files/Authors/Starkenburg, T]] 
**Author**: [[Files/Authors/Bryan, G]] 
**Author**: [[Files/Authors/Somerville, R]] 
**Author**: [[Files/Authors/Alfonzo, J]] 
**Author**: [[Files/Authors/Anglés-Alcázar, D]] 
**Author**: [[Files/Authors/Cooray, S]] 
**Author**: [[Files/Authors/Davé, R]] 
**Author**: [[Files/Authors/Gabrielpillai, A]] 
**Author**: [[Files/Authors/Genel, S]] 
**Author**: [[Files/Authors/Hassan, S]] 
**Author**: [[Files/Authors/Hernquist, L]] 
**Author**: [[Files/Authors/Jespersen, C]] 
**Author**: [[Files/Authors/Lovell, C]] 
**Author**: [[Files/Authors/Oh, B]] 
**Author**: [[Files/Authors/Pacifici, C]] 
**Author**: [[Files/Authors/Perez, L]] 
**Author**: [[Files/Authors/Sommovigo, L]] 
**Author**: [[Files/Authors/Speagle, J]] 
**Author**: [[Files/Authors/Tacchella, S]] 
**Author**: [[Files/Authors/Tillman, M]] 
**Author**: [[Files/Authors/Villaescusa-Navarro, F]] 
**Author**: [[Files/Authors/Wu, J]] 


> **Year**: 2025  

> **Citekey**: iyerHowDoesFeedback2025 

> **itemType**: preprint 

> **DOI**:: 10.48550/arXiv.2508.21152   

  
> [!Abstract]

>

> Star formation in galaxies is regulated by the interplay of a range of processes that shape the multiphase gas in the interstellar and circumgalactic media. Using the CAMELS suite of cosmological simulations, we study the effects of varying feedback and cosmology on the average star formation histories (SFHs) of galaxies at $z\sim0$ across the IllustrisTNG, SIMBA and ASTRID galaxy formation models. We find that galaxy SFHs in all three models are sensitive to changes in stellar feedback, which affects the efficiency of baryon cycling and the rates at which central black holes grow, while effects of varying AGN feedback depend on model-dependent implementations of black hole seeding, accretion and feedback. We also find strong interaction terms that couple stellar and AGN feedback, usually by regulating the amount of gas available for the central black hole to accrete. Using a double power-law to describe the average SFHs, we derive a general set of equations relating the shape of the SFHs to physical quantities like baryon fraction and black hole mass across all three models. We find that a single set of equations (albeit with different coefficients) can describe the SFHs across all three CAMELS models, with cosmology dominating the SFH at early times, followed by halo accretion, and feedback and baryon cycling at late times. Galaxy SFHs provide a novel, complementary probe to constrain cosmology and feedback, and can connect the observational constraints from current and upcoming galaxy surveys with the physical mechanisms responsible for regulating galaxy growth and quenching.

>.



# Annotations%% begin annotations %%





%% end annotations %%
