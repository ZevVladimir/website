## [[RV_Handbook_Chap2.pdf]]
- Motion of a planet around a star causes the star to undergo a reflex motion about the star planet center of mass (barycenter). Resulting in periodic perturbation of the 3 observable properties of the star: **radial velocity**, angular (astrometric) position on the sky, the time arrival of some periodic reference signal
### Description of Orbits
- Orbit common system barycenter
- Closed elliptical orbit with COM at one focus
	- $r=\dfrac{a(1-e^2)}{1+e\cos v}$
	- $b^2=a^2(1-e^2)$ with *semi-major axis* a and *semi-minor axis* b and *eccentricity* e
	- $q=a(1-e)$ with *pericenter distance* q
	- $Q=a(1+e)$ with *apocenter distance* Q
	- $p=a(1-e^2)$ with p the *semi-latus rectum* 1/2 the length of the *latus rectum* or the line through a focus and parallel to the minor axis
- *Anomalies* refer to angles in the orbit plane and describe position of the planet along its orbit at a time
	- [[True anomaly]]
	- [[Eccentric anomaly]]
	- [[Mean Anomaly]]
	- Can calculate [[Mean Anomaly|M(t)]] iteratively solve for [[Eccentric anomaly|E(t)]] and then use geometrical identity to obtain v
- Orbit specification
	- Keplerian orbit in 3D
		- *a* and *e* specify size and shape of elliptical orbit
		- *P* is related to *a* and component masses through Kepler's third law
		- $t_{p}$ is the position of the object along its orbit at a particular reference time
		- Angles $i,\Omega,\omega$ represent projection of true orbit into the apparent/observed orbit
			- *i* is the [[Orbit inclination]]
			- $\Omega$ is the [[Longitude of the Ascending Node]]
			- $\omega$ is the [[Argument of periastron]]
			- $\tilde{\omega}$ is the [[Longitude of Pericenter]]
			- $\theta$ is the [[True longitude]]
			- $\lambda$ is the [[Mean longitude]]
