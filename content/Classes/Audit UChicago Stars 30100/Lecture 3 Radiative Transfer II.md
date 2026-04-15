## Thermal Radiation
### Photons
- No self interactions
- Massless
- Can be created/destroyed
- Energy conservation but no photon conservation
### Two boxes connected by a bridge
- Both have the same temperature $T$
- But they have not necessarily the same [[Intensity (specific, mean)|intensity]] $I_{\nu}$ and $I'_{\nu}$
- Since they have the same $T$
	- Energy should not be flowing since it is in thermal equilibrium
	- So then $I_{\nu}=I'_{\nu}$ must be true
- We then can conclude that $I_{\nu}$ only cares about $T$ not about something like the structure of the boxes or anything else
- Then $I_{\nu}\to B_{\nu}(T)\to \mathrm{Planck\;Function}$
	- $I_{\nu}$ is isotropic
	- $I_{\nu}$ does not depend on angle
## Thermal Emission
- $S_{\nu}=B_{\nu}(T)$
- $\tau\gg1$ then $I_{\nu}\to S_{\nu}=B_{\nu}(T)$
- When $I_{\nu}=B_{\nu}(T)$ then black body radiation
### Kirchhoff's laws for thermal emission
- Given
	- $S_{\nu}=B_{\nu}(T)$
		- $S_{\nu}$ is the [[Source function]]
		- - $B_{\nu}(T)$ is the [[Planck function]]
	- $j_{\nu}=\alpha_{\nu}B_{\nu}(T)$
		- $j_{\nu}$ is the [[Emissivity]]
		- $\alpha_{\nu}$ is the [[Monochromatic extinction coefficient]] per cm path length
	- $\dfrac{dI_{\nu}}{d\tau_{\nu}}=B_{\nu}(\tau_{\nu})-I_{\nu}$ is the [[Radiation transport equation]]
- If $\tau \gg1$ (Optically thick)
	- $I_{\nu}\to S_{\nu}=B_{\nu}$
- If $\tau\ll1$ (Optically thing)
	- $I_{\nu}=I_{0}+\tau_{\nu}(B_{\nu}-I_{0})$
- Consider a hot black body with $T_{H}$ and $\tau_{1}\gg1$ surrounded by a cold black body with $T_{C}$ and $\tau_{2}\ll1$
	- $I_{\nu}=B_{\nu}(T_{H})-\tau_{2}(B_{\nu}(T_{H})-B_{\nu}(T_{C}))$
		- $B_{\nu}(T_{H})-B_{\nu}(T_{C})>0$ if $T_{H}>T_{C}$
		- $\tau_{2}>0$
		- So the second term is always negative
- Laws
	1. Hot black body $\to$ continuous radiation
	2. Hot gas $\to$ emission lines
		- Without a hot source $I_{\nu}=-\tau_{2}(-B_{\nu}T_{C})$
	3. Hot black body behind colder atmosphere $\to$ constant source with absorption
## [[Planck function]] and [[Planck function|black body]]

## Other definitions
- **Brightness temperature:** the temperature of a black body that gives you $I_{\nu}$ where $I_{\nu}=B_{\nu}(T_{B})$
- **Color temperature:** the same shape as a black body but with different normalization
- **Effective temperature:** $F=\sigma T_{eff}^4$
## Plane Parallel Atmosphere
- Atmosphere imagined as a plane with $dz$ perpendicular and $ds$ some angle $\theta$ from $dz$
	- $dz=ds\cos\theta$
	- $\mu=\cos\theta$ [[Viewing angle]]
	- $dz=\mu ds$
		- $\mu=0$ going along plane $\theta=\dfrac{\pi}{2}$
		- $\mu=1$ going out of plane $\theta=0$
		- $\mu=-1$ going into plane $\theta=\pi$
	- Photons flow towards positive $z$
	- Optical depth increases towards smaller/negative $z$
- $\dfrac{dI_{\nu}}{d\tau_{\nu}}=S_{\nu}-I_{\nu}\to \mu  \dfrac{dI_{\nu}}{d\tau_{z,\nu}}=I_{\nu}-S_{\nu}$
	- Switch signs of $I_{\nu}$ and $S_{\nu}$ as $\tau_{\nu}$ increases opposite $z$
