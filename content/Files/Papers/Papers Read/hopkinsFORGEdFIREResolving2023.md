
---
**Title**:: FORGE'd in FIRE: Resolving the End of Star Formation and Structure of AGN Accretion Disks from Cosmological Initial Conditions 

tags: #Astrophysics-Cosmology-and-Nongalactic-Astrophysics #Astrophysics-Instrumentation-and-Methods-for-Astrophysics #Astrophysics-Astrophysics-of-Galaxies #Astrophysics-High-Energy-Astrophysical-Phenomena #Astrophysics-Solar-and-Stellar-Astrophysics #Zoom-In-Simulations #FIRE-sims

citekey: hopkinsFORGEdFIREResolving2024

collection:

- Papers to Read

status: unread

dateread:

---
# Notes
## Abstract
- Now can zoom-in from cosmological to sub-pc scales in galaxy sims to follow accretion onto SMBHs
- Eventually approximations on ISM scales break down
	- Optically-thin cooling
	- Stellar-population-integrated star formation SF and feedback FB
- Present cosmological radiation-magnetohydrodynamic (RMHD) simulation
	- FIRE physics (Galactic/ISM scale)
	- STARFORGE physics (small scales where individual (proto)stellar formation/evolution is tracked)
	- Explicit RMHD
		- Non-ideal MHD
		- Multi-band M1-RHD
		- Treats both optically thick and thin regimes
	- Scales from $\sim100 Mpc$ to $<100au$
- Here focus on how gas gets into a small scale flux frozen disk (gravitoturbulent and stabilized by magnetic pressure sustaining strong turbulence and inflow with persistent spiral modes) and how star formation is efficiently suppressed
## Main Paper
### Introduction
- Want to know more about origins and growth of SMBHs
	- Constraints indicate most of the BH mass is assembled via accretion of gas in a few bright quasar phases
	- Idea of "co-evolution" between galaxies and AGN or quasars can also explain
		- AGN feedback with galactic winds
		- Regulation of galaxy masses
		- Changing structure of CGM or IGM
	- Also need to understand how gas is transported from cosmic web ($\gtrsim Mpc$) down to scale to order of innermost stable circular orbit (ISCO)/Event horizon ($\sim R_{s}\sim 2R_{g}\sim_{2}GM_{BH}/c^{2}\sim au(M_{BH}/5\times 10^7M_{\odot})$) 
		- Must be down quick enough to not be turned into stars or ejected from the galaxy\
- Still many questions
	- Not yet possible to bridge gap between new $\gtrsim pc$ scales and traditional $Q\gg 1$ accretion disk
		- Issue of dynamic range but also physics
		- Physics believed to drive accretion on small scales (like magneto-rotational instability) are qualitatively different from the physics of gravitational torques on larger scales
		- Not clear what occurs when the different physics most relevant on different scales intersect
		- Require so far too wide range of scales 
			- Large scales $\gtrsim10-100\mathrm{pc}$ simulations of high-redshift quasar fueling require cosmological dynamics
			- Smaller scales $\lesssim 10\mathrm{pc}$ simulations of star formation need to follow individual stars and protostars
			- Even smaller scales around a SMBH needed to accurately evolve radiation-magneto-hydrodynamics
		- Simulations using super-Lagrangian hyper-refinement have either
			- Had to stop at some radius or resolution where physics prescriptions cease to make sense
			- Consider only restricted special cases like accretion onto low-redshift SMBHs at extremely low accretion rates in gas-poor ellipticals (star formation and many other processes can be neglected)
			- Simply neglect most of the physics above even on scales where they could be important
### Numerical Methods
#### Initial Conditions and Refinement Choices
- Initial condition is a fully cosmological zoom in simulation
	- Evolves from large box from $z\gtrsim100$
	- Resolution concentrated in a $\sim 10Mpc$ comoving volume centered on "target" halo of interest
- Refinement scheme
	- Run from $z\sim 100$ down to (here) $z<4$ with a dynamic refinement scheme
		- See paper for details on refinement scheme
		- Once refined a cell cannot be de-refined unless it escapes far from the galaxy to preserve low density structures
	- Then select specific time $t_{0}$ from original simulation just before a period where it identified rapid quasar-level SMBH growth and restart simulation with additional refinement layer
		- See paper for details on refinement scheme
		- The refinement layer does not "instantly" activate but appears as a smooth function
			- Reduces initial noise and spurious features
			- Also don't want to refine to fast or too slow which can have memory issues or fail to reach target resolution
	- Each level of refinement increases the spatial resolution and mass resolution and decreases the time scales
