## Equation of state relation
- An equation of state relates pressure to what it depends on $P=P(\rho,T,\chi_{i})$
$$\begin{align}
dP & =\left( \frac{ \partial P }{ \partial \rho }  \right) _{T}d\rho + { \left( \frac{ \partial P }{ \partial T }  \right) _{\rho}}dT \\
\left( \frac{ \partial P }{ \partial \rho }  \right) _{T} & =\left( \dfrac{P}{\rho}  \frac{ \partial \log P }{ \partial \log \rho } \right) _{T} \\
\left( \frac{ \partial P }{ \partial T }  \right) _{\rho} & =\left( \dfrac{P}{T} \frac{ \partial \log P }{ \partial \log T }  \right) _{\rho} \\
dP  & = \dfrac{P}{\rho}\left( \frac{ \partial \log P }{ \partial \log \rho }  \right) _{T}d\rho + \left( \frac{ \partial \log P }{ \partial \log T }  \right) _{\rho} \dfrac{P}{T}dT \\
\dfrac{dP}{P} & =\dfrac{1}{\rho} \left( \frac{ \partial \log P }{ \partial \log \rho } \right) _{T}d\rho + \left( \frac{ \partial \log P }{ \partial \log T }  \right) _{\rho} \dfrac{1}{T}dT \\
\chi_{\rho} & = \left( \frac{ \partial \log P }{ \partial \log \rho }  \right) _{T} \\
\chi_{T} & =\left( \frac{ \partial \log P }{ \partial \log T }  \right) _{\rho} \\
\log P+\mathrm{const} & =\log \rho \chi_{\rho}+\log T\chi_{T} \\
\boldsymbol{P}  & =\boldsymbol{P_{0}\rho^{\chi_{\rho}}T^{\chi_{T}}}
\end{align}$$
## Thermodynamics laws and specific heat
- First law of thermodynamics
	- $dU=dQ-PdV$
	- $du=dq-Pdv$
		- Lowercase letters indicate the "specific" ___ of something
		- $U=u\rho$
		- $V=v\rho$
- Second law of thermodynamics
	- $dS=\dfrac{dQ}{T}$
	- $ds=\dfrac{dq}{T}$
	- $dq=cdT$ specific heat
		- Volume=v=constant
		$$\begin{align}
du & =cdT \\
c_{v} & =\left( \frac{ \partial u }{ \partial t }  \right) _{v}
\end{align}$$
		- Pressure=p=constant
		$$\begin{align}
du+Pdv & =cdT \\
c_{p} & =\frac{ \partial  }{ \partial T } (du+Pdv) \\
v & =\dfrac{1}{\rho} \\
dv & =-\dfrac{1}{\rho^{2}}d\rho \\
\left( \frac{ \partial v }{ \partial T }  \right) _{P} & =-\dfrac{1}{\rho^{2}}\left( \frac{ \partial \rho }{ \partial T }  \right) _{P} \\
 & =\left( \frac{ \partial u }{ \partial T }  \right) _{P} - \dfrac{P}{\rho^{2}}\left( \frac{ \partial \rho }{ \partial T }  \right) _{P}
