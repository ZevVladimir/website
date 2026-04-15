
---
Title: The Discovery of the Faintest Known Milky Way Satellite Using UNIONS

tags: #Astrophysics-Astrophysics-of-Galaxies #Broad-Band-Photometry #Local-Group #Milky-Way-Stellar-Halo #Stellar-Dynamics #Dwarf-Galaxies #UMaIII/U1  #paper

citekey: smithDiscoveryFaintestKnown2024

collection:

- Papers to Read

status: unread

dateread:

---
# Notes
## Abstract
- Present discovery of least luminous known satellite of the milky way
	- Absolute $V$-band magnitude of $+2.2_{-0.3}^{+0.4}\mathrm{mag}$
	- Total stellar mass $16_{-5}^{+6}M_{\odot}$
	- Old $\tau>11\mathrm{Gyr}$
	- Metal poor $[\mathrm{Fe/H}]\sim-2.2$
	- Heliocentric distance $\sim10\mathrm{kpc}$
	- Compact $r_{h}=3\pm1\mathrm{pc}$
- Identify 11 radial velocity members
	- 8 have full astrometric data and are comoving
	- Derive velocity dispersion of $3.7_{-1.0}^{+1.4}\mathrm{km\;s^{-1}}$ with some caveats
		- Exclusion of largest velocity outlier drops velocity dispersion to $1.9_{-1.1}^{+1.4}\mathrm{km\;s^{-1}}$
		- Additional removal of next outlier produces unresolved velocity dispersion
		- Binary stars could be inflating the measurement
## Main Paper
### Introduction
- Classical globular clusters are typically bright and compact stellar systems
- Dwarf galaxies are orders of magnitude more diffuse than globular clusters
- Key physical distinction: dynamics of dwarf galaxies cannot be explained through combination of baryonic processes and Newton's laws while globular clusters can
- With $\Lambda$CDM dwarf galaxies are thought to be in the center of their own DM halos
- Globular clusters do not have appreciable amounts of DM
- Significant dispersion in the distribution of stellar metallicities could be proxy for a DM halo
	- Globular clusters wouldn't have enough potential to retain products of stellar feedback
		- Only form a stellar population of one metallicity
	- Dwarf galaxies could retain this gas and have longer star formation histories with self-enrichment
- Determining the nature of any one of the ambiguous faint satellites could
	- Extend the globular cluster or dwarf galaxy luminosity functions by up to a few orders of magnitude
	- Extend dwarf galaxy scale-length function up to a factor of 10
- Globular clusters are useful for studying
	- The evolution of ISM and stellar populations over cosmic times
- Dwarf galaxies are powerful probes of
	- Star formation
	- Chemical enrichment
	- Nature of DM
		- Constrain models like "warm" and "fuzzy" and self-interacting DM
### Results
#### 3.1 Distance and stellar population
- Refine on matched-filter detection algorithm which searches for stellar populations with age of 12 Gyr and metallicity $\left[ \mathrm{Fe/H} \right]=-2$
- Explore possible isochrones
	- Adopt $\tau=12\mathrm{Gyr}$ and $\left[ \mathrm{Fe/H} \right]=-2.2$
	- But some room for movement with maybe lower metallicity and $\tau\geq11\mathrm{Gyr}$
- Distance estimate of $10\pm1\mathrm{kpc}$
	- No tip of red giant branch or horizontal branch stars to further constrain
#### 3.2 Structural Parameters
- Assume distribution of stars is well described by
	- Elliptical exponential radial surface density profile
	- Constant field contamination
	- The profile: $\rho_{\mathrm{dwarf}}(r)=\dfrac{1.68^{2}}{2\pi r_{h}^{2}(1-\epsilon)}N^{*}\exp \left( -\dfrac{1.68r}{r_{h}} \right)$
		- $r$ is the elliptical radius
		- $\epsilon$ is the ellipticity 
		- $N^{*}$ is the number of stars in the system
		- $r_{h}$ is the half-light radius
- Assume background stellar density is uniform
	- $\Sigma_{b}=\dfrac{n-N^{*}}{A}$
