
---
tags: #GP-Model #Stars #Astrophysics-Earth-and-Planetary-Astrophysics #Astrophysics-Solar-and-Stellar-Astrophysics #Planet-Detection #RV-analysis #CARMENES

citekey: stockCARMENESSearchExoplanets2020

collection:

- Papers to Read

status: unread

dateread:

---
# Notes
## Abstract
- Find two planets orbiting M dwarfs GJ 251 and HD 238090
- Also confirm Lalande 21185 b
- All planets are warm or temperate super-Earths
- Use a Bayesian approach to carefully model the Keplerian signals simultaneously with the stellar activity using a [[Gaussian Process Model|Gaussian Process Regression Model]] and search for additional significant planetary signals hidden behind stellar activity
## Main Paper
### Methods
- **Periodograms**
	- Used the generalized Lomb-Scargle (GLS) periodogram to assess significant periodicities in the photometric and spectroscopic data
	- Detection threshold was a [[False Alarm Probability|FAP]]<0.001
	- To assess coherence of a periodic signal over the observation time used stacked-Bayesian GLS periodogram
- **Modeling of RV and photometric data**
	- For the modeling used `juliet` to fit photometric and RV data. Using [[Quasi-periodic kernel|QP]] kernel
		- Used `radvel` to model Keplerian RV signals
		- Used `george` for GP modeling of both photometric and RV data
- **De-aliasing**
	- Aliases are spurious signals caused by the sampling of the data
	- Due to the irregular sampling of RV measurements, more than one sampling frequency is often apparent
	- Used `AliasFinder` to confirm that the assumed planetary signal is the true signal and not an alias
### GJ 251
- **Periodogram analysis and RV modeling**
	- Having to model two sinusoidal functions with periods close to the rotational period and its half suggest they are caused by stellar activity
		- Such as a multi-spot pattern or amplitude variations caused by decreasing spot areas
		- To rule out planet signals analyzed coherence of the signals using the s-BGLS periodogram
- **Simultaneous Keplerian and GP modeling**
	- Perform simultaneous fit of one planet Keplerian model with the [[Quasi-periodic kernel|QP]]-[[Gaussian Process Model|GP]] 
	- Unconstrained GP provides indications for stellar rotational period
	- Adding the GP improved the log-evidence compared to one-planet fit on its ownAlso applied constraints on GP based on stellar rotation period derived from photometry

## Conclusion
- Present discovery of two super-Earth planets
- Confirmed super-Earth lalande 21185 b as well
- Modeled stellar activity using GP models with the QP kernel
	- Applied physically motivated constraints to the hyper parmaeters
	- Advocate for the use of classical periodograms to decompose the modeled frequencies by GPs to verify behaviors of the GP

> [!Cite]

