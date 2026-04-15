
---
Title: Stellar Structure and Evolution

tags:  #textbook

citekey: pollsStellarStructureEvolution

collection:

- Textbooks

status: unread

dateread:

---
- [x] #TODO Glossarize Polls  [due:: 2026-01-30]  [completion:: 2026-02-02]
# Chapter 2 Mechanical and Thermal Equilibrium
- [x] #TODO Read Chapter 2 Polls  [due:: 2025-10-31]  [completion:: 2025-10-30]
- Use mass conservation and momentum conservation to derive stellar structure equations
- Stars are generally in state of almost complete mechanical equilibrium
	- Allows for virial theorem
- See that most (but not all) stars are in a state of energy balance of thermal equilibrium
## 2.1 Coordinate systems and mass distribution
- With spherical symmetry all interior physical quantities ($\rho,P,T$ etc) depend only on one radial coordinate
- Obvious coordinate is radius of a spherical shell $r(\in 0\dots R)$
- With an evolving star all quantities also depend on time $t$
- From mass conservation
	- Spherical shell 
		- Mass $dm$
		- Radius $dr$
		- At radius $r$
		- Radial velocity $v$
	- $dm(r,t)=4\pi r^{2}\rho dr-4\pi r^{2}\rho vdt$
	- $\frac{ \partial m }{ \partial r }=4\pi r^{2}\rho$
		- Relates radial mass distribution to the local density
		- $\rho$ is not known a priori
	- $\frac{ \partial m }{ \partial t }=-4\pi r^{2}\rho v$
		- Change of mass inside sphere of radius $r$ due to motion of matter through its surface
		- If static then $\dfrac{dm}{dr}=4\pi r^{2}\rho$
	- Mass inside spherical shell
		- $m(r)=\int_{0}^{r}4\pi r'^{2}\rho dr'$
		- Increases monotonically outward
	- Use mass coordinate as a Lagrangian coordinate
		- If star does not lose mass it is a fixed interval while the star's $R$ can change
		- $\boldsymbol{\frac{ \partial r }{ \partial m }}=\boldsymbol{\dfrac{1}{4\pi r^{2}\rho}}$
### 2.1.1 The gravitational field
- Gravity is the driving force behind stellar evolution
- In non spherical case can write as 
	- $\boldsymbol{g}=-\boldsymbol{\nabla}\Phi$
	- $\Phi$ is the solution of the Poisson equation
		- $\nabla^{2}\Phi=4\pi G\rho$
- In spherical symmetric case
	- $g=|\boldsymbol{g}|=\dfrac{d\Phi}{dr}$
	- $g=\dfrac{Gm}{r^{2}}$
## 2.2 The equation of motion and hydrostatic equilibrium
- Consider conservation of momentum in a star
- Only consider gravitational force and pressure along radial direction (pressure horizontally cancels with spherical symmetry) on a gas element
- Equation of motion
	- $\frac{ \partial^{2}r }{ \partial t^{2} }=-\dfrac{Gm}{r^{2}}-\dfrac{1}{\rho} \frac{ \partial P }{ \partial r }$
	- In terms of mass coordinate
		- $\frac{ \partial^{2}r }{ \partial t^{2} }=-\dfrac{Gm}{r^{2}}-4\pi r^{2}\frac{ \partial P }{ \partial m }$
#### Hydrostatic equilibrium
- Stars are generally in phases that have very long lifetimes
	- No noticeable acceleration
	- Forces on a gas element almost exactly balance each other
- [[Hydrostatic equilibrium]]
- Means that $\ddot{r}=0$
	- $\dfrac{dP}{dr}=-\dfrac{Gm}{r^{2}}\rho$ 
	- $\boldsymbol{\dfrac{dP}{dm}}=\boldsymbol{-\dfrac{Gm}{4\pi r^{4}}}$
		- Pressure always decreases outwards
### 2.2.1 The dynamical timescale
- If hydrostatic equilibrium is violated how fast do changes occur?
- If pressure disappears then gas free falls
	- $\tau_{\mathrm{ff}}\approx \sqrt{ \dfrac{R^{3}}{GM} }$
- If gravity disappears
	- $\tau_{\mathrm{dyn}}\approx \dfrac{1}{2}(G\bar{\rho})^{-1/2}$
- Any significant departure from HE should very quickly lead to observable phenomena
	- If a star can not recover from disequilibrium it should lead to a collapse or an explosion
- Normally HE can be restored but a perturbation may lead to small scale oscillations on a dynamical time scale
- Stars evolve and aren't completely static but changes occur very slowly compared to their dynamical timescale so they evolve quasi-statically
## 2.3 The [[Virial Theorem]]
- General form: $E_{\mathrm{gr}}=-3\int_{0}^{M} \dfrac{P}{\rho}dm$
- Average pressure to support a star in HE is equal to $-\dfrac{1}{3}E_{\mathrm{gr}}/V$
#### Virial theorem for ideal gas
- $E_{\mathrm{int}}=-\dfrac{1}{2}E_{\mathrm{gr}}$
- A more tightly bound star must have a higher internal energy (hotter)
#### Virial theorem for general equation of state
- $u=\phi  \dfrac{P}{\rho}$
- For all non-relativistic particles $\phi=\dfrac{3}{2}$
- Relativistic particles (photons) $\phi=3$
- If $\phi$ is constant through star then $E_{int}=-\dfrac{1}{3}\phi E_{\mathrm{gr}}$
### 2.3.1 The total energy of a star
- $E_{\mathrm{tot}}=E_{\mathrm{gr}}+E_{\mathrm{int}}+E_{\mathrm{kin}}$
- Star is bound if $E_{\mathrm{tot}}<0$
- Star in HE 
	- Then $E_{\mathrm{kin}}=0$
	- Virial theorem holds
	- $E_{\mathrm{tot}}=(1-\dfrac{1}{3}\phi)E_{\mathrm{gr}}$
	- Star is bound if $\phi<3$
	- For ideal gas
		- $E_{\mathrm{tot}}=E_{\mathrm{int}}+E_{\mathrm{gr}}=-E_{\mathrm{int}}=\dfrac{1}{2}E_{\mathrm{gr}}<0$
- From virial theorem
	- Gravitationally bound gas spheres must be *hot* to maintain HE
		- More compact the sphere the more strongly bound and hotter
		- Heat provides pressure required to balance gravity
	- Hot sphere of gas radiates into surrounding space (luminosity) so star loses energy from its surface
		- The energy loss must equal the decrease of the total energy of the star $L=-\dfrac{dE_{\mathrm{tot}}}{dt}>0$
	- With time derivative
		- $\dot{E}_{\mathrm{gr}}=-2L<0$
		- From losing energy the star contracts
		- $\dot{E}_{\mathrm{int}}=L>0$
		- Star gets hotter as it loses energy
			- Negative heat capacity
### 2.3.2 Thermal equilibrium
- Nuclear reactions provide an internal energy source compensating energy loss from the surface
	- $L=L_{\mathrm{nuc}}\equiv -\dfrac{dE_{\mathrm{nuc}}}{dt}$
- Then total energy is conserved
- So $E_{int}$ and $E_{\mathrm{gr}}$ are conserved as well
- This thermal equilibrium state is a stationary state
## 2.4 The timescales of stellar evolution
- Dynamical timescale
	- Timescale on which star reacts to a perturbation of HE
	- On the order of hours or les
	- $\tau_{\mathrm{dyn}}\approx \sqrt{ \dfrac{R^{3}}{GM} }\approx0.02\left( \dfrac{R}{R_{\odot}} \right)^{3/2}\left( \dfrac{M_{\odot}}{M} \right)^{1/2}\mathrm{days}$
### 2.4.1 The thermal timescale
- Describes how fast changes in the thermal structure of a star can occur
- Timescale on which a star in TE reacts when it is perturbed from TE
- Thermal/Kelvin-Helmholtz timescale
	- $\tau_{\mathrm{KH}}=\dfrac{E_{\mathrm{int}}}{L}\approx \dfrac{|E_{\mathrm{gr}}|}{2L}\approx \dfrac{GM^{2}}{2RL}\approx 1.5\times10^{7}\left( \dfrac{M}{M_{\odot}} \right)^{2} \dfrac{R_{\odot}}{R} \dfrac{L_{\odot}}{L}\mathrm{yr}$
- For the sun about $1.5\times10^{7}\mathrm{years}$
### 2.4.2 The nuclear timescale
- Star remains in TE as long it has nuclear fuel supply. This is the nuclear timescale
- $\tau_{\mathrm{nuc}}=\dfrac{E_{\mathrm{nuc}}}{L}=\phi f_{\mathrm{nuc}} \dfrac{Mc^{2}}{L}\approx10^{10} \dfrac{M}{M_{\odot}} \dfrac{L_{\odot}}{L}\mathrm{yr}$
	- $f_{\mathrm{nuc}}$ is the fraction of the mass of the star which can be used as nuclear fuel
	- $\phi$ is the fraction of the rest mass of the reacting nuclei turned into energy
- Nuclear reactions determine pace of stellar evolution and can be assumed to be in HE and TE throughout most of their lives
# Chapter 3 Equation of State of Stellar Interiors
- [x] #TODO Read Chapter 3 Polls  [due:: 2025-10-31]  [completion:: 2025-10-31]
## 3.1[[Local thermal equilibrium]]
- Although stars aren't isolated systems (emit radiation and generate energy in interiors) and have a range of temperatures throughout the star they still have local thermodynamic equilibrium
	- Region $\ll R_{\star}$ but larger than the average distance between interactions of the particles (gas and photons)
- $l_{\mathrm{ph}}=\dfrac{1}{\kappa \rho}$ mean free path of photons
	- $\kappa$ is the opacity coefficient
	- For sun $l_{\mathrm{ph}}\sim1\mathrm{cm}$
		- Very opaque to radiation
	- $\Delta T\approx \dfrac{dT}{dr}l_{\mathrm{ph}}\approx10^{-4}\mathrm{K}$
- $T_{\mathrm{gas}}(r)=T_{\mathrm{rad}}(r)=T(r)$ which is different than thermal equilibrium where $E_{\mathrm{tot}}=\mathrm{const}$ or $L=L_{\mathrm{nuc}}$
## 3.2 The [[Equation of State]]
- Equation of state (EOS) describes microscopic properties of stellar matter for a given $\rho$, $T$, $X_{i}$ (chemical composition)
- Normally expressed as $P=P(\rho,T,X_{i})$ with $P$ being the pressure
- With thermodynamics and internal energy $U(\rho,T,X_{i})$ can derive from EOS
	- Specific heats $c_{V}$ and $c_{P}$
	- Adiabatic exponent $\gamma_{\mathrm{ad}}$
	- Adiabatic temperature gradient $\nabla_{\mathrm{ad}}$
- Assuming ideal gas of free, non interacting particles
	- Gas does interact so require interaction energies to be much less than their kinetic energies
## 3.3 Equation of state for a gas of free particles
- $n(p)$ is the distribution of momenta of gas particles
- Number density: $n=\int_{0}^{\infty}n(p)dp$
- Internal energy density $U=\int_{0}^{\infty}\epsilon_{p}n(p)dp=n\langle \epsilon_{p} \rangle$
	- From perfect gas assumption
- Pressure $P=\dfrac{1}{3}\int_{0}^{\infty}pv_{p}n(p)dp=\dfrac{1}{3}n\langle pv_{p} \rangle$
	- From calculating how many particles are colliding with the walls of a cubical box and the momentum transfer from that 
- $\epsilon_{p}$ is the kinetic energy of a particle with momentum $p$
- $v_{p}$ ist he velocity
### 3.3.1 Relation between pressure and internal energy
- Relate energy and velocities to momenta with special relativity
	- $\epsilon^{2}=p^{2}c^{2}+m^{2}c^{4}$
	- $\epsilon_{p}=\epsilon-mc^{2}$
	- $v_{p}=\frac{ \partial \epsilon }{ \partial p }=\dfrac{pc^{2}}{\epsilon}$
- Non-relativistic (NR) limit
	- $p\ll mc$
	- $P=\dfrac{2}{3}U$
- Extremely relativistic (ER) limit
	- $p\gg mc$
	- $P=\dfrac{1}{3}U$
### 3.3.2 The classical ideal gas
- Momentum distribution $n(p)$ for classical NR particles in [[Local thermal equilibrium|LTE]] is given by the Maxwell-Boltzmann distribution
	- $n(p)dp= \dfrac{n}{(2\pi mkT)^{3/2}}\exp \left( -\dfrac{p^{2}}{2mkT} \right)4\pi p^{2}dp$
- Using $v=\dfrac{p}{m}$ can calculate the pressure: $P=nkT$
	- Valid for both non-relativistic and relativistic classical particles
### 3.3.3 Mixture of ideal gases and mean molecular weight
- Total gas pressure is the sum of partial pressures from each ion and electrons (ignoring QM effects)
	- $P_{\mathrm{gas}}=P_{\mathrm{ion}}+P_{\mathrm{e}}=\sum_{i}P_{i}+P_{e}=\left( \sum_{i}n_{i}+n_{e} \right)kT=nkT$
	- $n_{i}$ is the density of ions of element $i$ with mass $m_{i}=A_{i}m_{u}$ and charge $Z_{i}e$
		- $n_{i}=\dfrac{X_{i}\rho}{A_{i}m_{u}}$
		- $n_{ion}=\sum_{i} \dfrac{X_{i}}{A_{i}} \dfrac{\rho}{m_{u}}\equiv \dfrac{1}{\mu_{\mathrm{ion}}} \dfrac{\rho}{m_{u}}$
			- Defines mean atomic mass per ion $\mu_{\mathrm{ion}}$
		- $n_{e}=\sum_{i}Z_{i}n_{i}=\sum_{i} \dfrac{Z_{i}X_{i}}{A_{i}} \dfrac{\rho}{m_{u}}\equiv \dfrac{1}{\mu_{e}} \dfrac{\rho}{m_{u}}$
			- Defines mean molecular weight per free electron $\mu_{e}$
	- $P_{ion}=\dfrac{1}{\mu_{\mathrm{ion}}} \dfrac{\rho}{m_{u}}kT=\dfrac{\mathcal{R}}{\mu_{\mathrm{ion}}}\rho T$
		- $\mathcal{R}=\dfrac{k}{m_{u}}$
	- $P_{e}=\dfrac{1}{\mu_{e}} \dfrac{\rho}{m_{u}}kT=\dfrac{\mathcal{R}}{\mu_{e}}\rho T$
- $P_{\mathrm{gas}}=P_{\mathrm{ion}}+P_{e}=\left( \dfrac{1}{\mu_{\mathrm{ion}}}+\dfrac{1}{\mu_{e}} \right)\mathcal{R}\rho T=\dfrac{\mathcal{R}}{\mu}\rho T$
	- $\dfrac{1}{\mu}=\dfrac{1}{\mu_{\mathrm{ion}}}+\dfrac{1}{\mu_{e}}=\sum_{i} \dfrac{(Z_{i}+1)X_{i}}{A_{i}}$
- For fully ionized gas
	- $\mu \approx \dfrac{1}{2X+\dfrac{3}{4}Y+\dfrac{1}{2}Z}$
	- Assuming for elements heavier than helium $A_{i}\approx 2Z_{i}\approx2(Z_{i}+1)$
### 3.3.4 Quantum-mechanical description of the gas
- From quantum mechanics for a particle within volume $\Delta V$ its localization in 3D momentum space $\Delta^{3}p$ constrained by
	- $\Delta V\Delta^{3}p\geq h^{3}$
- Number of quantum states within $V$ with momenta $p\in[p\dots p+dp]$
	- $g(p)dp=g_{s} \dfrac{V}{h^{3}}4\pi p^{2}dp$
	- $g_{s}$ is the number of intrinsic states of a particle (spin/polarization)
