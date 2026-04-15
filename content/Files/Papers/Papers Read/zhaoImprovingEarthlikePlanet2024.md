
---
**Title**:: Improving Earth-like planet detection in radial velocity using deep learning 

tags: #Astrophysics-Instrumentation-and-Methods-for-Astrophysics #Computer-Science-Machine-Learning #Astrophysics-Earth-and-Planetary-Astrophysics #RV-analysis #Deep-Learning 

citekey: zhaoImprovingEarthlikePlanet2024

collection:

- Papers to Read

status: unread

dateread:

---
# Notes
## Abstract
- Currently many methods to mitigate stellar activity for exoplanet detection in RV measurements
- More methods moving in direction of disentangling stellar activity at the spectral level
- Present a CNN algorithm that models stellar activity signals
	- CNN builds correlation between change in the spectral line profile and the corresponding RV, full width at half maximum (FWHM) and [[Bisector Span]] (BIS) values derived from the [[Cross-Correlation Function]] 
## Main Paper
### Introduction
- Detection of low mass planets using RV techniques is challenging in the presence of stellar activity
- Stellar activity occurs at different time scales
- Machine learning has been proposed to mitigate stellar activity
	- Supervised learning
		- [[Gaussian Process Model|Gaussian process]] 
			- Using photometric or spectroscopic data
			- Can model stellar activity with a selection of parametric kernels and priors
			- Potential drawback is data overfitting if poor choice of hyperparameters or priors
		- Convolutional neural network (CNN)
			- Detecting transiting exoplanet signals
			- Mitigating stellar activity in RVs
			- [[pergerMachineLearningApproach2023]] used CNNs to predict stellar activity affecting RVs
			- Drawbacks
				- Hyperparameter tuning 
				- Generalization from training set
	- Unsupervised learning
		- Principle component analysis
			- Eigenvectors of PCA are greatly affected by spectral line shape variation
			- Have fewer hyperparameters and may avoid overfitting
			- However, disadvantages
				- Highly dependent on quality of input data
				- Linear decomposition of inputs (non linear effects might not be captured)
### Spectra Preprocessing and Dataset Preparation
- Using just a [[Cross-Correlation Function|CCF]] does not capture information about stellar activity at the spectral level
	- Spectral lines are expected to be affected differently by stellar activity
	- CCF would ignore these effects
- However, using a full spectra is computationally complex
	- Each spectrum has hundreds of thousands of data points
- Instead use dimensional space in-between: normalized flux - flux gradient space
	- Specially chosen to reduce dimension of spectra and maximize information induced by inhibition of the convective blueshift
- Bottle neck in training a NN is limited number of observed spectra
	- Simulated data doesn't provide great results due to the complexity of the physical processes
	- So can use cross-validation technique to increase sample size during training
#### Definition and Motivation of Shell Spectral Representation
- All photospheric spectral lines share the same bisector
	- Traces the velocity of stellar convection as a function of depth into the photosphere
	- Cores of shallow spectral lines (formed in deep regions of the photosphere) are strongly blueshifted
	- Cores of strong lines (formed at the top of the photosphere) are not
	- Convection is strong deep inside the photosphere
	- Magnetic fields in active regions inhibit stellar convection and thus the cores of shallow lines
	- Wings of strong lines close to the continuum are also affected by the inhibition of convective blueshift (but not the core)
	- Bisector spectral lines encode lots of information about stellar activity
- Define the shell spectral representation as being normalized flux as a function of flux derivative with respect to wavelength
	- Due to dispersion two similar spectral lines in blue and red parts of the spectrum follow different loops in the shell spectral representation
	- To prevent the altering of signal induced by stellar activity due to the line bisector being chromatic is to define shell spectral representation as being normalized flux as a function of flux derivative with respect to velocity
- Try to link the shape variations of spectral shell due to stellar activity with the corresponding RV values
	- Must remove from spectral shell any component that corresponds to a Doppler shift
	- Do not want to model planetary signal in the NN
#### Spectral Data as a Cross-validation Dataset
- Main challenge is amount of data
	- Have $\sim1800$ daily binned spectra
	- Use method of [[Cross-validation]] to help deal with this
### Model Performance and Application
- **The Sun**
	- Find that NN produces good fit of the RV time series
	- NN captures the activity signal at half the solar rotational
	- Does not fully model some of the signal of the solar rotation
	- RMS of RV time series reduced from $0.822\mathrm{m/s}$ to $0.663\mathrm{m/s}$
	- Without YARARA correction (inject YARARA stellar activity correction component back into YARARA cleaned spectra) reduce RMS in RV $2.206\mathrm{m/s}$ to $0.872\mathrm{m/s}$
