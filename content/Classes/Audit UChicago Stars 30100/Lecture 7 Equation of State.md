## Equation of State (EoS)
- In isolation, matter and radiation $\to$ thermodynamic equilibrium when there are sufficient collisions/interactions
### Consequences
1. Radiation field becomes isotropic
2. Photon energy distribution $\to$ [[Planck function]]
3. Statistical distribution functions are defined by a single temperature $T$

- However stars aren't in isolation as they
	- Emit radiation
	- Generate energy in their cores
- Over small scales in a star $\Delta r\ll R_{\star}$ get [[Local thermal equilibrium]]
- Photon mean free path $l_{\mathrm{ph}}=\dfrac{1}{\kappa \rho}$
	- $\kappa$ is the opacity coefficient
		- If $\kappa$ dominated by electron scattering then $=0.4\mathrm{\dfrac{cm^{2}}{g}}$
	- $\rho$ is the mass density
		- For the sun $\bar{\rho}_{\star}=1.4 \mathrm{\dfrac{g}{cm^{3}}}$
	- For the sun $l_{\star}\sim1\mathrm{cm}$ so extremely opaque to photons
- $\Delta T=\frac{ \partial T }{ \partial r }l_{\mathrm{ph}}\approx  \dfrac{T_{c}}{R_{\star}}l_{\mathrm{ph}}\approx \dfrac{10^{7}\mathrm{K}}{10^{11}\mathrm{cm}}1\mathrm{cm}=10^{-4}\mathrm{K}$
	- Very small temp change so LTE good approximation
		- Inside star 
		- In the outer layers this isn't as good
- $P\to P(\rho,T,\chi_{i})$
	- $P$ is the pressure
	- $\rho$ is the density
	- $T$ is the temperature
	- $\chi_{i}$ is the chemical composition
- $P=nkT=\dfrac{k}{\mu m_{p}}\rho T$ ideal gas EoS
	- Needs interaction energy $\ll$ KE
## Ideal Gas Law
- $n(p)$ is the number of particles per volume with momentum $p\to p+dp$
- Total number of particles $N=\int_{0}^{\infty}n(p)dp$
- Internal energy density $u=\int_{0}^{\infty}\epsilon_{p}n(p)dp=n\langle \epsilon_{p} \rangle$
- Pressure $P=\dfrac{1}{3}\int_{0}^{\infty}pv_{p}n(p)dp=\dfrac{1}{3}\langle pv_{p} \rangle$
	- $v_{p}$ is the velocity of the particle
- Consider a cubic volume with sides of $1\mathrm{cm}$
	- The timescale for a particle to hit another wall
		- Side length $L=1\mathrm{cm}$
		- Photon collides with wall at angle $\theta$ and velocity $v$
		- $\Delta t=\dfrac{2L}{v\cos\theta}=\dfrac{2}{v\cos\theta}$
		- Change in momentum $\Delta p=2p\cos\theta$
		- $\dfrac{\Delta p}{\Delta t}=2p\cos\theta \cdot \dfrac{v\cos\theta}{2}=vp\cos ^{2}\theta$
		- $n(\theta,p)d\theta dp$
		- $dP=vp\cos ^{2}\theta n(\theta,p)d\theta dp$
		- $dP=vp\cos ^{2}\theta n(p)\sin\theta d\theta dp$
			- From isotropic distribution of $p$ $\int_{0}^{2\pi}\int_{0}^{\pi/2}\sin\theta d\theta d\phi$
		$$\begin{align}
dP & =\int_{0}^{\pi/2}vp\cos ^{2}\theta n(p)\sin\theta d\theta dp \\
 & =vpn(p)dp \int_{0}^{\pi/2}\cos ^{2}\theta \sin\theta d\theta \\
u=\cos\theta \; &  du=-\sin\theta \\
dP & =-vpn(p)dp \int_{1}^{0}u^{2}du \\
 & =\dfrac{1}{3}vpn(p)dp \\
