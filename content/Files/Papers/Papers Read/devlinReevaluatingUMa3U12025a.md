
---
Title: Reevaluating UMa3/U1: star cluster or the smallest known galaxy?

tags: #Astrophysics-Astrophysics-of-Galaxies #UMaIII/U1 #Dwarf-Galaxies  #paper

citekey: devlinReevaluatingUMa3U12025a

collection:

- Papers to Read

status: unread

dateread:

---
# Abstract
- Previous studies suggest $\mathrm{UMaII/U1}$ is a dwarf galaxy based on large internal velocity distribution and improbability of long term survival if it was a DM free star cluster
- Here model evolution of $\mathrm{UMaIII/U1}$ as a star cluster
	- Collisional N-body simulation
	- Have stellar evolution and external tidal field of the MW
	- Some contain primordial binaries
- Find $\mathrm{UMa3/U1}$ has substantial remaining lifetime of $2.7\pm0.4\mathrm{Gyr}$
# Introduction
- Globular clusters are 
	- Found in halos of galaxies
	- Have not undergone substantial chemical enrichment
	- Probes of ISM at the time of their formation
	- Dense stellar environments
- Open clusters are 
	- Younger and generally less massive
	- In the disk of galaxies
	- Lower stellar densities
	- Tracers of recent star formation and ongoing chemical evolution
	- Som clusters similar to these have been found in the halo of the MW
- Dwarf galaxies 
	- Dark matter dominated (high mass-to-light ratio)
	- Have enough baryonic matter to trace distribution of DM
	- Then umber of ultra-faint dwarfs (UFDs) constrains
		- Star formation theories
		- Mass of dark matter particle
		- The position helps constrain the "Satellite Plane Problem"
		- Provide a test of the core-cusp problem
	- Differentiating between dwarfs and clusters
		- Size differences for bright systems
		- Compactness for less bright systems
		- Spread in metallicity for even less bright
	- $\mathrm{UMaIII/U1}$
		- [[smithDiscoveryFaintestKnown2024]] argue it is a galaxy based off the line of sight velocity dispersion
		- [[erraniUrsaMajorIII2024]] argue if it were a star cluster it would quickly disintegrate due to tidal interactions
	- Can only constrain the total mass of a dispersion supported star system if
		- The system is in dynamical equilibrium
		- Contamination by binary stars is minimal
			- Much more important for small systems like $\mathrm{UMaIII/U1}$
		- Contamination by foreground and background stars is negligible
	- Difficult to directly observe binaries
	- Can estimate cluster binary fractions by identifying binaries above the main sequence in color magnitude diagrams
	- Small size and low density of $\mathrm{UMaIII/U1}$ suggest it has a high present day binary fraction
# 2. Method
## 2.1 N-Body simulations
- Use $\texttt{NBody7}$ 
	- Hermite scheme
	- Handles close encounters between stars using KS and chain regularizations
	- Model stellar evolution with fitting formulas
- Need to know initial position/velocity of $\mathrm{UMaIII/U1}$ to simulate the effect of tidal stripping from the MW
	- Use $\texttt{GALPY}$ to take the current 6 phase-space coordinates to integrate a massless test particle backward in time for 12 $\mathrm{Gyr}$ under MW potential
## 2.3 Setting up the $\mathrm{UMaIII/U1}$ progenitor
- Spherically symmetric models with isotropic velocity distribution and no primordial mass segregation
- Concentration parameter $c=1$
- Metallicity $Z=0.0001$
	- Equivalent to the $\left[ \mathrm{Fe/H} \right]=-2.2$ from Smith 
- Physical half light radius $r_{h}=3\mathrm{pc}$
	- Consistently produce final observed half light radius $\approx3\mathrm{pc}$
- Use Hilker 2007 which sets up equilibrium models of stellar systems by calculating distribution function
- Use initial mass function of:
	$$\begin{align}
