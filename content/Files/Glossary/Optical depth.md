---
tags: [stars, radiation]
aliases: [tau]
---
- With $\tau_{\nu}$ as radial optical depth
	- Often use axial symmetry with z-axis radial outward along axis of symmetry
	- For geometrical location $z=z_{0}$ is
		- $\tau_{\nu}(z_{0})=\int_{\infty}^{z_{0}}-\alpha_\nu dz=\int_{z_{0}}^{\infty}\alpha_{\nu}dz$
			- Where $\alpha_{\nu}$ is [[Monochromatic extinction coefficient]] per cm path length
		- Measures optical depth along radial line of sight with $\mu=1$ from $\tau_{\nu}=0$ 
			- Where $\mu$ is the [[Viewing angle]]
	- For a frequency within a spectral line the total optical depth
		- $d\tau_{\nu}^{\mathrm{total}}=-(\alpha_{\nu}^c+\alpha_{\nu}^l)dz=(1+\eta_{\nu})d\tau_{\nu}^c$
			- $\eta_{\nu}\equiv\alpha_{\nu}^l/\alpha_{\nu}^c$
			- $\tau_{\nu}^c$ is the continuum optical depth
- Sometimes use angle-dependent optical depth $\tau_{\nu \mu}$
	- $d\tau_{\nu \mu}\equiv-\alpha_{\nu} \dfrac{dz}{|\mu|}$
	- Measured along viewing direction
	- $\mu>0$ outwards for outgoing photons
	- $\mu<0$ for incoming photons

- Monochromatic optical thickness for a medium with total thickness $D$ measured along the beam
	- $\tau_{\nu}(D)=\int_{0}^D\alpha_{\nu}(s)ds$
	- For extinction only $(j_{\nu}=0)$
		- $I_{\nu}(D)=I_{\nu}(0)e^{-\tau_{\nu}(D)}$
			- Where $I_{\nu}$ is the [[Intensity (specific, mean)|specific intensity]]
	- Transition between small and large extinction lies at the $\dfrac{1}{e}$ value or where $\tau_{\nu}=1$
		- Optically thick: $\tau_{\nu}(D)>1$
		- Optically thin $\tau_{\nu}(D)<1$

- Related to [[Optical path length]] and [[Optical photon mean free path]]