- Combine for posterior distribution function
	- $\rho_{\mathrm{model}}(r)=\rho_{\mathrm{dwarf}}+\Sigma_{b}$
- Then sample with MCMC
	- Derived parameters are in the paper
	- Find UMa3/U1 is compact with $r_{h}=3\pm1pc$
#### 3.3 Proper motion
- Some stars have full astrometric data 
	- Can estimate systematic proper motion of UMa3/U1
	- Assign likelihoods of what stars belong to the system
- Method based on [[jensenSmallscaleStellarHaloes2024]]
	- Use spatial, photometric, astrometic information, and system structural parameters
	- Compute likelihood that a given star is a member of the stellar system rather than the MW foreground
- Find 8 high-likelihood member stars
#### 3.4 Membership
- Use $v_{\odot}$, $\Sigma_{\mathrm{EW}}$, and membership likelihoods to isolate member stars
	- $v_{\odot}$ is the heliocentric radial velocities
	- $\Sigma_{\mathrm{EW}}$ is the sum of all three CaT absorption features
#### 3.5 Velocity Distribution
- Maximize following log likelihood function with respect to $\langle v_{\odot} \rangle$ and $\sigma_{v}$
	- $\ln L=-\dfrac{1}{2}\sum_{i=1}^{N}\ln \left( \sigma_{i}^{2}+\sigma_{v}^{2} \right)-\dfrac{1}{2}\sum_{i=1}^{N} \dfrac{\left( v_{i}-\langle v_{\odot} \rangle \right)^{2}}{\sigma_{i}^{2}+\sigma_{v}^{2}}-\dfrac{N}{2}\ln(2\pi)$
	- $v_{i}$ and $\sigma_{i}$ are the measured velocity and uncertainty per star
	- $\langle v_{\odot} \rangle$ is the mean heliocentric radial velocity
	- $\sigma_{v}$ is the intrinsic velocity dispersion
- Check for robustness by iteratively removing stars and seeing how much that affects the results of the MCMC
#### 3.6 Stellar Mass and Luminosity
- Derive total stellar mass
	- Create a sample of mock stellar population
	- Assume described by
		- Two part Kroupa IMF
		- Stellar population of $\tau=12\mathrm{Gyr}$ and $\left[ \mathrm{Fe/H} \right]=-2.2$
	- Find that $M_{tot}=16_{-5}^{+6}M_{\odot}$
#### 3.7 Orbital Estimation
- Investigate orbit of UMa3/U1 and interaction with MW
- Use MC randomization to generate 1000 samples of initial orbital conditions
- Integrate orbit of each point mass 
	- 0.5 Gyr forward and backward in time
	- Steps of $10^{-3}$ Gyr
- Do not include LMC in their potential
	- Believe it is unlikely to strongly affect the orbit based on other UFD (ultra faint dwarfs) that have been shown to be unaffected
### Discussion
#### 4.1 On the origin of UMa3/U1
- Two options
	- It formed in situ
		- Low metallicity does not exclude this
		- Orbital parmameters are inconsistent with criteria used to define disk and bulge globular cluster populations
	- Accreted into the MW
		- No stellar stream in catalog that matches but possible it is faint and there
		- Could have accreted as part of the same system as M68
#### 4.2 On the nature of UMa3/U1
- UMa3/U1 is far fainter and smaller than any confirmed MW dwarf galaxies
- Dwarf galaxies have their own dark matter halo while globular clusters do not
	- Can tell then with a dynamical $\dfrac{M}{L}$ ratio 
		- Gained from the intrinsic stellar velocity dispersion
		- Faintest dwarf galaxy: $10^{3}M_{\odot}L_{\odot}$
		- Globular clusters: $\dfrac{M}{L}\sim2$
- Can use total stellar mass and half-light radius to predict line of sight velocity dispersion
	- $M_{1/2}=930\cdot\sigma_{v}^{2}\cdot r_{h}M_{\odot}$
		- $\sigma_{v}\;\left[ \mathrm{km/s} \right]$
		- $r_{h}\;\left[ \mathrm{pc} \right]$
		- $M_{1/2}$ is the mass enclosed by $r_{h}$
	- Find $\sigma_{v}\sim50\mathrm{ms^{-1}}$