### Results
### Different Characteristic Scales/Regimes
- Have dynamic range of $\sim 10^{13}$ from smallest spatial scale around SMBH to entire cosmological box
- Split scales into
	- IGM -> CGM
		- $\gg 100 \mathrm{kpc}$ IGM is 
			- "cool" ($\sim 10^4\mathrm{K}$)
			- diffuse ($\rho\ll 10^{-2}m_{p}\mathrm{cm^{-3}}$)
			- quasi-spherical $(H/R\sim 1)$
			- dark matter dominated
			- Weakly magnetized ($\beta_{\mathrm{plasma}}\equiv \dfrac{P_{\mathrm{thermal}}}{P_{\mathrm{magnetic}}}=nk_{B}T/(|\boldsymbol{B}|^{2}/8\pi)\gg 100$) 
			- Weak outflows
			- Strong primarily radial ($\Pi_{rr}\equiv \langle \rho \: v_{r}\:v_{r} \rangle$ dominates the kinetic stress tensor) super-sonic inflows of $(\sim 300 M_{\odot})\mathrm{yr^{-1}}$ onto the halo
		- Gas is free-fall collapsing with dark matter
	- CGM -> Galactic ISM
		- $\sim 10-100 kpc$ the volume-filling gas in the CGM is shock-heated to virial temperatures $(\sim 10^{6}\mathrm{K})$ with $\beta_{\mathrm{plasma}}\sim 100$
		- Gas is multi-phase with accretion and outflows of comparable magnitude
			- Outflows prominent in the diffuse/volume filling phases
			- Inflows dominated by accretion of "cool" $(\lesssim 10^5 \mathrm{K})$ gas along filaments
	- Galactic ISM -> Galactic Core/Proto-Bulge
		- $1-10\;\mathrm{kpc}$ in the galaxy the gas is highly multi-phase with self-shielding of the UV radiation field
		- Have a "cold" neutral medium (CNM) and molecular medium with $T\ll 10^4 \mathrm{K}$ alongside hot gas with $T\gtrsim10^7\mathrm{K}$ from SNe
		- Gas densities range $\lesssim 10^{-2}m_{p}\mathrm{cm}^{3}\to\gg 10m_{p}\mathrm{cm}^{3}$
		- $\beta_{\mathrm{plasma}}$ ranges from $\sim 0.1 \to \sim 1-10$ from cold to warm phases and up to $\sim 100$ in the most diffuse volume filling phases
		- Cold complexes maintain most of the SF
			- SFR within $< 10 \mathrm{kpc}$ of $\sim 50-100 M_{\odot}\mathrm{yr}^{-1}$
			- Potential becomes dominated by stars inside a few kpc
		- Turbulence is mildly super sonic $\mathrm{ sonic }\;\mathcal{M}_{s}\sim 1-\;\mathrm{a \;few}$ in a volume averaged sense
		- But highly super sonic $(\mathcal{M}_{s}\sim 10-100)$ in the "cold" phases
		- Most gas is atomic or molecular
		- Thermal [[Toomre Q parameter]] drops to $\ll1$ in the cold phases
			- Fragmentation via self-gravity is rapidly promoted
			- The characteristic "most unstable" fragment masses expected to contain most of the power in the fragment mass spectrum $(\sim 10^7\to10^9M_{\odot})$
		- System is extremely inhomogeneous
	- Galactic Core/Proto-Bulge -> Galactic Nucleus
		- $\sim 0.1-1 \mathrm{kpc}$ similar to Galactic ISM
		- Significant fraction of SFR comes from these radii
		- Gas is primarily molecular by mass
		- Turbulence in supersonic and super-Alfvenic $(\mathcal{M}_{s}\sim \mathcal{M}_{A}\sim 3-10)$
		- Potential is deeper
		- Density and surface density scales are higher
		- Outflows weaken again relative to inflow
		- Radial $\Pi_{rr}$ component does not strongly dominate the stress
		- Accretion is strongly dominated by gravitational torques
		- System begins to be optically thick to cooling radiation in NIR/optical/NUV/UV bands so IR radiation energy density rises
	- Galactic Nucleus -> Black Hole Radius of Influence (BHROI)
		- $10-100\mathrm{pc}$
		- Increasing density and surface. density scale means gas cools rapidly
		- "Hot" and "warm ionized" phases vanish rapidly
		- By $10 \mathrm{pc}$ gas has an average temperature of $\lesssim 1000\mathrm{K}$
		- $\beta_{\mathrm{plasma}}$ drops from $\sim 1$ to $\lesssim 0.01$ at inner radii
		- Outflows diminish as stellar feedback becomes highly inefficient
		- Strong instability, fragmentation to more "GMC-like" mass scales, inhomogeneity, and highly super-sonic turbulence remains
		- Region is still actively star forming
		- Gravitational torques dominant still in this regime
	- BHROI -> "Torus"
		- $\sim 1-10 \mathrm{pc}$ BH begins to dominate the potential but stars dominate over gas in local fluctuations of the potential
		- System is now fully optically thick to its own cooling radiation
		- Denser gas is now warmer
		- Densities in midplane and dense gas phases now are high enough that dust and gas kinetic temperatures start to couple
			- But large inhomogeneity of medium and much shorter dynamical times mean it is a weak/incomplete coupling
		- Turbulence remains highly super-sonic but only mildly super-Alfvenic
		- Gravitational torques dominate teh visual structure
	- "Torus" -> Non-Star-Forming-Disk
		- $\sim 0.1-1\mathrm{pc}$
		- Temperature rise to a few $10^3\mathrm{K}$
		- Stream of gas tidally torn from the external gas complex and fueling the accretion disk 
			- Begins to circularize and self-intersect
			- Forms a more coherent disk
		- Rapid rise of $Q_{\mathrm{turb}}$ and $Q_{mag}$
		- Star formation continues
		- Approaching $\lesssim 0.1 \mathrm{pc}$ star formation effectively ceases
	- Non-Star-Forming-Disk -> "Accretion Disk"
		- $\sim 0.01-0.1 \mathrm{pc}$
		- Just outside $\sim 0.1 \mathrm{pc}$ crucial transition
			- $Q_{\mathrm{thermal}}$ increases to $\gtrsim 1$ with $Q_{mag}\gg1$ dominated by increasingly-organized toroidal fields
			- Characteristic maximal fragment mass $\sim \pi \Sigma_{\mathrm{gas}}H^{2}$ drops into stellar mass range
			- Star formation shuts down
		- Disk mass is now locally gas-dominated instead of stellar-dominated
			- Gravitational torques become inefficient
			- See $m=1$ modes propagate into these radii and gravito-turbulent behavior
		- Combination of Maxwell and Reynolds stresses take over as provider of torques
		- Disk becomes increasingly well ordered
		- Disk is strongly-magnetized
		- Turbulence becomes modestly sub-Alfvenic
	- "Accretion Disk" -> ISCO
		- $\ll0.01pc$
		- Dis essentially in regime of a traditional $\alpha$-like accretion disk
			- Optically thick
			- Geometrically thin
			- Radiating increasingly like a blackbody
			- Nearly-Keplerian and close to circular
			- Gravitationally stable
			- Not able to fragment efficiently at all
		- However
			- Effective black-body cooling time is much shorter than the dynamical time
			- Turbulence is supersonic
				- Maintains a quasi-isothermal relatively cool global structure
			- Disk is strongly magnetized
