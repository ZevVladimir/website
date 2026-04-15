
---
**Title**:: The COLIBRE project: cosmological hydrodynamical simulations of galaxy formation and evolution 

tags: #Astrophysics-Cosmology-and-Nongalactic-Astrophysics #Astrophysics-Astrophysics-of-Galaxies #COLIBRE-sims 

citekey: schayeCOLIBREProjectCosmological2025

collection:

- Papers to Read

status: unread

dateread:

---
# Notes
## Abstract
- Present COLIBRE galaxy formation model and COLIBRE cosmological hydrodynamical simulations
- New models
	- Radiative cooling
	- Dust grains
	- Star formation
	- Stellar mass loss
	- Turbulent diffusion
	- Pre-supernova stellar feedback
	- Supernova feedback
	- SMBH feedback
	- AGN feedback
- Subgrid feedback model calibrated to match observed $z\approx0$
	- Galaxy stellar mass function
	- Galaxy sizes
	- Black hole masses in massive galaxies
- Largest runs use $5\times3008^{3}$ particles
## Main Paper
### Introduction
- Hydrodynamical simulations
	- Start from $z\sim10^{2}$ with initial conditions from the CMB and surveys of large-scale structure
	- Follow growth of density fluctuations and the formation and evolution of galaxies
	- Purposes
		- Insight into astrophysical processes
		- Interpret observations of galaxies and diffuse gas
		- Investigate effect of baryon physics on cosmological probes
		- Test data analysis techniques
		- Guide design of new observational campaigns
- Many high-res zoom-in simulations allow gas to cool to $T\ll10^4\mathrm{K}$
	- Most sims of representative volumes that are run to $z=0$ suppress this cold gas phase
		- Impose effective equation of state
		- Impose a temperature floor
		- Impose a pressure floor
		- Exception: FIREbox
			- But does not predict realistic galaxy stellar masses
			- Does not include AGN feedback
			- Has no model for dust grain evolution
			- Doesn't directly track abundances of atomic/molecular H
		- Exception Romulus25 25cMpc 
			- Omits some dominant cooling channels
			- Doesn't account for molecular cooling or dust process
			- For $T>10^4K$ doesn't include metal line cooling
	- Simulations that stop at high redshift run the risk of using models that do not work for lower redshift
- To reproduce correctly modern observations need subgrid models especially of galactic winds driven by star formation and AGN feedback
	- Designed to circumvent 'numerical overcooling'
		- A result of limited resolution
		- Causes energy/momentum from stars/AGN to be initially distributed over too much gas mass
			- Too low post shock-temperatures
			- Too short cooling times
	- To mitigate numerical overcooling
		- Decouple winds from hydrodynamics of ISM
			- Now wind particles cannot heat or inject turbulence into the ISM
			- Ignore work done by winds in the ISM
		- Inject feedback energy less often but in larger amounts
			- Feedback can be too bursty
			- Have overly large bubbles in the ISM
			- Poor sampling of feedback processes
- Subgrid prescriptions for feedback introduce free parameters
	- Tend to be more numerical than physical
		- Control the effectiveness of feedback
		- Are not predicted from first principles
	- Often calibrated to broadly reproduce a chosen set of observables
	- Calibration generally depends on numerical resolution
		- Higher resolution allows for direct simulation of smaller scales and new phenomena
		- Implications of keeping subgrid parameters fixed depends on arbitrary choices in the parametrization
		- Change in resolution affects the galaxy formation model
	- Calibration weakens ab initio predictive power relative to dark matter only simulations
- Motivation for preventing the formation of a cold ISM phase would prevent artificial fragmentation due to failure to resolve the Jeans scales
- Imposing pressure floor could make simulations more sensitive to resolution
	- In the absence of a cold phase the ISM is too smooth
