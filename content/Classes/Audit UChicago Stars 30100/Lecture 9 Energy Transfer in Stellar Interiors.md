- Want to know how energy goes from the inside to the outside of a star
## Movement of energy
- Mostly done by radiation and convection although there are some limited cases with conduction being important
1. Random motions of particles or photons (heat diffusion)
	- If photons: radiative diffusion
	- If gas particles: heat conduction
2. Collective bulk motions (convection)
- From thermo dynamics
	- $du=dq+\dfrac{P}{\rho^{2}}d\rho$
		- $du$ is the internal energy
		- $dq$ is heat
		- $\dfrac{P}{\rho^{2}}d\rho$ is the work done
	- $dq=Tds-du+Pdv=du-\dfrac{P}{\rho^{2}}d\rho$
		- With $v=\dfrac{1}{\rho}$
	- $dQ=dq\Delta m$
- How is heat changed?
	1. Nuclear energy (adds)
	2. Flux moving in or out
	3. Neutrinos
## Luminosity
$$\begin{align}
l & =4\pi r^{2}F \\
l(\mathrm{center}) & =0 \\
l(\mathrm{surface})  & = L \\
\delta Q & =\epsilon_{\mathrm{nuc}}\Delta m\delta t-\epsilon_{\nu}\Delta m\delta t -l(m+\Delta m )\delta t \\
l(m+\Delta m) & =l(m)+\left( \dfrac{\delta l}{\delta m} \right) \Delta m \\
\delta Q & =\epsilon_{\mathrm{nuc}}\Delta m\delta t-\epsilon_{\nu}\Delta m\delta t- \dfrac{\delta l}{\delta m}\Delta m\delta t \\
\delta u & =\epsilon_{\mathrm{nuc}}\delta t-\epsilon_{\nu}\delta t- \dfrac{\delta l}{\delta m}\delta t+\dfrac{P}{\rho^{2}}\delta \rho \\
\dfrac{\delta l}{\delta m} & =\epsilon_{\mathrm{nuc}}-\epsilon_{\nu}-\dfrac{\delta u}{\delta t}+\dfrac{P}{\rho^{2}} \dfrac{\delta \rho}{\delta t} \\
\epsilon_{\mathrm{gr}} & =-\dfrac{\delta u}{\delta t}+\dfrac{P}{\rho^{2}} \dfrac{\delta \rho}{\delta t}=-T\dfrac{\delta s}{\delta t} \\
\dfrac{\delta l}{\delta m} & =\epsilon_{\mathrm{nuc}}-\epsilon_{\nu}+\epsilon_{\mathrm{gr}}
\end{align}$$
- In thermal equilibrium time derivatives vanish
$$\begin{align}
\dfrac{\delta l}{\delta m} & =\epsilon_{\mathrm{nuc}}-\epsilon_{\nu} \\
\int_{0}^{L}\delta l & = \int_{0}^{M}\left[ \epsilon_{\mathrm{\nu c}}-\epsilon_{\nu} \right] \delta_{m} \\
L & =L_{\mathrm{nuc}}-L_{\nu}
\end{align}$$
- Often can neglect $L_{\nu}$ if the star is in main sequence you can. However does become important in some cases like supernovae
## Transport by radiation and conduction
- From [[Lecture 7 Equation of State]] mean free path (mfp) of a photon $\Delta T\sim10^{-4}\mathrm{K}$
- In [[Local thermal equilibrium|LTE]] radiation field is a [[Planck function|black body]]
### Heat Diffusion
- Fick's Law: $J=-D\nabla n$
	- $J$ is the diffusive flux with ptl/area/s
	- $D=\dfrac{1}{3}\bar{v}l_{\mathrm{mfp}}$ is the diffusion coefficient
		- $\bar{v}$ is the average velocity
		- $l_{\mathrm{mfp}}$ is the length of the mean free path
	- $\nabla n$ is the gradient of the particle density
	- Shows that the motion of particles follows a gradient
