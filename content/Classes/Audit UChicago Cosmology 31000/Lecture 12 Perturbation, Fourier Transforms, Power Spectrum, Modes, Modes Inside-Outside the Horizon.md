## How many E-folds are required in inflation?
- Plotting comoving distance versus $a$
	- $\dfrac{1}{H_{0}}$ is constant line
	- The comoving Hubble radius
		- Starts at $a=1$ at $\dfrac{1}{H_{0}}$
		- Decreases $\propto a^{1/2}$
		- Then $\propto a$
		- Then at $a_{end}$ of inflation would need to start increasing to past $\dfrac{1}{H_{0}}$ 
- With constant $H$: $a\propto e^{Ht}$
- $\dfrac{a_{e}}{a_{b}}=e^{N}$
	- $a_{e}$ is the $a$ at end of inflation
	- $a_{b}$ is the $a$ at beginning of inflation
	$$\begin{align}
\dfrac{\dfrac{1}{a_{b}H_{I}}}{\dfrac{1}{a_{e}H_{I}}} & =\dfrac{a_{e}}{a_{b}}=e^{N} \\
\dfrac{1}{aH}(\mathrm{today}) & =\dfrac{1}{H} \\
\dfrac{1}{aH}(\mathrm{at\;}a_{e}) & =\dfrac{1}{a_{e}H}=\dfrac{1}{a_{e}H_{0}\sqrt{ \Omega_{m}a_{e}^{-3} +\Omega_{r}a_{e}^{-4} +\Omega_{\Lambda}}} \\
 & =\dfrac{a_{e}}{H_{0}\sqrt{ \Omega_{r} }} \\
\dfrac{\dfrac{1}{H_{0}}}{\dfrac{a_{e}}{H_{0}\Omega_{r}}} & =\dfrac{\sqrt{ \Omega_{r} }}{a_{e}}=\left( \dfrac{T_{e}}{10^{15}\mathrm{GeV}} \right)  \dfrac{10^{24}\mathrm{eV}}{2\cdot10^{-4}\mathrm{eV}}10^{-2}\approx10^{26}\implies e^{60}
\end{align}$$
	- 60 E-folds of inflation are required
## Perturbations
- The field that drove inflation has perturbations
	- $\phi(\vec{x},t)=\bar{\phi}(t)+\delta \phi(\vec{x},t)$
- Useful to Fourier Transform the field such that
	- $\delta \phi(\vec{x})=\int \dfrac{d^{3}k}{(2\pi)^{3}}e^{i\vec{k}\cdot \vec{x}}\tilde{\delta \phi}(\vec{k})$
	- $k$ is the wave number and is the inverse of the comoving wavelet
- If $HD>c$ then the mode is outside the horizon 
$$
D=\dfrac{a}{k}\implies \dfrac{Ha}{k}>1\implies \dfrac{1}{k}> \dfrac{1}{aH}\implies \mathrm{outside\;horizon}
$$
- Small scale modes (large $k$) leave the horizon later and reenter earlier
- Can go back and forth from Fourier space
	$$\begin{align}
\int e^{-i\vec{q}\cdot \vec{x}}\delta \phi(\vec{x})d\vec{x} & =\int e^{-i\vec{q}\cdot \vec{x}}d^{3}x \int \dfrac{d^{3}k}{(2\pi)^{3}}e^{i\vec{k}\cdot \vec{x}}\tilde{\delta \phi}(\vec{k}) \\
 & =\int \dfrac{d^{3}k}{(2\pi)^{3}}\tilde{\delta \phi}(\vec{k})\int d^{3}\times e^{i(\vec{k}t\cdot \vec{q})\cdot \vec{x}} \\
 & =\tilde{\delta \phi}(\vec{q})
\end{align}$$
- Will focus on $\delta \phi(\vec{x},t)$ but all particles are slightly inhomogeneous and they're all coupled
- The equations used are: GR and Boltzmann equation
## Power Spectrum
- Will focus on quantum mechanical perturbations to $\tilde{\delta \phi}$
- The mean of $\delta \phi(\vec{x})$ and $\tilde{\delta \phi}(\vec{k})$ is zero
- Consider one value of $|\vec{k}|\equiv k$ for which there are many $\tilde{\delta \phi}(\vec{k})$
- Variance of the distribution is called the power spectrum
	- $\langle \delta \phi ^{*}(\vec{k})\delta \phi(\vec{k}') \rangle=(2\pi)^{3}\delta_{D}^{3}(\vec{k}-\vec{k}')\mathcal{P}_{\delta \phi}(k)$
- The power spectrum of $\tilde{\delta \phi(\vec{k})}$ is related to the quantized simple harmonic oscillator
	$$\begin{align}
\ddot{x}+w^{2}x & =0 \\
\hat{x} & =v(\omega,t)\hat{a}+v^{*}(\omega,t)\hat{a}^{\dagger} \\ \\
v\mathrm{\;is\;fixed\;by\;solution\;to\;equation\; of \; motion\;} & v\propto e^{i\omega t} \\
[a,a^{\dagger}] & =1 \\
[\hat{x},\hat{p}] & =i\;\mathrm{fixes\;normalization} \\
v & =\dfrac{1}{\sqrt{ 2\omega }}e^{i\omega t} \\
\hat{a}\ket{0}  & =0 \\
\bra{0} \hat{a}^{\dagger} & =0 \\
\bra{0} \hat{x}^{2}\ket{0} &  \;\mathrm{variance} \\
 & =\bra{0} v\hat{a}v^{*}a^{\dagger}\ket{0}  \\
 & =\lvert v \rvert ^{2}\bra{0} \hat{a}\hat{a}^{\dagger}\ket{0}  \\
 & =\dfrac{1}{2\omega}
\end{align}$$
- Variance of a mode that fluctuates quantum mechanically is the square of its normalized solution to the equation of motion
	$$
\dfrac{ \mathrm{d} ^{2}\tilde{\delta \phi} }{ \mathrm{d} \eta^{2} } +2aH\dfrac{ \mathrm{d} \tilde{\delta \phi} }{ \mathrm{d} \eta } +k^{2}\tilde{\delta \phi}=0
$$