\boldsymbol{P} & =\boldsymbol{\dfrac{1}{3}\int_{0}^{\infty}vpn(p)dP}
\end{align}$$
### Consider Relativity
- $\epsilon_{p}=(p^{2}c^{2}+m^{2}c^{4})^{1/2}-mc^{2}$
- Non relativistic limit (NR)
	- $p\ll mc$
$$\begin{align}
x=m^{2}c^{4}\; & \;e=p^{2}c^{2} \\
\mathrm{limit \; of\;}(x+e)^{1/2} & \mathrm{for\; small\; e\;}\to \sqrt{ x }+\dfrac{1}{2} \dfrac{1}{\sqrt{ x }}e \\
\sqrt{ m^{2}c^{4} }+\dfrac{1}{2} \dfrac{1}{\sqrt{ m^{2}c^{4} }}p^{2}c^{2} & =mc^{2}+ \dfrac{1}{2} \dfrac{1}{mc^{2}}p^{2}c^{2}=mc^{2}+ \dfrac{1}{2 } \dfrac{p^{2}}{m} \\
\epsilon_{p} & =mc^{2}+\dfrac{1}{2} \dfrac{p^{2}}{m}-mc^{2}=\dfrac{1}{2} \dfrac{p^{2}}{m}
\end{align}$$
- Relativistic limit 
	- $p\gg mc$
	$$\begin{align}
x=p^{2}c^{2}\; & \;e=m^{2}c^{4} \\
(x+e)^{1/2} & =\sqrt{ x }+\dfrac{1}{2} \dfrac{1}{\sqrt{ x }}e =\sqrt{ p^{2}c^{2} }+\dfrac{1}{2} \dfrac{1}{\sqrt{ p^{2}c^{2} }}m^{2}c^{4} \\
\epsilon_{p} & =pc+\dfrac{1}{2 \dfrac{1}{pc}}m^{2}c^{4}-mc^{2} \\
p & \gg mc \\
\boldsymbol{\epsilon_{p}} & =\boldsymbol{pc}
\end{align}$$
### Velocity
- $v=\frac{ \partial \epsilon }{ \partial p }$
- Relativistic: $\frac{ \partial  }{ \partial p }(pc)=c$
- Non-relativistic $\frac{ \partial  }{ \partial p }(\dfrac{1}{2} \dfrac{p^{2}}{m})=\dfrac{p}{m}$
$$\begin{align}
p\cdot v & =\begin{cases}
\dfrac{p^{2}}{m}=2\epsilon_{p}\mathrm{(NR)} \\
pc=\epsilon_{p}\mathrm{(R)}
\end{cases} \\
P & =\dfrac{1}{3}n\langle pv \rangle = \begin{cases}
\dfrac{1}{3}n\langle 2\epsilon_{p} \rangle =\dfrac{2}{3}U \mathrm{(NR)} \\
\dfrac{1}{3}n\langle \epsilon_{p} \rangle =\dfrac{1}{3}U\mathrm{(R)}
\end{cases}
\end{align}$$
### Maxwell Boltzmann Distribution for p
$$\begin{align}
n(p)dp & =\dfrac{n}{(2\pi mkT)^{3/2}}\exp \left( \dfrac{-p^{2}}{2mkT} \right) 4\pi p^{2}dp \\
\mathrm{(NR)} \; v & =\dfrac{p}{m} \\
P & =\dfrac{1}{3}\int_{0}^{\infty}pvn(p)dp=\dfrac{\dfrac{1}{3}\int_{0}^{\infty}p^{2}}{m}n(p)dp \\
 & =\dfrac{1}{3}\int_{0}^{\infty} \dfrac{p^{2}}{m} \dfrac{n}{(2\pi mkT)^{3/2}}\exp \left( -\dfrac{p^{2}}{2mkT} \right) 4\pi p^{2}dp \\