- To solve use integrating factor $\exp(-\dfrac{\tau_{z,\nu}}{\mu})$
	- Also with boundary condition that $I_{\nu,0}=0$ since it is at the surface which has no intensity
 $$
 \begin{align}
\mu \exp \left[ -\dfrac{\tau_{z,\nu}}{\mu} \right] \dfrac{dI_{\nu}}{d\tau_{z,\nu}} & =I_{\nu}\exp \left[ -\dfrac{\tau_{z,\nu}}{\mu} \right]-S_{\nu}\exp \left[ -\dfrac{\tau_{z,\nu}}{\mu} \right] \\
\exp \left[ -\dfrac{\tau_{z,\nu}}{\mu} \right](\mu  \dfrac{dI_{\nu}}{d\tau_{z,\nu}}-I_{\nu}) & =-S_{\nu}\exp \left[ -\dfrac{\tau_{z,\nu}}{\mu} \right] \\
 \exp \left[ -\dfrac{\tau_{z,\nu}}{\mu} \right] \dfrac{dI_{\nu}}{d\tau_{z,\nu}}-\dfrac{1}{\mu}\exp \left[ -\dfrac{\tau_{z,\nu}}{\mu} \right]I_{\nu} & =-\dfrac{S_{\nu}}{\mu}\exp \left[ -\dfrac{\tau_{z,\nu}}{\mu} \right] \\
