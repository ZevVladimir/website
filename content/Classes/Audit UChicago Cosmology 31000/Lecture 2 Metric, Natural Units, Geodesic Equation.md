# Metric
- A metric transforms coordinate differences into physical distances
## 2D
- Cartesian: $ds^{2}=dx^{2}+dy^{2}=\sum_{i,j}g_{ij}dx^{i}dx^{j}$
	- Where $x^{1}=x;\;x^{2}=y$
	- So the metric $g_{ij}=\begin{pmatrix}1&0\\0&1\end{pmatrix}$
- Polar: $x^{1}=r;\;x^{2}=\theta$ so $g_{ij}=\begin{pmatrix}1 & 0 \\ 0 & r^{2}\end{pmatrix}$
## 3+1 D
- $x^{0}=t;\;x^{1}=x;\;x^{2}=y;\;x^{3}=z$
- $g_{\mu \nu}\to \eta_{\mu \nu}=\begin{bmatrix}-1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1\end{bmatrix}$
	- Where $\eta_{\mu \nu}$ is the Minkowski metric
- $ds^{2}=g_{\mu \nu}dx^{\mu}dx^{\nu}$
	- Einstein notation where we don't put the sum and instead know to sum if there are matching indices (here $\mu$ and $\nu$ both appear twice so sum over both)
- Contravariant/Covariant
	- $a^{\mu}:a_{\mu}=g_{\mu \nu}a^{\nu}$ (here we only sum over $\nu$)
- Application
	$$\begin{align}