\mathrm{Look\;at\;} & \mathrm{notes\;for\;algebra} \\
P & =nkT \\
P_{\mathrm{gas}} & =\sum_{i}P_{i}+P_{e} 
\end{align}$$
- $P_{i}$ is each ion
- $P_{e}$ is the electrons
## Quantum Mechanical Description of Gas
- 6D volume $\Delta x^{3}\Delta p^{3}$
- $g(p)dp=g_{s} \dfrac{V}{h^{3}}4\pi p^{2}dp$
	- $g(p)$ is the number of possible states
	- $g_{s}$ is the degeneracy
- Want the number of occupied states
	- Occupation fractions for fermions and bosons
	- Fermi-Dirac Distribution
		- $f_{FD}(\epsilon_{p})=\left[ \exp \left( \dfrac{\epsilon_{p}-\mu}{kT} \right) + 1\right]^{-1}$
	- Bose-Einstein Distribution
		- $f_{BE}(\epsilon_{p})=\left[ \exp \left( \dfrac{\epsilon_{p}-\mu}{kT} \right)-1 \right]^{-1}$
	- $\mu$ is the chemical potential and acts as a normalization constant
### Electron degeneracy
- $\dfrac{g(p)dp}{V}$
$$\begin{align}
n(p)dp & = \dfrac{2}{h^{3}}4\pi p^{2}dp \\
 & =\dfrac{8\pi}{h^{3}}p^{2}dp \\
 & = \dfrac{8\pi}{h^{3}}p^{2}\left[ \exp \left( \dfrac{\epsilon_{p}-\mu}{kT} \right) +1  \right]^{-1} \\
\mathrm{NR}\;\epsilon_{p} & =\dfrac{1}{2} \dfrac{p^{2}}{m_{e}} \\
n(p)dp & =\dfrac{8\pi}{h^{3}}p^{2}\left[ \exp \left( \dfrac{p^{2}}{2m_{e}kT}-\dfrac{\mu}{kT} \right) +1 \right]^{-1} \\
\psi & =\dfrac{\mu}{kT}\int_{0}^{\infty}n(p)dp=n_{e} \\
\mathrm{max \; degeneracy} & \; \mathrm{at}\; T=0 \\
n_{e}(p) & =\begin{cases}
\dfrac{8\pi p^{2}}{h^{3}}\;p\leq p_{f} \\
0 \;p>p_{f}
\end{cases} \\
n_{e}= & \int_{0}^{p_{f}}n_{e}(p)dp \\
 & =\int_{0}^{p_{f}} \dfrac{8\pi}{h^{3}}p^{2}dp \\
\int_{0}^{p_{f}}p^{2}dp & =\dfrac{h^{3}n_{e}}{8\pi} \\
\dfrac{1}{3}p_{f}^{3} & =\dfrac{h^{3}n_{e}}{8\pi} \\
p_{f} & =\left( \dfrac{3h^{3}n_{e}}{8\pi} \right) ^{1/3} \\ \\ \\
\end{align}$$
$$\begin{align}
\mathrm{Non \; Relativistic} \\
v & =\dfrac{p}{m} \\
P & =\dfrac{1}{3}\int_{0}^{\infty}vpn(p)dp \\
 & =\int_{0}^{p_{f}} \dfrac{p^{2}}{m} \dfrac{8\pi p^{2}}{h^{3}}dp \\
 & =\dfrac{8}{3} \dfrac{\pi}{m_{e}h^{2}}\int_{0}^{p_{f}}p^{4}dp \\
 & = \dfrac{8}{15} \dfrac{\pi}{m_{e}h^{3}}p_{f}^{5} \\
 & = \dfrac{h^{2}}{20m_{e}} (\dfrac{3}{\pi})^{2/3}n_{e}^{5/3} \\
