---
tags: [physics, astronomy, star]
aliases: [EoS, EOS]
---
## From [[pollsStellarStructureEvolution]]
- Equation of state describes microscopic properties of stellar matter for a given $\rho$, $T$, $X_{i}$ (chemical composition)
- Normally expressed as $P=P(\rho,T,X_{i})$ with $P$ being the pressure
- With thermodynamics and internal energy $U(\rho,T,X_{i})$ can derive from EOS
	- Specific heats $c_{V}$ and $c_{P}$
	- Adiabatic exponent $\gamma_{\mathrm{ad}}$
	- Adiabatic temperature gradient $\nabla_{\mathrm{ad}}$
- Assuming ideal gas of free, non interacting particles
	- Gas does interact so require interaction energies to be much less than their kinetic energies
### Equation of state for a gas of free particles
- $n(p)$ is the distribution of momenta of gas particles
- Number density: $n=\int_{0}^{\infty}n(p)dp$
- Internal energy density $U=\int_{0}^{\infty}\epsilon_{p}n(p)dp=n\langle \epsilon_{p} \rangle$
	- From perfect gas assumption
- Pressure $P=\dfrac{1}{3}\int_{0}^{\infty}pv_{p}n(p)dp=\dfrac{1}{3}n\langle pv_{p} \rangle$
	- From calculating how many particles are colliding with the walls of a cubical box and the momentum transfer from that 
- $\epsilon_{p}$ is the kinetic energy of a particle with momentum $p$
- $v_{p}$ ist he velocity
### Equation of state regimes
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