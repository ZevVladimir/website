
---
Title: The First Star-by-star $N$-body/Hydrodynamics Simulation of Our Galaxy Coupling with a Surrogate Model

tags: #Computer-Science-Machine-Learning #Astrophysics-Astrophysics-of-Galaxies #Physics-Computational-Physics #computer-Science-Distributed-Parallel-And-Cluster-Computing #paper

citekey: hirashimaFirstStarbystar$N$body2025

collection:

- Papers to Read

status: unread

dateread:

---
# Abstract
- Developed a new integration scheme of N-body/hydrodynamics simulations with machine learning
	- Bypass short timesteps caused by supernova explosions with a surrogate model
- Able to achieve resolution high enough for star-by-star galaxy simulation
# Introduction
- Generally use N-body/SPH simulations for galaxy simulations
	- Stars and DM are N-body particles
	- Interstellar gas is modeled with SPH particles
	- Gas distribution is realized with distributions smoothed by a kernel radius
- Have wide range of scales
	- DM halo goes to 200,000 pc but SN shells are a few pc
	- Highest temperature gas is $10^{7}\mathrm{K}$ and star forming gas is $\sim10\mathrm{K}$
	- Timescale of SN shell is years and of galactic disk rotation is $10^{8}$ years
- Bottleneck comes from need for small timesteps in localized regions with increased resolution
	- CFL time step condition for hydro
	- Smaller timesteps worsen efficiency in high-resolutions and parallelization efficiency
# Using Deep Learning with Simulations
- Split MPI Communicator in two
	- One for normal integration (main nodes)
	- One for predicting particle distribution with DL (pool nodes)
- Once a SN is detected
	- All SPH particles in a cube of 60pc are sent to a pool node
	- Normal integration continues
	- While DL predicts distribution 100,000 years later
- The DL model 
	- Predicts the distributions of gas density, temp, velocity (vx,vy,vz) 
	- Uses U-Net architecture with 3-D convolutional layers
	- Input data
		- Log of temperature
		- For each v field
			- Split by sign
			- Take absolute value
		- Have 8 data cubes
- Use an automatic Particle-particle interaction Kernel Generator for calculating gravity between particles
# Discussion
- 
# Conclusion
- 
# Questions
- 

> [!Cite]

Hirashima, Keiya, Michiko S. Fujii, Takayuki R. Saitoh, et al. “The First Star-by-Star $N$-Body/Hydrodynamics Simulation of Our Galaxy Coupling with a Surrogate Model.” Preprint, October 27, 2025. [https://doi.org/10.1145/3712285.3759866](https://doi.org/10.1145/3712285.3759866).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Hirashima, K]] 
**Author**: [[Files/Authors/Fujii, M]] 
**Author**: [[Files/Authors/Saitoh, T]] 
**Author**: [[Files/Authors/Harada, N]] 
**Author**: [[Files/Authors/Nomura, K]] 
**Author**: [[Files/Authors/Yoshikawa, K]] 
**Author**: [[Files/Authors/Hirai, Y]] 
**Author**: [[Files/Authors/Asano, T]] 
**Author**: [[Files/Authors/Moriwaki, K]] 
**Author**: [[Files/Authors/Iwasawa, M]] 
**Author**: [[Files/Authors/Okamoto, T]] 
**Author**: [[Files/Authors/Makino, J]] 


> **Date**: 2025-10-27  

> **Citekey**: hirashimaFirstStarbystar$N$body2025 

> **itemType**: preprint 

> **DOI**:: 10.1145/3712285.3759866   

  
> [!Abstract]

>

> A major goal of computational astrophysics is to simulate the Milky Way Galaxy with sufficient resolution down to individual stars. However, the scaling fails due to some small-scale, short-timescale phenomena, such as supernova explosions. We have developed a novel integration scheme of $N$-body/hydrodynamics simulations working with machine learning. This approach bypasses the short timesteps caused by supernova explosions using a surrogate model, thereby improving scalability. With this method, we reached 300 billion particles using 148,900 nodes, equivalent to 7,147,200 CPU cores, breaking through the billion-particle barrier currently faced by state-of-the-art simulations. This resolution allows us to perform the first star-by-star galaxy simulation, which resolves individual stars in the Milky Way Galaxy. The performance scales over $10^4$ CPU cores, an upper limit in the current state-of-the-art simulations using both A64FX and X86-64 processors and NVIDIA CUDA GPUs.

>.



# Annotations%% begin annotations %%





%% end annotations %%
