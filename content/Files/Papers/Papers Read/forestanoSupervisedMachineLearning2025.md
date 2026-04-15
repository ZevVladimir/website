
---
**Title**:: Supervised Machine Learning Methods with Uncertainty Quantification for Exoplanet Atmospheric Retrievals from Transmission Spectroscopy 

tags: #Astrophysics-Instrumentation-and-Methods-for-Astrophysics #Computer-Science-Machine-Learning #PHysics-Data-Analysis #Statistics-Probability #Astrophysics-Earth-and-Planetary-Astrophysics

citekey: forestanoSupervisedMachineLearning2025

collection:

- Papers to Read

status: unread

dateread:

---
# Notes
## Abstract
- Bayesian retrievals for exoplanet atmospheric parameters from transmission spectroscopy are
	- Well understood
	- Widely used
	- *But* computationally expensive
- Present a study of existing machine learning regression techniques and compare performance for retrieving exoplanet atmospheric parameters from transmission spectra
- Test
	- Partial least squares (PLS)
	- Support vector machines (SVM)
	- $k$ nearest neighbors (KNN)
	- Decision trees (DT)
	- Random forests (RF)
	- Voting (VOTE)
	- Stacking (STACK)
	- Extreme gradient boosting (XGB)
- Investigate impact of different preprocessing methods
- Quantify model uncertainties
## Main Paper
### Introduction
- Study of extrasolar system planets has shifted from discovery to characterization of their chemical compositions and temperature profiles
- Transit spectroscopy is the most widely used technique to study chemical composition of transiting exoplanets
	- Primary eclipse: atmosphere observed in transmitted light when planet passes in front of the host star
	- Secondary eclipse: atmosphere observed in emitted and/or reflected light when a planet travels behind its host star
- Stellar light going through the atmosphere of the transiting planet has characteristic spectroscopic signatures in the spectrum from elements in the atmosphere and how it is arranged
- Atmospheric retrieval models are
	- Complex computational used to determine the thermal structure and chemical composition of the planet atmosphere
	- Explore the high-dimensional parameter space that best fits the observed spectrum
	- Primary component is the radiative transfer model RTM
		- Take information about geometry of planet star system
			- Mass
			-  Radii
			- Orbital parameters
		- Then specify atmospheric properties
			- Chemical abundances
			- Cloud coverage
			- Pressure-temperature profile
		- Some can include
			- Large-scale dynamical effects
			- Day/night asymmetries
			- Latitudinal/longitudinal variations
		- More realism = more complexity = more unconstrained parameters + increased computational cost
	- Traditionally based on statistical inference through use of sampling approaches like
		- MCMC
		- Nested sampling
		- These are used to perform Bayesian parameter estimation
	- Recently supervised ML techniques have been employed as alternatives
		- Many different architectures have been tried leading to uncertainty about how well the model learnt the underlying patterns in the data
	- Unsupervised machine learning has been shown to be useful for
		- Deriving an informed prior for the retrieval
		- Optimal preprocessing of the data
		- Quick planetary categorization
		- Identifying unusual spectra
### Data and Preprocessing
#### Notation and setup
- Dataset for supervised ML task has form of $s\times(f+t)$ matrix with $s$ samples $f$ features $t$ targets
	- $f$-dimensional vector $\boldsymbol{x}\equiv(x^{(1)},x^{(2)},\dots,x^{(f)})$ of the independent feature variables
	- $t$-dimensional vector $\boldsymbol{y}\equiv(y^{(1)},y^{(2)},\dots,y^{(t)})$ of the dependent target variables
	- There are $s$ instantiations of the vectors $\boldsymbol{x}$ and $\boldsymbol{y}$
- For atmospheric retrievals feature variables represent binned spectra at different wavelengths $x_{i}^{j}=M_i(\lambda_{j})$
- Target variables are the atmospheric parameters used to generate the spectrum $y_{i}^{(k)}={T,X_{H_{2}O},X_{CO_{2}},X_{CH_{4}},X_{CO},X_{NH_{3}}}_{i}$
#### Standardization of spectra
- Common in ML to standardize data which is centering/subtracting the mean $\bar{x}^{(j)}=\mathbb{E}_{i}\left[ x_{i}^{(j)} \right]=\dfrac{1}{s}\sum_{i=1}^{s}x_{i}^{(j)}$
	- Used to treat different feature variables as well as different target variables on the equal footing