- If we have a barrier
	- Below $n(z-l_{\mathrm{mfp}})$
	- Above $n(z+l_{\mathrm{mfp}})$
	- Particles move from below to above
	- Want to know the number of particles going through the barrier
	- $\frac{ \partial N }{ \partial t }=\dfrac{1}{6}n \bar{v}$
		- $\dfrac{1}{6}$ comes from 3 principle axes with 2 directions of motion
	- Net particle flux:
	$$\begin{align}
J & =\dfrac{1}{6}\bar{v}\left[ n(z-l_{\mathrm{mfp}})-n(z+l_{\mathrm{mfp}}) \right]  \\
n(z-l_{\mathrm{mfp}})-n(z+l_{\mathrm{mfp}}) & =-\dfrac{dn}{dz}(2l_{\mathrm{mfp}}) \\
J & =\dfrac{1}{6} \bar{v}\left( -2l_{\mathrm{mfp}} \dfrac{dn}{dz} \right)  \\
 & =-\dfrac{1}{3} \bar{v}l_{\mathrm{mfp}} \dfrac{dn}{dz}
\end{align}$$
		- Minus sign shows that particles move opposite the gradient
		$$\begin{align}
F & =-D\nabla U \\
\nabla U & =\left( \frac{ \partial U  }{ \partial T }  \right)_{V} \nabla T \\
 & =C_{V}\nabla T \\
F & =-k\nabla T \\
k & =\mathrm{conductivity}=\dfrac{1}{3}\bar{v}l_{\mathrm{mfp}}C_{V} \\
 & \mathrm{Photons}   \\
\bar{v} & =c \\
u & =aT^{4} \\
C_{V} & =\frac{ \partial U }{ \partial T } \\
 & =4aT^{3} \\
l_{\mathrm{mfp}} & =\dfrac{1}{\kappa_{\rho}}  \\
 F_{\mathrm{rad}} & =-\dfrac{4}{3} \dfrac{acT^{3}}{\kappa_{\rho}}\nabla T \\
F_{\mathrm{rad}} & =\dfrac{l}{4\pi r^{2}} &  \\
\dfrac{l}{4\pi r^{2}} & =-\dfrac{4}{3} \dfrac{acT^{3}}{\kappa_{\rho}}\nabla T \\
\nabla T & =\frac{ \partial T }{ \partial r }  \\
 & =-\dfrac{3l\kappa_{\rho}}{16\pi r^{2}acT^{3}} \\
\frac{ \partial r }{ \partial m }  & =\dfrac{1}{4\pi r^{2}\rho} \\
\partial r & =\partial \dfrac{m}{4\pi r^{2}\rho} \\
\mathrm{Lagrangian} \;\frac{ \partial T }{ \partial m }  & = -\dfrac{3\kappa_{\rho}l}{64\pi^{2}acT^{3}r^{4}}
\end{align}$$
		- The Lagrangian form holds when the star is in radiative equilibrium
			- This is true when $l_{\mathrm{mfp}}<R$
			- In stellar atmospheres this is not true
	- In hydrostatic equilibrium
	$$\begin{align}
\dfrac{dP}{dm} & =-\dfrac{Gm}{4\pi r^{4}} \\
\frac{ \partial T }{ \partial m }  & =\frac{ \partial P }{ \partial m } \frac{ \partial T }{ \partial P }  =-\dfrac{Gm}{4\pi r^{4}}\frac{ \partial T }{ \partial P }   \\
\frac{ \partial T }{ \partial P }  & =\dfrac{T}{P}\frac{ \partial T }{ \partial P }  \\
\frac{ \partial T }{ \partial m }  & =-\dfrac{Gm}{4\pi r^{4}} \dfrac{T}{P} \frac{ \partial \log T }{ \partial \log P }  \\
 & =-\dfrac{3\kappa l}{64\pi^{2}acT^{3}r^{4}} \\
\frac{ \partial \log T }{ \partial \log P }  & =\dfrac{3\kappa lP}{16\pi acT^{3}r^{4}}=\nabla_{\mathrm{rad}}
\end{align}$$
		- $\nabla_{\mathrm{rad}}$ is the dimensionless radiative temperature gradient
