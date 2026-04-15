
---
Title: Galactic Dynamics

tags:  #textbook 

citekey: binneyGalacticDynamics

collection:

- Textbooks

status: unread

dateread:

---

# Chapter 7 Kinetic Theory
## 7.5 The evolution of spherical stellar systems
- [x] #TODO Read 7.5.1-7.5.4  [due:: 2025-11-18]  [completion:: 2025-11-18]
- [x] #TODO Read binney 7.5.5- 7.5.9  [due:: 2025-11-20]  [completion:: 2025-11-21]
- Assume system is a globular cluster
- Relaxation erases cluster's memory of initial state
	- Can get similar results from wide range of initial conditions
- Relaxation time is inversely proportional to density
	- Evolution proceeds most rapidly in dense central regions
- In the halo
	- Encounters have relatively little effect
	- Eventually contains more stars that were diffused from the central region with higher energies from encounters
	- Eventually these stars dominate the original halo stars
- Analytically find
	- Within the relaxed central region the DF should be approximately isothermal $f(E,L)\propto \exp \left( -\dfrac{E}{\sigma^{2}} \right)$ for energies well below the escape energy
	- Within the relaxed region the density distribution $n(r)$ should be approximately that of an isothermal sphere
	- There should be relatively few stars with angular momenta greater than a cutoff $L_{0}$ 
		- $L_{0}$ corresponds to the angular momentum of a nearly unbound orbit that grazes the relaxed region
	- The DF should tend to zero near escape energy as $f\propto E_{t}-E$
	- There should be an extended region where the number tends to zero 
		- As $n(r)\propto r^{-7/2}$ in an isolated cluster
		- As $n(r)\propto r^{-7/2}(1-\dfrac{r}{r_{t}})^{3/2}$ in a cluster with tidal radius $r_{t}$
	- The radial and tangential velocity dispersions should be
		- The same in the relaxed central region
		- In the halo the velocity ellipsoid should become more and more radial
- Michie DF satisfies all the criteria
- All processes described in the chapter happen at the same time and can be difficult to untangle
### 7.5.1 Mass loss from stellar evolution
- Cluster mass declines as star evolves
	- Stars eject mass at the end of their lives
	- This is likely to escape the cluster
		- Ejection velocity exceeds escape speed
		- Or intracluster gas is swept out by galactic gas as cluster passes through disk
- Adiabatic invariants of stellar orbits are conserved as cluster loses mass
	- Orbits expand but retain their shape
- Mass lost by cluster from stellar evolution depends on
	- The initial mass function $\texttt{IMF}\;\xi(m)$
		- The distribution of masses of stars right after they have formed
	- Initial-final mass function $\mu(m,t)$
		- If a star's initial mass is $m$ then $\mu(m,t)$ is its mass after time $t$
		- For old globular clusters $t=t_{0}$ or the age of the universe
- The effects of mass loss are more severe accordingly to the severity of the tidal forces
	- Clusters with low central concentration are particularly susceptible to disruption by tidal forces
### 7.5.2 Evaporation and Ejection
- Stars can escape the cluster by
	- **Ejection**
		- A single close encounter
		- Enough of a velocity change leaving one of the stars with a speed larger than the local escape speed
		- Ejection rate $\dfrac{ \mathrm{d} N }{ \mathrm{d} t }=-1.05\times10^{-3} \dfrac{N}{t_{\mathrm{rh}}\ln(\lambda N)}$
			- $t_{\mathrm{rh}}$ is the half-mass relaxation time
				- $t_{\mathrm{rh}}=\dfrac{0.17N}{\ln(\lambda N)}\sqrt{ \dfrac{r_{\mathrm{h}}^{3}}{GM} }=\dfrac{0.78\mathrm{Gyr}}{\ln(\lambda N)} \dfrac{1\mathcal{M_{\odot}}}{m}\left( \dfrac{M}{10^{5}M_{\odot}} \right)^{1/2}\left( \dfrac{r_{h}}{1\mathrm{pc}} \right)^{3/2}$
		- Ejection time
			- $t_{\mathrm{ej}}=-\left( \dfrac{1}{N}\dfrac{ \mathrm{d} N }{ \mathrm{d} t } \right)^{-1}=1\times10^{3}\ln(\lambda N)t_{\mathrm{rh}}$
			- Generally much longer than evaporation times
		- Generally can neglect ejection compared to evaporation
	- **Evaporation**
		- Series of weaker, more distant encounters
		- Eventually a final encounter gives the star a slightly positive energy and it escapes
		- Evaporation rate is dominated by stars on highly elongated orbits
			- Have many encounters as they go through the cluster center
			- Energy change is approximately constant since pericenter remains roughly the same as the apocenter increases
			- Here an orbit-averaged calculation can't accurately predict the rate of escape from an isolated cluster
		- Evaporation rate
			- $t_{\mathrm{evap}}=-N\left( \dfrac{ \mathrm{d} N }{ \mathrm{d} t } \right)^{-1}=ft_{\mathrm{rh}}$
				- $t_{\mathrm{rh}}$ is the half mass relaxation rate
				- $f\approx300$
			- Completely isolated globular cluster would require longer than the age of the universe to evaporate completely