- For COLIBRE
	- Subgrid feedback is calibrated to reproduce as closely as possible to observed $z\sim0$
		- Calibrated to
			- Galaxy stellar mass function
			- Galaxy half-mass radii
			- BH masses of massive galaxies
		- Use machine learning to perform the calibration to the mass function and sizes at lowest resolution [[chaikinCOLIBRECalibratingSubgrid2025]]
		- Make adjustments by hand when increasing the resolution or switching from thermal to hybrid AGN feedback 
	- Dust and chemistry modules include parameters based on comparison of test simulations with observations
### Simulations
- Use SWIFT [[schallerSwiftModernHighly2024]] for running the simulations
- Use subhalo finder $\mathrm{HBT-HERONS}$ 
	- Uses history-based approach for subhalo identification
	- Uses iterative unbinding procedure to find self-bound subhalos within spatial Friends-ofFriends groups through each subsequent snapshot
	- After finding a self-bound subhalo track its associated forward in time
		- 10 most gravitationally bound tracer particles link subhalos to a host FoF group
		- This determines when subhalos become satellites to other subhalos
	- When outputting check for self-boundness and phase-space overlap with other subhalos
- Use Spherical Overdensity and Aperture Processor ($\mathrm{SOAP}$) to compute set of subhalo properties
	- Subhalo stellar and halo masses
	- Star formation rates
	- Projected stellar half-mass radii
	- Gas and stellar metallicities
	- $H_{I}$ and $H_{2}$ gas masses
	- Mass of most massive BH particles 
	- Halo masses are calculated with spherical overdensity definition
	- Galaxy properties are measured within 3D spherical apertures considering only gravitationally bound particles
#### The $\mathrm{COLIBRE}$ model
- **Radiative cooling, chemistry and dust**
	- Use $\mathrm{CHIMES}$ and $\mathrm{HYBRID-CHIMES}$ to handle
		- Calculating non-equilibrium abundances of H and He species and associated free electrons and radiative cooling and heating rates
		- Track cooling rates of C, N, O, Ne, Mg, Si, S, Ca, Fe 
		- Include dust-associated heating and cooling processes with a live dust grain model
		- Account for cosmic ray heating and Compton cooling and heating from energy exchange between gas and photons from the CMB and other radiation fields
	- Cooling rates and abundance of ions/molecules are evolved assuming the presence of a modified version of the uniform, redshift-dependent UV and X-ray background, cosmic ray ionization background, and a interstellar radiation field (ISRF)
	- Use a subgrid model for the formation and evolution of interstellar dust grains
		- Track three chemical species of dust grains
			- Graphites
			- Silicates
				- Mg
				- Fe
		- Dust grains are produced in the AGB phase of stellar evolution and in core collapse supernovae (CC SNe)
		- Dust grains accrete mass from gas phase
		- Have two processes to alter size without changing mass
			- Grain shattering
			- Coagulation
- **Star formation, stellar evolution, and chemical enrichment**
	- Star formation
		- Gas element is star-forming if the gas is locally unstable against gravitational collapse
		- Can't directly follow gas collapse into stars
		- Convert star forming gas particles into stellar particles stochastically
	- Assume stellar particles are characterized by a Chabrier stellar initial mass function
	- Stellar particles enrich surrounding gas with metals produced in six chemical enrichment channels
		- AGB stars
		- Type-Ia SNe
		- CC SNe
		- Neutron star mergers
		- Common envelope jet SNe
		- Collapsars
	- Stellar feedback includes 3 early stellar feedback processes from massive stars
		- Stellar winds
		- Direct radiation pressure
		- $H_{II}$ regions
- **Core collapse supernova feedback**
	- Modified version of thermal-kinetic model of Chaikin (2023)
		- With modification that they assume the energy of a single SN depends on the thermal pressure of the parent gas particle
	- Energy of a CC SN feedback is injected stochastically into the gas within the SPH kernel of the stellar particle
		- A fraction is injected kinetically while the remainder is distributed in thermal form
		- Determine the kinetic fraction with emulators
