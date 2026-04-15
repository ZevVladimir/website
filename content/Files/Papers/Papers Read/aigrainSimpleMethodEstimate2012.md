
---
Title: A simple method to estimate radial velocity variations due to stellar activity using photometry 

tags: #Astrophysics-Solar-and-Stellar-Astrophysics #paper 

citekey: aigrainSimpleMethodEstimate2012

collection:

- Papers Read

status: unread

dateread:

---
# Notes
## Abstract
- Predict activity-induced RV variations using time-series photometry
- Only has 2 free parameters and doesn't need information about the stellar rotation period
## Main Paper
### Introduction
- Want to characterize the level of activity-induced RV variability
	- Can add a jitter term in quadrature to RV uncertainties
		- Treats the activity signal as an independent, identically distributed Gaussian noise process
		- But they are naturally correlated in time, quasi periodic and non stationary
	- For individual stars can use chromospheric activity indicators, measurements of the degree of asymmetry of the spectral lines, [[Bisector Span]] of the [[Cross-Correlation Function|CCF]] between the stellar spectrum and a template
		- Check for periodic modulation in these indicators
	- Can model the variations of the stellar brightness and the CCF bisector span using a spot model to predict activity induced variations
		- Spot models are very degenerate
	- This papers method
		- Method to predict activity-induced RV variations for a given star given its photometric variations
		- Intended for statistical purposes
			- Characterization of the overall RV variability properties of a sample of stars
			- To select the best targets for RV follow-up
		- Based on a simple spot model
		- Then use relationship between photometric and RV signatures of individual spots to simulate RV variations based on light curve alone
### Simple Spot Model
- Assume spots are small #future-work 
	- Can ignore projection effects within a spot
	- Can assume that spots won't overlap
- Assume that there is no limb-darkening #future-work 
	- Only slightly alters photometric signature of dark spots
- Then the relative. drop in flux from a single point like dark spot is: $F(t)=f MAX{\cos\beta(t);0}$
	- $f=2(1-c)(1-\cos \alpha)$
	- $\alpha$ is the angular radius of the spot on the surface of the star
	- c is the contrast ration between the spot and the un-spotted photosphere
	- $\beta(t)$ is the angle between the spot normal and the line of sight given by $\cos\beta(t)=\cos \phi(t)\cos\delta \sin i+\sin\delta \cos i$
		- i is the stellar inclination
		- $\delta$ is the latitude of the spot relative to the stars rotational equator
		- $\phi(t)$ is the phase of the spot relative to the line of sight and defined $\phi \equiv \dfrac{2\pi t}{P_{tot}}+\phi_{0}$
			- $P_{rot}$ is the star's rotation period
			- $\phi_{0}$ is the longitude of the spot
- Then the observed stellar flux is $\Psi(t)=\Psi_{0}[1-F(t)]$
	- Where $\Psi_{0}$ is the flux in the absence of spots
- Do not include faculae in the model #future-work 
#### RV Signature
- The spot suppresses the flux emitted by a portion of the star
	- This causes a perturbation in the disk averaged RV
- Can estimate the perturbation with $\Delta RV_{rot}(t)=-F(t)V_{eq}\cos\delta \sin\phi(t)\sin i$
	- Where the projected area is $F(t)$
	- $V_{eq}=\dfrac{2\pi R_{\star}}{P_{rot}}$ is the equatorial rotational velocity of the star
		- $R_{\star}$ is the radius of the star
		- Can also allow $V_{eq}$ to vary as a function of spot latitude
- Since spots tend to have limited photometric contrast  and are much more extended spatially
	- Since convection is suppressed within them there is a reduction in convective blue-shift
	- Approximate RV perturbation from this: $\Delta RV_{c}(t)=+F(t)\delta V_{c}\kappa \cos\beta(t)$
		- $\delta V_{c}$ is the difference between the convective blue-shift in the unspotted photosphere and that within the magnetized area
		- $\kappa$ is the ratio of the magnetized area to the spot surface (generally $\gg1$)
- Thus total RV signature of spot and associated magnetized area: $\Delta RV(t)=\Delta RV_{rot}(t)+\Delta RV_{c}(t)$
### The FF' Method
#### Relationship between photometric and RV signatures
- Note that $\dot{F}(t)=-f\sin \phi(t)\dot{\phi}(t)\cos\delta \sin i=-f\sin \phi(t)\cos\delta \sin i \dfrac{2\pi}{P_{rot}}$
- Can then rewrite RV signature of spots as $\Delta RV_{rot}(t)=-\dfrac{F(t)\dot{F}(t)R_{\star}}{f}$
	- $F(t)=1- \dfrac{\Psi(t)}{\Psi_{0}}$
	- $\dot{F}(t)=-\dfrac{\dot{\Psi}(t)}{\Psi_{0}}$
- Then
	- $\Delta RV_{rot}(t)= \dfrac{\dot{\Psi}(t)}{\Psi_{0}}\left[1- \dfrac{\Psi(t)}{\Psi_{0}}\right] \dfrac{R_{\star}}{f}$
	- $\Delta RV_{c}(t)=+\dfrac{F^2(t)\delta V_{c}\kappa}{f}=+\left[1- \dfrac{\Psi(t)}{\Psi_{0}}\right]^2 \dfrac{\delta V_{c}\kappa}{f}$
- Multiple spots have an additive effect
- But the reasoning behind FF' cannot be extended to multiple spots #future-work 
	- When multiple active regions are present making just a first order approximation
	- So FF' reproduces dominant features but is less accurate especially for short time scales
### Appendix B: Gaussian Process Regression on the Total Solar Irradiance
- 
## Conclusion
- 

> [!Cite]

Aigrain, S., F. Pont, and S. Zucker. “A Simple Method to Estimate Radial Velocity Variations Due to Stellar Activity Using Photometry.” _Monthly Notices of the Royal Astronomical Society_ 419, no. 4 (2012): 3147–58. [https://doi.org/10.1111/j.1365-2966.2011.19960.x](https://doi.org/10.1111/j.1365-2966.2011.19960.x).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Aigrain, S]] 
**Author**: [[Files/Authors/Pont, F]] 
**Author**: [[Files/Authors/Zucker, S]] 


> **Year**: 2012  

> **Citekey**: aigrainSimpleMethodEstimate2012 

> **itemType**: journalArticle 

> **Journal**: *Monthly Notices of the Royal Astronomical Society* 

> **Volume**: 419 

> **Issue**: 4  

> **Pages**: 3147-3158 

> **DOI**:: 10.1111/j.1365-2966.2011.19960.x   

  
> [!Abstract]

>

> We present a new, simple method to predict activity-induced radial velocity variations using high-precision time-series photometry. It is based on insights from a simple spot model, has only two free parameters (one of which can be estimated from the light curve) and does not require knowledge of the stellar rotation period. We test the method on simulated data and illustrate its performance by applying it to MOST/SOPHIE observations of the planet host-star HD189733, where it gives almost identical results to much more sophisticated, but highly degenerate models, and synthetic data for the Sun, where we demonstrate that it can reproduce variations well below the m/s level. We also apply it to Quarter 1 data for Kepler transit candidate host stars, where it can be used to estimate RV variations down to the 2-3m/s level, and show that RV amplitudes above that level may be expected for approximately two thirds of the candidates we examined.

>.



# Annotations%% begin annotations %%





%% end annotations %%