- [[Kepler's Laws]]
#### Orbits from Radial Velocity Measurements
- RV (Doppler) measurements describe the projected motion along the LOS of the primary star as it orbits the barycenter
- Can calculate the *radial velocity semi-amplitude*: $K\equiv \dfrac{2\pi}{P} \dfrac{a_{\star}\sin i}{(1-e^2)^{1/2}}$ 
- And find radial velocity $v_{r}=K[\cos(\omega+v)+e\cos\omega]$
	- With v being the [[True anomaly]]
	- Using equations converting [[True anomaly]]->[[Eccentric anomaly]]->[[Mean Anomaly]] can get radial velocity in terms of time
	- With $e,\omega$ can determine shape of RV curve then with P constrain value of $a_{\star}\sin_{i}$ through the RV semi-amplitude
- Defining: $K^2=\dfrac{G}{(1-e^2)} \dfrac{1}{a_{\star}\sin i} \dfrac{M_{p}^3\sin^3i}{(M_{\star}+M_{p})^2}$ can provide a value for the mass function $\mathcal{M}=\dfrac{M_{p}^3\sin^3i}{(M_{\star}+M_{p})^2}$
- Can define $K$ without $a_{\star}$ with $K=(\dfrac{2\pi G}{P})^{1/3} \dfrac{M_{p}\sin i}{(M_{\star}+M_{p})^{2/3}} \dfrac{1}{1-e^2}^{1/2}$
- Keplerian observables
	- [[Longitude of the Ascending Node]] can not be determined from RV measurements
	- Only $a_{\star}\sin i$ can be determine neither separately
	- Need additional info like astrometric orbit, constraint on [[Orbit inclination]] spectroscopic line profiles or statistical deconvolution to determine presence of a companion of planetary mass
- **Fitting single planet**
	- *Systemic velocity* $\gamma$ describes constant component of the RV of the systems COM relative to the solar system barycenter which might include a linear trend parameter *d* (can accommodate instrumental drift as well as impacts from long period companions)
	- $v_{r}(t)=K[\cos(\omega+v(t))+e\cos\omega]+\gamma+d(t-t_{0})$
- **Multiple planets: kinematic fitting**
	- System of $n_{p}$ planets can approximate total RV signal as linear sum over $n_{p}$ terms of $v_{r}(t)$ equation for single planet
	- This ignores effects of planet-planet gravitational interactions
	- Identify dominant planet signal and subtract its Keplerian contribution from observational data until all significant planet signals are accounted for
	- Then use a multi-planet $\chi^2$ fit using those results as starting values
- **Multiple planets: dynamical fitting**
	- Using N-body integrations when gravitational interactions cause detectable variations in short intervals
	- Must have short-term and long-term stability of the system
- **Detectability and Selection Effects**
	- With T being the duration of observation
	- For short orbital periods with $P\lesssim T$  
		- RV semi-amplitude threshold alone characterizes detectability
		- Eccentricity makes detection more difficult
	- Long orbital periods $P \gtrsim T$ 
		- Observations only cover part of the orbit
		- Detectability depends on which part of the orbit is sampled
			- If close to velocity min/max or zero crossing
				- $\Delta v=K\sin{(\dfrac{2\pi T}{P})}\approx K(\dfrac{2\pi T}{P})$ or $\Delta v=K\cos{(\dfrac{2\pi T}{P})}\approx \dfrac{K}{2}(\dfrac{2\pi T}{P})^2$
			- Averaging over phases has dependency on adopted detection efficiency $\epsilon_{D}$
			- Larger $\epsilon_{D}$ more phases must be detected resulting in needing a higher amplitude
			- Then starts to scale as $K \propto P^2$
		- Eccentricity makes detection easier
- **Scheduling**
	- *Adaptive scheduling* information from previous observations is used to plan future ones most efficiently, optimizing information content, and perform significantly better
### Measurement Principles and Accuracies
#### Introduction
- An instantaneous measurement of the stellar RV about the star-planet barycenter is given by the small, systematic Doppler shift in wavelength of the many absorption lines in the star's spectrum
- Definition
	- From observer
	- Source receding with velocity $v$ at angle $\theta$ relative to direction from observer to source
	- $\Delta\lambda=\lambda_{obs}-\lambda_{em}$
	- Relativistic Doppler shift: $\lambda_{obs}=\lambda_{em} \dfrac{1+\beta \cos\theta}{(1-\beta^2)^{1/2}}$
		- $\beta=\dfrac{v}{c}$
			- Omits effect of refractive index of air (errors of $\lesssim_{1} \dfrac{m}{s}$)
	- Classically $v_{r}=v\cos\theta \approx(\dfrac{\Delta\lambda}{\lambda_{em}}c)$
	- Positive values indicate recession
	- Special relativistic terms are significant
- Use echelle spectrographs with high spectral resolving power [[Spectral resolution]] to get the high accuracy RV measurements needed
- Need high instrumental stability and wavelength calibration
#### Cross-correlation spectroscopy
- Can condense info about Doppler shift in the thousands of absorption lines into a few parameters using cross-correlation (even with low SNR)
- Cross correlation
	- Want to determine the value of $\epsilon$ by minimizing: $C(\epsilon)\propto \int_{-\infty}^{\infty}S(v)M(v-\epsilon)dv$
		- S is the spectrum
		- M is the mask
		- Both in velocity space
		- Errors are from MC modeling
	- Can optimize by weighting according to relative line depths
	- Results in [[Cross-Correlation Function]]
	- Shape of CCF
		- Depends on intrinsic spectral line shapes and template line widths
		- Mean profile of all the lines in the template
		- Width yields stellar rotational velocity $v\sin i$
		- Equivalent width gives metallicity estimate if $T_{eff}$ known
#### Deriving radial velocities from Doppler shifts
- Measured Doppler shift beyond RV includes
	- Motion of observer around solar system barycenter
		- From Earth rotation
		- From orbital motion
	- Higher-order relativistic and secular projection effects
	- Spectroscopic line shifts from gravitational redshift
	- Stellar surface effects
		- Convective flow
		- Pulsations
		- Star spots
- **Effects of Earth motion**: Use solar system barycenter as a reference. The time-varying motion of the Earth around this is described by the solar system ephemerides from JPL
- **Line shifts**: Contribution from star's *gravitational redshift* ($v_{r}\simeq \dfrac{GM_{\star}}{R_{\star}c}$). Convective motions in photospheres of cool stars also have spectral line asymmetries. Stellar rotation imposes small RV effects. Sun spots result in periodic modulation of stellar rotation speed
- **Stellar space motion**: Constant space motion results in changing RV due to changing projection geometry
	- With stars parallax, proper motion, and systemic radial velocity can predict this contribution
	- [[Secular acceleration]]
- **Zero point**: Very difficult to determine a zero point for absolute radial motions
#### Wavelength Calibration
- Using telluric water vapor lines largely eliminates errors from different optical paths of stellar beam and calibration lamp
- **Gas cells**
	- Gas cells can be used to provide a dense and accurate wavelength reference and are superimposed on stellar spectral lines
	- Iodine absorption cell has a high number (several thousand) absorption lines. But has relatively high loss of light and clustering of absorption line bands in the visible
- **Thorium-argon calibration**
	- Optical fibers transfer light to the spectrograph one from the stellar light one from the ThAr reference or the background
	- Large number of strong emission lines and higher throughput since no iodine absorption cell
- **Fiber-optic image scrambling**
	- Fiber feed from telescope to spectrograph advantages
		- Addresses variable light illumination of spectrograph slit
		- Spectrograph can be placed away from telescope in a stable environment
- **Infrared wavelength calibration**
	- Iodine and ThAr are sparse in the NIR
	- Some gas cells can be used to provide useful calibration in this band but (when this was written) still in its infancy
- **Laser frequency combs**
	- Cover entire optical/infrared range with individually unresolved lines, uniform spacing and intensity and with accurately known wavelengths from fundamental physics
#### Exposure Metering
Can use an integral exposure meter to monitor ongoing exposures to optimize exposure times for a required SNR and to calculate photon weighted midpoint of each exposure for barycentric correction
#### Accuracy limits
- Error sources imposing practical limits on achievable accuracy
	- Instrumental terms (mechanical and thermal stability and wavelength calibration in particular)
	- Stellar noise
	- Photon noise
- **Stellar noise**
	- Activity in stellar atmosphere, stellar oscillations, surface granulation, unrecognized planetary companions and systematic errors can contribute to *jitter* in measurements
	- Jitter from inhomogeneity (sun spots and plages) is often significant. Correlated with stellar chromospheric activity.
	- Stellar oscillations have smaller impacts and generally more significant for giants and sub giants
	- Surface granulation can induce variability for solar type stars
- **Photon noise**
	- RV accuracy scales with SNR
	- More accuracy requires longer exposure times
- **Earth-mass planets in the habitable zone**
	- Detection of a $1M_{\oplus}$ in habitable zone would require weekly sampling over several years with frequent temporal sampling
#### Excluding other sources of periodicity
- **Star effects**
	- Activity can be discounted if the RV period is distinct from the stellar rotation period or star has very low level photometric variability at the RV period
	- Measurements of the Ca $II$ H and K lines provide a proxy for surface activity
	- Stellar pulsations can be discounted if their period and amplitude do not correspond to known excitation mechanisms for relevant spectral type
- **Binary companions**
	- Can use catalogs of known binaries to do first level discrimination
- **Bisector analysis**
	- [[Bisector]] 
	- Are used to quantify stellar line profile asymmetries
	- Shape can be quantified by
		- The bisector velocity span
		- Bisector inverse slope
		- Bisector curvature
	- For signal of planetary origin the bisector span is expected to be independent of RV while distinct correlation is there fore blended systems
### Multiple planet systems
#### General considerations
- **Frequency of multiple systems:** 10-15% of presently known (2010) systems are known to be multiple (Google search puts it closer to 20%)
- **Multiple systems and theories of formation:** Core-accretion model. From embryonic disk of dust and gas dust particles form larger planetary cores and eventually if massive enough can accrete more gas, generally giant planets form beyond the snow line. Also seems there are mechanisms for migration inwards and for resonance in planet orbits and distribution of eccentricities
- **Coplanarity:** Due to $\sin i$ dependency how many systems with coplanar orbits is not well constrained. Sims support significant fraction of planetary systems having giant planets that are non-coplanar
- **Statistics of multiple planet systems:** Large amount of hot Jupiters in 0.03-0.07 AU and discontinuity at ~1 AU
- **Dynamical modeling:** Planet planet interactions can occur over relatively short time scales resulting in an observable evolution of the orbital parameters over periods of years. Can us N-body methods for dynamical orbit fitting. Analytical methods use the [[Disturbing function]]. [[Secular Theory]] describes this
- **Resonances:** Arise when 2 orbiting bodies exert a regular, periodic gravitational influence on each other from a simple numerical relationship between periods or frequencies. Can not use secular theory as the force between them doesn't average to 0. Resonances can both result in unstable and stable interactions
- **Mean motion resonances:** A number of exoplanet systems appear to have orbital periods related by $\dfrac{P_{1}}{P_{2}}\simeq \dfrac{i}{j}$ with i,j being small integers. Considering 2 planets, every q-th [[Conjunction]] that takes place at the same point in the outer planet's orbit but not at the same longitude in inertial space. Resonant dynamics are important if the resonant arguments (angles), $\phi$, vary slowly
- **The more general case:** Very diverse systems and complex behavior in long-term orbit integrations should be expected
- **Resonance capture and migration:** 
	- Origin of orbital commensurabilities in the solar system is attributed to either
		- Dissipative processes early on in its formation
		- The slow differential increase in the semi-major axes of satellite orbits from tidal transfer of angular momentum from the primary
	- Generally believed planet orbital resonances are not formed in situ but rather from differential convergent migration
- **Apsidal motion:**
	- For 2:1 resonances configuration's stability is determined by the eccentricities of the inner and outer planets
	- Proposed mechanism for significant apsidal [[Libration]] in a pair of planets initially in nearly circular orbits is an impulsive generation of eccentricity like the expulsion of a planet
	- 3:1 systems also show apsidal librations are common
#### Long-term integration and system stability
- [[Lagrange stability]]
- [[Hill Sphere|Hill stability]] 
- Stability can not prove the correctness of a solution while unstable in short amount of time can prove incorrectness
- Thus explore range of parameters around the fit to find which is actually stable
- **Dynamical classification:**
	- Tidally dominated: semi-major axis $a \lesssim 0.1$AU 
	- Resonantly dominated: one or more resonant arguments librates
	- Secularly dominated otherwise
- **Dynamical packing:** Many systems are found to be dynamically full in that additional companions couldn't survive between the observed planets
- **Chaotic orbits**: 
	- An orbit is loosely described as chaotic if its dynamical state at some future time is sensitively dependent on the initial conditions
	- [[Maximal Lyapunov exponent]] is useful for determining if a system is chaotic
		- Shown to construct solar system ephemerides over 10Myr but impossible beyond 100 Myr since the inner system is chaotic
	- System can be stable and chaotic if its future evolution is restricted in certain bounds
- **Indicators of chaos**
	- Can use frequency analysis and fast Lyapunov indicators to determine if a system is chaotic
- **Proximity to resonance** can still affect secular motion
- **Inclination resonance** is possible with the lowest-order inclination resonance at the 2:1 commensurability
- **[[Kozai resonance]]** could cause large mutual inclinations between orbits of multiple planets
- **The 1:1 resonance** examples of Lagrange's solution to the restricted 3-body problem
- **Retrograde resonances** 
	- Most fitted radial velocity orbit elements assume prograde or regular orbits (orbit in the same direction) which is expected given current planet formation theories
	- A planet could be in retrograde mean motion resonance either by a preexisting free-floating planet being captured or through violent dynamical evolution with planet-planet interactions
- **Stability of S-type orbits:** in an S-type orbit the gravitational force of the secondary is the principle source of orbital perturbations
- **Stability of P-type orbits:** is stable for semi-major axes exceeding a critical value as given in equation 2.70
- **Planetary formation in binaries:** 
	- Around single stars
		1. Coagulation of dust particles and their growth to cm-size objects
		2. Collisional growth to km-size planetesimals
		3. Coalescence of planetesimals to form protoplanets/planetary embryos
		4. Collisional growth of planetary embryos to form terrestrial-size objects
	1. For binary stars the second star can have significant effects on each of these processes
- **Modifying processes** 
	- Additional stellar companions can inhibit the formation of circumstellar giant planets with particular orbital separations  
	- Stellar components can truncate the circumprimary disk removing material otherwise used for terrestrial planets
	- Distant but highly inclined can modify orbits over long time scales
	- Perturbations during protoplanet formation can increase planetesimal relative velocities causing greater fragmentation or causing regions where orbits are unstable
	- But terrestrial planet formation should still be possible in these stystems
### Questions
- #Question uestion They mentioned sometimes using hydrodynamic codes to simulate movement of planets or evolution of planets. What benefits would you have with a hydro code over an N-body for something like the solar system? I had always assumed there wasn't enough _stuff_ there to accurately approximate some sort of fluid
	- Hydro codes are needed to model the evolution of planets during the early stages when a gas disk is still present. That is the first 10 Myr or so.
- #Question What zero-point do we define (if we do) for our radial velocity measurements?
	- The true RV zero point is the solar system barycenter. That is used for _absolute_ radial velocities, like when people study the kinematics of stars in our galaxy. For exoplanets, the RVs are always _relative_ to some unknown zero point. In the limit of infinite measurements you could subtract the average and that would correspond to the barycenter of the system you are studying. But in practice you always have to fit the zero point as a nuisance parameter.
- #Question Is there any way to tell, or at least hints, of possible resonance to look for? Like in the system you had me look at was there anything I could've seen right away that would've hinted to try periods that were multiples?
	- Resonances can be tricky because there are real periodic signals. The periodogram is basically the equivalent of fitting sine curves. Hopefully with enough data the true periods of the planets show up most strongly. And if you get two (or more periods) that are very close to integer ratios then you can turn on the planet-planet interactions and see if the model changes.
## [[Johnson-Ch2-Stellar-Wobbles.pdf]]

^2a9d73

- For planet orbiting star
	- Semi major axes: $a_{\star}$ and $a_{p}$ are distances from star and planet to COM. Mean semimajor axis is $a=a_{\star}+a_{p}$
	- $a_{\star}=\dfrac{m_{p}}{M_{\star}}a_{p}$
		- From COM $\dfrac{-M_{\star}a_{\star}+m_{p}a_{p}}{M_{\star}+m_{p}}=0$
	- $v_{\star}=\dfrac{m_{p}}{M_{\star}}v_{p}$
		- From circular motion with circumference $2\pi a_{\star}$ and $2\pi a_{p}$
	- Due to inclination observed radial velocity: $v_{rad}=v_{\star}\sin i\cos(\theta(t))$ 
		- Positive velocities are away from the observer
		- Negative velocities are towards the observer
		- Maximum velocity when $\theta(t=0)=1$
		- Amplitude $K=v_{\star}\sin i$ is the maximum $v_{rad}$ (when $\cos(\theta(t))=1$)
		- K, the amplitude of the RV signal from the planet of minimum mass $m_{p}\sin i$
	- Momentum is conserved $m_{p}v_{p}=M_{\star}v_{\star}$
	- Can consider the system a *virialized system*
		- Described by average KE and potential energies
			- $\mathcal{K}=-\dfrac{1}{2}U$
			- Since $a_{p}\gg a_{\star}\to a \approx a_{p}$
			- $\dfrac{1}{2}m_{p}v_{p}^2=-\dfrac{1}{2}(-\dfrac{Gm_{p}M_{\star}}{a})$
			- $v_{p}=\sqrt{ \dfrac{GM_{\star}}{a} }$
			- Using equations above to plug in for the velocities
			- $P^2=\dfrac{4\pi^2a^3}{GM_{\star}}$
		- Derive equation for star's speed (amplitude of time-variable motion along LOS)$$
\begin{align} \\
v_{p} & = \sqrt{ \dfrac{GM_{\star}}{a} } \\
v_{\star}(\dfrac{M_{\star}}{m_{p}}) & = (\dfrac{GM_{\star}}{a})^{1/2} \\
a &= (\dfrac{GM_{\star}P^2}{4\pi^2})^{1/3} \\
v_{\star}&=(2\pi G)^{1/3}M_{\star}^{-2/3}P^{-1/3}m_{p}
\end{align}
$$
		- Quantitative relationship:
			- $v_{\star}=[28.4ms^{-1}](\dfrac{M_{\star}}{M_{\odot}})^{-2/3}\times(\dfrac{P}{year})^{-1/3}(\dfrac{m_{p}}{M_{Jup}})$
			- Can estimate the planets minimum mass when period, amplitude, and solar mass is known
	- Accounting for time variability of star's RV
		- $v_{rad}(t)=K\cos[\theta(t)-\omega]$
			- With $\theta(t)=\dfrac{2\pi(t-T_{p})}{P}$
			- With $\omega$ being the [[Argument of periastron]]
				- 0 for circular orbits but nonzero for eccentric
			- $T_{p}$ time of periastron passage
				- Sets the phase of the orbit
				- Corresponds to the time when the planet passes through periastron
			- Time between consecutive peaks gives the period P
			- K is the amplitude of the signal
### Eccentricity
- Including *e* modifies the equation for Doppler amplitude: $K=28.4ms^{-1}(\dfrac{M_{\star}}{M_{\odot}})^{-2/3}(\dfrac{P}{year})^{-1/3}\times (\dfrac{m_{p}\sin i}{M_{Jup}})(1-e^2)^{-1/2}$
- And $v_{rad}(t)=K(\cos[\theta(t)-\omega]+e\cos\omega)$
- The eccentric orbit $\theta(t)$ does not vary linearly with time instead is related to the eccentric anomaly $E(t)$: $\tan \dfrac{\theta(t)}{2}=(\dfrac{1+e}{1-e})^{1/2}\tan \dfrac{E(t)}{2}$ 
- Using the transcendental equation can compute the eccentric anomaly:
	- $E(t)=e\sin E(t)+ \dfrac{2\pi(t-T_{p})}{P}$
- Algorithm to find velocity of stars as a function of time
	- Start with initial time, $t_{0}$ 
	- Using transcendental equation for $E(t)$ solve for $E(t_{0})$ numerically
	- Solve for $\theta(t_{0})$ by plugging in $e, E(t_{0})$ into relation between $\tan \dfrac{\theta(t)}{2}$ and $\tan(\dfrac{E(t)}{2})$
	- Using $\theta(t_{0})$ compute $v_{rad}(t_{0})$
	- Repeat for time $t_{1}=t_{0}+\Delta t$ where $\Delta t$ is small compared to the orbital period
### Measuring Precise Radial Velocities
- See the impact of stars movement in the Doppler shift changing the observed wavelengths of absorption lines
- Doppler shift z: $z=\dfrac{\Delta\lambda}{\lambda_{0}}=\dfrac{v_{\star}}{c}$
- Although each shift of a line is very very small with all the lines can get an average Doppler shift to detect small planets
- Rely on precise mapping of wavelength to pixel within spectrometer using a calibration thing like discussed in [[RV_Handbook_Chap2.pdf]]
### Stellar Jitter
- There is no exact surface of a star
- There are rising convective cells causing the star to ring at natural vibrational modes which interfere in the RV noise
- Sun spots, plages, and flares impact this as well
	- Normally since stars are approximately spheres appear to have half the surface approaching and the other half receding (stellar rotation)
	- Results in broadening of the absorption lines
	- Blemishes (listed above) result in nonzero net velocity
	- Ex spot on blue-shifted hemisphere will cause net redshift
- Can deal with jitter by
	- Just treating it as another source of random noise. Not great and inflates error bars
	- Use a physical model to fit the jitter signal along with the planet signal
		- Requires time-resolving the jitter signal
## [[RV_Detailed_Derivation.pdf]]

^8f07e4

- Specific angular momentum, h, is conserved $h=r^2\dot{\theta}$
- Radial velocity equation: $V_{r}= \dfrac{2\pi a\sin i}{P\sqrt{ 1-e^2 }}[\cos(\theta+\omega)+e\cos\omega]$
- Radial velocity semi-amplitude: $K=\dfrac{2\pi a\sin i}{P\sqrt{ 1-e^2 }}$
	- Of the star: $K_{1}=(\dfrac{2\pi G}{P})^{1/3} \dfrac{m_{2}\sin i}{m_{1}^{2/3}} \dfrac{1}{\sqrt{ 1-e^2 }}$
- Detailed derivation is true consult to understand where anything came from but these are the same takeaways (similar to other things read here)