\end{align}$$
- Ideal gas
$$\begin{align}
P & =\dfrac{2}{3}U \\
u & =\dfrac{3}{2} \dfrac{P}{\rho} \\
P & =\dfrac{R}{\mu}\rho T \\
u & =\dfrac{3}{2} \dfrac{R}{\mu}T \\
c_{v} & =\dfrac{3}{2} \dfrac{R}{\mu}
\end{align}$$
- Relativistic gas
$$\begin{align}
U & =aT^{4} \\
u & =a \dfrac{T^{4}}{\rho} \\
c_{v} & =\dfrac{4aT^{3}}{\rho}
\end{align}$$
- Now apply these with constant pressure to relate the two specific heats
$$\begin{align}
\dfrac{dP}{P} & =\chi_{T} \dfrac{dT}{T}+\chi_{\rho} \dfrac{d\rho}{\rho} \\
P & =\mathrm{const} \\
dP & =0 \\
\chi_{T} \dfrac{dT}{T} & =-\chi_{\rho} \dfrac{d\rho}{\rho} \\
\left( \frac{ \partial \rho }{ \partial T }  \right) _{P} & =-\dfrac{\rho}{T} \dfrac{\chi_{T}}{\chi_{\rho}} \\
\mathrm{EoS}\to P & \equiv P(\rho,T) \equiv P(U) \\
du & =\left( \frac{ \partial u }{ \partial T }  \right) _{\rho} dT + \left( \frac{ \partial u }{ \partial \rho }  \right)_{T} d\rho \\
\dfrac{du}{dT} & =\left( \frac{ \partial u }{ \partial T }  \right) _{\rho} +\left( \frac{ \partial u }{ \partial \rho }  \right) _{T} \dfrac{d\rho}{dT} \\
\left( \frac{ \partial u }{ \partial T }  \right) _{P} & =\left( \frac{ \partial u }{ \partial T }  \right) _{\rho} + \left( \frac{ \partial u }{ \partial \rho } \right) _{T}+\left( \frac{ \partial \rho }{ \partial T }  \right) _{P} \\
\mathrm{1st \;law}\; dq & =du+PdV =du-\dfrac{P}{\rho^{2}}d\rho \\
\mathrm{2nd \;law}\; ds & =\dfrac{dq}{T} \\
ds  & = \dfrac{1}{T}\left[ du - \dfrac{P}{\rho^{2}}d\rho \right]  \\
 & = \dfrac{1}{T}\left[ \left( \frac{ \partial u }{ \partial T }  \right) _{\rho} dT + \left( \frac{ \partial u }{ \partial \rho }  \right) _{T} d\rho - \dfrac{P}{\rho^{2}} d\rho \right]  \\
 & =\dfrac{1}{T} \left( \frac{ \partial u }{ \partial T }  \right) _{\rho}dT + \dfrac{1}{T}\left[\left( \frac{ \partial u }{ \partial \rho }  \right) _{T}-\dfrac{P}{\rho^{2}} \right] d\rho
\end{align}$$
	- State functions don't depend on the path taken to the final point in state space
		- Between points $S_{1}$ and $S_{2}$ 
		- If $S_{1}=S_{2}$ then $\Delta s=0$ (entropy)
		- Schwartz theorem $\frac{ \partial^{2}S }{ \partial \rho \partial T }=\frac{ \partial^{2}S }{ \partial T\partial \rho }$
$$\begin{align}
ds & =\dfrac{dq}{T} \\
du & =Tds-PdV \\
 & =Tds+\dfrac{P}{\rho^{2}}d\rho  \\
\frac{ \partial^{2}u }{ \partial \rho \partial T }  & =\frac{ \partial  }{ \partial \rho } \left[ ds+ t\left( \frac{ \partial s }{ \partial T }  \right) _{\rho} \right]  \\
 & = T \frac{ \partial^{2}S }{ \partial \rho \partial T }  \\
 & \equiv T \frac{ \partial^{2} S }{ \partial T\partial rho } \\
\dfrac{1}{T} \frac{ \partial^{2} u}{ \partial T\partial rho } & =\frac{ \partial  }{ \partial T } \left[ \dfrac{1}{T} \left( \frac{ \partial u }{ \partial \rho }  \right) _{T} -\dfrac{P}{\rho^{2}T} \right]  \\
 & = \frac{ \partial^{2} u }{ \partial T \partial \rho } \dfrac{1}{T} - \left( \frac{ \partial u }{ \partial \rho }  \right) _{T} \dfrac{1}{T^{2}}+ \dfrac{P}{\rho2T^{2}}\left( \frac{ \partial P }{ \partial T }  \right) _{\rho} \\
\chi_{T} & = \dfrac{T}{\rho}\left( \dfrac{dP}{dT} \right) _{\rho} \\
\left( \frac{ \partial u }{ \partial \rho }  \right) _{T}  & = \left( 1-\chi_{T} \right) \dfrac{P}{\rho^{2}} \\
\left( \frac{ \partial u }{ \partial T }  \right) _{P} & = \left( \frac{ \partial u }{ \partial T }  \right) _{\rho}+\left( \frac{ \partial u }{ \partial \rho }  \right)_{T}\left( \frac{ \partial \rho }{ \partial T }  \right) _{P} \\
 & = \left( \frac{ \partial u }{ \partial T }  \right) _{\rho}+\left( \chi_{T}-1 \right)  \dfrac{\chi_{T}}{\chi_{\rho}}  \dfrac{P}{\rho_{T}} \\