- **Thermal channel of energy injection**
	- Use stochastic model like what was used in $\mathrm{EAGLE}$
		- Gas particles receive SN energy from nearby stellar particles with a probability
		- Amount of injected energy is chosen such that after the injection the particle's temperature is increased by a fixed, pre-defined amount
		- The heating temperature increment depends on gas density
- **A density-dependent heating temperature**
	- Assume that the value of the heating temperature depends on the average (physical) gas density at the location of hte star particle
		- The location is estimated in the time-step when the star particle does SN feedback
- **Kinetic channel of energy injection**
	- Remaining CC SN energy that isn't from the thermal channel is in the kinetic channel
	- Stellar particles inject kinetic energy with a probability
	- Draw a random number of times for how many kick events from a stellar particle
		- Each stellar particle kicks *two* of its gas neighbors to conserve linear momentum
		- Additionally ensures that angular momentum and energy in SN feedback are exactly conserved
- **Type-Ia supernovae**
	- Implement as purely thermal isotropic stochastic feedback
	- Assume heating temperature scales with gas density like in CC SN feedback
	- Energy released by one stellar particle corresponds to combined energy from many individual type-Ia SNe that are unresolved
	- Energetically this feedback is subdominant to CC SNe
- **Supermassive black holes**
	- Represented by collisionless BH particles
	- Grow from accreting surrounding gas and/or by merging with other BHs
	- Use an on-the-fly FoF group finder to seed BH particles
		- Identify densest gas particle in the FoF halo and convert it to a BH particle inheriting the gas particle's properties
	- BHs merge instantly when three conditions are met
		- Within three gravitational softening lengths
		- Less massive BH is within the kernel of the more massive BH
		- Their relative velocity satisfies $\Delta v_{\mathrm{BH}}<\sqrt{ 2G(M_{m}/\Delta r_{\mathrm{BH}}) }$
	- SMBHs have to be moved ad hoc towards the center of the galaxy
- **Feedback from AGN**
	- $\mathrm{COLIBRE}$ has both purely thermal AGN feedback sims and ones with hybrid AGN feedback mode (BH spin dependent kinetic jets and thermal energy injections)
	- Like stellar feedback injecting energy into surrounding gas may result in numerical overcooling if it is insufficient to increase the temperature of the gas in which energy is injected to values high enough for the cooling time to be long
		- Wait until sufficiently large amount of energy is accumulated
	- Use a minimum distance algorithm to determine which gas neighbors receive the input energy
### Emulators
- Use [[Gaussian Process Model|Gaussian process]] emulators to determine optimal values of the subgrid parameters for SN and AGN feedback
- Setup $\sim200$ simulations that sample part of the $\mathrm{COLIBRE}$ parameter space of interest
	- Use Latin hypercube sampling
	- Simulations are used to train emulators to interpolate to other points in the parameter space
	- Emulators provide continuous reconstruction of the parameter space without additional simulations
- Emulate two relations to calibrate SN and AGN feedback
	- Galaxy stellar mass function (GSMF) at $z=0$
		- Input/output
			- Input variable is galaxy stellar mass
			- Output variable is the number of galaxies per unit volume per logarithmic bing of stellar mass
			- Performed in log space
		- Provides stringent constraint on evolution of stellar mass in Universe
			- Determines total stellar mass formed in Universe
			- Determines the relative abundance of low and high mass galaxies
	- Size-stellar mass relation (SSMR) at $z=0$
		- Input/output
			- Input is also stellar mass
			- Output is median projected stellar half-mass radius of simulated galaxies 
			- Performed in log space
		- Additional constraint that in conjunction with GSMF constrains properties of simulated galaxies
## Conclusion
- Presented the calibration of the $\mathrm{COLIBRE}$ subgrid model 
- Include improvements and modification over $\mathrm{OWLS}$ and $\mathrm{EAGLE}$
	- PResence of cold interstellar gas phase
	- Suppression of spurious energy transfer from DM to baryons
	- Model for formation and evolution of dust grains coupled to the chemistry
	- Use of a non-equilibrium network for the calculation and radiative cooling rates and ion and molecular fractions of hydrogen and helium
	- Improved prescriptions for the modeling of all subgrid physics processes
