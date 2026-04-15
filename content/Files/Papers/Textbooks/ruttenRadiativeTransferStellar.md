
---
Title: Radiative Transfer in Stellar Atmospheres

tags:  #textbook

citekey: ruttenRadiativeTransferStellar

collection:

- Textbooks

status: unread

dateread:

---
- [x] #TODO Read chapters 2.1, 2.2, 2.5  [due:: 2025-10-06]  [completion:: 2025-10-07]
# Chapter 2 Basic Radiative Transfer
## 2.1 Radiation
### Local Amount
#### Intensity
- [[Intensity (specific, mean)|Intensity]]
- Specific intensity $I_{\nu}$ is proportionality coefficient for $dE_{\nu}$ the amount of energy transported through $dA$ at location $\vec{r}$ with $\vec{n}$ being the normal to $dA$ between times $t$ and $t+dt$ in frequency band between $\nu$ and $\nu+d\nu$ over solid angle $d\Omega$ around direction $\vec{l}$ with polar coordinates $\theta$ and $\phi$
	- $dE_{\nu}=I_{\nu}(\vec{r},\vec{l},\vec{t})(\vec{l}\cdot  \vec{n})dAdtd\nu d\Omega$ 
	- $dE_{\nu}=I_{\nu}(x,y,z,\theta,\phi,t)\cos\theta dAdtd\nu d\Omega$
	- Units $erg\;s^{-1}\;Hz^{-1}$ or $Q\;m^{-2}Hz^{-1}\;ster^{-1}$
- In wavelength $I_{\lambda}=I_{\nu}c/\lambda^{2}$
- Total intensity $I\equiv \int_{0}^{\infty}I_{\nu}d\nu$
- Intensity along a ray does not diminish with travel distance
- $I_{\nu}$ represents the macroscopic counterpart to the energy carried by a bunch of identical photons along a single "ray"
#### Mean Intensity
- Average the intensity over all directions
- $J_{\nu}(\vec{r},t)\equiv1 \dfrac{1}{4\pi}\int I_{\nu}d\Omega= \dfrac{1}{4\pi}\int_{0}^{2\pi}\int_{0}^{\pi}I_{\nu}\sin\theta d\theta d\phi$
	- Units $\mathrm{erg\;cm^{-2}\;s^{-1}\;HZ^{-1}\;ster^{-1}}$
	- When only the availability of photons is of interest
		- Ex: evaluation amount of radiative excitation and ionization
		- With axial symmetry with $z$-axis $(\theta \equiv0)$ along the axis of symmetry $d\Omega=2\pi \sin\theta d\theta=-2\pi d\mu$ with $\mu=\cos\theta$
		- $J_{\nu}(z)=\dfrac{1}{4\pi}\int_{0}^{\pi}I_{\nu}(z,\theta)2\pi \sin\theta d\theta=\dfrac{1}{2}\int_{-1}^{+1}I_{\nu}(z,\mu)d\mu$
#### Flux
- Monochromatic flux $\mathcal{F_{\nu}}$
	- $\mathcal{F_{\nu}}(\vec{r},\vec{n},t)\equiv \int I_{\nu}\cos\theta d\Omega=\int_{0}^{2\pi}\int_{0}^\pi I_{\nu}\cos\theta \sin\theta d\theta d\phi$
	- Units $\mathrm{erg\;s^{-1}\;cm^{-2}\;Hz^{-1}}$ or $\mathrm{W\;m^{-2}\;Hz^{-1}}$
	- The net flow of energy per second through an area at location $\vec{r}$ perpendicular to $\vec{n}$
- Used to specify the energetics of radiation transfer
- In principle a vector and in stellar-atmosphere the radial direction is always implied outward positive
	- $\mathcal{F}_{\nu}(z)\equiv \mathcal{F}_{\nu}^+(z)-\mathcal{F}_{\nu}^-(z)$
	- Outward flux $\mathcal{F}_{\nu}^+$
	- Inward flux $\mathcal{F}_{\nu}^-$ 
	- Both inward and outward flux are positive
- Flux emitted by non-irradiated spherical star $\mathrm{cm^{2}}$ of surface at $r=R$
	- $\mathcal{\nu}^{\mathrm{surface}}\equiv \mathcal{F}_{\nu}^+(r=R)=\pi  \bar{I_{\nu}^+}$
		- $\bar{I_{\nu}^+}$ is the intensity averaged over the apparent disk that is received by a distant observer
		- Can then right $\pi F\equiv \mathcal{F}$ such that $F=\bar{I}$ with $F$ being the *astrophysical flux*
	- Flux received at Earth from star radius R at distance D: $\mathcal{R}_{\nu}=\dfrac{4\pi R^{2}}{4\pi D^{2}}\mathcal{F}_{\nu}^\mathrm{surface}=\dfrac{\pi R^{2}}{D^{2}}\bar{I}_{\nu}$
#### Density
- Radiation energy density $u_{\nu}$
	- $u_{\nu}=\dfrac{1}{c}\int I_{\nu}d\Omega$
	- Units $\mathrm{erg\;cm^{-3}\;Hz^{-1}}$ or $\mathrm{J\;m^{-3}\;Hz^{-1}}$
- Isotropic radiation has $u_{\nu}=\dfrac{4\pi}{c}J_{\nu}$ with $I_{\nu}=J_{\nu}$ in all direction this fills a unit sphere in $\dfrac{1}{c}$ seconds
#### Pressure
- Radiation pressure $p_{\nu}$
	- $p_{\nu}=\dfrac{1}{c}\int I_{\nu}\cos ^{2}\theta d\Omega$
	- Units $\mathrm{dyne\;cm^{-2}\;Hz^{-1}}$ or $\mathrm{N\;m^{-2}\;Hz^{-1}}$
- Isotropic radiation has $p_{\nu}=\dfrac{u_{\nu}}{3}$ and $p=\dfrac{u}{3}$
- Force is exerted only along a photon pressure gradient
#### Moments of the intensity
- For axial symmetry with respect to $\mu$
	- $J_{\nu}(z)\equiv \dfrac{1}{2}\int_{-1}^{+1}I_{\nu}d\mu$
		- The mean density
		- Always positive
	- $H_{n\nu}(z)\equiv \dfrac{1}{2}\int_{-1}^{+1}\mu I_{\nu}d\mu$
		- Eddington flux
		- $H_{\nu}=\mathcal{F}_{\nu}/4\pi=F_\nu/4$
	- $K_{\nu}(z)\equiv \dfrac{1}{2}\int_{-1}^{+1}\mu^{2}I_{\nu}d\mu$
		-  $K$ integral 
		- Related to $p_{\nu}=(4\pi/c)K_{\nu}$
		- Always positive
### Local Change
#### Emission
- Monochromatic emissivity per $cm^{3}$ $j_{\nu}$ [[Emissivity|monochromatic emissivity]]
	- $dE_{\nu}\equiv j_{\nu}dV\;dt\;d\nu\;d\Omega$
		- $dE_{\nu}$ is the energy locally added to the radiation in volume $dV$ per frequency bandwidth $d\nu$ over time interval $dt$ in directions $d\Omega$
	- Units $\mathrm{erg\;cm^{-3}\;s^{-1}\;Hz^{-1}\;ster^{-1}}$
- Intensity contribution to a beam is $dI_{\nu}(s)=j_{\nu}(s)ds$
	- $s$ measures geometrical path length along the beam in cm
#### Extinction
- [[Monochromatic extinction coefficient]]
	- Specifies energy fraction taken from beam in geometrical cross-section $cm^{2}$
	- Can be defined per particle/ per gram/ per $cm^{3}$
	- Per particle
		- $dI_{\nu}\equiv-\sigma_{\nu}nI_{\nu}ds$
			- $\sigma_{\nu}$ is the monochromatic extinction coefficient or cross-section per particle 
			- $n$ is the absorber density
	- Per cm path length
		- $dI_{\nu}\equiv-\alpha_{\nu}I_{\nu}ds$
			- $\alpha_{\nu}=\sigma_{\nu}n$ is the monochromatic linear extinction coefficient ($cm^{-1}$) or the monochromatic volume extinction coefficient
	- Per gram
		- $dI_{\nu}\equiv-\kappa_{\nu}\rho I_{\nu}ds$
			- $\kappa_{\nu}$ is the monochromatic mass extinction coefficient or the cross-section per unit mass 
			- $\rho$ is the density
			- Usually used in stellar atmospheres with $\kappa_{\nu}$ being the opacity or absorption coefficient
#### Source function
- $S_{\nu}\equiv j_{\nu}/\alpha_{\nu}$ [[Source function]]
- Units $\mathrm{erg\;cm{-2}\;s^{-1}\;Hz^{-1}\;ster^{-1}}$
- With multiple processes contributing to emission/extinction sum them: $S_{\nu}^{\mathrm{tot}}=\sum j_{\nu}/\sum\alpha_{\nu}$
## 2.2 Transport Equation
### Transport along a ray
- [[Radiation transport equation]] with $s$ measured along beam in propagation direction
	- $dI_{\nu}(s)=I_{\nu}(s+ds)-I_{\nu}(s)=j_{\nu}(s)ds-\alpha_{\nu}(s)I_{\nu}(s)ds$
	- $\dfrac{dI_{\nu}}{ds}=j_{\nu}-\alpha_{\nu}I_{\nu}$
	- $\dfrac{dI_{\nu}}{\alpha_{\nu}ds}=S_{\nu}-I_{\nu}$
- First equation shows that photons do not decay spontaneously
	- Intensity along a ray does not change unless photons are added to the beam or taken away from it
- In photospheres often find Local Thermodynamic Equilibrium (LTE) ($S_{\nu}=B_{\nu}(T)$) or near LTE $(S_{\nu}\approx B_{\nu}(T))$
	- $B_{\nu}$ is the Planck function
	- here the combination $(\alpha_{\nu},S_{\nu})$ is a much more "orthogonal" parameter space to describe radiative transfer than $(\alpha_{\nu},j_{\nu})$
	- $(\alpha_{\nu},j_{\nu})$ 
		- Could vary orders of magnitude over narrow extent of a spectral line 
		- Their variations cancel completely or closely in the ration $S_{\nu}=j_{\nu}/\alpha_{\nu}$
	- Instead use $(\alpha_{\nu},S_{\nu})$
		- $\alpha_{\nu}$
			- Details atomic particle properties
			- Sets transparency of the medium
		- $S_{\nu}$
			- Describes the thermodynamic state of the medium as an ensemble of particles and photons
#### Optical length and thickness
- Monochromatic optical path length $d\tau_{\nu}$ measured along the beam and across a layer with thickness $ds$
	- $d\tau_{\nu}(s)\equiv\alpha_{\nu}(s)ds$
- Monochromatic optical thickness for a medium with total thickness $D$ measured along the beam
	- $\tau_{\nu}(D)=\int_{0}^D\alpha_{\nu}(s)ds$
- For extinction only $(j_{\nu}=0)$
	- $I_{\nu}(D)=I_{\nu}(0)e^{-\tau_{\nu}(D)}$
- Transition between small and large extinction lies at the $\dfrac{1}{e}$ value or where $\tau_{\nu}=1$
	- Optically thick: $\tau_{\nu}(D)>1$
	- Optically thin $\tau_{\nu}(D)<1$
- Optical photon mean free path $\langle \tau_{\nu}(s) \rangle$
	- $\langle \tau_{\nu}(s) \rangle \equiv \dfrac{\int_{0}^{\infty}\tau_{\nu}(s)e^{-\tau_{\nu}(s)}d\tau_{\nu}(s)}{\int_{0}^{\infty}e^{-\tau_{\nu}(s)d\tau_{\nu}(s)}}=1$
- Geometrical photon mean free path in homogenous medium
	- $l_{\nu}=\dfrac{\langle \tau_{\nu}(s) \rangle}{\alpha_{\nu}}=\dfrac{1}{\alpha_{\nu}}=\dfrac{1}{\kappa_{\nu}\rho}$
	- In inhomogeneous medium this represents the local free path
-  $\dfrac{dI_{\nu}}{\alpha_{\nu}ds}=S_{\nu}-I_{\nu}$ with $\tau_{\nu}$ and $S_{\nu}$
	- $\dfrac{dI_{\nu}}{d\tau_{\nu}}=S_{\nu}-I_{\nu}$
- Then get the integral form of the transport equation
	- $I_{\nu}(\tau_{\nu})=I_{\nu}(0)e^{-\tau_{\nu}}+\int_{0}^{\tau_{\nu}}S_{\nu}(t_{\nu})e^{-(\tau_{\nu}-t_{\nu})}dt_{\nu}$
