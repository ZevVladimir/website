---
tags: [stars, radiation]
aliases: [I, J, intensity, Intensity, specific intensity, mean intensity, total intensity]
---
#### Specific Intensity
- Specific intensity $I_{\nu}$ is proportionality coefficient for $dE_{\nu}$ the amount of energy transported through $dA$ at location $\vec{r}$ with $\vec{n}$ being the normal to $dA$ between times $t$ and $t+dt$ in frequency band between $\nu$ and $\nu+d\nu$ over solid angle $d\Omega$ around direction $\vec{l}$ with polar coordinates $\theta$ and $\phi$
	- $dE_{\nu}=I_{\nu}(\vec{r},\vec{l},\vec{t})(\vec{l}\cdot  \vec{n})dAdtd\nu d\Omega$ 
	- $dE_{\nu}=I_{\nu}(x,y,z,\theta,\phi,t)\cos\theta dAdtd\nu d\Omega$
	- Units $erg\;s^{-1}\;Hz^{-1}$ or $Q\;m^{-2}Hz^{-1}\;ster^{-1}$
- In wavelength $I_{\lambda}=I_{\nu}c/\lambda^{2}$
- $I_{\nu}$ represents the macroscopic counterpart to the energy carried by a bunch of identical photons along a single "ray"
#### Total intensity
- Total intensity $I\equiv \int_{0}^{\infty}I_{\nu}d\nu$
- Intensity along a ray does not diminish with travel distance
#### Mean Intensity
- Average the intensity over all directions
- $J_{\nu}(\vec{r},t)\equiv1 \dfrac{1}{4\pi}\int I_{\nu}d\Omega= \dfrac{1}{4\pi}\int_{0}^{2\pi}\int_{0}^{\pi}I_{\nu}\sin\theta d\theta d\phi$
	- Units $\mathrm{erg\;cm^{-2}\;s^{-1}\;HZ^{-1}\;ster^{-1}}$
	- When only the availability of photons is of interest
		- Ex: evaluation amount of radiative excitation and ionization
		- With axial symmetry with $z$-axis $(\theta \equiv0)$ along the axis of symmetry $d\Omega=2\pi \sin\theta d\theta=-2\pi d\mu$ with $\mu=\cos\theta$
		- $J_{\nu}(z)=\dfrac{1}{4\pi}\int_{0}^{\pi}I_{\nu}(z,\theta)2\pi \sin\theta d\theta=\dfrac{1}{2}\int_{-1}^{+1}I_{\nu}(z,\mu)d\mu$