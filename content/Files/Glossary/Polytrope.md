---
tags: [astronomy, star]
aliases: []
---
## From [[pollsStellarStructureEvolution]]
- Special case, polytropic relation, $P=K\rho^{\gamma}$ for solving [[Hydrostatic equilibrium|HE]] equation
	- $K$ and $\gamma$ are constants
	- Are simple and give insight but have generally been replaced with more accurate models
- Boundary conditions
	- $\rho(0)=\rho_{c}$
	- $\left( \dfrac{ \mathrm{d} \rho }{ \mathrm{d} r } \right)_{r=0}=0$
- Lane-Emden equation
	- $\dfrac{1}{z^{2}} \dfrac{ \rm{d}  }{ \rm{d} z }\left( z^{2}\dfrac{ \mathrm{d} w }{ \mathrm{d} z } \right)+w^{n}=0$
	- $\rho=\rho_{c}w^{n}$
		- $\rho(0)=\rho_{c}$
		- $\rho_{c}$ is chosen or determined from constraints
	- $r=\alpha z$
	- $\alpha=\left( \dfrac{n+1}{4\pi G}K\rho_{c}^{1/n-1} \right)^{1/2}$
	- $n=\dfrac{1}{\gamma-1}$ is the polytropic index
		- $\gamma=1+\dfrac{1}{n}$
- Only 3 analytical solutions otherwise have to use numerical methods
	$$\begin{align} 
	\begin{cases}
	n=0:\;w(z)=1-\dfrac{z^{2}}{6}\;z_{0}=\sqrt{ 6 } \\
	n=1:\;w(z)=\sin \dfrac{z}{z}\;z_{1}=\pi \\
	n=5:\;w(z)=\left( 1+\dfrac{z^{2}}{3} \right) ^{-1/2}\;z_{5}=\infty
	\end{cases}
	\end{align}$$
	- $n=0$ is a homogenous gas sphere with constant density
	- $n=5$ has infinite radius
### Physical properties of the solutions
- With $w(z)$ solved fix relative density distribution which is determined by $n$
- Radius $R=\alpha z_{n}=\left[ \dfrac{(n+1)K}{4\pi G} \right]^{1/2}\rho_{c}^{(1-n)/2n}z_{n}$
- Mass $m(z)=-4\pi\alpha^{3}\rho_{c}z^{2}\dfrac{ \mathrm{d} w }{ \mathrm{d} z }$
- Total mass $M=4\pi\alpha^{3}\rho_{c}\Theta_{n}$
	- $\Theta_{n}\equiv \left( -z^{2} \dfrac{ \mathrm{d} w }{ \mathrm{d} z } \right)_{z=z_{n}}$
- $K=N_{n}GM^{(n-1)/n}R^{(3-n)/n}$
	- $N_{n}=\dfrac{(4\pi)^{1/n}}{n+1}\Theta_{n}^{(1-n)/n}z_{n}^{(n-3)/n}$
- Average density $\bar{\rho}=\left( -\dfrac{3}{z}\dfrac{ \mathrm{d} w }{ \mathrm{d} z } \right)_{z=z_{n}}$
- Central density $\rho_{c}=\dfrac{3\Theta_{n}}{z_{n}^{3}}\rho_{c}$
- Central pressure $P_{c}=K\rho_{c}^{(n+1)/n}$
- $P_{c}=W_{n} \dfrac{GM^{2}}{R^{4}}$
	- $W_{n}=\dfrac{z_{n}^{4}}{4\pi(n+1)\Theta_{n}^{2}}$
- $P_{c}=C_{n}GM^{2/3}\rho_{c}^{4/3}$
	- $C_{n}=\dfrac{(4\pi)^{1/3}}{n+1}\Theta_{n}^{-2/3}$
- Gravitational potential energy: $E_{\mathrm{gr}}=-\dfrac{3}{5-n} \dfrac{GM^{2}}{R}$