#### Mass and Accretion Rate Profiles
- Quantities related to the mass and mass flows
	- Circular velocity ($V_{c}\equiv \sqrt{ GM_{\mathrm{enc}(<r)/r} }$) and its contribution from the SMBH, gas, stars, and DM
	- Radial profile of surface density $\Sigma_{gas}$ and mid-plane three dimensional density $\rho$ and the inflow and outflow rates $\dot{M}$ through each annulus
- Since $V_{c}^{2}\propto M_{\mathrm{enc}}$ at some r can see where different components dominate the potential and local matter distribution
- Density profiles and $V_{c}$ profiles of stars, gas, and DM demonstrate that there is a reasonably well defined galaxy center on $\gtrsim 10 \mathrm{pc}$ 
- Since the duration of the simulation at these high resolutions is short compared to global dynamical/evolution timescales then profiles are robust to time
- Find surprisingly close-to-constant mass accretion $\dot{M}_{\mathrm{in}}(r)$ from radii $\sim \mathrm{Mpc}$ down to $\lesssim 10^{-3}\mathrm{pc}$ surprising because
	- Wildly different characteristic dynamical times on these scales
	- Radii are strongly out of equilibrium (this does produce some large "wiggles" in $\dot{M}_{in}$) but produces more dramatic variation in outflow rates $\dot{M}_{\mathrm{out}}$ at different radii 
