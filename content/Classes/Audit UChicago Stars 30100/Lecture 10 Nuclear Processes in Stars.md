# General Nuclear Processes
- $X + a\implies Y+b$
	- $X$ is a nucleus
	- $a$ is a particle
	- $Y$ is a new nucleus
	- $b$ is something else
	- Can also be written as $X(a,b)Y$
- In a nucleus
	1. Charge: $z_{i}$ is the number of protons
	2. Mass number: $A_{i}$ is the number of protons + the number of neutrons
- Have
	- Charge conservation $z_{x}+z_{a}=z_{y}+z_{b}$
	- Mass *number* conservation $A_{x}+A_{a}=A_{y}+A_{b}$
- Binding energy
	- $E_{B,i}=\left[ \left( A_{i}-z_{i} \right)m_{n}+z_{i}m_{p}-m_{i} \right]c^{2}$
		- $m_{i}$ is the mass of the nucleus
		- $m_{p}$ is the mass of a proton
		- $m_{n}$ is the mass of a neutron
	- $m_{x}+m_{a}\neq m_{y}+m_{b}$
	$$\begin{align} 
	Q & =(m_{x}+m_{a}-m_{y}-m_{b})c^{2} \\
	\begin{cases}
	Q>0 & \;\mathrm{exothermic} \\
	Q<0 & \;\mathrm{endothermic}
	\end{cases}
	\end{align}$$
	- Q is heat/energy
	$$\begin{align}
	Q & =m_{n}\left[ -\left( A_{z}-z_{x} \right) -\left( A_{a}-z_{a} \right) +\left( A_{y}-z_{y} \right) +\left( A_{b}-z_{b} \right)  \right]  \\
	 & +m_{p}\left[ -z_{x}-z_{a}+z_{y}+z_{b} \right]  \\
	 & + \dfrac{1}{c^{2}}\left[ -E_{b,x}-E_{b,a}+E_{b,y}+E_{b,b} \right] 
	\end{align}$$
	- Firs two terms cancel from mass conservatoin
	- $E_{b,y}+E_{b,b}>E_{b,x}+E_{b,a}$ then $Q>0$ and exothermic
