
---
tags: #Astrophysics-Earth-and-Planetary-Astrophysics #Astrophysics-Instrumentation-and-Methods-for-Astrophysics #GP-Model #RV-Measurement #paper 

citekey: liangAESTRADeepLearning2023

collection:

- MAROON-X/To Read

status: read

dateread:

---
# Notes

## Abstract
- AESTRA is a deep learning method for precise radial velocity measurements
- Made of
	- Spectrum auto-encoder: learns to create realistic models of the star's rest frame spectrum
	- Radial-velocity estimator: learns to identify true Doppler shifts in the presence of spurious shifts due to line profile variations
- Self supervised and requires no ground truth
- Can detect signals as low as 0.1m/s in the presence of 3m/s activity induced noise and 0.3 m/s photon noise per spectrum
## Paper
- Due to the variability of the spectrum of a star there is a radial-velocity jitter
	- From magnetic activity, granulation, acoustic oscillations
	- Have varying amplitudes and timescales
- Traditional techniques to extract RVs
	- Cross correlation with spectral template
		- Decorrelate the apparent RV time series with various activity indices derived from the spectra
	- Model the RV time series as a [[Gaussian Process Model|GP Model]]
		- Model represents the effects of the activity
	- Perform shift-invariant operations on the [[Cross-Correlation Function|CCF]] to isolate activity-induced signals
	- Performing full spectral modeling to address contamination from variability in telluric absorption lines
	- Supervised ML models have been used to recognize spurious RV signals associated with changes in the shape of the [[Cross-Correlation Function|CCF]]
- With recent observations now have hundreds and potentially thousands in the coming years of RV measurements
- AESTRA is designed to disentangle pure doppler shifts from apparent Doppler shifts due to spectral perturbations *without* any prior knowledge of the star's spectrum or orbital motion
	- Uses a NN for radial velocity estimation
	- Spectrum auto-encoder (spender) for activity modeling
		- Scans over wavelength range compressing information in each spectrum into a small number of parameters (ideally independent of z)
		- Has a decoder of transforming the parameters back into an accurate reconstruction of the spectrum in the rest frame (no z)