c_{V} & =\left( \frac{ \partial u }{ \partial T }  \right) _{\rho} \\
 c_{P} & =\left( \frac{ \partial u }{ \partial T }  \right) _{P}- \dfrac{P}{\rho^{2}}\left( \frac{ \partial \rho }{ \partial T }  \right) _{P} \\
\boldsymbol{c_{P}-c_{V}} & = \boldsymbol{\dfrac{\chi_{T}^{2}}{\chi_{\rho}} \dfrac{P}{\rho_{T}}} \\
\dfrac{c_{P}}{c_{V}}-1 & = \dfrac{P}{c_{V}\rho T}  \dfrac{\chi_{T}^{2}}{\chi_{\rho}}  
\end{align}$$
- Adiabatic (no heat transfer, $dq=0$) constant $\gamma=\dfrac{c_{P}}{c_{V}}=\dfrac{P}{c_{V}\rho T} \dfrac{\chi_{T}^{2}}{\chi_{\rho}}+1$
- Ideal gas
	- $c_{V}=\dfrac{3}{2} \dfrac{R}{\mu}$
	- $P=\dfrac{R}{\mu}\rho T$
	$$\begin{align}
\gamma & =1+ \dfrac{R\rho T}{\mu  \dfrac{3}{2} \dfrac{R}{\mu}\rho T} \dfrac{\chi_{T}^{2}}{\chi_{\rho}} \\
\chi_{T} & = \dfrac{T}{\rho}\left( \frac{ \partial P }{ \partial T }  \right) _{\rho} \\
\chi_{\rho} & =\dfrac{\rho}{P}\left( \frac{ \partial P }{ \partial \rho }  \right) _{T} \\
\gamma & =1+\dfrac{2}{3}=\dfrac{5}{3}
\end{align}$$
	- Adiabatic$\equiv ds=0$ since $dq=0$
	$$\begin{align}
\gamma_{AD} & =\left( \frac{ \partial \log P }{ \partial \log \rho }  \right) _{\mathrm{AD}}
\end{align}$$
		- If $\gamma_{AD}=\mathrm{const}$
			- $\gamma_{\mathrm{AD}} \dfrac{1}{\rho}d\rho=\dfrac{1}{P}dP$
			- $P\propto \rho^{\gamma_{\mathrm{AD}}}$
## Adiabatic temperature gradient
- Temperature gradient $\nabla_{\mathrm{AD}}\equiv \left( \frac{ \partial \log T }{ \partial \log \rho } \right)_{\mathrm{AD}}$
- If $\nabla_{\mathrm{AD}}=\mathrm{const}\to T\propto \rho^{\nabla_{AD}}$
- If $ds=0\to dq=0$ with the first law $du=\dfrac{P}{\rho^{2}}d\rho$
- $\phi$ is just some constant
$$\begin{align}
\mathrm{NR\;limit\;} U & =\dfrac{3}{2}P\\
\mathrm{ER\;limit\;} U & =3P\\
u & =\dfrac{P}{\rho}\to u=\phi  \dfrac{P}{\rho} \\
du & =\phi. \dfrac{dP}{\rho}-\phi\dfrac{P}{\rho^{2}}d\rho \\
\dfrac{dP}{P} & =\dfrac{d\rho}{\rho}\left( \dfrac{1+\phi}{\phi} \right)  \\
\left( \dfrac{d\log P}{d\log \rho} \right) _{\mathrm{AD}} & = \dfrac{1+\phi}{\phi} \\
 & =\gamma_{\mathrm{AD}}=\left( \frac{ \partial \log P }{ \partial \log \rho }  \right) _{\mathrm{AD}} \\
