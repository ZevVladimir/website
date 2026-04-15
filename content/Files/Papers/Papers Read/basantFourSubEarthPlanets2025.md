
---
**Title**: Four sub-Earth planets orbiting Barnard's Star from MAROON-X and ESPRESSO 

tags: #Astrophysics-Earth-and-Planetary-Astrophysics #paper #Barnards-Star 

citekey: basantFourSubEarthPlanets2025

collection:

- Papers Read

status: unread

dateread:

---
# Notes
## Abstract
- Use radial velocities from MAROON-X and ESPRESSO to identify four sub-Earth mass planets around Barnard's Star
- Signals from all four planets are $<50\mathrm{cms^{-1}}$
- Minimum masses of planets $0.19-0.34M_{\oplus}$
- No planets $>0.57M_{\oplus}$ in Barnard Star's habitable zone
## Main Paper
### Introduction
- Barnard's star
	- Single, mid M dwarf
	- Largest proper motion of star in the sky
	- $\sim10\mathrm{Gyr}$ with slow rotation and low levels of activity
	- Close by
### Methods and Results
#### Modeling Stellar Activity
- Barnard's star's stellar activity
	- A long term magnetic activity cycle $P\sim3800d$
	- Activity induced variation in rotational period $(\sim142\mathrm{d})$ and its second harmonic $(\sim71\mathrm{d})$
- Minimizing the effects
	- [[Gaussian Process Model|Gaussian process]]es can be used to mitigate the effects [[rajpaulGaussianProcessFramework2015]]
	- Or model with FHWM of the [[Cross-Correlation Function|CCF]] with a Double Simple Harmonic Oscillator (DSHO) kernel
- Use $\texttt{juliet}$ with a DSHO GP kernel
	- Parametrized by 
		- $\sigma_{\mathrm{GP-INST}}$ the standard deviation of the data
		- $P_{\mathrm{rot}}$ rotational period of the primary oscillator
		- $Q_{0}$ quality factor for the second oscillator
		- $f$ ratio of amplitudes of the secondary and the primary mode
		- $dQ$ difference between the quality factors of both oscillators
	- Only model RV velocities with a 1D GP (not 2D)
	- Also model white noise (jitter) $\sigma$ term of the radial velocity data
	- Use free offsets ($\gamma$) between MAROON-X observing runs
	- To prevent overfitting use priors on parameters
		- Normal prior on $P_{\mathrm{rot}}$ of GP
		- Uniform prior on $f$
		- Log-uniform prior on $Q_{0}$ and $dQ$
	- Share hyperparameters between runs
		- Hyperparameters are related to time-dependent properties of the oscillator. Less likely to be wavelength dependent
		- Helps in more efficient mitigation of the stellar activity due to a longer baseline to constrain the characteristic parameters
#### Independent detection of planets b,c,d with MAROON-X
- Focus on Red arm data as potentially less stellar activity influence
- First remove GP model from Red channel RVs
- Iteratively identify signfiicant signal with [[False Alarm Probability|FAP]]$>0.1\%$ and model it in the RV data with Keplerian orbit
- Compute residuals and recompute periodogram
## Conclusion
- 
## Questions
- 

> [!Cite]

