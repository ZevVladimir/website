
---
**Title**:: An Extreme-precision Radial-velocity Pipeline: First Radial Velocities from EXPRES 

tags: #RV-Measurement #Astrophysics-Solar-and-Stellar-Astrophysics #Astrophysics-Instrumentation-and-Methods-for-Astrophysics 

citekey: petersburgExtremeprecisionRadialvelocityPipeline2020

collection:

- Papers to Read

status: unread

dateread:

---
# Notes
## Abstract
- EXPRES has RV precision of $30\mathrm{cms^{-1}}$
- EXPRES pipline uses new techniques
	- Extended flat fiber for wavelength-dependent quantum efficiency characterization of the CCD
	- Flat-relative optimal extraction algorithm
	- Chromatic barycentric corrections
	- Chromatic calibrations offsets
	- Ultra=precise laser frequency comb for wavelength calibration
- Describe reduction, calibration and RV analysis pipeline
## Main Paper
### Analysis of EXPRES Data
- **Summary of steps**
	1. Start of each calibration epoch several hundred extended flat images are taken used to create a master extended flat-field image
	2. Each night 30 dark and 30 science flat images are taken. Used to reduce/extract science frames taken the same night
	3. Echelleogram orders are traced using the reduced science flats, scattered light model is removed, flat-relative optimal extraction is performed
	4. Wavelength solutions are interpolated for all science frames using bracketed LFC exposures with a nightly Thorium Argon (ThAr) source as a calibration reference
	5. Telluric lines are identified empirically and labeled for later analysis
	6. For exposures marked for RV analysis use either cross-correlation against a line mask or a forward model
#### Reduction
- Reduction refers to the conversion of the 16 independent pixel regions read in analog-to-digital units (ADU) to full 2D frame in units of photoelectrons
- The steps
	1. Subtract bias from constructed from overscan regions (all)
	2. Multiply each amplifier region by corresponding gain coefficient (all)
	3. Median combine calibration frames (dark, science flat, extended flat)
	4. Subtract reduced dark image (science, science flat, extended flat)
	5. Divide by reduced master extended flat (science, science flat)
	6. Approximate noise model using photon (Poisson) and read noise (science, science flat)
	7. Trace the echelle orders (science flat)
	8. Approximate the scattered light using a 2D b-spline model (science, science flat)
##### Overscan
- Each of the CCD amplifier regions have overscans along the serial (horizontal) and parallel (vertical) registers
- Use these regions to approximate the bias of the CCD
- Process
	1. Calculate the mean of the serial overscan region along its horizontal axis
	2. Smooth this mean using a cubic b-spline with knots every ~100 pixels
	3. Correct rows in the parallel overscan region by subtracting the overlapping smoothed serial overscan region
	4. Calculate the mean of the parallel overscan region along its vertical axis
	5. Smooth this mean using a cubic b-spline every ~100 pixels
	6. Construct a bias for each pixel in the amplifier region by summing the corresponding row from the serial overscan and column from the parallel overscan
#### Gain
- Independent amplifier gains for the CCD were determined empirically by matching the edges of neighboring amplifier regions based on stacked bias-subtracted extended flat images
- Match the mean of the empirically determined gain corrections to those given by the manufacturer
	- Found gains from manufacturer were insufficient
#### Master Extended Flat
- To measure the quantum efficiency variations use an "extended flat" fiber
	- Slightly larger than the science fiber
- At least once per epoch the flat fielding LED is injected into this fiber and 100+ images are taken
- Use a median combination to construct master extended flat field image by dividing out a smooth fit to its echellogram
- For each column of each order fit a parametric slit function
	- Use a squared convolution of a rectangle function with a Gaussian function
	- Chosen due to the physical nature of EXPRES and Fourier optics approximations
	- Input is a rectangular function (rectangular fiber) that gets morphed approximated as a Gaussian (as it travels along the optical path of the instrument)
- Smooth best fit values for the parametric slit function with a cubic spline
- The smooth fit yield the profile which is used to divide the original extended flat image to generate the master extended flat-field template
#### Noise Model
- Largest contributors to the noise model for any given pixel
	- Photon noise 
		- Assumed to be Poisson
	- Read noise
		- Calculated empirically for each amplifier
- These are summed in quadrature for each pixel
- For the median-combined science flat frame also sum in quadrature the intrinsic variability in the flat-fielding LED 
### Spectral Extraction
- Refers to the process of converting reduced 2D CCD data into a series of 1D normalized spectra, one for each order of the echelleogram
- Involves
	- Tracing echelle orders
	- Executing optimal extraction
	- Continuum normalizing the resultant spectra
