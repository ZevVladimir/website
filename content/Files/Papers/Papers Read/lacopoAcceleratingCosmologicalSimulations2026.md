
---
Title: Accelerating cosmological simulations on GPUs: a step towards sustainability and green-awareness

tags: #Astrophysics-Instrumentation-and-Methods-for-Astrophysics #Cosmological-Simulation #GPU #PINOCCHIO #paper

citekey: lacopoAcceleratingCosmologicalSimulations2026

collection:

- Papers to Read

status: unread

dateread:

---
# Abstract
- Build upon GPU implementation of $\texttt{PINOCCHIO}$
	- Used for fast generation of DM halo catalogues
	- Want to investigate energy consumption
- Find that the GPU-accelerated version achieves speed up and reduces energy footprint
# Introduction
- $\texttt{PINOCCHIO}$ provides faster alternative to calculating gravitational interaction by using Lagrangian Perturbation Theory (LPT)
- 
# Discussion
- 
# Conclusion
- Assess energy efficiency of GPU-accelerated version of $\texttt{PINOCCHIO}$
- Measure energy-to-solution and time-to-solution 
- Compare different HPC platforms with AMD and NVIDIA GPUs
- AMD platforms find a larger improvement with GPUs versus CPU-only
- NVIDIA platforms find more modest improvements
- Difference is mainly the difference between peak double-precision throughput
- GPUs generally improve time and energy efficiency but depend on the system used
# Questions
- 

> [!Cite]

Lacopo, Giovanni, Marius Daniel Lepinzan, David Goz, et al. “Accelerating Cosmological Simulations on GPUs: A Step towards Sustainability and Green-Awareness.” arXiv:2601.01935. Preprint, arXiv, January 5, 2026. [https://doi.org/10.48550/arXiv.2601.01935](https://doi.org/10.48550/arXiv.2601.01935).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Lacopo, G]] 
**Author**: [[Files/Authors/Lepinzan, M]] 
**Author**: [[Files/Authors/Goz, D]] 
**Author**: [[Files/Authors/Taffoni, G]] 
**Author**: [[Files/Authors/Tornatore, L]] 
**Author**: [[Files/Authors/Monaco, P]] 
**Author**: [[Files/Authors/Elahi, P]] 
**Author**: [[Files/Authors/Varetto, U]] 
**Author**: [[Files/Authors/Cytowski, M]] 
**Author**: [[Files/Authors/Riha, L]] 


> **Date**: 2026-01-05  

> **Citekey**: lacopoAcceleratingCosmologicalSimulations2026 

> **itemType**: preprint 

> **DOI**:: 10.48550/arXiv.2601.01935   

  
> [!Abstract]

>

> The increasing complexity and scale of cosmological N-body simulations, driven by astronomical surveys like Euclid, call for a paradigm shift towards more sustainable and energy-efficient high-performance computing (HPC). The rising energy consumption of supercomputing facilities poses a significant environmental and financial challenge. In this work, we build upon a recently developed GPU implementation of pinocchio, a widely-used tool for the fast generation of dark matter (DM) halo catalogues, to investigate energy consumption. Using a different resource configuration, we confirmed the time-to-solution behavior observed in a companion study, and we use these runs to compare time-to-solution with energy-to-solution. By profiling the code on various HPC platforms with a newly developed implementation of the Power Measurement Toolkit (PMT), we demonstrate an 8x reduction in energy-to-solution and 8x speed-up in time-to-solution compared to the CPU-only version. Taken together, these gains translate into an overall efficiency improvement of up to 64x. Our results show that the GPU-accelerated pinocchio not only achieves substantial speed-up, making the generation of large-scale mock catalogues more tractable, but also significantly reduces the energy footprint of the simulations. This work represents an step towards ``green-aware" scientific computing in cosmology, proving that performance and sustainability can be simultaneously achieved.

>.



# Annotations%% begin annotations %%





%% end annotations %%
