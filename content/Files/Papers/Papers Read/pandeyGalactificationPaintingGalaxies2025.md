
---
Title: Galactification: painting galaxies onto dark matter only simulations using a transformer-based model

tags: #Astrophysics-Cosmology-and-Nongalactic-Astrophysics #Astrophysics-Instrumentation-and-Methods-for-Astrophysics #Computer-Science-Machine-Learning #paper

citekey: pandeyGalactificationPaintingGalaxies2025

collection:

- Papers to Read

status: unread

dateread:

---
# Abstract
- Computationally prohibitive to run hydrodynamic simulations over volumes matching modern surveys
- Present framework for generating mock galaxy catalogs conditioned on dark matter only simulations
- Train a multi-modal transformer based model
	- Input: 3D DM density and velocity fields
	- Outputs: corresponding point cloud of galaxies with their physical properties
# Introduction
- Very difficult to run large enough, detailed enough, across enough parameter space simulations
- Very high computation requirements
- Can instead look only at N-body simulations
- Each galaxy is represented by six properties or tokens creating a "word"
# Discussion
- 
# Conclusion
- Present framework that generates realistic galaxy catalogs from learned mappings from Nbody simulations to hydrodynamical counterparts
- Reduce computational costs by factor of $\sim100$
- #future-work 
	- Apply to larger simulation volumes
	- Augment output with more observable properties
	- Explore more efficient architectures
		- Sparse or linear attention
# Questions
- 

> [!Cite]

Pandey, Shivam, Christopher C. Lovell, Chirag Modi, and Benjamin D. Wandelt. “Galactification: Painting Galaxies onto Dark Matter Only Simulations Using a Transformer-Based Model.” Preprint, arXiv, November 1, 2025. [https://ui.adsabs.harvard.edu/abs/2025arXiv251108438P](https://ui.adsabs.harvard.edu/abs/2025arXiv251108438P).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Pandey, S]] 
**Author**: [[Files/Authors/Lovell, C]] 
**Author**: [[Files/Authors/Modi, C]] 
**Author**: [[Files/Authors/Wandelt, B]] 


> **Date**: 2025-11-01  

> **Citekey**: pandeyGalactificationPaintingGalaxies2025 

> **itemType**: preprint   

  
> [!Abstract]

>

> Connecting the formation and evolution of galaxies to the large-scale structure is crucial for interpreting cosmological observations. While hydrodynamical simulations accurately model the correlated properties of galaxies, they are computationally prohibitive to run over volumes that match modern surveys. We address this by developing a framework to rapidly generate mock galaxy catalogs conditioned on inexpensive dark-matter-only simulations. We present a multi-modal, transformer-based model that takes 3D dark matter density and velocity fields as input, and outputs a corresponding point cloud of galaxies with their physical properties. We demonstrate that our trained model faithfully reproduces a variety of galaxy summary statistics and correctly captures their variation with changes in the underlying cosmological and astrophysical parameters, making it the first accelerated forward model to capture all the relevant galaxy properties, their full spatial distribution, and their conditional dependencies in hydrosimulations.

>.



# Annotations%% begin annotations %%





%% end annotations %%