## Rosseland Mean Opacity
- Go back to frequency specific $(\kappa\to\kappa_{\nu})$
$$\begin{align}
F_{\nu} & =-D_{\nu}\nabla U_{\nu} \\
 & =-D_{\nu}\frac{ \partial U_{\nu} }{ \partial T }\nabla T \\
D_{\nu} & =\dfrac{1}{3} \dfrac{c}{\kappa_{\nu}\rho} \\
U_{\nu} & = \dfrac{8\pi h}{c^{3}} \dfrac{\nu^{3}}{\exp \left[ \dfrac{h\nu}{kT} \right] -1} \\
F & =-\left[ \dfrac{c}{3\rho}\int_{0}^{\infty} \dfrac{1}{\kappa_{\nu}} \frac{ \partial U_{\nu} }{ \partial T } \partial \nu  \right]  \nabla T \\
\kappa_{\mathrm{rad}} & =\dfrac{4}{3} \dfrac{acT^{3}}{\kappa \rho} \frac{ \partial U_{\nu} }{ \partial T }\partial \nu=\mathrm{Rossland\;mean\;opacity} 
\end{align}$$
## Eddington Luminosity Derivation
$$\begin{align}
P_{\mathrm{rad}} & =\dfrac{1}{3}aT^{4} \\
\frac{ \partial P_{\mathrm{rad}} }{ \partial r }  & =-\dfrac{4}{3}aT^{3} \dfrac{dT}{dr} \\
\frac{ \partial T }{ \partial r }  & =-\dfrac{3l\kappa_{\rho}}{16\pi r^{2}acT^{3}} \\
 \frac{ \partial P_{\mathrm{rad}} }{ \partial r }  & =-\dfrac{4}{3}aT^{3}\left( -\dfrac{3l\kappa_{\rho}}{16\pi r^{2}acT^{3}} \right)  \\
 & =\dfrac{l\kappa_{\rho}}{4\pi r^{2}c} \\
\end{align}$$
- In hydrostatic equilibrium
$$\begin{align}
\frac{ \partial P }{ \partial r }  & =\dfrac{Gm\rho}{r^{2}} \\
\dfrac{Gm\rho}{r^{2}} & =\dfrac{l\kappa_{\rho}}{4\pi r^{2}c} \\
l & =\dfrac{Gm4\pi c}{\kappa}
\end{align}$$
	- $l$ is the maximum luminosity that can be carried by radiation in HE
	$$\begin{align}
l & =L  \\
 & =\dfrac{4\pi Gmc}{\kappa}=L_{\mathrm{Edd}} \\
\end{align}$$
	- if $l>L_{\mathrm{Edd}}$ start driving winds otherwise remain in HE