- Find that dynamical $\dfrac{M}{L}=6500_{-4300}^{+9100} M_{\odot}/L_{\odot}$
- Removing the second star that greatly increased dispersion: $\dfrac{M}{L}=1900_{-1600}^{+4400}M_{\odot}/L_{\odot}$
- Do not find clear signs of unbound stars
- However presence of binary and unbound stars could still have an impact
	- Need multi epoch spectroscopic data
## Conclusion
- Identify the least luminous known satellite in the MW
- Find a potential signature of a massive DM halo from intrinsic velocity dispersion
	- But this is highly dependent on the inclusion of two stars out of 11
## Questions
- 

> [!Cite]

Smith, Simon E. T., William Cerny, Christian R. Hayes, et al. “The Discovery of the Faintest Known Milky Way Satellite Using UNIONS.” _The Astrophysical Journal_ 961 (January 2024): 92. [https://doi.org/10.3847/1538-4357/ad0d9f](https://doi.org/10.3847/1538-4357/ad0d9f).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Smith, S]] 
**Author**: [[Files/Authors/Cerny, W]] 
**Author**: [[Files/Authors/Hayes, C]] 
**Author**: [[Files/Authors/Sestito, F]] 
**Author**: [[Files/Authors/Jensen, J]] 
**Author**: [[Files/Authors/McConnachie, A]] 
**Author**: [[Files/Authors/Geha, M]] 
**Author**: [[Files/Authors/Navarro, J]] 
**Author**: [[Files/Authors/Li, T]] 
**Author**: [[Files/Authors/Cuillandre, J]] 
**Author**: [[Files/Authors/Errani, R]] 
**Author**: [[Files/Authors/Chambers, K]] 
**Author**: [[Files/Authors/Gwyn, S]] 
**Author**: [[Files/Authors/Hammer, F]] 
**Author**: [[Files/Authors/Hudson, M]] 
**Author**: [[Files/Authors/Magnier, E]] 
**Author**: [[Files/Authors/Martin, N]] 


> **Date**: 2024/01/01

> **Citekey**: smithDiscoveryFaintestKnown2024 

> **itemType**: journalArticle 

> **Journal**: *The Astrophysical Journal* 

> **Volume**: 961  

> **Pages**: 92 

> **DOI**:: 10.3847/1538-4357/ad0d9f   

  
> [!Abstract]

>

> We present the discovery of Ursa Major III/UNIONS 1, the least luminous known satellite of the Milky Way, which is estimated to have an absolute V-band magnitude of $+{2.2}_{-0.3}^{+0.4}$ mag, equivalent to a total stellar mass of ${16}_{-5}^{+6}$ M ⊙. Ursa Major III/UNIONS 1 was uncovered in the deep, wide-field Ultraviolet Near Infrared Optical Northern Survey (UNIONS) and is consistent with an old (τ > 11 Gyr), metal-poor ([Fe/H] ~ -2.2) stellar population at a heliocentric distance of ~10 kpc. Despite its being compact (r h = 3 ± 1 pc) and composed of few stars, we confirm the reality of Ursa Major III/UNIONS 1 with Keck II/DEIMOS follow-up spectroscopy and identify 11 radial velocity members, eight of which have full astrometric data from Gaia and are co-moving based on their proper motions. Based on these 11 radial velocity members, we derive an intrinsic velocity dispersion of ${3.7}_{-1.0}^{+1.4}$ km s-1 but some caveats preclude this value from being interpreted as a direct indicator of the underlying gravitational potential at this time. Primarily, the exclusion of the largest velocity outlier from the member list drops the velocity dispersion to ${1.9}_{-1.1}^{+1.4}$ km s-1, and the subsequent removal of an additional outlier star produces an unresolved velocity dispersion. While the presence of binary stars may be inflating the measurement, the possibility of a significant velocity dispersion makes Ursa Major III/UNIONS 1 a high-priority candidate for multi-epoch spectroscopic follow-ups to deduce the true nature of this incredibly faint satellite.

>.



# Annotations%% begin annotations %%





%% end annotations %%