#### Order Tracing
- Orders of the echellogram are traced using the reduced science flat frame
- Process
	1. Orders are detected using a peak-finding algorithm along the mean-combined center three columns
	2. For each order moving from the center-line outward one column at a time, triplets of neighboring columns are mean combined and the centroid is calculated
	3. Right and left ends of each order are determined by setting $S/N>30$ threshold and stopping trace once 50 subsequent columns don't reach this threshold
	4. Centroids are smoothed along each order using a 6th degree polynomial
- Single set of traces is calculated for each night
#### Scattered Light
- Diffuse scattered light that hits the CCD is assumed to be smoothly varying across the detector
- Estimated from the counts in the regions between the orders of the echellogram
- Process
	1. Variance weighted mean and associated uncertainty is calculated for each column of the inter order region
	2. These background approximations are then smoothed with a cubic b-spline
	3. Cosmic rays that could skew this fit are iteratively rejected using a $5\sigma$ outlier cut
	4. 2D scattered light image is generated through quadratic interpolation along each column of the smoothed inter-order backgrounds
	5. Calculated scattered light is subtracted from the associated reduced image 
	6. Done for science flats, stellar frames, and all wavelength calibration frames
#### Optimal Extraction
- Following traces from the order tracing step for each order construct a least-squares estimator for each column
- Rejecting cosmic rays
	- For each column in the order with a pixel that exceeds $8\sigma$ the pixel with the largest residual is rejected
	- Repeat for all $8\sigma$ outliers
	- Then do the same process but for $2\sigma$ outliers that neighbor previously rejected pixels
- Two modes of extracting
	- One keeps the echelle blaze function of each order intact
	- Another intrinsically removes the blaze
- Primarily use the secondary method for extraction of data
### Wavelength Calibration
- Use the LFC as primary calibration source
	- Generates series of spectral lines evenly spaced in frequency
	- $\nu_{n}=\nu_{\mathrm{rep}}\times n+\nu_{\mathrm{offset}}$
	- Repetition rate $\nu_{\mathrm{rep}}$ and offset frequency $\nu_{\mathrm{offset}}$ are referenced against a GPS disciplined quartz oscillator
- LFC suffers from poor throughput in very blue and very red orders
- Use ThAr lamp exposures as a secondary calibration source for wavelength solutions outside of the range of the LFC
- Calibration triplets (3 LFCs) are taken through the science fiber throughout observing at regular intervals
- ThAR wavelength solution is generated form each ThAr exposure by matching lines against a line atlas
- For any LFC exposure, locations of modes are identified by fitting Gaussians to each peak after subtracting the smooth background
- Initial, trial wavelength solution is generated by linearly interpolating the ThAr solutions from the beginning and end of night
	- Used to determine the mode number $n$ corresponding to the frequency of each mode
	- Perform another 2D polynomial fit using ThAr lines as well to constrain behavior of orders inaccessible to the LFC
- For each of the polynomial coefficients describing the wavelength solution
	- Fit a smooth function in time
	- The set of 100 functions are evaluated at the photon-weighted midpoint time of each science exposure 
	- This generates a wavelength solution
	- Use a time-dependent solution to accommodate time-dependent variations in the characteristics of the instrument
- Apply a barycentric correction to the wavelength solution of each stellar observation
	- $\lambda_{\mathrm{\bar{y}}}=\lambda_{\mathrm{lab}}^{\mathrm{(vac)}}(1+z_{b}(\lambda_{\mathrm{lab}}^{\mathrm{(air)}}))$
### Radial-velocity Solutions
- Use two techniques
	- [[Cross-Correlation Function]] method determines a rough estimate of the absolute RV for each observation
	- Forward model based on a morphed NSO (national solar observatory) solar spectrum obtains a more precise relative RV curve
#### Cross-correlation
- Estimates absolute RV to several tens of $\mathrm{cm \;s^{-1}}$
- Constructed from input spectrum $f(\lambda)$ and [[Spectral-type linelist]] $\{\lambda_{i}(0)\}$
	- $\lambda_{i}(\nu)=\lambda_{i}(0)\sqrt{ \dfrac{c+v}{c-v} }$ redshifting the wavelength of each line in the linelist
- Then compute CCF: $\mathrm{CCF}(\nu)=\int d\lambda f(\lambda)\sum_{i}c_{i}w(\dfrac{\lambda-\lambda_{i}(\nu)}{h_{i}})$
	- $w$ is an arbitrary window function approximating a Dirac $\delta$ function 
	- $\lambda$ is with respect to the barycentric-corrected wavelength solution above
	- Compute for each echelle order
	- CCFs for all relevant orders are co-added before a velocity model is fitted