\xi(m)dm\sim \begin{cases}
m^{-0.3}dm\;\mathrm{for}\;m<0.4M_{\odot } \\
m^{-1.65}dm\;\mathrm{for}\;0.4M_{\odot }\leq m<1.0M_{\odot } \\
m^{-2.3}dm\;\mathrm{for}\;m\geq 1.0M_{\odot }
\end{cases}
\end{align}$$
- Conduct 2 sets of simulations with $0\%$ and $10\%$ BH and neutron star (NS) retention fractions
	- Low fractions are chosen due to the relatively small mass of the starting cluster
	- This implies lower escape velocity than predicted NS natal kick velocities for most compact remnant masses and most asymmetric supernova mechanisms
- To determine mass use trial simulations
	- Vary number of stars 
	- Then select trial simulation with remaining star count at age of $12\mathrm{Gyr}$ best matches member stars observed by Smith 2024
	- Find $N=6000$ if $0\%$ retention fraction and $N=72000$ if $10\%$ retention fraction
## 2.5 Velocity dispersion
- Simulations 1-20
	- No primordial binaries
		- Presence significantly increases computational expense
		- Can affect internal dynamics
	- Assume
		- Any binaries/higher multiples that later forma re assumed to neither collide nor exchange mass
		- Stellar evolution of individual components remains unaffected by companions
		- Justified: large semi-major axes of dynamically forming binaries
- Simulations 21-24
	- Have primordialI binary fractions of 50%
	- Binaries initialized with flat distribution in the semi major axis and masses paired at random
- Calculate component velocities of all stars in the UNIONS range relative to cluster center of mass
	- Take the standard deviation of merged list as velocity dispersion
	- Treat all binaries as single stars as a luminosity weighted average velocity
- With binaries calculate velocity dispersion
	- $\sigma_{\mathrm{lum}}=\sqrt{ \dfrac{1}{N_{s}+N_{b}}\left( \sum_{i=1}^{N_{s}}v_{i}^{2}+\sum_{j=1}^{N_{b}}v_{\mathrm{lum,j}}^{2} \right) }$
		- $N_{s}$ is the number of single stars
		- $N_{b}$ is the number of binaries
# Results and Analysis
## 3.1 Remaining Lifetime: Time to Dissolution
- Average dissolution time for 10 simulations with no primordial binaries and a 10% retention rate is
	- $\langle T_{\mathrm{diss},U} \rangle=1906\mathrm{\;Myr}\pm1348\mathrm{\;Myr}$
- Average dissolution time for ten simulations with no primordial binaries and a 0% retention rate is
	- $\langle T_{\mathrm{diss},U} \rangle=2694\mathrm{\;Myr}\pm432\mathrm{\;Myr}$
- All simulations have more stars than UNIONS can detect 
	- Compact remnants dominate the difference
	- Mean number of compact remnants without primordial binaries $\bar{f}_{\mathrm{cr}}=74\pm1\%$
	- The compact remnants concentrate in the core of the cluster
		- Increasing binding energy
		- Prolonging cluster's relaxation time
	- [[erraniUrsaMajorIII2024]] neglected stellar evolution explaining why theirs didn't last as long
- The mean time for U1 to decrease from fifty to ten stars (from notable to not noticeable)
	- Is for $f_{b,0}=0$ $\langle T_{\mathrm{diss,}U} \rangle\geq1314\mathrm{\;Myr}\pm548\mathrm{\;Myr}$
	- For $f_{b,0}=0$ and 10% retention rate $\langle T_{\mathrm{diss},U} \rangle\geq1746\mathrm{\;Myr}\pm356\mathrm{\;Myr}$
	- Thus it would be visible and smallest cluster for a significant fraction of its total age
	- Similarly if considering from 40 stars to 10
## 3.2 $\mathrm{UMaIII/U1}$ Density
- [[erraniUrsaMajorIII2024]] claim that the mean density of $\mathrm{UMaIII/U1}$ suggests that it is subject to rapid dissolution
- But their code does not have collisions and can't reproduce processes like mass segregation
	- These processes enhance central density