- Then scale by dividing by standard deviation $\sigma_{x}^{(j)}=\sqrt{ \mathbb{E}_{i}\left[ \left( x_{i}^{(j)}-\bar{x}^{(j)} \right)^{2} \right] }=\sqrt{ \dfrac{r_{1}}{s}\sum_{i=1}^{s}(x_{i}^{(j)}-\bar{x}^{(j)})^{2} }$
- Good for when representing different quantities with different physical units or differing numerical orders of magnitude
#### Normalization of the spectra
- Alternative to standardization is to normalize each individual spectrum independently
- Center samples around their spectral means
	- $\bar{x}_{i}=\mathbb{E}_{j}\left[ x_{i}^{(j)} \right]=\dfrac{1}{f}\sum_{j=1}^{f}x_{i}^{(j)}$
	- Rescale with corresponding standard deviation of each spectrum $\sigma_{xi}=\sqrt{ \mathbb{E}_{j}\left[ \left( x_{i}^{(j)}-\bar{x}_{j} \right) \right] }=\sqrt{ \dfrac{1}{f}\sum_{j=1}^{f}\left( x_{i}^{(j)}-\bar{x_{i}} \right)^{2} }$
- In this paper the targets $y_{i}^{(k)}$ can only be standardized while $x_{i}^{(j)}$ can be standardized or normalized
- Normalization is good for when all features represent the same type of physical quantity with same units and orders of magnitude
### Discussion
- Using a predicted versus actual scatter plot can answer
	- The effect of using different preprocessing schemes
		- Find models tend to perform better when trained on data normalized as opposed to data standardized
	- Logarithmic values for the chemical abundances helps the models at both low and high values of the corresponding abundance
	- At large values of chemical abundances most models perform well
	- Most accurate predictions are made by SVM and ensemble methods (XGB,VOTE,STACK)
	- Low abundances the quality of predictions generally deteriorates
	- Overall best performers were XGB and SVM followed by STACK and VOTE
## Conclusion
- Generally in ML no method performs better than all other methods under all possible circumstances
- Find choosing right preprocessing method is just as important as choosing the right model
- Demonstrate that ML regressors (mainly XGB and SVM) are capable or reliably reproducing the planetary parameters
- #future-work 
	- Testing deep learning architecture
	- Invoke physics-motivated preprocessing including knowledge of symmetries and known degeneracies

> [!Cite]

Forestano, Roy T., Konstantin T. Matchev, Katia Matcheva, and Eyup B. Unlu. “Supervised Machine Learning Methods with Uncertainty Quantification for Exoplanet Atmospheric Retrievals from Transmission Spectroscopy.” arXiv:2508.04982. Preprint, arXiv, August 7, 2025. [https://doi.org/10.48550/arXiv.2508.04982](https://doi.org/10.48550/arXiv.2508.04982).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Forestano, R]] 
**Author**: [[Files/Authors/Matchev, K]] 
**Author**: [[Files/Authors/Matcheva, K]] 
**Author**: [[Files/Authors/Unlu, E]] 


> **Year**: 2025  

> **Citekey**: forestanoSupervisedMachineLearning2025 

> **itemType**: preprint 

> **DOI**:: 10.48550/arXiv.2508.04982   

  
> [!Abstract]

>

> Standard Bayesian retrievals for exoplanet atmospheric parameters from transmission spectroscopy, while well understood and widely used, are generally computationally expensive. In the era of the JWST and other upcoming observatories, machine learning approaches have emerged as viable alternatives that are both efficient and robust. In this paper we present a systematic study of several existing machine learning regression techniques and compare their performance for retrieving exoplanet atmospheric parameters from transmission spectra. We benchmark the performance of the different algorithms on the accuracy, precision, and speed. The regression methods tested here include partial least squares (PLS), support vector machines (SVM), k nearest neighbors (KNN), decision trees (DT), random forests (RF), voting (VOTE), stacking (STACK), and extreme gradient boosting (XGB). We also investigate the impact of different preprocessing methods of the training data on the model performance. We quantify the model uncertainties across the entire dynamical range of planetary parameters. The best performing combination of ML model and preprocessing scheme is validated on a the case study of JWST observation of WASP-39b.

>.



# Annotations%% begin annotations %%





%% end annotations %%