- **HD1286**
	- Find RV time series of CCFs reduced from $2.166\mathrm{m/s}$ to $0.970\mathrm{m/s}$
	- Checked how results of NN change with different YARARA corrections
		- Signals associated with stellar activity are well modeled
		- RMS of RV residual increase a lot
	- Test with exoplanet signal present
		- Find detection limit in RV semi-amplitude of trained NN is $\sim0.7\mathrm{m/s}$ for planetary signals with $10<P<300$ days
		- Signals with periods far from stellar rotation period and harmonics can reach $\sim0.5\mathrm{m/s}$
- **HD10700**
	- Star is stellar quiet and stellar activity might not be the dominant component
	- Less improvement in RMS of RV
	- No significant improvement in FWHM and BIS
	- Difficult for NN to extract information at the level of shape shells due to instrumental systematic uncertainty
	- 
### Discussion
- 
## Conclusion
- Developed a NN framework to 
	- Mitigate stellar activity at the spectral level
	- Enhance detection of low-mass planets on periods from few days to few hundred days
- Framework is flexible and takes spectral shape shell as input to predict corresponding RV, FWHM, BIS
- #future-work 
	- Add information about the flux effect induced by stellar activity
	- Training an autoencoder to model shape shells for specific spectral types rather than individual stars
- NN approach on sun reach the lowest detection threshold of 0.2m/s on the HARPS-N solar dataset
## Questions
- 

> [!Cite]

Zhao, Yinan, Xavier Dumusque, Michael Cretignier, et al. “Improving Earth-like Planet Detection in Radial Velocity Using Deep Learning.” _Astronomy & Astrophysics_ 687 (July 2024): A281. [https://doi.org/10.1051/0004-6361/202450022](https://doi.org/10.1051/0004-6361/202450022).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Zhao, Y]] 
**Author**: [[Files/Authors/Dumusque, X]] 
**Author**: [[Files/Authors/Cretignier, M]] 
**Author**: [[Files/Authors/Cameron, A]] 
**Author**: [[Files/Authors/Latham, D]] 
**Author**: [[Files/Authors/López-Morales, M]] 
**Author**: [[Files/Authors/Mayor, M]] 
**Author**: [[Files/Authors/Sozzetti, A]] 
**Author**: [[Files/Authors/Cosentino, R]] 
**Author**: [[Files/Authors/Gómez-Vargas, I]] 
**Author**: [[Files/Authors/Pepe, F]] 
**Author**: [[Files/Authors/Udry, S]] 


> **Year**: 2024  

> **Citekey**: zhaoImprovingEarthlikePlanet2024 

> **itemType**: journalArticle 

> **Journal**: *Astronomy & Astrophysics* 

> **Volume**: 687  

> **Pages**: A281 

> **DOI**:: 10.1051/0004-6361/202450022   

  
> [!Abstract]

>

> Many novel methods have been proposed to mitigate stellar activity for exoplanet detection as the presence of stellar activity in radial velocity (RV) measurements is the current major limitation. Unlike traditional methods that model stellar activity in the RV domain, more methods are moving in the direction of disentangling stellar activity at the spectral level. The goal of this paper is to present a novel convolutional neural network-based algorithm that efficiently models stellar activity signals at the spectral level, enhancing the detection of Earth-like planets. We trained a convolutional neural network to build the correlation between the change in the spectral line profile and the corresponding RV, full width at half maximum (FWHM) and bisector span (BIS) values derived from the classical cross-correlation function. This algorithm has been tested on three intensively observed stars: Alpha Centauri B (HD128621), Tau ceti (HD10700), and the Sun. By injecting simulated planetary signals at the spectral level, we demonstrate that our machine learning algorithm can achieve, for HD128621 and HD10700, a detection threshold of 0.5 m/s in semi-amplitude for planets with periods ranging from 10 to 300 days. This threshold would correspond to the detection of a $\sim$4$\mathrm{M}_{\oplus}$ in the habitable zone of those stars. On the HARPS-N solar dataset, our algorithm is even more efficient at mitigating stellar activity signals and can reach a threshold of 0.2 m/s, which would correspond to a 2.2$\mathrm{M}_{\oplus}$ planet on the orbit of the Earth. To the best of our knowledge, it is the first time that such low detection thresholds are reported for the Sun, but also for other stars, and therefore this highlights the efficiency of our convolutional neural network-based algorithm at mitigating stellar activity in RV measurements.

>.



# Annotations%% begin annotations %%





%% end annotations %%