- Architecture of the model
	- [[AESTRA_architecture.png]]
	- Input
		- 100s+ normalized 1D spectra of a single star
			- Over a range of activity states
			- Different phases of orbital motion of any planets
		- Do not model Earth's barycentric motion (assume corrections have been applied before)
		- Establish template spectrum that captures the star's average spectral features
		- Subtract this from each observed spectrum to create residual spectrum
			- Isolates the spectral time variations
			- Reduces dynamic range of input
	- Input is processed in parallel by
		- NN RV estimator
			- Learns the effect of the Doppler shift
				- Introduces artificial Doppler shifts into the spectra
				- Optimizes the RV estimator to recover those shifts
				- Also contains filters (convolutional kernels) that sweep the residual spectrum
					- These ideally are tuned to recognize patters that result from Doppler shifts while ignoring photon noise
			- Pure stretching of wavelength scale (ignoring other details of spectrum)
			- Requires no prior knowledge of the star
			- When measuring RV differences between spectra of different activity states is *subject to biases* due to spectral distortions that mimic Doppler shifts
				- Rely on the assumption that the star's orbital motion is uncorrelated with its intrinsic variability during the observation period
				- With this can mitigate activity-induced RV bias by decorrelating the RV estimator output against activity indicators
		- Spectrum auto-encoder
			- Generates the activity indicators through spectrum modeling
			- Transforms stellar spectra into small number of latent parameters (independent of Doppler shift) that summarize spectral perturbations from stellar activity
			- Decoder transforms latent parameters into rest-frame stellar spectrum
			- Can regard components of the latent vector as generalizations of traditional activity indicators (line widths or bisector spans)
	- Loss function
		- Quantifies the agreement between the input and reconstructed spectra averaged over batch of N spectra and each dimension L
		- Use [[Data Augmentation]] to artificially apply a Doppler shift while maintaining spectral shape
		- Implement novel loss term that 
			- $L_{RV}=\dfrac{1}{N}\sum_{i}^N[\dfrac{1}{\sigma^2}_{v}(v_{aug,i}-v_{obs,i}-v_{off\{ ,i \}})^2]$
			-  Where $v_{obs,i}=h_{\psi}(\mathbf{r}_{obs,i})$ and $v_{aug,i}=h_{\psi}(\mathbf{r}_{aug,i})$
				- Where $h_{\psi}$ is the RV estimation network (modified version of the encoder network)
		- Because the RV estimator is trained on augmented spectra with artificial Doppler shifts there is no need for training, validation, and test sets
			- Every training epoch has a new batch of training data
		- Add a Ridge regularization lost to resolve degeneracy between $\mathbf{y}_{act}$ and $\mathbf{b}_{rest}$
		- Two phase training strategy
			- 1st phase
				- Train RV estimator independently until $L_{RV}$ approached 1 leaving encoder-decoder and rest-frame unchanged
			- 2nd phase
				- Jointly optimized all components using combined loss function
					- $L_{total}=L_{fid}+L_{RV}+L_{reg}$
				- Optimizes 
					- High reconstruction quality
					- Consistent RV estimation
					- Shift invariant encoding
	- De-trending RVs with latent vectors
		- There is a mild correlation with the encoded RVs and their latent positions
			- Causal correlations are unlikely
			- But Doppler shifts and stellar perturbations could still be correlated because of similarities in timescales
				- Ex: planet's orbital period is comparable to the star's rotation period or the period of a long-term magnetic activity cycle
				- To combat this collect data in large quantities and over all relevant timescales
			- Another possible reason: RV estimator determines accurate RV offsets from pure spectral stretching leaving RV zero-points unspecified
				- Encoded RVs may be affected by stellar activity and thus contain activity-dependent RV zero points that bias RV estimates
				- So look to determine spurious velocity zero points with
					- Ansatz $v_{encode,i}=v_{true}+v_{0}(\mathbf{s}_{i})+noise$
						- Where $\mathbf{s}$ is the latent vector
					- Baseline: $v_{0}(\mathbf{s}_{i})\approx \langle v \rangle_{i}=\dfrac{\sum_{j \neq i}w_{ij}v_{encode,j}}{\sum_{j\neq i}w_{ij}}$
						- Where $w_{ij}=\exp[- \dfrac{(|s_{i}-s_{j}|)^2}{2\sigma _{R}^2}]$ is the weight of the encoded RV $v_{encode,j}$ and $\sigma_{R}$ is the characteristic radius of the latent distribution
					- Estimate of true Doppler RVs: $v_{correct,i}=v_{encode,i}-\langle v \rangle_{i}$
