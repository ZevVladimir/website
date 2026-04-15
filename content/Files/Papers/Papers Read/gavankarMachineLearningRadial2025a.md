
---
Title: Machine Learning for Radial Velocity Analysis I: Vision Transformers as a Robust Alternative for Detecting Planetary Candidates

tags: #Astrophysics-Instrumentation-and-Methods-for-Astrophysics #Astrophysics-Solar-and-Stellar-Astrophysics #Astrophysics-Earth-and-Planetary-Astrophysics #RV-analysis  #paper

citekey: gavankarMachineLearningRadial2025a

collection:

- Papers to Read

status: unread

dateread:

---
# Notes
## Abstract
- Use a ML framework based on a Transformer architecture
- To detect presence and likely period of planetary signals even with stellar activity
- Model is trained to
	- Classify whether a planetary signal exists
	- To assign the signal to one of several discrete period and amplitude bins
## Main Paper
### Introduction
- Classical ways of dealing with stellar activity
	- Optimize exposure times based on stellar parameters
	- Time correlated modeling with [[Gaussian Process Model|Gaussian process]]es
	- Activity indicators can track activity induced RV shifts
	- Principal component analysis
	- Autocorrelation function of the [[Cross-Correlation Function|CCF]]
		- Remains invariant under Keplerian shifts (planets)
		- But variations in this are sensitive to stellar jitter
	- Combine spectroscopic and photometric observations
		- $FF'$ from [[aigrainSimpleMethodEstimate2012]]
		- [[rajpaulGaussianProcessFramework2015a]]
	- Often leave valuable spectral information unutilized
- Use Transformer-based NNs instead
	- Classify whether a planetary signal is present in the time-series
	- Predict most likely period bin when such a signal exists
		- A regression based approach was found to be unstable particularly at low SNR
### Discussion
- ML can outperform periodogram approaches 
	- Primarily for $\mathrm{sub-ms^{-1}}$ semi-amplitude signals in solar RV data
#### Aperiodicity problem
- Standard ML models like CNNs and LSTMs peform well when using regularly sampled data
- This is particularly a problem for astrophysical data which is irregularly sampled
- Vision transformers (ViT) can handle non-uniformly sampled data
#### Limitations
- Scarcity of large uniformly processed datasets
- Only the Sun has an extensive RV dataset
	- Requires transfer learning  to go to other stars
- Current model architecture requires a fixed number of observations for each training instance
## Conclusion
- ML is used to maximize the use of available spectral data to identify and isolate periodic signals
- ML can enhance the extraction of planetary signals from RV data particularly for low semi-amplitude regime
## Questions
- 

> [!Cite]

Gavankar, Anoop, Tanish Mittal, Joe Ninan, and Shravan Hanasoge. “Machine Learning for Radial Velocity Analysis I: Vision Transformers as a Robust Alternative for Detecting Planetary Candidates.” arXiv:2510.07034. Preprint, arXiv, October 8, 2025. [https://doi.org/10.48550/arXiv.2510.07034](https://doi.org/10.48550/arXiv.2510.07034).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Gavankar, A]] 
**Author**: [[Files/Authors/Mittal, T]] 
**Author**: [[Files/Authors/Ninan, J]] 
**Author**: [[Files/Authors/Hanasoge, S]] 


> **Year**: 2025  

> **Citekey**: gavankarMachineLearningRadial2025a 

> **itemType**: preprint 

> **DOI**:: 10.48550/arXiv.2510.07034   

  
> [!Abstract]

>

> Extreme precision radial velocity (EPRV) surveys usually require extensive observational baselines to confirm planetary candidates, making them resource-intensive. Traditionally, periodograms are used to identify promising candidate signals before further observational investment, but their effectiveness is often limited for low-amplitude signals due to stellar jitter. In this work, we develop a machine learning (ML) framework based on a Transformer architecture that aims to detect the presence and likely period of planetary signals in time-series spectra, even in the presence of stellar activity. The model is trained to classify whether a planetary signal exists and assign it to one of several discrete period and amplitude bins. Injection-recovery tests on randomly selected 100 epoch observation subsets from NEID solar data (2020-2022 period) show that for low-amplitude systems ($<$1 ms$^{-1}$), our model improves planetary candidate identification by a factor of two compared to the traditional Lomb-Scargle periodogram. Our ML model is built on a Vision Transformer (ViT) architecture that processes reduced representations of solar spectrum observations to predict the period and semi-amplitude of planetary signal candidates. By analyzing multi-epoch spectra, the model reliably detects planetary signals with semi-amplitudes as low as 65 cms$^{-1}$. Even under real solar noise and irregular sampling, it identifies signals down to 35 cms$^{-1}$. Comparisons with the Lomb-Scargle periodogram demonstrate a significant improvement in detecting low-amplitude planetary candidates, particularly for longer orbital periods. These results underscore the potential of machine learning to identify planetary candidates early in EPRV surveys, even from limited observational counts.

>.



# Annotations%% begin annotations %%





%% end annotations %%
