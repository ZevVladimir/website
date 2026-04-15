
---
**Title**: Cosmological Simulations of Quasar Fueling to Subparsec Scales Using Lagrangian Hyper-refinement 

tags: #paper 

citekey: angles-alcazarCosmologicalSimulationsQuasar2021

collection:

- Papers Read

status: unread

dateread:

---
# Notes
## Abstract
- Present cosmological hydrodynamic simulations of a quasar-mass halo $(M_{\mathrm{halo}}\approx10^{12.5}M_{\odot}\mathrm{at\;z=2})$ 
	- Resolve gas transport down to the inner 0.1 pc surrounding the central massive BH
	- Model multiphase ISM with 
		- Stellar feedback powered by
			- Supernovae
			- Stellar winds
			- Radiation
		- Hyper-Lagrangian refinement technique
			- Increases resolution dynamically approaching the BH
	- Do not include BH feedback
- Results for subpc inflow rate
	- Can reach $\sim6M_{\odot}\mathrm{yr}^{-1}$ which is enough to power a luminous quasar
	- Highly time variable in pre-quasar phase $0.001-10M_{\odot}\mathrm{yr}^{-1}$ on Myr timescales
	- Limited to short $(\sim2\mathrm{Myr})$ active phases ($0.01-0.1M_{\odot}\mathrm{yr}^{-1}$) followed by longer periods of inactivity at lower nuclear gas density and lat times
	- Inflow rates correlate with nuclear (but decouple from global) star formation
- Rotational support dominates over turbulence and thermal pressure with star formation able to consume as much gas as provided by inflows
- Gravitational torques dominate angular momentum transport over gas self-torquing and pressure gradients
## Main Paper
### Introduction
- Quasars (QSO)
## Discussion/Conclusion
- Presented new technique to model BH growth at subpc resolution in full cosmological galaxy formation context
- Success of new hyper-Lagrangian refinement technique relies on explicit subpc scale treatment of BHs
	- Adaptive gravitational softenings
	- Adaptive star formation criteria
	- Predictive star formation efficiency
	- Resolved multiphase ISM
	- Adaptive stellar feedback
	- Time-resolved stellar evolution
	- Cooling physics for large dynamical range
	- Resolved gas gravitational capture
	- Resolved black hole dynamics
- At highest resolution time steps are as low as months
	- Would make it infeasible to go down to z=0
	- Circumvent this by using existing FIRE-2 sims to identify interesting phases for resimulation
#### Reproducing Luminous QSO Inflows
- Observed radiative output of QSOs with bolometric luminosities imply BH accretion rates of $\dot{M_{\mathrm{BH}}\sim2-20M_{\odot}\mathrm{yr^{-1}}}$
- Reproducing high inflow rates from galactics scales to the BH accretion disk is challenging
- AGN triggering processes in cosmologica/galaxy sims
	- Cold flows
	- Major and minor mergers
	- Secular processes
- Predicted inflow rates are often limited by
	- Resolution
	- Subgrid ISM physics
	- Idealized initial conditions
	- Uncertainties in BH accretion parameterization
- Find that all massive halos undergo at least one phase conducive to luminous QSO
#### Diversity of Accretion Phases on Cosmological Timescales
- Find that $full-QSO$ conditions may correspond to a special period in the host galaxy's lifetime
	- Very different conditions $\sim40\mathrm{Myr}$ before
- Another important qualitative change in accretion properties occurs at late times $z\sim1$
	- Thin rotationally supported gas disk forms
	- Has lower surface density and star formation activity
	- Have lower average accretion rate 
#### Multiscale Torques and AGN Triggering
- Diversity in physical conditions and accretion properties across the scales in the simulations
- Common feature for $\texttt{pre-QSO},\texttt{full-QSO},\texttt{late-AGN}$ phases
	- Gravitational torques from stars dominate gas angular momentum transport down to resolution limit $(\sim0.1\mathrm{pc})$
	- Gas has strong non-axisymmetries on all scales
	- Gravitational self-torquing only can become comparable to stellar torques on galactic $(\sim \mathrm{kpc})$ scales
	- Hydrodynamic torques by pressure gradients are stronger than gas self-torquing but sub-dominant to stellar torques
#### SFR-AGN Connection
- Simulations show it is crucial to include star formation and stellar evolution in gas transport calculations
	- Stellar feedback can produce galaxy-scale perturbations
		- Galactic winds
		- Coherent re-accretion events
	- Also regulates star formation locally and impacts the dynamics and multiphase structure of the ISM
	- Important implications for AGN variability and duty cycle
		- In $\texttt{pre-QSO}$ and $\texttt{late-AGN}$ conditions accretion rate is significantly suppressed where BH is embedded in the hot gas phase
		- Stellar mass return can be an important source of fueling at late times in gas poor galaxies
		- Star formation itself can decrease the gas supply for BH growth
- Connection between global SFR and instantaneous BH accretion
	- In observations have found 
		- Positive average correlations between global SFR and AGN luminosity
			- Some say: This only holds for bulge-dominated galaxies
			- Some say: Or only for highest-luminosity systems
		- Others suggest little to no connection between SFR and BH accretion
		- Others link luminous AGN activity with suppression of star formation
		- Difference could result from
			- Biases and selection effects
			- Different characteristic timescales for SF and AGN activity
	- In these sims
		- Instantaneous accretion rate varies by orders of magnitude for a given galaxy SFR
		- Find average accretion rate roughly follows $\langle M_{\mathrm{BH}} \rangle\propto \langle \mathrm{SFR} \rangle$ for star formation in small radii
		- Time variability decouples AGN activity and global SF