- Possible that radial and time variability might be much larger at lower accretion rates
- Reasonable to consider inner regions to be in a kind of quasi-steady state in terms of accretion and dynamics at given large-scale time in the galaxy
#### Star Formation and Fragmentation Dynamics on Different Scales
#### Definitions of "Disk" Dynamical Properties
- Show the [[Toomre Q parameter]] and how the different components contribute to 
	- Vertical support of the gas and gas scale height
	- Sonic $\mathcal{M}_{s}\equiv\delta v_{\mathrm{turb}}/c_{s}$ and Alfvenic $\mathcal{M}_{A}\equiv \delta v_{\mathrm{turb}}/v_{A}$ Mach numbers
	- Characteristic fragmentation scales of the disk determined by the characteristic maximum/dominant fragment mass $\sim \pi\Sigma_{\mathrm{gas}}H_{i}^{2}$ and minimal Jeans mass $\sim (\pi/6)\sigma_{i}^{3}G^{-3/2}\rho^{-1/2}$
#### Fragmentation and Star Formation
- In CGM/IGM
	- Gas is thermally stable against self-gravity $Q_{\mathrm{thermal}\gtrsim 1}$
	- Turbulence is trans-sonic (or sub-sonic at hottest phases)
	- Gas is quasi-spherical $H\sim R$
- Galaxy scales
	- Gas not thermally stable with $Q_{\mathrm{therm}}\ll1$ so there is fragmentation and star formation
	- Super-sonic turbulence
	- Approximately constant (self-regulating) turbulent $Q_{\mathrm{turb}}\sim 1$
#### The Cessation of Star Formation at Small Radii
- For smaller radii inside BHROI there is a cessation of star formation due to
	- Q begins to rise for all components due to steep rise in $\Omega$
	- Disk becomes thinner
	- Turbulence becomes somewhat weaker
	- As optical depth increases gas becomes more thermally homogenous at warm temperatures and minimum Jeans mass stabilizes and characteristic upper fragmentation mass decreases into stellar-mass range
	- Magnetic field becomes more ordered and dominated by coherent toroidal component
	- Magnetic Jeans mass becomes larger than enclosed gas mass. All scales are magnetically sub-critical
- Since $Q_{therm}\gtrsim 1$ system is locally "stable"
- But since cooling time is short compared to free-fall time at this radii $Q_{\mathrm{therm}}$ is modest at all but smallest radii
	- Might expect intermediate gravitoturbulent regime
	- While fragmentation in this regime is not "catastrophic" can still have efficient fragmentation if neglect some other effects
		- In regime with $Q_{\mathrm{therm}}\gtrsim 1$ but $Q_{\mathrm{mag}}\gg 1$ ($\beta \lesssim 1$)
		- This strongly stabilizes gravitoturbulence against fragmentation
		- Since the field geometry is toroidal is is the "most stable" against local self-gravitational fragmentation
		- Combined action of gravitoturbulence with these fields can create a dynamo or locally mix/reorder field lines to suppress local collapse
	- Strong torques producing angular momentum loss also are a barrier to fragmentation
	- Nothing completely eliminates all fragmentation and star formation but makes it be negligible compared to gas inflow rates
	- This suppression of star formation is because of the unique circum-SMBH environment not because it is a magnetically dominated media
### Torques and Inflow Driving at Different Radii
#### Different Contributions to the Torques
- For every gas cell calculate torque vector $\boldsymbol{\tau \equiv r \times a}$
	- $\boldsymbol{a}$ is the acceleration from various sources consider along the existing specific angular momentum direction $\boldsymbol{j\equiv r\times v}$
	- $\boldsymbol{r}$ is the vector distance to the SMBH
