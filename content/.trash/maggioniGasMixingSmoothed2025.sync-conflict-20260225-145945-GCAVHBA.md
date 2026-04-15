
---
Title: Gas mixing through a Smoothed Particle Hydrodynamics approach

tags: #Astrophysics-Instrumentation-and-Methods-for-Astrophysics #Astrophysics-Earth-and-Planetary-Astrophysics #paper

citekey: maggioniGasMixingSmoothed2025

collection:

- Papers to Read

status: unread

dateread:

---
# Abstract
- Present a new SPH approach for modeling the mixing of binary gas species for planetary environments
- The model
	- Treat each gas as a separate fluid governed by its own Euler equations
	- Coupled through collisional momentum and energy exchange terms from the Boltzmann equation
- 
# Introduction
- 
# Discussion
- 
# Conclusion
- 
# Questions
- 

> [!Cite]

Maggioni, Luca, Matteo Teodori, Gianfranco Magni, Michelangelo Formisano, Maria Cristina De Sanctis, and Francesca Altieri. “Gas Mixing through a Smoothed Particle Hydrodynamics Approach.” arXiv:2509.06590. Preprint, arXiv, September 8, 2025. [https://doi.org/10.48550/arXiv.2509.06590](https://doi.org/10.48550/arXiv.2509.06590).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Maggioni, L]] 
**Author**: [[Files/Authors/Teodori, M]] 
**Author**: [[Files/Authors/Magni, G]] 
**Author**: [[Files/Authors/Formisano, M]] 
**Author**: [[Files/Authors/Sanctis, M]] 
**Author**: [[Files/Authors/Altieri, F]] 


> **Date**: 2025-09-08  

> **Citekey**: maggioniGasMixingSmoothed2025 

> **itemType**: preprint 

> **DOI**:: 10.48550/arXiv.2509.06590   

  
> [!Abstract]

>

> Transport and mixing of gas species are of particular interest in planetary environments, where interactions among multiple species can occur within confined or porous media. In this work, we present a novel Smoothed Particle Hydrodynamics (SPH) approach for modeling the mixing of binary gas species. The model treats each gas as a separate fluid governed by its own set of Euler equations, coupled through collisional momentum and energy exchange terms derived from a kinetic relaxation model based on the Boltzmann equation. The numerical scheme employs a first-order operator splitting approach combined with a two-step Euler integrator. In this setup, the hydrodynamic evolution is first computed using standard SPH techniques to handle pressure forces. This is followed by a separate correction step that accounts for interspecies collisional exchanges. Such a decoupled treatment enables the use of a larger timestep dictated by hydrodynamics rather than the typically much smaller collisional timescale, enhancing computational efficiency. The model achieves good accuracy in reproducing the equilibration of density and temperature in a range of molecular mass ratios. Its modular structure supports natural extensions to polyatomic mixtures and enables the inclusion of additional physics, such as gas-solid interactions with dust and ice. These features make the method particularly well-suited for applications involving confined, multi-component gas systems, such as those expected during the ESA ExoMars mission.

>.



# Annotations%% begin annotations %%





%% end annotations %%
