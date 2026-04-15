
---

tags: #MAROON-X #RV-Measurement #Stellar-Inteference

citekey: dumusquePlanetaryDetectionLimits2011

collection:

- MAROON-X/To Read

status: unread

dateread:

---
# Notes
## Abstract
- Issue: Stellar noise affects radial velocity measurements. Is small at ~m/s but that is too large for detection of Earth-mass planets in the habitable zone
- Address role of observational strategies in averaging out RV signature of stellar noise
- Derive planetary mass detection limits expected in presence of stellar noise
- Applying 3 measurements per night with 10 min exposure 2 hr apart most efficiently averages out the stellar noise considered
## Main Paper
- Issues:
	- [[Stellar Oscillation]]
	- [[Stellar Granulation]]
	- Activity related spots and plages
		- Major effect is due to the inhibition of convection in active regions
		- Noise varies from $40-140 \; \rm cm \; s^{-1}$ 
- Solution
	- Use simulations exploring new measurement strategies to average granulation phenomena and oscillation modes at the same time
	- Find detection limits for different strategies
- Focus on stellar noise shorter than 8 days.
	- Does not include longer term activity signals like rotation period but influence is still included
	- Results are then only valid for stars without significant activity phenomena
- Generating synthetic data
	- Calculate the [[Velocity Power Spectrum Density|VPSD]] 
	- Synthetic RV should have the same noise structure as the real data does
	- This does not mean that the signals from activity that are longer than the period of the initial data are included
	- Fit the VPSD to obtain spectrum independent of original data sampling
	- VPSD can be adjusted with 13 free parameters:
		- $P(\nu)=\sum_{i=1}^{3} \dfrac{A_{i}}{1+(B_{i}\nu)^{C_{i}}}+A_{L} \dfrac{\Gamma^2}{(\nu-\nu_{0})^2+\Gamma^2}+const$
		- First term: Granulation
			- A is the power density of the corresponding convection motion
			- B is the characteristic timescale
			- C the slope of the power law
			- Sum over granulation, meso-granulation, super-granulation
		- Second term fit to describe: Oscillation modes
			- Read paper for details for fitting of Lorentzian
			- $A_{L}$ amplitude of Lorentzian
			- $\Gamma$ FWHM of Lorentzian
			- $\nu_{0}$ mean of Lorentzian
		- Third term: photon/instrumental noises
			- Assuming they are Gaussian they are a constant power addition
		- Bin the spectra using boxcar algorithm
	- Calculating synthetic RV
		- $RV(t_{i})=\sum_{\nu}\sqrt{ VPSD(\nu) }(\sin(2\pi \nu t_{i}+phase(\nu)))$
		- Frequency $\nu$ goes from 1/T to the Nyquist frequency
		- Found to not introduce bias
	- Find a trend that the noise level of granulation phenomena (and oscillations) decreases as you go towards late spectral type stars
## Conclusion
- Present HARPS strategy is good for reducing stellar oscillation noise but not optimized to average out granulation phenomena
- Increasing number of measurements reduces effect of granulation phenomena
- Trend between level of stellar noise and spectral type of dwarf stars
	- Early K dwarfs have lower noise level than early G dwarfs
- Trend between evolved and non-evolved stars
	- Non-evolved stars have a lower level of stellar noise
- Early K dwarfs are the most promising targets for very low mass planets (compared to early G dwarfs)
- Limitations
	- Due to short time-span measurements, do not properly take into account stellar activity noise sources
	- Detection limits obtained are only valid for stars without significant activity related phenomena (spots/plages)
	- Only simulate presence of one planet per star

> [!Cite]

Dumusque, X., S. Udry, C. Lovis, N. C. Santos, and M. J. P. F. G. Monteiro. “Planetary Detection Limits Taking into Account Stellar Noise - I. Observational Strategies to Reduce Stellar Oscillation and Granulation Effects.” _Astronomy & Astrophysics_ 525 (January 2011): A140. [https://doi.org/10.1051/0004-6361/201014097](https://doi.org/10.1051/0004-6361/201014097).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Dumusque, X]] 
**Author**: [[Files/Authors/Udry, S]] 
**Author**: [[Files/Authors/Lovis, C]] 
**Author**: [[Files/Authors/Santos, N. C.]] 
**Author**: [[Files/Authors/Monteiro, M. J. P. F. G.]] 


> **Year**: 2011  

> **Citekey**: dumusquePlanetaryDetectionLimits2011 

> **itemType**: journalArticle 

> **Journal**: *Astronomy & Astrophysics* 

> **Volume**: 525  

> **Pages**: A140 

> **DOI**:: 10.1051/0004-6361/201014097   

  
> [!Abstract]

>

> <i>Context.<i/> Stellar noise produced by oscillations, granulation phenomena (granulation, mesogranulation, and supergranulation), and activity affects radial velocity measurements. The signature of the corresponding effect in radial velocity is small, around the meter-per-second, but already too large for the detection of Earth-mass planets in habitable zones.<i>Aims.<i/> We address the important role played by observational strategies in averaging out the radial velocity signature of stellar noise. We also derive the planetary mass detection limits expected in the presence of stellar noise.<i>Methods.<i/> We start with HARPS asteroseismology measurements for four stars (<i>β<i/> Hyi, <i>α<i/> Cen A, <i>μ<i/> Ara, and <i>τ<i/> Ceti) available in the ESO archive and very precise measurements of <i>α<i/> Cen B. This sample covers different spectral types from G2 to K1 and different evolutionary stages, from subgiant to dwarf stars. Since data span between 5 and 8 days, only stellar noise sources with timescales shorter than this time span will be extracted from these observations. Therefore, we are able to study oscillation modes and granulation phenomena without being significantly affected by activity noise present on longer timescales. For those five stars, we generate synthetic radial velocity measurements after fitting the corresponding models of stellar noise in Fourier space. These measurements allow us to study the radial velocity variation due to stellar noise for different observational strategies as well as the corresponding planetary mass detection limits.<i>Results.<i/> Applying three measurements per night of 10 min exposure each, 2 h apart, seems to most efficiently average out the stellar noise considered. For quiet K1V stars such as <i>α<i/> Cen B, this strategy allows us to detect planets of about three times the mass of Earth with an orbital period of 200 days, corresponding to the habitable zone of the star. Moreover, our simulations suggest that planets smaller than typically 5 <i>M<i/><sub>⊕<sub/> can be detected with HARPS over a wide range of separations around most non-active solar-type dwarfs. Since activity is not yet included in our simulation, these detection limits correspond to a case, which exists, where the host star has few magnetic features and stellar noise is dominated by oscillation modes and granulation phenomena. For our star sample, a trend between spectral type and surface gravity and the level of radial velocity variation is also identified by our simulations.

>.



# Annotations%% begin annotations %%





%% end annotations %%
