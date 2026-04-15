# Einstein Equations
$$
R_{\mu \nu}-\dfrac{1}{2}g_{\mu \nu}R=8\pi GT_{\mu \nu}
$$
- $R_{\mu \nu}$ is the Ricci tensor
- $R$ is the Ricci scalar: $R=g^{\mu \nu}T_{\mu \nu}$
- $T_{\mu \nu}$ is the stress-energy tensor for a homogeneous universe
	$$
T^{\mu}_{\nu}=\begin{pmatrix}
-\rho & 0 & 0 & 0 \\
 0& \mathcal{P} & 0 & 0 \\
0 & 0 & \mathcal{P} & 0 \\
0 & 0 & 0 & \mathcal{P}
\end{pmatrix}
$$
	$$
T_{\mu \nu}=g_{\mu'\mu}T^{\mu'}_{\nu}=\begin{pmatrix}
\rho & 0 & 0 & 0 \\
0 & a^{2}\mathcal{P} & 0 & 0 \\
0 & 0 & a^{2}\mathcal{P} & 0 \\
0 & 0 & 0 & a^{2}\mathcal{P}
\end{pmatrix}
$$
- LHS is a functional (function of a function) of $g_{\mu \nu}$ and encodes the geometry
- RHS encodes the matter in the universe
- $R_{\mu \nu}=\Gamma^{\alpha}_{\mu \nu,\alpha}-\Gamma^{\alpha}_{\mu \alpha,\nu}+\Gamma^{\alpha}_{\beta\alpha}\Gamma^{\beta}_{\mu \nu}-\Lambda^{\alpha}_{\beta \nu}\Gamma^{\beta}_{\mu\alpha}$
	- $\Gamma_{\mu \nu,\alpha}^{\alpha}=\dfrac{ \partial \Gamma_{\mu \nu}^{\alpha} }{ \partial x^{\alpha} }$
	- Commas indicate derivatives
- EX: calculate $R_{00}$
	- $\Gamma_{ij}^{0}=\delta_{ij}a\dot{a}$ $\Gamma_{0j}^{i}=\delta_{ij} \dfrac{\dot{a}}{a}$
	$$\begin{align}
R_{00} & =\Gamma_{00,\alpha}^{\alpha}-\Gamma_{\alpha,0}^{\alpha}+\Gamma_{\alpha\beta}^{\alpha}\Gamma_{00}^{\beta}-\Gamma_{\beta0}^{\alpha}\Gamma_{\alpha0}^{\beta} \\
\Gamma_{00}^{\alpha} & =\Gamma_{00}^{\beta} =0 \\
R_{00} & = -\Gamma_{0\alpha,0}^{\alpha}-\Gamma_{\beta0}^{\alpha}\Gamma_{\alpha0}^{\beta} \\
\alpha=i & \;\;\beta=j \\
 & =-\Gamma_{0i,0}^{i}-\Gamma_{j0}^{i}\Gamma_{i0}^{j} \\
 & =\partial_{t}(\delta_{ii} \dfrac{\dot{a}}{a})-\delta_{ij}\delta_{ji}\left( \dfrac{\dot{a}}{a} \right) ^{2} \\
 & =-\delta_{ii}\partial_{t} \left( \dfrac{\dot{a}}{a} \right) -\delta_{ij}\delta_{ij}\left( \dfrac{\dot{a}}{a} \right) ^{2} \\
 & =-3\left[ \dfrac{\ddot{a}}{a}-\dfrac{\dot{a}^{2}}{a} \right] -3\left( \dfrac{\dot{a}}{a} \right) ^{2} \\
 & =-3 \dfrac{\ddot{a}}{a}
\end{align}$$
- Claim $R_{ij}=\delta_{ij}\left[ 2\dot{a}^{2}+a\ddot{a} \right]$
	$$\begin{align}
R & =g^{00}R_{00}+\sum_{i=1}^{3} g^{ii}R_{ii} \\
 & =-\left( -3 \dfrac{\ddot{a}}{a} \right) +\dfrac{1}{a^{2}}(3)\left( 2\dot{a}^{2}+a\ddot{a} \right)  \\
 & =6\left[ \dfrac{\ddot{a}}{a}+\left( \dfrac{\dot{a}}{a} \right) ^{2} \right]  \\
R_{00}-\dfrac{1}{2}g_{00}R & =8\pi GT_{00} \\
-\dfrac{3\ddot{a}}{a}-\dfrac{1}{2}(-1)\left( 6\left[ \dfrac{\ddot{a}}{a}+\left( \dfrac{\dot{a}}{a} \right) ^{2} \right]  \right)  & =8\pi G\rho \\
3\left( \dfrac{\dot{a}}{a} \right) ^{2} & =8\pi G\rho \\
\boldsymbol{\left( \dfrac{\dot{a}}{a} \right) ^{2}} & \boldsymbol{=\dfrac{8\pi G}{3}\rho}
\end{align}$$
# Boltzmann Equation
$$
\dfrac{ \mathrm{d} f(\vec{p},\vec{x},t) }{ \mathrm{d} t } =\mathcal{C}[f]
$$
- $\mathcal{C}$ is the collision term
	- Only collisions can move a particle in phase space beyond their normal motion
- Ex: non relativistic particle
	$$\begin{align}
\vec{\dot{x}} & =\dfrac{\vec{p}}{m} \\
\vec{\dot{p}} & =ma \\
\dfrac{ \mathrm{d} f }{ \mathrm{d} t }  & =\dfrac{ \partial f }{ \partial t } +\dfrac{ \mathrm{d} \vec{x} }{ \mathrm{d} t } \cdot \dfrac{ \partial f }{ \partial x } +\dfrac{ \mathrm{d} \vec{p} }{ \mathrm{d} t } \cdot \dfrac{ \partial f }{ \partial \vec{p} } =0\;\;\mathrm{no\;collisions} \\
\end{align}$$
	- In 1D a particle with $E=\dfrac{p^{2}}{2m}+\dfrac{1}{2}kx^{2}$
	$$\begin{align}
