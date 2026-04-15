# Distances
- Coordinate distances $\equiv$ comoving distances
1. Comoving horizon (conformal) time
	- Comoving distance that could have been traveled by a massless particle (e.g. photon) since $z=0$
	- $d \eta=\dfrac{cdt}{a}$
		- $d \eta$ is the comoving distance
		- $\dfrac{cdt}{a}$ is the physical distance
	- $$\eta(t)=\int_{0}^{t} \dfrac{dt'}{a(t')}=\int_{0}^{a} \dfrac{da'}{\dfrac{ \mathrm{d} a' }{ \mathrm{d} t' }a'}=\boldsymbol{\int_{0}^{a} \dfrac{da'}{a'^{2}H(a')}}$$
		- Setting $c=1$
2. Comoving distance to an emitting object at $z$
	- $$\chi(z)=\int_{t_{\mathrm{emit}}}^{t_{0}} \dfrac{dt}{a(t)}=\int_{a_{\mathrm{emis}}}^{1} \dfrac{da}{a^{2}H(a)}=\int_{0}^{z} \dfrac{dz'}{H(z')}$$
		- Don't have to have $a'$ in the integral since not integrating over a
		- At low $z$ $H(z)\to H_{0}\implies \chi\to  \dfrac{cz}{H_{0}}$
3. Angular diameter distance 
	- In astronomy an object of physical size $l$ at distance $\chi$ subtends an angle $\theta$ such that $\theta=\dfrac{l}{d}$ where we use the small angle approximation
	- Define $D_{A}$ such that $\theta=\dfrac{l}{D_{A}}$
	- $$\theta=\dfrac{l}{\chi a}\implies D_{A}(a)=\chi a=D_{A}(z)=\dfrac{\chi}{1+z}$$
	- $$
	D_{A}(z)=\dfrac{1}{1+z}\int_{0}^{z} \dfrac{dz'}{H(z')}
	$$
		- This is for a flat Euclidean universe
	- More generally
		$$
D_{A}(a)=\dfrac{a}{H_{0}\sqrt{ |\Omega_{k}| }}\begin{cases}
\sinh \sqrt{ \Omega_{k} }H_{0}\chi & \Omega_{k}>0 & \mathrm{Open} \\
\sin \sqrt{ -\Omega_{k} }H_{0}\chi & \Omega_{k}<0 & \mathrm{Closed}
\end{cases}
$$
		- With $$
\Omega_{k}\equiv -\left( \dfrac{\rho_{0}-\rho_{CR}}{\rho_{CR}} \right)
$$
4. Luminosity distance
	-  In astronomy $F=\dfrac{L}{4\pi d^{2}}$
	- Define $D_{L}^{2}\equiv \dfrac{L}{4\pi F}$
	- Compare two positions: one very close to the emitter (i) and one where we are (us)
	- Flux we see is $=\mathrm{\dfrac{number\;of\;photons}{time\;\cdot area}\cdot \dfrac{Energy}{Photon}}$
	$$
\dfrac{F_{us}}{F_{i}}=\dfrac{1}{1+z} \dfrac{1}{1+z}
$$
		- First factor from energy of photon decreases as it travels across expanding space
		- Second factor from there are less photons moving through the observer the further away you are
	$$
D_{L}=\chi(1+z)
$$
	- Can infer $H(z)$ by determining $D_{L}(z)$ for standard candles/sirens
	- For all geometries
	$$
D_{L}(z)=(1+z)^{2}D_{A}(z)
$$
# Inventory
1. Distribution functions
	- Consider momentum-position 6D phase space
	- Want to find the total energy of species $s$
		$$
E_{s}=\sum_{\mathrm{cell\;in\;6D\;phase \; space}}E_{\mathrm{cell}}f_{s,\mathrm{cell}}
$$
		- Where $f_{s,\mathrm{cell}}$ is the distribution function for species $s$ telling how many particles are in each cell
	- 2D case
		$$
\sum_{\mathrm{cells}}\to \int \dfrac{dp_{x}dx}{2\pi \hbar}
$$
		- $2\pi \hbar$ is the area of the cell
	- Generalize
		$$
\rho=g_{s}\int \dfrac{d^{3}p}{(2\pi)^{3}} f_{s}(p)E(p)
$$
2. Photons in CMB
	- $T_{0}=2.726\mathrm{K}$
	$$\begin{align}
\rho_{\gamma} & =2\int  \dfrac{d^{3}p}{(2\pi)^{3}} \dfrac{1}{\exp \left( \dfrac{p}{T} \right) -1}p \\
 & =\dfrac{8\pi}{(2\pi)^{3}}\int_{0}^{\infty} \dfrac{dpp^{3}}{\exp \left( \dfrac{p}{T} \right) -1} \\
\mathrm{Define}\; x & \equiv \dfrac{p}{T} \\
\rho_{\gamma} & =\dfrac{T^{4}}{\pi^{2}}\int_{0}^{\infty} \dfrac{dxx^{3}}{e^{x}-1} \\
 & =\dfrac{T^{4}\pi^{2}}{15} \\
\rho_{\gamma} & \propto a^{-4} \\
\rho_{\mathrm{CR}} & \equiv \dfrac{3H_{0}^{2}}{8\pi G} \\
\Omega_{\gamma} & \equiv \dfrac{\rho_{\gamma,0}}{\rho_{\mathrm{CR}}} \\
 \Omega_{\gamma}h^{2} & =2.47\times10^{-5}
\end{align}$$
	- Can see that now makes up a very small fraction of the total energy density but due to the high scaling power once dominated
	$$\begin{align}
H^{2}(z) & =\dfrac{8\pi G}{3}\rho_{\mathrm{CR}} \dfrac{\rho}{\rho_{CR}} \\
H^{2} & =H_{0}^{2}\sum_{s}\Omega_{s} \dfrac{\rho_{s}(z)}{\rho_{0}} \\
 & =H_{0}^{2}\sqrt{ \Omega_{\gamma}(1+z)^{4}+\Omega_{\mathrm{NR}}(1+z)^{3}+\Omega_{\mathrm{DE}} \dfrac{\rho_{\mathrm{DE}}(z)}{\rho_{\mathrm{DE},0}}+\Omega_{\nu}\left( \dfrac{\rho_{\nu}(z)}{\rho_{\nu,0}} \right)  }
\end{align}$$
	- Can then calculate age of the universe
		$$
t=\int_{0}^{t'} dt'=\int_{0}^{a} \dfrac{da'}{a'H(a')}=\int_{z}^{\infty} \dfrac{dz'}{(1+z')H(z')}
$$
