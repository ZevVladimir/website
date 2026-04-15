
---
**Title**:: Photometry as a Proxy for Stellar Activity in Radial Velocity Analyses 

tags: #RV-analysis #Stellar-Activity #Astrophysics-Solar-and-Stellar-Astrophysics #GP-Model 

citekey: kosiarekPhotometryProxyStellar2020

collection:

- Papers to Read

status: unread

dateread:

---
# Notes
## Abstract
- Stellar activity is a limiting factor in measuring precise planet parameters from RV spectroscopy
- To mitigate this can use combined analyses of both RV and time-series photometry
- Present an analysis of simultaneous photometry and RV dta of the Sun
- Use a [[Gaussian Process Model|Gaussian process]] to investigate the time variability of solar photometry and compare simultaneous photometry with RV data
- Recommend the inclusion of an additional prior in GP fits to constrain the evolutionary timescale to be greater than the recurrence timescale (rotation period) for more physically plausible/useful results
## Main Paper
### Introduction
- To understand composition and potential habitability of Earth sized planets need mass measurements
	- Can calculate bulk density
	- Interpret future atmospheric transmission spectroscopy measurements
- Stellar activity remains a large limiting factor in error to find Earth-likes
	- Stellar activity associated with rotation period affects analysis of orbiting planets or mistaken as a planetary signal
	- Star spots cause variations in stellar line profiles and centroids
### Results
#### Solar Temporal Variations using EMPIRE
- Perform GP fit with a [[Quasi-periodic kernel]] on each year of data separately
	- Limitation is that monitoring discrete changes in hyperparameters between years instead of as a continuous change
- Two fits for each year
	- First has four priors
		- Non informative prior for amplitude
		- Limit values of evolutionary time scale on the lower end (prevent overfitting) and the higher end (model unable to detect timescale larger than data's range)
		- Set limits for recurrence timescale for same reasons as evolutionary time scale
		- Constrain length scale of periodic component
			- Based on effect of active regions influencing the amount of minima
	- Second has additional prior to constrain evolutionary timescale to be larger than the recurrence timescale
		- With this recurrence timescale consistent with stellar rotation period to $1\sigma$
		- Additionally many previously multi-modal posteriors are now single peaks and better constraints on long tailed posteriors
#### Direct Comparison of Photometry with RV data
- RV data is often sparsely sampled and so poorly constrains GP hyperparameters
- Key assumption made is that stellar activity is recorded in the same way between the two data types
	- But for stars with low magnetic activity the RV data may be dominated by phenomena not found in the light curve
- Test this assumption for the Sun
	- Again have two fits with the same priors
	- Find that the posteriors are largely consistent between all datasets with the second method
## Conclusion
- Analyzed simultaneous disk-integrated photometry and RV data of the sun
- Using periodograms and autocorrelation plots often displayed power at stellar rotation period/harmonics but not always as the highest peak
- A Gaussian process analysis with a [[Quasi-periodic kernel]] of photometry can provide more reliable estimates of the star's rotation period
	- Find that the amplitude hyperparameter followed the solar magnetic cycle
	- Overall GP analysis found the correct solar rotation period more often
## Questions
- 

> [!Cite]

Kosiarek, Molly R., and Ian J. M. Crossfield. “Photometry as a Proxy for Stellar Activity in Radial Velocity Analyses.” _The Astronomical Journal_ 159, no. 6 (2020): 271. [https://doi.org/10.3847/1538-3881/ab8d3a](https://doi.org/10.3847/1538-3881/ab8d3a).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Kosiarek, M]] 
**Author**: [[Files/Authors/Crossfield, I]] 


> **Year**: 2020  

> **Citekey**: kosiarekPhotometryProxyStellar2020 

> **itemType**: journalArticle 

> **Journal**: *The Astronomical Journal* 

> **Volume**: 159 

> **Issue**: 6  

> **Pages**: 271 

> **DOI**:: 10.3847/1538-3881/ab8d3a   

  
> [!Abstract]

>

> Stellar activity remains a limiting factor in measuring precise planet parameters from radial velocity spectroscopy, not least in the search for Earth-mass planets orbiting in the habitable zones of Sun-like stars. One approach to mitigate stellar activity is to use combined analyses of both radial velocity and time-series photometry. We present an analysis of simultaneous disk-integrated photometry and radial velocity data of the Sun in order to determine the useful limits of a combined analysis. We find that simple periodogram or autocorrelation analysis of solar photometry give the correct rotation period <50% of the time. We therefore use a Gaussian process to investigate the time variability of solar photometry and to directly compare simultaneous photometry with radial velocity data. We find that the hyperparameter posteriors are relatively stable over 70 yr of solar photometry and the amplitude tracks the solar cycle. We observe good agreement between the hyperparameter posteriors for the simultaneous photometry and radial velocity data. Our primary conclusion is a recommendation to include an additional prior in Gaussian process fits to constrain the evolutionary timescale to be greater than the recurrence timescale (i.e., the rotation period) to recover more physically plausible and useful results. Our results indicate that such simultaneous monitoring may be a useful tool in enhancing the precision of radial velocity surveys.

>.



# Annotations%% begin annotations %%





%% end annotations %%
