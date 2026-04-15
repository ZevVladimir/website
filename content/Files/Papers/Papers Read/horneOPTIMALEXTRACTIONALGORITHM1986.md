
---
**Title**:: AN OPTIMAL EXTRACTION ALGORITHM FOR CCD SPECTROSCOPY. 

tags: #MAROON-X #RV-analysis #techniques-spectroscopic 

citekey: horneOPTIMALEXTRACTIONALGORITHM1986

collection:

- Papers to Read

status: unread

dateread:

---
# Notes
## Abstract
- Optimal spectrum extraction delivers maximum possible SNR and preserves spectrophotometric accuracy
- Offers 70% gain in effective exposure time in comparison with conventional extraction procedures
## Main Paper
### Introduction
- Analyzing CCD data
	- 2D, high quantum efficiency, linearity, large dynamic range
	- Can accurately subtract large sky backgrounds from spectra of faint objects
- Standard spectrum extraction
	- Sum sky-subtracted image data over range of pixels enclosing object spectra in spatial dimension
	- Accuracy achieved with sufficiently wide band of pixels
	- Information is wasted because noisy pixels containing a small fraction of the light are still included
- Optimal extraction
	- Applies nonuniform pixel weights in extraction sum
		- Reduces statistical noise in extracted spectrum
		- Preserves photometric accuracy
	- Algorithm can eliminate cosmic ray hits
		- Detects distortion they produce in spatial profile
			- Depends on assumption spatial profile varies slowly with wavelength
			- Ideal for unresolved point sources
		- Areas that benefit significantly
			- Faint-object spectroscopy
			- Time-resolved spectroscopy of rapid variables
### The Spectrum Extraction Algorithm
- **Image Processing and Standard Spectrum Extraction**
	- Raw spectrum image $C_{x\lambda}$ is full of data numbers proportional to the number of photons dected during exposure of each pixel
		- $x$ and $\lambda$ refer to pixel coordinates in the spatial and spectral directions
		- True wavelength and spatial positions are approximately constant along pixel rows/columns
			- Distortions may be removed with resampling image
			- This however
				- Consumes computer time
				- Degrades resolution
				- Introduces correlations between errors in adjacent pixels
	- Produce reduced image
		- Pixel-by-pixel subtraction $D_{x\lambda}=\dfrac{C_{x\lambda}-B_{x\lambda}}{F_{x\lambda}}$
			- $B_{x\lambda}$ is the bias image
			- $F_{x\lambda}$ is the balance factor image
		- Do not try to correct/repair bad data and instead just reject it
		- Subtracting bias image eliminates signal present even without light
		- Division by balance factor image 
			- Compensates for pixel-to-pixel variations in detector sensitivity
			- Removes long-scale response variations in the spatial direction
			- Constructed by exposing CCD to spatially-uniform continuum source
			- These images are de-biased and added together 
			- Then divided by low-order polynomial in $\lambda$ fitted to flat-field data summed in spatial direction
				- Produces image of balance factors with values of order unity
			- Division by balance factors preserves relationship between data numbers and detected photons
				- Allows for direct calculation of Poisson variance
	- Sky subtraction
		- Sky background $S$ is derived from reduced image $D$
		- Smoothly interpolate sky data on each side of the object spectrum 
		- Perform weighted least-squares polynomial fit to sky data at each $\lambda$
			- Weight sky pixels inversely proportional to their variance
	- Object spectrum is extracted by summing along spatial dimension
		- $f_{\lambda}^{std}=\sum_{x=x_{1}}^{x_{2}}(D_{x\lambda}-S_{x\lambda})$
		- $\mathrm{var}\left[ f_{\lambda}^{\mathrm{std}} \right]=\sum_{x=x_{1}}^{x_{2}}V_{x\lambda}$
		- $V_{x\lambda}$ is the statistical variances of the data values $D_{x\lambda}$
		- $x_{1}$ and $x_{2}$ are the object limits which delimit the spatial range of pixels needed to enclose the object spectrum
	- Optimal extraction algorithm produces a spectrum estimate that is not as sensitive to the exact choice of object limits
		- Should always choose widely-spaced object limits