#### Homogeneous medium
- A medium where $S_{\nu}$ does not vary with location
- $I_{\nu}(D)=I_{\nu}(0)e^{-\tau_{\nu}(D)}+S_{\nu}(1-e^{-\tau_{\nu}(D)})$
- If optically thick then $I_{\nu}(D)\approx S_{\nu}$
- If optically thin $I_{\nu}(D)\approx I_{\nu}(0)+[S_{\nu}-I_{\nu}(0)]\tau_{\nu}(D)$
### Transport through an atmosphere
#### Optical depth
- Now use $\tau_{\nu}$ as radial [[Optical depth]]
	- Often use axial symmetry with z-axis radial outward along axis of symmetry
	- Viewing angle $\mu$ is defined as $\mu \equiv \cos\theta$
		- $\theta$ is the angle between line of sight and z axis
		- Plane parallel stratification is assumed so $\mu$ doesn't vary along the line of sight
	- For geometrical location $z=z_{0}$ is
		- $\tau_{\nu}(z_{0})=\int_{\infty}^{z_{0}}-\alpha_\nu dz=\int_{z_{0}}^{\infty}\alpha_{\nu}dz$
		- Measures optical depth along radial line of sight with $\mu=1$ from $\tau_{\nu}=0$ 
	- For a frequency within a spectral line the total optical depth
		- $d\tau_{\nu}^{\mathrm{total}}=-(\alpha_{\nu}^c+\alpha_{\nu}^l)dz=(1+\eta_{\nu})d\tau_{\nu}^c$
			- $\eta_{\nu}\equiv\alpha_{\nu}^l/\alpha_{\nu}^c$
			- $\tau_{\nu}^c$ is the continuum optical depth
- Sometimes use angle-dependent optical depth $\tau_{\nu \mu}$
	- $d\tau_{\nu \mu}\equiv-\alpha_{\nu} \dfrac{dz}{|\mu|}$
	- Measured along viewing direction
	- $\mu>0$ outwards for outgoing photons
	- $\mu<0$ for incoming photons
#### Standard plane-parallel transport equation
- $\mu  \dfrac{dI_{\nu}}{d\tau_{\nu}}=I_{\nu}-S_{\nu}$
#### Formal solution
- For axial symmetry the inward directed intensity ($\mu<0$) with $t_{\nu} \equiv \int_{\infty}^z-\alpha_{\nu}(z)dz$ as $\tau_{\nu}$ like integration variable
	- $I_{\nu}^-(\tau_{\nu},\mu)=-\int_{0}^{\tau_{\nu}}S_{\nu}(t_{\nu})e^{-1t_{\nu}-\tau_{\nu}/\mu}dt_{\nu}/\mu$
- For outward directed intensity $(\mu>0)$
	- $I_{\nu}^+(\tau_{\nu},\mu)=+\int_{\tau_{\nu}}^\infty S_{\nu}(t_{\nu})e^{-(t_{\nu}-\tau_{\nu})/\mu}dt_{\nu}/\mu$
#### Eddington-Barbier Approximation
- Emergent intensity at stellar surface $(\tau_{\nu}=0,\mu>0)$
	- $I_{\nu}^+(\tau_{\nu}=0,\mu)=\int_{0}^\infty S_{\nu}(t_{\nu})e^{-t_{\nu}/\mu}dt_{\nu}/\mu$
- Using
	- $S_{\nu}(\tau_{\nu})=\sum_{n=0}^{\infty}a_{n}\tau_{\nu}^n=a_{0}+a_{1}\tau_{\nu}+a_{2}\tau_{\nu}^{2}+\dots+a_{n}\tau_{\nu}^n$
	- $\int_{0}^\infty x^n\exp(-x)dx=n!$
- Get $I_{\nu}^+(\tau_{\nu}=0,\mu)a_{0}+a_{1}\mu+2a_{2}\mu^{2}+\dots+n!a_{n}\mu^n$
- Then $I_{\nu}^+(\tau_{\nu}=0,\mu)\approx S_{\nu}(\tau_{\nu}=\mu)$
	- This is exact when $S_{\nu}$ varies linearly with $\tau_{\nu}$
- Also $\mathcal{F}_{\nu}^+(0)\approx \pi S_{\nu}(\tau_{\nu}=\dfrac{2}{3})$
## 2.3 Line Transitions
- Bound-bound transitions between the lower $l$ and upper $u$ energy levels of a discrete electromagnetic energy-storing system can occur as:
	- Radiative excitation
	- Spontaneous radiative deexcitation
	- Induced radiative deexcitation
	- Collisional excitation
	- Collisional deexcitation
### Einstein Coefficients
#### Spontaneous deexcitation
- Einstein coefficient: $A_{ul}\equiv$ transition probability for spontaneous deexcitation from state $u$ to state $l$ per sec per particle in state $u$ 
- Mean lifetime of particles in state $u$ (without collisions or any other transitions other than the $ul$ one)
	- $\Delta t=\dfrac{1}{A_{ul}}\mathrm{s}$
	- Spread in energy: $\Delta E=\dfrac{h}{(2\pi\Delta t)}$ or $\Delta \nu=\dfrac{\gamma^{\mathrm{rad}}}{2\pi}$
		- $\gamma^{\mathrm{rad}}\equiv \dfrac{1}{\Delta t}$ is the radiative damping constant
- Broadening process defines an emission probability distribution $\psi(\nu-\nu_{0})$ around line center at $\nu=\nu_{0}$
	- $\psi(\nu-\nu_{0})= \dfrac{\gamma^{\mathrm{rad}}/4\pi^{2}}{(\nu-\nu_{0})^{2}+(\gamma^{\mathrm{rad}}/4\pi)^{2}}$
	- Units of $\mathrm{Hz}$
- $A_{ul}$ is a summation over the profile
	- Describes the transition probability for the whole line
	- The probability per unit of bandwidth is given by $A_{ul}\psi(\nu-\nu_{0})$
- Spontaneous deexcitation rate per $cm^{3}$ is given by $\nu_{u}A_{ul}$
- Emission-profile shape function
	- For statics atmosphere and each deexcitation is independent of the preceding process(es)
		- Probability distribution: $\psi(\nu-\nu_{0})=\dfrac{H(a,v)}{\sqrt{ \pi }\Delta \nu_{D}}$
			- $H(a,v)$ is the Voigt function
				- Gaussian at line center from Doppler shifts from Maxwellian motions 
				- Extended Lorentzian wings from collisional perturbations
		- Doppler width $\Delta \nu_{D}\equiv \dfrac{\nu_{0}}{c}\sqrt{ \dfrac{2kT}{m} }$
			- $m$ is particle mass
	- **Fully incoherent:** When frequency redistribution over the line profile is incomplete the profile is more complex
		- If photon that is emitted per deexcitation has some correlation with proton that was previously excited
	- **Fully coherent:** Also more complex when there is coherent scattering without frequency change
#### Radiative excitation
- Einstein coefficient $B_{lu}$
	- $B_{lu}\bar{J}_{\nu_{0}}^\varphi \equiv$ the number of radiative excitations from state $l$ to state $u$ per sec per particle in state $l$
	- $\nu_{0}$ defines a specific spectral line of which the extinction profile $\varphi (\nu-\nu_{0})$ is used in the weighting of the angle-averaged exciting radiation field over the spectral extent of the line
		- $\bar{J}_{\nu_{0}}^\varphi \equiv \int_{0}^\infty J_{\nu}\varphi(\nu-\nu_{0})d\nu$
		- More general $\bar{J}_{\nu_{0}}^\varphi \equiv \dfrac{1}{2}\int_{0}^\infty \int_{-1}^{+1}I_{\nu}\varphi(\nu-\nu_{0})d\mu d\nu$
#### Induced deexcitation
- Einstein coefficient $B_{ul}$
	- $B_{ul}\bar{J}_{\nu_{0}}^\chi \equiv$ number of induced radiative deexcitations from state $u$ to state $l$ per sec per particle in state $u$
- Very similar to $B_{lu}$
	- Frequency averaging $\bar{J}_{\nu_{0}}^\chi \equiv \dfrac{1}{2} \int_{0}^\infty \int_{-1}^{+1}I_{\nu}\chi(\nu-\nu_{0})d\mu d\nu=\int_{0}^\infty J_{\nu}\chi(\nu-\nu_{0})d\nu$
		- $\chi(\nu-\nu_{0})$ is the area normalized profile shape for induced emission
#### Collisional excitation and deexcitation
- Einstein coefficients $C_{lu}$ and $C_{ul}$
	- $C_{lu}\equiv$ number of collisional excitations from state $l$ to state $u$ per sec per particle in state $l$
	- $C_{ul}\equiv$ number of collisional deexcitations from state $u$ to state $l$ per sec per particle in state $u$
- Electron collisions causing transitions from state $i$ to $j$ have transition rates
	- $n_{i}C_{ij}-n_{i}N_{e}\int_{\nu_{0}}^\infty\sigma_{ij}(v)vf(v)dv$
		- $N_{e}$ is the electron density
		- $\sigma_{ij}(v)$ the electron collision cross-section
		- $f(v)$ the area normalized velocity distribution
		- $v_{0}$ the threshold velocity with $(\dfrac{1}{2}mv_{0}^{2})=h\nu_{0}$
#### Einstein relations
- $\dfrac{B_{lu}}{B_{ul}}=\dfrac{g_{u}}{g_{l}}$
- $\dfrac{A_{ul}}{B_{ul}}=\dfrac{2h\nu^{3}}{c^{2}}$
- $\dfrac{C_{ul}}{C_{lu}}=\dfrac{g_{l}}{g_{u}}e^{E_{ul}/kT}$
	- $E_{ul}$ is the transition energy
- First 2 ratios hold universally
- Last ratio holds outside of TE if the Maxwell distribution holds
### Volume coefficients
#### Extinction
- The monochromatic line extinction coefficient ([[Monochromatic extinction coefficient]]) per cm path length
	- $\alpha_{\nu}^l=\dfrac{h\nu}{4\pi}\left[ n_{l}B_{lu}\varphi(\nu-\nu_{0})-n_{u}B_{ul}\chi(\nu-\nu_{0}) \right]$
	- $=\dfrac{h\nu}{4\pi}n_{l}B_{lu}\varphi(\nu-\nu_{0})\left[ 1- \dfrac{n_{u}g_{l}\chi(\nu-\nu_{0})}{n_{l}g_{u}\varphi(\nu-\nu_{0})} \right]$
	- Term in square brackets corrects for induced emission
- Total line extinction coefficient: $\alpha_{\nu_{0}}^l\equiv \int_{0}^\infty\alpha_{\nu}^ld\nu=\dfrac{h\nu_{0}}{4\pi}(n_{l}B_{lu}-n_{u}B_{ul})$
- Monochromatic line extinction coefficient per particle (without correction for induced emission)
	- $\sigma_{\nu}^l=\dfrac{h\nu}{4\pi}B_{lu}\varphi(\nu-\nu_{0})$
- Total line extinction coefficient per particle
	- $\sigma_{\nu_{0}}^l=\int_{0}^\infty\sigma_{\nu}^ld\nu=\dfrac{h\nu_{0}}{4\pi}B_{lu}=\dfrac{\pi e^{2}}{m_{e}c}f_{lu}=0.02654f_{lu}\mathrm{\;cm^{2}\;Hz}$
		- $f_{lu}$ is the classical dimensionless oscillator strength
		- Coefficients are ensemble quantities
#### Emission
- Monochromatic line emissivity without induced emission
	- $j_{\nu}^l=\dfrac{h\nu}{4\pi}n_{u}A_{ul}\psi(\nu-\nu_{0})$
- Total line emissivity
	- $j_{\nu_{0}}^l=\int_{0}^\infty j_{\nu}^ld\nu=\dfrac{h\nu_{0}}{4\pi}n_{u}A_{ul}$
#### Source function
- Monochromatic line source function
	- $S_{\nu}^l\equiv \dfrac{j_{\nu}^l}{\alpha_{\nu}}^l=\dfrac{n_{u}A_{ul}\psi(\nu-\nu_{0})}{n_{l}B_{lu}\varphi(\nu-\nu_{0})-n_{u}B_{ul}\chi(\nu-\nu_{0})}$
	- $S_{\nu_{0}}^l=\dfrac{n_{u}A_{ul}}{n_{l}B_{lu}-n_{u}B_{ul}}=\dfrac{2h\nu_{0}^{3}}{c^{2}} \dfrac{1}{\dfrac{g_{u}n_{l}}{g_{l}n_{u}}-1}$