- Torques are large in a dimensionless sense $|\boldsymbol{\tau}\cdot \boldsymbol{\hat{\dot{j}}}|\sim 0.1V_{c}^{2}$ timescale for angular momentum loss of initially circular orbit is just a couple of orbital times
	- Accretion is fundamentally dynamical here on the order of a dynamical time
	- Not on a slow, secular, viscous-type process for a lower accretion rate system
- Three contributions of broad importance
	- Gravitational torque
	- MHD torques arising from combination of magnetic and kinetic or Reynolds-like stresses
### Simulation Without Magnetic Fields
- Compare to a simulation with same initial conditions/snapshot used for zooming in but without magnetic fields
- On large scales the change is small (where no hyper-refinement has occurred)
- Stronger fragmentation on scales $\lesssim 0.1-0.5\mathrm{pc}$
	- Without magnetic support the disk becomes thinner inside of $r\ll \mathrm{pc}$ 
- Accretion rates are dramatically suppressed at least until a much larger stellar density can build up
### Scales Where Different Simulation Physics "Ingredients" Become Important
#### Gravity and Collisional vs Collisionless Dynamics
- At $r\gtrsim 0.01 \mathrm{pc}$ self-gravity is essential to follow formation of galaxy, inflows, feedback, fragmentation
- Having stars means that you must be able to integrate collisional+collisionless systems simultaneously
- For smaller radii with no star formation and that are dominated by the SMBH accurate gravitational orbit integration is necessary
	- Use high order Hermite integrator to reasonably integrate a hard stellar binary in a strong tidal field
- In addition self gravity is not negligible even at $r\sim 1000R_{g}$
#### Magnetic Fields
- For scales $\gtrsim 100\mathrm{pc}$ magnetic fields play a minimal role in dynamics or gas thermodynamics
- Even $\sim 1\mathrm{pc}\to \sim 100\mathrm{pc}$ no evidence that magnetic fields play a major role in overall gas dynamics
	- Magnetic pressure is sub-dominant to other forms of pressure like turbulent pressure or cosmic ray pressure
- On smaller scales magnetic field strengths grow and magnetic pressure dominates vertical disk support and torques
- In extremely-dense gas forming protostellar disks at highest resolution level the Hall term becomes dominant among non-ideal MHD effects and the relevant timescale is shorter than other resolved timescales
	- Could in principle indirectly alter the IMF of stars would require higher resolution to see this
	- But characteristic timescales for Hall MHD effects within quasar accretion disk and ISM as a whole are much longer than the disk dynamical time at the radii modeled in the paper
#### Cosmic Rays
- See minor effects of using or turning on/off cosmic ray models
- Regime of tenuous CGM/IGM gas around low-redshift dwarf and $\sim L^*$ galaxies CRs have the largest effects
#### Radiation Transport and Thermo-Chemistry
- On large scales $\gtrsim 10\mathrm{pc}$ cooling can be well approximated as optically-thin
- On smallest scales it is important
	- Disk has cooling time short compared to dynamical times
	- Can't approximate disk as strictly adiabatic
	- Chemistry is less complex as dust is sublimated and the system becomes more locally black-body like
- Complexity maximized in between $r\sim 0.01-10\mathrm{pc}$
	- System is optically thick to its cooling radiation but not so optically thick that you can treat the radiation/dust/gas temps as in strict thermodynamic equilibrium
#### Star Formation (Sink Particle and Unresolved) and Stellar Feedback
- Important on scales $\sim 0.1-10^4 \mathrm{pc}$
- On larger scales do not expect it to occur given low densities (CGM/IGM)
- On much smaller scales see it suppressed
- On scales $\gg \mathrm{pc}$ see characteristic "fragmentation mass" $\sim \Sigma_{\mathrm{gas}}H^{2}_{\mathrm{gas}}\sim\Sigma_{\mathrm{gas}}(\delta v/\Omega)^{2}$
- Resolved star formation physics is strictly necessary over narrow range of intermediate radii ($\sim 0.1-1\mathrm{pc}$)
	- But plays crucial role in allowing the validation that the SF should cease at $\ll 0.1 \mathrm{pc}$
