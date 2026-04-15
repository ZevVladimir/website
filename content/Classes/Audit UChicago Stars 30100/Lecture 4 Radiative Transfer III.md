## Temperature
- In [[Local thermal equilibrium]] $S_{\nu}=B_{\nu}$
	$$\begin{align}
S=B =\int_{0}^{\infty}B_{\nu}d\nu  & =\int_{0}^{\infty} \dfrac{2h\nu^{3}}{c^{3}}\left( \dfrac{1}{\exp \left[ \dfrac{h\nu}{kT} \right] -1} \right) d\nu \\
u=\dfrac{h\nu}{kT} & \;du=\dfrac{h}{kT}d\nu\; \nu=\dfrac{kT}{h}u\;d\nu=\dfrac{kT}{h}du \\
B=\int_{0}^{\infty} \dfrac{2h}{c^{2}}\left( \dfrac{kTu}{h} \right) ^{3} \dfrac{1}{e^{u}-1} \dfrac{kT}{h}du & =\dfrac{2h}{c^{2}}\left( \dfrac{kT}{h} \right) ^{4}\int_{0}^{\infty} \dfrac{u^{3}}{u^{4}-1}du \\
B & =\dfrac{2h}{15} \dfrac{\pi^{4}}{c^{2}} \dfrac{k^{4}T^{4}}{h^{4}} \\
\sigma_{B} & =\dfrac{2\pi^{5}k^{4}}{15c^{2}h^{3}} \\
\boldsymbol{B(\tau)} & =\boldsymbol{\dfrac{\sigma_{B}}{\pi}T^{4}(\tau)} \\
F_{0} & =\sigma T^{4}_{\mathrm{eff}} \\
\dfrac{\sigma}{\pi}T^{4}(\tau) & =\dfrac{3}{4\pi}\sigma T^{4}_{\mathrm{eff}}(\tau+\dfrac{2}{3}) \\
T(\tau) & =T_{\mathrm{eff}}^{4} \dfrac{3}{4} (\tau+\dfrac{2}{3}) \\
\boldsymbol{\mathrm{when}} \;  & \boldsymbol{\tau=\dfrac{2}{3} \; T(\tau)=T_{\mathrm{eff}}}
\end{align}$$
## Limb Darkening
$$\begin{align}
I^{+}(\tau=0,mu) & =\int_{0}^{\infty} \dfrac{1}{\mu}S\exp[-\dfrac{\tau'_{z}}{\mu}]d\tau'_{z} \\
S & =\dfrac{3F_{0}}{4\pi}(\tau+\dfrac{2}{3}) \\
I^{+} & =\int_{0}^{\infty} \dfrac{1}{\mu} \dfrac{3F_{0}}{4\pi}(\tau'_{z}+\dfrac{2}{3})\exp \left[ -\dfrac{\tau'_{z}}{\mu} \right] d\tau'_{z} \\
 & =\left( \int_{0}^{\infty} \tau'_{z}\exp \left[ -\dfrac{\tau'_{z}}{\mu} \right] d\tau'_{z} + \int_{0}^{\infty} \dfrac{2}{3}\exp \left[ -\dfrac{\tau'_{z}}{\mu} \right] d\tau'_{z} \right) \dfrac{3F_{0}}{4\pi} \dfrac{1}{\mu} \\
I^{+} &  = \dfrac{3F_{0}}{4\pi}(\mu^{2}+\dfrac{2}{3}\mu)= \dfrac{3F_{0}}{4\pi}\mu(\mu+\dfrac{2}{3}) \\
\boldsymbol{I^{+}} & =\boldsymbol{\dfrac{3F_{0}}{4\pi}}\left( \cos\theta+\dfrac{2}{3} \right) 
\end{align}$$
- Dependence on viewing angle!
- This causes [[Limb darkening]] where $I$ is darker at the edges than it is at the center. The shape of the limb darkening gives info about the [[Source function]]
	- $\dfrac{I(0,\mu)}{I(0,1)}= \dfrac{\dfrac{3F_{0}}{4\pi}(\cos\theta+\dfrac{2}{3})}{\dfrac{3F_{0}}{4\pi}(\dfrac{3}{3}+\dfrac{2}{3})}=\dfrac{3}{5}\cos\theta+\dfrac{2}{5}$
