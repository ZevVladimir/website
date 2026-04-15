### What is a star
1. Radiates energy from an internal source
2. Bound by self gravity
Since the star will eventually run out of fuel this means stars must *evolve*

### Course assumptions about stars
1. Stars are isolated -> **structure only depends on internal properties**
	- Ignoring effects of binaries or black holes or stuff like that
2. Stars have homogenous composition
	- During formation the gas is homogenous
	- Is a good approximation
3. Spherical symmetry
	- Makes it much easier to do pen and paper calculations
### Properties of a star
Sun values are provided
1. Mass \[M]($1.9884\times 10^{33}\mathrm{g}$)
2. Radius \[R] $(6.957\times10^{10}\mathrm{cm})$
3. Luminosity \[L] $(3.842\times10^{33}\mathrm{erg/s})$
4. Effective temperature \[$T_{eff}$] $(5772\mathrm{\;K})$
	- Obtained from $L=4\pi R^{2}\sigma T_{eff}^4$
5. Surface gravity \[$\log g$] $(4.4377)$
	- Obtained from $g=\dfrac{GM}{R^{2}}$
	- $\log_{10}\left( \dfrac{\dfrac{GM}{R^{2}}}{\dfrac{cm}{s^{2}}} \right)$
6. Miscellaneous ignored for this class as they ruin the assumption of spherecity
	1. Magnetic fields
	2. Rotation
	3. Binarity
	4. Mass outflow rate

### Mass Fraction Chemical Composition
$\mathrm{X}$: mass fraction of hydrogen (73.89%)
$\mathrm{Y}$: mass fraction of helium (24.63%)
$\mathrm{Z}$: mass fraction of metals (1.48%)

### Observables of stars
- Photometry
	- Measure light through different filters (ex. B, U, I)
	- Colors are the difference between filters and can obtain $T_{eff}$ from them
- Distance
	- Calculated from parallax
	- $\tan\theta=\dfrac{R}{d}\approx\theta$
	- If we define $\theta=1\mathrm{arcsec}$ and use the R as the distance from the Earth to the sun we obtain the value of 1 parsec or $3.686\times 10^8\mathrm{cm}$
- Radius
	- With $F=\dfrac{L}{4\pi d^{2}}$ and $L=4\pi R^{2}\sigma T_{eff}^4$ can obtain radius
		- $d$ from parallax
		- $L$ and $T_{eff}$ from photometry
- Interferometry
- Spectroscopy
	- Gives photospheric temperature, $g$, abundances, $v_{rot}$, $\dot{M}_{out}$
	- Like a more detailed photometry rather than bands have individual wavelengths
- Mass
	- Single star need to use models
	- Binaries/eclipses can use [[Kepler's Laws]] (3rd law) and extra info
- Oscillations
- Neutrinos
	- Generated at the center of stars
	- Very hard to detect
	- Have been done for the Sun and Sne

### Populations of stars
- Pop I stars
	- Found in galactic disk and spiral
	- Young
	- Metal rich
- Pop II stars
	- Found in halo and globular clusters
	- Old
	- Metal poor
- Pop III stars
	- Metallicity ($Z \sim0$)
	- First generation after the big bang
### Magnitudes
- [[Stellar magnitude]]
	- $m_{\lambda}=-2.5\log(\dfrac{f_{\lambda}}{f_{0}})$
	- Units of $\dfrac{erg}{cm^{2}s}$
	- $f_{0}$ depends on what band you are in
		- $f_{0}[U]=4.2\times10^{-8}$
		- $f_{0}[B]=6.4\times10^{-8}$
		- $f_0[V]=3.8\times10^{-8}$
- [[Bolometric magnitude]]
	- $m_{bol}=-2.5\log(\dfrac{f_{bol}}{f_{ref}})$
	- $f_{ref}=2.5\times10^{-5}\mathrm{\;erg\;cm^{-2}\;s^{-1}}$ determined from sun's flux at 10pc
- [[Absolute magnitude]]
	- $M_{\lambda}=m_{\lambda}+5-5\log(d)$
	- $d$ is in parsecs
	- You are placing the star at 10pc and its magnitude there
	- $M_{bol}=-2.5\log(\dfrac{L}{L_{\odot}})+4.74$
- [[Bolometric correction]]
	- $BC=M_{bol}-M_{}$