### Comparison to Previous Results
#### Galactic Scales $(\gtrsim 100\mathrm{pc})$
- Results are broadly consistent with previous FIRE studies
	- Galaxies are not in a steady-state or equilibrium (large clumps, mergers, feedback driven perturbations to the potential)
	- Feature Prominent "cold flows" in the halo contributing to substantial "cold mode accretion" onto the galaxy
	- "Gravitational torques" play a key role in the dynamics of angular momentum exchange
	- Galactic ISM is highly multi-phase and unstable with short lived structures
	- Plasma $\beta\gg1$ except in cold-phase ISM (magnetic pressure is larger than thermal)
	- Stellar Feedback rapidly becomes less efficient above a critical acceleration scale
	- Star formation is rapid but inflows are dynamical and co-exist with outflows
- This sim includes physics not used in prior FIRE sims
	- Magnetic fields with non ideal MHD
	- Thermochemical treatments of non-equilibrium chemistry
	- Opacities for highly optically thick and/or dust-free regimes
	- Explicit M1 radiation hydrodynamics
	- Goes to higher resolution than some studies throughout the galaxy
- Simulation has key disadvantage that it is only one case study
#### Galactic Nuclei Scales $(\sim1-100\mathrm{pc})$
- Conclusions largely similar to [[angles-alcazarCosmologicalSimulationsQuasar2021]]
	- Gravitational torques between gas and stars dominate accretion physics
	- Angular momentum support is a key barrier to inflows and accretion (accretion is qualitatively distinct from a radial or Bondi or turbulent accretion problem)
	- ISM is highly multi-phase and unstable and rapidly star-forming. Most of gas mass in cold/warm neutral phases
	- Accretion is dynamical though due to gravitational torques
- Stellar-feedback driven wind/outflow rates decline interior to $\lesssim100\mathrm{pc}$ (largely resolution independent and present with/without magnetic fields)
- Primary purpose of extended physics/resolution at these scales
	- Test and validate conclusions of [[angles-alcazarCosmologicalSimulationsQuasar2021]]
	- Make more accurate predictions for observables and future sub-grid models on these scales
	- Enable exploration of more detailed quantities like the IMF
	- Provide self-consistent initial and boundary conditions for even smaller scales
#### Approaching the Accretion Disk $(\sim0.01-1pc)$
- See significant deviations from [[angles-alcazarCosmologicalSimulationsQuasar2021]]
	- Star formation shut down ($Q_{\mathrm{mag}}\gg1$ and $Q_{\mathrm{thermal}}\gtrsim1$)
		- This is not present in the other paper since they use a simple "galaxy-scale" sub-grid star formation prescription and neglect B fields
	- See at $\lesssim0.5\mathrm{pc}$
		- Local mass density becomes gas dominated
		- Gravitational torques become less efficient (even reverse sign)
		- But Maxwell and Reynolds torques take over and continue efficient inflow
		- $m=1$ modes persist
#### Within the Accretion Disk $(\lesssim0.01\mathrm{pc})$
- At this scale star formation is inefficient so dominant physical ingredients are broadly similar to traditionally invoked ones in AGN accretion disk simulations
- Some qualitative differences
	- Mostly have to do with initial/boundary conditions
	- Turbulence is vigorous
	- Disk is strongly magnetized from flux-freezing from magnetic flux being fed in from the ISM
## Conclusion
- Present novel simulations utilizing galaxy-scale cosmological physics to inform small-scale physics of individual star formation/stellar evolution
- Run the sim with 
	- Super-Lagrangian refinement technique
	- Non-ideal and kinetic magneto hydrodynamics
	- Self gravity
	- Star formation
	- Stellar evolution
	- (Proto)stellar feedback
		- Jets
		- Main-sequence mass-loss
		- Multiband radiation
		- Core-collapse
		- Ia supernovae
	- Explicit multi-band radiation-MHD
		- Separately evolved dust,gas, and radiation field temperatures/bands
	- Detailed thermochemistry
		- Dust-gas coupling
		- Sublimation
		- Non-equilibrium atomic and molecular chemistry
		- Metal lines
		- $H^{-}$ 