- Occupation of quantum states in thermodynamic equilibrium with energy $\epsilon_{p}$ and at temperature $T$
	- Fermions
		- $f_{\mathrm{FD}}(\epsilon_{p})=\dfrac{1}{\exp \left( \dfrac{(\epsilon_{p-\mu})}{kT} \right)+1}$
	- Bosons
		- $f_{\mathrm{BE}}(\epsilon_{p})=\dfrac{1}{\exp \left(  \dfrac{(\epsilon_{p}-\mu)}{kT} \right)-1}$
- Actual distribution of momenta for particles in LTE is the product of $f(\epsilon_{p})$ and $g(p)dp$
- $\mu$ is the chemical potential
	- Normalization constant
	- Determined by total number of particles in the volume
### 3.3.5 Electron degeneracy
- Electrons have two spin states so $g_{e}=2$
- $n_{\mathrm{max}}(p)dp=\dfrac{4\pi}{h^{3}}p^{2}dp$
- Momentum distribution with $\epsilon_{p}=\dfrac{p^{2}}{2m_{e}}$
	- $n_{\mathrm{e}}(p)dp=\dfrac{2}{h^{3}} \dfrac{1}{\exp \left[ \dfrac{p^{2}}{2m_{e}kT}-\psi \right]+1}4\pi p^{2}dp$
	- $\mu$ is replaced by the degeneracy parameter $\psi=\dfrac{\mu}{kT}$
		- Determined by constraint of $\int_{0}^{\infty}n_{e}(p)dp=n_{e}$
- Due to Pauli exclusion principle electrons can exert higher pressure than predicted in classical physics
- For strong degeneracy electron pressure becomes nearly independent of temperature
#### Complete electron degeneracy
- The limit of $T\to0$
	- All available momentum states are occupied to a maximum value
- Maximum momentum is the Fermi momentum $p_{\mathrm{F}}$
	- $n_{e}(p)=\dfrac{8\pi p^{2}}{h^{3}}$ $p\leq p_{\mathrm{F}}$
	- $n_{e}(p)=0$ $p>p_{F}$
- $p_{F}=h\left( \dfrac{3}{8\pi}n_{e} \right)^{1/3}$
	- Determined from electron density
- Using pressure integral get $P_{e}=K_{NR}\left( \dfrac{\rho}{\mu_{e}} \right)^{5/3}$
	- $K_{\mathrm{NR}}=\dfrac{h^{2}}{20m_{e}m_{u}^{5/3}}\left( \dfrac{3}{\pi} \right)^{2/3}=1.0036\times10^{13}\mathrm{[cgs]}$
- If electron density is increased enough velocity $\dfrac{p_{\mathrm{F}}}{m_{e}}$ of most energetic electrons approaches $c$
	- Replace $v=\dfrac{p}{m}$ with $v_{p}=\dfrac{pc^{2}}{\epsilon}$ and in extreme relativistic limit $v=c$
	- $P_{e}=\dfrac{hc}{8}\left( \dfrac{3}{\pi} \right)^{1/3}n_{e}^{4/3}$
	- $P_{e}=K_{\mathrm{ER}}\left( \dfrac{\rho}{\mu_{e}} \right)^{4/3}$
		- $K_{\mathrm{ER}}=\dfrac{hc}{8m_{u}^{4/3}}\left( \dfrac{3}{\pi} \right)^{1/3}=1.2435\times10^{15}\mathrm{[cgs]}$
- Transition from NR to ER
	- Occurs at $\rho_{tr}$ with $p_{\mathrm{F}}\approx m_{e}c$
	- $\rho_{tr}\approx \mu_{e}m_{u} \dfrac{8\pi}{3}\left( \dfrac{m_{e}c}{h} \right)^{3}$
#### Partial degeneracy
 - Transition from classical ideal gas to state of strong degeneracy
 - Partial degeneracy corresponds to $\psi \sim0$
	 - $n_{e}\gtrsim \dfrac{2(2\pi m_{e}kT)^{3/2}}{h^{3}}$
	 - Strong degeneracy is when $n_{e}$ is roughly a factor of 10 higher
#### Importance of electron degeneracy in stars
- Degeneracy pressure can hold a star up against gravity regardless of temperature
	- Does not have to be in hydrostatic equilibrium
- White dwarfs
- There is a maximum mass for white dwarfs
	- As it becomes more compact and density increases pressure increases less steeply with density
- Degeneracy of ions is not as important since their mass and thus momentum is much larger
### 3.3.6 Radiation pressure
- Photons can be treated as QM particles with momentum and thus have a pressure
	- $g_{s}=2$
	- Bosons
	- Number of photons is not conserved
		- $\mu=0$
	- $n(p)dp=\dfrac{2}{h^{3}} \dfrac{1}{\exp \left[ \dfrac{\epsilon_{p}}{kT} \right]-1}4\pi p^{2}dp$
	- Relativistic $\epsilon_{p}=h\nu$
	- $n(\nu)d\nu=\dfrac{8\pi}{c^{3}} \dfrac{\nu^{2}d\nu}{\exp \left[ \dfrac{h\nu}{kT} \right]-1}$
- $n_{\mathrm{ph}}=bT^{3}$
	- $b=20.3\mathrm{cm^{-3}K^{-3}}$
- $U_{\mathrm{rad}}=aT^{4}$
	- $a=\dfrac{8\pi^{5}k^{4}}{16h^{3}c^{3}}=7.56\times10^{-15}\mathrm{ergcm^{-3}K^{-4}}$ is the radiation constant
- Radiation pressure $P=\dfrac{1}{3}U$ (relativistic)
	- $P_{\mathrm{rad}}=\dfrac{1}{3}aT^{4}$
#### Pressure of a mixture of gas and radiation
- $P=P_{\mathrm{rad}}+P_{\mathrm{ion}}+P_{\mathrm{e}}$
	- $P_{\mathrm{rad}}=\dfrac{1}{3}aT^{4}$
	- $P_{\mathrm{ion}}=\dfrac{\mathcal{R}}{\mu_{\mathrm{ion}}}\rho T$
	- If electrons are non degenerate $P=P_{\mathrm{rad}}+P_{\mathrm{ion}}$
	- If electrons are strongly degenerate 
		- $P_{\mathrm{ion}}$ can be neglected
		- $P_{\mathrm{gas}}=\beta P$
			- $P_{\mathrm{gas}}=P_{\mathrm{ion}}+P_{\mathrm{e}}$
		- $_{rad}=(1-\beta)P$
### 3.3.7 Equation of state regimes
- Boundaries between regimes
	- Between radiation and ideal-gas
		- $P_{\mathrm{rad}}=P_{\mathrm{gas}}$
		- $\dfrac{T}{\rho^{1/3}}=3.2\times10^{7}\mu^{-1/3}$
	- Between ideal-gas and NR degenerate electron pressure
		- $P_{\mathrm{gas,ideal}}=P_{e,\mathrm{NR}}$
		- $\dfrac{T}{\rho^{2/3}}=1.21\times10^{5}\mu \mu_{e}^{-5/3}$
	- Between NR and relativistic degeneracy
		- $\rho=9.7\times10^{5}\mu_{e}\mathrm{\dfrac{g}{cm^{3}}}$
	- At high densities between ideal gas and ER degeneracy
		- $\dfrac{T}{\rho^{1/3}}=1.60\times10^{7}\mu \mu_{e}^{-4/3}$
## 3.4 Adiabatic processes
- Adiabatic processes
	- Occur on short (hydrodynamical) time scales
	- No heat exchange with environment
- Laws of thermodynamics for a unit mass
	- $dq=Tds=du+Pdv=du-\dfrac{P}{\rho^{2}}d\rho$
		- $dq$ is the change in heat content
		- $du$ is the change in internal energy $u=\dfrac{U}{\rho}$ is the specific internal energy
		- $s$ is the specific entropy
		- $v=\dfrac{1}{\rho}$ is the volume of unit mass
#### Differential form of the equation of state
- Write equation of state in differential form
	- $\dfrac{dP}{P}=\chi_{T} \dfrac{dT}{T}+\chi_{\rho} \dfrac{d\rho}{\rho}$
	- $\chi_{T}=\left( \frac{ \partial \log P }{ \partial \log T } \right)_{\rho,X_{i}}=\dfrac{T}{P}\left( \frac{ \partial P }{ \partial T } \right)_{\rho,X_{i}}$
	- $\chi_{\rho}=\left( \frac{ \partial \log P }{ \partial \log \rho } \right)_{T,X_{i}}=\dfrac{\rho}{P}\left( \frac{ \partial P }{ \partial \rho } \right)_{T,X_{i}}$
	- Composition is held constant
- If $\chi_{T}$ and $\chi_{\rho}$ are approximately constant then
	- $P=P_{0}\rho ^\chi_{\rho}T^{\chi_{T}}$
- For ideal gas without radiation
	- $\chi_{T}=\chi_{\rho}=1$
- For radiation dominated gas
	- $\chi_{T}=4$
	- $\chi_{\rho}=0$
### 3.4.1 Specific heats
- $c_{V}=\left( \dfrac{\mathrm{d}q}{\mathrm{d}T} \right)_{v}=\left( \dfrac{ \partial u }{ \partial T } \right)_{v}$
- $c_{P}=\left( \dfrac{ \rm{d} q }{ \rm{d} T } \right)_{P}=\left( \dfrac{ \partial u }{ \partial T } \right)_{P}-\dfrac{P}{\rho^{2}}\left( \dfrac{ \partial \rho }{ \partial T } \right)_{P}$
- Partial with constant $v$ is the same as with constant $\rho$
- Ideal gas
	- $c_{V}=\dfrac{3}{2} \dfrac{\mathcal{R}}{\mu}$
- Radiation dominated gas
	- $c_{V}=\dfrac{4aT^{3}}{\rho}$
- Relation between specific heats
	- $c_{P}-c_{V}=\dfrac{P}{\rho T} \dfrac{\chi_{T}^{2}}{\chi_{\rho}}$
	- Ideal gas
		- $c_{P}-c_{V}=\dfrac{\mathcal{R}}{\mu}$
			- $c_{P}=\dfrac{5}{2} \dfrac{\mathcal{R}}{\mu}$
	- Radiation dominated gas
		- $\chi_{\rho}=0$ so $c_{P}\to \infty$
		- Since $P_{\mathrm{rad}}$ only depends on $T$ a change in $T$ must be at constant $P$
- Ratio of specific heats is $\gamma$
	- $\gamma=\dfrac{c_{P}}{c_{V}}=1 +\dfrac{P}{\rho Tc_{V}} \dfrac{\chi_{T}^{2}}{\chi_{\rho}}$
	- $\gamma=\dfrac{5}{3}$ for ideal gas
