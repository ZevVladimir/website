
---
tags: #Astrophysics-Solar-and-Stellar-Astrophysics #Stars #Stellar-Modeling

citekey: xuStarspotEvolutionDifferential2021

collection:

- Papers to Read

status: unread

dateread:

---
# Notes
## Abstract
- Analysis of
	- Starspot evolution
	- Surface differential rotation (SDR)
	- The correlation between chromospheric activity indicators and the spatial connection between chromospheric and photospheric activities on the active star Kepler-411
- Construct light curves (LC) by re-performing photometry and reduction 
- Apply 2 spots model to LC segments with 3 spot groups at fix latitudes
## Main Paper
### Introduction
- Starspots 
	- Are surface manifestations of tubes of magnetic flux
		- The magnetic fields are strong enough to suppress the overturning convection 
		- This blocks the energy from the stellar interior to the surface making the spots cooler than the surrounding photosphere
	- Cause quasi-periodic modulations in the disc integrated LC
- Differential Rotation (DR)
	- Plays critical role in convective zones
	- Winds up magnetic field lines to maintain a Solar dynamo
	- Is part of the $\Omega$ effect that 'converts a poloidal magnetic field into a toroidal one by twisting it around the rotation axis'
		- Still under investigation
	- Can constrain large scale magnetic morphology of active stares and provide insight into dynamo process
### Model and Analysis
#### Spot Model
- **LCM**
	- Simulate combined photometric LC by assuming small number of circular spots covering on the stellar photosphere
	- Estimate drop in light intensity for covered area projected on the line of sight: $\sigma_{m}^n= \dfrac{1}{\pi}\int \int_{\mathrm{spot \: area}}x^m z^n dx dy$
		- $\sigma_{0}^0$ is the projected area of the spot coverage
		- $\sigma_{1}^0$ is the effect of linear limb darkening
		- xyz coordinate system orients z-axis towards observer
			- Can convert to polar with spot longitude $\lambda$ and latitude $\beta$ s.t. $\sigma_{m}^n\equiv \sigma_{m}^n(i,\lambda,\beta,\gamma)$
	- Theoretical light intensity as a function of time due to all the non-overlapping circular spots: $I_{c}(t)=U\left[1- \sum_{j}^{N_{spots}} (1-\kappa_{w_{j}}) \dfrac{3}{3-u} [(1-u)\sigma_{0}^0+u\sigma_{1}^0]\right]$
		- j is the jth spot
		- i, U, u, $\kappa_{w}$ can be taken as constants and common to all spots
- **GEMC_LCM**
	- GEMC: genetic evolution Markov chain with 2 steps
		- Hybrid between MCMC and a genetic algorithm
		- Parameter estimation based on the differential evolution Markov chain DE-MC
	- GEMC_LCM finds plausible configuration of starspots from analytical fitting of model to a given LC

## Conclusion
- Chromospheric activity found to be tightly anti-correlated with photometric variation
	- Chromospheric active region is associated with the photospheric starspot region so localized magnetic loop heating the chromospheric active region is connected to the spot region
- Correlations between CA II H and K excess emissions

> [!Cite]

Xu, Fukun, Shenghong Gu, and Panogiotis Ioannidis. “Starspot Evolution, Differential Rotation, and Correlation between Chromospheric and Photospheric Activities on Kepler-411.” _Monthly Notices of the Royal Astronomical Society_ 501, no. 2 (2021): 1878–90. [https://doi.org/10.1093/mnras/staa3793](https://doi.org/10.1093/mnras/staa3793).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Xu, F]] 
**Author**: [[Files/Authors/Gu, S]] 
**Author**: [[Files/Authors/Ioannidis, P]] 


> **Year**: 2021  

> **Citekey**: xuStarspotEvolutionDifferential2021 

> **itemType**: journalArticle 

> **Journal**: *Monthly Notices of the Royal Astronomical Society* 

> **Volume**: 501 

> **Issue**: 2  

> **Pages**: 1878-1890 

> **DOI**:: 10.1093/mnras/staa3793   

  
> [!Abstract]

>

> We present an analysis of the starspot evolution, the surface differential rotation (SDR), the correlation between chromospheric activity indicators and the spatial connection between chromospheric and photospheric activities on the active star Kepler-411, using time-series photometry over four years from Kepler, and spectroscopic data from Keck I 10-m and Lijiang 2.4-m telescopes. We constructed the light curve (LC) by re-performing photometry and reduction from the Target Pixel Files and Cotrending Basis Vectors with a manually redefined aperture using the software pyke3. An efficient program, gemc_lcm, was developed to apply a two-spots model to chosen LC segments with three spot groups at fixed latitudes (30○, 45○), (30○, 60○) and (45○, 60○). We found a periodic variation of the starspots at the period of about 660 d which independs on spot latitudes, and estimated the lower limit of SDR rate α = 0.1016(0.0023) and equatoral rotation period Peq = 9.7810(0.0169) d. Simultaneously, the relative variations of chromospheric activity indicators were derived by subtracting the overall mean spectrum from individual spectrum. It is found that Ca ii H and K emissions are strongly correlated with each other, and there also exists a correlation between Hα and Ca ii H &amp; K emissions, with large dispersion, in accordance with previous results. Furthermore, we find the correlation between Ca ii H and K emissions is different in 2011 and 2012. The chromospheric emission variation shows a highly spatial anticorrelation with the LC, suggesting a spatial connection between the chromospheric active region and spot region.

>.



# Annotations%% begin annotations %%





%% end annotations %%
