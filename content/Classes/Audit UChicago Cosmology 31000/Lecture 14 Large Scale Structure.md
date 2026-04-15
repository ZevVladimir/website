- Goal: prediction for matter power spectrum $(P(k),P_{m}(k),P_{\delta}(k))$
## Starting Point:
- Initial conditions: $\tilde{\Phi}(\vec{k},t_{init})$
- Drawn from gaussian distribution with mean 0 and a variance of $P_{\Phi}(k)=k^{-3} \dfrac{8\pi^{2}}{9}A_{s}\left( \dfrac{k}{k_{p}} \right)^{n_{s}-1}$
## Perturbation Variables
- $g_{00}=-1+2\Phi$
- $g_{ij}=a^{2}\delta_{ij}(1+2\Phi)$
$$
T_{0}^{0}=-g\int \dfrac{d^{3}p}{(2\pi)^{3}}E(p)f(\vec{p},\vec{x},t)=-\rho(\vec{x},t)=-\bar{\rho}(t)\left[ \delta(\vec{x},t)+1 \right] 
$$
$$
\delta(\vec{x},t)\equiv \dfrac{\rho(\vec{x},t)-\bar{\rho}(t)}{\bar{\rho}(t)}
$$
- We focus on the matter density but there are equivalents
### Quantifying photon perturbations
$$
f_{\gamma}=\dfrac{1}{e^{p/T}-1}\;\;T(\vec{x},t,\hat{p})=\bar{T}(t)[1+\Theta(\vec{x},t,\hat{p})]
$$
- There is no magnitude of $p$ dependence as energy is conserved
- Energy density at a given $(\vec{x},t)$ is $\rho=\dfrac{\pi^{2}}{15}T^{-4}[1+\Theta_{0}]^{-4}$
	- $\rho \approx \dfrac{\pi^{2}}{15}T^{-4}[1+4\Theta_{0}]=\dfrac{\delta \rho}{\rho}|_{\gamma}=4\Theta_{0}$
- $\Theta_{0}=\dfrac{1}{4\pi}\int d\Omega_{\hat{p}}\Theta(\vec{x},t,\vec{p})$
- Generally
	$$
\Theta_{l}\equiv \dfrac{(-i)^{l}}{4\pi}2\pi \int_{0}^{\pi} d\theta \sin\theta \mathcal{P}_{l}(\cos\theta)\Theta(\vec{x},t,\hat{p})
$$
	- $\theta$ is the angle between $\hat{p}$ and some $\hat{z}$ axis
	- $\mathcal{P_{l}}$ is the Legendre polynomial
		- $\mathcal{P_{1}}$ is the dipole and $\mathcal{P}_{2}$ is the dipole
## Overview of $\Phi$
- For $k_{L}$
	- Large $k$
	- Re-enters the horizon well after $a_{EQ}$
	- $k_{L}\eta_{EQ}\ll1$
	- Suppressed by $\dfrac{9}{10}$ when reentering (?) 
- For $k_{s}$
	- Small $k$
	- Re-enters the horizon during radiation dominated era
	- $k_{s}\eta_{EQ}\gg1$
	- After reentry it is damped oscillation until $a_{EQ}$ then it is constant
$$
\tilde{\Phi}(\vec{k},a>a_{EQ})=\tilde{\Phi}(\vec{k},\eta_{init})T(k)D(a)
$$
	- $T(k)$ is the transfer function which dictates the amount of suppression
	- $D(a)$ is the growth function which determines the amount of growth after $a_{EQ}$
- $D(a)$
	- In matter dominated era $\Phi$ remains constant
		- Expansion balances out gravitational accretion
	- For $z<1$ DE breaks the balance and $\Phi$ begins to decay
- Equation governing perturbations after $a_{EQ}$
$$
\tilde{\Phi}=\dfrac{4\pi G\bar{\rho}\tilde{\delta}a^{2}}{k^{2}}\propto \dfrac{\tilde{\delta}}{a}
$$
	- When $\Phi$ is constant $\delta$ is as well
	- Grows with $a(t)$
$$
P_{m}=\left[ \dfrac{k^{2}}{4\pi G\bar{\rho}_{m}a^{2}} \right] ^{2}P_{\Phi}(k,a_{init})T^{2}D^{2}
$$
$$
P_{m}(k)=\dfrac{81k}{25H_{0}^{4}\Omega _{m}^{2}}A_{s}T^{2}D^{2}(a)a^{2}(t)\left( \dfrac{k}{k_{0}} \right) ^{n_{s}-1}
$$
## Coupled Equations
- $\Phi$ coupled to $\delta_{c},\delta_{B},\Theta,\nu$
- $\Theta$ coupled to $\delta_{B}$ as well
- In Radiation dominated era
	- Can drop $\delta_{B},\delta_{c},\nu$
	- Only need $\Phi,\Theta_{0},\Theta_{1}$
- Equations
	1. $$
k^{2}\Phi=\dfrac{3}{2}a^{2}H^{2}\left[ 4\left( \Theta_{0}+\dfrac{3aH}{k}\Theta_{1} \right)  \right]=\dfrac{6}{\eta^{2}}\left( \Theta_{0}+\dfrac{3}{k \eta}\Theta_{1} \right)  
$$
	2. $$
\Theta_{0}'+k\Theta_{1}=-\Phi'
$$
	3. $$
\Theta_{1}'-\dfrac{k}{3}\Theta_{0}=-\dfrac{k}{3}\Phi
$$
- Use 1 to eliminate $\Theta_{0}$ from 2 and 3
	- $\Theta_{0}=\dfrac{k^{2}\eta^{2}}{6}\Phi-\dfrac{3}{k \eta}\Theta_{1}$
$$\begin{align}
\Theta_{1}'-\dfrac{k}{3}\left[ \dfrac{k^{2}\eta^{2}}{6}\Phi-\dfrac{3}{k \eta}\Theta_{1} \right]  & =-\dfrac{k}{3}\Phi \\
-\dfrac{3}{k \eta}\Theta_{1}'+k\Theta_{1}\left( 1+\dfrac{3}{k^{2}\eta^{2}} \right)  & =-\Phi'\left( 1+\dfrac{k^{2}\eta^{2}}{6} \right) -\Phi  \dfrac{k^{2}\eta}{3} \\
\boldsymbol{\Phi''+\dfrac{4}{\eta}\Phi'+\dfrac{k^{2}\Phi}{3}} & \boldsymbol{=0} \\
u & \equiv \Phi \eta \\
u' & =\Phi+\Phi'\eta \\
u'' & =2\Phi'+\Phi''\eta \\
u''+\dfrac{2}{\eta}u' & =2\Phi' +\eta \Phi''+\dfrac{2}{\eta}(\Phi+\Phi'\eta) \\
 & =\eta \left[ \Phi''+\dfrac{4\Phi'}{\eta}+\dfrac{2\Phi}{\eta} \right]  \\
u''+\dfrac{2}{\eta}u' &  =u\left[ -\dfrac{k^{2}}{3}+\dfrac{2}{\eta^{2}} \right] 
\end{align}$$
- Solution is a spherical Bessel function with an asymptotic limit