- When taking into account the effect of compact remnants the density increases by an order of magnitude
## 3.3 Velocity dispersion
- For the $f_{b,0}=0$ star clusters 
	- $\bar{\sigma}_{\mathrm{lun},U}=0.18\pm0.08\;\mathrm{km\;s^{-1}}$
- Analytically find $\sigma_{los}=0.114\;\mathrm{km\;s^{-1}}$
- This is much smaller than the observed velocity dispersion
- Additionally none of the simulations with $f_{b,0}=0$ have a bright enough binary to be visible to UNIONS and the present day baryon fraction is significantly lower than expected
- When adding in primordial binaries
	- $\bar{\sigma}_{\mathrm{lum},U}=4.75\;\mathrm{km\;s^{-1}}$
	- While the single stars: $\bar{\sigma}_{\mathrm{sing},U}=0.12\;\mathrm{km\;s^{-1}}$
- Found very high survival rates for hard binaries
- The high impact of binaries on the velocity dispersion means that you don't need DM to explain the observed $\sigma_{v}$
# Conclusion
- Conduct N-body simulations of $\mathrm{UMaIII/U1}$ as if it were a star cluster
- Find high velocity dispersion for clusters with primordial binaries
	- Shows that the velocity dispersion found by [[smithDiscoveryFaintestKnown2024]] is not inconsistent with star cluster
- Find average remaining lifetimes of $\mathrm{UMaIII/U1}$ is between 1.9 Gyr and 2.7 Gyr
	- Significantly longer than those of [[erraniUrsaMajorIII2024]]
- There was a significant underestimation of cluster mass by [[smithDiscoveryFaintestKnown2024]] since they do not incorporate compact remnants which make up 50-80% of the cluster mass
- #future-work altering the cluster orbit and MW potential
- 
## Questions
- 

> [!Cite]

Devlin, Scot, Holger Baumgardt, and Sarah M. Sweet. “Reevaluating UMa3/U1: Star Cluster or the Smallest Known Galaxy?” arXiv:2504.21301. Preprint, arXiv, May 1, 2025. [https://doi.org/10.48550/arXiv.2504.21301](https://doi.org/10.48550/arXiv.2504.21301).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Devlin, S]] 
**Author**: [[Files/Authors/Baumgardt, H]] 
**Author**: [[Files/Authors/Sweet, S]] 


> **Date**: 2025/05/01

> **Citekey**: devlinReevaluatingUMa3U12025a 

> **itemType**: preprint 

> **DOI**:: 10.48550/arXiv.2504.21301   

  
> [!Abstract]

>

> Ursa Major III/UNIONS 1 (UMa3/U1) is the faintest Milky Way satellite discovered to date, exhibiting a half-light radius of 3 $\pm$ 1 pc and an absolute V-band magnitude of +2.2 $\pm$ 0.4. Previous studies suggest UMa3/U1 is a dwarf galaxy, based on its large internal velocity dispersion and the improbability (indicated by dynamical cluster simulations) of its long-term survival if it were a dark-matter-free star cluster. In this paper, we model the evolution of UMa3/U1 as a star cluster using collisional N-body simulations that include a description of stellar evolution and the external tidal field of the Milky Way, with some simulations including primordial binaries. We find that UMa3/U1 has a substantial remaining lifetime of 2.7 $\pm$ 0.4 Gyr, primarily due to the retention of compact stellar remnants within the cluster. This retention is facilitated by mass segregation and the preferential loss of low-mass stars. Furthermore, we demonstrate that the observed large velocity dispersion of UMa3/U1 can be successfully reproduced. These results support the possibility that UMa3/U1 is a self-gravitating star cluster. Our simulations reveal that modelling UMa3/U1 as a dark matter free star cluster produces a markedly altered present-day mass function, driven by a strong depletion of low-mass stars. However, the degree of mass segregation among the visible stars is not statistically significant. We therefore recommend that future observations of UMa3/U1 and other very small Milky Way satellites focus on measuring their present-day mass functions to determine their nature.

>.



# Annotations%% begin annotations %%





%% end annotations %%
