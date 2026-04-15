
---
tags: #Astrophysics-Instrumentation-and-Methods-for-Astrophysics #Astrophysics-Solar-and-Stellar-Astrophysics #Astrophysics-Earth-and-Planetary-Astrophysics 

citekey: lugerStarry_processInterpretableGaussian2021

collection:

- Papers to Read

status: unread

dateread:

---
# Notes
## Abstract
- Implements an interpretable [[Gaussian Process Model|GP]] for modeling variability in stellar light curves
- Allows for modeling of flux variability due to starspots
- Here the GP is explicitly dependent on the physical properties of the star (its period, inclination, and limb darkening coefficients and on the radius, latitude distributions of the spots)
## Main Paper
- Kernel the structure is determined by the physics/geometry of stellar surfaces 
- Kernel is nonstationary because of the normalization step in relative photometry
- Can be used for likelihood evaluation in small fraction of a second for datasets of ~1000
- Stable up to $l_{max}=15$ where $l$ is the spherical harmonic degree of the expansion. This is generally large enough for most purposes
## Conclusion
- 

> [!Cite]

Luger, Rodrigo, Daniel Foreman-Mackey, and Christina Hedges. “Starry_process: Interpretable Gaussian Processes for Stellar Light Curves.” arXiv:2102.01774. Preprint, arXiv, February 9, 2021. [https://doi.org/10.48550/arXiv.2102.01774](https://doi.org/10.48550/arXiv.2102.01774).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Luger, R]] 
**Author**: [[Files/Authors/Foreman-Mackey, D]] 
**Author**: [[Files/Authors/Hedges, C]] 


> **Year**: 2021  

> **Citekey**: lugerStarry_processInterpretableGaussian2021 

> **itemType**: preprint 

> **DOI**:: 10.48550/arXiv.2102.01774   

  
> [!Abstract]

>

> In this note we present the starry_process code, which implements an interpretable Gaussian process (GP) for modeling variability in stellar light curves. As dark starspots rotate in and out of view, the total flux received from a distant star will change over time. Unresolved flux time series therefore encode information about the spatial structure of features on the stellar surface. The starry_process software package allows one to easily model the flux variability due to starspots, whether one is interested in understanding the properties of these spots or marginalizing over the stellar variability when it is treated as a nuisance signal. The main difference between the GP implemented here and typical GPs used to model stellar variability is the explicit dependence of our GP on physical properties of the star, such as its period, inclination, and limb darkening coefficients, and on properties of the spots, such as their radius and latitude distributions. This code is the Python implementation of the interpretable GP algorithm developed in Luger, Foreman-Mackey, and Hedges (2021).

>.



# Annotations%% begin annotations %%





%% end annotations %%