#### The maximum lifetime of a stellar system
- Upper limit of $300t_{\mathrm{rh}}$ where isolated single-mass star cluster will lose substantial mass fraction to evaporation
- Galaxies often have concentrations of massive dark objets of $10^{6}-10^{9}M_{\odot}$ in their central few parsecs
- These are likely single or binary black holes
### 7.5.3 Core Collapse
- Cluster with Plummer model without energy exchange with binary stars
	- Outer half expands as core stars diffuse
	- Center contracts called **core collapse**
		- Dramatic growth in central density
- More accurate Plummer model with orbit-average Fokker-Planck
	- Core radius shrinks 
	- Central density grows
	- Density profile outside of core approaches $\rho \propto r^{-2.23}$
- For system where density profile outside core varies as power law in radius to infinity
	- Density profile evolves self-similarly
		- Differ only in normalization and scale across time
- Time to core collapse is always a fixed multiple of central relaxation time
	- Proportionality constant: $\tau \simeq300t_{\mathrm{relax}}(r=0)$
	- Generally only holds for late stages of core collapse
### 7.5.4 After Core Collapse
- Core collapse is eventually halted by binary stars
	- From primordial or three body encounters
	- Halts when core contains only 10-20 stars or earlier if primordial
- The formation of binary stars provides a heat source for the cluster
- Binaries after core collapse are in the center
	- Pump KE into single stars passing through there
- There is instability leading to gravothermal oscillations as $N\gtrsim8000$
	- Central density and core radius oscillate
- As N increases gravothermal oscillations change
	- Amplitude grows
	- Oscillations become more chaotic
	- Fraction that each oscillation spends in high in high-density state becomes smaller
### 7.5.5 Equipartition
- When there are a range of stellar masses
	- Encounters establish equipartition of energy
	- Massive stars lose energy and sink towards the center
	- Lighter stars gain energy and have their orbits expand
- Equipartition time scale is comparable to $t_{\mathrm{rh}}$
- Equipartition can not be achieved when: $\dfrac{M_{2}}{\rho_{c1}r_{c1}^{3}}\leq \dfrac{1.61}{fg}\left( \dfrac{m_{1}}{m_{2}} \right)^{3/2}$ is violated
	- $M_{2}$ total mass of heavy stars $(m_{2}\gg m_{1})$
	- $m_{1}$ mass of a light star
	- $m_{2}$ mass of a heavy star
	- $\rho_{c1}$ constant density of the light stars
	- $r_{c1}$ king radius of the light stars
	- $f$ dimensionless constant approximately 0.45
	- $g$ dimensionless constant of order unity
	- **Equipartitnional instability**: mass of heavy stars too large
		- Form independent system at center of core of light stars
		- Encounters cause heavy stars to lose energy to the light stars
		- This increases velocity dispersion of heavies
		- Heavies evolve way from equipartition so energy loss, heating, contracting continue indefinitely
- Equipartition instability
	- Accelerates core collapse
	- Causes lighter stars to evaporate more quickly
### 7.5.6 Tidal shocks and the survival of globular clusters
- A tidal shock is a rapidly changing external gravitational field that accelerates stars in outer parts of the cluster
	- Causes the expansion of the cluster
	- Causes the escape of some of the stars
	- Speed up core collapse
	- Shorten cluster lifetimes