\mathrm{NR\;limit\;}\phi & =\dfrac{3}{2} \; \gamma_{AD}=\dfrac{5}{3}\\
\mathrm{ER\;limit\;}\phi & =3 \; \gamma_{\mathrm{AD}}=\dfrac{4}{3}\\ \\
\dfrac{4}{3}\leq  & \gamma_{\mathrm{AD}}\leq \dfrac{5}{3} \\
\gamma_{\mathrm{AD}} & =\left( \frac{ \partial \log P }{ \partial \log \rho }  \right) _{\mathrm{AD}} \\
\dfrac{dP}{P} & =\chi_{T} \dfrac{dT}{T}+\chi_{\rho} \dfrac{d\rho}{\rho} \\
\dfrac{\rho}{\chi_{\rho}}\left[ \dfrac{dP}{P}- \chi_{T} \dfrac{dT}{T} \right]  & =d\rho \\
\dfrac{\gamma_{\mathrm{AD}}}{\chi_{\rho}}\left[ \dfrac{dP}{P}-\chi_{T} \dfrac{dT}{T} \right]  & =\dfrac{d\rho}{\rho} \\
d\log P & =\dfrac{\gamma_{\mathrm{AD}}}{\chi_{\rho}}\left[ d\log P-\chi_{T}d\log T \right]  \\
1 & =\dfrac{\gamma_{\mathrm{AD}}}{\chi_{\rho}}\left[ 1-\chi _{T}\left( \frac{ \partial \log T }{ \partial \log \rho }  \right) _{\mathrm{AD}} \right]  \\
1- \dfrac{\chi_{\rho}}{\gamma_{\mathrm{AD}}} & =\chi_{T}\nabla_{\mathrm{AD}} \\
\boldsymbol{\nabla_{\mathrm{AD}}} & =\boldsymbol{\dfrac{\gamma_{\mathrm{AD}}-\chi_{\rho}}{\chi_{T}\gamma_{\mathrm{AD}}}}
\end{align}$$
	- Ideal gas $\gamma_{\mathrm{AD}}=\dfrac{5}{3}$, $\chi_{\rho}=\chi_{T}=1$, $\nabla_{\mathrm{AD}}=\dfrac{2}{5}$
	- Ultra relativistic gas $\gamma_{\mathrm{AD}}=\dfrac{4}{8}$, $\chi_{T}=4$, $\chi_{\rho}=0$, $\nabla_{\mathrm{AD}}=\dfrac{1}{4}$
## Polytrope for n=3 
[[Lecture 6 Stellar Structure]] covered polytropes
$$\begin{align}
P & =K\rho^{\gamma} \\
n & =3 \\
n & =\dfrac{1}{\gamma-1} \\
M & =4\pi\Theta_{3}(\dfrac{k}{\pi G})^{3/2}
\end{align}$$
- There is a unique mass for the n=3 polytrope where mass doesn't depend on radius
$$\begin{align}
\beta & =\dfrac{P_{\mathrm{gas}}}{P_{\mathrm{tot}}}=\mathrm{const}
\end{align}$$
- There is a gas mixture with NR gas and ER radiation
$$\begin{align}
\frac{ \partial \beta }{ \partial \Omega }  & =0  \\
P & =\dfrac{1}{\beta}P_{\mathrm{gas}}=\dfrac{1}{\beta} \dfrac{R}{\mu}\rho T \\
1-\beta &= \dfrac{P_{\mathrm{rad}}}{P}=\dfrac{aT^{4}}{3P}
\end{align}$$
- If $\beta=\mathrm{const}$ then $P\propto T^{4}$ with no dependence on radius
$$\begin{align}
T^{4} & =\dfrac{3P}{a}(1-\beta) \\
T & =\left( \dfrac{3P}{a}(1-\beta) \right) ^{1/4} \\
P & =\dfrac{1}{\beta} \dfrac{R}{\mu}\rho \left[ \dfrac{3P}{a}(1-\beta) \right] ^{1/4} \\
P & =\left[ \dfrac{3R^{4}}{a\beta^{4}\mu^{4}}(1-\beta) \right]  ^{1/3}\rho^{4/3} \\
 & =K\rho^{4/3} \\
K & \propto  \left( \dfrac{1-\beta}{\beta^{4}} \right) ^{1/3} \\
\end{align}$$
- If $K$ goes up then $\beta$ goes down
- If $K$ goes down then $\beta$ goes up
- More massive stars have larger $M$ so they have a larger $K$ so $\beta$ is smaller so more dominated by radiation and thus more supported by it