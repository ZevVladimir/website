
---
Title: Galactic Dynamics

tags:  #textbook 

citekey: binneyGalacticDynamics

collection:

- Textbooks

status: unread

dateread:

---
# Chapter 8 Kinetic Theory
## 8.4 Evolution of Spherical Systems
- Evolution of spherical stellar systems over timescales on the order of the relaxation time
- Assume globular cluster but can be applied to open clusters/galactic nuclei
- Relaxation tends to erase a cluster's memory of its initial state
- Relaxation time inversely proportional to density so first appear in the central regions of the cluster
- Eventually the distribution of halo stars is determined by relaxation in the core
	- Dominated by stars originally in the core but receive energies close to the escape energy from encounters
- $\texttt{DF}\;f(E,L)$
	- At low energies $f$ is approximately isothermal: $f(E,L)\propto \exp \left( -E/\sigma^{2} \right)$
	- There are few stars with angular momenta greater than some cutoff $L_{0}$
		- $L_{0}$ corresponds to the angular momentum of a nearby unbound star whose orbit just grazes the core
	- $f(E,L)$ tends smoothly to zero as $E$ tends towards the escape energy $E_{e}$
- Michie model satisfies this
	$$\begin{align}
f(E,L)=\begin{cases}
C\exp \left( -\dfrac{L^{2}}{L_{0}^{2}}\right) \left[ \exp \left( \dfrac{\epsilon}{\sigma^{2}} \right) -1  \right] ,\;\epsilon>0 \\
0,\;\epsilon\leq 0
\end{cases}
\end{align}$$
	- $\epsilon \equiv \Phi_{0}-E$
	- $\Phi_{0}$ is the escape energy
	- Predicts
		- The central density profile will resemble closely the profile of an isothermal sphere
		- The asymptotic behavior of the stellar density $\nu(r)$ as $r\to \infty$ is straightforward to determine
		- Radial and tangential velocity dispersion should be the same in the inner parts of the cluster 
		- In the outer halo the velocity ellipsoid should become more and more radial 
### 8.4.1 Evaporation and Ejection
- Stars can escape from a cluster with
	- **Ejection:** A single close encounter with another star
	- **Evaporation:** A series of weaker more distant encounters eventually increasing the energy beyond the escape energy
- Ejection rate
	- $\dfrac{ \mathrm{d} N }{ \mathrm{d} t }=-8.8\times10^{-4} \dfrac{N}{t_{\mathrm{rh}}\ln(0.4N)}$
- Ejection time
	- $t_{\mathrm{ej}}=-\left( \dfrac{1}{N}\dfrac{ \mathrm{d} N }{ \mathrm{d} t } \right)^{-1}=1.1\times10^{3}\ln(0.4N)t_{\mathrm{rh}}$
- $t_{\mathrm{ej}}\gg t_{\mathrm{evap}}$ so can ignore ejection
- $t_{\mathrm{evap}}=-N\left( \dfrac{ \mathrm{d} N }{ \mathrm{d} t } \right)^{-1}\approx300t_{\mathrm{rh}}$
- $M(t)=M_{0}\left( 1- \dfrac{7k_{e}t}{2t_{\mathrm{rh}}^{0}} \right)^{2/7}$
	- Cluster evaporates completely in time $\dfrac{2t_{\mathrm{rh}^{0}}}{7k_{e}}$
	- Cluster becomes more dense as it loses mass resulting in a sort of collapse
	- Tidal forces from the galaxy can substantially increase evaporation rate
### 8.4.2 Core Collapse
- A singularity (density reaching infinity at the core) invariably appears between $12-19t_{\mathrm{rh}}$
- In late stages of core collapse density profiles become self-similar
	- Differing only in normalization and scale
- King radius
	- $r_{0}=\sqrt{ \dfrac{9\sigma^{2}}{4\pi G\rho_{0}} }$
		- $3\sigma^{2}$ is the mean-square velocity at the center
		- $\rho_{0}$ is the central density
	- Nearly the same as the core radius
	- Shrinks as cluster evolves
