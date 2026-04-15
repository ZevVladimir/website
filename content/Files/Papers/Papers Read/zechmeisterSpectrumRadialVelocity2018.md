
---

tags: #Astrophysics-Instrumentation-and-Methods-for-Astrophysics #Astrophysics-Solar-and-Stellar-Astrophysics #Astrophysics-Earth-and-Planetary-Astrophysics #paper  #RV-analysis 

citekey: zechmeisterSpectrumRadialVelocity2018

collection:

- MAROON-X/To Read

status: read

dateread:
---
# Notes

- Develop least squares fitting algorithms to derive the RVs and additional spectral diagnostics using SERVAL
- Use [[Chromatic Index]] and [[Differential Line Width]] to identify RV variations induced by stellar activity (particularly the chromatic index which is found to be an excellent tool for this)
- Algorithms to compute RVs
	- Cross-correlation with binary masks
	- Least-squares fit with coadded templates
	- Least squares fitting with modelling of line spread functions
	- Gaussian processes
- SERVAL Overview
	- Uses forward modelling in the pixel space to properly weight pixel errors
	- Reconstruct stellar templates from the observations themselves
	- Based on least squares fitting
		- More precises than cross correlation function (CCF) a RV precision depends on SNR of the data and the match of the model to the data
- SERVAL general concept
	- Decompose simultaneously all observations into
		- High SNR template $F(\lambda)$
		- RV shifts $v_{n}$ for observation number n
		- #Question Multiplicative background polynomials $p(\lambda)$ to account for flux variations
			- Accounts for differing counts in different observations
			- Shouldn't be very large
	- Forward model is then: $f(\lambda)=p(\lambda)\cdot F(\lambda'(\lambda,v))$ 
		- Doppler equation is $\lambda'(\lambda,v)=\dfrac{\lambda (1+z_{B})}{\left( 1+\frac{v}{c} \right)}$ 
			- $z_{B}$ is the total redshift due to barycentric motion of the observer
			- $v$ is the radial velocity 
			- $\lambda '$ is the shifted wavelength $\lambda$ 
	- There are N observations taken at times $t_{n}$ 
		- Each has a flux measurement $f_{n,i}$ at pixel i with calibrated wavelengths $\lambda_{n,i}$ and flux error estimates $\epsilon_{n,i}$ 
		- For cross dispersed echelle spectrographs this is carried out on several echelle orders adding another index $f_{n,o,i}$
	- Weighted sum of residuals
		- $\chi^2=\sum_{n,i} \dfrac{[f_{n,i}-f(\lambda_{n,i})]^2}{\epsilon^2_{n,i}} = \sum_{n,i}w_{n,i}[f_{n,i}-p(\lambda_{n,i},a)\cdot F(\lambda'(\lambda_{n,i},v_{n}),b)]^2$
		- The weights are defined as $w_{n,i}=\dfrac{1}{\epsilon_{n,i}^2}$
		- The polynomial coefficients a and b describe the template (I believe the fitting for the flux variations)
	- Since a simultaneous approach isn't feasible due to having a large number of data from N spectra $\times$ O orders $\times$ K pixels and then additional fitting parameters go sequentially and iteratively
	- Approach
		- The observed spectrum with the highest SNR is used as a reference frame that all other observations are shifted to 
		- Then all spectrum are coadded to a high SNR template F
		- Using the template RVs are re-computed while fitting the background polynomials
- Model Details
	- Given a template $F(\lambda')$ of an emitting source
		- A spectral feature at a reference wavelength $\lambda'$ in F appears at $\lambda$ in the actual observation f ($f(\lambda)=F(\lambda')$)
		- $\lambda$ depends on the radial velocity of the star and the velocity of the observer on Earth
		- We want to remove the velocity of the observer so transform the measured wavelengths on Earth to the solar system barycenter
			- $\lambda_{B}=\lambda(1+z_{B})$
			- This is done using a fortran based code (BarCor)
			- Additionally correct for [[Secular acceleration]] which requires the parallax of the star and needed for stars with large proper motion
			- Can also use barycorr which includes relativist corrections
		- The stellar radial motion redshifts the wavelength
			- $$\begin{align}
\ln\lambda_{b} & =\ln\lambda'+\ln(1+\dfrac{v}{c}) \\
\ln\lambda_{b} & = \ln(\lambda (1+\dfrac{v}{c})) \\
z & =\dfrac{v}{c} \\
\lambda_{b}  & = \lambda'(1+z)
\end{align}
$$
			- $\lambda'(\lambda,v)=\dfrac{\lambda (1+z_{b})}{1+\dfrac{v}{c}}$ 
				- Doppler shift the template by radial velocity v
		- Assuming the spectrum is continuous use a cubic spline interpolation to evaluate F at any $\lambda$ which can then be used for forward modeling
		- Additionally generate a bad pixel map that flags pixels with saturation significant negative flux, significant deviation from fitting, or contamination from tellurics and sky emissions
	- Find RVs
		- Optimize the weighted sum of residuals
		- Use a direct stepping through the velocity parameter space v
		- At a fixed velocity $v_{k}$ the Doppler shifted template $F_{i,k}=F(\lambda_{i},v_{k,b})$ is evaluated at each pixel i, and do a simple linear least squares fit for a to obtain $\chi^2(v_{k})$ 
			- Making the substitution $F_{i^2w_{i}}\to w_{i}\; \dfrac{f_{i}}{F_{i}}\to f_{i}$ 
		- Explore the $\chi^2(v)$ function for global minimum which takes a parabolic shape
		- Can then estimate v and an error for it at the parabola minimum
			- $v_{o}=v_{m}-\dfrac{\Delta v}{2}\cdot \dfrac{\chi^2_{m+1}-\chi^2_{m-1}}{\chi^2_{m-1}-2\chi^2_{m}+\chi^2_{m+1}}$
		- Estimate uncertainty of $v_{o}$
			- $\epsilon_{v}^2=2 \dfrac{1}{(\chi^2)''}=2 \dfrac{\Delta v^2}{\chi^2_{m_-1}-2\chi^2_{m}+\chi^2_{m+1}}$
			- Rescale this with $\chi_{red}^2$ to account for under/over-dispersion of the fit
		- Compute $\chi^2\;\chi^2_{red}$ 
		- Fit each order separately and calculate a weighted mean for the radial  velocities
			- $v=\dfrac{\sum\epsilon_{v_{o}}^{-2}v_{o}}{\sum\epsilon_{v_{o}}^{-2}}$
			- with $\epsilon_{v}=\sqrt{ \dfrac{1}{\sum\epsilon_{v_{o}}^{-2}} \cdot \dfrac{1}{N_{o}-1} \dfrac{\sum(v_{o}-v)^2}{\epsilon_{v_{o}}^2}}=\dfrac{wrms}{\sqrt{ N_{o}-1}}$
				- wrms is weighted root mean square and $N_{o}$ is number of orders
	- Spectra coadding
		- Naive coadding requires resampling or interpolation onto a common wavelength grid since spectra from different epochs are sampled at different wavelength footpoints
			- [x] What is a footpoint? #Question
		- Instead use uniform cubic basic spline (B-spline) regression to the normalized data. Some benefits:
			- B-spline regression is a linear least squares method and is fast
			- No need to interpolate
			- Data point uncertainties are easily take into account
			- Robust statistics for outlier detections can be obtained with kappa-sigma clipping
				- [ ] #TODO What is kappa sigma clipping? #Question
			- Spline function is a direct outcome and consistent with input to forward model
		- Recompute polynomials for each order with the mean RV $v_{n}$ and normalize the data with this $\dfrac{f_{n,i}}{p_{n,i}}$ and then calculate $\lambda'$ 
			- $\chi^2=\sum_{n,i}p_{n,i}^2w_{n,i}[\dfrac{f_{n,i}}{p_{n,i}}-F(\lambda_{n,i}',b)]^2$ 
		- Now find all the coefficients $b_k$ of the spline with K knots minimizing the residuals
			- The number of knots is similar to the number of data points per spectrum in the order (1 knot per pixel)
			- Calculate error in knot value first by estimating error in B-spline coefficients then error porpagate
				- $\epsilon_{b_{k}}=\dfrac{1}{\sqrt{ \sum_{i}w_{i}B_{k}(x_{i}) }}$ 
				- $\epsilon_{f_{k}}=\dfrac{1}{6}\epsilon_{b_{k-1}}^2+\dfrac{4}{6}\epsilon_{b_{k}}^2+\dfrac{1}{6}\epsilon_{b_{k+1}}^2$
- Spectral diagnostics
	- Can get wavelength dependency for each RV since the echelle orders are related to wavelength by extending the model in a straight line
		- $v(o)=\alpha+\beta \ln\lambda_{o}$
			- $\lambda_{o}$ is representative wavelength of order o
		- Get a best fit estimate for the slope parameter $\beta$ called the [[Chromatic Index]]
			- Has units velocity per wavelength ratio e (Neper, symbol Np)
		- $\alpha$ is a nuisance parameter so reparametrize
			- $v(o)=v+\beta \ln(\dfrac{\lambda_{o}}{\lambda_{v}})$
			- with $\alpha=v+\beta \ln(\dfrac{\lambda_{o}}{\lambda_{v}})$
			- with $\lambda_{v}$ being the wavelength at which the slope intersects the weighted mean RV ($v_{o}$)
	- [[Differential Line Width]]
		- Assume stellar lines are Gaussian-like shaped
			- Can be added to build a spectrum with different positions and strengths due to linearity
			- Can create blended lines
			- But lines should have the same width
		- Instead of fitting Gaussian to $\chi^2$ function use [[Differential Line Width|dLW]] with width indicator $\sigma\Delta\sigma$
	- Line Indices
		- Indices in the form of time series data for a number of spectral lines (CA II, H&K,H$\alpha$,NA I D, CAII IRT)
		- Need to find line positions or the absolute RVs
		- Indices: $I=\dfrac{\langle f_{0} \rangle}{0.5\cdot(\langle f_{1} \rangle+\langle f_{2} \rangle)}$
		- Error through propagation (see text) $\epsilon_{I}=I\sqrt{ \dfrac{\epsilon_{0}^2}{\langle f_{0} \rangle^2} + \dfrac{\epsilon_{1}^2 + \epsilon_{2}^2}{\langle f_{1} \rangle^2 + \langle f_{2} \rangle^2} }$
- Results/Conclusion
	- SERVAL is able to achieve precise RVs at 1m/s level
	- Chromatic index is a powerful tool for understanding RV variations induced by stellar activity. Summarizes in one value a first-order effect of wavelength dependence in the RVs
	- Differential indicator fits in the framework of least fitting without the need for external templates (but have not external accuracy)

> [!Cite]

Zechmeister, M., A. Reiners, P. J. Amado, et al. “Spectrum Radial Velocity Analyser (SERVAL). High-Precision Radial Velocities and Two Alternative Spectral Indicators.” _Astronomy & Astrophysics_ 609 (January 2018): A12. [https://doi.org/10.1051/0004-6361/201731483](https://doi.org/10.1051/0004-6361/201731483).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Zechmeister, M]] 
**Author**: [[Files/Authors/Reiners, A]] 
**Author**: [[Files/Authors/Amado, P. J.]] 
**Author**: [[Files/Authors/Azzaro, M]] 
**Author**: [[Files/Authors/Bauer, F. F.]] 
**Author**: [[Files/Authors/Béjar, V. J. S.]] 
**Author**: [[Files/Authors/Caballero, J. A.]] 
**Author**: [[Files/Authors/Guenther, E. W.]] 
**Author**: [[Files/Authors/Hagen, H.-J.]] 
**Author**: [[Files/Authors/Jeffers, S. V.]] 
**Author**: [[Files/Authors/Kaminski, A]] 
**Author**: [[Files/Authors/Kürster, M]] 
**Author**: [[Files/Authors/Launhardt, R]] 
**Author**: [[Files/Authors/Montes, D]] 
**Author**: [[Files/Authors/Morales, J. C.]] 
**Author**: [[Files/Authors/Quirrenbach, A]] 
**Author**: [[Files/Authors/Reffert, S]] 
**Author**: [[Files/Authors/Ribas, I]] 
**Author**: [[Files/Authors/Seifert, W]] 
**Author**: [[Files/Authors/Tal-Or, L]] 
**Author**: [[Files/Authors/Wolthoff, V]] 


> **Year**: 2018  

> **Citekey**: zechmeisterSpectrumRadialVelocity2018 

> **itemType**: journalArticle 

> **Journal**: *Astronomy & Astrophysics* 

> **Volume**: 609  

> **Pages**: A12 

> **DOI**:: 10.1051/0004-6361/201731483   

  
> [!Abstract]

>

> Context: The CARMENES survey is a high-precision radial velocity (RV) programme that aims to detect Earth-like planets orbiting low-mass stars. Aims: We develop least-squares fitting algorithms to derive the RVs and additional spectral diagnostics implemented in the SpEctrum Radial Velocity Analyser (SERVAL), a publicly available python code. Methods: We measured the RVs using high signal-to-noise templates created by coadding all available spectra of each star.We define the chromatic index as the RV gradient as a function of wavelength with the RVs measured in the echelle orders. Additionally, we computed the differential line width by correlating the fit residuals with the second derivative of the template to track variations in the stellar line width. Results: Using HARPS data, our SERVAL code achieves a RV precision at the level of 1m/s. Applying the chromatic index to CARMENES data of the active star YZ CMi, we identify apparent RV variations induced by stellar activity. The differential line width is found to be an alternative indicator to the commonly used full width half maximum. Conclusions: We find that at the red optical wavelengths (700--900 nm) obtained by the visual channel of CARMENES, the chromatic index is an excellent tool to investigate stellar active regions and to identify and perhaps even correct for activity-induced RV variations.

>.



# Annotations%% begin annotations %%




  



<mark style="background-color: #ffd400">Quote</mark>

> SERVAL code achieves a RV precision at the level of 1 m/s



<mark style="background-color: #ffd400">Quote</mark>

> identify apparent RV variations induced by stellar activity



<mark style="background-color: #ffd400">Quote</mark>

> differential line  width is found to be an alternative indicator to the commonly used full width half maximum.



<mark style="background-color: #ffd400">Quote</mark>

> chromatic index is an excellent tool to investigate stellar active regions and to identify and perhaps even correct for activity-induced RV  variations.



<mark style="background-color: #ffd400">Quote</mark>

> these algorithms range from simple crosscorrelation with binary masks (Queloz 1995; Pepe et al. 2002),  to least-squares fit with coadded templates (Anglada-Escudé &  Butler 2012; Astudillo-Defru et al. 2015), and finally to leastsquares fitting with modelling of line spread functions



<mark style="background-color: #ffd400">Quote</mark>

> algorithm choice is influenced by instrument type



<mark style="background-color: #ffd400">Quote</mark>

> need for accuracy



<mark style="background-color: #ffd400">Quote</mark>

> high precision



<mark style="background-color: #ffd400">Quote</mark>

> aims for highest precision with stabilised spectrographs



<mark style="background-color: #ffd400">Quote</mark>

> employ forward modelling in pixel space to properly weight pixel errors, and we reconstruct the stellar templates  from the observations themselves to make optimal use of the  RV information inherent in the stellar spectra



<mark style="background-color: #e56eee">Quote</mark>

> based on  least-squares fitting.



<mark style="background-color: #ffd400">Quote</mark>

> RV  precision depends on both the signal-to-noise ratio of the data  and the match of the model to the data.



<mark style="background-color: #ff6666">Quote</mark>

> multiplicative background polynomials p(λ) to account for flux variations



<mark style="background-color: #ffd400">Quote</mark>

> f (λ) = p(λ) · F(λ′(λ, v)) ,



<mark style="background-color: #e56eee">Quote</mark>

> perform the decomposition sequentially and iteratively.



<mark style="background-color: #e56eee">Quote</mark>

> observed spectrum with the highest signal-to-noise is  taken as a reference



<mark style="background-color: #e56eee">Quote</mark>

> shift all observations into this reference  frame



<mark style="background-color: #e56eee">Quote</mark>

> coadd them to a high signal-to-noise template F



<mark style="background-color: #e56eee">Quote</mark>

> radial velocities are recomputed while the coefficients of the background polynomial  are fitted simultaneously



<mark style="background-color: #e56eee">Quote</mark>

> eliminate the contribution from Earth’s motion, we transform the measured wavelengths on Earth to the solar system  barycentr



<mark style="background-color: #e56eee">Quote</mark>

> correct for secular acceleration



<mark style="background-color: #e56eee">Quote</mark>

> relativistic correctionsT



<mark style="background-color: #e56eee">Quote</mark>

> assume that the spectrum is continuous



<mark style="background-color: #e56eee">Quote</mark>

> use cubic  spline interpolation to evaluate the template F at any wavelength λ,



<mark style="background-color: #e56eee">Quote</mark>

> generate and propagate a bad pixel map  to flag pixels with saturation, significant negative flux ( fi,n <  −3ǫi,n), significant deviation in the fitting (outliers), or contamination by tellurics and sky emission lines



<mark style="background-color: #ffd400">Quote</mark>

> determination of the RV, we optimise Eq. (3) with respect  to the polynomial coefficients a and the RV shift v.



<mark style="background-color: #ffd400">Quote</mark>

> RV parameter v makes the fit non-linear



<mark style="background-color: #e56eee">Quote</mark>

> direct stepping through the velocity parameter space v with a default step size of ∆v = 100 m/s as a compromise between oversampling the resolution element (~km/s) and  computational speed.



<mark style="background-color: #e56eee">Quote</mark>

> fixed velocity vk, the Doppler-shifted  template Fi,k = F(λi, vk, b) is evaluated at each pixel i,



<mark style="background-color: #ffd400">Quote</mark>

> χ2(v) function sampled at (vk, χ2  k) is explored for its  global minimum. Around its minimum, the χ2 function takes a  parabolic shape and the first derivative vanishes, (χ2)′ = 0.



<mark style="background-color: #ffd400">Quote</mark>

> parabolic interpolation through the minimum of the χ2(v) function and the two adjacent neighbours provides a refined estimate for v and an error estimate for v can be obtained from  the parabola curvature.



<mark style="background-color: #e56eee">Quote</mark>

> statistical analysis of the fit is performed. The χ2  and χr2ed are computed



<mark style="background-color: #e56eee">Quote</mark>

> Each order is fitted separately and finally a weighted mean  for the radial velocities vo from Eq. (10) with errors ǫvo from  Eq. (11) over all orders o is computed



<mark style="background-color: #ffd400">Quote</mark>

> naive coadding would require either some kind of  resampling or interpolation of the observations onto a common  wavelength grid



<mark style="background-color: #e56eee">Quote</mark>

> carry out the “co-adding“ with a uniform cubic basic  spline (B-spline) regression to the normalised data



<mark style="background-color: #e56eee">Quote</mark>

> we recompute the polynomials pn,i for each order (now with the mean RV vn) to normalise the data ( fn,i  pn,i ) and calculate the Doppler-shifted  wavelengths



<mark style="background-color: #e56eee">Quote</mark>

> find all the coefficients bk of the spline with K  knots, so that the residuals are minimal



<mark style="background-color: #ffd400">Quote</mark>

> the number of knots K is similar to the number of  data points per spectrum in the order, i.e. we have about one  knot per pixel



<mark style="background-color: #ffd400">Quote</mark>

> (down-weighting) for tellurics. This  means that we include regions heavily contaminated by telluric  lines in coadding, while in RV measurements they are totally excluded.



<mark style="background-color: #ffd400">Quote</mark>

> ncrease the robustness against outliers, a few (≤3) kappasigma clipping iterations (κ = 5) are performed for the coadding



<mark style="background-color: #ffd400">Quote</mark>

> can also try to get some information about wavelength dependency for instance by simply extending the model  to a straight line



<mark style="background-color: #e56eee">Quote</mark>

> obtain a best fit estimate for  the slope parameter β, which we call chromatic index. Its unit  Article number, page 5 of 13 is velocity per wavelength ratio e



<mark style="background-color: #ffd400">Quote</mark>

> report an effective wavelength, which is in particular useful when comparing data from  instruments covering different wavelengths.



<mark style="background-color: #ffd400">Quote</mark>

> feature of the CCF method is that the CCF can be interpreted  as a mean stellar line profile that is actually convolved with a  kind of kernel.



<mark style="background-color: #ffd400">Quote</mark>

> CCF is basically a χ2 function



<mark style="background-color: #ffd400">Quote</mark>

> when a Gaussian function  is slightly displaced, the residuals, i.e. the difference between  both curves, are correlated with the first derivative of the Gaussian function.



<mark style="background-color: #ffd400">Quote</mark>

> scale the first derivative to the residuals.



<mark style="background-color: #ffd400">Quote</mark>

> we have to assume that the stellar lines are Gaussian-like  shaped



<mark style="background-color: #ffd400">Quote</mark>

> build up a spectrum  by adding Gaussian lines at other positions and with different  strengths due to the linearity



<mark style="background-color: #ffd400">Quote</mark>

> applicable to blended lines.



<mark style="background-color: #ffd400">Quote</mark>

> scaling factor ∆σ carries information about line width  changes and we compute its value via a weighted linear leastsquares fit resulting in



<mark style="background-color: #e56eee">Quote</mark>

> dLW is computed in each order and finally averaged similar  to the RVs



<mark style="background-color: #ffd400">Quote</mark>

> there can be other noise sources  from the instrument, such as focus or resolution change, or observation, such as line broading due to barycentric motion during  the exposure



<mark style="background-color: #ffd400">Quote</mark>

> width indicator σ∆σ  has also a differential nature



<mark style="background-color: #ffd400">Quote</mark>

> unit is m2/s2 if the derivative is calculated  in velocity or logarithmic wavelength scale.



<mark style="background-color: #ffd400">Quote</mark>

> Variations in the spectral line width can be intrinsic to the  star, for example pulsation or activity, or of instrumental origin



<mark style="background-color: #ffd400">Quote</mark>

> correlation of a RV signal  with line width variations would argue against a planet hypothesis.



<mark style="background-color: #ffd400">Quote</mark>

> provides indices in the form of time series data for a number of spectral lines



<mark style="background-color: #ffd400">Quote</mark>

> need to find the line positions, i.e. the absolute RVs.



<mark style="background-color: #ffd400">Quote</mark>

> measuring the RV of one spectrum against an  absolute reference (e.g. a PHOENIX spectrum)



<mark style="background-color: #ffd400">Quote</mark>

> while for most active stars an even wider range could be considered at the cost of decreasing index precision.



<mark style="background-color: #ffd400">Quote</mark>

> be aware of a large model mismatch with this simplistic model making those error estimates misleading



<mark style="background-color: #ffd400">Quote</mark>

> Sometimes (pseudo-) equivalent widths (pEW) are preferred  instead of line indices.



<mark style="background-color: #ffd400">Quote</mark>

> pEWs are closely related to line indices,



<mark style="background-color: #ffd400">Quote</mark>

> both quantities measure the zero moment (area, integrated flux) and condense it into  one parameter.



<mark style="background-color: #ffd400">Quote</mark>

> demonstrates the capability of SERVAL  to achieve precise RVs at the 1 m/s level.



<mark style="background-color: #ffd400">Quote</mark>

> large uncertainty for the best fitting slope shows that the dLW  and FWHM correlate poorly for GJ 699.



<mark style="background-color: #ffd400">Quote</mark>

> much better correlation of dLW with FWHM divided by the  contrast indicator



<mark style="background-color: #ffd400">Quote</mark>

> could argue that additional contrast variations (on top of contrast ∝ FWHM−1) could lead to biased dLW measurements.



<mark style="background-color: #ffd400">Quote</mark>

> chromatic index-RV correlation demonstrates that the  dominating effect in the RV variations of YZ CMi is wavelength  dependent



<mark style="background-color: #ffd400">Quote</mark>

> wavelength-dependent temperature contrast  between quiet and active regions is expected to cause a variation  of the RVs as a function of wavelength



<mark style="background-color: #ffd400">Quote</mark>

> Active regions (or spots) that are somewhat cooler  (or hotter) than the photosphere show less contrast to the photosphere at longer wavelengths.



<mark style="background-color: #ffd400">Quote</mark>

> chromatic index is directly connected to RV  because it is calculated from the same line profile deformation



<mark style="background-color: #ffd400">Quote</mark>

> fairly tight relation between  RV and wavelength exists for the wavelength range 600–920 nm,  but the five spectral orders short of λ = 590 nm fail to follow  this trend.



<mark style="background-color: #ffd400">Quote</mark>

> lack of correlation at shorter wavelengths: first, the contrast grows too high in that active regions  no longer contribute to the observed spectrum in a significant  way; and second that the intensity of spectral features at short  wavelengths also differs dramatically between active and quiet  regions



<mark style="background-color: #ffd400">Quote</mark>

> investigate whether the chromatic index  effect continues down to shorter wavelengths is to determine RVs  for individual spectral orders of spectra taken with HARPS.



<mark style="background-color: #ffd400">Quote</mark>

> looked for targets that  were observed with both instruments, albeit not simultaneously



<mark style="background-color: #ffd400">Quote</mark>

> seems to indicate that the RVs of GJ 3379  show larger scatter at bluer wavelengths and that the RV variations at longer wavelengths are correlated with the chromatic  index, while those at bluer wavelengths are not.



<mark style="background-color: #ffd400">Quote</mark>

> alternative explanation is that the RV jitter of the star changed  during the course of a potential activity cycle;



<mark style="background-color: #ffd400">Quote</mark>

> correlation between chromatic index and RVs is much weaker  than for the full CARMENES wavelength range and the correlation itself is marginally significant.



<mark style="background-color: #ffd400">Quote</mark>

> RVs calculated from the limited wavelength range are precise  enough to compare the two time series; in this case we find  that the rms of CARMENES RVs (30 m/s) is significantly lower  than the HARPS rms



<mark style="background-color: #ffd400">Quote</mark>

> erive approximate  RVs measured against an observed spectrum



<mark style="background-color: #ffd400">Quote</mark>

> improve  the template by co-adding all observed spectra and recompute  the RVs



<mark style="background-color: #ffd400">Quote</mark>

> pectra are “coadded” via a weighted least-squares  regression with a cubic B-spline.



<mark style="background-color: #ffd400">Quote</mark>

> output consisting of time series  for high-precision RVs and a number of spectral indicators useful for further diagnostics as well as the high signal-to-noise templates



<mark style="background-color: #ffd400">Quote</mark>

> motivated a definition to study differential  changes in the spectral line widths



<mark style="background-color: #ffd400">Quote</mark>

> differential indicator nicely fits in our self-consistent framework of leastsquares fitting



<mark style="background-color: #ffd400">Quote</mark>

> chromatic index, while very simple in its definition,  turns out to be a very powerful indicator to identify stellar activity in RV signals



<mark style="background-color: #ffd400">Quote</mark>

> The chromatic  index summarises in one value a first-order effect of wavelength  dependence in the RVs





%% end annotations %%
