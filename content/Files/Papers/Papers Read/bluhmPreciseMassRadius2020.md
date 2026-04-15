
---
**Title**: Precise mass and radius of a transiting super-Earth planet orbiting the M dwarf TOI-1235: a planet in the radius gap? 

tags: #paper 

citekey: bluhmPreciseMassRadius2020

collection:

- Papers Read

status: unread

dateread:

---
# Notes
## Abstract
- Confirm transiting planet around weakly active M0.5V star TOI-1235
- Use precise RV measurements to determine period of 3.44d complemented with high resolution imaging and photometry
- Planet has rocky composition, $M_{p}=5.9\pm0.6M_{\oplus}$ and $R_{p}=1.69\pm 0.08R_{\oplus}$
	- This places the planet in the radius gap or a transition region between rocky planets and planets with significant atmospheric envelopes
## Main Paper
### Introduction
- To better understand process involved in formation and evolution of planets useful to compare variations in the outcomes in different environments
- Occurrence rate of small planets orbiting M dwarfs appears to increase toward late spectral subtypes at all orbital periods
- There is a bimodal distribution of sizes of small $R<R_{\oplus}$ exoplanets called the **radius gap**
- Models to explain radius gap
	- Photoevaporation models
		- Planets that finally lie below the radius gap lost their atmospheres due to X-ray and XUV radiation from the star
	- Core-powered mass-loss models
		- Close in planets below the radius gap have lost their atmospheres but this is powered by heat from the planetary core
- Radius gap is dependent on the stellar type of the host stars and the total irradiation received by the planets
### Analysis and results
- **Limits on photometric contamination**
	- Presence of unresolved stellar companion could have a large impact on the results
	- Able to conclude that TOI-1235 is a single star
- **Stellar rotational period from photometric data**
	- Low activity levels imply a slow rotation 
	- Use a generalized Lomb-Scargle Periodogram with peak at $48.63\pm0.08d$
	- Used a [[Gaussian Process Model|GP]] with a [[Quasi-periodic kernel]] of the form $k_{i,j}(\tau)=\dfrac{B}{2+C}e^{-\tau/L}\left[ \cos \left( \dfrac{2\pi \tau}{P_{rot}} \right) +(1+C) \right]$
		- $\tau=|t_{i}-t_{j}|$ is the time lag
		- $B$ and $C$ define the amplitude of the GP
		- $L$ is the timescale for the amplitude-modulation of the GP
		- $P_{rot}$ is the period of the quasi-periodic modulations
		- $P_{rot}=41.2^{+1.1}_{-1.2}d$
	- Used light curves and searched with
		1. Time-frequency analysis with wavelets
		2. Autocorrelation function
		3. Composite spectrum that combines methods 1 and 2
		-  Find signals in range $32-42d$
	- This leads to suggesting that $\sim41.2d$ is the true rotation period
### Discussion
- RV measurements yield a planetary mass with uncertainty of about 10%
- TESS and LCOGT light curves constrain planetary radius to about 5%
- TOI-1235b is on a fairly irradiated orbit and so could have been strongly sculpted by extreme atmospheric escape from XUV-driven photevaporation
	- Found this planet lies right at the boundary of where escape evolution is likely to play a significant role in removing primordial H/He gaseous envelopes
- If atmospheric loss is indeed the correct physical interpretation of the radius gap and if it applies to M dwarfs at the period or stellar irradiation level of TOI-1235b then the gap for early type M dwarfs has to be either at or above $1.7R_{\oplus}$
## Conclusion
- Confirm TOI-1235 b is a transiting super-Earth planet around an M0.5 V star
- Although a radius gap existing is still debated for M dwarfs if it exists would include where this planet is helping to constrain the potential gap
> [!Cite]