## 2.4 Continuum Transitions
### Inelastic processes
#### Bound-free transitions
- For hydrogen and hydrogen-like ions extinction cross-section in $\mathrm{cm}^{2}$ per particle is 
	- Kramers' formula
	- $\sigma_{\nu}^{\mathrm{bf}}=2.815\times10^{29} \dfrac{Z^4}{n^5\nu^{3}}g_{\mathrm{bf}}$
		- $\nu\geq \nu_{0}$
		- $n$ is the principle quantum number of the level $i$ from which the atom/ion is ionized
		- $Z$ is the ion charge
		- $\nu$ in Hz
		- $g_{\mathrm{bf}}$ is the dimensionless Gaunt factor
			- Quantum mechanical correction factor of order unity
- For more complex atoms/ions
	- Bound-free cross-sections don't have as simple of a $\nu^{-3}$ dependence
	- Have peaks at "resonances" from other electrons in the shell
- Volume extinction coefficient
	- $\alpha_{\nu}^{\mathrm{bf}}=\sigma_{\nu}^\mathrm{bf}n_{i}(1-e^{-h\nu/kT})$
		- $n_{i}$ is the density of particles in the ionizing level
- Bound-free extinction peaks are much lower than the bound-bound resonance line peaks
#### Free-free transitions
- Have $S_{\nu}=B_{\nu}$ when the Maxwell velocity distribution holds
- Thermal Bremsstrahlung
- For simple atoms
	- $\sigma_{\nu}^\mathrm{ff}=3.7\times10^8N_{e} \dfrac{Z^{2}}{T^{1/2}\nu^{3}}g_{ff}$
	- $Z$ is the ion charge
	- $N_{e}$ is the electron density
	- $N_{ion}$ is the ion density
	- $g_{ff}$ is the Gaunt factor of order unity
	- No threshold frequency
- Volume extinction coefficient
	- $\alpha_{\nu}^\mathrm{ff}=\sigma_{\nu}^\mathrm{ff}N_{ion}(1-e^{-h\nu/kT})$
- Wien limit
	- $\alpha_{\nu}^{\mathrm{ff}}\approx3.7\times10^8N_{e}N_{ion} \dfrac{Z^{2}}{T^{1/2}\nu^{3}}g_{\mathrm{ff}}$
	- $\alpha_{\nu}^{\mathrm{ff}}\sim \nu^{-3}$
- Rayleigh-Jeans limit
	- $\alpha_{\nu}^{\mathrm{ff}}\approx0.018N_{e}N_{ion} \dfrac{Z^{2}}{T^{3/2}\nu^{2}}g_{\mathrm{ff}}$
	- $\alpha_{\nu}^\mathrm{ff}\sim \nu^{-2}$
### Elastic processes
#### Thomson scattering
- For low-energy photons and electrons
	- Frequency independent extinction cross section per electron
		- $\sigma_{\nu}^T\equiv\sigma^T=\dfrac{8\pi}{3}r_{e}^{2}=6.65\times10^{-24}\mathrm{cm^{2}}$
	- Volume extinction coefficient
		- $\alpha_{\nu}^T=\sigma^TN_{e}$
			- $N_{e}$ is the electron density
- For high energy photons
	- Thomson scattering is replaced by Compton scattering
- For high-energy electrons
	- Thomson scattering is replaced by inverse Compton scattering
- Thomson scattering is the major source of continuous extinction in the atmospheres of hot stars
#### Rayleigh scattering
- Extinction cross-section of photons $\nu\ll \nu_{0}$ by bound electrons with characteristic bounding energy $h\nu_{0}$
	- $\sigma_{\nu}^\mathrm{R}\approx f_{lu}\sigma^T(\dfrac{\nu}{\nu_{0}})^4$
		- $f_{lu}$ is the oscillator strength
		- $f_lu$ and $\nu_{0}$ characterize the major bound-bound resonance transition of the bound electron
- Volume extinction coefficient by hydrogen atoms 
	- $\alpha_{\nu}^R=\sigma_{\nu}^RN_{H}$
		- $N_{H}$ is the density of hydrogen atoms
#### Redistribution
- Thomson and Rayleigh scattering are coherent
	- So elastic or monochromatic
	- Photon gets redirected but keeps its frequency
- In hot stars (any high temperature)
	- Thomson scattering isn't truly coherent due to Doppler shifts imposed by electrons
	- Obliterate the Fraunhofer lines in the spectrum of the solar K corona
## 2.5 Local Thermodynamic Equilibrium (LTE)
- Under [[Local thermal equilibrium|LTE]]
	- All material energy partitioning (atomic, ionic, and molecular level populations) are given by the Saha Boltzmann statistics defined by the local temperature as if the location sits within a TE enclosure
	- Assume validity of all TE material distribution laws at the local temperature
	- $S_{\nu_{0}}^l=B_{\nu_{0}}$ follows
### Matter in LTE
#### Maxwell distribution
- Per species of particles with max $m$ the maxwell distribution for velocity components in the $x$ direction
	- $\left[ \dfrac{n(v_{x})}{N}dv_{x} \right]_{\mathrm{LTE}}=\left( \dfrac{m}{2\pi kT} \right)^{1/2}e^{-(1/2)mv^{2}_{x}/kT}dv_{x}$
	- $N$ is total number of particles with mass $m$ per $\mathrm{cm^{3}}$
	- $[\dots]_{\mathrm{LTE}}$ implies evaluation of this TE distribution law at the local value of the kinetic electron temperature $T_{e}$
	- In LTE $T_{e}$ is equal to all other material temperatures so $T\equiv T_{e}$
	- Gaussian shape
- For magnitude of particle speeds (ignoring direction)
	- $\left[ \dfrac{n(v)}{N}dv \right]_{\mathrm{LTE}}=\left( \dfrac{m}{2\pi kT} \right)^{3/2}4\pi v^{2}e^{-(1/2)mv^{2}/kT}dv$
	- Has a high velocity tail
	- Peak defines most probable speed $v_{p}=\sqrt{ \dfrac{2kT}{m} }$
	- Average speed $\langle v \rangle=\sqrt{ \dfrac{3kT}{m} }$
#### Boltzmann distribution
- Boltzmann excitation distribution
	- $\left[ \dfrac{n_{r,s}}{n_{r,t}} \right]_{\mathrm{LTE}}=\dfrac{g_{r,s}}{g_{r,t}}e^{-(\chi_{r,s}-\chi_{r,t})/kT}$
		- $n_{r,s}$ is the number of atoms per $\mathrm{cm^{3}}$ in level $s$ of ionization stage $r$
		- $g_{r,s}$ is the statistical weight of level $s$ in stage $r$ 
		- $\chi_{r,s}$ is the excitation energy of level $s$ in stage $r$ measured from the ground level $(r,1)$ of stage $r$
		- $\chi_{r,s}-\chi_{r,t}=h\nu$ for radiative transition between levels $(r,s)$ and $(r,t)$ with level $s$ "higher" (more internal energy) than level $t$
## 2.6 Non-Local Thermodynamic Equilibrium (NLTE)
- [x] #TODO Read 2.6 Rutten  [due:: 2025-10-29]  [completion:: 2025-10-28]
### Statistical Equilibrium (SE)
#### Rate equations
- SE implies that radiation fields and level populations do not vary with time
	- $\dfrac{dn_{i}(\vec{r})}{dt}=\sum_{j\neq i}^{N}n_{j}(\vec{r})P_{ji}(\vec{r})-n_{i}(\vec{r})\sum_{j\neq i}^{N}P_{ij}(\vec{r})=0$
	- $n_{i}$ is the population of a particular level
	- $N$ is the total number of levels important for population of $n_{i}$
	- $P_{ij}$ is the transition rates for radiative and collisional processes
		- $P_{ij}=R_{ij}+C_{ij}$
		- For bound-bound
			- $R_{ij}=A_{ij}+B_{ij}\bar{J}_{\nu_{0}}$
#### Transport equations
- Intensities are given by
	- $\dfrac{\mu dI_{\nu}(\vec{r},\mu)}{d\tau_{\nu}(\vec{r})}=-S_\nu(\vec{r})+I_{\nu}(\vec{r},\mu)$
	- With directions $\mu$
- A given transition of interest can be influenced by many other transitions in the same particle species or in other atoms/molecules with overlapping frequencies
#### Time-dependent transfer
- When SE doesn't hold population equations must satisfy overall particle conservation rather than population conservation
- Equations become time dependent
- Systematic flows make [[Source function]] anisotropic
#### Multi-dimensional transfer
- Due to lateral inhomogeneity from time dependence now must go from 1D to 2-3D
- Requires radiative hydrodynamics
### NLTE Descriptions
#### Departure coefficients
- NLTE population departure coefficients $b_{i}$
	- $b_{l}=\dfrac{n_{l}}{n_{l}^{\mathrm{LTE}}}$
	- $b_{u}=\dfrac{n_{u}}{n_{u}^{\mathrm{LTE}}}$
	- $n$ is the actual population
	- $n^{\mathrm{LTE}}$ is the Saha-Boltzmann values for lower/upper level
##### Bound-bound source function
- Line source function becomes
	- $S_{\nu}^{l}=\dfrac{2h\nu^{3}}{c^{2}} \dfrac{\psi/\varphi}{\dfrac{b_{l}}{b_{u}}\exp \left[ \dfrac{h\nu}{kT} \right]-\dfrac{\chi}{\varphi}}$
- For complete redistribution $\chi_{\nu}=\psi_{\nu}=\varphi_{\nu}$
	- $S_{\nu_{0}}^{l}=\dfrac{2h\nu_{0}^{3}}{c^{2}} \dfrac{1}{\dfrac{b_{l}}{b_{u}}\exp \left[ \dfrac{h\nu_{0}}{kT} \right]-1}$
	- Doesn't depend on frequency
	- Wien regime
		- $S_{\nu_{0}}^{l}\approx \dfrac{b_{u}}{b_{l}}B_{\nu_{0}}$ 
			- $\dfrac{b_{u}}{b_{l}}$ is the inverse fugacity ratio 
#### Bound-bound extinction
- [[Monochromatic extinction coefficient]] becomes
$$\begin{align}
\alpha_{\nu}^{l}=\dfrac{\pi e^{2}}{m_{e}c}b_{l}n_{l}^{\mathrm{LTE}}f_{lu}\varphi(\nu-\nu_{0})\left[ 1- \dfrac{b_{u}}{b_{l}} \dfrac{\chi}{\varphi} \exp \left[ -\dfrac{h\nu}{kT} \right]  \right]
\end{align}$$
- $\dfrac{\chi}{\varphi}=1$ for complete distribution
- Wien approximation
	- $\alpha_{\nu}^{l}\approx b_{l}\left[ \alpha_{\nu}^{l} \right]_{\mathrm{LTE}}$
- Total line extinction coefficient becomes
	$$\begin{align}
\alpha_{\nu_{0}}^{l} & =\dfrac{\pi e^{2}}{m_{e}c} b_{l}n_{l}^{\mathrm{LTE}}f_{lu}\left[ 1- \dfrac{b_{u}}{b_{l}} \exp \left( -\dfrac{h\nu_{0}}{kT} \right)  \right] \\
  & \approx b_{l}\left[ \alpha_{\nu_{0}}^{l} \right] _{\mathrm{LTE}}
\end{align}$$
#### Laser regime
- Rayleigh-Jeans part $(h\nu\ll kT)$ $\alpha_{\nu_{0}}^{l}$ becomes negative for sufficient excess $b_{u}>b_{l}$ from correction for stimulated emission
- Light amplification occurs along the beam (lasering)
#### Bound-free source function
- General monochromatic bound-free source function
	- $S_{\nu}^{\mathrm{bf}}=\dfrac{2h\nu^{3}}{c^{2}} \dfrac{1}{\dfrac{b_{i}}{b_{c}}\exp \left[ \dfrac{h\nu}{kT} \right]-1}$
	- $i$ index indicates ionizing level
	- $c$ index indicate the level of the next stage of ionization 
- Wien regime
	- $S_{\nu}^{\mathrm{bf}}\approx  \dfrac{b_{c}}{b_{i}}B_{\nu}$
#### Bound-free extinction
- Monochromatic bound-free extinction coefficient per cm (corrected for induced emission)
	- $\alpha_{\nu}^{\mathrm{bf}}=b_{i}n_{i}^{\mathrm{LTE}}\sigma_{ic}(\nu)\left( 1-\dfrac{b_{c}}{b_{i}}\exp \left[ -\dfrac{h\nu}{kT} \right] \right)$
