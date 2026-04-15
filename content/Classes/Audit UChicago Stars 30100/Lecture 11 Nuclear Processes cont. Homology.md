# Nuclear processes
## Considerations
1. Lots of nuclear burning cycles at the same time
2. Stratification in $T$ helps
3. Typically only a few reactions contribute to $Q$ at one time
4. Bottleneck reaction
## Reactions
- See notes or textbook for detailed reaction steps
- Hydrogen burning
	- Hydrogen straight to helium
	- PP chain
	- CNO cycle
- Helium burning
- Carbon burning
- Neon burning
- Oxygen burning
- Silicon burning
- Finally end at $^{56}\mathrm{Fe}$ beyond which no energy is created
# Homology
$$\begin{align}
 & 1. \dfrac{ \partial r }{ \partial m }  =\dfrac{1}{4\pi r^{2}\rho} \\
 & 2. \dfrac{ \partial P }{ \partial m } = -\dfrac{Gm}{4\pi r^{4}}-\dfrac{1}{4\pi r^{2}}\dfrac{ \partial^{2}r }{ \partial t^{2} }  \\
  & 3. \dfrac{ \partial l }{ \partial m } =\epsilon_{\mathrm{nuc}}-\epsilon_{\nu}-T\dfrac{ \partial s }{ \partial t }  \\
 & 4.\dfrac{ \partial T }{ \partial m } =-\dfrac{Gm}{4\pi r^{4}} \dfrac{T}{P}\nabla \\
\nabla & =\begin{cases}
\nabla_{\mathrm{rad}}=\dfrac{3\kappa lP}{16\pi acGmT^{4}}\;\nabla_{\mathrm{rad}}\leq \nabla_{\mathrm{ad}} \\
\nabla_{\mathrm{ad}}+\Delta \nabla\;\nabla_{\mathrm{rad}}\geq \nabla_{\mathrm{ad}}
\end{cases} \\
 & 5.\dfrac{ \partial \chi_{i} }{ \partial T } =\dfrac{A_{i}m_{i}}{P}\left( -\sum_{j}(1+\delta_{ij})r_{\mathrm{eg}}+\sum_{kl}r_{kl} \right) +\left[ \mathrm{mixing} \right] 
\end{align}$$
- This is difficult and requires all different types of physics
- Simplify these equations with 
	- Assuming chemical homogeneity (eliminate equation 5)
	- Radiative or convective energy transport (Equation 3 is only $\epsilon_{\mathrm{nuc}}$)
	- EoS: gas versus radiation pressure
	- Some opacity law
- Relative mass coordinate: $x\equiv \dfrac{m_{1}}{M_{1}}=\dfrac{m_{2}}{M_{2}}$
	- $\dfrac{r_{1}(x)}{R_{1}}=\dfrac{r_{2}(x)}{R_{2}}$
- Step 1 using equation 1
$$\begin{align}
\dfrac{ \partial r_{1} }{ \partial x }  & =\dfrac{M_{1}}{4\pi r_{1}^{2}\rho} \\
d m & =M_{1}d x \\
r_{1}=r_{2}\left( \dfrac{R_{1}}{R_{2}} \right)  \\
\dfrac{ \partial r_{2} }{ \partial x } \left( \dfrac{R_{1}}{R_{2}} \right)  & = \dfrac{M_{1}}{4\pi \left( r_{2}^{2}\left( \dfrac{R_{1}}{R_{2}} \right) ^{2} \right) \rho_{1}} \\
\dfrac{ \partial r_{2} }{ \partial x }  & =\left( \dfrac{R_{1}}{R_{2}} \right) ^{3} \dfrac{M_{1}}{4\pi r_{2}^{2}\rho_{1}} \\
 & =\left( \dfrac{R_{2}}{R_{1}} \right)^{3} \dfrac{m_{2}\left( \dfrac{M_{1}}{M_{2}} \right)}{4\pi r_{2}^{2}\rho_{2}\left( \dfrac{\rho_{1}}{\rho_{2}} \right) } \\
 & = \dfrac{M_{2}}{4\pi r_{2}^{2}\rho_{2}}\left( \dfrac{R_{2}}{R_{1}} \right) ^{3}\left( \dfrac{M_{1}}{M_{2}} \right) \left( \dfrac{\rho_{2}}{\rho_{1}} \right)  \\
 & =\dfrac{ \partial r_{2} }{ \partial x }  \\
\dfrac{\rho_{2}}{\rho_{1}} & =\left( \dfrac{M_{2}}{M_{1}} \right) \left( \dfrac{R_{2}}{R_{1}} \right) ^{-3} \\
\rho(x)\propto \bar{\rho}
\end{align}$$
- Step 2 using equation 2
$$\begin{align}
\dfrac{ \partial P }{ \partial m }  & =-\dfrac{GM}{4\pi r^{4}} \\
\dfrac{ \partial P_{1} }{ \partial x }  & =-\dfrac{GM_{1}^{2}x}{4\pi r^{4}} \\
dm_{1} & =M_{1}dx \\
r_{1} & =r_{2}\left( \dfrac{R_{1}}{R_{2}} \right)  \\
\dfrac{ \partial P_{1} }{ \partial x }  & =-GM_{1}^{2}x\left[ 4\pi r_{2}^{4}\left( \dfrac{R_{1}}{R_{2}}^{4} \right)  \right] ^{-1} \\
 & =-GM_{2}^{2}\left( \dfrac{M_{1}}{M_{2}} \right) ^{2}x\left[ 4\pi r_{2}^{4}\left( \dfrac{R_{1}}{R_{2}} \right) ^{4} \right]^{-1} \\