- Core collapse is a two stage process
	- Initially driven by evaporation
		- Close encounters push stars to diffuse to higher energies
		- Core shrinks
		- Density falls as $r^{-7/2}$
	- After $\simeq3t_{\mathrm{rh}}$
		- Core collapse accelerates
		- A manifestation of gravothermal collapse
			- Inner parts have negative heat capacity
			- They evolve by losing energy and growing hotter
			- Center continually loses energy, shrinks, and heats up
- Statistical approximations of core collapse fail long before density is high enough for exotic phenomena to occur
- Final stages are largely determined by the physics of binary stars
### 8.4.3 Equipartition
- If different stellar masses are present encounters tend to establish equipartition of kinetic energy
	- Massive stars lose KE and sink to the center
	- Lighter stars gain KE and expand their orbits
- Condition for equipartition to be achieved
	- $\dfrac{M_{2}}{\rho_{c1}r_{c1}^{3}}\leq \dfrac{1.61}{fg}\left( \dfrac{m_{1}}{m_{2}} \right)^{3/2}$
		- $\rho_{c1}$ is the central density of the light stars
		- $r_{c1}$ is the King radius of the light stars
		- $f$ and $g$ are dimensionless constants
		- $m_{2}>m_{1}$
		- $M_{2}$ is the total mass of the heavy stars
- If mass in the heavy stars is too large
	- Heavy stars form independent self-gravitating system at the center of the core of light stars
	- Encounters cause heavy stars to lose energy tot he light stars
		- This increases the velocity dispersion of the heavies
		- They evolve away from equipartition
		- **Equipartition instability**
- Equipartition causes evaporation rate of lightest stars to be the greatest
	- Most low mass stars are lost
	- Could explain why the mass-to-light ratios of globular clusters are lower than other Pop II systems
### 8.4.4 Binary Stars
- Consider
	- Homogeneous stellar system of single (field) and binary stars
	- Field stars
		- Mass $m_{a}$
		- Density $\rho_{a}$
		- Velocity dispersion $\sigma$
	- Binary stars
		- Masses $m_{1}$ and $m_{2}$
		- Separation vector $\boldsymbol{x\equiv x_{1}-x_{2}}$
		- Relative velocity $\boldsymbol{V=\dot{x}}$
		- Internal Energy: $E=\dfrac{1}{2}\mu V^{2}-\dfrac{Gm_{1}m_{2}}{r}$
			- Reduced mass $\mu=\dfrac{m_{1}m_{2}}{m_{1}+m_{2}}$
		- Reduced mass follows Kepler ellipse
			- Semi-major axis $a$
			- Energy $E=-\dfrac{Gm_{1}m_{2}}{a}$
		- Soft binary
			- $\dfrac{|E|}{m_{a}\sigma^{2}}<1$
			- Play little to no direct role in evolution of stellar systems
		- Hard binary
			- $\dfrac{|E|}{m_{a}\sigma^{2}}>1$
#### Soft binaries
- Describe evolution in very soft limit $|E|\ll m_{a}\sigma^{2}$
- Consider
	- Encounter of star 1 with a field star
	- At an [[Impact parameter]] much less than the binary separation
	- Encounter changes velocity of star 2 much less than velocity of star 1
- Diffusion coefficient:
	- $D(\Delta E)=\dfrac{2^{5/2}\pi G^{2}\rho \ln\Lambda}{\sigma} \dfrac{m_{a}m_{1}m_{2}}{m_{1}+m_{2}} \dfrac{\mathrm{erf}(X_{\mathrm{cm}})}{X_{\mathrm{cm}}}$
		- $X_{\mathrm{cm}}=\dfrac{v_{\mathrm{cm}}}{\sqrt{ 2 }\sigma}$
	- Averaging over $v_{\mathrm{cm}}$
		- $D(\Delta E)=\dfrac{8\sqrt{ \pi }G^{2}\rho \ln\Lambda}{\sigma} \dfrac{m_{a}m_{1}m_{2}}{m_{1}+m_{2}}$
			- $\Lambda=\dfrac{b_{\mathrm{max}}v^{2}_{\mathrm{typ}}}{G(m+m_{a})}$
- Condition that the binary is very soft guarantees $\Lambda\gg1$
- On average soft binaries gain energy from encounters with field stars
	- They become *softer*