## Local Thermodynamic Equilibrium
- $S_{\nu}=B_{\nu}$
- $S_{\nu}=\dfrac{j_{\nu}}{\alpha_{\nu}}$
- Consider system of a simple atom of only two levels
	- Level 1: $E_{1}$
	- Level 2: $E_{2}=E_{1}+h\nu$
- **Spontaneous emission:** If an electron goes from level 2 to level 1
	- Photon with $E=h\nu$ is released
	- Transition probability $A_{21}$ $[s^{-1}]$
- **Absorption** An electron goes from level 1 to level 2
	- Absorbs a photon of $E=h\nu$
- In equilibrium we want $N_{\mathrm{emis}}=N_{\mathrm{abs}}$
	- $N_{\mathrm{abs}}\propto n_{1}I$
	- $N_{\mathrm{emis}}\propto n_{2}$
	- $N_{abs}=Bn_{1}I$
		- $B$ is the probability of excitation or absorption
	- $N_{emis}=An_{2}$
		- $A$ is the probability of spontaneous emission
	$$\begin{align}
N_{\mathrm{abs}} & =N_{\mathrm{emis}} \\
Bn_{1}I & =An_{2} \\
I & =\dfrac{n_{2}}{n_{1}} \dfrac{A}{b} \\
\dfrac{n_{i}}{n_{j}} & =\dfrac{g_{i}}{g_{j}}\exp \left[ -\dfrac{E_{i}-E_{j}}{kT} \right]  \\
\dfrac{n_{2}}{n_{1}} & =\dfrac{g_{2}}{g_{1}}\exp \left[ -\dfrac{E_{2}-E_{1}}{kT} \right]  \\
E_{2} & =E_{1}+h\nu \\
\dfrac{n_{2}}{n_{1}} & =\dfrac{g_{2}}{g_{1}}\exp \left[ -\dfrac{h\nu}{kT} \right]  \\
B\nu & = \dfrac{2h\nu^{3}}{c^{2}} \dfrac{1}{\exp[\dfrac{h\nu}{kT}]-1} \\
\end{align}$$
	- If $\dfrac{h\nu}{kT}\gg1$ then $B\nu=\dfrac{2h\nu^{3}}{c^{2}}\exp \left[ -\dfrac{h\nu}{kT} \right]$
		- This is only true in the extreme case
		- Need to add in stimulated emission
- **Stimulated emission**
	- An incoming photon causes deexcitation resulting in two photons being released
$$\begin{align}
N_{\mathrm{abs}} & =B_{12}n_{1}I \\
N_{\mathrm{emis}} & =A_{21}n_{2}+B_{21}n_{2}I \\
B_{12}n_{1}I & =A_{21}n_{2}+B_{21}n_{2}I \\
(B_{12}n_{1}-B_{21}n_{2})I & =A_{21}n_{2} \\
I & =\dfrac{A_{21}n_{2}}{B_{12}n_{1}-B_{21}n_{2}} \\
I & =\dfrac{A_{21}}{B_{12} \dfrac{n_{1}}{n_{2}}-B_{21}} \\
\dfrac{n_{1}}{n_{2}} & =\dfrac{g_{1}}{g_{2}}\exp \left[ \dfrac{h\nu}{kT} \right]  \\
I & =A_{21}\left[ B_{12} \dfrac{g_{1}}{g_{2}} \exp \left[ \dfrac{h\nu}{kT} \right]  -B_{21}\right]^{-1} \\
I & =\dfrac{A_{21}}{B_{21}}\left[ \dfrac{B_{12}}{B_{21}} \dfrac{g_{1}}{g_{2}} \exp \left[ \dfrac{h\nu}{kT} \right] -1 \right]  ^{-1} \\
\mathrm{if}\; \dfrac{A_{21}}{B_{21}}=\dfrac{2h\nu^{3}}{c^{2}} \; \dfrac{\mathrm{and}\;B_{12}}{B_{21}}=\dfrac{g_{2}}{g_{1}} & \; \mathrm{can \; recover} \; B_{\nu}=\dfrac{2h\nu^{3}}{c^{2}}\exp \left[ -\dfrac{h\nu}{kT} \right]  \\
A_{21} & =\dfrac{2h\nu^{3}}{c^{2}}B_{21} \\
g_{1}B_{12} & =g_{2}B_{21}
\end{align}$$
- For super optically thick $\tau\gg1$ then $I_{\nu}\to B_{\nu}$