- Use GP emulators to calibrate SN and AGN feedback
## Questions
- What is Compton cooling and heating?
- What is the AGB phase of stellar evolution?
- What is the Schmidt (1959) law? for star formation 

> [!Cite]

Schaye, Joop, Evgenii Chaikin, Matthieu Schaller, et al. “The COLIBRE Project: Cosmological Hydrodynamical Simulations of Galaxy Formation and Evolution.” arXiv:2508.21126. Preprint, arXiv, August 28, 2025. [https://doi.org/10.48550/arXiv.2508.21126](https://doi.org/10.48550/arXiv.2508.21126).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Schaye, J]] 
**Author**: [[Files/Authors/Chaikin, E]] 
**Author**: [[Files/Authors/Schaller, M]] 
**Author**: [[Files/Authors/Ploeckinger, S]] 
**Author**: [[Files/Authors/Huško, F]] 
**Author**: [[Files/Authors/McGibbon, R]] 
**Author**: [[Files/Authors/Trayford, J]] 
**Author**: [[Files/Authors/Benítez-Llambay, A]] 
**Author**: [[Files/Authors/Correa, C]] 
**Author**: [[Files/Authors/Frenk, C]] 
**Author**: [[Files/Authors/Richings, A]] 
**Author**: [[Files/Authors/Moreno, V]] 
**Author**: [[Files/Authors/Bahé, Y]] 
**Author**: [[Files/Authors/Borrow, J]] 
**Author**: [[Files/Authors/Durrant, A]] 
**Author**: [[Files/Authors/Gebek, A]] 
**Author**: [[Files/Authors/Helly, J]] 
**Author**: [[Files/Authors/Jenkins, A]] 
**Author**: [[Files/Authors/Lacey, C]] 
**Author**: [[Files/Authors/Ludlow, A]] 
**Author**: [[Files/Authors/Nobels, F]] 


> **Year**: 2025  

> **Citekey**: schayeCOLIBREProjectCosmological2025 

> **itemType**: preprint 

> **DOI**:: 10.48550/arXiv.2508.21126   

  
> [!Abstract]

>

> We present the COLIBRE galaxy formation model and the COLIBRE suite of cosmological hydrodynamical simulations. COLIBRE includes new models for radiative cooling, dust grains, star formation, stellar mass loss, turbulent diffusion, pre-supernova stellar feedback, supernova feedback, supermassive black holes and active galactic nucleus (AGN) feedback. The multiphase interstellar medium is explicitly modelled without a pressure floor. Hydrogen and helium are tracked in non-equilibrium, with their contributions to the free electron density included in metal-line cooling calculations. The chemical network is coupled to a dust model that tracks three grain species and two grain sizes. In addition to the fiducial thermally-driven AGN feedback, a subset of simulations uses black hole spin-dependent hybrid jet/thermal AGN feedback. To suppress spurious transfer of energy from dark matter to stars, dark matter is supersampled by a factor 4, yielding similar dark matter and baryonic particle masses. The subgrid feedback model is calibrated to match the observed $z \approx 0$ galaxy stellar mass function, galaxy sizes, and black hole masses in massive galaxies. The COLIBRE suite includes three resolutions, with particle masses of $\sim 10^5$, $10^6$, and $10^7\,\text{M}_\odot$ in cubic volumes of up to 50, 200, and 400 cMpc on a side, respectively. The two largest runs use 136 billion ($5 \times 3008^3$) particles. We describe the model, assess its strengths and limitations, and present both visual impressions and quantitative results. Comparisons with various low-redshift galaxy observations generally show very good numerical convergence and excellent agreement with the data.

>.



# Annotations%% begin annotations %%





%% end annotations %%