#### Bound-free emission
- Monochromatic bound-free emissivity
	- $j_{\nu}^{\mathrm{bf}}=\alpha_{\nu}^{\mathrm{bf}}S_{\nu}^{\mathrm{bf}}=b_{c}\left[ \alpha_{\nu}^{\mathrm{bf}} \right]_{\mathrm{LTE}}B_{\nu}$
#### Free-free source function, extinction, emission
$$\begin{align}
S_{\nu}^{\mathrm{ff}} & =B_{\nu} \\
\alpha_{\nu}^{\mathrm{ff}} & =b_{c}n_{c}^{\mathrm{LTE}}\sigma_{\nu}^{\mathrm{LTE}}\left( 1-\exp \left[ -\dfrac{h\nu}{kT} \right]  \right)  \\
j_{\nu}^{\mathrm{ff}} & =b_{c}\left[ \alpha_{\nu}^{\mathrm{ff}} \right] _{\mathrm{LTE}}B_{\nu}
\end{align}$$
#### Discussion
- The formal expressions don't specify which parts of the source function is controlled by $B_{\nu}$ or by $J_{\nu}$
- Express overall result in term of population departures relative to LTE equilibrium values
- Only free-free photon emission/extinction is strictly kinetic
#### Formal temperatures
- Another way to formalize the deviation of the source function from the Planck function is to use formal NLTE temperatures $T_{x}$
	- $T_{x}=T_{e}$ in LTE
	- $T_{x}\neq T_{e}$ outside LTE
- Excitation temperature $T_{\mathrm{exc}}$ 
	- $\dfrac{n_{u}}{n_{l}}\equiv \dfrac{g_{u}}{g_{l}}\exp \left[ -\dfrac{h\nu}{kT_{\mathrm{exc}}} \right]$
	- Temperature to be entered into the Boltzmann distribution to obtain the actual population ratios between levels within the same stage of ionization
- Ionization temperature $T_{\mathrm{ion}}$
	- The temperature that must be formally entered instead of $T_{e}$ in the Saha distribution to obtain the actual ionization balance between two successive stages of ionization
	- $S_{\nu}^{\mathrm{bf}}\equiv\dfrac{2h\nu^{3}}{c^{2}} \dfrac{1}{\exp \left[ \dfrac{h\nu}{kT_{\mathrm{ion}}} \right]-1}=B_{\nu}(T_{\mathrm{ion}})$
- Radiation temperature $T_{\mathrm{rad}}$
	- Expresses mean intensity onto the Planck function
	- $B_{\nu}(T_{\mathrm{rad}})\equiv J_{\nu}$
- Brightness temperature $T_{b}$
	- Expresses observed intensity into the Planck function
	- $B_{\nu}(T_{b})\equiv I_{\nu}$
	- $T_{b}=T_{e}(\tau_{\nu}=\mu)$ 
		- For observed intensity from optically thick plane-parallel LTE medium with the Eddington-Barbier approximation
- Effective temperature $T_{\mathrm{eff}}$
	- $\pi B(T_{\mathrm{eff}})=\sigma T_{\mathrm{eff}}^{4}\equiv \mathcal{F}_{\mathrm{surface}}$
### Coherent Scattering
- Principal NLTE situation: in stellar atmosphere where scattering is important
- Monofrequent scattering is called. coherent
	- Isotropic and monochromatic
	- No frequency shift between incoming and outgoing photon
#### Two-level atoms
- Five bound-bound processes combined
	- Photon scattering: radiative excitation followed by spontaneous or induced radiative deexcitation
	- Photon creation: collisional excitation followed by spontaneous or induced radiative deexcitation. Makes a new photon from KE
	- Photon destruction: radiative excitation followed by collisional deexcitation. Thermalizes a photon into KE
#### Coherently scattering medium
- Assume
	- Medium consists purely of two-level atoms 
	- Scattering is coherent
- Photon creation and photon destruction pairs couple the radiation energy to local KE (constitute thermal processes)
- Strength of coupling depends on relative frequency of thermal and scattering sequences 
	- Can rewrite $\alpha_{\nu}^{l}=\alpha_{\nu}^{a}+\alpha_{\nu}^{s}$
	- $\alpha_{\nu}^{a}$ photon destruction (absorption)
	- $\alpha_{\nu}^{s}$ photon scattering
#### Destruction probability
- Destruction probability per extinction for coherently scattering 2 level atoms
	- $\epsilon_{\nu}\equiv \dfrac{\alpha_{\nu}^{a}}{\alpha_{\nu}^{a}+\alpha_{\nu}^{s}}$
- Scattering probability per extinction
	- $1-\epsilon_{\nu}= \dfrac{\alpha_{\nu}^{s}}{\alpha_{\nu}^{a}+\alpha_{\nu}^{s}}$
#### Effective path, thickness, depth
- Effective path length which a photon has come away from its origin after $N$ randomly directed scattering steps
	- $l_{\nu}^{*}\approx \sqrt{ N }l_{\nu}$
	- $l_{\nu}=\dfrac{\langle \tau_{\nu} \rangle}{\alpha_{\nu}}=\dfrac{1}{\alpha_{\nu}^{a}+\alpha_{\nu}^{s}}$ is the free path per step
- Photon travels on average $N=\dfrac{1}{\epsilon_{\nu}}$ steps between creation and destruction
- Characteristic diffusion/thermalization length or effective free path
	- $\lambda_{\nu}^{*}\approx l_{\nu}/\sqrt{ \epsilon_{\nu} }$
- Effective optical thickness
	- $\tau_{\nu}^{*}=\sqrt{ \epsilon_{\nu} }\tau _\nu$
	- $\tau_{\nu}$ is the optical thickness of the layer
- In homogenous medium $(\mathrm{constant\;\epsilon_{\nu}})$
	- $\tau_{\nu}^{*}\approx1$ characteristic depth where newly created photons embark on scattering sequences eventually going to and out of the surface
	- $\tau_{\nu \mu}\approx1$ marks characteristic depth where last scattering interaction and escape in direction $\mu$
	- For $\epsilon_{\nu}\ll1$
		- $\tau_{\nu \mu}\approx1$ escape depth is much shallower than the $\tau_{\nu}^{*}\approx1$ characteristic creation depth which is at $\tau_{\nu}\approx1/\sqrt{ \epsilon_{\nu} }$
		- Escaping photons do not portray conditions at the locations from where they are observed
#### Source function
- When velocity distribution is Maxwellian monochromatic 2level line source function equals the Planck function
	- $j_{\nu}^{a}=\alpha_{\nu}^{a}B_{\nu}$
- In pure coherent each photon redirected into the beam represents a photon taken out of the beam with arbitrary direction
	- Process source function equals photon supply  per steradian
	- $j_{\nu}^{S}=\alpha_{\nu}^{S}J_{\nu}$
- Combined 2 level atom line source function with mixture of thermal absorption and coherent scattering
	- $S_{\nu}^{l}=\dfrac{j_{\nu}^{a}+j_{\nu}^{S}}{\alpha_{\nu}^{a}+\alpha_{\nu}^{S}}=(1-\epsilon_{\nu})J_{\nu}+\epsilon_{\nu}B_{\nu}$
- Complete redistribution
	- $S_{\nu_{0}}^{l}=(1-\epsilon_{\nu_{0}})\bar{J}_{\nu_{0}}^{\varphi}+\epsilon_{\nu_{0}}B_{\nu_{0}}$
		- $\epsilon_{\nu_{0}}\equiv \dfrac{\alpha_{\nu_{0}}^{a}}{\alpha_{\nu_{0}^{a}}+\alpha_{\nu_{0}}^{S}}$ is the profile summed photon destruction probability
#### Transport equation
- $dI_{\nu}=-\alpha_{\nu}^{a}I_{\nu}ds-\alpha_{\nu}^{s}I_{\nu}ds+\alpha_{\nu}^{a}B_{\nu}ds+\alpha_{\nu}^{s}J_{\nu}ds$
- With optical thickness $d\tau_{\nu}\equiv\alpha_{\nu}^{l}$, $ds=(\alpha_{\nu}^{a}+\alpha_{\nu}^{s})ds$
	- $\dfrac{dI_{\nu}}{d\tau_{\nu}}=\dfrac{dI_{\nu}}{(\alpha_{\nu}^{a}+\alpha_{\nu}^{s})ds}=S_{\nu}^{l}-I_{\nu}$
- When $\tau_{\nu}$ is radial optical depth in axial symmetry
	- $\dfrac{\mu dI_{\nu}}{d\tau_{\nu}}=I_{\nu}-S_{\nu}^{l}$
# Chapter 3 Bound-Bound and Bound-Free Transitions
- [x] #TODO Read Chapter 3 Rutten  [due:: 2025-10-30]  [completion:: 2025-10-29]
## 3.1 Photonic transitions
### Two-electron transitions
- These processes can be important mainly for recombination when particles have much higher energy than the radiation fields or ionization in the reverse
#### Dielectronic recombination
- Two-electron recombination is important in hot stellar coronae because free electrons move very fast there
	- They are too fast to be caught
- For atoms/ions with other electrons in their outer shell
	- Dielectronic recombination uses a large fraction of the too-large KE of the incoming electron for bound-bound excitation of another electron in the outer shell
	- Dominates recombination rates in the solar corona
- Low coronal density allows excited second electron to deexcite spontaneously
	- Produces at least 2 photons
	- Due to low density and absence of radiation many photon cascade follows
	- All outward bound photons escape
	- Provides line-rich coronal X-ray spectrum
#### Autoionization
- Reverse two-electron process: dielectronic ionization
- Uses photons rather than electrons
- Can be important when cool matter is embedded in hot radiation
#### Bound-free resonances
- Both processes are taken into account as resonances in bound-free radiative cross sections
## 3.2 Transition rates
- Evaluation of the monochromatic extinction coefficients for each bound-bound and continuum process requires knowledge of the particle densities
### Bound-bound radiative rates
- Statistical equilibrium equations:
	- $\dfrac{dn_{i}}{dt}=\sum_{j\neq i}^{N}n_{j}P_{ji}-n_{i}\sum_{j\neq i}^{N}P_{ij}=0$
	- $N$ is the total number of pertinent levels (including continua)
- Rates $P_{ij}$ per particle in state $i$ or $j$
	- $P_{ij}=A_{ij}+B_{ij}\bar{J}_{\nu_{0}}+C_{ij}$
- Spectral line radiative excitation rate per $\mathrm{cm^{3}}$
	- $n_{l}R_{lu}=n_{l}B_{lu}\bar{J_{\nu_{0}}}=4\pi n_{l}\int_{0}^{\infty} \dfrac{\sigma_{\nu}^{l}}{h\nu}J_{\nu}d\nu$
- Radiative deexcitation rate
	- $n_{u}R_{ul}=n_{u}A_{ul}+n_{u}B_{ul}\bar{J}_{\nu_{0}}=4\pi n_{u} \dfrac{g_{l}}{g_{u}} \int_{0}^{\infty} \dfrac{\sigma_{\nu}^{l}}{h\nu}\left( \dfrac{2h\nu^{3}}{c^{2}}+J_{\nu} \right)d\nu$
- Radiative rates measure number of radiative transitions per second per particle not per $\mathrm{cm^{3}}$
### Bound-free radiative rates
#### Physics
- Involve
	- A second particle (free electron)
	- Partial exchange between kinetic and radiative energy
	- A possible non thermalizing part given by the threshold energy
- Limits
	- Negligible Maxwell contribution: bound-free behaves as bound-bound
	- Maxwell part dominates over fixed part: recombination tends toward free-free bremsstrahlung
#### Einstein-Milne equations
- Relate the upward and downward bound-free transition probabilities
#### Photoionization
- Photoionization rate per $\mathrm{cm^{3}}$ from bound level $i$ to the continuum $c$
	- $n_{i}R_{ic}=4\pi n_{i}\int_{\nu_{0}}^{\infty} \dfrac{\sigma_{ic}(\nu)}{h\nu} J_{\nu}d\nu$
- Finding $\sigma_{ic}(\nu)$
	- For hydrogenic transitions use Kramers' formula from 2.4
	- Other transitions could have very complicated formulations
