# Boltzmann Equation with Collision Factor
## Overview
$$
\dfrac{ \partial f }{ \partial t } -Hp\dfrac{ \partial f }{ \partial p }=\mathcal{C}(p)
$$
- Integrating
	$$\begin{align}
\dfrac{ \mathrm{d} n }{ \mathrm{d} t } +3Hn & =\int \mathcal{C}(p) \\
a^{-3}\dfrac{ \mathrm{d}  }{ \mathrm{d} t } (na^{3}) & =\int \dfrac{d^{3}p}{(2\pi)^{3}}\mathcal{C}(p)
\end{align}$$
	- This integral form arises often in cosmology
		- Recombination
			- $e^{-}+p\longleftrightarrow \mathrm{H}+\gamma$
		- Neutron abundance
			- $n+\nu\longleftrightarrow P+e^{-}$
		- Dark matter production
			- $x+x\longleftrightarrow \gamma+\gamma$
		- For these reactions even if they go both ways they will be asymmetric once the energy of $\gamma$ and $e^{-}$ drops enough such that they can't go backwards
- At the microscopic level
	- $1_{\vec{p}}+2_{\vec{q}}\longleftrightarrow3_{\vec{p'}}+4_{\vec{q'}}$
		- The subscripts are momentum
		- Each number represents a species
	- Momentum and energy are conserved
		- $\vec{p}+\vec{q}=\vec{p'}+\vec{q'}$
		- $E_{1}+E_{2}=E_{3}+E_{4}$
			- $E_{1}=\sqrt{ p^{2}+m_{1}^{2} }$
	- Often a particle will have several states with the same occupation number
		- $f$ has a degeneracy so we multiply $f$ by $g_{s}$ or the degeneracy of species $s$
## Schematically
$$
\mathcal{C}=\sum_{q,p',q'}\left[ f_{3}(\vec{p'})f_{4}(\vec{q'})-f_{1}(\vec{p})f_{2}(\vec{q}) \right] \left[ \mathrm{dirac\;delta\; function\; for \; energy\; momentum} \right]\times |\mathcal{m}|^{2}  
$$
- First term consists of the production and then the loss from $1+2\to3+4$
- $m$ is the amplitude and is kinda like the probability but not
- There is an additional factor we omit that is that fermions prevent particles being created in the same state while bosons encourage this
	- $f_{3}f_{4}\to f_{3}f_{4}\left[ 1\pm f_{1} \right][1\pm f_{2}]+\mathrm{boson}\left( \mathrm{boson\;enhancement} \right)-\mathrm{fermion}\left( \mathrm{pauli\;blocking} \right)$
	- $f_{1}f_{2}\to f_{1}f_{2}\left[ 1\pm f_{3} \right]\left[ 1\pm f_{4} \right]+\mathrm{boson}\left( \mathrm{boson\;enhancement} \right)-\mathrm{fermion}\left( \mathrm{pauli\;blocking} \right)$
## Solving
- In principle the integrals over phase should be (and are)
$$\begin{align}
\int \dfrac{d^{3}q}{(2\pi)^{3}}\int dE\delta(E-q^{2}+m_{2}^{2}) &   \\
 = \int \dfrac{d^{3}q}{(2\pi)^{3}}\int dE \dfrac{\delta(E-\sqrt{ q^{2}+m_{2}^{2} })}{2E_{2}} &  \\
 = \int \dfrac{d^{3}q}{(2\pi)^{3}2E_{2}(q)} & 
\end{align}$$
- RHS:
	$$\begin{align}
 & \int \dfrac{d^{3}p}{(2\pi)^{3}2E_{1}(p)}\int \dfrac{d^{3}q}{(2\pi )^{3}2E_{2}(q)}\int \dfrac{d^{3}p'}{(2\pi)^{3}2E_{3}(p')}\int \dfrac{d^{3}q'}{(2\pi)^{3}2E_{4}(q')} \\
 & \times(2\pi)^{4}\delta^{(3)}\left( \vec{p}+\vec{q}-\vec{p'}-\vec{q'} \right) \delta(E_{1}+E_{2}+E_{3}+E_{4}) \\
 & \times |m|^{2}\left[ f_{3}(\vec{p'})f_{4}(\vec{q'})-f_{1}(\vec{p})f_{2}(\vec{q}) \right]  \\
 & =a^{-3}\dfrac{ \mathrm{d} (n,a^{3}) }{ \mathrm{d} t } 
\end{align}$$
	- Taking the average over the thermal cross section
- Assuming thermal "equilibrium"
	- Know $f_{s}\propto e^{-E_{s}/T}$
- Set $f_{s}(\vec{p})=e^{\mu_{s}/T}e^{-E_{s}(\vec{p})/T}$
$$\begin{align}
n_{s} & =g_{s}\int \dfrac{d^{3}p}{(2\pi)^{3}}e^{\mu_{s}/T}e^{-E_{s}(p)/T}\equiv e^{\mu_{s}/T}n_{s}^{(0)} \\
n_{s}^{(0)} & =g_{s}\int \dfrac{d^{3}p}{(2\pi)^{3}}e^{-\sqrt{ p^{2}+m_{s}^{2}/T }} \\
\left[ f_{3}f_{4}-f_{1}f_{2} \right]  & =e^{-(E_{1}+E_{2})/T}\left[ \dfrac{n_{3}n_{4}}{n_{3}^{(0)}n_{4}^{(0)}} - \dfrac{n_{1}n_{2}}{n_{1}^{(0)}n_{2}^{(0)}}\right] 
\end{align}$$
	- Term in brackets on RHS is time dependent
		- Numerator: what we are solving for
		- Denominator: $T$ is time dependent
- Calculating $n_{s}^{(0)}$ in extreme limits
	1. $T\gg m$
		$$\begin{align}
\int \dfrac{d^{3}p}{(2\pi)^{3}}e^{-p/T} \\
= \dfrac{T^{3}}{\pi^{2}}
\end{align}$$
	2. $T\ll m$
		$$\begin{align}
 \int \dfrac{d^{3}p}{(2\pi)^{3}}e^{-m/T- p^{2}/2mT} \\
= \left( \dfrac{mT}{2\pi} \right)^{3/2}e^{-m/T}
\end{align}$$
$$\begin{align}
a^{-3}\dfrac{ \mathrm{d}  }{ \mathrm{d} t } (n,a^{3}) & = n_{1}^{(0)}n_{2}^{(0)}\langle \sigma v \rangle \left[ \dfrac{n_{3}n_{4}}{n_{3}^{(0)}n_{4}^{(0)}} - \dfrac{n_{1}n_{2}}{n_{1}^{(0)}n_{2}^{(0)}} \right]  \\
\langle \sigma v \rangle  & = \dfrac{1}{n_{1}^{0}n_{2}^{0}}\int  \dfrac{d^{3}p}{(2\pi)^{3}}e^{-E/T} \int \dfrac{d^{3}q}{(2\pi)^{3}}e^{-E_{2}T}\cdot \dfrac{1}{2E_{1}2E_{2}}\int  \dfrac{d^{3}p'}{(2\pi)^{3}} \dfrac{|m|^{2}}{2E_{3}2E_{4}}\delta^{4}(p_{i}-p_{f})(2\pi)^{4}
\end{align}$$
	- Last term $\left( \dfrac{1}{2E_{1}2E_{2}}\mathrm{\; onwards}\right)$  is $\sigma v$