- An appropriate functional model is fitted against the co-added values of the CCF
	- Obtain velocities and formal errors
	- Also position parameter and posterior uncertainties
	- Also can get quantities like rotational broadening width and [[Bisector]] inverse slope
#### Forward Modeling
- Forward modeling from empirical stellar spectral templates produces velocities with less statistical scatter than the CCF method
- Process
	1. Construct a spectral template for each stellar target
		- Ideally have very high S/N and good spectral match to the program stars
		- Prefer spectra with low barycentric velocities
	2. Telluric contamination is modeled in each spectra and divided out
	3. Set of spectra are co-added
		- However this does not provide enough S/N for a robust template
	4. Morph the NSO solar spectrum with native S/N~10,000 to match the co-added, telluric-cleaned spectra
		- Process to do this is described in text
#### Further Analysis
- Are able to characterize stellar activity and planetary atmospheric absorption lines
### Discussion
#### Formal versus True Velocity Errors
- Errors from CCF
	- Do not account for effects like wavelength calibration error or time estimation error
	- Reflect velocity estimation error due to photon noise
- Formal velocity errors from forward model
	- Include some information about relative uncertainty in certain regions of the detector
	- Contain more scatter
- The single observation error of EXPRES is dominated by apparent photon noise
## Conclusion
- Determined photon-noise-limited RV errors to be $\sim 0.3 \mathrm{m\;s^{-1}}$ for an observation of S/N=250
- RV analysis pipeline does not fully address
	- Photospheric velocity sources
	- Telluric contamination
	- Longer-term instrumental errors
- Experimenting with future wavelength solution #future-work 
	- Hierarchical and non-parametric
	- [[zhaoMachineLearningExtreme2021]]

> [!Cite]

Petersburg, Ryan R., J. M. Joel Ong, Lily L. Zhao, et al. “An Extreme-Precision Radial-Velocity Pipeline: First Radial Velocities from EXPRES.” _The Astronomical Journal_ 159, no. 5 (2020): 187. [https://doi.org/10.3847/1538-3881/ab7e31](https://doi.org/10.3847/1538-3881/ab7e31).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Petersburg, R]] 
**Author**: [[Files/Authors/Joel Ong, J. M.]] 
**Author**: [[Files/Authors/Zhao, L]] 
**Author**: [[Files/Authors/Blackman, R]] 
**Author**: [[Files/Authors/Brewer, J]] 
**Author**: [[Files/Authors/Buchhave, L]] 
**Author**: [[Files/Authors/Cabot, S]] 
**Author**: [[Files/Authors/Davis, A]] 
**Author**: [[Files/Authors/Jurgenson, C]] 
**Author**: [[Files/Authors/Leet, C]] 
**Author**: [[Files/Authors/McCracken, T]] 
**Author**: [[Files/Authors/Sawyer, D]] 
**Author**: [[Files/Authors/Sharov, M]] 
**Author**: [[Files/Authors/Tronsgaard, R]] 
**Author**: [[Files/Authors/Szymkowiak, A]] 
**Author**: [[Files/Authors/Fischer, D]] 


> **Year**: 2020  

> **Citekey**: petersburgExtremeprecisionRadialvelocityPipeline2020 

> **itemType**: journalArticle 

> **Journal**: *The Astronomical Journal* 

> **Volume**: 159 

> **Issue**: 5  

> **Pages**: 187 

> **DOI**:: 10.3847/1538-3881/ab7e31   

  
> [!Abstract]

>

> The EXtreme-PREcision Spectrograph (EXPRES) is an environmentally stabilized, fiber-fed, R = 137,500, optical spectrograph. It was recently commissioned at the 4.3 m Lowell Discovery Telescope near Flagstaff, Arizona. The spectrograph was designed with a target radial-velocity (RV) precision of 30 cm s−1. In addition to instrumental innovations, the EXPRES pipeline, presented here, is the first on-sky, optical, fiber-fed spectrograph to employ many novel techniques—including an “extended flat” fiber used for wavelength-dependent quantum efficiency characterization of the CCD, a flat-relative optimal extraction algorithm, chromatic barycentric corrections, chromatic calibration offsets, and an ultra-precise laser frequency comb for wavelength calibration. We describe the reduction, calibration, and RV analysis pipeline used for EXPRES and present an example of our current sub-meter-per-second RV measurement precision, which reaches a formal, single-measurement error of 0.3 m s−1 for an observation with a per-pixel signal-to-noise ratio of 250. These velocities yield an orbital solution on the known exoplanet host 51 Peg that matches literature values with a residual rms of 0.895 m s−1.

>.



# Annotations%% begin annotations %%





%% end annotations %%