#### Spontaneous recombination
- In TE 
	- Radiative ionizations at any frequency are balanced exactly by the radiative recombinations
	- $J_{\nu}=B_{\nu}$
	- Thus $\left[ n_{c}R_{ci} \right]_{\mathrm{TE}}=\left[ n_{i}R_{ic} \right]_{\mathrm{TE}}=4\pi n_{i}^{\mathrm{TE}}\int_{\nu_{0}}^{\infty} \dfrac{\sigma_{ic}(\nu)}{h\nu}B_{\nu}d\nu$
	- Consists of spontaneous and induced recombinations
		- $\left[  n_{c}R_{ci}^{\mathrm{spon}}\right]_{\mathrm{TE}}=4\pi n_{i}^{\mathrm{TE}}\int_{\nu_{0}}^{\infty} \dfrac{\sigma_{ic}(\nu)}{h\nu}B_{\nu}\left( 1-\exp \left[ -\dfrac{h\nu}{kT} \right] \right)d\nu$
			- Requires free electron but no knowledge about possible departures from TE in local radiation field
		- General rate
			- $n_{c}R_{ci}^{\mathrm{spon}}=4\pi n_{c}\left[ \dfrac{n_{i}}{n_{c}} \right]_{\mathrm{LTE}}\int_{\nu_{0}}^{\infty} \dfrac{\sigma_{ic}(\nu)}{h\nu} \dfrac{2h\nu^{3}}{c^{2}}\exp \left[ -\dfrac{h\nu}{kT} \right]d\nu$
			- Describes total recombination rate in coronal equilibrium
#### Discussion
- Spontaneous recombination rate per ion doesn't sense radiation may have been instrumental in producing the ions
- Non local sensitivity comes from $n_{c}$
#### Induced recombination
- For TE
	- $\left[ n_{c}R_{ci}^{\mathrm{ind}} \right]_{\mathrm{TE}}=4\pi n_{i}^{\mathrm{TE}}\int_{\nu_{0}}^{\infty} \dfrac{\sigma_{ic}(\nu)}{h\nu} B_{\nu}\exp \left[ -\dfrac{h\nu}{kT} \right]d\nu$
- Generalized to rate per $\mathrm{cm^{3}}$ by rescaling from $n_{c}^{\mathrm{LTE}}$ to $n_{c}$ (the actual ion density) and replacing $B_{\nu}$ with actual radiation field $J_{\nu}$
	- $n_{c}R_{ci}^{\mathrm{ind}}=4\pi n_{c}\left[ \dfrac{n_{i}}{n_{c}} \right]_{\mathrm{LTE}}\int_{\nu_{0}}^{\infty} \dfrac{\sigma_{ic}(\nu)}{h\nu} J_{\nu}\exp \left[ -\dfrac{h\nu}{kT} \right]d\nu$
#### Total radiative recombination
- $n_{c}R_{ci}=4\pi n_{c}\left[ \dfrac{n_{i}}{n_{c}} \right]_{\mathrm{LTE}}\int_{\nu_{0}}^{\infty} \dfrac{\sigma_{ic}(\nu)}{h\nu}\left( \dfrac{2h\nu^{3}}{c^{2}}+J_{\nu} \right)\exp \left[ -\dfrac{h\nu}{kT} \right]d\nu$
### Unified radiative rates
- Can write in a compact notation
- Upward $i\to j$ $R_{ij}=\int_{0}^{\infty} \dfrac{4\pi}{h\nu} \sigma_{ij}J_{\nu}d\nu$
- Downward $j\to i$ $R_{ji}=\int_{0}^{\infty} \dfrac{4\pi}{h\nu} \sigma_{ij}G_{ij}\left( \dfrac{2h\nu^{3}}{c^{2}}+J_{\nu} \right)d\nu$
- Bound-bound transitions
	- $\sigma_{ij}=\sigma_{\nu}^{l}=\dfrac{h\nu_{ij}}{4\pi}B_{ij}\varphi_{\nu \mu}$
	- $G_{ij}=\dfrac{g_{i}}{g_{j}}=\left[ \dfrac{n_{i}}{n_{j}} \right]_{\mathrm{LTE}}\exp \left[ -\dfrac{h\nu}{kT} \right]$
- Bound-free transitions
	- $\sigma_{ij}=\sigma_{ic}(\nu)$
	- $G_{ij}=\left[ \dfrac{n_{i}}{n_{c}} \right]_{\mathrm{LTE}}\exp \left[ -\dfrac{h\nu}{kT} \right]$
#### Discussion
- Shows bound-free transitions behave as bound-bound transitions
- Recombination depends on electron density and velocity distribution accounted for through the Saha ratio $\left[ \dfrac{n_{i}}{n_{c}} \right]_{\mathrm{LTE}}$
### Net radiative rates
#### Net radiative recombination
- Given by the difference between total radiative recombination and photoionization
- With NLTE population departure coefficients $b_{i}=\dfrac{n_{i}}{n_{i}}^{\mathrm{LTE}}$ and $b_{c}=\dfrac{n_{c}}{n_{c}^{\mathrm{LTE}}}$
	- $n_{c}R_{ci}-n_{i}R_{ic}=4\pi n_{i}^{\mathrm{LTE}}b_{c}\int_{\nu_{0}}^{\infty} \dfrac{\sigma_{ic}(\nu)}{h\nu}\left[ B_{\nu}\left( 1-\exp \left[ -\dfrac{h\nu}{kT} \right] \right) -\dfrac{b_{i}}{b_{c}}J_{\nu}\left( 1- \dfrac{b_{c}}{b_{i}}\exp \left[ -\dfrac{h\nu}{kT} \right] \right)\right]d\nu$
- Wien limit
	- $n_{c}R_{ci}-n_{i}R_{ic}=4\pi n_{i}^{\mathrm{LTE}}b_{c}\int_{\nu_{0}}^{\infty} \dfrac{\sigma_{ic}(\nu)}{h\nu}\left( B_{\nu}-\dfrac{b_{i}}{b_{c}}J_{\nu} \right)d\nu$
#### Net radiative deexcitation
- Corresponding expressions for net radiative rate in bound-bound assuming complete redistribution
	- $n_{u}R_{ul}-n_{l}R_{lu}=\dfrac{4\pi}{h\nu_{0}}n_{l}^{\mathrm{LTE}}b_{u}\sigma_{\nu_{0}}^{l}\left[ B_{\nu_{0}}\left( 1-\exp \left[ -\dfrac{h\nu_{0}}{kT} \right] \right)-\dfrac{b_{l}}{b_{u}}\bar{J}_{\nu_{0}} \left( 1-\dfrac{b_{u}}{b_{l}} \exp\left[-\dfrac{h\nu_{0}}{kT}  \right] \right)\right]$
- Wien limit
	- $n_{u}R_{ul}-n_{l}R_{lu}\approx \dfrac{4\pi}{h\nu_{0}}n_{l}^{\mathrm{LTE}}b_{u}\sigma_{\nu_{0}}^{l}\left( B_{\nu_{0}}-\dfrac{b_{l}}{b_{u}}\bar{J}_{\nu_{0}} \right)$
#### Discussion
- Net rate vanishes for pure resonance scattering with $S_{\nu_{0}}^{l}=\bar{J}_{\nu_{0}}$
	- All new photons in the line are old line photons
	- As many electrons that go up go down
	- Monochromatic radiative equilibrium
- LTE permits radiaitve imbalances on the condition that it doesn't spoil the equilibrium Saha-Boltzmann population ratios
- The final bound-bound net rate in the Wien approximation is basically transparent
	- Net rate disappears in TE
### Collision Rates
- Free electrons generally dominate in causing collisional transitions 
	- $\dfrac{\mathrm{electron\;collisional\;frequency}}{\mathrm{ion\;collisional\;frequency}}\sim \dfrac{N_{e}\langle v_{e} \rangle}{N_{\mathrm{ion}}\langle v_{\mathrm{ion}} \rangle}\sim \dfrac{N_{e}}{N_{\mathrm{ion}}}\left( \dfrac{m_{\mathrm{H}}A}{m_{e}} \right)^{1/2}$
		- $A$ is the atomic weight of the ion
- Estimation for collision rates per $\mathrm{cm^{3}}$ for bound-bound
	- For electrons
		- $n_{l}C_{lu}\approx 2.16 \left( \dfrac{E_{0}}{kT} \right)^{-1.68}T^{-3/2}\exp \left[ -\dfrac{E_{0}}{kT} \right]n_{l}N_{e}f$
		- $n_{u}C_{ul}\approx 2.16 \left( \dfrac{E_{0}}{kT} \right)^{-1.68}T^{-3/2} \dfrac{g_{l}}{g_{u}}n_{u}N_{e}f$
	- For ions
		- $n_{l}C_{lu}\approx 3.9 \left( \dfrac{E_{0}}{kT} \right)^{-1}T^{-3/2}\exp \left[ -\dfrac{E_{0}}{kT} \right]n_{l}N_{e}f$
		- $n_{u}C_{ul}\approx 3.9 \left( \dfrac{E_{0}}{kT} \right)^{-1}T^{-3/2} \dfrac{g_{l}}{g_{u}}n_{u}N_{e}f$
	- $f$ is the oscillator strength
- Bound-free rates
	- $n_{i}C_{ic}\approx 2.7 \zeta \left( \dfrac{E_{0}}{kT} \right)^{-2}T^{-3/2} \exp \left[ -\dfrac{E_{0}}{kT} \right]n_{i}N_{e}$
	- $n_{c}C_{ci}\approx 5.6\times10^{-16}\zeta \left( \dfrac{E_{0}}{kT} \right)^{-2}T^{-3} \dfrac{g_{i}}{g_{c}}n_{c}N_{e}^{2}$
	- $\zeta$ is the number of electrons in the outer shell
	- $\nu_{0}$ with $E_{0}=h\nu_{0}$ represents the threshold frequency of the transition
		- Colliding electrons must possess or gain at least this energy
- Downward probabilities per particle are less sensitive to temperature
- Bound-bound rates scale with $f$ and hold only for permitted transitions
#### Net collision rates
- With departure coefficients ratio of collision rates simplify to
	- $\dfrac{n_{u}C_{ul}}{n_{l}C_{lu}}=\dfrac{b_{u}}{b_{l}}$
	- $\dfrac{n_{c}C_{ci}}{n_{i}C_{ic}}=\dfrac{b_{c}}{b_{i}}$
- Net downward collision rates are given by 3.41 and 3.42
#### Collisional coupling
- At a given temperature all rates in crease for decreasing $E_{0}=\dfrac{1}{2}m_{e}v_{0}^{2}$
	- Lower cutoff so more of the Maxwell tail contributes
- High levels are strongly coupled to collisions for bound-bound
- This is stronger for bound-free collisions rates with small $E_{ic}$
	- Also strongly coupled by collisions to population of the ion ground state $n_{c}$
#### Collisional LTE
- Bound-bound estimates from before are only valid for permitted radiative dipole transitions with $f\simeq10^{-3}-1$
- Levels within a term nearly always share their populations in Boltzmann equilibrium
- A multiplet consists of permitted transitions between combinations of upper levels in one term and lower levels in another
	- Different lines tend to share their upper level population departures and have the same $\dfrac{b_{u}}{b_{l}}$ and $S_{\nu_{0}}^{l}$
- There are forbidden transitions at larger energy separation
## 3.3 Spectral Line Broadening
- Spectral lines map the line extinction profile through the [[Source function]] into the emergent spectrum
- Many types of broadening and now specify shape of the line extinction coefficient
### Radiation broadening
- Spontaneous deexcitation 
	- Limits the lifetime of excited states
	- Causes uncertainty in the energy of any transitions
	- Causes line broadening
		- Natural broadening/radiative damping
			- Natural: broadening occurs even in absence of other particles
			- Damping: classical description of a line as a damped driven harmonic oscillator
- In a 2 level atom single transition has
	- $\gamma^{\mathrm{rad}}=\gamma_{u}^{\mathrm{rad}}=A_{ul}$
#### Damping profile
- Shape is given by the Lorentz damping profile
	- $\psi(\nu-\nu_{0})=\dfrac{\gamma^{\mathrm{rad}}/4\pi s^{2}}{(\nu-\nu_{0})^{2}+(\gamma^{\mathrm{rad}}/4\pi)^{2}}$
	- With $\mathrm{FWHM}(\nu)=\dfrac{\gamma^{\mathrm{rad}}}{2\pi}$, $\mathrm{FWHM}(\lambda)=\dfrac{\lambda^{2}\gamma^{\mathrm{rad}}}{2\pi c}$
- This is an emission profile function in absence of other broadening agents
- Other broadening agents are usually more effective
- This doesn't depend on location
#### Extinction profile
- The Lorentz shape holds for the emission profile
- Since atoms deexcite spontaneously whether or not they are in a TE enclosure can generalize to non-TE conditions
- So the profile also described the radiative-damping constituent of the extinction profile $\varphi(\nu-\nu_{0})$
#### Multiple levels and transitions
- In real atoms the lower level of a given line might have a finite lifetime (if not the ground state)
- Can add these up as 
	- $\gamma_{u}^{\mathrm{rad}}=\sum_{l<u}A_{ul}$
