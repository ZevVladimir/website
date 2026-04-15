## Spherical symmetry
- Assumption of spherical symmetry
	- $\rho,\;P,\;T$ etc. only depend on $r$
	- Mass conservation: 
		- Consider spherical shell
		$$\begin{align}
dm(r,t) & =4\pi r^{2}\rho dr-4\pi r^{2}\rho vdt \\
\boldsymbol{\dfrac{dm}{dr}} & = \boldsymbol{4\pi r^{2}\rho} \\
\end{align}$$
		- $v$ is the radial velocity
		- First stellar structure equation, the radial mass distribution with local density
		$$\begin{align} \\
dm(r,t) & =4\pi r^{2}\rho dr-4\pi r^{2}\rho vdt \\
\dfrac{dm}{dt} & =-4\pi r^{2}\rho v \\
\begin{cases}
v<0 & \dfrac{dm}{dt}<0 & \mathrm{accretion} \\
v<0 & \dfrac{dm}{dt}>0 & \mathrm{loss/wind}
\end{cases}
\end{align}$$
### Static situation
- Constant mass so we ignore accretion/wind
$$\begin{align}
\dfrac{dm}{dr} & =4\pi r^{2}\rho \\
m(r) & =\int_{0}^{r}4\pi r'^{2}\rho dr'
\end{align}$$
- $\rho$ is always positive and never 0 allows us to move terms around without fear of division by 0
$$\begin{align}
\dfrac{dm}{dr}  & \; \mathrm{is\;eulerian} \\
\dfrac{dr}{dm}  & \; \mathrm{is\;lagrangian} \\
\dfrac{dr}{dm} & =\dfrac{1}{4\pi r^{2}\rho(m)}
\end{align}$$
- Choose $\rho(m)$ not $\rho(r)$ since mass is constant (in static situation) but the radius of the star can change
### Gravitation fields
- $\vec{g}=\nabla \phi$ acceleration
- $\nabla^{2}\phi=4\pi G\rho$
- For spherical symmetry $g=\dfrac{d\phi}{dr}$ $g=\dfrac{Gm}{r^{2}}$ only care about the interior $m$
### Equation of motion
- Consider a cylindrical parcel of gas in a sheet of matter
	- Height $dr$
	- Surface area $ds$
	- Mass element $dm=\rho drds$
- Forces acting on it
	- Gravity inwards (towards the center)
	- Pressure inwards (from gas on top of parcel)
	- Pressure outwards (from gas below parcel)
	$$\begin{align}
\frac{ \partial^{2}r }{ \partial t^{2} }  dm & =-gdm+P(r)ds=P(r+dr)ds \\
P(r+dr) & =\frac{ \partial P }{ \partial r } \partial r+P(r) \\
\frac{ \partial^{2}r }{ \partial t^{2} } dm & =-gdm+P(r)ds-\left[ \frac{ \partial P }{ \partial r } \partial r\partial s+P(r)ds \right]  \\
\frac{ \partial^{2}r }{ \partial t^{2} } dm & =-gdm-\frac{ \partial P }{ \partial r } \partial r\partial s \\
 & =-gdm-\dfrac{1}{\rho} \frac{ \partial P }{ \partial r } dm \\
 & =-g-\dfrac{1}{\rho} \frac{ \partial P }{ \partial r }  \\
 & = \boldsymbol{-\dfrac{GM}{r^{2}}- \dfrac{1}{\rho} \frac{ \partial P }{ \partial r } } \mathrm{\;eulerian} \\