Basant, Ritvik, Rafael Luque, Jacob L. Bean, et al. “Four Sub-Earth Planets Orbiting Barnard’s Star from MAROON-X and ESPRESSO.” arXiv:2503.08095. Preprint, arXiv, March 11, 2025. [https://doi.org/10.48550/arXiv.2503.08095](https://doi.org/10.48550/arXiv.2503.08095).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Basant, R]] 
**Author**: [[Files/Authors/Luque, R]] 
**Author**: [[Files/Authors/Bean, J]] 
**Author**: [[Files/Authors/Seifahrt, A]] 
**Author**: [[Files/Authors/Brady, M]] 
**Author**: [[Files/Authors/Zhao, L]] 
**Author**: [[Files/Authors/Brown, N]] 
**Author**: [[Files/Authors/Das, T]] 
**Author**: [[Files/Authors/Stürmer, J]] 
**Author**: [[Files/Authors/Kasper, D]] 
**Author**: [[Files/Authors/Gupta, R]] 
**Author**: [[Files/Authors/Stefánsson, G]] 


> **Year**: 2025  

> **Citekey**: basantFourSubEarthPlanets2025 

> **itemType**: preprint 

> **DOI**:: 10.48550/arXiv.2503.08095   

  
> [!Abstract]

>

> Barnard's Star is an old, single M dwarf star that comprises the second-closest extrasolar system. It has a long history of claimed planet detections from both radial velocities and astrometry. However, none of these claimed detections have so far withstood further scrutiny. Continuing this story, extreme precision radial velocity (EPRV) measurements from the ESPRESSO instrument have recently been used to identify four new sub-Earth-mass planet candidates around Barnard's Star. We present here 112 radial velocities of Barnard's Star from the MAROON-X instrument that were obtained independently to search for planets around this compelling object. The data have a typical precision of 30\,cm\,s$^{-1}$ and are contemporaneous with the published ESPRESSO measurements (2021 -- 2023). The MAROON-X data on their own confirm planet b ($P$\,=\,3.154\,d) and planet candidates c and d ($P$\,=\,4.124\,d and 2.340\,d, respectively). Furthermore, adding the MAROON-X data to the ESPRESSO data strengthens the evidence for planet candidate e ($P$\,=\,6.739\,d), thus leading to its confirmation. The signals from all four planets are $<$50\,cm\,s$^{-1}$, the minimum masses of the planets range from 0.19 to 0.34\,$M_{\oplus}$, and the system is among the most compact known among late M dwarfs hosting low-mass planets. The current data rule out planets with masses $>0.57\,M_{\oplus}$ (with a $99\%$ detection probability) in Barnard Star's habitable zone ($P$\,=\,10 -- 42\,d).

>.



# Annotations%% begin annotations %%




  



<mark style="background-color: #ffd400">Quote</mark>

> 112 radial velocities of Barnard’s Star from the MAROON-X instrument



<mark style="background-color: #ffd400">Quote</mark>

> confirm planet b (P = 3.154 d) and planet candidates c and d (P = 4.124 d and 2.340 d, respectively).



<mark style="background-color: #ffd400">Quote</mark>

> strengthens the evidence for planet candidate e (P = 6.739 d), thus leading to its confirmation.



<mark style="background-color: #ffd400">Quote</mark>

> all four planets are <50 cm s−1,



<mark style="background-color: #ffd400">Quote</mark>

> masses of the planets range from 0.19 to 0.34 M⊕



<mark style="background-color: #ffd400">Quote</mark>

> rule out planets with masses > 0.57 M⊕



<mark style="background-color: #ffd400">Quote</mark>

> The detected signals have semi-amplitudes that range from 47 down to 20 cm s−1,



<mark style="background-color: #ffd400">Quote</mark>

> Due to its nearness and low mass, Barnard’s Star has been the subject of many searches for planets.



<mark style="background-color: #5fb236">Quote</mark>

> campaign mode during this period, with discrete observing runs ranging from one to five weeks in duration.



<mark style="background-color: #5fb236">Quote</mark>

> nine distinct observing runs.



<mark style="background-color: #5fb236">Quote</mark>

> five minute exposures



<mark style="background-color: #5fb236">Quote</mark>

> single exposure



<mark style="background-color: #5fb236">Quote</mark>

> mid- to below-average conditions



<mark style="background-color: #5fb236">Quote</mark>

> individual exposures were reduced separately.



<mark style="background-color: #e56eee">Quote</mark>

> reduced and extracted wavelength-calibrated 1D spectra from Barnard’s Star data using our standard pipeline



<mark style="background-color: #e56eee">Quote</mark>

> measured radial velocities from the reduced spectra using a specific version of the serval



<mark style="background-color: #e56eee">Quote</mark>

> serval code uses a template-matching approach



<mark style="background-color: #e56eee">Quote</mark>

> highest signal-to-noise ratio (SNR) is chosen as a reference



<mark style="background-color: #e56eee">Quote</mark>

> spectra are shifted to this reference frame and then serval co-adds them to produce a high-SNR template



<mark style="background-color: #e56eee">Quote</mark>

> template-matching approach for computing radial velocities is more suitable for the rich spectra of M dwarfs



<mark style="background-color: #e56eee">Quote</mark>

> serval measures various activity indicators, including the chromatic, differential line width, Hα, Ca II triplet, and Na I doublet indices



<mark style="background-color: #e56eee">Quote</mark>

> barycorrpy code (Kanodia & Wright 2018) to calculate the barycentric correction, including the effect of secular acceleration.



<mark style="background-color: #5fb236">Quote</mark>

> passively-stabilized Fabry-Pérot etalon



<mark style="background-color: #5fb236">Quote</mark>

> primary calibration source



<mark style="background-color: #5fb236">Quote</mark>

> Simultaneous etalon spectra are obtained using a dedicated fiber during each science exposure.



<mark style="background-color: #5fb236">Quote</mark>

> measure the drift of the instrument from reference etalon spectra taken through the science fibers during daytime calibrations.



<mark style="background-color: #5fb236">Quote</mark>

> correct this drift using free offsets between observing runs



<mark style="background-color: #ffd400">Quote</mark>

> long-term magnetic activity cycle with P ∼ 3800 d



<mark style="background-color: #ffd400">Quote</mark>

> activity-induced variation at both the rotational period (∼ 142 d) and its second harmonic (∼ 71 d



<mark style="background-color: #ffd400">Quote</mark>

> stellar activity-induced radial velocity variations not only produce statistically significant signals in the periodograms (Queloz et al. 2001), but also pose a significant challenge in characterizing sub- m s−1 signals



<mark style="background-color: #ffd400">Quote</mark>

> González Hernández et al. (2024) performed a detailed analysis



<mark style="background-color: #a28ae5">Quote</mark>

> CCF



<mark style="background-color: #ffd400">Quote</mark>

> Double Simple Harmonic Oscillator (DSHO) kernel, centered on the rotational period and its second harmonic, can effectively model the activity signals



<mark style="background-color: #ffd400">Quote</mark>

> raw radial velocities exhibit periodic signals associated with the stellar rotation period (∼ 142 days



<mark style="background-color: #ffd400">Quote</mark>

> prominent signal near the edge of the frequency grid (∼ 600d) is observed, which we associate with the MAROON-X instrumental drift.



<mark style="background-color: #a28ae5">Quote</mark>

> chromatic index measures the correlation between the radial velocities and wavelength



<mark style="background-color: #a28ae5">Quote</mark>

> differential line width characterizes width changes in individual line profiles,



<mark style="background-color: #e56eee">Quote</mark>

> perform nested sampling and estimates the (log-)marginal likelihood (ln Z), a useful statistical measure to compare models



<mark style="background-color: #e56eee">Quote</mark>

> model an additional white noise (jitter) term (σ) in the radial velocity data.



<mark style="background-color: #e56eee">Quote</mark>

> use free offsets (γ) between the MAROON-X observing runs



<mark style="background-color: #e56eee">Quote</mark>

> use a normal prior on the rotation period hyperparameter (Prot) of the GP with the mean 142 d and standard deviation 9 d



<mark style="background-color: #e56eee">Quote</mark>

> uniform prior (U [0, 1]) on hyperparameter f and a log-uniform prior LU [0.1, 100]) on both Q0 and dQ.



<mark style="background-color: #ffd400">Quote</mark>

> GP hyperparameter σGP−INST is directly related to the amplitude of the radial velocity signal imprinted by the stellar activity and is, therefore, wavelength-dependent



<mark style="background-color: #ffd400">Quote</mark>

> results are all consistent or even better (e.g., higher marginal evidence and smaller parameter uncertainties) when including the Blue arm data.



<mark style="background-color: #ffd400">Quote</mark>

> 38.9



<mark style="background-color: #e56eee">Quote</mark>

> identify a significant signal having FAP > 0.1%, we model it in the radial velocity data using a Keplerian orbit



<mark style="background-color: #e56eee">Quote</mark>

> case of multiple significant signals, we model only one of them and check if the other signals still appear in the periodogram and then repeat this process for all other signals



<mark style="background-color: #e56eee">Quote</mark>

> confirm a signal originating from an orbiting planet if the improvement in the marginal evidence is > 5.0.



<mark style="background-color: #ffd400">Quote</mark>

> periodograms show multiple high-frequency signals with FAP ≳ 1% in addition to those we identify as due to planets. We associate them with the following aliases of the planetary signals: 0.70 d (1-d alias of 2.34 d signal), 0.41 d (1-d alias of 0.70 d signal), 1.75 d (1-d alias of 2.34 d signal), 1.46 d (1-d alias of 3.15 d signal), 1.32 d (1-d alias of 4.12 d signal), and 0.80 d (1-d alias of 4.12 d signal).



<mark style="background-color: #ffd400">Quote</mark>

> (1) Parametrizing the eccentricities as h = √e sin ω and k = √e cos ω and using an uninformative uniform prior U [-1, 1]



<mark style="background-color: #ffd400">Quote</mark>

> eccentricities directly from a beta distribution β [1.52, 29] and drawing the argument of periastron (ω) from a uniform distribution U [-180, 180]



<mark style="background-color: #ffd400">Quote</mark>

> Assuming circular orbits.



<mark style="background-color: #ffd400">Quote</mark>

> modeling the most significant signal at 3.154 d, which corresponds to planet b.



<mark style="background-color: #ffd400">Quote</mark>

> the periodogram of the residuals shows two significant signals at the locations of planet candidates c (P = 4.124 d) and d (P = 2.340 d



<mark style="background-color: #ffd400">Quote</mark>

> Irrespective of the order in which the second planet is added, the marginal evidence of the 2-Planet model improves significantly



<mark style="background-color: #ffd400">Quote</mark>

> marginal evidence increases significantly, improving by 35.9 compared to the GP-only model, and by 18.4 and 19.8 relative to the 2-Planet models,



<mark style="background-color: #ffd400">Quote</mark>

> we confirm planet b and planet candidates c and d independently using MAROON-X alone.



<mark style="background-color: #ffd400">Quote</mark>

> 3Planet model does not show any significant signal, it shows some power around the period of planet candidate e (P = 6.739 d).



<mark style="background-color: #e56eee">Quote</mark>

> adopted the 149 radial velocities (which were derived via the S-BART code, Silva et al. 2022) of the ESPRESSO



<mark style="background-color: #e56eee">Quote</mark>

> ran the 4-Keplerian model ten times



<mark style="background-color: #e56eee">Quote</mark>

> osteriors are consistent within different runs



<mark style="background-color: #ffd400">Quote</mark>

> signals for planets b, c, and d show up clearly in the periodograms, and models with increasing planet numbers have very large improvements in the evidence.



<mark style="background-color: #ffd400">Quote</mark>

> signal for planet candidate e in the periodogram is strengthened



<mark style="background-color: #ffd400">Quote</mark>

> proposed four-planet configuration for Barnard’s Star is remarkably compact



<mark style="background-color: #e56eee">Quote</mark>

> POCK tool (Tamayo et al. 2020) and numerical integrations using the REBOUND code



<mark style="background-color: #ffd400">Quote</mark>

> results in an unstable system within 2,000 years.



<mark style="background-color: #ffd400">Quote</mark>

> small, but non-zero eccentricities of the planets in the best-fit solution are likely to blame for this instability.



<mark style="background-color: #ffd400">Quote</mark>

> known bias to non-zero eccentricity in radial velocity fits



<mark style="background-color: #ffd400">Quote</mark>

> conclude that our proposed four-planet configuration is not obviously unstable and that eccentricities <0.02 are favored.



<mark style="background-color: #e56eee">Quote</mark>

> performed a suite of injection-recovery tests on the residuals of our 4-Planet joint fit of MAROON-X Red channel and ESPRESSO data using rvsearch



<mark style="background-color: #ffd400">Quote</mark>

> the detection of planet e more likely with the combined dataset



<mark style="background-color: #ffd400">Quote</mark>

> current measurements allow us to rule out the presence of planets with minimum masses 0.37M⊕ to 0.57M⊕ (detection probability > 0.99) near the inner and outer edges of the habitable zone.



<mark style="background-color: #ffd400">Quote</mark>

> planet signals are all < 50 cm s−1, and the planets have minimum masses < 0.34 M⊕



<mark style="background-color: #ffd400">Quote</mark>

> Barnard e has the lowest radial velocity semi-amplitude of a claimed planet.



<mark style="background-color: #ffd400">Quote</mark>

> could either be indicative of residual stellar activity or unidentified instrument systematics



<mark style="background-color: #ffd400">Quote</mark>

> best EPRV instruments are still not achieving their maximum potential performance.



<mark style="background-color: #5fb236">Quote</mark>

> science





%% end annotations %%