- AESTRA on simulated data
	- Synthetic spectra
		- Create synthetic spectrum
			- Quiet spectrum $\mathbf{y}_{quiet}$ 
		- Spectral deformations from SOAP (the code they use) only calculates the impact of spots and [[Solar Plage|Solar Plages]] on the [[Cross-Correlation Function|CCF]]  need to perturb the spectrum with [[Cross-Correlation Function|CCF]]s 
			- $CCF_{quiet}$ is the quiet CCF of a Sun like star evaluated at velocity offsets $\Delta \mathbf{v}_{\mathbb{C}F}$ and $CCF_{active}$ is the CCF affected by activity
			- Using $CCF_{active}$ perturb the simulated spectrum's absorption lines
		- Define an activity function $f_{act}$ to measure the activity induced perturbation as a function of velocity offset
		- $y_{intrinsic}=y_{quiet}\odot \Pi_k^K f_{act}(\dfrac{\lambda_{obs}-\lambda}{\lambda_{k}})$
	- Defining RV estimates
		- Apparent RV $v_{apparent}$
			- Computed by finding the Doppler shift that brings the quiet baseline spectrum and observed spectrum into best possible agreement
			- Affected by stellar activity
			- Insight into RV noise level due to line distortions
		- De-trended RV using traditional activity indicators $v_{traditional}$
			- RVs are corrected to control for the observed variation in activity indicators derived from the spectra
			- Activity indicators
				- Bisector span
				- FWHM of the CCF
				- Depth of the CCF 
			- Multilinear regression is performed between the apparent velocity and the time series of the 3 activity indicators and the results are used to subtract the estimated contributions to the RV variations due to changes in the activity indicators
		- Corrected RV $v_{correct}$
			- Derived from AESTRA by de-trending the output of the RV  estimator against components of the latent vector
			- Isolates true Doppler RVs from activity induced RV offsets
		- Reference RV $v_{ref}$
			- Benchmark
			- Fitting noise free underlying rest frame spectrum to observed spectrum
			- Best possible RV precision in the absence of stellar activity
		- Compare $v_{correct}$ to $v_{traditional}$ and $v_{ref}$ effective model should approach values of $v_{ref}$ and advantageous model should reduce RV scatter below scatter of $v_{traditional}$
	- Case I
		- Consider random independently assigned spectral perturbations
		- RV precision was mainly limited by the decorrelation process
		- Ran MCM sampling to retrieve orbital parameters from $v_{correct}$
		- For small sample sizes primary source of RV uncertainty in $v_{correct}$ is from the decorrelation process that relies on the Gaussian smoothing of the latent space to estimate the activity dependent RV zero-points
	- Case II
		- Simulations where stellar activity exhibited realistic temporal correlations
		- Both AESTRA and traditional analysis identified signficant peaks at the true planetary periods
		- But traditional analysis gave an overestimate of the true RV semi-amplitude while AESTRA gave the corret estimate
- Conclusions
	- Looks promising on synthetic data
	- Even performed well with datasets as small as 100 spectra
	- Recovered planetary signals in a series of simulated spectra dominated by time-dependent stellar activity even without utilizing time domain information
	- Future work
		- Apply AESTRA to real data
		- Consider the times of observation of a spectra (in general take time-domain information into account)
		- Including a continuous latent space time-series model 
		- Adding physically motivated constraints on the time scales and other relationships associated with different types of activity

> [!Cite]

Liang, Yan, Joshua N. Winn, and Peter Melchior. “AESTRA: Deep Learning for Precise Radial Velocity Estimation in the Presence of Stellar Activity.” arXiv:2311.18326. Preprint, arXiv, November 30, 2023. [https://doi.org/10.48550/arXiv.2311.18326](https://doi.org/10.48550/arXiv.2311.18326).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Liang, Y]] 
**Author**: [[Files/Authors/Winn, J]] 
**Author**: [[Files/Authors/Melchior, P]] 


> **Year**: 2023  

> **Citekey**: liangAESTRADeepLearning2023 

> **itemType**: preprint 

> **DOI**:: 10.48550/arXiv.2311.18326   

  
> [!Abstract]

>

> Stellar activity interferes with precise radial velocity measurements and limits our ability to detect and characterize planets, particularly Earth-like planets. We introduce \aestra (Auto-Encoding STellar Radial-velocity and Activity), a deep learning method for precise radial velocity measurements. It combines a spectrum auto-encoder, which learns to create realistic models of the star's rest-frame spectrum, and a radial-velocity estimator, which learns to identify true Doppler shifts in the presence of spurious shifts due to line-profile variations. Being self-supervised, \aestra does not need "ground truth" radial velocities for training, making it applicable to exoplanet host stars for which the truth is unknown. In tests involving 1,000 simulated spectra, \aestra can detect planetary signals as low as 0.1 m/s even in the presence of 3 m/s of activity-induced noise and 0.3 m/s of photon noise per spectrum.

>.



# Annotations%% begin annotations %%





%% end annotations %%