n_{e} & =\dfrac{\rho}{\mu_{e}m_{u}} \\
\boldsymbol{P_{c}} & = \boldsymbol{K_{NR}\left( \dfrac{\rho}{\mu_{e}m_{u}} \right) ^{5/3}}\; ;\; K_{NR}= \dfrac{h^{2}}{20m_{e}}m_{u}^{5/3}(\dfrac{3}{\pi})^{2/3}
\end{align}$$
- Where $\mu_{e}$ is the mean mass of electron
- $m_{u}$ is the atomic mass unit
- Find equation for pressure is a polytrope that depends on density
$$\begin{align}
\mathrm{Relativistic} \\
v & =c \\
P & =\dfrac{1}{3}\int_{0}^{\infty}vpn(p)dp \\
 & = \dfrac{1}{3}\int_{0}^{p_{f}}cp \dfrac{8\pi p^{2}}{h^{3}}dp \\
 & = \dfrac{8}{3} \dfrac{\pi c}{h^{3}}\int_{0}^{p_{f}}p^{3}dp \\
p_{e} & = K_{ER}\left( \dfrac{\rho}{\mu_{e}} \right)^{4/3} \; ; \; K_{ER}=\dfrac{hc}{8m_{u}^{4/3}}(\dfrac{3}{\pi})^{1/3}\\
\end{align}$$
## Radiation Pressure
$$\begin{align}
n(p)dp & =\dfrac{2}{h^{3}} 4\pi p^{2}dp\left[ \exp \left( \dfrac{\epsilon_{p}-\mu}{kT} \right) -1 \right]^{-1} \\
\mathrm{photons}\; p & =\dfrac{h\nu}{c} \\
n(\nu)d\nu & =\dfrac{8\pi}{c^{3}}\nu^{2}d\nu \left[ \exp \left( \dfrac{h\nu}{kT} \right) -1 \right]^{-1} \\
n_{\mathrm{ph}} & =\int_{0}^{\infty} \dfrac{8\pi}{c^{3}}\nu^{2}\left[ \exp \left( \dfrac{h\nu}{kT} \right) -1 \right] ^{-1}d\nu \\
n_{\mathrm{ph}} & =bT^{3} \; ;\; b=2.40411 \dfrac{8\pi}{c^{3}}(\dfrac{k}{h})^{3} \\
u_{\mathrm{ph}} & =\int_{0}^{\infty}\epsilon_{p}n(p)dp \\
 & =\int_{0}^{\infty} h\nu  \dfrac{8\pi}{c^{2}}\nu^{2}d\nu \left[ \exp \left( \dfrac{h\nu}{kT} \right) -1 \right] ^{-1} \\
 & =\dfrac{8\pi}{c^{3}}h (\dfrac{kt}{h})^{4}\int_{0}^{\infty} \dfrac{x^{3}}{e^{x}-1} dx \\
 & =aT^{4} \\
\mathrm{\mathrm{Re}lativistic}\;P & =\dfrac{1}{3}U\;P_{rad}=\dfrac{1}{3}aT^{4} \\
\mathrm{Total \;Pressure} \\
P & =P_{\mathrm{rad}}+P_{\mathrm{e}}+P_{\mathrm{ion}}
\end{align}$$
- Consider if $P_{\mathrm{rad}}=P_{\mathrm{gas}}$
$$\begin{align}
P_{\mathrm{rad}}=AT^{4}  & =P_{\mathrm{gas}}=B\rho T \\
\dfrac{P_{\mathrm{rad}}}{P_{\mathrm{gas}}}  & = 1= \dfrac{A}{B}T^{3}\rho\to \dfrac{T}{\rho^{1/3}} \\
P_{\mathrm{gas}} & =P_{\mathrm{e,NR}} \\
\dfrac{P_{\mathrm{gas}}}{P_{\mathrm{e,NR}}}=1 & =\dfrac{B\rho T}{c\rho^{5/3}}\to \dfrac{T}{\rho^{2/3}} \\
\rho & =9.8\cdot10^{5}\mu_{e} \mathrm{\dfrac{g}{cm^{3}}} \\
\dfrac{P_{\mathrm{gas}}}{P_{g,ER}} & =\dfrac{B\rho T}{D\rho^{4/3}}\to \dfrac{T}{\rho^{1/3}}
\end{align}$$
