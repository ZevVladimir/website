# Main sequence homology
$$\begin{align}
\epsilon_{\mathrm{nuc}} & =\epsilon_{0}\rho T^{\nu} \\
\dfrac{ \partial l }{ \partial m }  & =\epsilon_{\mathrm{nuc}} \\
\partial m & =M\partial x \\
\dfrac{ \partial l_{1} }{ \partial x }  & =\epsilon_{0}\rho_{1}M_{1}T_{1}^{\nu} \\
\dfrac{ \partial l_{1} }{ \partial x }  & =\epsilon_{0}M_{2}\left( \dfrac{M_{1}}{M_{2}} \right) \rho_{2}\left( \dfrac{\rho_{1}}{\rho_{2}} \right) T_{2}^{\nu}\left( \dfrac{T_{1}^{\nu}}{T_{2}^{\nu}} \right)  \\
\dfrac{ \partial l_{1} }{ \partial x }  & =\epsilon_{0}M_{2}\rho_{2}T_{2}^{\nu}\left( \dfrac{M_{1}}{M_{2}} \right) \left( \dfrac{\rho_{1}}{\rho_{2}} \right) \left( \dfrac{T_{1}^{\nu}}{T_{2}^{\nu}} \right)  \\
 & =\dfrac{ \partial l_{2}x }{ \partial x } \left( \dfrac{M_{1}}{M_{2}} \right) \left( \dfrac{\rho_{1}}{\rho_{2}} \right) \left( \dfrac{T_{1}^{\nu}}{T_{2}^{\nu}} \right)  \\
\dfrac{l_{2}}{l_{1}} & =\left( \dfrac{M_{2}}{M_{1}} \right) \left( \dfrac{\rho_{2}}{\rho_{1}} \right) \left( \dfrac{T_{2}^{\nu}}{T_{1}^{\nu}} \right) 
\end{align}$$
- From before with homogeneous composition, ideal gas, and constant $\kappa$
	1. $\dfrac{T_{2}}{T_{1}}=\dfrac{\mu_{2}}{\mu_{1}} \dfrac{M_{2}}{M_{1}}\left( \dfrac{R_{2}}{R_{1}} \right)^{-1}$
	2. $\dfrac{l_{2}}{l_{1}}=\left( \dfrac{\mu_{2}}{\mu_{1}} \right)^{4}\left( \dfrac{M_{2}}{M_{1}} \right)^{3}\left( \dfrac{\kappa_{2}}{\kappa_{1}} \right)^{-1}$
	3. $\dfrac{\rho_{2}}{\rho_{1}}=\dfrac{M_{2}}{M_{1}}\left( \dfrac{R_{2}}{R_{1}} \right)^{-3}$
- Set 2 equal to what we just found and plugin 1 and 3
- With algebra find
$$\begin{align}
\left( \dfrac{R_{2}}{R_{1}} \right)  & =\left( \dfrac{M_{2}}{M_{1}} \right) ^{(4-\nu)/(3-\nu)}\left( \dfrac{M_{2}}{M_{1}} \right) ^{(1-\nu)/(-3-\nu)}\left( \dfrac{\kappa_{2}}{\kappa_{1}} \right) ^{-1/(-3-\nu)} \\
R & \propto \mu^{(\nu-4)/\nu+3}M^{(\nu-1)/(\nu+3)}
\end{align}$$
	- With const $\kappa$ drop $\kappa$ dependence
$$\begin{align}
\rho_{c} & \propto MR^{-3} \\
\rho_{c} & \propto M\mu^{(\nu-4)/(\nu+3)}M^{(\nu-1)/(\nu+3)} \\
T_{c} & \propto  \dfrac{\mu M}{R} \\
 & \propto \mu^{7/(\nu+3)}M^{4/(\nu+3)}
