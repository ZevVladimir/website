- Transitions between levels are not infinitely sharp
	- Don't exactly need $h\nu$ photons
	- Describe with the line profile function $\phi(\nu)$
		- $\int_{0}^{\infty}\phi(\nu)d\nu=1$
		- $\phi(\nu)$ is a probability
		- Sharply peaked at $h\nu$
	- Assume that frequency of emitted and absorbed radiation has same line profile
	- Amount of energy emitted in volume $dV$, solid angle $d\Omega$, freq range $d\nu$ and time $dt$ is by definition: $j\nu d\nu d\Omega d\nu dt$
	- For two-level system
		- Each atom contributes energy $h\nu_{0}$ over $4\pi$ solid angle
		- Expressed: $\dfrac{h\nu_{0}}{4\pi}\pi h(\nu)n_{2}A_{21}dV d\omega d\nu dt$
		- $\boldsymbol{j_{\nu}=\dfrac{h\nu_{0}}{4\pi}n_{2}A_{21}\phi(\nu)}$
		- For $\alpha_{\nu}$
			- $I_{\nu}=S_{\nu}=\dfrac{A_{21}n_{2}}{B_{12}n_{1}-B_{21}n_{2}}$
			$$\begin{align}
S_{\nu} &= \dfrac{j\nu}{\alpha_{\nu}} \\
\dfrac{j_{\nu}}{\alpha_{\nu}} & =\dfrac{A_{21}n_{2}}{B_{12}n_{1}-B_{21}n_{2}} \\
\dfrac{h\nu_{0}}{4\pi}n_{2}A_{21}\phi(\nu) & =\alpha_{\nu}A_{21}n_{2}\left[ \dfrac{1}{B_{12}n_{1}-B_{21}n_{2}} \right] \\
\boldsymbol{\alpha_{\nu}} & =\boldsymbol{\dfrac{h\nu_{0}}{4\pi}\phi({\nu})[B_{12}n_{1}-B_{21}n_{2}]} 
\end{align}$$
	- Write the full [[Radiative transport equation]] as 
		- $\dfrac{dI_{\nu}}{ds}=\dfrac{h\nu}{4\pi}n_{2}A_{21}\phi(\nu)- \dfrac{h\nu}{4\pi}\phi(\nu)[B_{12}n_{1}-B_{21}n_{2}JI_{\nu}]$
		- Recall
			- $g_{1}B_{12}=g_{2}B_{21}$
			- $A_{21}=\dfrac{2h\nu^{3}}{c^{2}}B_{21}$
		$$\begin{align}
S_{\nu}=\dfrac{J_{\nu}}{\alpha_{\nu}} & =\dfrac{A_{21}n_{2}}{B_{12}n_{1}-B_{21}n_{2}} \\
 & =A_{21}n_{2}\left[ \dfrac{g_{2}}{g_{1}B_{21}n_{1}-B_{21}n_{2}} \right] ^{-1} \\
 & = \dfrac{A_{21}}{B_{21}}n_{2}\left[ \dfrac{g_{2}}{g_{1}}n_{1}-n_{2} \right] ^{-1} \\
 & =\dfrac{2h\nu^{3}}{c^{2}}n_{2}\left[ \dfrac{g_{2}}{g_{1}}n_{1}-n_{2} \right] ^{-1} \\
 & = \dfrac{2h\nu^{3}}{c^{2}}\left[ \dfrac{g_{2}}{g_{1}} \dfrac{n_{1}}{n_{2}} \right] ^{{-1}}
\end{align}$$
	- Generalized Kirchhoff's law: $\dfrac{g_{2}}{g_{1}} \dfrac{n_{1}}{n_{2}}$
	- If in LTE $\dfrac{n_{1}}{n_{2}}=\dfrac{g_{1}}{g_{2}}\exp \left[ \dfrac{h\nu}{kT} \right]$
	$$\begin{align} & 
\dfrac{2h\nu^{3}}{c^{2}}\left[ \dfrac{g_{2}}{g_{1}}\cdot \dfrac{g_{1}}{g_{2}}\exp \left[ \dfrac{h\nu}{kT} \right] -1 \right]  \\
 & =\dfrac{2h\nu^{3}}{c^{2}}\left[ \exp \left[ \dfrac{h\nu}{kT} \right] -1 \right] =B_{\nu}!!
\end{align}$$
	- Generally $\dfrac{n_{l}}{n_{u}}$ depends on $I_{\nu}$ "non-LTE"
		- When densities are low 
			- Giant stars outer atmosphere
		- When radiation field is very high
			- Luminous stars
		- LTE is pretty good for many stars
	- LTE: $\dfrac{n_{1}}{n_{2}}=\dfrac{g_{1}}{g_{2}}\exp \left[ \dfrac{h\nu}{kT} \right]$ matter in thermal equilibrium with itself but not necessarily radiation
	- NLTE: $\dfrac{n_{1}}{n_{2}}\neq \dfrac{g_{1}}{g}_{2}\exp \left[ \dfrac{h\nu}{kT} \right]$ covers all other cases