Bluhm, P., R. Luque, N. Espinoza, et al. “Precise Mass and Radius of a Transiting Super-Earth Planet Orbiting the M Dwarf TOI-1235: A Planet in the Radius Gap?” _Astronomy & Astrophysics_ 639 (July 2020): A132. [https://doi.org/10.1051/0004-6361/202038160](https://doi.org/10.1051/0004-6361/202038160).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Bluhm, P]] 
**Author**: [[Files/Authors/Luque, R]] 
**Author**: [[Files/Authors/Espinoza, N]] 
**Author**: [[Files/Authors/Pallé, E]] 
**Author**: [[Files/Authors/Caballero, J. A.]] 
**Author**: [[Files/Authors/Dreizler, S]] 
**Author**: [[Files/Authors/Livingston, J. H.]] 
**Author**: [[Files/Authors/Mathur, S]] 
**Author**: [[Files/Authors/Quirrenbach, A]] 
**Author**: [[Files/Authors/Stock, S]] 
**Author**: [[Files/Authors/Van Eylen, V]] 
**Author**: [[Files/Authors/Nowak, G]] 
**Author**: [[Files/Authors/López, E. D.]] 
**Author**: [[Files/Authors/Csizmadia, S]] 
**Author**: [[Files/Authors/Zapatero Osorio, M. R.]] 
**Author**: [[Files/Authors/Schöfer, P]] 
**Author**: [[Files/Authors/Lillo-Box, J]] 
**Author**: [[Files/Authors/Oshagh, M]] 
**Author**: [[Files/Authors/González-Álvarez, E]] 
**Author**: [[Files/Authors/Amado, P. J.]] 
**Author**: [[Files/Authors/Barrado, D]] 
**Author**: [[Files/Authors/Béjar, V. J. S.]] 
**Author**: [[Files/Authors/Cale, B]] 
**Author**: [[Files/Authors/Chaturvedi, P]] 
**Author**: [[Files/Authors/Cifuentes, C]] 
**Author**: [[Files/Authors/Cochran, W. D.]] 
**Author**: [[Files/Authors/Collins, K. A.]] 
**Author**: [[Files/Authors/Collins, K. I.]] 
**Author**: [[Files/Authors/Cortés-Contreras, M]] 
**Author**: [[Files/Authors/Díez Alonso, E]] 
**Author**: [[Files/Authors/El Mufti, M]] 
**Author**: [[Files/Authors/Ercolino, A]] 
**Author**: [[Files/Authors/Fridlund, M]] 
**Author**: [[Files/Authors/Gaidos, E]] 
**Author**: [[Files/Authors/García, R. A.]] 
**Author**: [[Files/Authors/Georgieva, I]] 
**Author**: [[Files/Authors/González-Cuesta, L]] 
**Author**: [[Files/Authors/Guerra, P]] 
**Author**: [[Files/Authors/Hatzes, A. P.]] 
**Author**: [[Files/Authors/Henning, T]] 
**Author**: [[Files/Authors/Herrero, E]] 
**Author**: [[Files/Authors/Hidalgo, D]] 
**Author**: [[Files/Authors/Isopi, G]] 
**Author**: [[Files/Authors/Jeffers, S. V.]] 
**Author**: [[Files/Authors/Jenkins, J. M.]] 
**Author**: [[Files/Authors/Jensen, E. L. N.]] 
**Author**: [[Files/Authors/Kábath, P]] 
**Author**: [[Files/Authors/Kaminski, A]] 
**Author**: [[Files/Authors/Kemmer, J]] 
**Author**: [[Files/Authors/Korth, J]] 
**Author**: [[Files/Authors/Kossakowski, D]] 
**Author**: [[Files/Authors/Kürster, M]] 
**Author**: [[Files/Authors/Lafarga, M]] 
**Author**: [[Files/Authors/Mallia, F]] 
**Author**: [[Files/Authors/Montes, D]] 
**Author**: [[Files/Authors/Morales, J. C.]] 
**Author**: [[Files/Authors/Morales-Calderón, M]] 
**Author**: [[Files/Authors/Murgas, F]] 
**Author**: [[Files/Authors/Narita, N]] 
**Author**: [[Files/Authors/Passegger, V. M.]] 
**Author**: [[Files/Authors/Pedraz, S]] 
**Author**: [[Files/Authors/Persson, C. M.]] 
**Author**: [[Files/Authors/Plavchan, P]] 
**Author**: [[Files/Authors/Rauer, H]] 
**Author**: [[Files/Authors/Redfield, S]] 
**Author**: [[Files/Authors/Reffert, S]] 
**Author**: [[Files/Authors/Reiners, A]] 
**Author**: [[Files/Authors/Ribas, I]] 
**Author**: [[Files/Authors/Ricker, G. R.]] 
**Author**: [[Files/Authors/Rodríguez-López, C]] 
**Author**: [[Files/Authors/Santos, A. R. G.]] 
**Author**: [[Files/Authors/Seager, S]] 
**Author**: [[Files/Authors/Schlecker, M]] 
**Author**: [[Files/Authors/Schweitzer, A]] 
**Author**: [[Files/Authors/Shan, Y]] 
**Author**: [[Files/Authors/Soto, M. G.]] 
**Author**: [[Files/Authors/Subjak, J]] 
**Author**: [[Files/Authors/Tal-Or, L]] 
**Author**: [[Files/Authors/Trifonov, T]] 
**Author**: [[Files/Authors/Vanaverbeke, S]] 
**Author**: [[Files/Authors/Vanderspek, R]] 
**Author**: [[Files/Authors/Wittrock, J]] 
**Author**: [[Files/Authors/Zechmeister, M]] 
**Author**: [[Files/Authors/Zohrabi, F]] 


> **Year**: 2020  

> **Citekey**: bluhmPreciseMassRadius2020 

> **itemType**: journalArticle 

> **Journal**: *Astronomy & Astrophysics* 

> **Volume**: 639  

> **Pages**: A132 

> **DOI**:: 10.1051/0004-6361/202038160   

  
> [!Abstract]

>

> We report the conﬁrmation of a transiting planet around the bright weakly active M0.5 V star TOI-1235 (TYC 4384–1735–1, V ≈ 11.5 mag), whose transit signal was detected in the photometric time series of sectors 14, 20, and 21 of the TESS space mission. We conﬁrm the planetary nature of the transit signal, which has a period of 3.44 d, by using precise RV measurements with the CARMENES, HARPS-N, and iSHELL spectrographs, supplemented by high-resolution imaging and ground-based photometry. A comparison of the properties derived for TOI-1235 b with theoretical models reveals that the planet has a rocky composition, with a bulk density slightly higher than that of Earth. In particular, we measure a mass of Mp = 5.9 ± 0.6 M⊕ and a radius of Rp = 1.69 ± 0.08 R⊕, which together result in a density of ρp = 6.7+−11..31 g cm−3. When compared with other well-characterized exoplanetary systems, the particular combination of planetary radius and mass places our discovery in the radius gap, which is a transition region between rocky planets and planets with signiﬁcant atmospheric envelopes. A few examples of planets occupying the radius gap are known to date. While the exact location of the radius gap for M dwarfs is still a matter of debate, our results constrain it to be located at around 1.7 R⊕ or larger at the insolation levels received by TOI-1235 b (∼60 S ⊕). This makes it an extremely interesting object for further studies of planet formation and atmospheric evolution.

>.



# Annotations%% begin annotations %%





%% end annotations %%