- Corresponding decay functions multiply as $\exp \left( -A_{u1}t \right)\exp \left( A_{u2}t \right)$ so $\gamma^{\mathrm{rad}}$ adds linearly
- Total natural damping
	- $\gamma^{\mathrm{rad}}=\gamma_{l}^{\mathrm{rad}}+\gamma_{u}^{\mathrm{rad}}=\sum_{i<l}A_{li}+\sum_{i<u}A_{ui}$
### Collision broadening
- Very difficult to treat properly
- Only rough formalisms
#### Elastic collisions
- Collisional/pressure broadening results from other particles in the neighborhood
	- Charge affects the radiating/extincting atom through Coulomb interaction
	- Affects the frequency of a bound-bound transition between perturbed levels
- Neutral $\mathrm{H I}$ atoms have the largest polarizability
	- Makes them important spectral line broadeners in cool atmospheres where $\mathrm{H}$ is not ionized
- Two extreme formalisms
	- Impact approximation
	- Quasi-static approximation
#### Impact approximation
- Perturber comes by with large speed and causes momentary disruption of the wave train emitted by a deexciting atom
	- Primarily caused by free electrons
	- Can also describe those by neutral hydrogen
- Cause broadening with a Lorentz profile just like natural broadening decay functions
- Simply add $\gamma^{\mathrm{col}}$ to $\gamma^{\mathrm{rad}}$
#### Quasi-static approximation
- Surrounding particles are at rest
- Used to describe broadening by slow-moving ions
- Ion density defines an E field that resets the internal term structure of the radiating/extinguishing atom
- A profile function results in a Holtsmark shape not a Lorentzian wings decay with $\sim\Delta \nu^{-5/2}$ instead of $\Delta \nu^{-2}$
#### Classification
- Classically split various interactions by their schematic dependence on the separation r between the absorber and the perturber
	- $\Delta \nu=\dfrac{\Delta E}{h}\equiv \dfrac{C_{\nu}}{r^{n}}$
	- $C_{n}$ is the interaction constant
	- $r$ is the distance at moment of closest encounter ([[Impact parameter]])
	- Assumes interaction potentials to first order described as power laws in $r$
#### Linear Stark effect $(n=2)$
- Important for $\mathrm{H\;I}$ lines
	- Explains their very large width in spectra from hot stars
- Important for $\mathrm{He\;II}$ and Rydberg lines
- Interactions are with protons/electrons as perturbers
- Spatial extent $\sim r^{-2}$ is so large because $\mathrm{H}$ has a permanent dipole moment
- Best described by quasi-static theory and Holtsmark shape
#### Resonance broadening $(n=3)$
- $n=3$ decay describes the interaction scale for collisions between neutral hydrogen atoms themselves
- Seems to be important for solar $\mathrm{H}\alpha$ line
- Stellar atmosphere can't be too hot or too cold
#### Quadratic Stark effect $(n=4)$
- Most lines other than $\mathrm{H\;I}$ are broadened by electron and ion impacts with spatial extent $\sim r^{-4}$
- Can use impact approximation
	- Broadening function is Lorentzian
#### Van der Waals broadening $(n=6)$
- Overwhelming number of neutral Hydrogen makes them the dominant broadener of spectral lines from cool star atmospheres
- Impact approximation is valid
#### Van der Waals enhancement factor
- Other lines than $\mathrm{H \; I}$ and hydrogenic lines the major contribution is from Van der Waals broadening exceeding $\gamma_{\mathrm{rad}}$
- However it is usually not enough (observed line profiles suffer more from damping than expected)
- Thus add a fudge factor called the damping enhancement factor increasing the computed Van der Waals
### Doppler broadening
#### Doppler shift
- Motion of a radiating particle along line of site produces Doppler shift
	- $\dfrac{\Delta \nu}{\nu}=-\dfrac{\Delta\lambda}{\lambda}=\dfrac{\xi}{c}$
	- $\xi\ll c$ is the velocity component along the line of sight
		- Taken to be positive towards observer such that positive Doppler shift is blueshift and upward motion
- Photon emitted at $\nu'$ is detected by observer
	- $\nu=\nu'(1+\dfrac{\xi}{c})\approx \nu'+\dfrac{\nu_{0}\xi}{c}$
#### Thermal motions
- For purely thermal motions then distribution of velocities is given by component form of Maxwell distribution
	- $\dfrac{n(\xi)}{N}d\xi=\dfrac{1}{\xi_{0}\sqrt{ \pi }}\exp \left[ -\dfrac{\xi^{2}}{\xi^{2}_{0}} \right]d\xi$
	- Area normalized Gaussian distribution with variance $\xi_{0}=\sqrt{ \dfrac{2kT}{m} }$
	- $\langle \xi^{2} \rangle^{1/2}=\sqrt{ \dfrac{kT}{m} }=\dfrac{\xi_{0}}{\sqrt{ 2 }}$
#### Thermal broadening
- What is the line extinction profile when taking into account thermal motions?
- Monochromatic extinction coefficient in frame of observer measured per particle but averaged over all line-of-sight particle velocities
	- Set $\chi=\dfrac{(\nu-\nu_{0})c}{\nu_{0}}$ in Maxwell distribution $\dfrac{n(\xi)}{N}$
	- $\sigma_{\nu}^{l}=\dfrac{\pi e^{2}}{m_{e}c}f \dfrac{n[(\nu-\nu_{0})c/\nu_{0}]}{N}=\dfrac{\sqrt{ \pi }e^{2}}{m_{e}c} \dfrac{f}{\Delta \nu_{D}}\exp \left[ -(\dfrac{\Delta \nu}{\Delta \nu_{D}})^{2} \right]$
	- Doppler width $\Delta \nu_{D}\equiv \dfrac{\xi_{0}}{c}\nu_{0}=\dfrac{\nu_{0}}{c}\sqrt{ \dfrac{2kT}{m} }$
	- Gaussian extinction profile $\varphi(\nu-\nu_{0})=\dfrac{1}{\sqrt{ \pi  }\Delta \nu_{D}}\exp \left[ -\left( \dfrac{\Delta \nu}{\Delta \nu_{D}} \right)^{2} \right]$
#### Voigt profile
- When collisional damping has Lorentz profile (e.g. impact approximation) then the total damping profile is the convolution of the constituents and is given by a Lorentz profile with $\gamma=\gamma^{\mathrm{rad}}+\gamma^{\mathrm{col}}$
- Assuming collisional broadening and thermal Doppler shifts are independent must convolve  with monochromatic extinction coefficient as above
- Thus
	- $\sigma_{\nu}^{l}=\dfrac{\sqrt{ \pi }e^{2}}{m_{e}c} \dfrac{f}{\Delta \nu_{D}}H(a,v)$
	- The Voigt function: $H(a,v)\equiv\dfrac{a}{\pi}\int_{-\infty}^{+\infty} \dfrac{e^{-y^{2}}}{(v-y)^{2}+a^{2}}dy$
		- $y\equiv \dfrac{\xi}{\xi_{0}}=\dfrac{\xi}{c} \dfrac{\nu_{0}}{\Delta \nu_{D}}=\dfrac{\xi}{c} \dfrac{\lambda_{0}}{\Delta\lambda_{D}}$
		- $v\equiv \nu-\dfrac{\nu_{0}}{\Delta \nu_{D}}=\dfrac{\lambda-\lambda_{0}}{\Delta\lambda_{D}}$
		- $a\equiv \dfrac{\gamma}{4\pi\Delta \nu_{D}}=\dfrac{\lambda^{2}}{4\pi c} \dfrac{\gamma}{\Delta\lambda_{D}}$
	- Area normalized extinction profile:
		- $\varphi(\nu-\nu_{0})=\dfrac{H(a,v)}{\sqrt{ \pi }\Delta n\nu_{D}}$
	- $a\ll1$
		- $H(a,v)\approx e^{v^{2}}+\dfrac{a}{\sqrt{ \pi }v^{2}}$
		- Voigt function approximates a Gaussian near line center but with $\Delta \nu^{-2}$ damping decay in far wings
		- Only very strong lines have sufficient extinction far  enough from the line center to posses damping wings without sensitivity to Doppler width
#### Rotational broadening
- Macroscopic broadening of the lines in a stellar flux spectrum from the rotation of the whole star
- Flux spectrum that passes through stellar surface
	- $\mathcal{F}_{\nu}=\int I_{\nu}\cos\theta d\Omega=\int \int  \dfrac{I_{\nu}(x,y)}{R^{2}}dxdy$
	- First integral over all outward directions
	- Second integral over apparent stellar disk
- Irradiance spectrum observed at Earth $\mathcal{R}_{\nu}=\dfrac{\mathcal{F}_{\nu}R^{2}}{D^{2}}$ with $D$ being the distance to the star
- However $I_{\nu}$ differs at different locations due to [[Limb darkening]], non rigid rotation, and other symmetry breaks
#### Deconvolution
- Shortcut when the relative line profile in the emergent intensity $H(\nu)\equiv I(\nu)/I_{\nu}^{\mathrm{cont}}$ does not vary across the stellar disk
- $\dfrac{\mathcal{F}_{\nu}}{\mathcal{F}_{\nu}^{\mathrm{cont}}}=H(\nu)*G(\nu)$
	- $G(\Delta \nu)$ describes the rotation profile with shape of a half ellipse
#### Turbulent broadening
- Besides thermal particle motions and stellar rotation there are waves of various sorts and turbulent convection
	- Neglected when stars are assumed to possess time-independent plane-parallel geometry
	- And stationary inhomogeneities and magneti structuring
- To "fix" this add fudge parameters
	- Microturbulence
		- Redefine Doppler width: $\Delta \nu_{D}\equiv \dfrac{\nu_{0}}{c}\sqrt{ \dfrac{2kT}{m}+\xi_{\mathrm{micro}}^{2} }$
	- Macroturbulence
		- Convolve computed emergent intensity profile with Gaussian velocity distribution
		- $\dfrac{I_{c}-I_{\lambda}}{I_{c}}=\left[ \dfrac{I_{c}-I_{\lambda}}{I_{c}} \right]_{\mathrm{comp}}* \dfrac{1}{\xi_{\mathrm{macro}}\sqrt{ \pi }}\exp \left( -\dfrac{\xi^{2}}{\xi^{2}_{\mathrm{macro}}} \right)$
		- Parameters assumed to vary with height/viewing angle
- Problem is fitted turbulence needs to be fairly large to explain observed line profiles
### Other broadening
#### Hyperfine structure
- Usually negligible except in some optical spectra
- From angular momentum of the nucleus that couples with the angular momentum of the electron cloud causing a slight splitting of energy levels
#### Isotope splitting
- Different isotopes have different nuclear mass and thus different term energies
- Mostly seen in light elements
#### Zeeman splitting
- Magnetic fields split magnetically sensitive lines into patterns of polarized components
- Increases as $\Delta\lambda_{Z}\sim\lambda^{2}$
### Spectral edge broadening
- Bound-free and free-free extinction coefficients are also smeared
- Particularly the sharp extinction edge at the ionization threshold frequency gets just as blurred as the bound-bound extinction peak
#### Near-edge line blending
- From their Stark broadening $\mathrm{H}$ lines overlap close to the series limit and with the broadened limit itself
	- They and the edge merge into a quasi continuum
- Estimate for the number of the highest frequency Balmer line that is still separately discernible
	- $\log N_{e}=23.2-7.5\log n_{\mathrm{max}}^{\mathrm{Balmer}}$
	- Assumes line width depends only on electron density through Star braodening
## 3.4 Spectral line redistribution
### Monochromatic redistribution
#### Sharp-line atoms
- Express the following with Einstein coefficients to derive Source function for NLTE in detail
	- Partial extinction coefficients $\alpha_{\nu}^{a}$ and $\alpha_{\nu}^{s}$
	- Destruction probability $\epsilon_{\nu}$
- Assumption
	- Two-level atom avoids cross-talk between different transitions
	- Two-level atom with infinitely sharp upper and lower levels (no line broadening) avoids spectral cross-talk within the line
- $\varphi(\nu-\nu_{0})=\psi(\nu-\nu_{0})=\chi(\nu-\nu_{0})=\delta(\nu-\nu_{0})$
	- $\delta$ is the delta function for area normalization