Stock, S., E. Nagel, J. Kemmer, et al. “The CARMENES Search for Exoplanets around M Dwarfs - Three Temperate-to-Warm Super-Earths.” _Astronomy & Astrophysics_ 643 (November 2020): A112. [https://doi.org/10.1051/0004-6361/202038820](https://doi.org/10.1051/0004-6361/202038820).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Stock, S]] 
**Author**: [[Files/Authors/Nagel, E]] 
**Author**: [[Files/Authors/Kemmer, J]] 
**Author**: [[Files/Authors/Passegger, V. M.]] 
**Author**: [[Files/Authors/Reffert, S]] 
**Author**: [[Files/Authors/Quirrenbach, A]] 
**Author**: [[Files/Authors/Caballero, J. A.]] 
**Author**: [[Files/Authors/Czesla, S]] 
**Author**: [[Files/Authors/Béjar, V. J. S.]] 
**Author**: [[Files/Authors/Cardona, C]] 
**Author**: [[Files/Authors/Díez-Alonso, E]] 
**Author**: [[Files/Authors/Herrero, E]] 
**Author**: [[Files/Authors/Lalitha, S]] 
**Author**: [[Files/Authors/Schlecker, M]] 
**Author**: [[Files/Authors/Tal-Or, L]] 
**Author**: [[Files/Authors/Rodríguez, E]] 
**Author**: [[Files/Authors/Rodríguez-López, C]] 
**Author**: [[Files/Authors/Ribas, I]] 
**Author**: [[Files/Authors/Reiners, A]] 
**Author**: [[Files/Authors/Amado, P. J.]] 
**Author**: [[Files/Authors/Bauer, F. F.]] 
**Author**: [[Files/Authors/Bluhm, P]] 
**Author**: [[Files/Authors/Cortés-Contreras, M]] 
**Author**: [[Files/Authors/González-Cuesta, L]] 
**Author**: [[Files/Authors/Dreizler, S]] 
**Author**: [[Files/Authors/Hatzes, A. P.]] 
**Author**: [[Files/Authors/Henning, T]] 
**Author**: [[Files/Authors/Jeffers, S. V.]] 
**Author**: [[Files/Authors/Kaminski, A]] 
**Author**: [[Files/Authors/Kürster, M]] 
**Author**: [[Files/Authors/Lafarga, M]] 
**Author**: [[Files/Authors/López-González, M. J.]] 
**Author**: [[Files/Authors/Montes, D]] 
**Author**: [[Files/Authors/Morales, J. C.]] 
**Author**: [[Files/Authors/Pedraz, S]] 
**Author**: [[Files/Authors/Schöfer, P]] 
**Author**: [[Files/Authors/Schweitzer, A]] 
**Author**: [[Files/Authors/Trifonov, T]] 
**Author**: [[Files/Authors/Osorio, M. R. Zapatero]] 
**Author**: [[Files/Authors/Zechmeister, M]] 


> **Year**: 2020  

> **Citekey**: stockCARMENESSearchExoplanets2020 

> **itemType**: journalArticle 

> **Journal**: *Astronomy & Astrophysics* 

> **Volume**: 643  

> **Pages**: A112 

> **DOI**:: 10.1051/0004-6361/202038820   

  
> [!Abstract]

>

> We announce the discovery of two planets orbiting the M dwarfs GJ 251 (0.360 ± 0.015<i>M<i/><sub>⊙<sub/>) and HD 238090 (0.578 ± 0.021<i>M<i/><sub>⊙<sub/>) based on CARMENES radial velocity (RV) data. In addition, we independently confirm with CARMENES data the existence of Lalande 21185 b, a planet that has recently been discovered with the SOPHIE spectrograph. All three planets belong to the class of warm or temperate super-Earths and share similar properties. The orbital periods are 14.24 d, 13.67 d, and 12.95 d and the minimum masses are 4.0 ± 0.4 <i>M<i/><sub>⊕<sub/>, 6.9 ± 0.9 <i>M<i/><sub>⊕<sub/>, and 2.7 ± 0.3 <i>M<i/><sub>⊕<sub/> for GJ 251 b, HD 238090 b, and Lalande 21185 b, respectively. Based on the orbital and stellar properties, we estimate equilibrium temperatures of 351.0 ± 1.4 K for GJ 251 b, 469.6 ± 2.6 K for HD 238090 b, and 370.1 ± 6.8 K for Lalande 21185 b. For the latter we resolve the daily aliases that were present in the SOPHIE data and that hindered an unambiguous determination of the orbital period. We find no significant signals in any of our spectral activity indicators at the planetary periods. The RV observations were accompanied by contemporaneous photometric observations. We derive stellar rotation periods of 122.1 ± 2.2 d and 96.7 ± 3.7 d for GJ 251 and HD 238090, respectively. The RV data of all three stars exhibit significant signals at the rotational period or its first harmonic. For GJ 251 and Lalande 21185, we also find long-period signals around 600 d, and 2900 d, respectively, which we tentatively attribute to long-term magnetic cycles. We apply a Bayesian approach to carefully model the Keplerian signals simultaneously with the stellar activity using Gaussian process regression models and extensively search for additional significant planetary signals hidden behind the stellar activity. Current planet formation theories suggest that the three systems represent a common architecture, consistent with formation following the core accretion paradigm.

>.



# Annotations%% begin annotations %%





%% end annotations %%