- **Optimization**
	- Now discuss *linear* spectrum estimators: $d_{\lambda}^{\mathrm{linear}}=\sum_{x}w_{x\lambda}(D_{x\lambda}-S_{x\lambda})$
		- What was discussed before is the case of $w_{x\lambda}=1$ between $x_{1}$ and $x_{2}$ and 0 otherwise
		- Want to choose these extraction weights optimally
	- The probability, $P_{x\lambda}$ that a detected photon with wavelength $\lambda$ is registered at pixel $x$ rather than at some other position is
		- Non negative
		- Normalized at each $\lambda$: $\sum_{x}P_{x\lambda}=1$
	- Knowledge of the spatial distribution of star light lets you identify and limit further attention to extraction weights that give unbiased estimates of objet spectrum
	- Any spectrum that is both linear and unbiased can be expressed: $f_{\lambda}^{\mathrm{unbiased}}= \dfrac{\sum_{x}W_{x\lambda}(D_{x\lambda}-S_{x\lambda})/P_{x\lambda}}{\Sigma_{x}W_{x\lambda}}$
	- Determine the weights $W_{x\lambda}$ to minimize variance in $f_{\lambda}^{\mathrm{unbiased}}$
		- Choose weights inversely proportional to variance of individual random variables
		- $\dfrac{1}{W_{x\lambda}}=\mathrm{var}\left[ \dfrac{D_{x\lambda}-S_{x\lambda}}{P_{x\lambda}} \right]=\dfrac{V_{x\lambda}}{P_{x\lambda}^{2}}$
	- So the optimal spectrum estimate is $f_{\lambda}^{opt}=\dfrac{\left( \sum_{x}P_{x\lambda}(D_{x\lambda}S_{x\lambda})/V_{x\lambda} \right)}{{\sum_{x}P_{x\lambda}^{2}/V_{x\lambda}}}$
		- $\mathrm{var}\left[ f_{\lambda}^{\mathrm{opt}} \right]=\dfrac{1}{\sum_{x}P_{x\lambda}^{2}/V_{x\lambda}}$
- **The Variance Image**
	- Important part is the image $V$ which contains the estimates of the variance of the spectrum image $D$
	- $V_{x\lambda}=V_{0}+|D_{x\lambda}|/Q$
		- $\sqrt{ V_{0} }$ is the rms readout noise
		- $Q$ is the effective number of photons per data number
		- Both parameters are determined empirically from fluctuations as a function of data number in darks and flats
	- After spectrum estimate $f$ have normalized spatial profile image $P$ and sky image $S$ to correct: $V_{x\lambda}=V_{0}+|f_{\lambda}P_{x\lambda}+S_{x\lambda}|/Q$
- **Spatial Profile Image**
	- Image $P$ of normalized spatial profiles is the most crucial component
	- Extract spectrum will only be effectively unbiased if relative error in $P_{x\lambda}$ is much smaller than relative statistical uncertainty in $(D_{x\lambda}-S_{x\lambda})$
	- Constructing $P$
		- Form initial estimate: $P_{x\lambda}\approx\dfrac{(D_{x\lambda}-S_{x\lambda})}{\sum _{x}(D_{x\lambda}-S_{x\lambda})}=\dfrac{D_{x\lambda}-S_{x\lambda}}{f_{\lambda}^{\mathrm{std}}}$
			- Satisfies normalization 
			- Too noisy 
			- Can have negative values
		- Smooth in the wavelength direction
		- Can potentially assume the spatial profile has an analytical form like a Gaussian
			- But general approach makes no assumption since at higher SNR there an be noticeable differences
		- Wild pixel values from cosmic rays can't be allowed to affect the fitted polynomials
			- Use iterative $\sigma$-clipping
- **Elimination of Cosmic Rays**
	- Cosmic rays typically span a few pixels in each direction
		- Depends on energy of ray and so widely varies
	- Accurate spatial profile at each wavelength makes it possible to detect cosmic-ray hits that land on the object spectrum
	- Cosmic rays can be eliminated automatically by a rejection cycle like used for fitting polynomials
		- Each wavelength $\lambda$, image data $D_{x\lambda}$ and the corresponding variances $V_{x\lambda}$ are compared to predicted data $f_{\lambda}P_{x\lambda}+S_{x\lambda}$
		- Pixel with largest value of $(D_{x\lambda}-f_{\lambda}P_{x\lambda}-S_{\lambda})^{2}/V_{x\lambda}$ is rejected if value exceeds threshold
## Conclusion
- Described optimal spectrum extraction and illustrated performance
- Main advantage compared to standard extraction is improved SNR
	- Greatest gains in regime of background-limited spectroscopy
	- SNR improvement not at the expense of spectrophotometric capability
	- Suitable to both high and low SNR spectra
- Can detect and eliminate cosmic-ray hits on the object spectrum
- Extracted spectra are not sensitive to choice of object limits
- Main limitation is requirement that the spatial profile of the object be a *smooth* function of wavelength
	- So not appropriate if spatial resolution required or if spatial profile of the target varies rapidly with wavelength
- 
## Questions
- 

> [!Cite]

Horne, K. “AN OPTIMAL EXTRACTION ALGORITHM FOR CCD SPECTROSCOPY.” _Publications of the Astronomical Society of the Pacific_ 98, no. 604 (1986): 609. [https://doi.org/10.1086/131801](https://doi.org/10.1086/131801).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Horne, K]] 


> **Year**: 1986  

> **Citekey**: horneOPTIMALEXTRACTIONALGORITHM1986 

> **itemType**: journalArticle 

> **Journal**: *Publications of the Astronomical Society of the Pacific* 

> **Volume**: 98 

> **Issue**: 604  

> **Pages**: 609 

> **DOI**:: 10.1086/131801   

  
> [!Abstract]

>

> AN OPTIMAL EXTRACTION ALGORITHM FOR CCD SPECTROSCOPY., Horne, K.

>.



# Annotations%% begin annotations %%





%% end annotations %%
