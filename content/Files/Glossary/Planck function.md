---
tags: [stars, radiation]
aliases: [black body radiation, black body, B]
---
$B_{\lambda}(T)=\dfrac{2hc^{2}/\lambda^5}{\exp \left( \dfrac{hc}{\lambda k_{b}T} \right)-1}$
$B_{\nu}(T)=\dfrac{2h\nu^{3}}{c^{2}} \dfrac{1}{e^{-h\nu/k_{b}T}-1}$
## Simple derivation
Two goals:
	1. Calculate the number of photon states in a black body enclosure
	2. Get the average energy per photon state
### Find number of photons states
- Consider: photon traveling in direction $\hat{n}$
	- $\hat{k}=\dfrac{2\pi}{\lambda}\hat{n}=\dfrac{2\pi \nu}{c}\hat{n}$ is the wave number
	- Within an enclosure with dimensions $L_{x},L_{y},L_{z}$
- The photon is a standing wave so need it to be an integer multiple of $\dfrac{L}{\lambda}$
	- $n_{x}=\dfrac{k_{x}L_{x}}{2\pi}$
	- $\Delta n_{x}=\dfrac{L_{x}}{2\pi}\Delta k_{x}$
	- $\Delta k_{x}\Delta k_{y}\Delta k_{z}=d^{3}k\to\Delta N=\Delta n_{x}\Delta n_{y}\Delta n_{z}=\dfrac{L_{x}L_{y}L_{z}}{(2\pi)^{3}}d^{3}k$
		- $V=L_{x}L_{y}L_{z}$ is the volume of the enclosure
		- Photons have two polarization states
	- $\Delta N=\dfrac{2Vd^{3}k}{(2\pi)^{3}}\to \dfrac{\Delta N}{V}=\dfrac{2d^{3}k}{(2\pi)^{3}}\to \dfrac{\Delta N}{Vd^{3}k}=\dfrac{2}{(2\pi)^{3}}$
		- This is the number of states per volume per 3D wave number 
	- Transform into spherical coordinates
		- $d^{3}k=k^{2}\sin\theta d\theta d\phi dk=k^{2}dkd\Omega$
		- With $k=\dfrac{2\pi \nu}{c}$ then $dk=\dfrac{2\pi}{c}d\nu$ then $d^{3}k=\dfrac{(2\pi)^{3}}{c^{3}}\nu^{2}d\nu d\Omega$
	- $\Delta N=\dfrac{2V}{(2\pi)^{3}}d^{3}k=\dfrac{2V}{(2\pi)^{3}}\left[ \dfrac{(2\pi)^{3}}{c^{3}}\nu^{2}d\nu d\Omega \right]$
	- $\boldsymbol{\Delta N=\dfrac{2V}{c^{3}\nu d\nu d\Omega}}$
	- Can also define the density of states as $\boldsymbol{\rho_{s}=\dfrac{\Delta N}{Vd\nu d\Omega}}=\dfrac{2\nu^{2}}{c^{3}}\left[ \mathrm{\dfrac{number\;of\; states}{volume\cdot solid\;angle\cdot frequency}} \right]$
### Find the average energy of the states
- From statistical mechanics $\mathrm{prob}=E_{n}\propto e^{-E_{n}/k_{b}T}$
- $\bar{E}=\dfrac{\sum_{n=0}^{\infty}E_{n}e^{-E_{n}/k_{b}T}}{\sum_{n=0}^{\infty}e^{-E_{n}/k_{b}T}}$
	- Where $n$ is all possible standing waves
	- $E=h\nu$
- $\bar{E}=\dfrac{h\nu}{e^{-E_{n}/k_{b}T}-1}$
- $\dfrac{E}{h\nu}$ is the $\mathrm{\dfrac{average \; energy}{\mathrm{number\;of\;photons\;with\; frequency\;\nu}}}$ the denominator is the occupation number 
- Energy density $u=\rho_{s}E=\dfrac{2\nu^{2}}{c^{3}} \dfrac{h\nu}{e^{-E_{n}/k_{b}T}-1}=\dfrac{2h\nu^{3}}{c^{3}} \dfrac{1}{e^{-h\nu/k_{b}T}-1}$
- $u=\dfrac{E}{\mathrm{volume\cdot solid\;angle\cdot frequency}}\to u_{\nu}(\Omega)$
- $u_{\nu}'=\dfrac{I_{\nu}}{c}$
- $I_{\nu}=cu_{\nu}(\Omega)=\dfrac{2h\nu^{3}}{c^{2}} \dfrac{1}{e^{-h\nu/k_{b}T}-1}\to I_{\nu}=B_{\nu}=\dfrac{2h\nu^{3}}{c^{2}} \dfrac{1}{e^{-h\nu/k_{b}T}-1}$
## Black bodies
- If $h\nu\ll k_{B}T$ then $e^{h\nu/kT}\to1+\dfrac{h\nu}{kT}$
	- $B_{\nu}\to \dfrac{2h\nu^{3}}{c^{2}} \dfrac{1}{\dfrac{h\nu}{kT}}=\dfrac{2\nu^{2}Tk_{B}}{c^{2}}$
- If $h\nu\gg k_{b}T$ then $B_{\nu}=\dfrac{2h\nu^{3}}{c^{2}}e^{-h\nu/kT}$
- Key features
	- Black bodies never cross. A higher $T$ means the curve is *always* higher
	- Trivially find peak $\lambda$ or $\nu$ and it shifts with $T$