# Reaction rates
- Cross section: $\sigma=\mathrm{\dfrac{number\;of\;reactions/second}{flux\;of\;particles}}\;\left[ \mathrm{cm^{2}} \right]$
- The $\mathrm{\# reactions/s/volume}$: $\tilde{r}_{ij}=n_{i}n_{j}v\sigma$
	- Only applicable if $i\neq j$
	- You can't react with yourself
- For $i=j$
	- $n_{i}n_{j}\implies \dfrac{1}{2}n_{i}(n_{j}-1)\approx \dfrac{1}{2}n_{i}^{2}$
	- $\tilde{r}_{ij}= \dfrac{1}{1+\delta_{ij}}n_{i}n_{j}\sigma v$
		- $\delta_{ij}$ is the kronecker delta function
- $\sigma\to\sigma(v)$
	- The distribution of $v$: $\phi(v)$ where $\int_{0}^{\infty}\phi(v)dv=1$
	- $\tilde{r}_{ij}=\dfrac{1}{1+\delta_{ij}}n_{i}n_{j}\int_{0}^{\infty}\phi(v)\sigma(v)vdv=\dfrac{1}{1+\delta_{ij}}n_{i}n_{j}\langle \sigma v \rangle$
# Gas in [[Local thermal equilibrium|LTE]]
- In ideal gas velocity distribution given by Maxwell Boltzmann distribution
$$\begin{align}
\phi(v) & =4\pi v^{2}\left( \dfrac{m}{2\pi kt} \right) ^{3/2}\exp \left[ -\dfrac{mv^{2}}{2kT} \right]   \\
m & =\dfrac{m_{i}m_{j}}{m_{i}+m_{j}}\;\mathrm{reduced\;mass} \\
v & =v_{i}-v_{j} \\
\mathrm{KE\;in\;CoM\;frame\;} & =\dfrac{1}{2}mv^{2} \\
\phi(E) & =4\pi  \dfrac{2E}{m}\left( \dfrac{m}{2\pi kT} \right) ^{3/2}\exp \left[ -\dfrac{E}{kT} \right]  \\
\langle \sigma v \rangle  & =\int_{0}^{\infty} \dfrac{8\pi E}{m}\left( \dfrac{m}{2\pi kT} \right) ^{3/2}\exp \left[ -\dfrac{E}{kT} \right] \sigma(E)v \dfrac{dE}{mv} \\
 & =\sqrt{ \dfrac{8}{\pi m} } \dfrac{1}{\left( kT \right)^{3/2} }\int_{0}^{\infty}\sigma(E)E\exp \left[ -\dfrac{E}{kT} \right] dE
\end{align}$$
- $\sigma(E)$ is the nuclear cross section
## Nuclear cross section
### Classical
- $\sigma=\pi \left( R_{i}+R_{j} \right)^{2}$
- $R_{i}=R_{o}A_{1}^{1/3}$
- $R_{0}=1.44\times10^{-13}\mathrm{cm}$
	- The range of strong nuclear force
### Quantum Mechanical
- $\lambda=\dfrac{\hbar}{p}=\dfrac{\hbar}{\sqrt{ 2mE }}$ non relativistic
- $\sigma=\pi\lambda^{2}$
	- Generally $\lambda>(R_{i}+R_{j})$
- Complicating factors
	1. Charged nuclei repel
	2. Actual particles experience different forces
	3. Resonances
## Ex: Coulomb barrier
- Coulomb potential: $V(r)=\dfrac{Z_{i}Z_{j}e^{2}}{r}=1.44 \dfrac{Z_{i}Z_{j}}{r}\mathrm{MeV}$
	- $r$ is in femto meters
- $r_{n}=A^{1/3}R_{0}$ $V\to-30\mathrm{MeV}$
- $V(r_{n})=Z_{i}Z_{j}\mathrm{MeV}$
- When $T=10^{7}\mathrm{K}$
	- $\langle E \rangle=\dfrac{3}{2}kT=1.29\mathrm{keV}$
	- Factor of a 1000 difference
	- Need quantum tunneling to explain this
- $E\ll E_{c}$
	- Tunneling probability
		- $P\sim \exp \left[ -\displaystyle \int_{r_{n}}^{r_{c}} \dfrac{\sqrt{ 2m(V(r)-E) }}{\hbar}dr \right]$
		- $r_{c}=\dfrac{Z_{i}Z_{j}e^{2}}{E}$ classical distance of closest approach
		$$\begin{align}
P & =P_{0}\exp \left[ -bE^{-1/2} \right] \\
b & = \dfrac{2\pi Z_{i}Z_{j}e^{2}}{\hbar}\left( \dfrac{m}{2} \right) ^{1/2} \\
 & =31.29Z_{i}Z_{j}A^{1/2}\mathrm{\left[ keV \right] ^{1/2}} \\
A & =\dfrac{A_{i}A_{j}}{A_{i}+A_{j}} \\
\sigma(E) & \propto \pi\lambda^{2} P(E)\xi(E) \\
\sigma(E) & =S(E) \dfrac{\exp \left[ -bE^{-1/2} \right]}{E}
\end{align}$$
		- $\lambda$ is the de broglie wavelength
			- $\lambda \propto \dfrac{1}{E^{1/2}}$
			- $\lambda^{2}\propto \dfrac{1}{E}$
		- $\xi(E)$ encapsulates other processes like nuclear structure and resonances
		- $S(E)$ is the astrophysical S factor
		$$\begin{align}
\sigma(E) & =S(E) \dfrac{\exp \left[ -bE^{-1/2} \right]}{E} \\
\langle \sigma v \rangle  & =\left( \dfrac{8}{\pi m} \right) ^{1/2}\left( kT \right) ^{-3/2}\int_{0}^{\infty}\sigma(E)E\exp \left[ -\dfrac{E}{kT} \right] dE \\
 & =\left( \dfrac{8}{\pi m} \right) ^{1/2}\left( kT \right) ^{-3/2}\int_{0}^{\infty}\sigma(E)E\exp \left[ -\dfrac{b}{\sqrt{ E }} \right] dE \\
\end{align}$$
			 - $\exp \left[ -\dfrac{E}{kT} \right]$ goes down as $E$ goes up
			 - $\exp \left[ -\dfrac{b}{\sqrt{ E }} \right]$ goes up as E goes up
		 - $f(E)=\exp \left[ -\dfrac{E}{kT}-\dfrac{b}{\sqrt{ E }} \right]$ is a sharply peaked function at some E
	 - Assuming $S(E)$ is slowly varying
		 - $E_{0}$ is the central point of the integral called the gamow peak
		 $$\begin{align}
\sigma(E) & =\left( \dfrac{8}{\pi m} \right) ^{1/2}\left( kT \right) ^{-3/2}S(E_{0})\int_{0}^{\infty}f(E)dE \\
\exp \left[ -\dfrac{E}{kT}-\dfrac{b}{\sqrt{ E }} \right]  & =\exp \left[ -\dfrac{E}{kT} \right] \exp \left[ -\dfrac{b}{\sqrt{ E }} \right]  \\
\dfrac{ \partial  }{ \partial t } \left[ \exp \left[ -\dfrac{E}{kT} \right]\exp \left[ -\dfrac{b}{\sqrt{ E }} \right]   \right]  & = -\dfrac{1}{kT}\exp \left[ -\dfrac{E}{kT} \right] \exp \left[ -\dfrac{b}{\sqrt{ E }} \right] + \dfrac{b}{2E^{3/2}}\exp \left[ -\dfrac{E}{kT} \right] \exp \left[ -\dfrac{b}{\sqrt{ E }} \right] \\
 & =0 \\
-\dfrac{1}{kT}+\dfrac{b}{2E^{3/2}} & =0 \\
\dfrac{b}{2E^{3/2}} & =\dfrac{1}{kT} \\
E_{0} & =\left( \dfrac{1}{2bkT} \right) ^{2/3}=5.665\left( Z_{i}Z_{j}AT^{2} \right) ^{1/3}\mathrm{keV}  \\
\end{align}$$
### Calculate how much energy is generated
$$\begin{align}
Q_{ij}r_{ij} & =\mathrm{energy/volume/time} \\
\epsilon_{ij} & =\dfrac{Q_{ij}r_{ij}}{\rho}=\mathrm{\dfrac{energy}{time\cdot mass}} \\
\epsilon_{ij} & =\dfrac{Q_{ij}}{\rho} \dfrac{1}{1+\delta_{ij}}n_{i}n_{j}\langle \sigma v \rangle  \\
n_{i} & =\dfrac{\chi_{i}\rho}{A_{i}m_{u}} \\
m_{u} & =\dfrac{^{12}C}{12} \; \mathrm{Atomic\;mass\;^{12}C=Carbon\;12} \\
\epsilon_{ij} & =\dfrac{Q_{ij}}{\rho} \dfrac{1}{1+\delta_{ij}} \dfrac{\chi_{i}\chi_{j}\rho^{2}}{A_{i}A_{j}m_{u}^{2}}\langle \sigma v \rangle  \\
\epsilon_{ij} & =E_{0,i,j}\chi_{i}\chi_{j}\rho \langle \sigma v \rangle  \\
\mathrm{Assume\; }\langle \sigma v \rangle  & =\langle \sigma v \rangle _{0}\left( \dfrac{T}{T_{0}} \right) ^{\nu} \\
\epsilon_{ij} & =\epsilon _{0,i,j}\chi_{i}\chi_{j}\rho T^{\nu} \\
\epsilon & =\sum_{ij}\epsilon_{ij}
\end{align}$$