#### Expressions for dq
- $dq=Tds=c_{V}dT-\chi_{T} \dfrac{P}{\rho^{2}}d\rho=c_{P}dT- \dfrac{\chi_{T}}{\chi_{\rho}} \dfrac{dP}{\rho}$
### 3.4.2 Adiabatic derivatives
- Use adiabatic derivatives to measure the thermodynamic response of a system to adiabatic changes
- Adiabatic exponent $\gamma_{ad}$ measures response of pressure to adiabatic compression/expansion (e.g. change in density
	- $\gamma_{ad}=\left( \dfrac{ \partial \log P }{ \partial \log \rho } \right)_{ad}$
	- Related to the dynamical stability of stars
- Adiabatic temperature gradient
	- $\nabla_{ad}=\left( \dfrac{ \partial \log T }{ \partial \log P } \right)_{ad}$
	- Important for stability against convection
#### Adiabatic exponent
- Adiabatic means $dq=0$
- $du=\dfrac{P}{\rho^{2}}d\rho$
- For a perfect gas of free particles
	- $u=\phi  \dfrac{P}{\rho}$
	- $\phi$ is a constant between $\dfrac{3}{2}$ and $3$
	- For adiabatic change
		- $\dfrac{dP}{P}=\dfrac{\phi+1}{\phi} \dfrac{d\rho}{\rho}$
		- So $\gamma_{ad}=\dfrac{\phi +1}{\phi}$
	- For NR particles
		- $\phi=\dfrac{3}{2}$
		- $\gamma_{ad}=\dfrac{5}{3}$
	- For ER particles
		- $\phi=3$
		- $\gamma_{ad}=\dfrac{4}{3}$
	- For mixture of gas and radiation $(0\leq\beta\leq1)$ and/or moderately relativistic degenerate electrons
		- $\dfrac{4}{3}\leq\gamma_{ad}\leq \dfrac{5}{3}$
- For general EOS
	- $\gamma_{ad}=\chi_{\rho}+\dfrac{P}{\rho Tc_{V}}\chi_{T}^{2}$
#### Adiabatic temperature gradient
- $\nabla_{ad}=\dfrac{\gamma_{ad}-\chi_{\rho}}{\gamma_{ad}\chi_{T}}$
- Limiting cases
	- Ideal gas without radiation $(\beta=1)$
		- $\chi_{T}=\chi_{\rho}=1$
		- $\gamma_{ad}=\dfrac{5}{3}$
		- So $\nabla_{ad}=\dfrac{2}{5}$
	- Radiation dominated gas $(\beta=0)$
		- $\chi_{T}=4$ $\chi_{\rho}=0$
		- So $\nabla_{ad}=\dfrac{1}{4}$
- For general non-adiabatic process
	- $dq=c_{P}\left( dT-\nabla_{ad} \dfrac{T}{P}dP \right)$
- Mixture of gas and radiation $0<\beta<1$
	- $\nabla_{ad}$ and $\gamma_{ad}$ both depend on $\beta$
	- $0.25<\nabla_{ad}<0.4$
- Non-relativistic degenerate gas
	- There is a (tiny) temperature dependence due to the ion gas
	- Here $\nabla_{ad}=0.4$
- Extremely relativistic degenerate gas
	- Consider that while electrons are relativistic ions are non-relativistic
	- So $\nabla_{ad}=0.5$
## 3.5 Ionization
- So far have considered complete ionization of gas
- Good approximation in stellar interiors
- But for outer layers need to consider the partial ionization of the elements
	- Here quasi-static changes of $\rho$ and $T$ lead to changes in degree of ionization
	- Can affect thermodynamic properties ($\gamma_{ad}$ and $\nabla_{ad}$)
- In LTE number densities of ionized and neutral species are determiend with the Saha equation
	- $\dfrac{n_{r+1}}{n_{r}}n_{e}=\dfrac{u_{r+1}}{u_{r}} \dfrac{2(2\pi m_{e}kT)^{3/2}}{h^{3}}\exp \left[ -\dfrac{\chi_{r}}{kT} \right]$
		- $n_{r}$ and $n_{r+1}$ indicate number densities of $r$ and $r+1$ ionized nuclei
		- $\chi_{r}$ is the ionization potential (energy to remove $r$-th bound electron)
		- $u_{r}$ and $u_{r+1}$ are the partition functions
			- Depends on $T$
			- But can be approximated
### 3.5.1 Ionization of Hydrogen
- Small increase in temperature increases degree of ionization
	- Large amount of energy absorbed by the gas
	- Specific heat of partially ionized gas is much larger than an unionized or completely ionized gas
- If gas is adiabatically compressed
	- From neutral $\mathrm{H}$ $\nabla_{ad}=0.4$
		- $T\propto P^{0.4}$
	- Further compression increases $u$
	- But when partial ionization sets in most energy goes into raising degree of ionization
	- Not much into raising temperature
		- So $\nabla_{ad}<0.4$
	- As gas becomes fully ionized $\nabla_{ad}$ goes back to 0.4
- The decrease of $\nabla_{ad}$ in partial ionization zones can induce convection in the outer layers of stars
### 3.5.2 Ionization of a mixture of gases
- More complicated but basic physics remained the same
- $\nabla_{ad}$ can show additional deviations below $0.4$
### 3.5.3 Pressure ionization
- As $\rho$ increases indefinitely Saha equation gives $x\to0$
	- Ionized gas recombines to form atoms
	- Nonsense at very density
	- Very incorrect when average distance between ions becomes less than atomic radius
		- Known as pressure ionization
## 3.6 Other effects on the equation of state
### 3.6.1 Coulomb interactions and crystallization
- Ratio of Coulomb energy to kinetic energy is the Coulomb parameter
	- $\Gamma_{C}=\dfrac{Z^{2}e^{2}}{dkT}=\dfrac{Z^{2}e^{2}}{kT}\left( \dfrac{4\pi \rho}{3Am_{u}} \right)^{1/3}=2.275\times10^{5} \dfrac{Z^{2}}{A^{1/3}} \dfrac{\rho^{1/3}}{T}$
		- $d$ is the average distance between particles $d\approx \left( \dfrac{4\pi}{3}n \right)^{-1/3}$
			- $n$ is the number density $n=\dfrac{\rho}{Am_{u}}$
		- Each particle has charge $Ze$
- Coulomb interactions increase in importance at high densities or low temperatures
	- $\Gamma_{c}\gtrsim1$ for importance
#### Crystallization
- If $\Gamma_{C}\gg1$ thermal motions of ions are overwhelmed by Coulomb interactions
	- Ions settle down into a conglomerate with lower energy (a crystal lattice)
- Never occurs in Hydrogen rich stellar interiors
- Can happen in white dwarfs
- Only occurs in regions where electrons are strongly degenerate
### 3.6.2 Pair production
- At very high temperatures and relatively low densities
	- Photon may turn into an electron-positron pair 
	- If $E=h\nu$ exceeds rest-mass energy of the pair
		- $h\nu>2m_{e}c^{2}$
	- Takes place at typical temperature of $T\approx1.2\times10^{10}\mathrm{K}$
		- But even at $T\sim10^{9}$ can get some
	- Positrons tend to be annihilated quickly be inverse reaction
- Pair production leads to decrease of $\gamma_{ad}$ and $\nabla_{ad}$
	- Affects the stability of very massive stars in advanced stages of evolution
	- Can trigger collapse
# Chapter 4 Polytropic Stellar Models
- [x] #TODO Read Chapter 4 Polls  [due:: 2025-11-03]  [completion:: 2025-11-03]
- Equation of [[Hydrostatic equilibrium|HE]] can be solved if pressure is a known function of density $P=P(\rho)$
- Special case, polytropic relation, $P=K\rho^{\gamma}$
	- $K$ and $\gamma$ are constants
	- Are simple and give insight but have generally been replaced with more accurate models
## 4.1 [[Polytrope]]s and the Lane-Emden equation
- Boundary conditions
	- $\rho(0)=\rho_{c}$
	- $\left( \dfrac{ \mathrm{d} \rho }{ \mathrm{d} r } \right)_{r=0}=0$
- Lane-Emden equation
	- $\dfrac{1}{z^{2}} \dfrac{ \rm{d}  }{ \rm{d} z }\left( z^{2}\dfrac{ \mathrm{d} w }{ \mathrm{d} z } \right)+w^{n}=0$
	- $\rho=\rho_{c}w^{n}$
		- $\rho(0)=\rho_{c}$
		- $\rho_{c}$ is chosen or determined from constraints
	- $r=\alpha z$
	- $\alpha=\left( \dfrac{n+1}{4\pi G}K\rho_{c}^{1/n-1} \right)^{1/2}$
	- $n=\dfrac{1}{\gamma-1}$ is the polytropic index
		- $\gamma=1+\dfrac{1}{n}$
- Only 3 analytical solutions otherwise have to use numerical methods
	$$\begin{align} 
	\begin{cases}
	n=0:\;w(z)=1-\dfrac{z^{2}}{6}\;z_{0}=\sqrt{ 6 } \\
	n=1:\;w(z)=\sin \dfrac{z}{z}\;z_{1}=\pi \\
	n=5:\;w(z)=\left( 1+\dfrac{z^{2}}{3} \right) ^{-1/2}\;z_{5}=\infty
	\end{cases}
	\end{align}$$
	- $n=0$ is a homogenous gas sphere with constant density
	- $n=5$ has infinite radius
### 4.1.1 Physical properties of the solutions
- With $w(z)$ solved fix relative density distribution which is determined by $n$
- Radius $R=\alpha z_{n}=\left[ \dfrac{(n+1)K}{4\pi G} \right]^{1/2}\rho_{c}^{(1-n)/2n}z_{n}$
- Mass $m(z)=-4\pi\alpha^{3}\rho_{c}z^{2}\dfrac{ \mathrm{d} w }{ \mathrm{d} z }$
- Total mass $M=4\pi\alpha^{3}\rho_{c}\Theta_{n}$
	- $\Theta_{n}\equiv \left( -z^{2} \dfrac{ \mathrm{d} w }{ \mathrm{d} z } \right)_{z=z_{n}}$
- $K=N_{n}GM^{(n-1)/n}R^{(3-n)/n}$
	- $N_{n}=\dfrac{(4\pi)^{1/n}}{n+1}\Theta_{n}^{(1-n)/n}z_{n}^{(n-3)/n}$
- Average density $\bar{\rho}=\left( -\dfrac{3}{z}\dfrac{ \mathrm{d} w }{ \mathrm{d} z } \right)_{z=z_{n}}$
- Central density $\rho_{c}=\dfrac{3\Theta_{n}}{z_{n}^{3}}\rho_{c}$
- Central pressure $P_{c}=K\rho_{c}^{(n+1)/n}$
- $P_{c}=W_{n} \dfrac{GM^{2}}{R^{4}}$
	- $W_{n}=\dfrac{z_{n}^{4}}{4\pi(n+1)\Theta_{n}^{2}}$
- $P_{c}=C_{n}GM^{2/3}\rho_{c}^{4/3}$
	- $C_{n}=\dfrac{(4\pi)^{1/3}}{n+1}\Theta_{n}^{-2/3}$
- Gravitational potential energy: $E_{\mathrm{gr}}=-\dfrac{3}{5-n} \dfrac{GM^{2}}{R}$
## 4.2 Application to stars
- Constant $K$ can be in terms of physical constants
	- Ex: dominated by pressure of degenerate electrons
	- Then unique relation between mass and radius of star
- Constant $K$ expresses proportionality that is constant for a specific star but varies between stars
	- Many different possible values of $M$ and $R$
### 4.2.1 White dwarfs and the Chandrasekhar mass
- White dwarfs interior pressure is dominated by electron degeneracy
- Can be described with polytropic relation of $n=1.5$
- Then $R\propto M^{-1/3}$
- Eventually get so compact that all electrons become extremely relativistic then $n=3$
- So $M=4\pi\Theta_{3}\left( \dfrac{K}{\pi G} \right)^{3/2}$
	- Upper limit to the mass of a gas sphere in HE
- Get Chandrasekhar mass $M_{\mathrm{Ch}}=5.836\mu_{e}^{-2}M_{\odot}$
- For white dwarfs $M_{\mathrm{Ch}}=1.46M_{\odot}$
### 4.2.2 Eddington's standard model
- Pressure is a mixture of ideal gas pressure and radiation pressure
	- $K$ is not fixed and is like a free parameter
- $P=\dfrac{1}{\beta} \dfrac{\mathcal{R}}{\mu}\rho T$
- $1-\beta=\dfrac{P_{\mathrm{rad}}}{P}=\dfrac{aT^{4}}{3P}$
- Assuming constant $\beta$ then $T^{4}\propto P$ throughout the star
- $P=\left( \dfrac{3\mathcal{R}^{4}}{a\mu^{4}} \dfrac{1-\beta}{\beta^{4}} \right)^{1/3}\rho^{4/3}$
	- Polytropic with $n=3$ with constant $\beta$
- Very rough approximation for stars where radiation is the main energy transport mechanism
# Chapter 5 Energy Transport in Stellar Interiors
- [x] #TODO Read Chapter 5 Polls  [due:: 2025-11-04]  [completion:: 2025-11-04]
- Energy a star radiates is generally replenished from the hot central region
- Transfer of energy is possible from the non-zero temperature gradient in the star
- Radiation is always present but not the only method
- Heat diffusion: random thermal motions of particles
	- Photons: radiative diffusion
	- Gas particles: head conduction
- Convection: collective (bulk) motion of gas particles
	- Important in stellar interiors
	- Not well understood
## 5.1 Local energy conservation
- From first law of thermodynamics for a gas element of unit mass
	- $\delta u=\delta q+\dfrac{P}{\rho^{2}}\delta \rho$
		- First term is heat 
		- Second term is work
- To a spherical mass shell heat is
	- Added by release of nuclear energy: $\epsilon_{nuc}$
	- Remove by release of energetic neutrinos. $\epsilon_{\nu}$
		- From weak interactions
	- Absorbed or emitted due to balance of heat fluxes moving into and out of the shell
		- Local luminosity: $l=4\pi r^{2}F$
			- $F$ is the radial energy flux
			- $l=L$ a the surface
			- $l=0$ at the center
	- $\delta Q=\epsilon_{nuc}\Delta m\delta t-\epsilon_{\nu}\Delta m\delta t+l(m)\delta t-l(m+\Delta m)\delta t$
- $\boldsymbol{\dfrac{ \partial l }{ \partial m }}=\boldsymbol{\epsilon_{\mathrm{nuc}}-\epsilon_{\nu}-\dfrac{ \partial u }{ \partial t }+\dfrac{P}{\rho^{2}}\dfrac{ \partial \rho  }{ \partial t }}$
	- $\dfrac{ \partial l }{ \partial m }=\epsilon_{\mathrm{nuc}}-\epsilon_{\nu}+\epsilon_{\mathrm{gr}}$
	- $\epsilon_{gr}=-\dfrac{ \partial u }{ \partial t }+\dfrac{P}{\rho^{2}}\dfrac{ \partial \rho }{ \partial t }=-T\dfrac{ \partial s }{ \partial t }$
- In thermal equilibrium
	- Stationary so time derivatives vanish
	- $\dfrac{ \mathrm{d} l }{ \mathrm{d} m }=\epsilon_{\mathrm{nuc}}-\epsilon_{\nu}$
	- Integrate: $L\equiv L_{\mathrm{nuc}}-L_{\nu}$
## 5.2 Energy transport by radiation and conduction
### 5.2.1 Heat diffusion by random motions
- Fick's law of diffusion
	- When there is a gradient $\vec{\nabla}n$ in the density of particles
	- The diffusive flux $\vec{J}$ is given by $\boldsymbol{J}=-D\boldsymbol{\nabla}n$
		- $D=\dfrac{1}{3}\bar{v}l$ is the diffusion coefficient
			- $\bar{v}$ is the average particle velocity
			- $l$ is their mean free path
- Consider unit surface area with particles crossing in both directions
	- $z$ is perpendicular to the surface
	- $\dfrac{dN}{dt}=\dfrac{1}{6}n\bar{v}$
		- Amount of particles across the surface per time
	- Net particle flux $J=-\dfrac{1}{3}\bar{v}l\dfrac{ \partial n }{ \partial z }$
- Also gradient in energy density $U$ carried by the particles
	- There is a gradient since particles moving "up" on average carry more energy
	- $\boldsymbol{F}=-D\boldsymbol{\nabla }U$
	- Equation for heat conduction
		- $\boldsymbol{F}=-K\boldsymbol{\nabla}T$
			- Conductivity $K=\dfrac{1}{3}\bar{v}lC_{V}$
### 5.2.2 Radiative diffusion of energy
- Photons
	- $\bar{v}=c$
	- $U=aT^{4}$
	- $C_{V}=4aT^{3}$
	- $l_{\mathrm{ph}}=\dfrac{1}{\kappa \rho}$
		- $\kappa$ is the opacity
	- $K_{\mathrm{rad}}=\dfrac{4}{3} \dfrac{acT^{3}}{\kappa \rho}$
	- $F_{\mathrm{rad}}=-\dfrac{4}{3} \dfrac{acT^{3}}{\kappa \rho}\boldsymbol{\nabla}T$
- $\boldsymbol{\dfrac{ \partial T }{ \partial m }}=\boldsymbol{-\dfrac{3}{64\pi^{2}ac} \dfrac{\kappa l}{r^{4}T^{3}}}$
	- Temperature gradient required to carry entire luminosity $l$ by radiation
	- Valid as long as $l_{ph}\ll R$ (in [[Local thermal equilibrium|LTE]])
		- Breaks down when photosphere is approached
- In HE can define the radiative temperature gradient
	- $\boldsymbol{\nabla_{\mathrm{rad}}=\boldsymbol{\left( \dfrac{ \mathrm{d} \log T }{ \mathrm{d} \log P } \right)_{\mathrm{rad}}}}=\boldsymbol{\dfrac{3}{16\pi acG} \dfrac{\kappa lP}{mT^{4}}}$
	- Describes the logarithmic variation of $T$ with depth (expressed as pressure)
	- For star in HE with energy only transported by radiation
### 5.2.3 The Rosseland mean opacity
- Before derived without dependence on $\nu$
- But in general opacity coefficient $\kappa\to\kappa_{\nu}$
	- So must take proper average over frequency
- Rosseland mean opacity: $\dfrac{1}{\kappa}=\dfrac{1}{4aT^{3}}\int_{0}^{\infty} \dfrac{1}{\kappa_{\nu}} \dfrac{ \partial U_{\nu} }{ \partial T }d\nu$
	- Represents the harmonic mean of $\kappa_{\nu}$ with weighting function $\dfrac{ \partial U_{\nu} }{ \partial T }$
	- Represents the average transparency of the stellar gas
### 5.2.4 Conductive transport of energy
- Collisions between gas particles can also transport heat
	- Much smaller than radiative conductivity
- This changes when electrons become degenerate
	- Velocities increase 
	- More importantly mean free paths increase
- When $l_{e}\gg l_{\mathrm{ph}}$
	- Electron conduction is much more efficient at transporting energy than radiative diffusion
	- Seen in
		- Stars in late stages of evolution
		- White dwarfs
- Can define conductive opacity $\kappa_{\mathrm{cd}}$ and conductivity $K_{\mathrm{cd}}=\dfrac{4acT^{3}}{3\kappa_{\mathrm{cd}}\rho}$
- Combined flux: $\boldsymbol{F}=-\dfrac{4acT^{3}}{3\kappa \rho}\boldsymbol{\nabla}T$
	- $\dfrac{1}{\kappa}=\dfrac{1}{\kappa_{\mathrm{rad}}}+\dfrac{1}{\kappa_{\mathrm{cd}}}$
## 5.3 Opacity
- Opacity coefficient $\kappa$ determines the flux that can be transported by radiation for a certain temperature gradient
### 5.3.1 Sources of opacity
#### Electron scattering
- EM wave passes an electron causing it to oscillate and radiate in other directions
- Equivalent to absorption
- Described by Thomson cross-section of electron $\sigma_{e}$
- $\kappa_{\mathrm{es}}=\dfrac{\sigma_{e}}{\mu_{e}m_{u}}=0.20(1+X)\mathrm{\dfrac{cm^{2}}{g}}$
	- Assumed gas completely ionized
- Same as Rosseland mean
#### Free-free absorption
- Inverse process of bremsstrahlung
- With charged ion in vicinity electron can absorb photon
- Classically: $\kappa_{\nu,\mathrm{ff}}\propto  \dfrac{n_{\mathrm{e}}}{\rho}\sum_{i=1}n_{i}Z_{i}^{2}T^{-1/2}\nu^{-3}$
- For Rosseland mean: $\kappa_{\mathrm{ff}}\propto \rho T^{-7/2}$
- Opacity in this form is Kramers opacity
- $\kappa_{\mathrm{ff}}\approx3.8\times10^{22}(1+X)\rho T^{-7/2}\mathrm{\dfrac{cm^{2}}{g}}$
- Need QM to fully describe accurately
#### Bound-free and bound-bound absorption
- Bound-free: absorption of photon by bound electron with photon energy exceeding ionization energy of ion/atom
	- Classically frequency dependence $\propto \nu^{-3}$
		- If $h\nu>\chi_{\mathrm{ion}}$
	- Very approximate: $\kappa_{\mathrm{bf}}\approx4.3\times10^{25}(1+X)Z\rho T^{-7/2}\mathrm{\dfrac{cm^{2}}{g}}$
	- Very approximate: $\kappa_{\mathrm{bf}}\approx10^{3}Z\times\kappa_{\mathrm{ff}}$
		- Bound-free absorption to dominate free-free for $Z\gtrsim10^{-3}$
- Bound-bound: photon induced transitions between bound states in atoms/ions
	- Mainly important for $T\lesssim10^{6}\mathrm{K}$
#### The negative hydrogen ion
- For relatively cool stars bound-free absorption of $H^{-}$ is important
- Opacity is sensitive to metallicity and temperature
- Very approximate: $\kappa_{\mathrm{H-}}\approx2.5\times10^{-31}\left( \dfrac{Z}{0.02} \right)\rho^{1/2}T^{9}\mathrm{\dfrac{cm^{2}}{g}}$
#### Molecules and dust
- Cool stars with $T_{\mathrm{eff}}\lesssim4000\mathrm{K}$ molecules and dust become dominant for opacity
- Very complicated
#### Conductive opacities
- Under ideal gas conduction is very inefficient compared to radiative transport
- For degenerate electron gas
	- $\kappa_{\mathrm{cd}}\approx4.4\times10^{-3} \dfrac{\sum_{i}Z_{i}^{5/3}X_{i}/A_{i}}{(1+X)^{2}} \dfrac{(T/10^{7}\mathrm{K})^{2}}{(\rho/10^{5}\mathrm{g/cm^{3}})^{2}}\mathrm{cm^{2}/g}$
### 5.3.2 A detailed view of stellar opacities
- Generally $\kappa=\kappa(\rho,T,X_{i})$ is very complicated 
	- Approximations above are generally to simple/inaccurate
- In practice interpolate from pre-computed opacity tables
- Metallicity in particular can have a large a effect $\kappa$
## 5.4 The Eddington luminosity
- Since there is a temperature gradient $\dfrac{dT}{dr}$ then there is a radiation pressure gradient
	- $\dfrac{dP_{\mathrm{rad}}}{dr}=-\dfrac{\kappa \rho}{4\pi c} \dfrac{1}{r^{2}}$
	- Outward force due to the net flux of photons outwards
- In HE
	- $|\dfrac{ \mathrm{d} P_{\mathrm{rad}} }{ \mathrm{d} r}|<|\left( \dfrac{ \mathrm{d} P }{ \mathrm{d} r } \right)_{\mathrm{HE}}|\to \dfrac{\kappa \rho}{4\pi c} \dfrac{1}{r^{2}}< \dfrac{Gm\rho}{r^{2}}$
	- Giving upper limit to local luminosity or the Eddington luminosity
		- $l < \dfrac{4\pi cGm}{\kappa}=l_{\mathrm{Edd}}$
	- At extremes
		- Very large heat flux or very high opacity
	- Need convection to support HE
- Surface layer of star is always radiative
	- $L<L_{\mathrm{Edd}}=\dfrac{4\pi cGM}{\kappa}$
	- Violation of this violates HE resulting in violent mass loss
	- Can expect a maximum mass for main-sequence stars
## 5.5 Convection
- There is an upper limit to the temperature gradient of a star to carry energy outwards radiatively
- Beyond this leads to convection, macroscopic movements of gas in the star
### 5.5.1 Criteria for stability against convection
- Need to consider dynamical stability of a layer in a star. As perturbations can grow and cause convection
- General criterion: $\dfrac{ \mathrm{d} \log \rho }{ \mathrm{d} \log P }> \dfrac{1}{\gamma_{\mathrm{ad}}}$
	- If violated convective motions develop
#### The Schwarzschild and Ledoux criteria
- Prior criterion isn't as useful as it depends on a density gradient. Prefer to have temperature gradient
- Ledoux: $\nabla_{\mathrm{rad}}<\nabla_{\mathrm{ad}}-\dfrac{\chi_{\mu}}{\chi_{T}}\nabla_{\mu}$
	- For ideal gas: $\nabla_{\mathrm{rad}}<\nabla_{\mathrm{ad}}+\nabla_{\mu}$
- Schwarzschild: $\nabla_{\mathrm{rad}}<\nabla_{\mathrm{ad}}$
	- Reduced form in chemically homogeneous layers where $\nabla_{\mu}=0$
#### Occurrence of convection
- Expect convection to occur (Schwarzschild) if $\nabla_{\mathrm{rad}}=\dfrac{3}{16\pi acG} \dfrac{P}{T^{4}} \dfrac{\kappa l}{m}>\nabla_{\mathrm{ad}}$
- Requires
	- Large value of $\kappa$
	- Large value of $\dfrac{l}{m}$
		- Regions with large energy flux
	- Small value of $\nabla_{\mathrm{ad}}$
		- Partial ionization zones of relatively low temperature
### 5.5.2 Convective energy transport
- Convection has not been solved so resort to 1D theory called the mixing length theory (MLT)
- Approximate convective motions with blobs of gas traveling up/down a radial distance $l_{m}$ (the mixing length) after which they dissolve
	- During dissolution release excess heat or absorb in heat deficit
- Assume $l_{m}$ of the order local pressure scale height: $H_{P}=|\dfrac{ \mathrm{d} r }{ \mathrm{d} \ln P }|=\dfrac{P}{\rho g}$
#### The convective energy flux
- Temp difference between gas element (e) and surroundings (s)
	- $\Delta T=T \dfrac{l_{m}}{H_{P}}(\nabla-\nabla_{\mathrm{ad}})$
- Excess of internal energy of the gas element: $\Delta u=c_{P}\Delta T$
- Energy flux carried by convective gas elements: $F_{\mathrm{conv}}=v_{c}\rho c_{P}\Delta T$
- Use boyancy force to get rough acceleration for time $t$ given by $l_{m}=\dfrac{1}{2}at^{2}$ and rough velocity
	- $v_{c}\approx \sqrt{ \dfrac{l_{m}^{2}g}{2H_{P}}(\nabla-\nabla_{\mathrm{AD}}) }$
- $F_{\mathrm{conv}}=\rho c_{P}T\left( \dfrac{l_{m}}{H_{P}} \right)^{2}\sqrt{ \dfrac{1}{2}gH_{P} }(\nabla-\nabla_{\mathrm{ad}})^{3/2}$
- Relate convective velocity and convective energy flux to the superadiabaticity $\nabla-\nabla_{\mathrm{ad}}$
	- Or how much the actual temperature gradient $\nabla$ exceed the adiabatic value
#### Estimate of the convective temperature gradient
- What value of $\nabla-\nabla_{\mathrm{ad}}$ is required to take the entire energy flux of a star by convection: $F_{\mathrm{conv}}=\dfrac{l}{4\pi r^{2}}$
- $F_{\mathrm{conv}}\sim \dfrac{M}{R^{3}}\left( \dfrac{GM}{R} \right)^{3/2}(\nabla-\nabla_{\mathrm{ad}})^{3/2}$
- Then $\nabla-\nabla_{\mathrm{ad}}\sim \left( \dfrac{LR}{M} \right)^{2/3} \dfrac{R}{GM}\sim10^{-8}$
- Can conclude deep stellar interior is nearly adiabatic so don't need detailed theory of convection
### 5.5.3 Convective mixing
- Convection is very efficient at mixing
- $v_{c}\approx v_{s}\sqrt{ \nabla-\nabla_{\mathrm{ad}} }$
	- Are strongly subsonic except in very outer layers
- Convective mixing time scale is on order of weeks to months
	- $\tau_{\mathrm{mix}}\ll \tau_{\mathrm{KH}}\ll \tau_{\mathrm{nuc}}$
- This means
	- Star in which nuclear burning happens in a convective core will homogenize the region inside the core
		- Transport ashes outwards
		- Transport fuel inwards
	- Star with a deep convective envelope will mix burning products toward the surface
		- Happens when stars become red giants
### 5.5.4 Convective overshooting
- Convective eddies have a non-zero velocity on average and will overshoot the Schwarzschild boundary due to inertia
- They carry some heat and mix with their surroundings
	- $|\nabla-\nabla_{\mathrm{ad}}|$ and $\mu$-gradient decrease
	- Can cause positive feedback loop of overshooting elements going further and further
- Leads to large uncertainty in extent of mixed regions
# Chapter 6 Nuclear Processes in Stars
- [x] #TODO Read Chapter 6 Polls  [due:: 2025-11-05]  [completion:: 2025-11-05]
- Nuclear reactions provide the energy to balance the radiative energy lost at the surface
- They don't determine the luminosity of the star (that is by how fast the energy can be transported)
- Determine how long the star can sustain its luminosity
- Change the composition of chemical elements into other, generally heavier, ones
## 6.1 Basic Nuclear Properties
- General reaction
	- $X+a\to Y+b$
		- Nucleus $X$
		- Particle $a$
			- Generally another nucleus
		- Nucleus $Y$
		- Particle $b$
			- Nucleus or a $\gamma$ photon or something else
			- Can also be multiple particles
	- Charge conserved: $Z_{X}+Z_{a}=Z_{Y}+Z_{b}$
	- Baryon number conserved: $A_{X}+A_{a}=A_{Y}+A_{b}$
### 6.1.1 Nuclear energy production
- Mass of atomic nuclei are not just the masses of the nucleons (protons + neutrons) but also the binding energy
	- $E_{B,i}=\left[ \left( A_{i}-Z_{i} \right)m_{n}+Z_{i}m_{p}-m_{i} \right]c^{2}$
		- $m_{n}$ mass of free neutron
		- $m_{p}$ mass of free proton
- Mass difference $\Delta m$ converted into energy with $E=\Delta mc^{2}$
- Energy released: $Q=\left( m_{X}+m_{a}-m_{Y}-m_{b} \right)c^{2}$
	- $Q<0$ endothermic
	- $Q>0$ exothermic
- Energy release by a reaction is related to the mass defect of nuclei: $\Delta M_{i}$
	- $Q=\Delta M_{X}+\Delta M_{a}-\Delta M_{Y}-\Delta M_{b}$
		- $\Delta M_{i}=\left( m_{i}-A_{i}m_{u} \right)c^{2}$
- Binding energy per nucleon $E_{B}/A$ is generally more informative to compare nuclei
- $^{56}\mathrm{Fe}$ is an endpoint for fusion as any more requires energy to be put in
## 6.2 Thermonuclear reaction rates
- Rate of reaction depends on the cross section
	- The effective surface area of particle $X$ for interacting with particle $a$
	- $\sigma=\mathrm{\dfrac{number\;of\;reactions\;X(a,b)Y\;per\;second}{flux\;of\;incident\;particles\;a}}$
- Number of reactions per sec in a unit volume:
	- If $X$ and $a$ are different: $\tilde{r}_{ij}=n_{i}n_{j}v\sigma$
	- If $X$ and $a$ are the same: $\tilde{r}_{ij}=\dfrac{1}{1+\delta_{ij}}n_{i}n_{j}v\sigma$
- Generally $\sigma=\sigma(v)$ with a normalized distribution of velocities $\phi(v)$ 
	- Overall reaction rate: $r_{ij}=\dfrac{1}{1+\delta_{ij}}n_{i}n_{j}\int_{0}^{\infty}\phi(v)\sigma(v)vdv=\dfrac{1}{1+\delta_{ij}}n_{i}n_{j}\langle \sigma v \rangle$
- In [[Local thermal equilibrium|LTE]]
	- Velocities are given by Maxwell Boltzmann distribution
	- $\langle \sigma v \rangle=\left( \dfrac{8}{\pi m} \right)^{1/2}\left( kT \right)^{-3/2}\int_{0}^{\infty}\sigma(E)E\exp \left( -\dfrac{E}{kT} \right)dE$
		- Depends only on $T$
### 6.2.1 Nuclear cross-sections
- Classically:
	- Reaction between nuclei $i$ and $j$ with radii $R_{i}$ and $R_{j}$
	- $\sigma=\pi(R_{i}+R_{j})^{2}$
	- $R_{i}\approx R_{0}A_{i}^{1/3}$
	- $R_{0}=1.44\times10^{-13}\;\mathrm{cm}$
- Quantum mechanically
	- Use de Broglie wavelength
	- $\lambda=\dfrac{\hbar}{\left( 2mE \right)^{1/2}}$
		- $m$ and $E$ are the reduced mass and relative kinetic energy
	- Assume non relativistic particles
	- Then $\sigma=\pi \lambda^{2}$
	- Typically this is much larger than classical estimates
- Real situation is more complicated
	- Charged nuclei experience repulsive Coulomb force
		- Coulomb barrier
		- Need quantum tunneling to overcome
	- Nature of the force involved in the reaction determines the strength of the interaction
		- Weaker forces have smaller cross sections
	- Nuclear structure effects can influence the cross section (particularly resonant interactions)
#### Coulomb barrier and the tunnel effect
- Particles must overcome a Coulomb barrier $E_{C}=V(r_{n})\approx Z_{1}Z_{2}\mathrm{MeV}$
- Classically particle can only come within distance $r_{c}$ where $E=V(r_{c})$
	- This in stars falls short of the Coulomb barrier by a factor of 1000
- So have quantum tunneling
	- Probability of tunneling: $P\sim \exp \left( -\int_{r_{n}}^{r_{c}} \dfrac{\sqrt{ 2m[V(r)-E] }}{\hbar}dr \right)$
		- $r_{c}=\dfrac{Z_{i}Z_{j}e^{2}}{E}$
	- At relatively low temperatures only the lightest nuclei have a non-negligible chance to react
- Cross section has energy dependence with resonance form:
	- $\xi(E)\propto \dfrac{1}{(E-E_{\mathrm{res}})^{2}+(\Gamma/2)^{2}}$
- Cross-section depends on energy as $\sigma(E)\propto \pi\lambda^{2}P(E)\xi(E)$
#### The astrophysical cross-section factor
- $\boldsymbol{\sigma(E)}=\boldsymbol{S(E) \dfrac{\exp(-bE^{-1/2})}{E}}$
	- Defines the astrophysical S factor: $S(E)$
- Generally rely on laboratory measurements to obtain $S(E)$
#### Nuclear structure effects on the cross section
- After passing the Coulomb barrier two nuclei can form an unstable excited compound nucleus which then decays into product particles
	- $X+a\to C^{*}\to Y+b$
- $C^{*}$ is very short lived but long enough that the decay only depends on the energy
- Energy levels of the compound nucleus play a critical role in determining the cross section
### 6.2.2 Temperature dependence of reaction rates
- Can write the cross-section factor as: $\langle \sigma v \rangle=(8/\pi m)^{1/2}(kT)^{-3/2}\int_{0}^{\infty}S(E)\exp \left( -\dfrac{E}{kT}-\dfrac{b}{E^{1/2}} \right)dE$
- Consider non-resonant reactions so $S(E)$ varies slowly
	- $S(E)\approx S(E_{0})$ so can remove from integral
- $f(E)=\exp \left( -\dfrac{E}{kT}-\dfrac{b}{E^{1/2}} \right)$ is the Gamow peak
#### Properties of the Gamow peak
- The reaction rate $\langle \sigma v \rangle$ increases very strongly with temperature
- $\langle \sigma v \rangle$ decreases strongly with increasing Coulomb barrier
#### Analytic expressions for the temperature dependence
- Can be obtained if approximate $f(E)$ with Gaussian centered at $E_{0}$
	- $f(E)\approx f(E_{0})\exp \left[ -\left( \dfrac{E-E_{0}}{\Delta E} \right)^{2} \right]$
- $\langle \sigma v \rangle\propto \dfrac{1}{T^{2/3}}\exp \left( -\dfrac{C}{T^{1/3}} \right)$
	- $C$ is a constant depending on $Z_{i}Z_{j}$ or the height of the Coulomb barrier
- For small range of temperatures around $T_{0}$
	- $\langle \sigma v \rangle=\langle \sigma v \rangle_{0}\left( \dfrac{T}{T_{0}} \right)^{\nu}$
		- $\nu \equiv \dfrac{ \partial \log \langle \sigma v \rangle }{ \partial T }=\dfrac{\tau-2}{3}$
			- $\tau=\dfrac{3E_{0}}{kT}$
			- Can approximately take $\nu$ to be constant
### 6.2.3 Electron screening
- In dense medium, attractive Coulomb interactions between nuclei and free electrons causes each nucleus to have a cloud of electrons
	- Reduces Coulomb repulsion between nuclei at large distances
	- May increase probability of tunneling through Coulomb barrier
- Reaction rate $\langle \sigma v \rangle$ enhanced by factor
	- $f=\exp \left( \dfrac{E_{D}}{kT} \right)$
- Weak screening approximation $\dfrac{E_{D}}{kT}\ll1$
- Becomes much more complicated outside of this at high densities and lower temperatures
## 6.3 Energy generation rates and composition changes
- Energy generation per unit mass for reaction between nuclei of types $i$ and $j$
	- $\epsilon_{ij}=\dfrac{Q_{ij}r_{ij}}{\rho}$
- $\epsilon_{ij}=\epsilon_{0,ij}X_{i}X_{j}\rho T^{\nu}$
- Total nuclear energy generation is simply
	- $\epsilon_{nuc}=\sum_{ij}\epsilon_{ij}$
#### Composition changes
- Reaction rates determine rate of composition changes
- Rate of change in number density $n_{i}$ of nuclei type $i$ from reactions with type $j$
	- $\left( \dfrac{dn_{i}}{dt} \right)_{j}=-n_{i}n_{j}\langle \sigma v \rangle_{ij}$
- Nuclear lifetime of $i$ from reactions with $j$
	- $\tau_{i,j}=\dfrac{n_{i}}{|(dn_{i}/dt)_{j}|}=\dfrac{1}{n_{j}\langle \sigma v \rangle_{ij}}$
- Total change of $n_{i}$ accounting for creation and destruction of $i$
	- $\dfrac{ \mathrm{d} n_{i} }{ \mathrm{d} t }=-\sum_{j}(1+\delta_{ij})r_{ij}+\sum_{k,l}r_{kl,i}$
- For cases where only one reaction occurs or a reaction chain where one reaction determines the rate
	- Ex fusion of $4\;^{1}\mathrm{H}$ to $^{4}\mathrm{He}$
	- $\dfrac{ \mathrm{d} Y }{ \mathrm{d} t }=-\dfrac{ \mathrm{d} X }{ \mathrm{d} t }=\dfrac{\epsilon_{\mathrm{H}}}{q_{\mathrm{H}}}$
		- $\epsilon_{\mathrm{H}}$ is the energy generation rate of $H$-burning reactions
		- $q_{\mathrm{H}}$ is the amount of energy produced converting $1$ gram of $^{1}\mathrm{H}$ into $^{4}\mathrm{He}$
## 6.4 The main nuclear burning cycles
- In principle many nuclear reactions can be happening simultaneously
- However generally can simplify because
	- Strong dependence of nuclear reaction rates on temperature and sensitivity to Coulomb barrier
		- So the fusion of different fuel requires substantial temperature differences
		- The star goes through nuclear burning cycles
	- For each nuclear burning cycle only a handful of reactions 
		- Significantly produce energy
		- Cause major changes to composition
	- In a chain of subsequent reactions often one is by far the slowest and acts as a bottleneck
		- Only have to consider the rate of the bottleneck
- Look at book for the exact reactions
## 6.5 Neutrino emission
- Neutrinos have a special role because their cross-section for interaction with normal matter is extremely small
- Any neutrino produced in the interior of a normal star leaves without interaction (taking its energy)
- IN absence of nuclear reactions there can be spontaneous neutrino emission at high densities and temperatures
	- From weak interaction processes
	- Can emit neutrino-antineutrino pair instead of a photon
	- Leads to cooling of stellar matter
- Types of neutrinos created
	- Photo-neutrinos
		- Electron scattering
		- Results in significant cooling of stellar matter
	- Pair annihilation neutrinos
		- Photons can undergo pair creation
		- Quickly followed by annihilation of the electron-positron pair
		- Sometimes creates neutrino-antineutrino pair
		- Important in very hot but not too dense plasma
	- Plasma neutrinos
		- EM wave in dense plasma can create a wave whose quanta is called a plasmon
		- This can decay into a neutrino antineutrino pair
	- Bremsstrahlung neutrinos
		- Emission of a photon by an electron slowed down by the Coulomb field in an atomic nucleus
		- Can sometimes release $\nu \bar{\nu}$ instead of photon
		- Significant cooling at low temperature and very high density
	- The Urca process
		- Involves nuclear transformations
		- Nuclei can capture electron and then undergo $\beta-$decay emitting neutrinos
		- Generally inconsequential except in very late stages of evolution at very high densities
# Chapter 7 Stellar Models and Stellar Stability
- [x] #TODO Read Chapter 7 Polls  [due:: 2025-11-07]  [completion:: 2025-11-07]
- To actually construct models of spherically symmetric stars but require numerical simulation
## 7.1 The differential equations of stellar evolution
$$\begin{align}
\dfrac{ \partial r }{ \partial m }  & =\dfrac{1}{4\pi r^{2}\rho} \\
\dfrac{ \partial P }{ \partial m }  & =-\dfrac{Gm}{4\pi r^{4}}-\dfrac{1}{4\pi r^{2}} \dfrac{ \partial^{2}r }{ \partial t^{2} }  \\
\dfrac{ \partial l }{ \partial m }  & =\epsilon_{\mathrm{nuc}}-\epsilon_{\nu}-T\dfrac{ \partial s }{ \partial t }  \\
\dfrac{ \partial T }{ \partial m }  & =-\dfrac{Gm}{4\pi r^{4}} \dfrac{T}{P}\nabla \;\mathrm{with\;}\nabla=\begin{cases}
\nabla_{\mathrm{rad}}=\dfrac{3\kappa}{16\pi acG} \dfrac{lP}{mT^{4}}\;\mathrm{if}\;\nabla_{\mathrm{rad}}\leq \nabla_{\mathrm{ad}} \\
\nabla_{\mathrm{ad}}+\delta \nabla\;\mathrm{if}\;\nabla_{\mathrm{rad}}>\nabla_{\mathrm{ad}}
\end{cases} \\
\dfrac{ \partial X_{i} }{ \partial t }  & =\dfrac{A_{i}m_{u}}{\rho}\left( -\sum_{j}\left( 1+\delta_{ij} \right)r_{ij}+\sum_{k,l}r_{kl,i}  \right) \;\left[ +\mathrm{mixing\;terms} \right] \;i=1\dots N
\end{align}$$
- Since $P,s,\kappa,\nabla_{\mathrm{ad}},\Delta \nabla,\epsilon_{nuc},\epsilon_{\nu},r_{ij}$ all can be expressed in terms of $\rho,T,X_{i}$ only have $4+N$ variables with $4+N$ equations
### 7.1.1 Timescales and initial conditions
- Analyze the time derivatives
- $\dfrac{ \partial^{2}r }{ \partial t^{2} }$ describes hydrodynamical changes to stellar structure
	- Occur on timescale of $\tau_{\mathrm{dyn}}$ which is very short
	- So assume HE and $\dfrac{ \partial^{2}r }{ \partial t^{2} }=0$
- $T\dfrac{ \partial s }{ \partial t }$ describes changes to thermal structure of star
	- Occurs on timescale of $\tau_{\mathrm{KH}}$
	- Generally larger with star in TE
- $\dfrac{ \partial X_{i} }{ \partial t }$ describes changes in composition
	- Generally occur on $\tau_{nuc}$ scale
	- So happen very slowly
- For initial conditions then only need $X_{i}(m,t_{0})$ 
	- Case of zero-age main sequence stars
## 7.2 Boundary conditions
- Can't do direct forward integration of the equations as boundary conditions are set at either the center or at surface
### 7.2.1 Central boundary conditions
- At center $m=0$ 
	- $r=0$ 
	- $l=0$
- Have to specify $P$ and $T$ with BC at the surface
### 7.2.2 Surface boundary conditions
- At surface
	- $m=M$
	- $r=R$
- Different levels of complexity for BCs
	- Simplest: $T=0$ and $P=0$
	- Identify surface with photosphere
		- $m=M(r=R)$
		- $P=\dfrac{2}{3} \dfrac{GM}{\kappa_{\mathrm{ph}}R^{2}}$
		- $L=4\pi R^{2}\sigma T^{4}$
		- Radiative diffusion approximation breaks down
	- Best: fit detailed stellar atmosphere model to an interior shell
### 7.2.3 Effect of surface boundary conditions on stellar structure
- Assuming complete equilibrium envelope 
	- $l=L$
	- $m\approx M$
	- Take $P$ as the independent variable describing depth
- $\dfrac{ \mathrm{d} T }{ \mathrm{d} P }=\dfrac{T}{P}\nabla_{\mathrm{rad}}\approx \mathrm{const}\cdot \dfrac{L}{M} \dfrac{\kappa}{T^{3}}$
- Approximate opacity: $\kappa=\kappa_{0}P^{a}T^{b}$
- Get $T^{4-b}=B(P^{1+a}+C)$
	- $B\propto L/M$
	- $C$ is integration constant
- **Radiative envelopes**
	- $C\geq0$
	- More realistic with large enough $T_{\mathrm{eff}}$
	- Stars with relatively hot photospheres have radiative envelopes
	- In practice photospheric BCs are sufficient
- **Convective envelopes**
	- $C<0$
	- Stars with cool photospheres have convective envelops when $T_{\mathrm{eff}}\lesssim9000\mathrm{K}$
## 7.3 Equilibrium stellar models
- Further simplifications
	- Ignore possible neutrino loss $\epsilon_{\nu}$
	- Ignore superadiabaticity of temperature gradient in surface convection zones
$$\begin{align}
\dfrac{ \mathrm{d} r }{ \mathrm{d} m }  & =\dfrac{1}{4\pi r^{2}\rho} \\
\dfrac{ \mathrm{d} P }{ \mathrm{d} m }  & =-\dfrac{Gm}{4\pi r^{4}} \\
\dfrac{ \mathrm{d} l }{ \mathrm{d} m }  & =\epsilon_{\mathrm{nuc}} \\
\dfrac{ \mathrm{d} T }{ \mathrm{d} m }  & =-\dfrac{Gm}{4\pi r^{4}} \dfrac{T}{P}\nabla\;\;\;\nabla=\begin{cases}
\nabla_{\mathrm{rad}}=\dfrac{3\kappa}{16\pi acG} \dfrac{lP}{mT^{4}}\; \mathrm{if}\;\nabla_{\mathrm{rad}}\leq \nabla_{\mathrm{ad}} \\
\nabla_{\mathrm{ad}}\;\mathrm{if}\;\nabla_{\mathrm{rad}}>\nabla_{\mathrm{ad}}
\end{cases}
\end{align}$$
## 7.4 Homology relations
- Approximate numerical simulations of stars with analytical scaling relations
- Very restrictive restrictions, not very accurate, but provide helpful basis 
- **Definition**
	- Compare two stellar models
		- Masses $M_{1}$ and $M_{2}$
		- Radii $R_{1}$ and $R_{2}$
	- Homologous mass shells with same mass coordinate $x=\dfrac{m}{M}$
		- $x=\dfrac{m_{1}}{M_{1}}=\dfrac{m_{2}}{M_{2}}$
	- The models are homologous if they are located at the same relative radii $\dfrac{r}{R}$ for all $x$
		- $\dfrac{r_{1}(x)}{R_{1}}=\dfrac{r_{2}(x)}{R_{2}}$
		- $\dfrac{r_{1}(x)}{r_{2}(x)}=\dfrac{R_{1}}{R_{2}}$
- Density at any homologous shell scales as
	- $\rho(x)\propto \rho_{c}\propto \bar{\rho}$
- Pressure required for HE
	- $P(x)\propto P_{c}\propto \dfrac{M^{2}}{R^{4}}$
- Two homologous stars must obey the following relation
	- $\dfrac{P_{2}(x)}{P_{1}(x)}=\left( \dfrac{M_{2}}{M_{1}} \right)^{2/3}\left( \dfrac{\rho_{2}(x)}{\rho_{1}(x)} \right)^{4/3}$
	- $P(x)\propto M^{2/3}\rho(x)^{4/3}$
### 7.4.1 Homology for radiative stars composed of ideal gas
- Assumptions
	- Ideal gas EoS $P=\dfrac{\mathcal{R}}{\mu}\rho T$
	- Each star has homogeneous composition
		- $T(x)\propto T_{c}\propto \mu \dfrac{M}{R}$
	- Stars are in radiative equilibrium
		- $L\propto \dfrac{1}{\kappa}\mu^{4}M^{3}$ with constant opacity
		- With Kramer's opacity law $L\propto \dfrac{\mu^{7.5}M^{5.5}}{R^{0.5}}$
### 7.4.2 Main sequence homology
- Assume
	- $\epsilon_{nuc}=\epsilon_{0}\rho T^{\nu}$
- Find for homogeneous radiative star with constant opacity and made of ideal gas
	- $R\propto \mu^{(\nu-4)/(\nu+3)}M^{(\nu-1)/(\nu+3)}$
### 7.4.3 Homologous contraction
- Assume a contraction takes place homologously 
$$\begin{align}
\dfrac{\dot{r}(m)}{r(m)} & =\dfrac{\dot{R}}{R} \\
\dfrac{\dot{\rho}(m)}{\rho(m)} & =-3 \dfrac{\dot{R}}{R} \\
\end{align}$$
- With the reaction taking place quasi-statically (maintaining HE)
$$\begin{align}
\dfrac{\dot{P}(m)}{P(m)} & =-4 \dfrac{\dot{R}}{R}=\dfrac{4}{3}\dfrac{\dot{\rho}(m)}{\rho(m)} \\
\dfrac{\dot{T}}{T} & =\dfrac{1}{\chi_{T}}\left( \dfrac{4}{3}-\chi_{\rho} \right)  \dfrac{\dot{\rho}}{\rho} =\dfrac{1}{\chi_{T}}\left( 3\chi_{\rho}-4 \right) \dfrac{\dot{R}}{R}
\end{align}$$
- For ideal gas the temperature increases as a result of contraction
- For degenerate electron gas temperature decreases from contraction
## 7.5 Stellar stability
- Consider dynamical and thermal stability
### 7.5.1 Dynamical stability of stars
- Response of a star to a perturbation in the balance of forces (Perturbation in HE)
- Pressure required for HE after homologous contraction
	- $\left( \dfrac{P'}{P} \right)_{HE}=\left( \dfrac{\rho'}{\rho} \right)^{4/3}=\left( \dfrac{R'}{R} \right)^{-4}$
	- If $\gamma_{ad}> \dfrac{4}{3}$ then $P'>P'_{HE}$ so re-expansion restoring HE
	- If $\gamma_{ad}< \dfrac{4}{3}$ then $P'<P'_{HE}$ so not enough pressure to restore HE
- Criterion for dynamical stability: $\gamma_{\mathrm{ad}}> \dfrac{4}{3}$
- Global dynamical instability with $\int \left( \gamma_{\mathrm{ad}}-\dfrac{4}{3} \right) \dfrac{P}{\rho}dm<0$
#### Cases of dynamical instability
- Stars dominated by ideal gas or NR degenerate electrons are dynamically stable
- Relativistic particles tend towards neutrally stable state
	- Small disturbance can lead to collapse/explosion
- Partial ionization can lead to $\gamma_{\mathrm{ad}}< \dfrac{4}{3}$
	- Normally in very outer layers
	- Drives oscillations in some stars
- At very high temperatures can have similar effects
	- Pair creation
	- Photo disintegration of nuclei
	- Can lead to stellar explosion or collapse in the core
### 7.5.2 Secular stability of stars
- $\dot{E}_{\mathrm{tot}}=L_{\mathrm{nuc}}-L$
	- In state of TE $L=L_{\mathrm{nuc}}$ and $\dot{E}_{\mathrm{tot}}=0$
- Secular stability of nuclear burning depends on negative heat capacity of stars composed of ideal gas
	- Stellar thermostat
	- More heat expansion cool down contraction repeat
- For stars with appreciable radiation pressure
	- $E_{\mathrm{tot}}=-E_{\mathrm{int,gas}}=\dfrac{1}{2}\left( E_{\mathrm{gr}}+E_{\mathrm{int,rad}} \right)$
	- Radiation pressure reduced effective gravitational energy
	- $\beta=\dfrac{P_{\mathrm{gas}}}{P}$ 
	- IF $\beta$ is constant
		- $E_{\mathrm{tot}}=\dfrac{1}{2}\beta E_{\mathrm{gr}}$
		- If $\beta\to0$ then thermostatic effect no longer works
#### Thermal instability of degenerate gases
- For degenerate electron gas
	- Pressure and internal energy are independent of temperature
	- So the same perturbation of $L_{\mathrm{nuc}}>L$ means there is no expansion and cooling
	- Instead temperature increases thus increasing $L_{\mathrm{nuc}}$ creating a thermonuclear runaway
- Causes
	- Helium flash for stars with $M<2M_{\odot}$
	- Nova outbursts on surface of white dwarf
#### The thin shell instability
- Some stars have nuclear burning in a shell around the inert core
- If sufficiently thin then burning can be unstable
- $\dfrac{\delta T}{T}=\dfrac{1}{\chi_{T}}\left( 4 \dfrac{d}{r}-\chi_{\rho} \right) \dfrac{\delta \rho}{\rho}$
	- Thermally stable as long as expansion results in a drop of temperature
	- Or $4 \dfrac{d}{r}>\chi_{\rho}$
- This is important for stars up to $8M_{\odot}$ during the asymptotic giant branch
# Chapter 8 Schematic Stellar Evolution - Consequences of the Virial Theorem
- [x] #TODO Read Chapter 8 Polls  [due:: 2025-11-10]  [completion:: 2025-11-10]
## 8.1 Evolution of the stellar center
- Center is most evolved part of the star and sets the pace of evolution
- Characterized by central: $\rho_{c},P_{c},T_{c}$ and composition (in terms of $\mu$ and/or $\mu_{e}$)
	- Related by the EoS
### 8.1.1 Hydrostatic equilibrium and the $P_{c}-\rho_{c}$ relation
- Star in HE expanding/contracting homologously
	- $P_{c}=C\cdot GM^{2/3}\rho_{c}^{4/3}$
		- $C$ is a constant depending on density distribution of the star
		- Almost uniquely determined by central density
	- Defines evolution track of a slowly contracting/expanding star
### 8.1.2 The equation of state and evolution in the $P_{c}-\rho_{c}$ plane
- If gas is ideal
	- Contraction (increasing $\rho_{c}$) leads to higher $T_{c}$
	- Evolution track crosses isotherms of higher and higher temperature
- Tracks for masses lower than $M_{\mathrm{crit}}$
	- Run into line for complete electron degeneracy (it has a steeper slope)
	- There is a maximum achievable $\rho_{c,\mathrm{max}}$ and $P_{c,\mathrm{max}}$
	- This is normally a completely degenerate state
- Tracks for masses larger than $M_{\mathrm{crit}}$
	- This critical mass is the Chandrasekhar mass
### 8.1.3 Evolution in the $T_{c}-\rho_{c}$ plane
- Slowly contracting star in HE with IG
	- $T_{c}=\dfrac{CG}{\mathcal{R}}\mu M^{2/3}\rho_{c}^{1/3}$
	- The larger the mass of a star the more important radiation pressure is
- Stars with $M<M_{Ch}$ in the region between ideal gas and NR degeneracy
	- $\rho_{c}=\left( \dfrac{CG}{K_{\mathrm{NR}}} \right)^{3}\mu_{e}^{5}M^{2}$
- Once a maximum temperature is reached the star cools at constant density with degenerate electrons providing pressure
	- Max temp is reached when IG pressure and degenerate electron pressure are about equal
	- $T_{c,\mathrm{max}}=\dfrac{C^{2}G^{2}}{4\mathcal{R}K_{\mathrm{NR}}}\mu \mu_{e}^{5/3}M^{4/3}$
## 8.2 Nuclear burning regions and limits to stellar masses
- Gas spheres must be above a certain mass limit to have temperatures high enough for nuclear burning
- Nuclear energy generation rate
	- $\epsilon_{\mathrm{nuc}}=\epsilon_{0}\rho^{\lambda}T^{\nu}$
		- Most nuclear reactions $\lambda=1$
		- $\nu$ depends on masses and charges of nuclei involved
			- Usually $\nu\gg1$
- Minimum mass for ignition of hydrogen in protostars is $M_{\mathrm{min}}=0.08M_{\odot}$
- Stars more massive than $100 M_{\odot}$ are very dynamically unstable
- Minimum mass for $\mathrm{He}$-ignition $\approx0.3M_{\odot}$
### 8.2.1 Overall picture of stellar evolution and nuclear burning cycles
- Nuclear burning cycles are long lived but temporary interruptions to the contraction of a star('s core)
- Contraction is dictated by the virial theorem
- If core mass is less than the Chandrasekhar mass then the contraction is eventually stopped
	- Electron degeneracy supplies pressure to withstand gravity
- Otherwise degeneracy pressure isn't enough so contraction continues at least until nuclear densities are reached
# Chapter 9 Early Stages of Evolution and the Main Sequence Phase
- [x] #TODO Read Chapter 9 Polls  [due:: 2025-11-12]  [completion:: 2025-11-14]
## 9.1 Star Formation and Pre-main Sequence Evolution
- Star formation is very ill-understood
- Not possible to predict from initial conditions
	- Star formation efficiency 
	- Initial mass function
- Rely on observations
- Stars are formed from molecular clouds
	- $M\sim10^{5}M_{\odot}$
	- Dimensions $\sim10\mathrm{\;parsec}$
	- $T\sim10-100\mathrm{\;K}$
	- $\rho \sim10-300\;\mathrm{molecules/cm^{3}}$
	- Roughly in HE with the ISM
- Stages of star formation
	- Interstellar cloud collapse
		- Starts with perturbation disturbing pressure equilibrium
		- (Part of) the cloud collapses under self-gravity
		- Stability requires mass to be less than the Jeans mass: $M_{J}\approx4\times10^{4}M_{\odot}\left( \dfrac{T}{100\mathrm{K}} \right)^{3/2}\left( \dfrac{n}{\mathrm{cm^{-3}}} \right)^{-1/2}$
			- $n$ is the molecular density
		- Transparent to far-infrared radiation
			- Cools efficiently
			- Isothermal
	- Cloud fragmentation
		- As density increases Jeans mass decreases
		- Cloud fragments into smaller pieces each of which continues to collapse
	- Formation of a protostellar core
		- Eventually gas becomes opaque to infrared photons trapping radiation
		- Cloud core reaches HE slowing dynamical collapse
		- Beginning of a protostar
	- Accretion
		- Surrounding gas keeps falling onto protostellar core
		- Infalling gas forms accretion disk around the protostar
		- Accretion generates gravitational energy
			- A part of which is radiated away
			- With luminosity $L\sim L_{\mathrm{acc}}=\dfrac{GM\dot{M}}{2R}$
	- Dissociation and ionization
		- Gas initially made of molecular Hydrogen
			- Like and IG
			- $\gamma_{ad}> \dfrac{4}{3}$ so dynamically stable
		- When core gets hot enough hydrogen gets dissociated 
			- Increases specific heat
			- decreases $\gamma$ below stability requirement
			- Dynamical collapse follows
		- When $\mathrm{H_{2}}$ fully becomes atomic then HE is restored and temperature rises 
	- Pre-main sequence phase
		- Accretion slows and then stops
		- Luminosity is now provided by gravitational contraction
		- $T\propto M^{2/3}\rho^{1/3}$ from virial theorem
- Protostar radius: $R_{p}\approx \dfrac{\alpha}{2} \dfrac{GMm_{u}}{\chi}\approx50R_{\odot}\left( \dfrac{M}{M_{\odot}} \right)$
- Average internal temperature: $\bar{T}\approx \dfrac{\alpha}{3} \dfrac{\mu}{\mathcal{R}} \dfrac{GM}{R_{p}}=\dfrac{2}{3} \dfrac{\mu}{k}\chi \approx8\times10^{4}\mathrm{K}$
### 9.1.1 Fully convective stars: the Hayashi line
- If $T_{\mathrm{eff}}$ is small enough stars can be completely convective
	- Energy transport is very efficient
	- $\nabla-\nabla_{ad}$ is sufficient to transport very large energy flux
	- Star is adiabatic
	- Luminosity is practically independent of it structure
- Fully convective stars of a given mass occupy an almost vertical line in the H-R diagram
	- The Hayashi line
	- To the right is forbidden for stars in HE
	- On the left they can't be fully convective
- Shape of Hayashi line is determined by how the opacity in the photosphere depends on $\rho$ and $T$
#### The forbidden region in the H-R diagram
- Models with $\bar{\nabla}<\nabla_{\mathrm{ad}}$
	- Lie at higher $T_{\mathrm{eff}}$ than the Hayashi line
	- Some portion must be radiative
	- These parts must be in the deep interior
	- Have radiative cores with convective envelopes around them
- Models with $\bar{\nabla}<\nabla_{\mathrm{ad}}$
	- Lie at a lower $T_{\mathrm{eff}}$ than the Hayashi line
	- Significant part must have a superadiabatic temperature gradient
	- So has very large convective energy flux
		- Transports heat outward rapidly
		- Decreases temperature gradient back to $\nabla=\nabla_{\mathrm{ad}}$
	- This brings star back to the Hayashi line
### 9.1.2 Pre-main-sequence contraction
- After star settles on Hayashi line for its mass it is a pre-main sequence phase of evolution (PMS)
- Luminosity supplied by gravitational contraction
	- Increases internal temperature
	- Contracts along Hayashi line decreasing luminostiy
	- Homologous contraction
	- $T_{c}\propto \rho_{c}^{1/3}\propto1/R$
	- Opacity decreases
- Eventually $\nabla_{\mathrm{rad}}<\nabla_{\mathrm{ad}}$
	- In central part radiative core develops
	- PMS star moves to the left in the H-R diagram
	- Contraction is no longer homologous
	- Luminosity starts to increase a little
- Once the star is mainly radiative
	- Contraction is again mostly homologous
	- Luminosity is related to the temperature gradient and determined by the mass
- Contraction continues until temperature is high enough for nuclear fusion
- Star stops contracting and settles on zero-age main sequence (ZAMS) if $M>0.08M_{\odot}$
	- There are temporary halts to the contraction depending on the metallicity of the gas
	- Deuterium, Li, C, N are all converted
- Massive protostars reach ZAMS much earlier than lower-mass stars
## 9.2 The zero-age main sequence
- Stars here are
	- Nearly homogenous in composition
	- In complete HE
	- In complete TE
- Homology predicts qualitative behavior well but not quantitative 
- Metal poor main sequence stars are hotter and have smaller radii
### 9.2.1 Central conditions
- For ZAMS star
	- Homogeneous
	- Radiative
	- In TE
- Central temp
	- p-p chain $T_{c}\propto M^{0.57}$
	- CNO $T_{c}\propto M^{0.21}$
	- Transition (for solar composition) occurs at $T\approx1.7\times10^{7}\mathrm{K}$ or $M\approx1.3M_{\odot}$
- Central density
	- p-p $\rho_{c}\propto M^{-0.3}$
	- CNO $\rho_{c}\propto M^{-1.4}$
- Energy generation rate of CNO deepnds on CNO abundance
	- For lower metallicity transition from pp to CNO occurs at higher $T$
### 9.2.2 Convective regions
- Three types of ZAMS star
	- Completely convective $M<0.35M_{\odot}$
	- Radiative core + convective envelope $0.35M_{\odot}<M<1.2M_{\odot}$
	- Convective core + radiative envelope $M>1.2M_{\odot}$
- Size of convective core increases with higher mass
## 9.3 Evolution during central hydrogen burning
- Stars evolve away from the ZAMS towards higher luminosities and larger radii
- As long as stars are powered by central $\mathrm{H}$ burning they remain in HE and TE
- Nuclear reactions on the MS affect structure
	- As $\mathrm{H}$ is converted in $\mathrm{He}$ mean molecular weight increases in the core
		- Increases luminosity $L\propto \mu^{4}M^{3}$
	- Nuclear energy generation rate $\epsilon_{\mathrm{nuc}}$ is very sensitive to temperature
		- Nuclear reactions act as a thermostat in the central regions
		- Keep central temperature almost constant
- Density contrast between core and envelope increases so there are non-homologous changes to structure
### 9.3.1 Evolution of stars powered by the CNO cycle
- Massive stars $(M\gtrsim1.3M_{\odot})$expand during the MS 
- Pressure outer layers exert on core
	- $P_{\mathrm{env}}=\int_{m_{c}}^{M} \dfrac{Gm}{4\pi r^{4}}dm$
	- Expansion of envelope decreases envelope pressure on the core
	- Needed for CNO cycle
		- $\mu_{c}$ increases
		- So $P_{c}$ must decrease
		- So $P_{\mathrm{env}}$ must decrease as well
		- So outer layers must expand
- CNO also concentrates $\epsilon_{\mathrm{nuc}}$ towards the center
	- Causes large central $\nabla_{\mathrm{rad}}$
	- Leads to convective cores
	- Increases amount of fuel available
- Towards end of MS need to increase $T_{c}$ to keep up energy production until $\mathrm{H}$ is fully exhausted
	- Now out of TE
	- Contract
	- Eventually CNO restarts in shell around the helium core
### 9.3.2 Evolution of stars powered by the pp chain
- Stars $M\lesssim1.3M_{\odot}$
	- Central temperature to low for CNO
	- So $T_{c}$ and $\rho_{c}$ increase more than in CNO
	- So outer layers expand les to maintain HE
- Have radiative cores
	- Hydrogen abundance gradient builds up gradually (increasing outwards)
- Have a smooth transition to hydrogen shell burning
### 9.3.3 The main sequence lifetime
- Timescale $\tau_{\mathrm{MS}}$ a star is in the MS is the nuclear timescale for $\mathrm{H}$ burning
- $\tau_{\mathrm{MS}}\propto M^{1-\eta}$
	- $\eta \approx3.8$ on average 
		- From the mass-luminosity relation $\langle L \rangle\propto M^{\eta}$
		- Depends on the mass range
	- Decreases strongly towards larger masses
### 9.3.4 Complications: convective overshooting and semi-convection
- Size of convective region is expected to be larger than Schwarzschild criterion because of convective overshooting
- This causes
	- Longer main-sequence lifetime (larger $\mathrm{H}$ reservoir available)
	- Larger increase $L$ and $R$ during MS
	- Hydrogen-exhausted core mass is larger at the end of the MS
		- Larger luminosities during all phases after
		- Shorter lifetimes on post-MS phases
- Outside convective core composition gradient $(\nabla_{\mu})$ develops
	- This is dynamically stable for Ledoux but convective if Schwarzschild
	- Causes semi-convection
		- Over-stable oscillation pattern can develop
		- Mixes region and smooths out $\nabla_{\mu}$
# Chapter 10 Post-main Sequence Evolution Through Helium Burning
- [x] #TODO Read Chapter 10 Polls  [due:: 2025-11-18]  [completion:: 2025-11-18]
- After main sequence
	- Hydrogen exhausted core
	- Surrounded by hydrogen rich envelope
- Divide by mass
	- Low mass stars ($0.8M_{\odot}<M\lesssim2M_{\odot}=M_{\mathrm{HeF}}$)
		- Develop degenerate helium core
		- Long lived red giant phase
		- Ignition of $\mathrm{He}$ is unstable and is a Helium flash
		- Shed envelopes with strong stellar wind
	- Intermediate-mass stars $(M_{\mathrm{He_{F}}}<M\lesssim8M_{\odot}=M_{\mathrm{up}})$
		- Non-degenerate helium core
		- Ignite helium stably
		- After burning $\mathrm{He}$ have a degenerate carbon-oxygen core
		- Shed envelopes with strong stellar wind
		- Remnants are $\mathrm{CO}$ white dwarfs
	- Massive stars $(M>M_{\mathrm{up}})$
		- Ignite carbon in a non-degenerate core
		- Except for $(\approx8-11M_{\odot})$ ignite heavier elements until Fe core which collapses
## 10.1 The Schönberg-Chandrasekhar limit
- Helium core must be isothermal to remain in TE only possible with certain conditions
- Not possible with just ideal gas
	- Pressure gradient is only produced by density gradient with nothing from temperature gradient
	- HE in isothermal ideal gas requires very large density gradient
- But stable if only the core of the star is isothermal and $M_{c}$ of the core is only small fraction of the total mass of the star
	- Schönberg-Chandrasekhar limit: maximum core mass fraction $q_{c}=M_{c}M<q_{\mathrm{SC}}=0.37\left( \frac{\mu_{\mathrm{env}}}{\mu_{c}} \right)^{2}\approx0.10$
		- $\mu_{c}$ is the mean molecular weight in the core
		- $\mu_{\mathrm{env}}$ is the mean molecular weight in the envelope
	- Convective overshooting increases the core mass decreasing the upper mass limit for stars remaining in TE
- When mass of $\mathrm{H}$-exhausted core exceeds the Schönberg-Chandrasekhar limit 
	- Either
		- Immediately after main sequence in relatively massive stars
		- After a period of $\mathrm{H}$-shell burning during which helium core mass increases steadily in lower mass stars
	- TE is no longer possible
	- Helium core contracts
		- Temperature gradient increases
		- This increases pressure gradient
		- But also increases heat flow from core
		- Continues contraction and heating up
			- On thermal timescale
- Low mass stars maintain HE and TE with electron conduction in degenerate helium cores
#### Effects of core contraction: the 'mirror principle'
- When a star has an active shell-burning source
	- Burning shell acts as a mirror between the core and the envelope
	- Core contraction $\to$ envelope expansion
	- Core expansion $\to$ envelope contraction 
## 10.2 The hydrogen-shell burning phase
### 10.2.1 Hydrogen-shell burning in intermediate-mass and massive stars
- Thick shell burning
	- Burning shell initially occupies large region in mass
		- Temperature and density gradients between core and envelope are small
	- Star is in TE
	- Hydrogen-shell burning goes relatively slow
	- Core mass below S-C limit
- Thin shell burning
	- Helium core grows until it exceeds S-C limit
	- Core contraction increases
	- Envelope expands at the same time
	- Temperature and density gradients between core and envelope increase
	- Burning shell occupies less and less mass
- During shell burning
	- Envelope temperature decreases
	- Envelope opacity rises
		- Radiative energy transport is impeded
	- Envelope is unstable to convection
		- Large fraction of envelope mass at the end becomes convective
- Hertzsprung gap
	- Rapid evolution on thermal timescale at the end of H-R diagram
	- Don't find many stars at this point in their life
- After star becomes red giant and begins H-shell burning phase
	- Deep convective envelope
	- Close to Hayashi line
		- Continues to expands and luminosity increases at approximately constant value
	- Very short lived
- Dredge-up
	- Material that was inside the core is mixed through the envelope
	- Appears at the surface
- During H-shell burning phase helium cores remain non degenerate
	- Eventually reach mass sufficient for helium fusion
	- Halt core contraction/envelope expansion
### 10.2.2 Hydrogen-shell burning in low-mass stars
- Low mass stars $(M\lesssim2M_{\odot})$ have small or no convective cores during central hydrogen burning
- Stars $M\lesssim1.1M_{\odot}$ transition from central to shell $\mathrm{H}$ burning is gradual and they remain in TE
	- When $\mathrm{He}$ core reaches $\approx0.1M$ electron degeneracy dominates pressure
		- SC-limit is irrelevant
		- Remain in HE/TE with no Hertzsprung gap
- Stars with $1.1<M<1.5M_{\odot}$
	- Similar behavior after main sequence
	- But have small convective core
	- Have a "hook" in their evolution track at central $\mathrm{H}$ exhaustion
- Stars with $1.5\lesssim M/M_{\odot}\lesssim2$
	- Have a small Hertzsprung gap before their cores become degenerate
	- After slow thick shell burning as subgiants have rapid thermal-timescale expansion to giant branch
### 10.2.3 The red giant branch in low-mass stars
- Low-mass star evolution along red giant branch is very similar 
	- Almost independent of mass
	- When $\mathrm{He}$ core forms high density contrast between core and envelope
	- Structure depends almost entirely on properties of $\mathrm{He}$ core
		- Core is degenerate so independent of thermal properties
- Core-mass luminosity relation
	- $L\approx2.3\times10^{5}L_{\odot}\left( \dfrac{M_{c}}{M_{\odot}} \right)^{6}$
- The star is located along the Hayashi line which depends on metallicity
	- Can be used to derive metallicity of globular cluster based of location of RGB stars on H-R diagram
- Evolution along RGB 
	- Core contracts slowly increasing $R$ and $L$
	- H-Shell burns faster increasing core-mass growth rate
	- Eventually temperature in core reaches point where $\mathrm{He}$ is ignited
		- Unstable from degeneracy
		- Thermonuclear runaway called helium flash
#### First dredge-up and the luminosity bump
- First dredge up
	- Surface C/N ratio decreases by large factor
	- Surface $\mathrm{He}$ and increases $\mathrm{H}$ abundances decreases
- After $\mathrm{H}$-burning shell gets out of discontinuity from the convective envelope reaches point of higher $\mathrm{H}$ abundance so burns at lower rate
	- Decreases luminosity slightly
	- This loops three times
#### Mass loss on the red giant branch
- As $L$ and $R$ increase envelope becomes loosely bound
	- Large photon flux easily removes mass
- Not well understood and described empirically with Reimers formula
## 10.3 The helium burning phase
- Once $\mathrm{He}$ core reaches $10^{\mathrm{K}}$ $3\alpha$ reaction produces energy at significant rate starting helium burning
- Reactions are all the same across stellar masses
- But conditions at ignition are different 
	- Low-mass degenerate core
	- High-mass non-degenerate core
### 10.3.1 Helium burning in intermediate mass stars
- Non-degenerate core
	- Nuclear burning is thermally stable
	- $\mathrm{He}$ ignition proceeds quietly
- Energy production concentrated to the center
	- Leads to convective core
- Most of the luminosity comes from $\mathrm{H}$-burning shell 
	- Eventually towards the end the contribution from $\mathrm{He}$ burning becomes comparable
- Intermediate-mass stars $4\lesssim M/M_{\odot}\lesssim12$
	- After $\mathrm{He}$ ignition envelope contracts 
		- $R$ decreases
		- $L$ decreases while envelope is convective
	- Then when envelope becomes radiative star leaves RGB and $T_{\mathrm{eff}}$ increases 
	- Correspond to slow, nuclear timescale phase of evolution
	- Necessary for explain Cepheid variables
- Difficult to explain with physics
	- Depends on
		- Chemical composition
		- Mass of $\mathrm{He}$ core relative to envelope
		- Shape of $\mathrm{H}$ abundance profile above core
		- Convective overshooting during main sequence
### 10.3.2 Helium burning in low-mass stars 
- Differs from massive stars
	- $\mathrm{He}$ ignition occurs under degenerate conditions so there is a helium flash
	- All low-mass stars begin $\mathrm{He}$ burning with essentially the same core mass $M_{c}\approx0.45M_{\odot}$
		- Luminosity is almost independent of mass
		- So there is a horizontal branch in the HRD
#### The helium flash
- Because of degeneracy there is a temperature increase so there is a thermonuclear runaway
	- Degenerate pressure is basically independent of $T$
	- All the energy released is absorbed in the expansion of the core
	- Results in a decrease in the energy generation rate until the core settles into TE
- Following this nuclear burning of $\mathrm{He}$ is thermally stable
- There is high local luminosity from neutrinos
	- So bottom of $\mathrm{H}$ burning shell becomes convective
	- This mixes $^{12}C$ throughout the core
#### The horizontal branch
- After $\mathrm{He}$ flash $L$ and $R$ have decreased (core expanded so shell contracts)
- Since $M_{c}$ is independent of $M$ then $L$ is also almost independent of $M$
- Only envelope mass varies
	- This affects the $R$ and $T_{\mathrm{eff}}$
	- Stars with small envelope mass can be substantially hotter
- Results in a red clump 
- Differences from intermediate mass stars
	- Contribution of $\mathrm{He}$ burning to $L$ is larger
	- Development of substantial semi-convective region on top of the convective core
	- There are breathing pulses
		- Results in sudden jumps in central composition and $L$
		- Might be real or numerical artifacts
## 10.4 Pulsational instability during helium burning
- Cepheids
	- Well defined correlation between pulsation period and luminosity
	- Very useful as standard candles
	- Helium-burning stars undergoing a blue loop
- RR Lyrae
	- Lie along intersection of instability strip and the horizontal branch
### 10.4.1 Physics of radial stellar pulsations
- Radial oscillations result from pressure waves
	- Are essentially standing waves
		- Node at the center
		- Open node at stellar surface
	- Possible modes
		- Fundamental mode: one node at the center
		- First and second overtone: one or two additional nodes between center and surface
	- Most pulsating stars (e.g. Cepheids) are at the fundamental mode
#### Driving and damping of pulsations
- Since never exactly adiabatic oscillations are generally damped unless there is an instability driving it
- Two mechanisms for driving
	- Nuclear reactions occurring in a region that is compressed during a pulsation
		- $\epsilon$-mechanism
		- Generally small but can be important in very massive stars
	- If during compression layer becomes more opaque
		- Energy flowing through the layer becomes trapped
		- Increase in $T$ and $P$ pushes layer outward
		- This makes gas transparent again releasing the trapped heat
		- $\kappa$ mechanism
#### The instability strip and period-luminosity relation
- To have pulsations need to have
	- $\kappa_{T}>0$ where $\mathrm{H^{-}}$ opacity dominates
		- $T<10^{4}\mathrm{K}$
	- For Kramers-like opacity 
		- Small $\nabla_{\mathrm{ad}}$ can lead to pulsation instability
		- Can be found in partial ionization zones
- Stars generally have two partial ionization zones
	- $T\approx1.5\times10^{4}\mathrm{K}$ where both $\mathrm{H}\leftrightarrow H^{+}+e^{-}$ and $\mathrm{He}\leftrightarrow \mathrm{He}^{+}+e^{-}$ occur
	- $T\approx4\times10^{4}\mathrm{K}$ where $\mathrm{He}$ becomes twice ionized
- This explains location of instability strip 
	- For large $T_{\mathrm{eff}}$
		- Both ionization zones lie near surface with low $\rho$
		- Mass and heat capacity of these zones are two small to drive pulsation
	- For smaller $T_{\mathrm{eff}}$
		- Ionization zones are deeper
		- Mass and heat capacity in the zones increase
		- But non-adiabatic enough to absorb heat to drive pulsations
	- Even smaller $T_{\mathrm{eff}}$
		- Zones are at such high density gas behaves adiabatically
		- Can't absorb enough heat to back the star as a whole unstable
# Chapter 11 Late Evolution of Low- and Intermediate- Mass Stars
- [x] #TODO Read Chapter 11 Polls  [due:: 2025-11-19]  [completion:: 2025-11-19]
- After central helium burning the central core is made of carbon and oxygen
- Evolution differs depending on mass of star
- For low-intermediate stars the core becomes degenerate so late evolution is qualitatively similar
	- Evolve along the asymptotic giant branch (AGB) in the H-R diagram
- AGB stars have
	- Rich nucleosynthesis
	- Strong mass loss
	- Transition to planetary nebula and then white dwarf
## 11.1 The asymptotic giant branch
- AGB phase starts with exhaustion of $\mathrm{He}$ in the center
- For low mass stars
	- AGB lies at similar luminosities but somewhat higher $T_{\mathrm{eff}}$ than in RGB phase
- For $M>2.5M_{\odot}$
	- AGB lies at higher luminosities than RGB
	- Name has no morphological meaning
#### The early AGB phase
- After central $\mathrm{He}$ exhaustion core contracts
- $\mathrm{He}$ shifts to a shell around the $\mathrm{CO}$ core
	- Double mirror effect operates
		- Core contracts
		- $\mathrm{He}$ layers expand
		- Outer envelop contracts
	- As $\mathrm{He}$ layers expand $T$ of $\mathrm{H}$ shell decreases and is extinguishes
	- Have only one mirror that responds to core contraction
- Early AGB phase: fairly long phase of $\mathrm{He}$ shell burning
	- Adds mass to $\mathrm{CO}$ core
	- Core becomes degenerate
#### Second dredge-up
- Occurs in $M\gtrsim4M_{\odot}$
	- Not in lower mass as $\mathrm{H}$ shell remains active preventing convective envelope penetrating deeper
- Convective envelope penetrates into $\mathrm{He}$ rich layers due to
	- Continuing expansion and cooling of these layers
		- Increases their opacity
	- Growing energy flux from $\mathrm{He}$ burning shell
- Dredge up $\mathrm{He}$ and $\mathrm{N}$ rich material which appears on the surface
- Reduces mass of $\mathrm{H}$ exhausted core
	- Increases upper initial mass limit of stars that produce white dwarfs
#### The thermally pulsing AGB phase
- Eventually $\mathrm{He}$ burning shell reaches $\mathrm{H-He}$ discontinuity
	- $L$ decreasing due to lower amounts of fuel
	- Layers above contract
- Eventually get double shell burning
	- Shells do not burn at same pase
	- $\mathrm{He}$ shell becomes thermally unstable with periodic thermal pulses
- Properties of this phase
	- Periodic thermal pulses alternate with mixing episodes
		- Causes unique nucleosynthesis of $\mathrm{^{12}C;^{14}N}$ and elements heavier than iron
		- Makes stellar envelope/atmosphere more carbon-rich
	- Stellar properties depend on size of $\mathrm{CO}$ core
		- $L=5.9\times10^{4}L_{\odot}\left( \dfrac{M_{c}}{M_{\odot}}-0.52 \right)$
	- Strong mass loss $(10^{-17}-10^{-4} M_{\odot}/yr)$
		- Removes envelope
		- Replenishes ISM
	- Extended stellar atmosphere and envelope from outflow have rich molecular/dust chemistry
### 11.1.1 Thermal pulses and dredge up
- After re-ignition of $\mathrm{H}$ burning shell
	- $\mathrm{He}$ shell under is geometrically thin and thermally unstable
	- Results in periodic pulses in the shell
- Most of the time $\mathrm{He}$ shell is inactive
- $\mathrm{H}$ shell adds mass to intershell region increasing $P$ and $T$ on the bottom of the region
- Once the mass of the intershell reaches critical value
	- $\mathrm{He}$ is ignited in an unstable manner
	- Results in helium shell flash
	- Large energy flux drives convection in entire intershell region creating intershell convection zone (ICZ)
		- Mixes elements from $\mathrm{He}$ burning into this region
	- Energy from the flash mostly expands intershell region
		- Allows $\mathrm{He}$ shell to expand and cool
		- Killing the $\mathrm{He}$ shell
		- Results in phase of stable $\mathrm{He}$ shell burning
		- $\mathrm{H}$ shell extinguishes
	- Third dredge up:
		- Expansion/cooling of intershell region results in deeper penetration of outer convective envelope
		- Convection can extent penetrate beyond the extinct $\mathrm{H}$ shell
		- $\mathrm{He}$ and products from $\mathrm{He}$ burning appear on surface
			- Unlike first and second dredge up which only bring $\mathrm{H}$ burning products
		- Limits growth of $\mathrm{CO }$ core mass
	- After third dredge up $\mathrm{H}$ burning shell reignites and $\mathrm{He}$ shell is inactive
		- Stable $\mathrm{H}$ burning
		- This interpulse period depends on core mass
- Thermal pulse cycle can repeat many times
	- Pulse amplitude increases with each pulse
### 11.1.2 Nucleosynthesis and abundance changes on the AGB
- Surface $^{12}\mathrm{C}$ abundance increases after each dredge up
- Due to low $T$ in stellar atmosphere most $\mathrm{C}$ and $\mathrm{O}$ atoms are in $\mathrm{CO}$ molecules
#### Production of heavy elements: the s-process
- Elements heavier than iron are produced from slow neutron capture reactions on $\mathrm{Fe}$ nuclei
- Requires source of free neutrons
#### Hot bottom burning
- In stars $M\gtrsim4-5M_{\odot}$
- $T$ at the base of the convective envelope during interpulse is so high $\mathrm{H}$ burning takes place
- $\mathrm{CNO}$ cycle takes place called hot bottom burning
- Effects
	- Increase in suface luminosity
		- Breaks core $M-L$ relation
	- Conversion of $^{12}\mathrm{C}$ into $\mathrm{^{14}N}$
		- And other surface composition changes
		- Prevents massive AGB stars from becoming carbon stars and into efficient producers of $\mathrm{N}$
### 11.1.3 Mass loss and termination of the AGB phase
- In the TP-AGB phase have many thermal pulses
- This number/duration is limited by
	- Decreasing mass in $\mathrm{H}$ envelope
	- Growing mass of $\mathrm{CO}$ core
		- If it gets close to Chandrasekhar mass carbon ignites and there is a carbon flash
		- However this probably doesn't happen in AGB stars because mass loss becomes so strong
#### AGB mass loss
- Many AGB stars are enshrouded in a circumstellar envelope that is invisible at optical wavelengths
- Combination of dynamical pulsations and radiation pressure on dust particles probably plays large role
- Pulsations induce shockwaves in stellar atmosphere
	- Brings gas to large radii
	- Increases gas density in outer atmosphere
	- Far enough away dust can condense
	- Then can be accelerated by radiation pressure from the high stellar $L$
- The high mass loss rate of superwind phase determines
	- Maximum luminosity on AGB
	- Final mass (of white-dwarf remnant)
#### Post-AGB evolution
- When mass of $\mathrm{H}$ envelope is very small envelope shrinks and star leaves AGB
- Decrease in $R$ occurs at almost constant $L$
	- $\mathrm{H}$ burning shell still active
- Star follows horizontal track in H-R diagram with higher $T_{\mathrm{eff}}$
	- Remains in complete equilibrium
	- This caused by decreasing mass of envelope
- When $T_{\mathrm{eff}}>30,000\mathrm{K}$
	- Star develops weak but fast wind from radiation pressure in UV absorption lines
	- Strong UV flux destroys dust grains in circumstellar envelope
		- Circumstellar envelop becomes ionized and radiates
		- Appears as planetary nebula
- When envelope mass decreases enough $\mathrm{H}$ shell is fully extinguishes 
	- Luminosity starts decreasing
	- Now cools as a white dwarf
	- Can still experience final thermal pulse
		- Can bring star back to AGB
## 11.2 White dwarfs
- All stars up to $8M_{\odot}$ develop electron degenerate cores, lose envelopes during AGB phase and end as white dwarfs
- White dwarfs radiate thermal energy from their interiors 
	- No nuclear fusion
	- Cool at constant $R$ and decreasing $L$
- Most white dwarfs are composed of $\mathrm{C}$ and $\mathrm{O}$
- WD with $M<0.45 M_{\odot}$ are $\mathrm{He}$ white dwarfs
	- Can result from binary interaction
- WD with $M>1.2M_{\odot}$
	- $\mathrm{ONe}$ WDs
	- From stars that had carbon burning in the core
- Surface composition is usually very different than interior composition
	- Surface gravity results in separation of elements
	- Have spectra dominated by $\mathrm{H}$ (DA)
	- Some have only $\mathrm{He}$ lines (DB)
### 11.2.1 Structure of white dwarfs
- Since EoS of degenerate matter is independent of $T$ WD is independent of thermal properties
	- $R$ is constant
	- $R\propto M^{-1/3}$
- WD more massive than the Chandrasekhar mass collapse
	- Have to correct for electrostatic interactions between electrons and ions
	- And inverse $\beta$-decays
		- Lower effective Chandrasekhar mass
### 11.2.2 Thermal properties and evolution of white dwarfs
- Degenerate electrons provide high thermal conductivity
	- Very small $T$ gradient
	- Considered to have constant $T$
- In outermost layers 
	- Lower density
	- Non-degenerate
	- Energy transport done by radiation
	- But much less effective than electron conduction due to high $\kappa$
	- Insulate interior from outer space
- $T_{c}\approx7.7\times10^{7}\mathrm{K}\left( \dfrac{L/L_{\odot}}{M/M_{\odot}} \right)^{2/7}$
- Luminosity comes from decrease in internal energy
	- Electrons are in lowest energy states
		- Can not change their internal energy
		- Can not release energy from contraction
	- Only energy is from non-degenerate ions
- $\tau \approx \dfrac{1.05\times10^{8}\mathrm{yr}}{\mu_{\mathrm{ion}}}\left( \dfrac{L/L_{\odot}}{M/M_{\odot}} \right)^{-5/7}$
- There are several other factors to take into account
	- Contraction of non-degenerate envelope
	- Coulomb interactions
	- *crystallization*
		- Ions settle into lattice structure releasing latent heat
- Observed WD luminosities can provide a way to derive age of a stellar population
# Chapter 12 Pre-Supernova Evolution of Massive Stars
- [x] #TODO Read Chapter 12 Polls  [due:: 2025-11-21]  [completion:: 2025-11-21]
- Evolution of massive stars differs from low- and intermediate- stars
	- Have high enough temperatures in the cores to undergo non-degenerate carbon ignition
		- Requires minimum mass for $\mathrm{CO}$ core after $\mathrm{He}$ burning $M_{\mathrm{CO-core}}>1.06M_{\odot}$
		- Require an initial mass $M_{\mathrm{up}}\gtrsim8M_{\odot}$
		- With a mass above $M_{\mathrm{ec}}\approx11M_{\odot}$ burn until an $\mathrm{Fe}$ core is formed which collapses into a supernova explosion
	- Masses $M\gtrsim15M_{\odot}$ mass loss by stellar winds becomes important
		- Stellar wind mechanisms are not well understood
		- Very large uncertainty in massive star evolution
## 12.1 Stellar wind mass loss
- Empirically: $\log(-\dot{M})\approx-8.16+1.77\log \left( \frac{L}{L_{\odot}} \right)-1.68\log \left( \frac{T_{\mathrm{eff}}}{K} \right)$ in $\left[ \mathrm{\frac{M_{\odot}}{yr}} \right]$
- Mass loss likely caused by different mechanisms depending where in the HR diagram you are
#### Radiation-driven stellar winds
- Hot luminous stars undergo fast radiation driven stellar wind
	- Radiation pressure at frequencies corresponding to absorption lines (interaction between photons and matter is strong) causes outward acceleration
- Uncertainty in $\dot{M}$ due to inhomogeneities in the wind (clumping)
- Also dependency on metallicity
#### Red supergiant mass loss
- Red super giants (RSG) are cold luminous stars with slow but copious stellar wind
### 12.1.1 The Humphreys-Davidson limit and luminous blue variables
- Empirically there is an upper limit to stellar luminosities that depend on effective temperature
	- Humphreys-Davidson limit: Stars with $M\gtrsim40M_{\odot}$ do not become red supergiants
- Interpreted as a generalization of the Eddington limit
- Stars near the limit are very unstable (luminous blue variables, LBVs)
	- They are destined to become Wolf-Rayet stars
	- The large mass loss prevents them from becoming RSGs
### 12.1.2 Wolf-Rayet stars
- WR stars are hot, very luminous, with bright emission lines
- Often surrounded by circumstellar nebulae of ejected material
- Grouped into subtypes based off the surface abundances (WNL, WNE, WC, WO stars)
	- Interpreted as an evolutionary sequence 
	- An exposure of deeper and deeper layers
## 12.2 Evolution of massive stars with mass loss in the HR diagram
- Evolution proceeds at nearly constant $L$ as they don't develop degenerate cores and most of the mass is in radiative equilibrium
- Generally mass-loss rates during all evolution phases increase with stellar mass
	- Affected by metallicity, mass-loss rates are generally lower at low metallicity
## 12.3 Advanced evolution of massive stars
- Once $\mathrm{CO}$ core forms and is massive enough for carbon ignition evolution of the core is quickly alternating nuclear burning and core contraction 
	- Increase in $T_{c}$ and $\rho_{c}$
	- $T_{c}\propto \rho_{c}^{1/3}$
- For $T_{c}\gtrsim5\times10^{8}\mathrm{K}$ evolution tracks deviate 
	- Somewhat higher $\rho_{c}$ and lower $T_{c}$
	- Strong neutrino emission cools the. core
- Neutrino energy loss enormously speeds up the evolution of the core
	- Stellar envelope doesn't have time to respond
	- Envelope is practically disconnected from the core
### 12.3.1 Evolution with significant neutrino loss
- After $T_{c}\gtrsim5\times10^{8}\mathrm{K}$
	- Neutrino luminosity from the core far exceeds luminosity from the surface
- Durning nuclear burning cycles
	- $\epsilon_{\mathrm{nuc}}=\epsilon_{\nu}$
	- $L_{nuc}\approx L_{\nu}$
- Between burning cycles rate of core contract ion speeds up
- Evolution of core accelerates as core contracts and heats up and burns heavier elements
### 12.3.3 Pre-supernova structure
- $\mathrm{CO}$ core from $\mathrm{He}$ burning goes through rapid succession of nuclear burning stages
- Stellar envelop and star's position on H-R diagram remain largely unchanged
- AFter $\mathrm{C}$ is exhausted core contracts with burning continuing in surrounding shell
- Neutrino loss speeds up contraction and heating
- Each subsequent burning leaves a shell with a smaller burning core 
- Have an onion-skin structure
- Often nuclear burning causes convective regions to partially mix these layers
- Eventually reach iron core which can't extract energy from fusion (inert)
- Iron core becomes unstable and collapses resulting in a supernova
# Chapter 13 Stellar Explosions and Remnants of Massive Stars
- [x] #TODO Read Chapter 13 polls  [due:: 2025-11-24]  [completion:: 2025-11-24]
- Supernova are stellar explosions where $L$ reaches $10^9-10^{10}L_{\odot}$
#### Supernova classification
- Type $\mathrm{I}$ do not have $\mathrm{H}$ lines
- Type $\mathrm{II}$ do have $\mathrm{H}$ lines
- **Type** $\mathrm{Ia}$ 
	- Lack of $\mathrm{H}$ lines
	- Strong $\mathrm{Si\;II}$ lines at max brightness
	- Eventually $\mathrm{Fe}$ and $\mathrm{Co}$ appear 
	- Occur in galaxies of all types
		- Can have long-lived low-mass progenitors
	- Caused by thermonuclear explosion of $\mathrm{CO}$ white dwarf reaching the Chandrasekhar mass limit by mass accretion in binary system
	- Most luminous of all supernova
	- Lightcurves form a homogenous group
- **Type** $\mathrm{II}$
	- Dominated by $\mathrm{H}$ lines
	- Occur in spiral arms of galaxies where there is star formation
	- Correspond to massive stars with short lifetimes
	- Most common type of stellar explosion
	- Have a variety of lightcurve shapes
		- Based off this split into Type $\mathrm{II-P}$, Type $\mathrm{II-L}$, Type $\mathrm{IIb}$ and Type $\mathrm{IIn}$
- **Type** $\mathrm{Ib}$ and $\mathrm{Ic}$
	- Type $\mathrm{Ib}$ have strong $\mathrm{He}$ lines that $\mathrm{Ic}$ do not
	- Both have lack of $\mathrm{H}$
	- Have strong $\mathrm{O,Ca,Mg}$
	- Found in star forming regions
	- Associated with core collapse of massive stars
## 13.2 Core collapse and explosion of massive stars
### 13.2.1 The collapse of the iron core
- Due to neutrino cooling core has considerable electron degeneracy
- Electrons are always relativistic so contraction can't be stopped
- Very close to state of dynamical instability
- Two processes contribute to accelerating contraction
	- Electron captures: inverse $\beta-$decay is the capture and binding into otherwise $\beta-$unstable heavy nuclei
		- Composition becomes neutron rich: neutronization
		- Electron pressure decreases
		- Can increase $\mu_{e}$ decreasing $M_{c}$
		- Can trigger electron-capture supernovae
	- Photo-disintegration
		- When $T_{c}\sim10^{10}\mathrm{K}$
			- Energy of photons large enough to break heavy nuclei
			- Particularly $^{56}\mathrm{Fe}$
		- Results in lowering $\gamma_{\mathrm{ad}}$ below $\mathrm{\dfrac{4}{3}}$ making the core dynamically unstable
### 13.2.2 The explosion mechanism
- When collapsing core reaches nuclear densities nuclear forces become important reversing the collapse: core bounce
- Shockwave from impact of infalling matter on the core bounce fizzles out primarily from neutrinos taking away the energy
	- No prompt explosion occurs
#### Effects of neutrinos
- There is a neutrino trapping surface
	- Core becomes opaque so can only escape with many scattering events
	- With very high pressure diffusion velocity is much smaller than infall velocity of gas
- Deposition of neutrino energy in core provides energy source to revive shock wave and cause an explosion
- Alternative is proto-neutron star is unstable to g-mode oscillations
	- Can create an anisotropic explosion
	- Could indicate neutron stars receive a "kick" at birth
### 13.2.3 Lightcurves of core-collapse supernovae
- Physical parameters determining appearance of supernova
	- Total kinetic energy imparted by the explosion into the envelope
	- Structure (density profile and chemical composition) and possible presence of circumstellar material lost earlier in the evolution of the star
	- Energy input by decay of radioactive isotopes ejected in the explosion
### 13.2.4 Final masses and remnants
- Type of stellar remnant left behind depends on whether the collapse of the iron core successfully generates a supernova explosion
- Likely that the lower the initial mass of the star more likely successful explosion
- Not completely clear what the exact relationship is
## 13.3 Type $\mathrm{Ia}$ supernovae
- Caused by thermonuclear explosion of a $\mathrm{CO}$ white dwarf reaching critical mass for carbon ignition
- Carbon burning is unstable since gas is strongly degenerate
- Ignition causes incineration of all material in the core to $\mathrm{Fe}$ peak elements
- Total energy released by nuclear burning is enough to overcome binding energy so no stellar remnant left
- $\mathrm{CO}$ white dwarfs causing $\mathrm{SN\;1a}$ explosions grow by accreting mass in a binary
	- **Single degenerate scenario**
		- White dwarf accretes $\mathrm{H}-$ or $\mathrm{He}-$ rich matter from non-degenerate binary companion
		- Too small a range of accretion rate to explain the observed rates of $\mathrm{SN\;Ia}$
	- **Double degenerate scenario**
		- Chandrasekhar limit is reached by merging of two $\mathrm{CO}$ white dwarfs in a close binary system
		- Angular momentum loss by gravitational waves could bring the eventual merger
		- NO evidence for a double WD binary with enough mass but the theoretical merger rate is sufficient

> [!Cite]

Polls, O.R. _Stellar Structure and Evolution_. n.d.
  

>[!md]

**FirstAuthor**: [[Files/Authors/Polls, O.R.]] 


> **Year**: Error: `format` can only be applied to dates. Tried for format object  

> **Citekey**: pollsStellarStructureEvolution 

> **itemType**: book   


