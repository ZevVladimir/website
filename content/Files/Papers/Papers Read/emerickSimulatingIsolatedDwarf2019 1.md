
---
Title: Simulating an isolated dwarf galaxy with multichannel feedback and chemical yields from individual stars

tags: #Dwarf-Galaxies #Simulation #ENZO #paper

citekey: emerickSimulatingIsolatedDwarf2019

collection:

- Papers to Read

status: unread

dateread:

---
# Abstract
- Developed new model for stellar feedback at grid resolutions of few parsecs using $\texttt{ENZO}$
- Simulated detailed stellar feedback from individual stars
- Follow star by star chemical yields
- Demonstrate with evolution of an isolated dwarf galaxy
	- Shows that valuable information is gained in mixing behavior of individual metal species in the multiphase ISM
# Introduction
- Need detailed ISM and chemical abundance properties of galaxies to test physical processes of galaxy evolution
- However most past work uses Lagrangian smoothed particle hydrodynamics which do not capture mixing between chemically inhomogeneous particles
	- Rely on use of sub-grid models
	- Large variance in different methods used
- Make three advances for modeling feedback and galactic chemodynamics
	- Star-by-star modeling
	- Stellar winds from both massive and asymptotic giant branch stars
	- Use adaption ray tracing method to follow stellar ionizing radiation
- Ignore formation of stars below $1 M_{\odot}$ to directly all particles that contribute to feedback and metal enrichment
	- Lower mass stars would add computational expense but don't dynamically impact the galaxy evolution
	- Results in a skewed IMF
# Discussion
- 
# Conclusion
- Develop new method simulation galaxy evolution 
	- Model multi-channel stellar feedback
	- Use individual star particles
	- Have detailed chemistry
- Simulate isolated, low mass, dwarf galaxy
	- Multichannel feedback is effective in regulating star formation
	- The feedback drives large outflows
	- Only $\sim4$ percent of metals are retained in the disk
	- The interstellar radiation field (ISRF) varies strongly in space and time
	- 
# Questions
- 

> [!Cite]

Emerick, Andrew, Greg L Bryan, and Mordecai-Mark Mac Low. “Simulating an Isolated Dwarf Galaxy with Multichannel Feedback and Chemical Yields from Individual Stars.” _Monthly Notices of the Royal Astronomical Society_ 482, no. 1 (2019): 1304–29. [https://doi.org/10.1093/mnras/sty2689](https://doi.org/10.1093/mnras/sty2689).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Emerick, A]] 
**Author**: [[Files/Authors/Bryan, G]] 
**Author**: [[Files/Authors/Mac Low, M]] 


> **Date**: 2019-01-01  

> **Citekey**: emerickSimulatingIsolatedDwarf2019 

> **itemType**: journalArticle 

> **Journal**: *Monthly Notices of the Royal Astronomical Society* 

> **Volume**: 482 

> **Issue**: 1  

> **Pages**: 1304-1329 

> **DOI**:: 10.1093/mnras/sty2689   

  
> [!Abstract]

>

> In order to better understand the relationship between feedback and galactic chemical evolution, we have developed a new model for stellar feedback at grid resolutions of only a few parsecs in global disc simulations, using the adaptive mesh refinement hydrodynamics code enzo. For the first time in galaxy-scale simulations, we simulate detailed stellar feedback from individual stars including asymptotic giant branch winds, photoelectric heating, Lyman–Werner radiation, ionizing radiation tracked through an adaptive ray-tracing radiative transfer method, and core-collapse and Type Ia supernovae. We furthermore follow the star-by-star chemical yields using tracer fields for 15 metal species: C, N, O, Na, Mg, Si, S, Ca, Mn, Fe, Ni, As, Sr, Y, and Ba. We include the yields ejected in massive stellar winds, but greatly reduce the winds’ velocities due to computational constraints. We describe these methods in detail in this work and present the first results from 500 Myr of evolution of an isolated dwarf galaxy with properties similar to a Local Group, low-mass dwarf galaxy. We demonstrate that our physics and feedback model is capable of producing a dwarf galaxy whose evolution is consistent with observations in both the Kennicutt–Schmidt relationship and extended Schmidt relationship. Effective feedback drives outflows with a greater metallicity than the interstellar medium (ISM), leading to low metal retention fractions consistent with observations. Finally, we demonstrate that these simulations yield valuable information on the variation in mixing behaviour of individual metal species within the multiphase ISM.

>.



# Annotations%% begin annotations %%





%% end annotations %%