\dfrac{d}{d\tau_{z,\nu}}\exp \left[ -\dfrac{\tau_{z,\nu}}{\mu} \right]I_{\nu} & =-\dfrac{1}{\mu}S_{\nu}\exp \left[ -\dfrac{\tau_{z,\nu}}{\mu} \right] \\
\exp \left[ -\dfrac{\tau_{z,\nu}}{\mu} \right]I_{\nu}-\exp \left[ -\dfrac{\tau_{z,\nu}}{\mu} \right]I_{\nu,z} & =-\int_{\infty}^{\tau_{\nu,z}} \dfrac{1}{\mu}S_{\nu}\exp \left[ -\dfrac{\tau'_{z,\nu}}{\mu} \right]d\tau'_{z,\nu} \\
\boldsymbol{I_{\nu}} & = \boldsymbol{\int_{\tau_{z,\nu}}^\infty \dfrac{1}{\mu}S_{\nu}e^{\tau_{z,\nu}-\tau'_{z,\nu}}d\tau'_{z,\nu}}
\end{align}
$$
## Eddington-Barbier Approximation
- Want $I_{\nu}$ at $\tau_{\nu}=0$ and $\mu>0$
- Assume 
	- $S_{\nu}(\tau_{\nu})=\sum_{n=0}^{\infty}a_{n}\tau_{z,\nu}^n=a_{0}+a_{1}\tau_{z,\nu}+a_{2}\tau_{z,\nu}^{2}+\dots+a_{n}\tau_{z,\nu}^n$
$$
\begin{align}
I_{\nu}^+=I_{\nu}^{\mathrm{out going}}(\tau_{\nu}=0,\mu) &  =\int_{0}^\infty \dfrac{1}{\mu}S_{\nu}\exp \left[ -\dfrac{\tau'_{z,\nu}}{\mu} \right] d\tau_{z,\nu}' \\
I_{\nu}^+=\int_{0}^\infty \dfrac{1}{\mu}a_{0}\exp \left[ -\dfrac{\tau'_{z,\nu}}{\mu} \right]d\tau_{z,\nu}' & +\int_{0}^\infty \dfrac{1}{\mu}a_{1}\tau_{z,\nu}'\exp \left[ -\dfrac{\tau'_{z,\nu}}{\mu} \right]d\tau'_{\nu,z}+\int_{0}^\infty \dfrac{1}{\mu}a_{2}\tau'_{z,\nu}\exp \left[ -\dfrac{\tau'_{z,\nu}}{\mu} \right]d\tau'_{z,\nu}  \\
x=\dfrac{\tau'_{z,\nu}}{\mu} & \to dx=\dfrac{1}{\mu}d\tau'_{\nu,z} \\
\int_{0}^\infty x^ne^{-x}dx & =n! \\
\mathrm{First \; term} &  \: a_{0}\int_{0}^\infty x^0e^xdx=a_{0}0!=a_{0} \\
\mathrm{Second \; term} & \: a_{1}\int_{0}^\infty \mu xe^{-x}dx=a_{1}\mu1!=a_{1}\mu \\
\mathrm{Third \; term}  & \: a_{2}\int_{0}^\infty \mu^{2} x^{2}e^{-x}dx=a_{2}\mu^{2}2! =2a_{2}\mu^{2} \\
I_{\nu}^+  & =a_{0}+\mu a_{1}+2\mu^{2}a_{2}+\dots+n!\mu^na_{n}
\end{align}
$$
- Truncate to the first two terms
	- $I_{\nu}^+=a_{0}+a_{1}\mu$
	- $S_{\nu}=a_{0}+a_{1}\tau_{z,\nu}$
	- $S_{\nu}=I_{\nu}^+$ when $\mu=\tau_{z,\nu}$
- Flux
$$
\begin{align}
F_{\nu}^+=\int I_{\nu}\mu d\Omega & =\int_{0}^{2\pi}d\phi \int_{0}^{\pi/2}I_{\nu}\cos\theta \sin\theta d\theta \\
 & =2\pi \left[ \int_{0}^{\pi/2}a_{0}\cos\theta \sin\theta d\theta+\int_{0}^{\pi/2}a_{1}\cos ^{2}\theta \sin\theta d\theta \right]  \\
 & =2\pi \left[ \dfrac{1}{2}a_{0}+\dfrac{1}{3}a_{0} \right]  \\
 & =\pi[a_{0}+\dfrac{2}{3}a_{1}]
\end{align}
$$
	- $F_{\nu}^+=\pi S_{\nu}$ when $\tau_{z,\nu}=\dfrac{2}{3}$
	- For thermal emission
		- $S_{\nu}\to B_{\nu}$
		- $F_{\nu}^+=\pi B_{\nu}(T_{\mathrm{eff}})$
		- $T_{\mathrm{eff}}=T_{\mathrm{emp}}$ where $\tau_{\nu,z}=\dfrac{2}{3}$
			- That point is the inside layer of the sun where actual flux comes from
## Grey Approximation
- Assume
	- Drop all dependencies on $\nu$
		- $\tau_{\nu}\to \tau$
		- $\alpha_{\nu}\to\alpha$
		- $S_{\nu}\to S$
		- $I_{\nu}\to I$
		- $\kappa_{\nu}\to\kappa$
	- Radiative equilibrium
		- No time dependence on $S_{\nu}$ and $I_{\nu}$
		- Flux through some layer is constant
- Have a surface with one side $0\to \dfrac{\pi}{2}$ is $F^+$ and the other $\dfrac{\pi}{2}-\pi$ is $F^-$
	- Plane parallel geometry
	- $F^{+}-F^-=F_{0}$
	- $\dfrac{dF}{d\tau}=0$
- $\mu  \dfrac{dI(\mu,\tau)}{d\tau}=I(\tau,\mu)-S(\tau)$
- 0th moment
$$
\begin{align}
\int \mu  \dfrac{dI}{d\tau}d\Omega & =\int Id\Omega-\int Sd\Omega \\
\dfrac{d}{d\tau}\int \mu Id\Omega & =4\pi J-4\pi S \\
\dfrac{dI}{d\tau} & =4\pi J-4\pi S=0 \\
J & =S
\end{align}
$$
	- The [[Intensity (specific, mean)|mean intensity]] is equal to the [[Source function]]
- 1st moment
$$
\begin{align}
\int \mu^{2}  \dfrac{dI}{d\tau}d\Omega & =\int \mu Id\Omega-\int \mu Sd\Omega \\
\dfrac{d}{d\tau}\int \mu^{2}Id\Omega & =F_{0}-S\int \mu d\Omega
\end{align}
$$
	- $\int \mu^{2}Id\Omega$ is $cP$ where $P$ is the pressure
	- $\int \mu d\Omega=0$ 
$$
\begin{align}
c \frac{ \partial P }{ \partial tau } & =F_{0} \\
dP & =\dfrac{1}{c}F_{0}d\tau  \\
P & =\dfrac{1}{c}F_{0}\tau+\mathrm{const} 
\end{align} 
$$
	- Assume 
		- $$
I(\tau,\mu)=\begin{cases}
I^+(\tau) \; 0<\mu<1 \Longrightarrow (0\to \dfrac{\pi}{2}) \\
I^-(\tau) \; -1<\mu<0 \Longrightarrow (\dfrac{\pi}{2}\to \pi)
\end{cases}
$$
		- 0th moment
		$$
\begin{align}
J & =\dfrac{1}{4\pi}\int Id\Omega \\
 & =\dfrac{1}{4\pi}\int_{0}^{2\pi}\int_{0}^{\pi/2}I^+d\Omega+\int_{0}^{2\pi}\int_{\dfrac{\pi}{2}}^\pi I^{-}d\Omega \\
 &= \dfrac{1}{2}[I^++I^-]
\end{align}
$$
		- 1st moment
		$$
\begin{align}
F & =\int I\cos\theta d\Omega \\
 & =\int_{0}^{2\pi}d\phi \int_{0}^{\pi/2}I^+\cos\theta \sin\theta d\theta+\int_{0}^{2\pi}d\phi \int_{\dfrac{\pi}{2}}^\pi I^-\cos\theta \sin\theta d\theta \\
 & =2\pi(\dfrac{1}{2}I^+)+2\pi(-\dfrac{1}{2}I^-) \\
 & =\pi I^\pm \pi I^-=\pi(I^\pm I^-)=F_{0}
\end{align}
$$
		- 2nd moment
		$$\begin{align}
cP & =\int I\cos ^{2}\theta d\Omega \\
 & =\int_{0}^{2\pi}d\phi \int_{0}^{\pi/2}I^+\cos ^{2}\theta \sin\theta d\theta+\int_{0}^{2\pi}d\phi \int_{\dfrac{\pi}{2}}^{\pi}I^{-}\cos ^{2}\theta \sin\theta d\theta \\
 & =2\pi  \dfrac{1}{3}I^{+}+2\pi  \dfrac{1}{3}I^{-} \\
 & = \dfrac{2\pi}{3}(I^{+} +I^{-}) \\
P & =\dfrac{2\pi}{3c}(I^{+}+I^{-}) \\
P & =\dfrac{4\pi}{3c}J=\dfrac{4\pi}{3c}S \\
S & =\dfrac{3c}{4\pi}P \\
P & =\dfrac{1}{c}F_{0}\tau+\mathrm{const} \\
F_{0}\tau+\mathrm{const} & =\dfrac{4\pi}{3c}S
\end{align}$$
			- Need to use boundary conditions to constrain $\mathrm{const}$
				- At the surface $\tau=0$, $I^{-}=0$
			$$\begin{align}
F & =\pi(I^{+}-I^{-}) \\
F_{0} & =\pi I^{+} \\
P & =\dfrac{2\pi}{3c}(I^{+}+I^{-}) \\
P_{0} & =\dfrac{2\pi}{3c}I^{+}=\dfrac{2}{3c}F_{0} \\
\dfrac{1}{c}F_{0}\tau+\mathrm{const} & = P \\
P_{0} & =\mathrm{const}=\dfrac{2}{3c}F_{0} \\
\dfrac{4\pi}{3c}S & =\dfrac{1}{c}F_{0}\tau+\dfrac{2}{3c}F_{0} \\
\dfrac{4\pi}{3}S & =F_{0}\tau+\dfrac{2}{3}F_{0} \\
\dfrac{4\pi}{3}S & =F_{0}(\tau+\dfrac{2}{3}) \\
\boldsymbol{S} & =\boldsymbol{\dfrac{3F_{0}}{4\pi}(\tau+\dfrac{2}{3})}
\end{align}$$
			- From the Eddington Barbier approximation
				- $S=a_{0}+a_{1}\tau$
				- For the Grey approximation then 
					- $a_{0}=\dfrac{F_{0}}{2\pi}$
					- $a_{1}=\dfrac{3F_{0}}{4\pi}$
-