\dot{x} & =\dfrac{p}{m} \\
\dot{p} & =-kx \\
\dfrac{ \partial f }{ \partial t } +\dfrac{p}{m}\dfrac{ \partial f }{ \partial x } -kx \dfrac{ \partial f }{ \partial p }  & =0 \\
\end{align}$$
		- In equilibrium $\dfrac{ \partial f }{ \partial t }=0$
		- Claim $f=f(x,p)=f(E)$ solves the above
	$$\begin{align}
\dfrac{ \partial f }{ \partial x }  & =\dfrac{ \partial E }{ \partial x } \dfrac{ \partial f }{ \partial E } =kx\dfrac{ \partial f }{ \partial E }  \\
\dfrac{ \partial f }{ \partial p }  & =\dfrac{ \partial E }{ \partial p } \dfrac{ \partial f }{ \partial E } =\dfrac{p}{m}\dfrac{ \partial f }{ \partial E }  \\
\dfrac{p}{m}kx\dfrac{ \partial f }{ \partial E }  -kx \dfrac{p}{m}\dfrac{ \partial f }{ \partial E }  & =0 \\
\end{align}$$
## In cosmology
	$$
\dfrac{ \mathrm{d} f }{ \mathrm{d} t } =\dfrac{ \partial f }{ \partial t } +\dfrac{ \partial f }{ \partial \vec{x} } \dfrac{ \partial \vec{x} }{ \partial t } +\dfrac{ \partial f }{ \partial p } \dfrac{ \partial p }{ \partial t } +\dfrac{ \partial f }{ \partial \hat{p}^{i} } \dfrac{ \partial \hat{p}^{i} }{ \partial t }
$$
- $\dfrac{ \partial f }{ \partial \vec{x} }=0$ because universe is homogenous
- $\dfrac{ \partial f }{ \partial \hat{p}^{i} }\dfrac{ \partial \hat{p}^{i} }{ \partial t }=0$ because universe is homogenous and direction doesn't change since there are no collisions
$$\begin{align}
\dfrac{ \mathrm{d} p }{ \mathrm{d} t } :\dfrac{ \mathrm{d} p^{0} }{ \mathrm{d} \lambda } =-\Gamma_{ij}^{0}\mathcal{P}^{i}\mathcal{P}^{j} & =E \dfrac{ \mathrm{d} E }{ \mathrm{d} t } =-\delta_{ij}a\dot{a}\mathcal{P}^{i}\mathcal{P}^{j} \\
E\dfrac{ \mathrm{d} E }{ \mathrm{d} t }  & =-\dfrac{\dot{a}}{a}a^{2}\vec{p}^{2} \\
\dfrac{1}{2} \dfrac{ \mathrm{d} E^{2} }{ \mathrm{d} t }  & =-\dfrac{\dot{a}}{a}^{2}\vec{p}^{2} \\
E^{2} & =p^{2}+m^{2} \\
\dfrac{1}{2}\dfrac{ \mathrm{d}  }{ \mathrm{d} t } \left[ p^{2}+m^{2} \right]  & =-Hp^{2} \\
\dfrac{\dot{p}}{p} & =-H \\
\dfrac{dp}{p} & =-\dfrac{da}{a}\ln p=\ln a+C \\
p & =\dfrac{c}{a} \\
\dfrac{ \partial f }{ \partial t }  - Hp \dfrac{ \partial f }{ \partial p }  & =\mathcal{C}(p)
\end{align}$$
- Neutrinos at early time are in equilibrium $f=\dfrac{1}{e^{p/T}+1}$
- How does $f$ evolve as $a$ increases given that neutrinos have stopped interacting
	$$\begin{align}
f_{\mathrm{init}} & =\dfrac{1}{e^{E(p)/T}+1} \\
E & =\sqrt{ p^{2}+m^{2} } \\
\dfrac{ \partial f }{ \partial t }  & =-f^{2}e^{E/T}-\dfrac{E}{T^{2}}\dot{T} \\
\dfrac{ \partial f }{ \partial p }  & =-f^{2}e^{E/T} \dfrac{p}{ET} \\
\mathrm{is\;} \dfrac{E}{T^{2}}\dot{T}+H \dfrac{p^{2}}{ET} & =0\mathrm{?} \\
\dfrac{\dot{T}}{T}  \dfrac{1}{H}+\dfrac{p^{2}}{E^{2}} & =0
\end{align}$$
	- There is no physical way for neutrinos to have this form
- Integrate over momentum
	$$\begin{align}
 \int \dfrac{d^{3}p}{(2\pi)^{3}}\left[ \dfrac{ \partial f }{ \partial t } -pH\dfrac{ \partial f }{ \partial p } -\mathcal{C} \right]  & =0 \\
\dfrac{ \mathrm{d} n }{ \mathrm{d} t } -H\int \dfrac{d^{3}p}{(2\pi)^{3}}p\dfrac{ \mathrm{d} f }{ \mathrm{d} p }  & =\int \dfrac{d^{3}p}{(2\pi)^{3}}\mathcal{C}(p)\;\mathrm{continuity\; equation} \\
\dfrac{ \mathrm{d} n }{ \mathrm{d} t } +3Hn & =\int \mathcal{C}(p)
\end{align}$$
	- Integrated the second term with integration by parts
	- Find that in the absence of collisions $n\propto a^{-3}$