## Convection
- Here we treat the system as close to spherically symmetric as possible but not (otherwise convection wouldn't work)
- Treat system as adiabatic with no heat exchange
- Consider
	- A blob of gas with $\rho_{1}$ and $P_{1}$ in a neutral environment with $\rho_{1}$ and $P_{1}$
	- This is then displaces such that it has $\rho_{e}$ and $P_{2}$ in an environment $\rho_{2}$ $P_{2}$
	- If $\rho_{e}<\rho_{2}$ then the gas cloud will fall back down (stable)
	- If $\rho_{e}>p_{2}$ it will rise causing convection which is (unstable)
	- With $\gamma_{AD}$ from [[Lecture 8 Equation of State cont.]]
	$$\begin{align}
\dfrac{\delta P_{e}}{P_{e}} & =\gamma_{\mathrm{AD}} \dfrac{\delta P_{e}}{\rho_{e}} \\
\delta P_{e} & =P_{2}-P_{1}=\left( \dfrac{dP}{dr} \right) \Delta r \\
\rho_{e} & =\rho_{1}+\delta \rho_{e} \\
\rho_{2} & =\rho_{1}+(\dfrac{\delta \rho}{\delta r})\Delta r \\ \\
\mathrm{For\;Stability\;} &  \rho_{e}>\rho_{2} \\
\rho_{1}+\delta \rho_{e} & >\rho_{1}'+\left( \dfrac{\delta \rho}{\delta r} \right) \Delta r \\
\delta \rho_{e} & >\left( \dfrac{\delta \rho}{\delta r} \right) \Delta r \\
\delta \rho_{e} & = \dfrac{\rho_{e}\delta P_{e}}{\gamma_{\mathrm{AD}}P_{e}} \\
 & =\dfrac{\rho_{e}}{\gamma_{\mathrm{AD}}P_{e}}\left( \dfrac{dP}{dr} \right) \Delta r \\
\dfrac{\rho_{e}}{\gamma_{\mathrm{AD}}P_{e}}\left( \dfrac{dP}{dr} \right) \Delta r & >\left( \dfrac{d\rho}{dr} \right) \Delta r \\
\dfrac{1}{\rho_{e}} \dfrac{d\rho}{dr} & < \dfrac{1}{\gamma_{\mathrm{AD}}P_{e}} \dfrac{dP}{dr} \\
\mathrm{Both\;sides} & \mathrm{\;are\;negative} \\
\dfrac{|1}{\rho} \dfrac{d\rho}{dr}| & > | \dfrac{\dfrac{1}{\gamma_{\mathrm{AD}}}1}{P} \frac{ \partial P }{ \partial r } | \\
\dfrac{d\log P}{dr} & > \dfrac{1}{\gamma_{\mathrm{AD}}} \frac{ \partial \log P }{ \partial r }  \\
\frac{ \partial \log \rho }{ \partial P }  & > \dfrac{1}{\gamma_{\mathrm{AD}}}
\end{align}$$
	- When this condition is violated we have convection
## Example: Schwarzschild and Ledoux Criteria
$$\begin{align}
P & =P(\rho,T,\mu) \\
\dfrac{dP}{P} & =\chi_{T} \dfrac{dT}{T}+\chi_{\rho} \dfrac{d\rho}{\rho}+\chi_{\mu} \dfrac{d\mu}{\mu} \\
\chi_{\mu} & = \left( \dfrac{d\log P}{d\log \mu} \right) _{\rho,T} \\
d\log P & =\chi_{T}d\log T+\chi_{\rho}d\log \rho + \chi_{\mu} d\log \mu \\
\dfrac{d\log \rho}{d\log P} & =\dfrac{1}{\chi_{\rho}}\left[ 1-\chi_{T} \frac{ \partial \log T }{ \partial \log P } -\chi_{\mu}\frac{ \partial \log \mu }{ \partial \log P }  \right]  \\
 & =\dfrac{1}{\chi_{\rho}}\left[ 1-\chi_{T}\nabla-\chi_{\mu}\nabla_{\mu} \right]  \\
\nabla & =\frac{ \partial \log T }{ \partial \log P }  \\
\nabla_{\mu} & =\frac{ \partial \log \mu }{ \partial \log P }  \\
\mathrm{Adiabatic\;temperature\;gradient\;}\nabla_{\mathrm{AD}} & =\dfrac{\gamma_{\mathrm{AD}}-\chi_{\rho}}{\gamma_{\mathrm{AD}}\chi_{T}} \\
\nabla_{\mathrm{AD}}\gamma_{\mathrm{AD}}\chi_{T} & =\gamma_{\mathrm{AD}}-\chi_{\rho} \\
\nabla_{\mathrm{AD}}\gamma_{\mathrm{AD}}\chi_{T}-\gamma_{AD} & =-\chi_{\rho} \\
\gamma_{\mathrm{AD}} & =-\dfrac{\chi_{\rho}}{\nabla_{\mathrm{AD}}\chi_{T}-1} \\
 & =\dfrac{\chi_{\rho}}{1-\nabla_{\mathrm{AD}}\chi_{\rho}} \\
\dfrac{1}{\gamma_{\mathrm{AD}}} & =\dfrac{1}{\chi_{\rho}}\left[ 1-\nabla_{\mathrm{AD}}\chi_{T} \right]  \\
\mathrm{Plug\;into\;stability\;criterion} \\
\dfrac{1}{\chi_{\rho}}\left[ 1-\nabla_{\mathrm{AD}}\chi_{T} \right] &  < \dfrac{1}{\chi_{\rho}}\left[ 1-\chi_{T}\nabla-\chi_{\mu}\nabla_{\mu} \right]  \\
-\nabla_{\mathrm{AD}}\chi_{T} & < -\chi_{T}\nabla-\chi_{\mu}\nabla_{\mu} \\
\nabla & <\nabla_{\mathrm{AD}}- \dfrac{\chi_{\mu}}{\chi_{T}}\nabla_{\mu}
\end{align}$$
- Ledoux criteria
	- $\nabla=\nabla_{\mathrm{rad}}$
	- $\nabla_{\mathrm{rad}}<\nabla_{\mathrm{AD}}-\dfrac{\chi_{\mu}}{\chi_{T}}\nabla_{\mu}$
- Schwarzschild criteria
	- $\nabla_{rad}<\nabla_{\mathrm{AD}}$
	- Chemical homogeneity $\nabla_{\mu}=0$
- For an ideal gas
	- $\chi_{\mu}=-1$
	- $\chi_{T}=1$
	- $\nabla_{\mathrm{rad}}<\nabla_{\mathrm{AD}}+\nabla_{\mu}$
	- $\nabla_{\mathrm{rad}}=\dfrac{3l\kappa P}{16\pi acGmT^{4}}$
	- Schwarzschild
		- $\dfrac{3l\kappa P}{16\pi acGmT^{4}}<\nabla_{\mathrm{AD}}$
- Convection happens
	1. High opacity
	2. $\dfrac{l}{m}$ is high
	3. $\nabla_{\mathrm{AD}}$ is low
## Finding how much energy is transferred
- This is an unsolved problem
- Define
	- $l_{m}$ the mixing length
	- $H_{p}=| \dfrac{dr}{d\ln P}|$ as the pressure scale height
	- $T_{e}$ is the temperature of an element
	- $T_{s}$ is the temperature of the surrounding gas
	- $v_{c}$ is the convective velocity
- In hydrostatic equilibrium
	$$\begin{align}
H_{P} & =\dfrac{P}{G\rho}  \\
\Delta T & =T_{e}-T_{s} \\
 & =\left[ \left( \frac{ \partial T }{ \partial r }  \right) _{e}-\frac{ \partial T }{ \partial m }  \right] l_{m} \\
\frac{ \partial T }{ \partial r }  & =T\frac{ \partial \log T }{ \partial r }  \\
 & = \dfrac{Td\log T}{d\log P}\frac{ \partial \log P }{ \partial \log r }  \\
 & =-\dfrac{T}{H_{P}}\nabla \\
\left( \frac{ \partial T }{ \partial r } \right) _{e} & =-\dfrac{T}{H_{P}}\nabla_{\mathrm{AD}} \\
\Delta T & =T \dfrac{l_{m}}{H_{P}}(\nabla-\nabla_{\mathrm{AD}}) \\
\Delta u & =C_{P}\Delta T \\
F_{\mathrm{conv}} & =v_{c}\rho C_{P}\Delta T
\end{align}$$
	- Estimate the velocity $v_{c}$ where there is some buoyant force  and then use kinematics
	$$\begin{align}
a & =-\dfrac{G\Delta \rho}{\rho}\approx g \dfrac{\Delta T}{T} \\
l_{m} & =\dfrac{1}{2}aT^{2} \\
v_{c} & =\left( \dfrac{1}{2}l_{m}^{2}g(\dfrac{1}{H_{P}})(\nabla-\nabla_{\mathrm{AD}}) \right) ^{1/2} \\
v_{c} & =\sqrt{ \dfrac{1}{2}g }\rho C_{P}Tl_{m}^{2}\left( \nabla-\nabla_{\mathrm{AD}} \right) ^{3/2} \dfrac{1}{H_{P}^{5/2}}
\end{align}$$
	- $(\nabla-\nabla_{AD})$ is the super adiabaticity
- Convection also mixes and brings up elements
- Convective overshooting
	- Blob of gas is moving with velocity so it doesn't immediately stop even when it reaches the criterion to 
	- It also drops off its energy heating up the area it stops so the next blob behind it can actually go a bit further than naively expected