\frac{ \partial r }{ \partial m }  & =\dfrac{1}{4\pi r^{2}\rho} \\
\partial r & =\dfrac{\rho}{4\pi r^{2}}dm \\
\frac{ \partial^{2}r }{ \partial t^{2} }  & =\boldsymbol{r-\dfrac{Gm}{r^{2}}-4\pi r^{2}\frac{ \partial P }{ \partial m }} \mathrm{\;lagrangian}
\end{align}$$
## Hydrostatic Equilibrium (HE)
- Key point is that $\frac{ \partial^{2}r }{ \partial t^{2} }=0$
- $\boldsymbol{\frac{ \partial p }{ \partial r }=-\dfrac{Gm\rho}{r^{2}}}\; \boldsymbol{\frac{ \partial P }{ \partial m }=-\dfrac{Gm}{4\pi r^{4}}}$
- Pressure decreases going outwards
- Only in HE
	- $\frac{ \partial r }{ \partial m }=\dfrac{1}{4\pi r^{2}\rho}$
	- $\frac{ \partial P }{ \partial m }=-\dfrac{Gm}{4\pi r^4}$
	- Two equations but three unknowns $(r(m),\rho(m),P(m))$
	- Need third equation which is the equation of state (EoS) which relates $P$ and $\rho$
- EX: Assuming $\rho=\mathrm{const}$ estimate the central pressure of star
	$$\begin{align}
\frac{ \partial P }{ \partial r }  & =-\dfrac{Gm}{r^{2}}\rho  \\
m & =\dfrac{4}{3}\pi\rho r^{3} \\
\frac{ \partial P }{ \partial r }  & =-\dfrac{4}{3}G\pi \rho^{2}r \\
\int_{P_{c}}^{0}\partial P=\int_{0}^{R} -\dfrac{4}{3}G\pi \rho^{2}rdr \\
P_{c}=\dfrac{4}{3}G\pi \rho^{2} \dfrac{R^{2}}{2} \\
\rho & =\dfrac{M}{\dfrac{4}{3}\pi R^{3}} \\
P_{c} & =\dfrac{3}{8\pi}G \dfrac{M^{2}}{R^{4}} \\
\mathrm{For \;sun} \;  & P_{c}=1.3\times 10^{15}\mathrm{\dfrac{dyne}{cm^{2}}}
\end{align}$$
	- That is large value, need a high $P$ to maintain HE
## Dynamical timescale
- $\frac{ \partial^{2}r }{ \partial t^{2} }=-\dfrac{Gm}{r^{2}}-\dfrac{1}{\rho} \frac{ \partial P }{ \partial r }$
- **If pressure gradient disappears** 
	- Only gravity acting how fast will it collapse
	- $t_{ff}$ is the free fall time 
	$$\begin{align}
\frac{ \partial^{2}r }{ \partial t^{2} }  & \approx-\dfrac{R}{t_{ff}^{2}}=-\dfrac{Gm}{r^{2}} \\
t_{ff} & =\sqrt{ \dfrac{R^{3}}{Gm} } \\
\bar{\rho} & =\dfrac{M}{\dfrac{4}{3}\pi R^{3}} \\
t_{ff} & =\sqrt{ \dfrac{3}{5} \dfrac{1}{G\pi \bar{\rho}}}\approx \dfrac{1}{2}\left( \dfrac{1}{G \bar{\rho}} \right) ^{1/2} \\
\mathrm{for\;sun\;} t_{ff}=1600\mathrm{s}
\end{align}$$
	- This is very short
- **If gravity disappears** pressure starts acting outwards
$$\begin{align}
\frac{ \partial^{2}r }{ \partial t^{2} } & \approx -\dfrac{1}{\rho}\frac{ \partial P }{ \partial r }  \\
\dfrac{R}{t_{dyn}^{2}} & =-\dfrac{1}{\rho}\frac{ \partial P }{ \partial r }  \\
t_{dyn}^{2} & =-\dfrac{\rho R}{\frac{ \partial P }{ \partial r } } \\
\frac{ \partial P }{ \partial r } & =\dfrac{\rho Gm}{r^{2}} \\
t_{dyn} & =\sqrt{ \dfrac{R^{3}}{Gm} }  
\end{align}$$
- Key takeaway is that they both respond on the same timescale. This is expected as if they start in HE then the both will be equal at the starting time when the other force disappears
- Consequences
	- Any departure from HE leads to observable phenomena
		- If it can't recover it leads to collapse or explosion
	- HE can usually be restored
		- See oscillations on these dynamical timescales
	- Stars are extremely close to HE
		- Evolve quasi-statically
