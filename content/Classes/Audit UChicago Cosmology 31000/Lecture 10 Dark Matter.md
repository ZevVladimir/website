## DM as weakly interacting massive particles (WIMPS)
- Consider particle with mass M
	- $X+l\leftrightarrow X+l$
		- Where $l$ is a light particle (e.g. $e^{-},e^{+},\gamma,q,\bar{q}$)
	- $X+X\leftrightarrow l+l$
	- The process dictates the relic abundance of X which can be observed
	$$\begin{align}
	\Omega \times h^{2} & =0.14\equiv \dfrac{\rho_{X,0}}{\rho_{crit}}h^{2} \\
	a^{-3}\dfrac{ \mathrm{d}  }{ \mathrm{d} t } \left( n\times a^{3} \right)  & =(n_{x}^{(0)})^{2}\left[ \left[ \dfrac{n_{l}}{n_{l}^{(0)}}\right]^{2} - \left( \dfrac{n_{x}}{n_{x}^{(0)}} \right) ^{2}  \right] \langle \sigma v \rangle
	\end{align}$$
	- Light particles are kept in equilibrium with $n_{l}=n_{l}^{(0)}$
	- Define $Y\equiv \dfrac{n_{x}}{T^{3}}$
	$$\begin{align}
a^{-3}\dfrac{ \mathrm{d}  }{ \mathrm{d} t } \left[ T^{3}a^{3}Y \right]  & =\langle \sigma v \rangle \left[ n_{x}^{(0)^{2}} -n_{x}^{2}\right]  \\
 & =\langle \sigma v \rangle T^{6}\left[ Y_{EQ}^{2}-Y^{2} \right]  \\
Y_{EQ} & =\dfrac{n_{x}^{(0)}}{T^{3}} \\
 & =\begin{cases}
\dfrac{1}{T^{3}}\left( \dfrac{mT}{2\pi} \right) ^{3/2}e^{-m/T} & m\gg T \\
\dfrac{2}{\pi^{2}} & m<T
\end{cases} \\
\dfrac{ \mathrm{d} Y }{ \mathrm{d} t }  & =T^{3}\langle \sigma v \rangle \left[ Y_{EQ}^{2}-Y^{2} \right]  \\
\dfrac{ \mathrm{d} Y }{ \mathrm{d} T }  & =\dfrac{ \mathrm{d} x }{ \mathrm{d} t } \dfrac{ \mathrm{d} Y }{ \mathrm{d} x }  \\
x & \equiv \dfrac{m}{T} \\
\dfrac{ \mathrm{d} x }{ \mathrm{d} t }  & =-\dfrac{m}{T^{2}}\dot{T} =\dfrac{m}{T}H=xH \\
\dfrac{ \mathrm{d} Y }{ \mathrm{d} x }  & =\dfrac{1}{xH} \dfrac{m^{3}}{x^{3}}\langle \sigma v \rangle \left[ Y_{EQ}^{2}-Y^{2} \right]  \\
\mathrm{For\;Radiation\;Dominated\;} & H\propto T^{2} \\
H(T) & =\dfrac{H(x=1)}{x^{2}}\implies \dfrac{ \mathrm{d} Y }{ \mathrm{d} x } =\lambda  \dfrac{1}{x^{2}}\left[ Y_{EQ}^{2}-Y^{2} \right]  \\
\lambda & \equiv\dfrac{m^{3}\langle \sigma v \rangle}{H(T=m)} \\
\end{align}$$
	- As $Y$ departs from $Y_{EQ}$ it quickly becomes much larger
	$$\begin{align}
\dfrac{ \mathrm{d} Y }{ \mathrm{d} x }  & =-\dfrac{\lambda Y^{2}}{x^{2}} \\
\dfrac{ \mathrm{d} Y }{ Y^{2} } &  =-\dfrac{\lambda}{x^{2}}dx -\dfrac{1}{Y}|_{Y_{f_{0}}}^{Y_{1}}=\dfrac{\lambda}{x}|_{x_{f_{0}}}^{x_{1}} \\
-\dfrac{1}{Y_{\infty}}+\dfrac{1}{Y_{f_{0}}} & =\lambda \left[ \dfrac{1}{x_{1}}-\dfrac{1}{x_{f_{0}}} \right]  \\
-\dfrac{1}{Y_{\infty}}+\dfrac{1}{Y_{f_{0}}} & =\lambda \left[ \dfrac{1}{x_{1}}-\dfrac{1}{x_{f_{0}}} \right]  \\
-\dfrac{1}{Y_{\infty}} & \simeq -\dfrac{\lambda}{x_{f_{0}}} \\
\implies & Y_{\infty}=\dfrac{x_{f_{0}}}{\lambda} \\
 & =\dfrac{x_{f_{0}}}{m^{3}\langle \sigma v \rangle }\sqrt{ \dfrac{8\pi G}{3} \dfrac{2\pi^{2}}{30}g_{\star}m^{4} }
