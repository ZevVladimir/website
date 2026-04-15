
---
Title: Modelling the nebular emission of galaxies across cosmic time with COLT

tags: #Astrophysics-Astrophysics-of-Galaxies #Astrophysics-Instrumentation-and-Methods-for-Astrophysics  #paper

citekey: mcclymontModellingNebularEmission2025

collection:

- Papers to Read

status: unread

dateread:

---
# Abstract
- Extragalactic nebular emission has been a traditional probe of processes involved in galaxy evolution
- Present update  of Monte Carlo radiative transfer code $\texttt{COLT}$
	- New thermal equilibrium solver
	- Courant-limited cooling prescription
	- Level population solver
- Applied to $\texttt{THESAN-ZOOM}$ reproduce observed-line ratios
# Introduction
- ISM determines if galaxy is star forming or quiescent, if its BH grows or stagnates, if radiation escapes or is smothered
- Nebular emissions have been key to  identifying fundamental questions in star formation, spectral features, reservoirs of gas, IMF etc.
- Current emission lines are modeled for localized regions but not well suited for galaxy scales
- Using high-resolution hydrodynamic simulations allow for nuanced treatment of ISM
	- Can use on-the-fly solvers but are computationally expensive, limited to a few energy bins, imperfectly model spatial distribution of radiation, vulnerable to incorrectly modeling ionization in Stromgren spheres
	- Post-processing allows for solving many of these issues but can require high-resolution simulations and sophisticated codes and use of subgrid physics
		- Often rely on temperature calculated on the fly which can be inaccurate
# Discussion
- 
# Conclusion
- Present upgrades to $\texttt{COLT}$
	- Thermal equilibrium solver
		- Photoionization
		- Radiative and dielectronic recombination
		- Collisional ionization
		- Charge exchange
		- Primordial and metal line emission
		- Free-free emission
		- Compton scattering off CMB photons
	- Atomic level population solver
		- Can accurately model large library of metal emission lines
	- Nebular continuum emission
- Don't have to rely on temperature calculated on the fly in the simulation
- Find that the thermal equilibrium solver reshapes the ISM phase structure where nebular emission matters but preserves diffuse halo
# Questions
- 

> [!Cite]

McClymont, William, Aaron Smith, and Sandro Tacchella. “Modelling the Nebular Emission of Galaxies across Cosmic Time with COLT.” Preprint, arXiv, October 1, 2025. [https://ui.adsabs.harvard.edu/abs/2025arXiv251013952M](https://ui.adsabs.harvard.edu/abs/2025arXiv251013952M).
  

>[!md]

**FirstAuthor**: [[Files/Authors/McClymont, W]] 
**Author**: [[Files/Authors/Smith, A]] 
**Author**: [[Files/Authors/Tacchella, S]] 


> **Date**: 2025-10-01  

> **Citekey**: mcclymontModellingNebularEmission2025 

> **itemType**: preprint   

  
> [!Abstract]

>

> Extragalactic nebular emission has long been a workhorse probe of the processes driving galaxy evolution, but the richness of JWST spectroscopy has shifted the bottleneck from data acquisition to physical interpretation and modelling. In this context, we present a major update to the Monte Carlo radiative transfer code COLT to facilitate self-consistent modelling of nebular line and continuum emission from simulated galaxies. We introduce a new thermal equilibrium solver that iteratively couples to the existing ionization solver and radiation field to compute effective gas temperatures by accurately balancing photoionization heating, radiative and dielectronic recombination, collisional ionization, charge exchange, metal and primordial line cooling, free-free emission, and Compton scattering. To prevent over-cooling where non-equilibrium hydrodynamics dominate, we introduce a Courant-limited cooling prescription tied to each cell's sound-crossing time, preserving temperatures in the diffuse halo while allowing physically motivated cooling in the interstellar medium (ISM). Applied to an isolated local galaxy simulation, the equilibrium solver reshapes the ISM phase space by reducing spuriously excessive lukewarm ($T=10^3-10^4$K) gas and better resolving warm ionized and cold neutral phases, while leaving the CGM largely intact. We further implement a level population solver based on modern atomic data, enabling accurate cooling and emissivities for a large library of UV to infrared metal lines, together with newly implemented primordial nebular continuum emission from free-free, free-bound, and two-photon processes. Finally, by applying COLT to the high-redshift THESAN-ZOOM simulations, we reproduce observed emission-line ratios, establishing COLT as a robust framework for forward modelling nebular emission across cosmic time.

>.



# Annotations%% begin annotations %%





%% end annotations %%