- Total radiation field in the line: $J_{\nu_{0}}\equiv \int J_{\nu}\delta(\nu-\nu_{0})d\nu=J(\nu=\nu_{0})$
- This idealized case resembles coherent scattering
#### Up-down sequences
- For two level atoms each extinction is followed by either collisional deexcitation or radiative deexcitation depending on what happens after initial extinction
- **Thermal extinction** = radiative excitation by a beam photon followed by collisional deexcitation
- **Spontaneous scattering extinction** = radiative excitation by a beam photon followed by induced deexcitation
- **Spontaneous thermal emission** = collisional excitation followed by spontaneous emission of a photon into the beam
- **Induced thermal emission** = collisional excitation followed by induced emission of a photon into the beam
- **Spontaneous scattering emission** = radiative excitation followed by spontaneous emission of a photon into the beam
- **Induced scattering emission** = radiative excitation followed by induced emission of a photon into the beam
#### Transport equation
$$\begin{align}
\dfrac{dI_{\nu_{0}}}{ds} & = -n_{1}\sigma_{\nu_{0}}^{l}I_{\nu_{0}} \dfrac{C_{21}}{P_{21}} \\
 & - n_{1}\sigma_{\nu_{0}}^{l}I_{\nu_{0}} \dfrac{A_{21}}{P_{21}} \\
 & - n_{1} \sigma_{\nu_{0}}^{l}I_{\nu_{0}} \dfrac{B_{21}J_{\nu_{0}}}{P_{21}} \\
 & + n_{1} C_{12} \dfrac{(h\nu_{0}/4\pi)A_{21}}{P_{21}} \\
 & + n_{1} C_{12} \dfrac{(h\nu_{0}/4\pi )B_{21}I_{\nu_{0}}}{P_{21}} \\
 & + n_{1}B_{12}J_{\nu_{0}} \dfrac{(h\nu_{0}/4\pi )A_{21}}{P_{21}} \\
 & + n_{1}B_{12}J_{\nu_{0}} \dfrac{(h\nu_{0}/4\pi )B_{21}I_{\nu_{0}}}{P_{21}}
\end{align}$$
- $P_{21}\equiv A_{21}+B_{21}J_{\nu_{0}}+C_{21}$ is the total deexcitation probability per particle in level 2
- Where each term corresponds (in order) to the processes described before
- Monochromatic but describes total profile integrated extinction and emission
#### Extinction
- Total sharp-line extinction coefficient $\alpha_{\nu_{0}}^{l}$ obtained 
	- Thermal part: $\alpha_{\nu_{0}}^{l}= \dfrac{(a)-(e)+(b)+(c)-(g)}{I_{\nu_{0}}}\equiv\alpha_{\nu_{0}}^{a}+\alpha_{\nu_{0}}^{s}$
	- $\alpha_{\nu_{0}}^{a}=(a)-(e)=\dfrac{h\nu_{0}}{4\pi} n_{1}B_{12} \dfrac{C_{21}}{P_{21}}\left[ 1-\exp \left( -\dfrac{h\nu_{0}}{kT} \right) \right]$
	- Scattering part $\alpha_{\nu_{0}}^{s}=(b)+(c)-(g)=\dfrac{h\nu_{0}}{4\pi}n_{1}B_{12} \dfrac{A_{21}}{P_{21}}$
		- $(c)$ and $(g)$ cancel because both require a photon with arbitrary direction in addition to photon from the beam. Just as many photons scatter into as out of the beam
#### Emission
- Total volume emissivity
	- $j_{\nu_{0}}^{l}=\dfrac{h\nu_{0}}{4\pi}n_{1}C_{12} \dfrac{A_{21}}{P_{21}}+\dfrac{h\nu_{0}}{4\pi}n_{1}B_{12}J_{\nu_{0}} \dfrac{A_{21}}{P_{21}}\equiv j_{\nu_{0}}^{a}+j_{\nu_{0}}^{s}=(d)+(f)$
#### Source function
- $S_{\nu_{0}}^{a}\equiv \dfrac{j_{\nu_{0}}^{a}}{\alpha_{\nu_{0}}^{a}}=B_{\nu_{0}}$
- $S_{\nu_{0}}^{s}\equiv \dfrac{j_{\nu_{0}}^{s}}{\alpha_{\nu_{0}}^{s}}=J_{\nu_{0}}$
- Combined sharp-line source function: 
	- $S_{\nu_{0}}^{l}\equiv \dfrac{j_{\nu_{0}}^{l}}{\alpha_{\nu_{0}}}=(1-\epsilon_{\nu_{0}})J_{\nu_{0}}+\epsilon_{\nu_{0}}B_{\nu_{0}}$
#### Destruction probability
- $\epsilon_{\nu_{0}}\equiv \dfrac{\alpha_{\nu_{0}}^{a}}{\alpha_{\nu_{0}}^{a}}+\alpha_{\nu_{0}}^{a}= \dfrac{C_{21}}{C_{21}+A_{21}+B_{21}B_{\nu_{0}}}$
#### Discussion
- $(c)-(g)$ cancelation is achieved by including the stimulated emission as a negative correction to the line extinction
	- Also removes stimulated emission sensitivity to $I_{\nu_{0}}$ leaving source function isotropic $S_{\nu_{0}}^{s}=J_{\nu_{0}}$
- $J_{\nu_{0}}$ and $B_{\nu_{0}}$ represent radiation and thermal reservoirs from which new photons may be obtained
	- Before $S_{\nu_{0}}^{l}$ splits production f new photons between these contributions
#### Thomson and Rayleigh scattering
- Can be seen as special sharp-line scattering without contributions $(a),(d),(e)$
- $\alpha ^T=\sigma^{T}N_{e}$ 
- $j_{\nu}^{T}=\alpha^{T}J_{\nu}$
### Complete redistribution
- Do the case where the single transition of the 2 level atom is broadened
- But simplify that the scattering obeys complete frequency redistribution over the line profile
- Three profile functions are equal
	- $\psi(\nu-\nu_{0})=\chi(\nu-\nu_{0})=\varphi(\nu-\nu_{0})=\dfrac{H(a,v)}{\sqrt{ \pi }\Delta \nu_{D}}$
#### Two-level statistical equilibrium
- Derive the line source function $S_{\nu_{0}}^{l}$ for the transition as a whole
- $S_{\nu_{0}}^{l}=(1-\epsilon_{\nu_{0}})\bar{J}_{\nu_{0}}^{\varphi}+\epsilon_{\nu_{0}}B_{\nu_{0}}$
#### Frequency dependence
- Total source function is now $S_{\nu}^{\mathrm{tot}}=\dfrac{\alpha_{\nu}^{l}S_{\nu_{0}}^{l}+\alpha_{\nu}^{c}S_{\nu}^{c}}{\alpha_{\nu}^{l}+\alpha_{\nu}^{c}}$
#### Angle dependence
- $S_{\nu}^{l}$ and $S_{\nu_{0}}^{l}$ are isotropic
- But the total source function $S_{\nu}^{\mathrm{tot}}$ is anisotropic when systematic motions cause different Doppler shifts of $\alpha^{l}$ in different directions
#### Absence of lasering
- Two level atoms can't laser by themselves
- Requires richer atomic structure 
	- More levels provide additional ways to feed electrons into the upper state 
### Partial redistribution
#### Qualitative summary
- Thermal motions cause frequency redistribution over the Doppler core of the extinction profile
- In the wings of the line coherent scattering occurs when radiative damping exceeds collisional damping
- In depe layers collisional damping is usually far larger than radiative damping
- May expect 
	- Doppler redistribution over the cores of the strong resonance lines
	- Coherent scattering in the inner wings
	- Collisional redistribution over the more deeply formed outer wings
### Spectral edge redistribution
#### Bound-free scattering
- Bound-free edges may suffer from scattering just like resonance lines
- Bound-free scattering in principle is the same as redistributed bound-bound scattering sensing only $\bar{J}_{\nu_{0}}$
- Qualitative differences
	- Bound-free edges 
		- Tend to be wider
		- Tend to have smaller peak extinction
		- Recombination tends to favor pathways own through the energy level structure that differ from the way up taken by the preceding ionization
#### Discussion
- Destruction probability increases with electron density both for 2 level atoms and 1 level plus continuum atoms
- Recombination edges have opacities that are comparable to resonance lines when integrated over the feature
# Chapter 7 Atmospheres of Plane-Parallel Stars
## 7.3 Temperature Stratification
### Empirical models
- Empirical $T(\tau_{0})$ are derived from inversion of observed intensities $(I_{\nu})$ into a $S_{\nu}(\tau_{\nu}=\mu)$ description
	- $S_{\nu}$ a function of the temperature and the Eddington-Barbier depth $\tau_{\nu}=\mu$
	- Trick is to obtain variation along $\tau_{0}$ from variation in $\tau_{\nu}=\mu$
#### Center limb variation
- Classical approach: fit observed limb darkening per frequency $\nu$ with coefficients $a_{\nu}$, $b_{\nu}$, $c_{\nu}$
	- $\dfrac{I_{\nu}(0,\mu)}{I_{\nu}(0,1)}=a_{\nu}+b_{\nu}\mu+c_{\nu}\left( 1-\mu \ln(1+\dfrac{1}{\mu}) \right)$
	- This is the $\boldsymbol{\Lambda}_{\tau}$ transform of $S_{\nu}(\tau_{\nu})=a_{\nu}+b_{\nu}\tau_{\nu}+c_{\nu}E_{2}(\tau_{\nu})$
		- See text for references for $E_{2}$ and $\boldsymbol{\Lambda}_{\nu}$ definitions
- Optical depth scales have
	- $\dfrac{d\tau_{\nu}}{d\tau_{0}}=\dfrac{\kappa_{\nu}\rho dz}{\kappa_{0}\rho dz}$
	- $\tau_{\nu}(\tau_{0})=\int_{0}^{\tau_{0}} \dfrac{\kappa_{\nu}}{\kappa_{0}}dt_{\nu}$
- These inversions have been able to show the importance of $\mathrm{H}^{-1}$ extinction but do not deliver accurate models
### Radiative equilibrium
#### Flux constancy
- For stellar modeling can't do empirical
- Take empirical solar result that photosphere obeys radiative equilibrium and require it as a base to derive $T(\tau_{0})$ stratifications
- General version requires flux constancy
	- $\nabla \cdot \boldsymbol{F}_{tot}(\boldsymbol{r})=\nabla \cdot[\boldsymbol{F}_{\mathrm{rad}}(\boldsymbol{r})+\boldsymbol{F}_{\mathrm{conv}}(\boldsymbol{r})+\mathrm{\boldsymbol{F}_{mech}}(\boldsymbol{r})]\equiv0$
	- Total radial energy flux traveling outward through the atmosphere should be constant in time along any vector $\boldsymbol{r}$
- Plane parallel atmospheres simplifies the requirement to
	- $\dfrac{dF_{tot}}{dz}=0$
#### Radiative equilibrium (RE)
- Set total energy flux equal to the radiative flux through the atmosphere
	- $\mathcal{F}_{\mathrm{rad}}(z)\equiv \int_{0}^\infty \mathcal{F}_{\nu}(z)d\nu=\mathcal{F}$
	- At every $z$
	- $\mathcal{F}=\pi F$ at every height $z$ equal to the observed stellar surface flux
		- $\mathcal{F}\equiv\sigma T_{\mathrm{eff}}^4=\dfrac{L_{*}}{4\pi R_{*}^{2}}$
	- Can be written also as $\dfrac{d\mathcal{F}_{\mathrm{rad}}(z)}{dz}=0$
	- Can be written in different ways see text for
		- Stromgren equation: $\int_{0}^\infty\kappa_{\nu}(z)\rho(z)J_{\nu}(z)d\nu=\int_{0}^\infty\kappa_{\nu}(z)\rho(z)S_{\nu}(z)d\nu$
		- Hubeny notation
		- With total radiative flux divergence $\Phi_{\mathrm{tot}}(z)$
			- $\Phi_{\mathrm{tot}}(z)\equiv  \dfrac{d\mathcal{F_{\mathrm{rad}}}(z)}{dz}= 4\pi \int_{0}^\infty\alpha_{\nu}(z)[S_{\nu}(z)-J_{\nu}(z)]d\nu=0$
- In RE flux divergence integral is zero at all heights
	- At every heigh all emitted energy $(j_{\nu}=\alpha_{\nu}S_{\nu})$ must equal all extincted energy
- Fulfilling the RE condition with $\Phi_{\mathrm{tot}}(z)$ must be achieved by choosing $S_{\nu}$ properly
	- Obvious way is to have $J_{\nu}=S_{\nu}$ at every $\nu$ like in TE
		- Not realistic in stellar atmospheres
	- With NLTE $S_{\nu}=J_{\nu}$ does hold for all $\nu$ when all extinction processes consist of coherent scattering so no photons are created locally
		- Can't do this for a star as it requires a thermal source term $\epsilon_{\nu}B_{\nu}$ to create photons that make $J_{\nu}$ initially