\end{align}$$
# Homologous Contraction
- For constant mass
$$\begin{align}
\dfrac{\dot{r}(m)}{r(m)} & =\dfrac{\dot{R}}{R} \\
\rho & \propto MR^{-3} \\
\dfrac{ \partial \rho }{ \partial t }  & =\dot{\rho}=-3MR^{-4}\dfrac{ \partial R }{ \partial t }  \\
\dfrac{\dot{\rho}}{\rho} & =-\dfrac{3\dot{R}}{R} \\
P & \propto M^{2}R^{-4} \\
\dfrac{ \mathrm{d} P }{ \mathrm{d} t }  & =\dot{P}=-4M^{2}R^{-5}\dfrac{ \mathrm{d} R }{ \mathrm{d} t }  \\
\dfrac{\dot{P}}{P} & =-\dfrac{4\dot{R}}{R} \\
\dfrac{\dot{P}}{P} & =\dfrac{4}{3} \dfrac{\dot{\rho}}{\rho} \\
\mathrm{General\;EoS:\;} &  \dfrac{ \mathrm{d} P }{ P }  =\chi_{T} \dfrac{ \mathrm{d} T }{ T } +\chi_{\rho}\dfrac{ \mathrm{d} \rho }{ \rho }  \\
\dfrac{\dot{P}}{P} & =\chi_{T} \dfrac{\dot{T}}{T}+\chi_{\rho} \dfrac{\dot{\rho}}{\rho} \\
\dfrac{4}{3} \dfrac{\dot{\rho}}{\rho} & =\chi_{T} \dfrac{\dot{T}}{T}+\chi_{\rho} \dfrac{\dot{\rho}}{\rho} \\
\left( \dfrac{4}{3}-\chi_{\rho} \right)  \dfrac{\dot{\rho}}{\rho} & =\chi_{T} \dfrac{\dot{T}}{T} \\
\chi_{T} \dfrac{\dot{T}}{T} & =\left( \dfrac{4}{3}-\chi_{\rho} \right) \left( -3 \dfrac{\dot{R}}{R} \right)  \\
\dfrac{\dot{T}}{T} & =\dfrac{1}{\chi_{T}}\left( 3\chi_{\rho}-4 \right) \left( \dfrac{\dot{R}}{R} \right) 
\end{align}$$
- $\dfrac{\dot{R}}{R}$ is negative during contraction
- If $\chi_{\rho}< \dfrac{4}{3}$
	- $T$ rises 
	- IG: $\chi_{\rho}=1$
- If $\dfrac{\chi_{\rho}>4}{3}$
	- T decreases
	- Degenerate gas $\chi_{\rho}=\dfrac{5}{3}$
## Stability
- Two types of stability
	1. Dynamical stability: HE perturbed
	2. Thermal stability: TE perturbed
- Consider
	- Compression of star
		- Adiabatic
		- Homologous
	- $T\ll T_{\mathrm{KH}}$
- After compression
	- $\rho\to \rho'$
	- $P\to P'$
	$$\begin{align}