\end{align}$$
	- $x_{f_{0}}$ is relatively model independent since $Y_{EQ}$ drops exponentially
	- $g_{\star}$ is the number of degrees of freedom
	- $\dfrac{2\pi^{2}}{30}$ is the coefficient of $\dfrac{\rho}{T^{4}}$ for massless boson
	$$\begin{align}
\boldsymbol{Y_{\infty}} & =\boldsymbol{\dfrac{x_{f_{0}}}{m\langle \sigma v \rangle }\sqrt{ \dfrac{4\pi^{3}G}{45}g_{\star} }} \\
\Omega_{x} & \equiv \dfrac{\rho_{x,0}}{\rho_{crit}}=\dfrac{n_{x,0}m}{\rho_{crit}} \\
 & =\dfrac{n_{x,1}}{3}\left( \dfrac{a_{0}}{a_{1}} \right) ^{3}m8\pi G \\
 & =\dfrac{Y_{\infty}T_{1}^{3}\left( \dfrac{a_{0}}{a_{1}} \right)^{3} m8\pi G}{3H_{0}^{2}} \\
 & =\left( \dfrac{x_{f_{0}}}{20} \right)  \dfrac{2\cdot10^{-26}\mathrm{cm^{3}}}{\langle \sigma v \rangle }\left( \dfrac{g_{\star}}{100} \right) ^{1/2}h^{2} 
\end{align}$$
	- WIMP miracle that any mass works depends on the cross section
## Scalar Fields
- A homogeneous scalar field has
	- $\rho=\dfrac{1}{2}\dot{\phi}+V(\phi)$
	- $\mathcal{P}=\dfrac{1}{2}\dot{\phi}^{2}-V(\phi)$
	$$\begin{align}
\mathrm{Know:\;}\dfrac{ \mathrm{d} \rho }{ \mathrm{d} t }  +3H\left[ \mathcal{P}+\rho \right]  & =0 \\
\dfrac{ \mathrm{d}  }{ \mathrm{d} t } \left[ \dfrac{1}{2}\dot{\phi}^{2}+V(\phi) +3H\dot{\phi}^{2}\right]  & =0 \\
\dot{\phi} \ddot{\phi}+\dot{\phi}\dfrac{ \mathrm{d} V }{ \mathrm{d} \phi } +3H\dot{\phi}^{2} & =0 \\
\ddot{\phi}+3H\dot{\phi}+V' & =0
\end{align}$$
### Consider limits
1. $m\gg H$
	- Technically $m^{2}\equiv \dfrac{ \mathrm{d} ^{2}V }{ \mathrm{d} \phi^{2} }$
	- Assume $V(\phi)=\dfrac{1}{2}m^{2}\phi^{2}$
	- $\ddot{\phi}+3H\dot{\phi}+m^{2}\phi=0$
		- Equation for damped harmonic oscillator
		- Spring constant $m^{2}$
		- Friction coefficient $3H$
	- In this limit we can drop $3H\dot{\phi}$
	$$\begin{align}
\phi & =A\cos mt+B\sin mt \\
\dot{\phi} & =-Am\sin mt +Bm\cos mt \\
\rho & =\dfrac{1}{2}m^{2}\left[ A^{2}\sin ^{2}mt+B^{2}\cos ^{2}mt-2AB\cos mt\sin mt \right] +\dfrac{1}{2}m^{2}\phi^{2} \\
\rho & =\dfrac{1}{4}m^{2}\left[ A^{2}+B^{2} \right] +\dfrac{1}{2}m^{2}\left[ A^{2}\cos ^{2}mt+B^{2}\sin ^{2}mt+2AB\cos mt\sin mt \right]  \\
 & =\dfrac{1}{2m^{2}(A^{2}+B^{2})} \\
\mathcal{P} & =\dfrac{1}{2}\dot{\phi}^{2}+V\to0 \\
\implies & \dfrac{\mathcal{P}}{\rho} =0\equiv w \\
\mathrm{Scalar\;field\;behaves\;as\;cold\;DM\;} \rho_{\phi}  & \propto a^{-3} \\
\dfrac{ \mathrm{d} \rho }{ \mathrm{d} t } +3H\rho & =0 \\
\implies & \dfrac{ \mathrm{d} \rho }{ \mathrm{d} \rho }  =-3 \dfrac{\mathrm{d}t}{a}\dfrac{ \mathrm{d} a }{ \mathrm{d} t } =-3 \dfrac{\mathrm{d}a}{a} \\
\ln \rho & -3\ln a \implies \rho \propto a^{-3}
\end{align}$$
2. $m\ll H$
	- Slow roll
	- In small time $\Delta t$ $\phi$ changes by
		- $3H\Delta \phi=-m^{2}\phi\Delta t\implies \dfrac{\Delta \phi}{\phi}=(-\Delta tH)\left( \dfrac{m^{2}}{3H^{2}} \right)$
		- The field is trapped
	- $\rho \simeq V$ and $\mathcal{P}\simeq -V$ means $w=-1$
	- Expect the scalar field to start (when $m<H$) at some value $\phi$ with $w=-1$
	- As $H$ drops below $m$ $w\to-1\to0$ (like CDM)
	- $-1\leq w\leq0$