## SAHA equation
- Two level ion we used
	- $\dfrac{n_{2}}{n_{1}}=\dfrac{g_{2}}{g_{1}}\exp \left[ -\dfrac{E_{2}-E_{1}}{kT} \right]$
- Energy levels of the hydrogen atom
	- $=13.6(\dfrac{1}{n_{1}^{2}}-\dfrac{1}{n_{i}^{2}})$
	- From ground state to first excited state: $13.6(1-\dfrac{1}{4})=13.6\times0.75=10.2\mathrm{eV}$
- $k=8.617\times10^{-5}\mathrm{\dfrac{eV}{k}}$
	- $\dfrac{n_{2}}{n_{1}}=\dfrac{g_{2}}{g_{1}}(e^{-118366/T})$
- For hydrogen $g_{n}=2n^{2}$ $\dfrac{g_{2}}{g_{1}}=4$
	- $\dfrac{n_{2}}{n_{1}}=4e^{-118366/T}$
- Problem is it takes $10.2\mathrm{eV}$ to get electron int level 2 but if $n=\infty$ for upper level (ionized) only requires $3.4\mathrm{eV}$ more. So good chance actually ionize the gas
- Better to ask in thermal equilibrium, what is the ratio between number densities of atoms in a neutral state to an ionized state
- Consider
	- Have an ionized state and neutral hydrogen in the ground state
	- Energy difference is the ionization potential $13.6\mathrm{eV}=\chi_{i}$
	- Kinetic energy of the electron $\dfrac{1}{2}m_{e}v^{2}$
	- Electron can take almost any velocity. Consider differential number of ions with a free electron in range $v\to v+dv$ where $v$ is the velocity
		- $\dfrac{dN_{e}(v)}{dN_{0}}=\dfrac{g}{g_{0}}\exp \left[ -\dfrac{\chi_{i}+\dfrac{1}{2}m_{e}v^{2}}{kT} \right]$
			- $g_{0}$ is the statistical weight of the ground state
			- $g$ is the statistical weight of the ion and electron $g=g+g_{e}$
			- $g_{e}=\dfrac{2d^{3}xd^{3}p}{n^{3}}$
				- The 2 comes from spin states
				- From $dxdp2h$ uncertainty principle
				- $d^{3}x$ corresponds to the smallest box can put one electron
					- $d^{3}x=dv=\dfrac{1}{n_{e}}$
					- $n_{e}$ is the number density of electrons
				- Electron velocities are isotropic so $d^{3}p=4\pi m_{e}^{3}v^{2}dv$
				$$\begin{align}
\dfrac{dN_{e}(v)}{N_{0}} & =\dfrac{8\pi m_{e}^{3}}{n^{3}} \dfrac{g_{+}}{n_{e}g_{0}}\exp \left[ -\dfrac{\chi_{i}+\dfrac{1}{2}m_{e}v^{2}}{kT} \right]v^{2}dv \\
\mathrm{Integrate \; over \; v}  \\
\dfrac{N_{e}}{N_{0}} & =\dfrac{8\pi m_{e}^{3}}{n^{3}} \dfrac{g_{+}}{n_{e}g_{0}} \int_{0}^{\infty}\exp \left[ -\dfrac{\chi+\dfrac{1}{2}m_{e}v^{2}}{kT} \right] v^{2}dv \\
 & =\dfrac{8\pi m_{e}^{3}}{n^{3}} \dfrac{g_{+}}{n_{e}g_{0}} \exp \left[ -\dfrac{\chi}{kT} \right] \int_{0}^{\infty}\exp \left[ -\dfrac{\chi+\dfrac{1}{2}m_{e}v^{2}}{kT} \right] v^{2}dv  \\
