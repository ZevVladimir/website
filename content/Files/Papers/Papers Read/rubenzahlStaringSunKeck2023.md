
---
**Title**:: Staring at the Sun with the Keck Planet Finder: An Autonomous Solar Calibrator for High Signal-to-noise Sun-as-a-star Spectra 

tags: #Astrophysics-Solar-and-Stellar-Astrophysics #Astrophysics-Instrumentation-and-Methods-for-Astrophysics #RV-Measurement 

citekey: rubenzahlStaringSunKeck2023

collection:

- Papers to Read

status: unread

dateread:

---
# Notes
## Abstract
- With instrument Solar Calibrator (SoCal) on the Keck Planet Finder (KPF) obtain SNR$\sim 1200$, $R=98000$ spectra of the sun
## Main Paper
### Introduction
- Sun is ideal laboratory for studying how activity manifests in spectra (especially solar type stars, convenient for looking for exo-Earths)
### Instrumental Design
- Design principles for SoCal
	- Enable EPRV-quality stellar activity studies
	- Provide long-term instrumental calibration/tracking
	- Be robust to extreme weather environment
- Automatic determination of when to observe based off weather and position of the Sun
### Data Reduction
#### KPF Data Reduction Pipeline
- Follow mostly the same reduction as stellar spectra from Keck I
- RVs computed using [[Cross-Correlation Function|CCF]] technique
	- Use weighted numerical stellar mask based on spectral type for each SCI slice and for each CCD
- Global drift model for instrument will be constructed each day and then subtracted from measured RVs

## Conclusion
- Daily operations are autonomous and observe the sun almost daily
- Are able to record solar RV time series at 21s cadence with $<30\mathrm{cm \; s^{-1}}$ photon-limited precision
- Monitoring of the sun will allow for
	- Multi-instrument comparisons and calibrations
	- Near-continuous solar monitoring which can constrain granulation effects
- With solar feed for MAROON-X can compare between SoCal and MAROON-X effectively as the only variable is the instrument
- Also could be useful to compare to RVs obtained from asteroseismology observatories

> [!Cite]

Rubenzahl, Ryan A., Samuel Halverson, Josh Walawender, et al. “Staring at the Sun with the Keck Planet Finder: An Autonomous Solar Calibrator for High Signal-to-Noise Sun-as-a-Star Spectra.” _Publications of the Astronomical Society of the Pacific_ 135, no. 1054 (2023): 125002. [https://doi.org/10.1088/1538-3873/ad0b30](https://doi.org/10.1088/1538-3873/ad0b30).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Rubenzahl, R]] 
**Author**: [[Files/Authors/Halverson, S]] 
**Author**: [[Files/Authors/Walawender, J]] 
**Author**: [[Files/Authors/Hill, G]] 
**Author**: [[Files/Authors/Howard, A]] 
**Author**: [[Files/Authors/Brown, M]] 
**Author**: [[Files/Authors/Ida, E]] 
**Author**: [[Files/Authors/Tehero, J]] 
**Author**: [[Files/Authors/Fulton, B]] 
**Author**: [[Files/Authors/Gibson, S]] 
**Author**: [[Files/Authors/Kassis, M]] 
**Author**: [[Files/Authors/Smith, B]] 
**Author**: [[Files/Authors/Wold, T]] 
**Author**: [[Files/Authors/Payne, J]] 


> **Year**: 2023  

> **Citekey**: rubenzahlStaringSunKeck2023 

> **itemType**: journalArticle 

> **Journal**: *Publications of the Astronomical Society of the Pacific* 

> **Volume**: 135 

> **Issue**: 1054  

> **Pages**: 125002 

> **DOI**:: 10.1088/1538-3873/ad0b30   

  
> [!Abstract]

>

> Extreme precision radial velocity (EPRV) measurements contend with internal noise (instrumental systematics) and external noise (intrinsic stellar variability) on the road to 10 cm s−1 “exo-Earth” sensitivity. Both of these noise sources are well-probed using “Sun-as-a-star” RVs and cross-instrument comparisons. We built the Solar Calibrator (SoCal), an autonomous system that feeds stable, disk-integrated sunlight to the recently commissioned Keck Planet Finder (KPF) at the W. M. Keck Observatory. With SoCal, KPF acquires signal-to-noise ratio (S/N) ∼ 1200, R = 98,000 optical (445–870 nm) spectra of the Sun in 5 s exposures at unprecedented cadence for an EPRV facility using KPF’s fast readout mode (<16 s between exposures). Daily autonomous operation is achieved by defining an operations loop using state machine logic. Data affected by clouds are automatically flagged using a reliable quality control metric derived from simultaneous irradiance measurements. Comparing solar data across the growing global network of EPRV spectrographs with solar feeds will allow EPRV teams to disentangle internal and external noise sources and benchmark spectrograph performance. To facilitate this, all SoCal data products are immediately available to the public on the Keck Observatory Archive. We compared SoCal RVs to contemporaneous RVs from NEID, the only other immediately public EPRV solar data set. We find agreement at the 30–40 cm s−1 level on timescales of several hours, which is comparable to the combined photon-limited precision. Data from SoCal were also used to assess a detector problem and wavelength calibration inaccuracies associated with KPF during early operations. Long-term SoCal operations will collect upwards of 1000 solar spectra per six-hour day using KPF’s fast readout mode, enabling stellar activity studies at high S/N on our nearest solar-type star.

>.



# Annotations%% begin annotations %%





%% end annotations %%