#### Black Hole Accretion Parameterizations
- Modern cosmological sims use subgrid BH accretion based on spherical Bondi model
	- Good for reproducing global galaxy and BH observables
	- Fail to reproduce gas inflow rates by orders of magnitude under variety of conditions
- Find inflow at subpc scales dominated by cool gas with significant rotational support (from primarily stellar gravitational support) 
	- Inconsistent with Bondi accretion
	- Would have expected spherically symmetric pressure supported gas in hydrostatic balance
- Bondi based models also predict a decrease in gas inflow rate with increasing radial distance
	- Find the opposite radial trend in these sims
- A simple freefall accretion estimator reproduces subpc inflow rates within an order of magnitude
#### Caveats and Future Prospects #future-work 
- Neglected AGN feedback
	- Accretion rates should be considered upper limits
	- Coupling efficiency of AGN feedback in $0.1-10\mathrm{pc}$ regime (thus extent of which self-regulation occurs) is uncertain
	- Future simulations will address role of self-regulation by incorporating new implementation of fast, accretion-driven winds
- Neglected accretion of stars by central BH
	- This could be an additional source of growth
	- In the future should consider incidence of tidal disruption events under extreme nuclear stellar densities
- These simulations are still $\sim3$ orders of magnitude from resolving accretion to the innermost stable circular orbit
	- The new hyper-refinement technique allows for implementing BH feedback exactly at the scale where accretion disk sims predict mass, momentum, and energy output from winds/radiation
- Sims also missing magnetohydrodynamics, conduction, viscosity, cosmic ray feedback
- Sims have been limited to explore only 3 different galactic nuclei conditions for a massive galaxy
	- Before, during and after its peak of nuclear gas density
	- Future simulations should model BH growth and feedback in the full range of environments
## Questions
-

> [!Cite]

Anglés-Alcázar, Daniel, Eliot Quataert, Philip F. Hopkins, et al. “Cosmological Simulations of Quasar Fueling to Subparsec Scales Using Lagrangian Hyper-Refinement.” _The Astrophysical Journal_ 917, no. 2 (2021): 53. [https://doi.org/10.3847/1538-4357/ac09e8](https://doi.org/10.3847/1538-4357/ac09e8).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Anglés-Alcázar, D]] 
**Author**: [[Files/Authors/Quataert, E]] 
**Author**: [[Files/Authors/Hopkins, P]] 
**Author**: [[Files/Authors/Somerville, R]] 
**Author**: [[Files/Authors/Hayward, C]] 
**Author**: [[Files/Authors/Faucher-Giguère, C]] 
**Author**: [[Files/Authors/Bryan, G]] 
**Author**: [[Files/Authors/Kereš, D]] 
**Author**: [[Files/Authors/Hernquist, L]] 
**Author**: [[Files/Authors/Stone, J]] 


> **Year**: 2021  

> **Citekey**: angles-alcazarCosmologicalSimulationsQuasar2021 

> **itemType**: journalArticle 

> **Journal**: *The Astrophysical Journal* 

> **Volume**: 917 

> **Issue**: 2  

> **Pages**: 53 

> **DOI**:: 10.3847/1538-4357/ac09e8   

  
> [!Abstract]

>

> We present cosmological hydrodynamic simulations of a quasar-mass halo (M halo ≈ 1012.5 M ⊙ at z = 2) that for the first time resolve gas transport down to the inner 0.1 pc surrounding the central massive black hole. We model a multiphase interstellar medium including stellar feedback by supernovae, stellar winds, and radiation, and a hyper-Lagrangian refinement technique increasing the resolution dynamically approaching the black hole. We do not include black hole feedback. We show that the subpc inflow rate (1) can reach ∼6 M ⊙ yr−1 roughly in steady state during the epoch of peak nuclear gas density (z ∼ 2), sufficient to power a luminous quasar, (2) is highly time variable in the pre-quasar phase, spanning 0.001–10 M ⊙ yr−1 on Myr timescales, and (3) is limited to short (∼2 Myr) active phases (0.01–0.1 M ⊙ yr−1) followed by longer periods of inactivity at lower nuclear gas density and late times (z ∼ 1), owing to the formation of a hot central cavity. Inflowing gas is primarily cool, rotational support dominates over turbulence and thermal pressure, and star formation can consume as much gas as provided by inflows across 1 pc–10 kpc. Gravitational torques from multiscale stellar non-axisymmetries dominate angular momentum transport over gas self-torquing and pressure gradients, with accretion weakly dependent on black hole mass. Subpc inflow rates correlate with nuclear (but decouple from global) star formation and can exceed the Eddington rate by ×10. The black hole can move ∼10 pc from the galaxy center on ∼0.1 Myr. Accreting gas forms pc-scale, rotationally supported, obscuring structures often misaligned with the galaxy-scale disk. These simulations open a new avenue to investigate black hole–galaxy coevolution.

>.



# Annotations%% begin annotations %%





%% end annotations %%