- There is a triangle area of survival in the $M-r_{\mathrm{h}}$ plane based off how far from the center the cluster is
	- Also influenced by the initial distribution of clusters
### 7.5.7 Binary stars
- Binary's energy: $\tilde{E}=\dfrac{1}{2}\mu V^{2}-\dfrac{Gm^{2}}{r}=-\dfrac{Gm^{2}}{2a}$ (for a Keplerian orbit)
- Binary is soft if $|\tilde{E}|/m\sigma^{2}<1$
- Binary is hard if $|\tilde{E}|/m\sigma^{2}>1$
- Binaries are formed by three body encounters
#### Soft binaries
- Use limit of $|\tilde{E}|\ll m\sigma^{2}$
- On average soft binaries gain energy from encounters with field stars: soft binaries become softer
	- Since binary is very soft
	- Internal KE $\ll$ KE of field stars
	- Growth of internal energy is manifestation of tendency of system to evolve to equipartition
- Disruption of binaries
	- Ejection (ionization for binaries)
		- Single close encounter with a field star
		- Binary has positive internal energy
	- Evaporation
		- More distant encounters
		- Slowly internal energy increased until positive
	- Evaporation dominates for very soft binaries
	- Ejection and evaporation are comparable for $|\tilde{E}|\sim m\sigma^{2}$
- In relaxed clusters rate of soft binary formation is balanced by the rate of evaporation
	- So soft binaries play no significant role in the evolution of stellar system
#### Hard binaries
- Interaction of hard binary with field star very complex
	- Binding energy of hard binary larger than typical KE of field star
	- The three stars can temporarily form a bound three-body system
- Possible interactions
	- Exchange: final binary is composed of one original star and the field star
	- Flyby: outgoing state is the same as the incoming state
	- Ionization: all three stars leave as single stars
		- Negligible for very hard binaries
- Hard binaries become harder
- **Heggie's law:** on average hard binaries get harder and soft binaries get softer
### 7.5.8 Inelastic encounters
- For dense stellar systems
	- Collisions or near misses can dissipate KE by tides raised on the stars
		- Hastens core collapse
		- Can also create unusual objects (e.g. blue stragglers or close binary stars)
- Collision rate: $\dfrac{1}{t_{\mathrm{coll}}}=4\sqrt{ \pi }n\sigma \left( r_{\mathrm{coll}}^{2}+\dfrac{Gm}{\sigma^{2}}r_{\mathrm{coll}} \right)$
	- Second term is the enhancement in collision rate from gravitational focusing
		- The deflection of trajectories by the gravitational attraction between the stars
- Collisions are negligible compared to relaxation in early stages of core collapse
- In late stages of core collapse collisions can be important
### 7.5.9 Stellar systems with a central black hole
#### Consumption of stars by the black hole
- Black hole can consume any star whose orbit carries it within the BH horizon
- Tidal forces from the BH can also destroy stars
- In a spherical system there is a loss cone in energy-angular momentum space where orbits with a pericenter distance $q_{\mathrm{K}}<q_{\mathrm{eat}}$
- New stars into the loss cone come from
	- Encounters with other stars
		- Star loses energy and angular momentum
	- Galaxy is non-spherical torques from overall mass distribution can move it into the loss cone
#### The effect of a central black hole on the surrounding stellar system
- There is a dynamical radius where the gravitational field is dominated by the BH is equaled to the force from the stars
- If a BH grows slowly
	- Accretion of gas 
	- Compresses surrounding stellar orbits to form a cusp
- If BH grows quickly
	- Mergers with other BHs
	- BH causes stellar orbits to expand
	- Reduces central density of the system (core scouring)
# Chapter 8
## 8.3 Tides


> [!Cite]

Binney, James, and Scott Tremaine. _Galactic Dynamics_. n.d.
  

>[!md]

**FirstAuthor**: [[Files/Authors/Binney, J]] 
**Author**: [[Files/Authors/Tremaine, S]] 


> **Year**: Error: `format` can only be applied to dates. Tried for format object  

> **Citekey**: binneyGalacticDynamics 

> **itemType**: book   