- Key conclusions
	- Magnetic fields play a key role
		- Maintaining efficient torques and high inflow rates
		- Explain scale heights and vertical profiles of disk,
		- Outer size/boundary of accretion disk
		- Suppression of star formation at sub-pc scales
	- Quasar-level inflow rates are plausible and can be maintained
		- Strong torques on sub-kpc scales can maintain inflow rates as large as $\gtrsim 10M_{\odot}yr^{-1}$ into a QSO accretion disk at $<80\mathrm{au}$ for extended periods of times
		- On scales $\sim \mathrm{pc-kpc}$ dominated by gravitational torques inducing strong shocks and inflow
		- On sub-pc with inefficient star formation but strong MHD torques, strongly-magnetized outer flux fed accretion disk takes over and sustain large inflow rates
	- Suppression of star formation 
		- On sub-pc scales  star formation is strongly suppressed
		- Combination of increasing optical depths producing warmer gas in the galactic nucleus and strong toroidal magnetic fields leads to a dramatic and almost complete suppression of star formation at distances $\ll \mathrm{pc}$ from the SMBH
- #future-work 
	- Look at other galaxies, here they have only studied one case so not generalizable to other starting conditions
	- Include "outward" fluxes from the un-resolved accretion disk at $<80\mathrm{au}$
## Questions
- Can you run a simulation down to smaller scales and then ramp it back up?
	- Thinking about trying to capture the effects that high resolved and more accurate subgrid physics gives you like the shutting down of star formation

> [!Cite]

Hopkins, Philip F., Michael Y. Grudic, Kung-Yi Su, et al. “FORGE’d in FIRE: Resolving the End of Star Formation and Structure of AGN Accretion Disks from Cosmological Initial Conditions.” arXiv:2309.13115. Preprint, arXiv, September 22, 2023. [http://arxiv.org/abs/2309.13115](http://arxiv.org/abs/2309.13115).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Hopkins, P]] 
**Author**: [[Files/Authors/Grudic, M]] 
**Author**: [[Files/Authors/Su, K]] 
**Author**: [[Files/Authors/Wellons, S]] 
**Author**: [[Files/Authors/Angles-Alcazar, D]] 
**Author**: [[Files/Authors/Steinwandel, U]] 
**Author**: [[Files/Authors/Guszejnov, D]] 
**Author**: [[Files/Authors/Murray, N]] 
**Author**: [[Files/Authors/Faucher-Giguere, C]] 
**Author**: [[Files/Authors/Quataert, E]] 
**Author**: [[Files/Authors/Keres, D]] 


> **Year**: 2023  

> **Citekey**: hopkinsFORGEdFIREResolving2023 

> **itemType**: preprint   

  
> [!Abstract]

>

> It has recently become possible to zoom-in from cosmological to sub-pc scales in galaxy simulations to follow accretion onto supermassive black holes (SMBHs). However, at some point the approximations used on ISM scales (e.g. optically-thin cooling and stellar-population-integrated star formation [SF] and feedback [FB]) break down. We therefore present the first cosmological radiation-magnetohydrodynamic (RMHD) simulation which self-consistently combines the FIRE physics (relevant on galactic/ISM scales where SF/FB are ensemble-averaged) and STARFORGE physics (relevant on small scales where we track individual (proto)stellar formation and evolution), together with explicit RMHD (including non-ideal MHD and multi-band M1-RHD) which self-consistently treats both optically-thick and thin regimes. This allows us to span scales from ~100 Mpc down to <100 au (~300 Schwarzschild radii) around a SMBH at a time where it accretes as a bright quasar, in a single simulation. We show that accretion rates up to $\sim 10-100\,{\rm M_{\odot}\,yr^{-1}}$ can be sustained into the accretion disk at $\ll 10^{3}\,R_{\rm schw}$, with gravitational torques between stars and gas dominating on sub-kpc scales until star formation is shut down on sub-pc scales by a combination of optical depth to cooling and strong magnetic fields. There is an intermediate-scale, flux-frozen disk which is gravitoturbulent and stabilized by magnetic pressure sustaining strong turbulence and inflow with persistent spiral modes. In this paper we focus on how gas gets into the small-scale disk, and how star formation is efficiently suppressed.

>.



# Annotations%% begin annotations %%





%% end annotations %%