- Encounters lead to disruption of soft binaries
	- Evaporating them by increasing the energy until it is positive
	- Lifetime: $t_{\mathrm{evap}}=\dfrac{E}{D(\Delta E)}=\dfrac{m_{1}+m_{2}}{m_{a}} \dfrac{\sigma}{16\sqrt{ \pi }G\rho a\ln\Lambda}$
		- Generally much shorter than $t_{\mathrm{relax}}$
		- There is an equilibrium of the rate of evaporation is balanced by the rate of binary formation from three body encounters
		- This turns out to be order unity so they do not impact the evolution of stellar systems
#### Hard binaries
- Interactions are very complex
	- Binding energy of the binary is usually larger than relative KE of binary and field star
- Consider two cases of encounters of field star with hard binaries
	1. $|E|$ is increased by interaction
		- Field star gains energy
		- Field star escapes back to infinity
	2. $|E|$ is decreased as field star approaches binary
		- Then field star almost certainly becomes bound to the binary
		- Eventually one of the three stars is ejected with an escape speed on the order of the orbital speed
		- The internal energy decreases ($|E|$ increases)
	- Regardless $|E|$ increases
- **Heggies law:** hard binaries get harder and soft binaries get softer
- Hard binary can only be disrupted if the total energy of the binary and the field star in the CoM frame is positive
	- Primordial hard binaries can survive from birth of cluster to present
### 8.4.5 Inelastic Encounters
- In the high density core stars can pass so close to one another that they raise tides
	- This dissipates relative kinetic energy
	- This removes KE from the stellar system
	- Hastens core collapse
	- Can
		- Form a binary
		- Can collide and coalesce into a single star
		- Form a binary star with a common atmosphere
- Find the rate of collisions
	- $\dfrac{1}{t_{\mathrm{coll}}}=4\sqrt{ \pi }\nu \sigma r_{\mathrm{coll}}^{2}+\dfrac{4\sqrt{ \pi }Gm\nu r_{\mathrm{coll}}}{\sigma}$
		- $\nu$ is the number density of stars
		- $r_{\mathrm{coll}}$ is the distance of closest approach
		- First term is from kinetic theory
		- Second term represents the enhancement in the collision rate by gravitational focusing
	- $\dfrac{1}{t_{\mathrm{coll}}}=16\sqrt{ \pi }\nu\sigma r_{\star}^{2}(1+\Theta)$
		- $r_{\star}$ is the stellar radius
		- $\Theta=\dfrac{v_{\star}^{2}}{4\sigma^{2}}=\dfrac{Gm}{2\sigma^{2}r_{\star}}$ is the **Safronov number**
- $\dfrac{t_{\mathrm{coll}}}{t_{\mathrm{relax}}}=0.8\ln\Lambda  \dfrac{\Theta^{2}}{1+\Theta}$
- Collisions have a substantial influence on core collapse if $\dfrac{t_{\mathrm{coll}}}{t_{\mathrm{relax}}}\lesssim300$
	- More important in late stages of core collapse as $\sigma$ grows
	- Also important in the galactic nucleus
- Near collisions
	- Energy from the relative KE of the stars excites violent tides
	- Very important for $\Theta\gg1$
	- Successive pericentric passages
		- Dissipate more energy
		- Eventually form a nearly circular binary orbit
			- **Tidal capture**
			- Can be dominate process of forming hard binaries
	- Roughly 25% of captures produce a single coalesced star
### 8.4.6 Binaries and Core Collapse
- Recent review shows hard binary stars are responsible for arresting core collapse
- Hard binaries act as an energy source to the cluster
	- From the interactions with other cluster stars they release energy as they become harder and harder binaries
	- Cool the central core
		- Reverse the outward flow of energy from core to halo
- Expect about 10% of stars to be tidally captured into hard binaries
- Binaries in collapsing core from inelastic encounters are much more numerous than those from 3 body encounters
- There are also binary binary encounters which have not been fully investigated
 



> [!Cite]

Binney, James, and Scott Tremaine. _Galactic Dynamics_. n.d.
  

>[!md]

**FirstAuthor**: [[Files/Authors/Binney, J]] 
**Author**: [[Files/Authors/Tremaine, S]] 


> **Year**: Error: `format` can only be applied to dates. Tried for format object  

> **Citekey**: binneyGalacticDynamics 

> **itemType**: book   


