# Star Formation Near Solar Neighborhood
- Stars form in molecular clouds $(\mathrm{H_{2}},\mathrm{CO})$
	- $M\sim10^{5}\mathrm{M_{\odot}}\;R\sim10\mathrm{pc}\;T\sim10-100\mathrm{K}\;n\sim10-300$
	- Dust mass fraction $\sim1\%$
- For zero metallicity need $\mathrm{H_{2}}$ for star formation
	- Otherwise $\mathrm{H_{2}}$ doesn't stimulate star formation
	- But it is heavily correlated with it
## Low $Z$
- $H^{-}+H\to H_{2}+e^{-}$
	- Rate limiting step
- There is also a $\mathrm{H_{2}^{+}}$ pathway but that is much slower
## High $Z$
- $R_{d}=3.5\times10^{-17}f_{\mathrm{dg}}C\sqrt{ \dfrac{T_{d}}{100\mathrm{K}} }\mathrm{cm^{3}s^{-1}}$
	- $f_{\mathrm{dg}}$ is the normalized dust to gas ratio
	- $C$ is the clumping fraction
	- $T_{d}$ is the dust temperature
## Stages of star formation
1. Collapse from interstellar cloud
$$\begin{align}
\mathrm{Virial\;Theorem:\;} 2K+U & =0\\ \\
\mathrm{Spherical\;Cloud:\;} U & =-\dfrac{3}{5} \dfrac{GM^{2}}{R} \\
K & =\dfrac{3}{2}nkT=\dfrac{3}{2} \dfrac{M}{m}kT \\
\dfrac{3M}{m}kT & =\dfrac{3}{5}GM^{2}R^{-1} \\
\rho & = \dfrac{M}{\dfrac{4}{3}\pi R^{3}} \\
M & =\dfrac{4}{3}\pi R^{3}\rho \\
\dfrac{M}{m}kT & =\dfrac{3}{5}GM^{2}\left( \dfrac{M}{\dfrac{4}{3}\pi \rho} \right) ^{-1/3}  \\
& =\dfrac{3}{5}GM^{5/3}\left( \dfrac{4}{3}\pi \rho \right) ^{1/3} \\
M^{2/3} & =\dfrac{5kT}{G}\left( \dfrac{4}{3}\rho \pi \right) ^{1/3}m \\
\rho & =nm \\
M & =\left(  \dfrac{5kT}{GM\left( \dfrac{4}{3}\pi \right) ^{1/3}}\right)^{3/2}\left( nm \right) ^{-1/3}\;\mathrm{Jean's\;Mass} \\
M & \propto T^{3/2}n^{-1/2}\;\mathrm{Masses\;larger\;collapse} 
\end{align}$$
2. Cloud fragmentation
3. Formation of a protostellar core
	- During collapse
		- Heating scales as $n$
		- Cooling scales as $n^{2}$
	- Until optically thick then radiation gets trapped
	- $T$ and $P$ increase slowing collapse until HE is reached (protostar)
4. Grow protostar
	- Form an accretion disk
	- $L_{\mathrm{acc}}=\dfrac{GM\dot{M}}{2R}$
		- $M$ is the core mass
		- $\dot{M}$ is the accretion rate
		- $R$ is the core radius
		- $\dfrac{1}{2}$ is from $\dfrac{1}{2}$ the energy being radiated and $\dfrac{1}{2}$ being absorbed by the accretion disk
5. Dissociation and Ionization
6. Pre-main-sequence phase
	- $T\propto M^{2/3}\rho^{1/3}$
### Estimate protostellar radius
$$\begin{align}
E_{\mathrm{tot}} & =\dfrac{1}{2}E_{\mathrm{grav}} \\
E_{\mathrm{grav}} & =-\dfrac{\alpha GM^{2}}{R} \;\mathrm{For\;arbitrary\;distribution} \\
\mathrm{Dissociation\;Energy\;}\chi_{\mathrm{H_{2}}} & =4.48\mathrm{eV}\;\chi_{\mathrm{H}}=13.6\mathrm{eV}\;\chi_{\mathrm{He}} =24.59+54.4=79\mathrm{eV} \\
-\dfrac{\alpha}{2} \dfrac{GM^{2}}{R_{p}} & =\dfrac{M_{\mathrm{tot}}}{m_{u}}\left( \dfrac{1}{2}X_{\mathrm{H_{2}}}\chi_{\mathrm{H_{2}}}+X_{\mathrm{H}}\chi_{\mathrm{H}}+\left(\dfrac{1-X}{4} \right) \chi_{\mathrm{He}} \right)  \\
R_{P} & \approx50R_{\odot }\left( \dfrac{M}{M_{\odot }} \right) \;\mathrm{Protostar\; is\; very\; large} \\
\bar{T} & =\dfrac{\alpha}{3} \dfrac{\mu m_{u}}{k} \dfrac{GM}{R} \\
\bar{T} & \sim \mathrm{const}\; \propto M\; \mathrm{cancels \; with\;}R\propto M \\
\bar{T} & \sim 8\cdot10^{4}\mathrm{K}\\
\end{align}$$
- $X_{\mathrm{element}}$ indicates the mass fraction of $\mathrm{element}$
- $\bar{T}$ is much lower than $T_{\odot}$ so high $\kappa$ so star is fully convective
# Hayashi Line
- For fully convective star: $P=K\rho^{5/3}$ (a polytrope)
	- $k$ is $\mathrm{const}=GN_{3/2}M^{(n-1)/n}R^{(3-n)/n}$
$$\begin{align}
\nabla_{\mathrm{ad}} & =0.4 \\
 & =\dfrac{ \mathrm{d} \log T }{ \mathrm{d} \log P }  \\
\log T & =\log P^{0.4} \\
P & \propto \rho T\to \rho P^{0.4} \\
P & \propto \rho^{5/3} \\
n & =\dfrac{1}{\gamma-1}=\dfrac{1}{\dfrac{5}{3}-1}=\dfrac{3}{2} \\
\mathrm{Polytrope\;with\;}n & =\dfrac{3}{2} \\
k & =G\cdot0.42422M^{1/3}R \\
P & =G\cdot0.42422M^{1/3}R\rho^{5/3}
\end{align}$$
## In Photosphere $\tau=\dfrac{2}{3}$
$$\begin{align}
L & = 4\pi R^{2}\sigma T_{\mathrm{eff}} \\
\tau_{\mathrm{photosphere}} & =\int_{R}^{\infty}\kappa \rho dr\approx\kappa_{\mathrm{ph}}\int_{R}^{\infty}\rho dr=\dfrac{2}{3} \\
\dfrac{ \mathrm{d} P }{ \mathrm{d} m }  & =-\dfrac{GM}{4\pi r^{4}}-\dfrac{1}{4\pi r^{2}}\dfrac{ \mathrm{d} ^{2}r }{ \mathrm{d} t^{2} }  \\ \\
\mathrm{Assume \;equilibrium:\;} \dfrac{ \mathrm{d} P }{ \mathrm{d} m } & =-\dfrac{Gm}{4\pi r^{4}} \\
\dfrac{ \mathrm{d} r }{ \mathrm{d} m }  & =\dfrac{1}{4\pi r^{2}\rho} \\
\dfrac{ \mathrm{d} P }{ \mathrm{d} m } \dfrac{ \mathrm{d} m }{ \mathrm{d} r }  & =\dfrac{ \mathrm{d} P }{ \mathrm{d} r }  \\
 & =-\dfrac{Gm}{4\pi r^{4}}4\pi r^{2}\rho \\
 & =-\dfrac{Gm}{r^{2}}\rho \\
\int \dfrac{ \mathrm{d} P }{ \mathrm{d} r }  & =\dfrac{GM}{R^{2}}\bigg\vert_{R}^{\infty}\rho dr \\
R(r) & =\dfrac{GM}{R^{2}}\int_{R}^{\infty}\rho dr \\
P & =\dfrac{2}{3} \dfrac{GM}{\kappa_{\mathrm{ph}}R^{2}}
\end{align}$$
- Equations 
1. $P=\dfrac{2}{3} \dfrac{GM}{\kappa R^{2}}$ at the photosphere
2. $L=4\pi R^{2}\sigma T^{4}$ at the photosphere
3. $P=\dfrac{\mathcal{R}}{\mu}\rho T$
4. $P=0.42422GM^{1/3}R\rho^{5/3}$
5. $\kappa=\kappa_{0}\rho^{a}T^{b}$ (assumption)
- Goal is to isolate $T,M,L$ ask at fixed $M$ how do things evolve on the H-R diagram
- Notes have the algebra:
- $\log T=C+\left[ \dfrac{a+3}{9a+2b+3} \right]\log M+\left[ \dfrac{\dfrac{3}{2}a-\dfrac{1}{2}}{9a+2b+3} \right]\log L$
- For convective cool stars
	- $a\approx0.5$
	- $b\approx9$
	- $\log T\propto0.01\log L\to0.14\log M$
	- Close to a vertical line on the H-R diagram
## Henyey Track 
- Radiative Homologous star
- Again look at notes for algebra
- $\log L\propto \dfrac{22}{5}\log M+\dfrac{4}{5}\log T$
	- WIth Kramers opacity: $a=1$ and $b=-\dfrac{7}{2}$
- Stars star moving to the left on H-R diagram
## Summary
- Stars first contract and are convective due to high opacity
	- Described by a polytrope with $n=\dfrac{3}{2}$
	- Contraction is homologous
- As contraction raises internal temperature
	- Radiative core develops
	- Star moves left on H-R diagram
- Once $T$ is high enough for fusion
	- Contraction stops
	- Reach main sequence