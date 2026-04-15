
---
**Title**:: Fundamental physics with ESPRESSO: Towards an accurate wavelength calibration for a precision test of the fine-structure constant 

tags: #Astrophysics-Cosmology-and-Nongalactic-Astrophysics #Astrophysics-Instrumentation-and-Methods-for-Astrophysics #Astrophysics-Astrophysics-of-Galaxies #techniques-spectroscopic #cosmology-observations #instrumentation-spectrographs 

citekey: schmidtFundamentalPhysicsESPRESSO2021

collection:

- Papers to Read

status: unread

dateread:

---
# Notes
## Abstract
- Observations of metal absorption systems in spectra of quasars allow for the constraint of the variation of the fine-structure constant throughout the history of the universe
- Present thorough assessment of ESPRESSO wavelength accuracy
- Identify possible systematics at each step of the wavelength calibration process
- Compare default wavelength solution (based on ThAr arc lamp spectra) and a Fabry Perot interferometer to calibration from a laser frequency comb
## Main Paper
### Introduction
- Much attention has been given to the [[Fine structure constant]] since a change in its value ($\alpha$) would shift the wavelengths of spectral lines and is therefore observable
- Classical approach is to study metal absorption lines in spectra of distant quasars
- The use of a ThAr lamp with the Fabry-Perot interferometer allows for a much more precise calibration especially on small scales than with the arc spectra alone
	- Produces extremely large number of narrow (but marginally resolved) equally spaced lines
- Alternative is the laser frequency comb (LFC)
	- Provides dense train of extremely narrow and equally spaced emission lines
	- Frequencies are directly stabilized against an atomic clock
- **IMPORTANT NOTE** the calibration requirements for tests of the varying fine-structure constant are fundamentally different from those of RV studies
### Basic Data Reduction
- Use custom data reduction software instead of ESPRESSO's DRS
	- DRS is robust general-purpose instrument pipeline and optimized for RV studies in exoplanets which this paper is not bound by the same requirements
	- This paper's code is optimized for accuracy instead of precision
	- Instead of fitting global polynomials (better precision) they use nonparametric techniques for better wavelength accuracy
### Spectral Extraction
- After basic reduction of wavelength calibration frame (described in last section in text) next is spectral extraction
	- The gathering of spectral information from the 2D raw frames and reducing into 1D spectra
- Generally extraction is done independently per order
	- ESPRESSO has 2 fibers with a pupil slicer to get two images for each fiber
	- Results in 4 individual spectra per order
- Extraction makes use of optimal extraction
	- Assumes that there is a unique correspondence between wavelength and pixel position
		- Neglecting the finite extent of the instrumental point-spread function (PSF) in dispersion direction
		- With this distribution of flux on detector becomes a separable function of
			- Spectral energy distribution of the source (SED)
			- Profile of the trace in spatial (cross-dispersion) direction
	- Gives an estimate of the total received flux and therefore spectrophotometric results and minimizes variance of extracted spectrum
	- Since ESPRESSO is fiber-fed echelle spectrograph there is no spatial direction
		- Spectra projected on detectors has no scientific information in cross-dispersion direction
- Extraction process
	- For each detector position $(y|x)$ 
	- Bias and background subtracted raw electron counts $C_{yx}$ are divided by the normalized trace profile $P_{yx}$
	- So for every pixel an independent estimate of total detected number of photons in given detector column
	- Then can average this in cross-dispersion direction
		- Ensuring that pixels in the center of the trace (with more flux) are weighted stronger than pixels in the wings
	- Can get variance of individual pixels as $W_{yx}= \dfrac{P_{yx}^{2}}{\mathrm{var}(C_{yx})}= \dfrac{P_{yx}^{2}}{C_{yx}+BG_{yx}+\mathrm{DARK}_{yx}+\mathrm{RON}_{yx}^2}$
		- $BG_{yx}$ and $DARK_{yx}$ are contribution of scattered light and dark counts
		- $RON_{yx}$ is read-out noise
		- **Complete extraction procedure only governed by trace profile $P_{yx}$**