## Virial Theorem
$$\begin{align}
\frac{ \partial P }{ \partial m }  & = -\dfrac{Gm}{4\pi r^{4}} \\
V & =\dfrac{4}{3}\pi r^{3} \\
\dfrac{4}{3}\pi r^{3} \frac{ \partial P }{ \partial m }  & =-\dfrac{1}{3} \dfrac{Gm}{r} \\
\dfrac{4}{3}\pi r^{3}\partial P & =-\dfrac{1}{3} \dfrac{Gm}{r}\partial m \\
\int_{0}^{m} \dfrac{4}{3}\pi r^{3} \frac{ \partial P }{ \partial m } dm & =-\dfrac{1}{3} \int_{0}^{m} \dfrac{Gm'}{r}dm' \\
\int_{0}^{m} \dfrac{4}{3}\pi r^{3}\frac{ \partial P }{ \partial m } dm & =\dfrac{1}{3}E_{\mathrm{grav}} \\
\int_{0}^{m}V\partial P & =\dfrac{1}{3}E_{grav} \\
\mathrm{Integrate \; by\; parts} \\
\int_{P_{c}}^{P_{s}}V\partial P & =\dfrac{1}{3}E_{\mathrm{grav}} \\
VP|_{P_{c}}^{P_{s}}-\int_{0}^{V}PdV & =\dfrac{1}{3}E_{\mathrm{grav}} \\
V_{s}P_{s}-V_{c}P_{c} -\int_{0}^{V}PdV & = \\
P_{s}=0 & \;V_{c}=0 \\
-\int_{0}^{V}PdV & =\dfrac{1}{3}E_{\mathrm{grav}}  \\
\rho=\dfrac{M}{V} \;V=\dfrac{M}{P} & \;dV= \dfrac{1}{\rho}dm \\
\boldsymbol{-3\int_{0}^{M} \dfrac{P}{\rho}dm } & =\boldsymbol{E_{\mathrm{grav}}} \\
\end{align}$$
- Gives the generalized virial equation
### Virial theorem for ideal gas
- $P=nkT=\mu m_{p}kT$
- KE per particle $=\epsilon_{K}=\dfrac{3}{2}kT$
- Internal energy per unit mass$=u=\dfrac{\epsilon_{k}}{\mu m_{p}}=\dfrac{\dfrac{3}{2}kT}{\mu m_{p}}=\dfrac{3}{2} \dfrac{P}{\rho}$
$$\begin{align}
-3\int_{0}^{M} \dfrac{P}{\rho}dm &=-3(\dfrac{2}{3})\int_{0}^{M}udm=-2\int_{0}^{M}udm=-2E_{\mathrm{int}} \\
-2E_{\mathrm{int}} & =E_{\mathrm{grav}} \\
\boldsymbol{E_{\mathrm{int}}} & =\boldsymbol{-\dfrac{1}{2}E_{grav}}
\end{align}$$
- Can use this to estimate the average temperature
	- Assuming constant $\rho$
$$\begin{align}
E_{\mathrm{grav}} & =-\int_{0}^{M} \dfrac{Gm}{r}dm \\
M & =\dfrac{4}{3}\pi r^{3}\rho \\
r & =\left( \dfrac{3}{4} \dfrac{m}{\pi} \dfrac{1}{\rho} \right) ^{{1/3}} \\
E_{\mathrm{grav}} & =-\int_{0}^{M} \dfrac{Gm}{m^{1/3}} \left( \dfrac{4}{3}\pi \rho \right) ^{{1/3}}dm \\
E_{\mathrm{grav}} & =-\left( \dfrac{4}{3}\pi \rho \right) ^{1/3}G\int_{0}^{M} m^{2/3}dm \\
 & =-\left( \dfrac{4}{3}\pi \rho  \right) ^{1/3}G \dfrac{3}{5}M^{5/3} \\
 & =-\dfrac{3}{5} \dfrac{GM^{2}}{R} \\
E_{\mathrm{int}} & =\dfrac{3}{2} \dfrac{k\bar{T}}{\mu m_{p}}M \\
\dfrac{3}{2} \dfrac{k \bar{T}}{\mu m_{p}}M & =\dfrac{1}{2} \dfrac{3}{5} \dfrac{Gm^{2}}{R} \\
\bar{T} & =\dfrac{1}{5}G \dfrac{M}{R} \dfrac{\mu m_{p}}{R}=2.7\cdot10^{6}\mathrm{K}
\end{align}$$
### General equation of state
- $u=\phi  \dfrac{P}{\rho}$
	- For ideal gas $\phi=\dfrac{3}{2}$
	- For relativistic particles $\phi=3$
	$$\begin{align}
-\dfrac{3}{\phi}\int_{0}^{M}udm & =E_{\mathrm{grav}} \\
E_{\mathrm{int}} & =-\dfrac{1}{3}\phi E_{\mathrm{grav}}
\end{align}$$
### Total energy of star
- $E_{\mathrm{tot}}=E_{\mathrm{int}}+E_{\mathrm{grav}}+E_{\mathrm{kin}}$
- For HE $E_{\mathrm{kin}}=0$
- If the star is bound then $E_{\mathrm{tot}}<0$
- In HE
$$\begin{align}
E_{\mathrm{tot}} & =E_{\mathrm{int}}+E_{\mathrm{grav}} \\
E_{\mathrm{int}} & =-\dfrac{1}{3} \phi E_{\mathrm{grav}} \\
E_{\mathrm{tot}} & =-\dfrac{1}{3}\phi E_{\mathrm{grav}}+E_{\mathrm{grav}}=E_{\mathrm{grav}}(1-\dfrac{1}{3}\phi) \\
E_{\mathrm{tot}} & =E_{\mathrm{int}} -\dfrac{3}{\phi}E_{\mathrm{int}}=E_{\mathrm{int}}(1-\dfrac{1}{3}\phi)=E_{\mathrm{int}}(\dfrac{\phi-3}{\phi})
\end{align}$$
- If $\phi<3$ the star is bound
- $\phi=\dfrac{3}{2}$ for ideal gas $\to E_{\mathrm{tot}}=\dfrac{1}{2}E_{\mathrm{grav}}=-E_{\mathrm{int}}$
- Gravitationally bound sphere must be hot to maintain HE
- Hot spheres should be radiating
	- In absence of internal energy source star should be losing energy
$$\begin{align}
L & =-\dfrac{dE_{\mathrm{tot}}}{dt} \\
\frac{ \partial E_{\mathrm{tot}} }{ \partial t }  & =\dfrac{1}{2}\frac{ \partial E_{\mathrm{grav}} }{ \partial t }  \\
\frac{ \partial E_{\mathrm{grav}} }{ \partial t }  & =-2L
\end{align}$$
	- Star should contract
	$$\begin{align}
\frac{ \partial E_{\mathrm{tot}} }{ \partial t }  & =-\frac{ \partial E_{\mathrm{int}} }{ \partial t } \\
\frac{ \partial E_{int} }{ \partial y }   & =L
\end{align}$$
	- Star gets hotter as it loses energy
		- Stars have a negative heat capacity
	- Postulate energy creation internally to counteract this
		- $L_{\mathrm{nuc}}=-\dfrac{\partial E_{\mathrm{int}}}{\partial t}=LE_{\mathrm{tot}}=0$
		- $\dot{E_{\mathrm{tot}}}=0$ thermal equilibrium
### Relevant timescales
1. Dynamical timescale
	- $t_{\mathrm{dyn}}\approx \sqrt{ \dfrac{R^{3}}{GM} }=0.02\left( \dfrac{R}{R_{\odot}} \right)^{3/2}\left( \dfrac{M}{M_{\odot}} \right)^{1/2}\mathrm{days}$
2. Thermal timescale (kelvin-helmholtz)
	- $t_{\mathrm{KH}}=\dfrac{E_{\mathrm{int}}}{L}=\dfrac{|E_{\mathrm{grav}}|}{2L}=\dfrac{1}{2} \dfrac{GM^{2}}{RL}=1.5\cdot10^{7}\left( \dfrac{M}{M_{\odot}} \right)^{2}\left( \dfrac{R}{R_{\odot}} \right)\left( \dfrac{L}{L_{\odot}} \right)\mathrm{years}$
3. Nuclear timescale
	- $t_{\mathrm{nuc}}=\dfrac{E_{\mathrm{nuc}}}{L}=10^{10}\left( \dfrac{M}{M_{\odot}} \right)\left( \dfrac{L}{L_{\odot}} \right)\mathrm{years}$
- $t_{\mathrm{nuc}}\gg t_{\mathrm{KH}}\gg t_{\mathrm{dyn}}$
## Polytropic Stellar Models
- If $P=P(\rho)$ is known then solve for HE
- $P=k\rho^{\gamma}$ where $k$ and $\gamma$ are constants
### Lane Emden equation derivation
$$\begin{align}
1. \; P=k\rho^{\gamma}\;\; & 2.\;\frac{ \partial m }{ \partial r } =4\pi r^{2}\rho\;\;3.\;\frac{ \partial P }{ \partial r } =-\dfrac{Gm}{r^{2}}\rho \\
\frac{ \partial P }{ \partial \rho }  & =\frac{ \partial  }{ \partial r } \left[ k\rho^{\gamma} \right]  =k\gamma \rho^{\gamma-1}\frac{ \partial \rho }{ \partial r }  \\
k\gamma \rho^{\gamma-1}\frac{ \partial \rho }{ \partial r }  & =-\dfrac{Gm}{r^{2}}\rho \\
-\dfrac{Gm}{r^{2}} & =k\gamma \rho^{\gamma-2}\frac{ \partial \rho }{ \partial r }  \\
m & =-\dfrac{k\gamma}{G}r^{2}\rho^{\gamma-2}\frac{ \partial \rho }{ \partial r }  \\
\dfrac{dm}{dr} & =-\dfrac{k\gamma}{G} \dfrac{d}{dr}\left( r^{2}\rho^{\gamma-2} \dfrac{d\rho}{dr} \right)  =4\pi r^{2}\rho  \\
\boldsymbol{\dfrac{4\pi G}{k\gamma}} & =\boldsymbol{\dfrac{1}{r^{2}}\rho \frac{ \partial  }{ \partial r }  \left( r^{2}\rho^{\gamma-2}\frac{ \partial \rho }{ \partial r }  \right) }
\end{align}$$
- Polytropic index $n=\dfrac{1}{\gamma-1}$ or $\gamma=1+\dfrac{1}{n}$
- Parametrize $\rho$ to simplify 
	- $\rho=\rho_{c}w^{n}$ where $w$ is dimensionless
	$$\begin{align}
r & =\alpha z \; z\mathrm{\; is \; dimensionless} \\
\alpha & =\left( \dfrac{n+1}{4\pi G}k\rho_{c}^{ \dfrac{1}{n-1}} \right)  \\
\mathrm{lots \;}  & \mathrm{of \; algebra} \\
\dfrac{1}{z^{2}}\frac{ \partial  }{ \partial z } \left[ z^{2} \frac{ \partial w }{ \partial z }  \right]   & =-w^{n}
\end{align}$$