u & =\sqrt{ \dfrac{1}{2}m_{e}v^{2} \dfrac{1}{kT} }=\sqrt{ \dfrac{1}{2} \dfrac{m_{e}}{kT} }v \\
du & =\sqrt{ \dfrac{1}{2} \dfrac{m_{e}}{kT} }dv \\
dv & =\left( \dfrac{1}{2} \dfrac{m_{e}}{kT} \right) ^{-1/2} \\
v & =\left( \dfrac{1}{2} \dfrac{m_{e}}{kT} \right) ^{-1/2} \\
\to &  \dfrac{8\pi m_{e}^{3}}{n^{3}} \dfrac{g_{+}}{n_{e}g_{0}}\exp \left[ -\dfrac{\chi}{kT} \right] \left( \dfrac{1}{2} \dfrac{m_{e}}{kT} \right) ^{{-3/2}} \int_{0}^{\infty}e^{-u^{2}}u^{2}du \\
\int_{0}^{\infty}e^{-u^{2}}u^{2}du & =\dfrac{\sqrt{ \pi }}{4} \\
\to & \dfrac{8\pi m_{e}^{3}}{h^{3}} \dfrac{\pi^{1/2}}{4} e^{-\chi/kT} \left( \dfrac{2kT}{m_{e}} \right) ^{3/2} \dfrac{g_{+}}{n_{e}g_{0}} \\
\dfrac{n_{i}n_{e}}{n_{0}} & =\left( \dfrac{2\pi m_{e}kT}{h^{2}} \right) ^{3/2} \dfrac{2g_{+}}{g_{0}}e^{-\chi/kT}
\end{align}$$
- For full saha equation generalize $n_{0}\to n$ in any state and $g_{0}\to g$ of any state
- Assuming most of H in the ground state $\dfrac{2g_{+}}{g_{0}}=1$
- $\dfrac{n_{i}n_{e}}{n_{0}}=\left( \dfrac{2\pi m_{e}kT}{n^{2}} \right)^{3/2}e^{-\chi/kT}$
- If gas is only H $n_{i}=n_{p}=n_{e}$
	- Define $\dfrac{n_{HI I}}{N_{H}}=\chi$ ionized fraction
	- $n_{H}=n_{HII}+n_{HI}$
	$$\begin{align}
\dfrac{n_{H II}^{2}}{n_{HI}} & =\left( \dfrac{2\pi m_{e}kT}{h^{2}} \right) ^{3/2}e^{-\chi/kT} \\
\dfrac{n_{HII}^{2}}{n_{HI}} & =\dfrac{n_{HII}^{2}}{n_{H}-N_{HII}} \\
 & =\dfrac{n_{HII}^{2}}{n_{H}(1-\chi)} \\
 & =n_{H}(\dfrac{\chi^{2}}{1-\chi})
\end{align}$$
- Comparing neutral fraction $(1-\chi)$ with fraction in level 2 the peak of the $N=2$ state happens at $\sim10^{4}\mathrm{K}$
## Stellar classification and balmer line strength
- The O-B-A-F-G-K-M scheme is based on strength of balmer lines
	- O-B stars $\gtrsim10^{4}\mathrm{K}$ with weaker balmer lines (ionized)
	- A stars $\sim10^{4}\mathrm{K}$ strongest balmer lines
	- FGKM stars $<10^{4}\mathrm{K}$ weak to no  balmer lines (not hot enough)
## Microphysics of absorption
- $\alpha_{\nu}=n\sigma_{\nu}=\rho\kappa_{\nu}$
	- $\alpha$ is the absorption coefficient
	- $n$ is the number density of absorbers
	- $\sigma$ is the cross-section
	- $\rho$ is the mass density of absorbers
	- $\kappa$ is the capacity which depends on total material composition $\left[ \mathrm{\dfrac{cm^{2}}{g}} \right]$
- Matter
	- Free electrons
		- Thomson scattering
			- $\sigma_{\nu}^{T}=\dfrac{8\pi}{3}r_{e}^{2}=6.65\times10^{-25}\mathrm{cm^{2}}$
			- $\alpha_{n\nu}^{T}-\sigma^{T}N_{e}$
			- Independent of $\nu$ so it is a Grey approximation process
		- Rayleigh scattering off bound electrons
			- $\sigma_{\nu}^{R}\propto \nu^{4}$
	- Atoms, ions, molecules
		- Bound free transitions
			- Ionization, recombination
			- $\sigma_{\nu}^{bf}\propto \nu^{3}$ hydrogen line (more complex otherwise)
			- For LTE conditions
				- $\alpha_{\nu}^{bf}=\sigma_{\nu}^{bf}n_{e}(1-\exp \left[ -\dfrac{h\nu}{kT} \right])$
					- Induced process
		- Free-Free transitions
			- Thermal bremsstrahlung
				- $\sigma_{\nu}^{ff}\propto \nu^{-3}$
				- $\alpha_{\nu}^{ff}=\sigma_{\nu}^{ff}N_{ion}(1-\exp \left[ -\dfrac{h\nu}{kT} \right])$
				- No difference between Wien's limit and the Rayleigh jeans limit
		- Bound-Bound
			- $\sigma_{\nu}=\dfrac{\pi e^{2}}{m_{e}c^{2}}f\times \phi(\nu-\nu_{0})$
				- $\dfrac{\pi e^{2}}{m_{e}c^{2}}$ is the classical cross section
				- $f$ is the oscillator strength
				- $\phi(\nu-\nu_{0})$ is the line profile
			- Actual $\alpha_{\nu}$ depends on composition
			- Define the Rosseland Mean opacity
				- $\dfrac{1}{\kappa_{R}}\equiv  \dfrac{\int_{0}^{\infty} \dfrac{1}{\kappa_{\nu}} \dfrac{dB_{\nu}(T)}{dT}d\nu}{\dfrac{\int_{0}^{\infty}dB_{\nu}(T)}{dT}d\nu}$
				- Average across frequency for matter in thermal equilibrium
				- Useful in diffusion approximation