\rho  & \propto MR^{-3} \\
\dfrac{\rho'}{\rho} & =\left( \dfrac{R'}{R} \right) ^{-3} \\
P & \propto \rho^{\gamma_{ad}} \\
\dfrac{P'}{P} & =\left( \dfrac{\rho'}{\rho} \right)^{\gamma_{ad}}=\left( \dfrac{R'}{R} \right) ^{-3\gamma_{ad}} \\
P(x) & \propto M^{2}R^{-4}=M^{2/3}\rho^{4/3} \\
\left( \dfrac{P'}{P} \right) _{HE} & =\left( \dfrac{\rho'}{\rho} \right)^{4/3}=\left( \dfrac{R'}{R} \right) ^{-4} \\
\left( \dfrac{R}{R'} \right) ^{4} & \approx \left( \dfrac{R}{R'} \right) ^{3\gamma_{ad}} 
\end{align}$$
	- $\gamma_{ad}=\dfrac{4}{3}$ is the special value
	- If after the initial contraction
		- $\gamma_{ad}=\dfrac{4}{3}$ still in HE
		- $\gamma_{ad}>\dfrac{4}{3}$ star expands
		- $\gamma_{ad}< \dfrac{4}{3}$ star contracts
			- Unstable, continues contracting without stopping
	- General: unstable if 
		- $\int_{0}^{\mu}\left( \gamma_{ad} -\dfrac{4}{3}\right) \dfrac{P}{\rho}dm<0$
	- IG: $\gamma_{ad}= \dfrac{5}{3}$ is stable
	- Relativistic/radiation pressure $\gamma_{ad}=\dfrac{4}{3}$ is marginally stable
### Secular/Thermal stability
- $u$ is the internal energy per unit mass
$$\begin{align}
\dfrac{P}{\rho} & =\dfrac{P_{\mathrm{gas}}}{\rho}+\dfrac{P_{\mathrm{rad}}}{\rho} \\
 & =\dfrac{2}{3}u_{\mathrm{gas}}+\dfrac{1}{3}u_{\mathrm{rad}} \\
\mathrm{Virial\;Theorem:\;} & -3\int_{0}^{\mu} \dfrac{P}{\rho}dm=E_{\mathrm{grav}} \\
-3\int_{0}^{\mu}\left( \dfrac{2}{3}U_{\mathrm{gas}}+\dfrac{1}{3}U_{\mathrm{rad}} \right) dm &  =E_{\mathrm{grav}} \\
-2E_{\mathrm{int,gas}}-E_{\mathrm{int,rad}} & =E_{\mathrm{grav}} \\
2E_{\mathrm{int,gas}}+E_{\mathrm{int,rad}} & =-E_{\mathrm{grav}} \\
E_{\mathrm{int,gas}} & =\dfrac{1}{2}E_{\mathrm{grav}}+\dfrac{1}{2}E_{\mathrm{int,rad}} \\
E_{\mathrm{tot}} & =E_{\mathrm{int,gas}}+E_{\mathrm{int,rad}}+\left( -2E_{\mathrm{int,gas}}-E_{\mathrm{int,rad}} \right)  \\
E_{\mathrm{tot}} & =-E_{\mathrm{int,gas}} \\
E_{\mathrm{tot}} & =\dfrac{1}{2}E_{\mathrm{grav}}+\dfrac{1}{2}E_{\mathrm{int,rad}} \\
\beta & =\dfrac{P_{\mathrm{gas}}}{P_{tot}} \\
E_{\mathrm{int}} & =-\dfrac{1}{3}\phi E_{\mathrm{grav}} \\
 \\
\mathrm{IG:\;}\phi=\dfrac{3}{2} & \;\mathrm{rad:}\;\phi=3 \\
\phi & =\dfrac{3}{2} \beta+3(1-\beta) \\
E_{\mathrm{int}} & =-\dfrac{1}{3}\left( \dfrac{3}{2}\beta+3(1-\beta) \right)E_{\mathrm{grav}} \\
 & =\left( \dfrac{1}{2}\beta -1\right)E_{\mathrm{grav}} \\
E_{\mathrm{tot}} & =E_{\mathrm{int}}+E_{\mathrm{grav}} \\
 & =\left( \dfrac{1}{2} \beta-1 \right) E_{\mathrm{grav}}+E_{\mathrm{grav}} \\
 & =\dfrac{1}{2}\beta E_{\mathrm{grav}} \\  
\end{align}$$
	- If $\beta>0$
		- Bound
		- $E_{\mathrm{grav}}<0$
	- As $\beta\to0$
		- Get less and less bound
		- $\beta=0$ marginally unstable
		- Get more and more dominated by radiation pressure
# Thermostat effect
- IG: $E_{\mathrm{tot}}=-E_{\mathrm{int}}=\dfrac{1}{2}E_{\mathrm{grav}}$
- $\dot{E}_{\mathrm{tot}}=L_{\mathrm{nuc}}-L$
	- In TE $\dot{E}_{\mathrm{tot}}=0$
- Consider: small perturbation to TE
	- $L_{\mathrm{nuc}}>L$
	- Star slightly expands due to $P=nkT$
	- So $T$ decreases and $\rho$ decreases 
	- $\epsilon_{nuc}\propto \rho T^{\nu}$
	- So star contracts 
		- High dependence on change in $T$
- For degenerate gas
	- $P_{e}\propto \rho^{5/3}$ or $P\propto \rho^{4/3}$
	- No temperature dependence so no mechanical change to the change in temperature
	- So when $T$ increases there is thermal nuclear runaway
# Core evolution
- Assume
	- HE 
	- Homologous
- So
	- $P_{c}=CGM^{2/3}\rho^{4/3}$
- Independent of EoS
## For the $P_{c}-\rho_{c}$ plane
- EoS
	1. Radiation: $P=\dfrac{1}{3}aT^{4}$
	2. IG: $P=\dfrac{\mathcal{R}}{\mu}\rho T$
	3. NR $e^{-}$ $P=K_{\mathrm{NR}}\left( \dfrac{\rho}{\mu_{e}} \right)^{5/3}$
	4. ER $e^{-1}$ $P=K_{\mathrm{ER}}\left( \dfrac{\rho}{\mu_{e}} \right)^{4/3}$
- Can then look at diagram in textbook or notes to draw conclusions about evolution
- Takeaways
	- $P_{c}\propto \rho^{4/3}$ which is steeper than an IG's $P_{c}\propto \rho$
		- Contraction moves between isotherms
		- Star gets hotter
	- Lower mass tracks eventually intersect the degeneracy line
		- There is a maximum density and pressure
	- Higher mass tracks can miss the degeneracy line
		- For ER $P\propto \rho^{4/3}$ which is parallel to homologous contraction
		- So there is a maximum mass for intersection (the Chandrasekhar mass)
		- $T$ can't go to infinity so eventually get a neutron star
## For the $T_{c}-\rho_{c}$ plane
- IG: 
	- $\dfrac{\mathcal{R}}{\mu}\rho T=CGM^{2}\rho^{4/3}$
	- $T=C \dfrac{\mu}{\mathcal{R}}GM^{2/3}\rho^{1/3}$
- Radiation
	- $\dfrac{1}{3}aT^{4}=CGM^{2/3}\rho^{4/3}$
	- $T=\left( \dfrac{3CG}{a}M^{2/3} \right)^{1/4}\rho^{1/3}$
- Both scale by $\rho$ the same way 
### Max temperature at degeneracy
$$\begin{align}
P & =P_{\mathrm{gas}}+P_{\mathrm{deg}}=\mathcal{\dfrac{R}{\mu}}\rho T+K\left( \dfrac{\rho}{\mu_{e}} \right) ^{\gamma} \\
\gamma & =\dfrac{5}{3} \\
CG\mu^{2/3}\rho^{4/3} & =\dfrac{\mathcal{R}}{\mu}\rho T +K_{\mathrm{NR}}\left( \dfrac{\rho}{\mu_{e}} \right) ^{5/3} \\
\dfrac{\mathcal{R }}{\mu}\rho T & =CGM^{2/3}\rho^{4/3}-K_{\mathrm{NR}}\left( \dfrac{\rho}{\mu_{e}} \right) ^{5/3} \\
T & =\dfrac{\mu}{\mathcal{R}}\left[ CGM^{2/3}\rho^{1/3}-K_{\mathrm{NR}} \dfrac{1}{\mu_{e}^{5/3}}\rho^{2/3} \right]  \\
\dfrac{ \mathrm{d} T }{ \mathrm{d} \rho }  & =\dfrac{\mu}{\mathcal{R}}\left[ \dfrac{1}{3}CGGM^{2/3}\rho^{-2/3}-\dfrac{2}{3}K_{\mathrm{NR}} \dfrac{1}{\mu_{e}^{5/3}}\rho^{-1/3} \right] =0 \\
\rho^{1/3} & =\dfrac{\mu_{e}^{5/3}}{2K_{\mathrm{NR}}}CGM^{2/3}\;\;\mathrm{at\;}T_{\mathrm{max}} \\
\boldsymbol{T_{\mathrm{max}}} & =\boldsymbol{\dfrac{\mu}{\mathcal{R}} \dfrac{\mu_{e}^{5/3}}{4K_{\mathrm{NR}}}C^{2}G^{2}M^{4/3}}
\end{align}$$
- This implies there is a maximum mass for stars to undergo fusion from radiation pressure
- Range of stellar masses: $0.08M_{\odot}<M<100M_{\odot}$