dP_{1} & =cdP_{2} \\
P(x) & =cP_{2}(x)+B \\
\mathrm{With\;Bounary\;Conditions\;B=0} \\
\dfrac{P_{2}}{P_{1}} & =\left( \dfrac{M_{2}}{M_{1}} \right) ^{2}\left( \dfrac{R_{2}}{R_{1}} \right) ^{4} \\
P & \propto \dfrac{M^{2}}{R^{4}} \\
\dfrac{\rho_{2}}{\rho_{1}} & =\left( \dfrac{M_{2}}{M_{1}} \right) \left( \dfrac{R_{2}}{R_{1}} \right) ^{-3} \\
\dfrac{R_{2}}{R_{1}} & =\left( \dfrac{\rho_{2}}{\rho_{1}} \right)^{-1/3}\left( \dfrac{M_{2}}{M_{1}} \right) ^{1/3} \\
\dfrac{P_{2}}{P_{1}} & =\left( \dfrac{M_{2}}{M_{1}} \right) ^{2}\left( \dfrac{\rho_{2}}{\rho_{1}} \right) ^{4/3} \left( \dfrac{M_{2}}{M_{1}} \right) ^{-4/3} \\
P & \propto M^{2/3}\rho^{4/3} \\
\mathrm{Assume\;Ideal\;Gas\;Law} & P=\dfrac{R}{\mu}\rho T \\
P_{1} & =\dfrac{R}{\mu_{1}}\rho_{1}T_{1} \\
P_{2} & =\dfrac{R}{\mu_{2}}\rho_{2}T_{2} \\
\dfrac{T_{2}(x)}{T_{1}(x)} & =\dfrac{P_{2}}{P_{1}} \dfrac{\mu_{2}}{\mu_{1}} \left( \dfrac{\rho_{1}}{\rho_{2}} \right)  \\
 & =\dfrac{\mu_{2}}{\mu_{1}} \dfrac{M_{2}}{M_{1}} \left( \dfrac{R_{2}}{R_{1}} \right) ^{-1} \\
T & \propto \dfrac{\mu M}{R} \\
\mathrm{Assume\;Radiative\;Equilibrium} \\
\dfrac{ \mathrm{d} T }{ \mathrm{d} m }  & =-\dfrac{Gm}{4\pi r^{4}} \dfrac{T}{P}\left[ \dfrac{3\kappa lP}{16\pi acGmT^{4}} \right]  \\
 & =-\dfrac{3\kappa l}{64\pi^{2}acr^{4}T^{3}} \\
dT^{4} & =4T^{3}dT \\
dT  & = \dfrac{dT^{4}}{4T^{3}} \\
\dfrac{ \mathrm{d} T^{4} }{ \mathrm{d} m }  \dfrac{1}{4T^{3}} & =\dfrac{3\kappa l}{64\pi^{2}acr^{4}T^{3}} \\
\dfrac{ \mathrm{d} T^{4} }{ \mathrm{d} m }  & =-\dfrac{3\kappa l}{16\pi^{2}acr^{4}} \\
\dfrac{ \mathrm{d} T_{1}^{4} }{ \mathrm{d} x }  & =-\dfrac{3\kappa_{1}l_{1}M_{1}}{16\pi^{2}acr_{1}^{4}} \\
\mathrm{Algebra} \\
\dfrac{l_{2}}{l_{1}} & =\left( \dfrac{\mu_{2}}{\mu_{1}} \right) ^{4}\left( \dfrac{M_{2}}{M_{1}} \right) ^{3}\left( \dfrac{\kappa_{2}}{\kappa_{1}} \right) ^{-1} \\
L & \propto  \dfrac{1}{\kappa}\mu^{4}M^{3} \mathrm{\;with\;const\;}\kappa
\end{align}$$
## Radiation Pressure
$$\begin{align}
P_{\mathrm{rad}} & =\dfrac{1}{3}aT^{4} \\
\left( \dfrac{T_{2}}{T_{1}} \right) ^{4} & =\dfrac{P_{2}}{P_{1}}=\left( \dfrac{M_{2}}{M_{1}} \right) ^{2}\left( \dfrac{R_{2}}{R_{1}} \right) ^{-4} \\
\mathrm{Algebra} \\
\dfrac{l_{2}}{l_{1}} & =\left( \dfrac{\kappa_{1}}{\kappa_{2}} \right) \left( \dfrac{M_{2}}{M_{1}} \right)  \\
L & \propto  \dfrac{M}{\kappa} \\
\mathrm{Assume\;IG+const\kappa} \\
\kappa & =\kappa_{0}\rho T^{-3.5} \\
\left( \dfrac{T_{2}}{T_{1}} \right) ^{4} & =\left( \dfrac{l_{2}}{l_{1}} \right) \left( \dfrac{\rho_{2}T_{2}^{-3.5}}{\rho_{1}T_{1}^{-3.5}} \right) \left( \dfrac{M_{2}}{M_{1}} \right) \left( \dfrac{R_{2}}{R_{1}} \right) ^{-4} \\
\mathrm{Algebra} \\
L\propto  &  \dfrac{\mu^{7.5}M^{5.5}}{R^{0.5}}
\end{align}$$
- Very large scaling with $\mu$ and $M$