#### Line cooling
- Bound-bound transition might contribute local cooling or heating according to its net radiative cooling rate
	- $\Phi_{ul}=4\pi\alpha_{\nu_{0}}^l(S_{\nu_{0}}^l-\bar{J}_{\nu_{0}})=h\nu_{0}[\nu_{u}R_{ul}-n_{l}R_{lu}]$
#### Continuum cooling
- Contribution to the flux divergence integral given by bound free transition
	- $\Phi_{ci}=4\pi n_{i}^\mathrm{LTE}b_{c}\int_{\nu_{0}}^\infty\sigma_{ic}(\nu)\left[ B_{\nu}\left( 1-e^{-h\nu/kT} \right) -\dfrac{b_{i}}{b_{c}}J_{\nu}\left( 1-\dfrac{b_{c}}{b_{i}}e^{-h\nu/kT} \right)\right]d\nu$
### The grey approximation
- Solving Stromgren equation
	- The grey case: Move $\kappa_{\nu}$ outside of the integrals by assuming extinction in the atmosphere to be independent of $\nu$
		- Not realistic as Thomson scattering is the only source of extinction and is $\nu$ dependent
	- Replace infinite number of transport equations by one for integrated radiation on a frequency independent optical depth scale
	- RE condition becomes $S(\tau)=J(\tau)$
		- $J(\tau)=\boldsymbol{\Lambda}_{\tau}[S(t)]$
		- $F(\tau)=\boldsymbol{\Phi}_{\tau}[S(t)]=F$
#### Grey RE source function
- $S(\tau)\approx c(1+\dfrac{3}{2}\tau)$
# Chapter 9 Lines from Plane-Parallel Stars
- [x] #TODO Read Chapter 9 Rutten  [due:: 2025-10-30]  [completion:: 2025-10-30]

## 9.1 Classical Abundance Determination
- Classical methods for LTE abundance determination
### Abundance
- Abundance $A_{\mathrm{E}}$ of element $\mathrm{E}$ 
	- $A_{\mathrm{E}}\equiv \dfrac{N_{\mathrm{E}}}{N_{\mathrm{H}}}$
	- $N_{\mathrm{E}}$ is the nuclei number density
	- $N_{\mathrm{H}}$ is the total hydrogen nuclei density (with free protons and $\mathrm{H}_{2}$ counted twice)
- Generally specify abundance with logarithmic scale
	- $A_{12}(\mathrm{E})\equiv \log N_{\mathrm{E}}-\log N_{\mathrm{H}}+12$
	- $A_{12}(\mathrm{H})=12$
- Square brackets denote relative to the Sun in log space
	- $[X]\equiv \log X_{\mathrm{star}}-\log X_{\mathrm{Sun}}$
- The metallicity of the star is the iron abundance 
	- $[\mathrm{Fe/H}]=\log \left( N_{\mathrm{FE}}/N_{\mathrm{H}} \right)_{\mathrm{star}}-\log(N_{\mathrm{Fe}}/N_{\mathrm{H}})_{\mathrm{Sun}}$
- Atmospheric abundance enters line extinction coefficient as a ratio to the hydrogen density in the lower-level population
	- $n_{l}=b_{l}n_{l}^{\mathrm{LTE}}=b_{l} \dfrac{n_{l}^{\mathrm{LTE}}}{N_{\mathrm{E}}}N_{\mathrm{H}}A_{\mathrm{E}}$
	- $\alpha_{\lambda}^{l}=\dfrac{\sqrt{ \pi }e^{2}}{m_{e}c} \dfrac{\lambda^{2}}{c}b_{l} \dfrac{n_{l}^{\mathrm{LTE}}}{N_{\mathrm{E}}} N_{\mathrm{H}}A_{\mathrm{E}}f_{lu} \dfrac{H(a,v)}{\Delta\lambda_{D}}\left[ 1-\dfrac{b_{u}}{b_{l}}\exp \left( -\dfrac{hc}{\lambda kT} \right) \right]$
### Curve of growth methods
- Curves of growth are employed to derive element abundances
#### Equivalent width
- For intensity
	- $W_{\lambda}=\int_{\mathrm{line}} \dfrac{I_{c}-I_{\lambda}^{l}}{I_{c}}d\lambda$
- For flux
	- $W_{\lambda}=\int_{\mathrm{line}} \dfrac{\mathcal{F}-\mathcal{F}_{\lambda}^{l}}{\mathcal{F_{c}}}d\lambda$
- Measures integrated dip of an absorption line
- For optically thin is a direct measure of the number of absorbing atoms causing an absorption line
- Need curve of growth to correct for optical thickness
#### Schuster-Schwarzschild atmosphere
- There are two layers
	- Deep one that emits the solar continuum given by a [[Planck function]]
	- Higher up one that is the reversing layer causing the spectral lines
		- Homogeneous
		- Obeys [[Local thermal equilibrium|LTE]]
		- Intensity of continuum irradiation
			- $I_{c}=B_{\lambda}(T_{R})$
			- $T_{R}$ is the radiation temperature equal to the deeper layer's temperature
- Radiation observed
	- $I_{\lambda}=B_{\lambda}(T_{R})e^{-\tau_{\lambda}}+B_{\lambda}(T_{L})(1-e^{-\tau_{l}})$
	- $T_{L}$is the temperature of the reversing layer
	- $\tau_{\lambda}$ is the optical thickness in a spectral line of the reversing layer
		- $\tau_{\lambda}=\sigma_{\lambda}N_{i}=\dfrac{\sqrt{ \pi }e^{2}}{m_{e}c} \dfrac{\lambda_{0}^{2}}{c} \dfrac{f}{\Delta\lambda_{D}}N_{i}H(a,v)\approx \tau_{\lambda_{0}}H(a,v)$
		- $N_{i}$ is the integrated column density of the line absorbing particles in the lower level $i$ along the line of sight through the reversing layer
		- $\sigma_{\lambda}$ is the [[Monochromatic extinction coefficient|extinction coefficient]] per particle in level $i$
		- $f$ is the oscillator strength of the transition
		- $\Delta\lambda_{D}$ is the doppler width
		- $a$ and $v$ are the Voigt parameters defined in chapter 3
		- Relative line depression $D_{\lambda}\equiv \dfrac{I_{c}-I_{\lambda}}{I_{c}}=\dfrac{B_{\lambda}(T_{R})-B_{\lambda}(T_{L})}{B_{\lambda}(T_{R})}(1-e^{-\tau_{\lambda}})=D_{\mathrm{max}}(1-e^{-\tau_{\lambda}})$
			- $D_{\mathrm{max}}\equiv \dfrac{B_{\lambda}(T_{R})-B_{\lambda}(T_{L})}{B_{\lambda}(T_{R})}$
			- Equivalent width: $W_{\lambda}=D_{\mathrm{max}}\int_{\mathrm{line}}(1-e^{-\tau_{\lambda}})d\lambda$
#### Weak lines
- If $\tau_{\lambda}\ll1$
	- $\exp(-\tau_{\lambda})\approx1-\tau_{\lambda}$
	- $D_{\lambda}\approx D_{\mathrm{max}}\tau_{\lambda}$
	- Can approximate Voigt profile as a Doppler profile
	- $D_{\lambda}\approx D_{\mathrm{max}}\tau_{\lambda_{0}}\exp \left( \dfrac{\Delta\lambda}{\Delta\lambda_{D}} \right)^{2}$
	- $W_{\lambda}\approx D_{\mathrm{max}}\tau_{\lambda_{0}}\sqrt{ \pi }\Delta\lambda_{D}=\dfrac{\pi e^{2}}{m_{e}c} \dfrac{\lambda_{0}^{2}}{c}fD_{\mathrm{max}}N_{i}$
	- Plotting $\log W_{\lambda}$ against $\log\theta_{\lambda_{0}}$ has initial slope $1:1$ called the Doppler part
#### Saturated lines
- If $\tau_{\lambda_{0}}>1$
	- Line can't grow deeper than saturation depth $D_{\mathrm{max}}$ with $I_{\nu_{0}}=B_{\nu}(T_{L})$ at line cneter
	- Width of line increases for increasing $\tau_{\lambda_{0}}$
	- $W_{\lambda}\approx QD_{\mathrm{max}}\Delta\lambda_{D}$
		- $Q$ is a quality factor roughly estimated from graph. Shoulder of the curve of growth
#### Strong lines
- If $\tau_{\lambda_{0}}\gg1$
	- Core doesn't change anymore
	- Line-center contribution is fixed at $D_{\mathrm{max}}$
	- Far wings have $\tau_{\lambda}<1$
		- Can grow in optically thin fashion
		- Thus contribute additional equivalent width
		- In damping part of $H(a,v)$
			- $\tau_{\lambda}=\tau_{\lambda_{0}} \dfrac{a}{\sqrt{ \pi }v^{2}}=\tau_{\lambda_{0}} \dfrac{a}{\sqrt{ \pi }} \dfrac{\Delta\lambda_{D}^{2}}{\Delta\lambda^{2}}$
			- $W_{\lambda}\sim D_{\mathrm{max}}\Delta\lambda_{D}\sqrt{ \tau_{\lambda_{0}} a}$
	- The damping part of the curve of growth scales as $W_{\lambda}\sim \sqrt{ \tau_{\lambda_{0}}a }\sim \sqrt{ fN_{i}\gamma }$ with a $1:2$ slope
		- Generally bad description for stellar line formation
#### Milne-Eddington atmosphere
- Assume no local variation between line and continuum extinction by requiring that extinction ration $\eta_{\lambda}\equiv\kappa_{\lambda}^{l}/\kappa_{\lambda}^{c}$ and profile function $\varphi(\lambda-\lambda_{0})$ do not vary with height
	- Is rough but better than Schuster-Schwarzschild
- Assuming LTE and linear Planck function: $B_{\lambda}(\tau_{c})=B_{0}+b_{c}\tau _c$
	$$\begin{align}
B_{\lambda}(\tau_{\lambda}) & =B_{0}+\dfrac{b_{c}}{1+\eta_{\lambda}}\tau_{\lambda} \\
F_{\lambda}(0) & =B_{0}+\dfrac{b_{c}}{1+\eta_{\lambda}} \dfrac{2}{3} \\
D_{\lambda} & =D_{\mathrm{max}} \dfrac{\eta_{\lambda}}{1+\eta_{\lambda}} \\
D_{\mathrm{max}} & =\dfrac{\dfrac{2}{3}b_{c}}{B_{0}+\dfrac{2}{3}b_{c}} \\
\eta_{\nu} & =\eta_{0}H(a,v) \\
W_{\lambda} & =\int_{\mathrm{line}}D_{\lambda}d\lambda \\
 & =D_{\mathrm{max}}\Delta\lambda_{D}\int_{\mathrm{line}} \dfrac{\eta_{\nu}}{1+\eta_{\nu}}dv \\
\dfrac{W_{\lambda}}{D_{\mathrm{max}}\Delta\lambda_{D}} & =\int_{\mathrm{line}} \dfrac{\eta_{0}H(a,v)}{1+\eta_{0}H(a,v)}dv \\
\end{align}$$
$$\begin{align}
\begin{cases}
\dfrac{W_{\lambda}}{D_{\mathrm{max}}\Delta\lambda_{D}} & =\sqrt{ \pi }\eta_{0}\;\;\mathrm{for}\;\eta_{0}\ll 1 \\
\dfrac{W_{\lambda}}{D_{\mathrm{max}}\Delta\lambda_{D}} & = 2-4 \;\;\mathrm{for}\;\eta_{0}>1 \\
\dfrac{W_{\lambda}}{D_{\mathrm{max}}\Delta\lambda_{D}} & =\sqrt{ \pi^{3/2}a\eta_{0} }\;\;\mathrm{for}\;\eta_{0}\gg 1
\end{cases}
\end{align}$$
	- These can regain Schuster-Schwarzschild with substituting $\eta_{0}$ for $\tau_{\lambda_{0}}$
#### Curve of growth fitting
- See text



> [!Cite]

Rutten, R.J. _Radiative Transfer in Stellar Atmospheres_. n.d.
  

>[!md]

**FirstAuthor**: [[Files/Authors/Rutten, R.J.]] 


> **Year**: Error: `format` can only be applied to dates. Tried for format object  

> **Citekey**: ruttenRadiativeTransferStellar 

> **itemType**: book   

  
> [!Abstract]

>.