g_{\mu \nu} & =g_{\mu \mu'}+g_{\nu \nu'}g^{\mu'\nu'}
\end{align}$$
- $g_{\nu \nu'}g^{\mu'\nu'}$ needs to set $\mu'$ to $\nu$ so that $g_{\mu \mu'}$ matches with $g_{\mu \nu}$
	- So: $g_{\nu \nu'}g^{\mu'\nu'}=\delta_{\nu}^{\mu'}$ is the kronecker delta where $=1 \mathrm{\;if\;}\mu'=0$
- $g_{\nu \nu'}g^{\nu'\mu'}\implies g^{\mu \nu}$ is the inverse of $g_{\mu \nu}$
## FLRW Metric
- Used for cosmology 
- Only valid in a homogenous universe
- $g_{\mu \nu}=\begin{bmatrix}-1 & 0 & 0 & 0 \\ 0 & a^{2} & 0 & 0 \\ 0 & 0 & a^{2} & 0  \\ 0 & 0 & 0 & a^{2}\end{bmatrix}$
- GR consists of
	- Matter determines the metric
	- Metric determines how particles move
# Natural units
- $\hbar=c=k_{B}=1$
	- $k_{B}=\dfrac{1\mathrm{eV}}{11605\mathrm{K}}$
	- $c=3\cdot10^{10}\mathrm{\dfrac{cm}{s}}$
	- $\hbar=6.582\cdot10^{−16}\mathrm{eVs}$
- Can then use these to manipulate dimensions to get what you want
# Geodesic Equation 
## 2D, Cartesian, No External Forces
- $\dfrac{ \mathrm{d} ^{2}x^{i} }{ \mathrm{d} t^{2} }=0$
## 2D, Polar, No External Forces
- $\dfrac{ \mathrm{d} x^{i} }{ \mathrm{d} t }=\dfrac{ \partial x^{i} }{ \partial x'^{j} }\dfrac{ \mathrm{d} x'^{j} }{ \mathrm{d} t }$
	- $\dfrac{ \partial x^{i} }{ \partial x'^{j} }$ is the transformation matrix
	- $x^{i}=(x,y)=(r\cos\theta,r\sin\theta);x^{ij}=(r,\theta)$
	- $\dfrac{ \partial x^{i} }{ \partial x'^{j} }=\begin{bmatrix}\cos\theta & -r\sin\theta \\ \sin\theta & r\cos\theta \end{bmatrix}$
	- Inverse: $\dfrac{1}{r}\begin{bmatrix}r\cos\theta & r\sin\theta \\ -\sin\theta & \cos\theta\end{bmatrix}$
- Taking second derivative
$$\begin{align}
\dfrac{ \mathrm{d} ^{2}x^{i} }{ \mathrm{d} t^{2} } & =0 \\
 & =\dfrac{ \mathrm{d}  }{ \mathrm{d} t }\left[ \dfrac{ \partial x^{i} }{ \partial x'^{j} }\dfrac{ \mathrm{d} x'^{j} }{ \mathrm{d} t } \right] \\
 & =\dfrac{ \partial x^{i} }{ \partial x'^{j} } \dfrac{ \mathrm{d} ^{2}x'^{j} }{ \mathrm{d} t^{2} } +\dfrac{ \mathrm{d} x'^{j} }{ \mathrm{d} x'^{k} } \dfrac{ \partial^{2}x'^{i} }{ \partial x'^{j}\partial x'^{k} } \dfrac{ \mathrm{d} x'^{k} }{ \mathrm{d} t }  \\
\mathrm{Multiply \;by\;} & \left[ \left( \dfrac{ \partial x }{ \partial x' }  \right) ^{-1} \right] ^{l}_{i} \\
0 & =\dfrac{ \mathrm{d} ^{2}x'^{l} }{ \mathrm{d} t^{2} } +\sum_{i,j,k}\left[ \left( \dfrac{ \partial x' }{ \partial x }  \right) ^{-1} \right]  ^{l}_{i}\dfrac{ \partial^{2}x^{i} }{ \partial x'^{j}\partial x'^{k} } \dfrac{ \mathrm{d} x'^{j} }{ \mathrm{d} t } \dfrac{ \mathrm{d} x'^{k} }{ \mathrm{d} t } 
\end{align}$$
- Define $\left[ \left( \dfrac{ \partial x' }{ \partial x } \right)^{-1} \right]^{l}_{i}\dfrac{ \partial^{2}x^{i} }{ \partial x'^{j}\partial x'^{k} }$ as the Christoffel symbol $\Gamma_{jk}$
## Generalize to 3+1 D
- **Geodesic equation**: $\dfrac{ \mathrm{d} ^{2}x^{\mu} }{ \mathrm{d} \lambda^{2} }+\Gamma_{\alpha\beta}^{\mu}\dfrac{ \mathrm{d} x^{\alpha} }{ \mathrm{d} \lambda }\dfrac{ \mathrm{d} x^{\beta} }{ \mathrm{d} \lambda }=0$
	- $\lambda$ is an affine parameter
		- Increases monotonically
		- Parametrizes the particle's path
		- Choose $\dfrac{ \mathrm{d} x^{\mu} }{ \mathrm{d} \lambda}=\mathcal{P}^{\mu}=[E,\vec{\mathcal{P}}]$
- Useful fact: $\Gamma_{\alpha\beta}^{\mu}=\dfrac{1}{2}g^{\mu \nu}\left[ \dfrac{ \partial g_{\nu\alpha} }{ \partial x^{\beta} }+\dfrac{ \partial g_{\nu\beta} }{ \partial x^{\alpha} }-\dfrac{ \partial g_{\alpha\beta} }{ \partial x^{\nu} } \right]$
- Apply geodesic equation to massless particle in cosmology in FLRW metric
	- $\Gamma_{\alpha\beta}^{0}=\dfrac{1}{2}g^{0\nu}\left[ \dfrac{ \partial g_{\nu\alpha} }{ \partial x^{\beta} } +\dfrac{ \partial g_{\nu\beta} }{ \partial x^{\alpha} }-\dfrac{ \partial g_{\alpha\beta} }{ \partial x^{\nu} }\right]$
		- Only values that contribute have $\nu=1$
		- Where $g^{01}=-1$
		- Only $\dfrac{ \partial g_{\alpha\beta} }{ \partial x^{\nu} }$ doesn't vanish
	- $\Gamma_{\alpha\beta}^{0}=\dfrac{1}{2}\dfrac{ \partial g_{\alpha\beta} }{ \partial t }$
	- $\Gamma_{00}^{0}=0$, $\Gamma_{ij}^{0}=\delta_{ij}a\dot{a}$
$$\begin{align}
\dfrac{ \mathrm{d} ^{2}x_{0} }{ \mathrm{d} \lambda^{2} } +\Gamma_{ij}^{0}\dfrac{ \mathrm{d} x^{i} }{ \mathrm{d} \lambda } \dfrac{ \mathrm{d} x^{j} }{ \mathrm{d} \lambda }  & =0 \\
\dfrac{ \mathrm{d} E }{ \mathrm{d} \lambda } +a\dot{a}\mathcal{P}^{i}\mathcal{P}^{i}=0
\end{align}$$
- For massless particles
	- $\mathcal{P}^{2}=0=g_{\mu \nu}\mathcal{P}^{\mu}\mathcal{P}^{\nu}=-E^{2}+a^{2}\vec{\mathcal{P}}^{2}$
		- $\vec{\mathcal{P}}^{2}=\mathcal{P}^{i}\mathcal{P}^{i}$
	- $\dfrac{ \mathrm{d} E }{ \mathrm{d} \lambda }+ \dfrac{a\dot{a}E^{2}}{a^{2}}=0$
		- Note: $\dfrac{ \mathrm{d}  }{ \mathrm{d} \lambda }=\dfrac{ \mathrm{d} t }{ \mathrm{d} \lambda }\dfrac{ \mathrm{d}  }{ \mathrm{d} t }=E\dfrac{ \mathrm{d}  }{ \mathrm{d} t }$
	$$\begin{align}
E\dfrac{ \mathrm{d} E }{ \mathrm{d} t } + \dfrac{\dot{a}}{a}E^{2} & =0 \\
\dfrac{1}{E}\dfrac{ \mathrm{d} E }{ \mathrm{d} t }  & =-\dot{a}\dfrac{ \mathrm{d} a }{ \mathrm{d} t }  \\
\ln \dfrac{E}{E_{i}} & =-\ln \dfrac{a}{a_{i}} \\
\dfrac{E}{E_{i}} & =\dfrac{a_{i}}{a}
\end{align}$$