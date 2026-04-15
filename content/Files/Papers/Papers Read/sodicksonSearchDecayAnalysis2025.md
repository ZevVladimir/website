
---
**Title**:: In Search of Decay: An Analysis of Transit Times of Hot Jupiters in Main Sequence and Post-Main Sequence Systems 

tags: #Astrophysics-Solar-and-Stellar-Astrophysics #Astrophysics-Earth-and-Planetary-Astrophysics 

citekey: sodicksonSearchDecayAnalysis2025

collection:

- Papers to Read

status: unread

dateread:

---
# Notes
## Abstract
- Tidal interactions are a primary driver in orbital evolution for massive planets with short orbital periods
- Tidal dissipation within host stars can cause the orbits of these planets to decay
	- Parameterized by the modified stellar tidal quality factor, $Q_{*}'$ but still large uncertainties
- Present transit timing analysis of systems with varying stellar evolutionary states to search for orbital decay across multiple stages of stellar evolution
- Of the 54 systems 25 showed evidence of a decrease in orbital period and 8 showed evidence that was inconsistent with 0 by three standard deviations
## Main Paper
### Introduction
- Tidal interactions between hot Jupiters and their host stars play a major role in planetary evolution
	- These are driven by [[Tidal dissipation]]
	- When planets orbit faster than their host stars rotate can lead to tidally-driven orbital decay
- Dynamical tides, the excitation of oscillations within a star, can be more dominant compared to the breaking of equilibrium tides for tidal dissipation
- Types of dynamical tides
	- Inertial wave-driven tides that are dissipated in the convective zones of stars
	- Internal gravity wave-driven tides that are dissipated in the radiative zones of stars
		- Believed to be the dominant mechanism of orbital decay in hot Jupiter systems
- Hot Jupiters are more likely to experience tidal interactions with their stars because of their large masses and small orbital separations
- Modified stellar tidal quality factor $Q_{*}'$ is used to parameterize tidal dissipation
	- Smaller value indicates more efficient dissipation
	- Proportional to the ratio of energy stored in tides during one orbit to the energy lost to tidal dissipation in one orbit
	- $Q^{-1}=\dfrac{1}{2\pi E_{0}}\oint(-\dfrac{dE}{dt})dt$
	- $Q_{*}'=\dfrac{3Q}{2k_{2}}$
	- $2\pi E_{0}$ is the amount of tidal energy stored in one orbit
	- $-\dfrac{dE}{dt}$ is the rate of energy loss due to tidal dissipation
	- $k_{2}$ is a dimensionless quantity called Love number describing the density of the star
### Methods
### Fitting Linear and Quadratic Ephermerides
- Linear ephemeris model: $t_{pred}(E)=t_{0}+PE$
	- $E$ is the transit number
	- $t_{0}$ is the transit epoch
	- $P$ is a constant period
- To determine the epoch of a given observed transit time $E=\left[ \dfrac{\left( t_{obs}-(tobs|P|-t_{0}|P| \right) -t_{0})}{P}+0.5\right]$
	- $t_{obs}|P|-t_{0}|P|$is the deviation from the transit time predicted by a linear ephemeris with $t_{0}$ and $P$
	- Formulate orbital decay model $t_{pred}(E)=t_{0}+PE+\dfrac{1}{2} \dfrac{dP}{dE}E^{2}$
	- $\dfrac{dP}{dE}$ is the period derivative with respect to epoch
		- Negative means shrinking epoch possible indication of orbital decay
- When comparing models use [[Bayesian information criterion]]
	- $BIC=\chi^{2}+k\times \ln (N)$
	- $\Delta BIC=BIC_{linear}-BIC_{quadratic}$
	- Smaller BIC indicates better fit
	- $\Delta BIC$ being positive indicates quadratic model fits better than the linear model
- Calculate $Q_{*}'$ for each system with $\dfrac{dP}{dE}<0$
	- $\dot{P}=\dfrac{1}{P} \dfrac{dP}{dE}$
	- $\dot{P}=-\dfrac{27\pi}{2Q_{*}'} \dfrac{M_{p}}{M_{*}} (\dfrac{R_{*}}{a})^5$
	- $M_{p}$ is the planet mass
	- $M_{*}$ is the stellar mass
	- $R_{*}$ is the stellar radius
	- $a$ is the orbital semi-major axis
### Discussion
- Most of the evolved systems in the sample and the study as a whole don't have enough robust epochs of data to meaningfully constrain orbital decay
- 
## Conclusion
- Test models of tidal orbital decay for selection of both main-sequence and evolved systems with hot Jupiters
	- These models predict that the efficiency of tidal dissipation is extremely sensitive to stellar age and other stellar characteristics
	- Do this by measuring transit times and fitting linear and quadratic ephemeris models to the transit times
- Find 8 systems with a $\dot{P}$ inconsistent with 0 by 3 standard deviations and a $\Delta BIC>10$ and are considered the most promising
- But there are known errors with transit times due to
	- Underestimated error bars
	- Incorrect timing conversions
- Find that the median lower limit on $Q_{*}'$ for evolved systems was marginally lower than it was for the sample of all systems

> [!Cite]

Sodickson, Noah, and Samuel Grunblatt. “In Search of Decay: An Analysis of Transit Times of Hot Jupiters in Main Sequence and Post-Main Sequence Systems.” arXiv:2508.18355. Preprint, arXiv, August 25, 2025. [https://doi.org/10.48550/arXiv.2508.18355](https://doi.org/10.48550/arXiv.2508.18355).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Sodickson, N]] 
**Author**: [[Files/Authors/Grunblatt, S]] 


> **Year**: 2025  

> **Citekey**: sodicksonSearchDecayAnalysis2025 

> **itemType**: preprint 

> **DOI**:: 10.48550/arXiv.2508.18355   

  
> [!Abstract]

>

> Tidal interactions are one of the primary drivers of orbital evolution for massive planets with short orbital periods. Tidal dissipation within host stars can cause the orbits of such planets to decay. However, the mechanisms of tidal dissipation are difficult to probe. Generally, tidal dissipation is parameterized by the modified stellar tidal quality factor, or $Q_{*}^{'}$, but the lack of observational evidence of orbital decay to confirm dissipation theories has resulted in orders of magnitude of uncertainty in $Q_{*}^{'}$. We present a new transit timing analysis of 54 systems with varying stellar evolutionary states in an attempt to search for orbital decay across multiple stages of stellar evolution. For each system, we obtained mid-transit times from new TESS data and evaluated potential departures from a linear ephemeris using the Bayesian Information Criterion. We then determined tidal quality factors using widely tested theoretical relations. Of the systems studied, 25 showed evidence of a decrease in orbital period over time and 8 showed evidence of a decrease that was inconsistent with 0 by three standard deviations: CoRoT-2, TrES-5, WASP-4, WASP-12, WASP-19, WASP-45, WASP-99, and XO-3. However, the significance of some of these detections may be influenced by unreliable transit time measurements. Similarly, we see that the lower limit on $Q_{*}^{'}$ for evolved systems is marginally lower than it is for the sample of all systems, though both limits are orders of magnitude below the expected theoretical values for both samples. These new constraints on transit times and $Q_{*}^{'}$ values will help to narrow the search for orbital decay in the future and place important constraints on current theories of star-planet interactions.

>.



# Annotations%% begin annotations %%





%% end annotations %%