#### Determining trace profile
- Common to model trace profile with analytic functions like a Gaussian and assume properties will evolve slowly with detector position
- But ESPRESSO the profile is non-Gaussian
- But since fiber fed and extremely stable it is fixed and doesn't change with time
- So can use empirical model of trace profile from master flatfield frame
- To extract trace profile need to know its location
	- Requires initial fit to trace profile which doesn't have to be super accurate
	- So the profile is completely independent of the initial trace center as long as the full extent of the trace is captured within an appropriately chosen window around the fitted trace center
	- Window function of $W_{yx}^{win}=\int_{x_{lo}}^{hi}\Theta(x'-X_{0}(y)+\Delta x^{win})\Theta(-x'+X_{0}(y)+\Delta x^{win})dx'$
		- $x_{lo}$ and $x_{hi}$ lower and upper bounds of the pixel at position y
		- $\Theta(x')$ is the Heaviside step function
		- Size $\Delta x^{win}$ is chosen so that for example $\simeq 95\%$ of the flux is extracted
	- The window function makes extraction formally dpendent on initial determination of the trace center
#### Ambiguity of the trace profile
- Assumptions about trace are only valid as long as the assumed trace profile $P_{yx}$ is correct
- If the assumed profile deviates from the true one then the extracted spectrum becomes imperfect
- Have to continue with classical extraction scheme but aware that it is non-optimal for details
### Wavelength calibration
- After extraction a full ESPRESSO exposure is represented as 340 1D spectra
	- Each spectrum has length of 9232 pixels in Y direction
	- Basic assumption is that these can be directly mapped to wavelengths
- Three types of wavelength calibration frames
	- Exposures of Thorium-Argun hollow cathode lamp
		- Provide absolute wavelength information with the Th I emission lines
		- There are 432 unique Th I lines
		- Some orders are only covered by 2 calibration lines so this is not enough for an accurate and precise wavelength solution
	- Fabry-Perot interferometer complements ThAr
		- Produces dense series of narrow, (nearly) equally spaced and equally bright emissions lines
		- Without stabilization to any reference FP provides no absolute wavelength information
		- Must be characterize in comparison to ThAr frames
		- But then allows for precise and accurate wavelength solution over full wavelength range with ThAr
	- Laser frequency comb provides independent calibration method
		- In principle provides calibration with an accuracy at the $10^{-12}$ level
		- This does not translate to accuracy of the final wavelength solution
		- Allows for an accurate characterization of the instrumental line spread function and spectral resolution
		- But due to technical challenges on ESPRESSO LFC only covers $\approx 57\%$ of wavelength range
		- In addition it has been unreliable
#### Line Fitting
- Flux is extracted as described before and de-blazed
	- De-blazing allows for avoiding biasing of the determined line positions
	- Blaze function is determined by optimal extraction from the master flatfield
- Individual emission lines are then fitted
	- For ThAR 
		- Done with line list and good initial guess of positions
		- Fitted with Gaussian functions plus a constant offset
	- For FP and LFC
		- Start from center of order
		- Line peaks are identified and fitted
		- Fitting done with a Gaussian plus constant background model
		- LFC exhibits significant amount of background light
			- Possible solution would to fit for each line a higher order polynomial in addition to the Gaussian
			- Here they 
				- Construct global background light model for each spectral trace. 
				- The central $25\%$ between two neighboring emission peaks are median combined to form a spline point
				- Spline points are connected by cubic spline interpolation
				- LFC lines are then fitted for a second time
		- LFC lines are also not equal in intensity but modulated by a flux envelope function
			- Decide not to use fitted flux envelope model for normalization because instrumental profile dominates by more than a factor of 10,000
		- Modulation pattern of LFC flux envelop and background light is not stable and changes with time
#### Beat Pattern Noise
- Line fitting described above provides for each trace extracted from the FP or LFC spectra a list of lines with indices $i$ and line positions in pixel coordinates $y_{i}$
	- Also uncertainties, widths, and intensities
- Expect the relation between index $i$ and position $y$ on the detector to be monotonic and smooth
- Testing smoothness
	- Run a kernel smoothing filter over relation $y(i)$
	- Apply filter with a 3rd degree polynomial and a Gaussian kernel
	- Reveals concerning effects
		- Scatter is much larger than photon noise and highly non-Gaussian
		- Smoothing residuals are not the result of random stochastic scatter
		- The residuals exhibit very peculiar, highly correlated pattern indicative of systematic effects
	- Refer to systematics as the beat pattern noise
		- The pattern varies strongly from order-to-order
		- Root cause is not understood in the paper exclude some possible sources
- Not possible to directly check for the presence of the beat pattern noise in the ThAr spectra and the options to mitigate the effect by averaging several lines are extremely limited
- Thus beat pattern noise could induce systematic effects in the ThAr/FP wavelength solution potentially compromising the full wavelength calibration
#### Joint ThAr/FP solution
- Based on the ThAr and FP line positions derive the ThAr/FP wavelength solution
- FP's dense train of lines allow for very precise non-parametric wavelength solution
- First determine wavelengths of individual FP lines: $\lambda_{k}^{FP}=D_{eff}(\lambda) \dfrac{1}{k^{FP}}$
	- $k^{FP}$ is the index of an FP line 
	- $D_{eff}(\lambda)$ is the effective gape size of the Fabry-Perot cavity
		- Has a dependence on wavelength
- There are residual changes in temperature and pressure than can lead to a drift in the FP line pattern
	- Thus characterize the FP interferometer and determine $D_{eff}(\lambda)$ based on reference spectra
	- Do this with the spectra of ThAr lamp
- First: Connect wavelength information from FP and ThAr
	- Assign each ThAr line a non-integer FP line index $i_j^{ThAr}$ 
	- To determine for each ThAr line the effective FP line the pixel positions $y_{i}^{FP}$ and line indices $i^{FP}$ of the FP lines are interpolated using a cubic spline
	- Then evaluate at the pixel positions of the ThAr lines to get effective FP line indices
	- So $\nu_{j}^{ThAr}= \dfrac{c}{D_{eff}}i_{j}^{ThAr}+\nu_{0}^{FP}$
	- Then can fit for effective gap size $D_{eff}$ and offset frequency $\nu_{0}^{FP}$
- Second: combine still independent FP wave solutions of all spectral orders to one common relation
	- Determine average integer-valued index offset between two traces
	- BY applying determined offsets to line indices $i^{FP}$ and $i_{j}^{ThAr}$ all FP (ThAR) lines across all orders are brought to the same scale
	- Ensemble of ThAr lines are fitted again now over the full spectral range to determine global index offset $i_{0}^{FP}$
	- Now FP line indices can be expressed as $k^{FP}=i^{FP}+i_{0}^{FP}$
- Then determine precisely $D_{eff}(\lambda)$
	- Each individual ThAr line can be understood as an independent measurement of the FP effective gap size
	- For interpolation and modeling of FP effective gap size the nonparametric kernel smooth filter from before
	- There is some excess scatter but still the characterization works overall well and can successfully determine $D_{eff}(\lambda)$
- Finally compute wavelengths for every pixel along extracted traces by interpolating between FP lines
	- Done with cubic spine interpolation
#### LFC Solution
- Simpler to get LFC wavelength solution
- Frequencies are given by $\nu_{k}^{LC}=\nu_{0}^{LC}+k^{LC}\times \nu_{FSR}^{LC}$
	- Offset frequency $\nu_{0}^{LC}$ and pulse repetition rate (equivalent to line spacing $\nu_{FSR}^{LC}$) are controlled to reference frequency which is very accurate
- Only the line index $k$ has to be determined
	- Refer to a-priori wavelength solution (here the ThAr/FP solution from before)
- Final LFC wavelength solution can be constructed by simply interpolating between LFC lines using cubic spline
- LFC solution can be considered fully independent and uncorrelated for all pairs of wavelengths separated by more than $\simeq 100 km/s$
### Comparison of wavelength solutions
- Can't check for absolute accuracy but can check for consistency in the wavelength solutions
#### Comparison of ThAr lines to LFC wavelength solution
- LFC wavelength solution is evaluated at the measured pixel position of the ThAr lines and the obtained wavelength compared to the ThAr laboratory data
- Most ThAr Lines measurements obtained from different fibers and slices are not consistent with on another
	- Could be because of errors in laboratory wavelength or line-blending effects
	- Also could be because of beat pattern noise affecting ThAr line positions
- Cause for discrepancy between the two wavelength measurements remains elusive
#### Comparison of ThAr/FP to LFC wavelength solution
- Difference between two solutions shows complex non trivial pattern
- Offset is unsatisfactory but not essential for precision test of fundamental constants
- Apart from mostly minor deviations considering the overall scatter and distortions in ThAr/FP and LFC wavelength solutions the used binning mode has no substantial effect on the calibration
### Discussion
#### Comparison to the ESPRESSO DRS
- Overall similar differences between two wavelength solutions as seen with paper's method of data reduction
	- Shapes of the distortions on the largest scales are similar
	- Magnitude of the peak-to-valley differences between ThAr/Fp and LFC solutions are similar
- Find that the global offsets are substantially different
- 
## Conclusion
- Develop data reduction and calibration software independent of ESPRESSO's to investigate all aspects relevant for the accuracy of the wavelength solution
- Show that the fundamental assumption underlying the utilized flat spectral extraction algorithm is *not fully satisfied* by Espresso
	- Assumption that there is a unique correspondence between wavelength and pixel position
	- Unable to quantify the resulting impact on the extracted spectra
- Careful modeling of the strongly modulated LFC background light is necessary to achieve accurate centroiding of the lines
	- Fabry-Perot interferometer is far less affected since its background light component is substantially less structured
- Discover in positions of FP and LFC lines a form of highly correlated noise causing displacements of individual lines by $\simeq 10ms^{-1}$ 
	- Displacements of consecutive lines compared to smooth wavelength solution tend to have opposite signs 
	- The amplitude of the pattern is strongly modulated along orders
	- Cannot determine origin of this issue could maybe be related to spectral extraction
- Derivation of joint ThAr/FP wavelength solution requires characterization of Fabry-Perot interferometer
	- Use a nonparametric approach based on a purpose-developed kernel smoothing filter
	- Find large residuals in the $D_{eff}(\lambda)$ determination 
	- Cannot be caused by external reasons so related to spectrograph or data processing
- Compare (over limited wavelength range) the ThAr/FP and LSF solutions
	- Find significant discrepancies dominated by complex large-scale distortions
- Despite many systematics and discovered discrepancies the calibration is still excellent
- Find that the uncertainties in the wavelength calibration lead to errors in the fine structure constant of less than $\pm 1.2$ ppm

> [!Cite]

Schmidt, Tobias M., Paolo Molaro, Michael T. Murphy, et al. “Fundamental Physics with ESPRESSO: Towards an Accurate Wavelength Calibration for a Precision Test of the Fine-Structure Constant.” _Astronomy and Astrophysics_ 646 (February 2021): A144. [https://doi.org/10.1051/0004-6361/202039345](https://doi.org/10.1051/0004-6361/202039345).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Schmidt, T]] 
**Author**: [[Files/Authors/Molaro, P]] 
**Author**: [[Files/Authors/Murphy, M]] 
**Author**: [[Files/Authors/Lovis, C]] 
**Author**: [[Files/Authors/Cupani, G]] 
**Author**: [[Files/Authors/Cristiani, S]] 
**Author**: [[Files/Authors/Pepe, F]] 
**Author**: [[Files/Authors/Rebolo, R]] 
**Author**: [[Files/Authors/Santos, N]] 
**Author**: [[Files/Authors/Abreu, M]] 
**Author**: [[Files/Authors/Adibekyan, V]] 
**Author**: [[Files/Authors/Alibert, Y]] 
**Author**: [[Files/Authors/Aliverti, M]] 
**Author**: [[Files/Authors/Allart, R]] 
**Author**: [[Files/Authors/Allende Prieto, C]] 
**Author**: [[Files/Authors/Alves, D]] 
**Author**: [[Files/Authors/Baldini, V]] 
**Author**: [[Files/Authors/Broeg, C]] 
**Author**: [[Files/Authors/Cabral, A]] 
**Author**: [[Files/Authors/Calderone, G]] 
**Author**: [[Files/Authors/Cirami, R]] 
**Author**: [[Files/Authors/Coelho, J]] 
**Author**: [[Files/Authors/Coretti, I]] 
**Author**: [[Files/Authors/D'Odorico, V]] 
**Author**: [[Files/Authors/Di Marcantonio, P]] 
**Author**: [[Files/Authors/Ehrenreich, D]] 
**Author**: [[Files/Authors/Figueira, P]] 
**Author**: [[Files/Authors/Genoni, M]] 
**Author**: [[Files/Authors/Génova Santos, R]] 
**Author**: [[Files/Authors/González Hernández, J]] 
**Author**: [[Files/Authors/Kerber, F]] 
**Author**: [[Files/Authors/Landoni, M]] 
**Author**: [[Files/Authors/Leite, A]] 
**Author**: [[Files/Authors/Lizon, J]] 
**Author**: [[Files/Authors/Lo Curto, G]] 
**Author**: [[Files/Authors/Manescau, A]] 
**Author**: [[Files/Authors/Martins, C]] 
**Author**: [[Files/Authors/Megévand, D]] 
**Author**: [[Files/Authors/Mehner, A]] 
**Author**: [[Files/Authors/Micela, G]] 
**Author**: [[Files/Authors/Modigliani, A]] 
**Author**: [[Files/Authors/Monteiro, M]] 
**Author**: [[Files/Authors/Monteiro, M]] 
**Author**: [[Files/Authors/Mueller, E]] 
**Author**: [[Files/Authors/Nunes, N]] 
**Author**: [[Files/Authors/Oggioni, L]] 
**Author**: [[Files/Authors/Oliveira, A]] 
**Author**: [[Files/Authors/Pariani, G]] 
**Author**: [[Files/Authors/Pasquini, L]] 
**Author**: [[Files/Authors/Redaelli, E]] 
**Author**: [[Files/Authors/Riva, M]] 
**Author**: [[Files/Authors/Santos, P]] 
**Author**: [[Files/Authors/Sosnowska, D]] 
**Author**: [[Files/Authors/Sousa, Sérgio G.]] 
**Author**: [[Files/Authors/Sozzetti, A]] 
**Author**: [[Files/Authors/Suárez Mascareño, A]] 
**Author**: [[Files/Authors/Udry, S]] 
**Author**: [[Files/Authors/Zapatero Osorio, M]] 
**Author**: [[Files/Authors/Zerbi, F]] 


> **Year**: 2021  

> **Citekey**: schmidtFundamentalPhysicsESPRESSO2021 

> **itemType**: journalArticle 

> **Journal**: *Astronomy and Astrophysics* 

> **Volume**: 646  

> **Pages**: A144 

> **DOI**:: 10.1051/0004-6361/202039345   

  
> [!Abstract]

>

> Observations of metal absorption systems in the spectra of distant quasars allow one to constrain a possible variation of the fine-structure constant throughout the history of the Universe. Such a test poses utmost demands on the wavelength accuracy and previous studies were limited by systematics in the spectrograph wavelength calibration. A substantial advance in the field is therefore expected from the new ultra-stable high-resolution spectrograph ESPRESSO, which was recently installed at the VLT. In preparation of the fundamental physics related part of the ESPRESSO GTO program, we present a thorough assessment of the ESPRESSO wavelength accuracy and identify possible systematics at each of the different steps involved in the wavelength calibration process. Most importantly, we compare the default wavelength solution, which is based on the combination of Thorium-Argon arc lamp spectra and a Fabry-Pérot interferometer, to the fully independent calibration obtained from a laser frequency comb. We find wavelength-dependent discrepancies of up to 24 m s-1. This substantially exceeds the photon noise and highlights the presence of different sources of systematics, which we characterize in detail as part of this study. Nevertheless, our study demonstrates the outstanding accuracy of ESPRESSO with respect to previously used spectrographs and we show that constraints of a relative change of the fine-structure constant at the 10-6 level can be obtained with ESPRESSO without being limited by wavelength calibration systematics.

>.



# Annotations%% begin annotations %%





%% end annotations %%
