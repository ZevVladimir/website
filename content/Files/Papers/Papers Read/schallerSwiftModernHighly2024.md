
---
Title: Swift: a modern highly parallel gravity and smoothed particle hydrodynamics solver for astrophysical and cosmological applications

tags: #SPM  #paper

citekey: schallerSwiftModernHighly2024

collection:

- Papers to Read

status: unread

dateread:

---
# Abstract
- Present open source, parallel, modular coupled hydrodynamics, gravity, cosmology and galaxy-formation code $\texttt{SWIFT}$
- Focus on balancing workload rather than data to make best use of HPC
- For gravity use fast-multipole method
- For gas evolution use SPH
- For neutrinos use particle based method
- Have additional sub-grid models for galaxy formation and planetary physics
# Introduction
- Currently tree walks are used for gravity which then is extended for use in neighbor finding search for SPH and then for neighbors of star particles
	- This does reduce the complexity but causes sub-optimal computational efficiency
	- This is due to how traversing a tree is inefficient due to jumps in memory as you traverse a tree for each particle
	- Current hardware wants to access memory linearly and predictably
- In SPH methods use a neighborhood definition of a certain number $N_{ngb}\sim50-500$ of particles around the particle of interest
- Use nested grids to handle the density of particles (size of neighborhoods) varying by orders of magnitudes
- Still use a classic tree-walk for gravity
# Discussion
- 
# Conclusion
- 
# Questions
- 

> [!Cite]

Schaller, Matthieu, Josh Borrow, Peter W. Draper, et al. “Swift: A Modern Highly Parallel Gravity and Smoothed Particle Hydrodynamics Solver for Astrophysical and Cosmological Applications.” _Monthly Notices of the Royal Astronomical Society_ 530, no. 2 (2024): 2378–419. [https://doi.org/10.1093/mnras/stae922](https://doi.org/10.1093/mnras/stae922).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Schaller, M]] 
**Author**: [[Files/Authors/Borrow, J]] 
**Author**: [[Files/Authors/Draper, P]] 
**Author**: [[Files/Authors/Ivkovic, M]] 
**Author**: [[Files/Authors/McAlpine, S]] 
**Author**: [[Files/Authors/Vandenbroucke, B]] 
**Author**: [[Files/Authors/Bahé, Y]] 
**Author**: [[Files/Authors/Chaikin, E]] 
**Author**: [[Files/Authors/Chalk, A]] 
**Author**: [[Files/Authors/Chan, T]] 
**Author**: [[Files/Authors/Correa, C]] 
**Author**: [[Files/Authors/van Daalen, M]] 
**Author**: [[Files/Authors/Elbers, W]] 
**Author**: [[Files/Authors/Gonnet, P]] 
**Author**: [[Files/Authors/Hausammann, L]] 
**Author**: [[Files/Authors/Helly, J]] 
**Author**: [[Files/Authors/Huško, F]] 
**Author**: [[Files/Authors/Kegerreis, J]] 
**Author**: [[Files/Authors/Nobels, F]] 
**Author**: [[Files/Authors/Ploeckinger, S]] 
**Author**: [[Files/Authors/Revaz, Y]] 
**Author**: [[Files/Authors/Roper, W]] 
**Author**: [[Files/Authors/Ruiz-Bonilla, S]] 
**Author**: [[Files/Authors/Sandnes, T]] 
**Author**: [[Files/Authors/Uyttenhove, Y]] 
**Author**: [[Files/Authors/Willis, J]] 
**Author**: [[Files/Authors/Xiang, Z]] 


> **Date**: 2024-05-11  

> **Citekey**: schallerSwiftModernHighly2024 

> **itemType**: journalArticle 

> **Journal**: *Monthly Notices of the Royal Astronomical Society* 

> **Volume**: 530 

> **Issue**: 2  

> **Pages**: 2378-2419 

> **DOI**:: 10.1093/mnras/stae922   

  
> [!Abstract]

>

> Numerical simulations have become one of the key tools used by theorists in all the fields of astrophysics and cosmology. The development of modern tools that target the largest existing computing systems and exploit state-of-the-art numerical methods and algorithms is thus crucial. In this paper, we introduce the fully open-source highly-parallel, versatile, and modular coupled hydrodynamics, gravity, cosmology, and galaxy-formation code Swift. The software package exploits hybrid shared- and distributed-memory task-based parallelism, asynchronous communications, and domain-decomposition algorithms based on balancing the workload, rather than the data, to efficiently exploit modern high-performance computing cluster architectures. Gravity is solved for using a fast-multipole-method, optionally coupled to a particle mesh solver in Fourier space to handle periodic volumes. For gas evolution, multiple modern flavours of Smoothed Particle Hydrodynamics are implemented. Swift also evolves neutrinos using a state-of-the-art particle-based method. Two complementary networks of sub-grid models for galaxy formation as well as extensions to simulate planetary physics are also released as part of the code. An extensive set of output options, including snapshots, light-cones, power spectra, and a coupling to structure finders are also included. We describe the overall code architecture, summarize the consistency and accuracy tests that were performed, and demonstrate the excellent weak-scaling performance of the code using a representative cosmological hydrodynamical problem with ≈300 billion particles. The code is released to the community alongside extensive documentation for both users and developers, a large selection of example test problems, and a suite of tools to aid in the analysis of large simulations run with Swift.

>.



# Annotations%% begin annotations %%





%% end annotations %%
