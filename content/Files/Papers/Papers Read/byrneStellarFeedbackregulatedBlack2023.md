
---
**Title**: Stellar feedback-regulated black hole growth: driving factors from nuclear to halo scales 

tags: #paper 

citekey: byrneStellarFeedbackregulatedBlack2023

collection:

- Papers Read

status: unread

dateread:

---
# Notes
## Abstract
- Recent simulations of galaxy formation predict two phases of SMBH accretion
	- Early highly intermittent phase
	- Phase of accelerated growth
- Investigate physical factors driving the transition in BH accretion using FIRE sims
- Find halo mass, galaxy stellar mass, and depth of gravitational potential correlate with accelerated BH fueling
- Accelerated BH growth correlates with emergence of long-lived thing gas discs and with virialization of the inner CGM 
## Main Paper
### Introduction
- SMBHs in galactic nuclei co-evolve with host galaxies
	- Not well understood how they affect one another
	- Observations have linked
		- Kiloparsec-scale outflows of gas from galaxies with luminous quasars
		- Scaling relations between black hole mass $M_{BH}$ and stellar properties of the host galaxy (galaxy mass, bulge mass, velocity dispersion)
		- AGN is a primary suspected driver of star formation quenching in massive galaxies
	- AGN can act through many mechanisms
		- Kinetic winds
		- Radiation
		- Powerful radio jets
- Find general trend in other simulations where SMBH growth is strongly inhibited at high redshift due to repeated gas ejection by stellar feedback
	- Leads to black holes that are undermassive
	- Only after some time or if the host galaxy grows enough that the black hole catches up to the expected mass
	- Would expect to see a break in the scaling relationship in observations
	- Implications of delayed SMBH growth and include predictions for
		- Redshift and mass evolution of BH-galaxy scaling relations
		- The demographics of nuclear BHs in dwarf galaxies
		- AGN demographics
		- Mergers of massive BH that future GW experiments may detect
### Methodology
- As simulations other than those from [[angles-alcazarBlackHolesFIRE2017]] do not have on-the-fly BH accretion calculations
	- So model BH growth in post-processing in all simulations
	- In [[angles-alcazarBlackHolesFIRE2017]] find that on-the-fly and post-processing have overall good agreement
- Calculate BH accretion rate as $\dot{M_{\mathrm{BH}}}=(1-\eta)\dot{M_{\mathrm{Torque}}}$
	- $\eta=0.1$ is constant radiative efficiency
	- $\dot{M}_{\mathrm{Torque}}$ is calculated based on properties of galaxy within a distance $R_{0}$ enclosing $256$ gas particles as $\dot{M}_{\mathrm{Torque}}=\epsilon_{T}f_{d}^{5/2}M_{\mathrm{BH},8}^{1/6}M_{tot,9}R_{0}^{-3/2}(1+f_{0}/f_{\mathrm{gas}})^{-1}$
		- $\epsilon_{T}=2.5$ is a normalization factor
		- $f_{d}$ disc mass fraction
		- $M_{\mathrm{tot}}$ is total baryonic mass
		- $f_{0}\approx0.31f_{d}^{2}\left( \dfrac{M_{d}(R_{0})}{10^9M_{\odot}} \right)^{-1/3}$
- Make assumption that black holes start in the center of galaxy but often this isn't true
	- Black hole seeds can take a long time to sink to the galaxy center
	- Further limits BH fueling in early galaxies
- Estimate cosmic time at which BH accretion rate undergoes transition to rapid growth
	- Calculate $\Delta t=t_{\mathrm{threshold}}-t_{\mathrm{growth,BH}}$ the time interval between predicted onset of accelerated by growth based on different galaxy and the actual time of accelerated BH growth in the simulation data
- **Inner CGM Virialization**
	- CGM should virialize when cooling time $t_{\mathrm{cool}}^{(s)}$ for shocked gas becomes greater than the free fall time $t_{\mathrm{ff}}$
	- CGM virialization typically proceeds from outside in as $t_{\mathrm{cool}}^{(s)}/t_{\mathrm{ff}}$ generally increases outward
	- Inner CGM virialization correlates with
		- Transition from highly bursty to steady star formation rates in FIRE
		- Measures of galaxy disciness (ratio of ordered rotation to dispersion for H I gas) also appear to increase
	- These properties could play a role in the amount of gas available for BHs to accrete
	- Expect virialization to occur when $t_{\mathrm{cool}}^{(s)}/t_{\mathrm{ff}}$ for shocked gas at $r=0.1R_{\mathrm{vir}}$ exceeds $\sim1$
### Results
- **Overview of trajectories in the $M_{BH}-M_{*}$ plane**
	- For all galaxies BHs are undermassive at early times relative to local scaling relations
	- BHs of all massive ($>L_{\star}$) and most MW mass galaxies undergo period of rapid growth
- **Different predictors of SMBH growth**
	- Find accretion rate remains low and constant below threshold of $M_{*}\sim10^{10.5}M_{\odot}$ then increases drastically above that value
	- Find accretion rate consistently low below $M_{\mathrm{halo}}\sim10^{12}M_{\odot}$ then increases rapidly
	- Accretion rate increases at high values of $t_{\mathrm{cool}}^{(s)}/t_{\mathrm{ff}}\approx1$
	- $\Sigma_{1\;\mathrm{kpc}}^*$ increases monotonically with $M_{*}$
	- BH masses increase very rapidly above threshold of $\Sigma_{1\;\mathrm{kpc}}\approx10^{9.5}M_{\odot}\mathrm{kpc}^{-2}$
	- Find strong indication that the $M_{*}$, $M_{\mathrm{halo}}$, $\Sigma_{1\;kpc}^*$ correlate with BH fueling
### Discussion Confinement of stellar feedback
#### Confinement of Stellar Feedback
- Two main phases of BH growth are due to changes in how stellar feedback ejects (or is unable to) gas from inner galactic regions
- **Gravitational confinement**
	- BH growth increases more rapidly above thresholds in $\Sigma_{1\mathrm{kpc}}^*$ and $v_{\mathrm{esc}}$ at $1\;\mathrm{kpc}$ 
	- The threshold of $\Sigma_{1\;\mathrm{kpc}}^*$ corresponds to the critical surface density in star forming cloud above which stellar feedback becomes inefficient at ejecting gas
		- Star formation efficiency in a gas cloud scales with surface density
		- Star formation regulates itself with stellar feedback
		- Balance gravity keeping the cloud together against the momentum of gas driven by feedback
		- Get $\Sigma_{\mathrm{crit}}\sim \langle \dot{p}/m_{\star} \rangle/G\sim10^{3}M_{\odot}\mathrm{pc}^{-2}$ above which most of the cloud is turned into stars and below which most of the mass is ejected as gas
	- BH growth becomes more steady above the $\Sigma_{\mathrm{crit}}$ threshold as below it stellar feedback efficiently and repeatedly ejects gas while otherwise there is a stable gravitationally bound reservoir of gas for the BH
- **Pressure confinement by the inner CGM**
	- The correlation of BH growth with inner CGM virialization suggests pressure confinement could trigger changes to the central galaxy
	- The confinement of star formation-driven outflows by pressure in the inner CGM could play an important role in the transition to accelerating BH growth
	- Large pressure fluctuations in the CGM provide paths of least resistance for stellar feedback to escape from the galaxy
#### Correlations with stellar and halo masses
- Address why BH growth transition also correlates with constant thresholds in $M_{\mathrm{halo}}$ and $M_{*}$ and $t_{\mathrm{bursty}}$ (end of bursty star formation)
- Only have to explain in either halo mass or stellar mass since they are roughly mapped onto another since minimal redshift dependence
- CGM virialization correlates strongly with depth of gravitational potential so possible different constant thresholds are due to correlations with the depth 
#### Connection to the settling of galactic discs
- Stabilization of gas reservoir seems connected to the emergence of steady, thin gas discs in galaxies
	- BH accretion rate transition occurs near $t_{\mathrm{bursty}}$
	- This transition from bursty to steady star formation coincides with rapid "settling" of ISM into steady thing disc in sims
	- Bursty stellar feedback before settling suppresses BH's ability to accrete gas from surroundings
	- Stellar discs generally appear before BHs start growing efficiently
	- Gas supply and SFR in nucleus can continue to experience substantial fluctuations after the galaxy as a whole has stabilized
### Interaction between confinement mechanisms
- Find confinement of stellar feedback by gravity and gas pressure tightly correlate with stabilization of BH's gas supply 
- When ISM stabilizes and inner CGM virializes
	- Pressure gradients in gas on average balance gravity
- Both confinement by gravity and by gas pressure become important at nearly the same time in sims
	- Possible that one threshold crossing causes the other but find not clear evidence
	- Threshold crossings in $\Sigma_{1\;\mathrm{kpc}}^*$ and in $t_{\mathrm{cool}}^{(s)}/t_{\mathrm{ff}}$ do not cause each other but occur around the same time because of implicit correlations
#### Comparison with results on accelerated BH growth from other simulations
- Generally interpret gravitational confinement similarly to prior studies
- Significant difference in interpretation of role of CGM virialization
- Hypothesis that inner CGM virialization may play a role in setting the mass scale above which BHs grow more efficiently differs from past work:
	- Associate accelerated BH growth with emergence of a stable gas disc enabled by virialization of *inner* CGM rather than virialization on larger scales
	- Attribute confinement of outflows post ICV to suppression of large pressure fluctuations in virialized gas (which close paths of least resistance for outflows to escape) as compared to buoyancy being a key factor
- See results of differences in subgrid models
	- EAGLE use Bondi-like accretion with $\dot{M}_{\mathrm{BH}}\propto M_{\mathrm{BH}}^{2}$
		- This scaling induces non-linear growth of SMBHs when they become sufficiently massive
	- Here with gravitational torque have $\dot{M}_{\mathrm{BH}}\propto M_{\mathrm{BH}}^{1/6}$ which can suppress BH growth at low $M_{\mathrm{BH}}$
		- Show that non-linearity in accretion model isn't essential to produce a relatively sharp transition between BH accretion fueling regimes
	- Difference in resolutions and implementation of other subgrid models indicates that transition between BH growth regimes is robust to broad range of subgrid model variations
	- Compared to other simulation the suppression of BH growth at early times is not solely due to mis-centering of the BH although this can be an additional effect
#### Implications for quenching by AGN feedback, and its dependence on stellar mass and $\Sigma_{1\;\mathrm{kpc}}^\star$
- Insight from BH growth histories has implications for AGN feedback
- AGN feedback generally has been inferred to affect host galaxies more strongly at massive end of galaxy mass spectrum
- Empirically fraction of quenched galaxies increases strongly around $L_{\star}$
- Observational evidence indicates among galaxies with similar stellar masses BH masses are higher in quiescent galaxies than in star-forming galaxies
	- Central regions of galaxies, quantified with $\Sigma_{1\;\mathrm{kpc}}^*$ are better determinant of quenching than stellar mass
- BH growth (and by extension AGN feedback) is most directly tied to gas supply in the inner galaxy which stabilizes when $\Sigma_{1\;\mathrm{kpc}}^*$ exceeds a threshold
- Prior studies found that AGN feedback likely must have a preventative effect in massive halos
	- AGN must prevent too much CGM gas from accreting onto galaxies
	- When CGM is hot and virialized: AGN feedback heats volume filling medium
	- Before CGM virialization: difficult for AFN feedback to effectively prevent gas infall
- Find that on average BH growth is more efficient and AGN feedback is expected to be stronger above certain thresholds in stellar mass and $\Sigma_{1\;\mathrm{kpc}}^*$
#### Caveats and directions for #future-work 
- Assumptions
	- Simulations neglect AGN feedback entirely
	- While stellar feedback-driven modulation of BH feeding may play a role in determining characteristic mass scale of AGN feedback it isn't the full story
		- Possible that addition to a change in feeding efficiency there is a change in AGN feedback mode involved
	- Post-processing analysis assumes relatively low normalization of gravitational torque accretion estimator
		- Could be viewed as representing an unresolved subgrid mass loss effect that limits how much gas gets accreted by the BH
	- Assume that BHs are seeded and remain at galaxy centers at all times
		- Bh seeds could form away from galaxy centers and take a long time to sink to the nuclear regions
		- This could take a very long time (potentially >age of universe) especially when  there are lots of mergers and bursts of star formation
## Conclusion
- Analyze BH growth in 16 FIRE-2 cosmological zoom-in simulations of galaxies
- #future-work present analysis neglects AGN feedback
- Find 2 phases of BH growth
	- Inefficient growth at earlier times
	- In some haloes of MW mass or greater transition to increased time-averaged accretion rates later
	- Transition occurs when host galaxies reach stellar mass $\sim10^{10.5}M_{\odot}$
- Analyze how timing of BH accretion transition compares with the crossing of thresholds in different properties of the system
	- Galaxy stellar mass $M_{*}$
	- Total halo mass $M_{\mathrm{halo}}$
	- Stellar surface density within $1 \mathrm{kpc}$ $\Sigma_{\mathrm{1 kpc}}^\star$
	- Escape velocity at $1 \mathrm{kpc}$ $v_{\mathrm{esc}}$
	- Indicator of whether inner CGM has virialized $t_{\mathrm{cool}}^{(s)}/t_{ff}$
	- Constant thresholds in each of the properties correlate relatively tightly with the transition
- Timing of accelerated BH growth is consistent with $t_{\mathrm{bursty}}$ or when galaxies transition from highly bursty (order of magnitude SFR fluctuations) to time-steady SFRs
	- In FIRE this corresponds with galaxies settling into thin gas discs with stable gas reservoirs
	- BHs grow more steadily when the galaxies develop a stable gas reservoir
	- Gas reservoirs stabilize with
		- Confinement by central gravity
		- Confinement by gas pressure in the inner CGM
	- **Gravitational Confinement**
		- BH masses increase dramatically above $\Sigma_{1\mathrm{kpc}}^*\approx10^{9.5}M_{\odot}\mathrm{kpc}^{-2}$
			- Corresponds to escape velocity at a radius of $1 \mathrm{kpc}$ of $300\mathrm{kms^{-1}}$
			- This corresponds to the critical surface density above which stellar feedback is inefficient at ejecting gas
	- **Pressure confinement**
		- Accelerated BH growth correlates tightly with the virialization of the inner CGM
	- Confinement mechanisms aren't mutually exclusive and could reinforce one another
- #future-work 
	- Examine directly how stellar feedback-regulated phases of BH growth affect AGN feedback
	- How does the inclusion of self-consistent AGN feedback affect BH fueling
## Questions
- How do lower unresolved scales actually impact the resolved scales? How can you quantify this

> [!Cite]

Byrne, Lindsey, Claude-André Faucher-Giguère, Jonathan Stern, et al. “Stellar Feedback-Regulated Black Hole Growth: Driving Factors from Nuclear to Halo Scales.” _Monthly Notices of the Royal Astronomical Society_ 520, no. 1 (2023): 722–39. [https://doi.org/10.1093/mnras/stad171](https://doi.org/10.1093/mnras/stad171).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Byrne, L]] 
**Author**: [[Files/Authors/Faucher-Giguère, C]] 
**Author**: [[Files/Authors/Stern, J]] 
**Author**: [[Files/Authors/Anglés-Alcázar, D]] 
**Author**: [[Files/Authors/Wellons, S]] 
**Author**: [[Files/Authors/Gurvich, A]] 
**Author**: [[Files/Authors/Hopkins, P]] 


> **Year**: 2023  

> **Citekey**: byrneStellarFeedbackregulatedBlack2023 

> **itemType**: journalArticle 

> **Journal**: *Monthly Notices of the Royal Astronomical Society* 

> **Volume**: 520 

> **Issue**: 1  

> **Pages**: 722-739 

> **DOI**:: 10.1093/mnras/stad171   

  
> [!Abstract]

>

> Several recent simulations of galaxy formation predict two main phases of supermassive black hole (BH) accretion: an early, highly intermittent phase (during which BHs are undermassive relative to local scaling relations), followed by a phase of accelerated growth. We investigate physical factors that drive the transition in BH accretion in cosmological zoom-in simulations from the FIRE project, ranging from dwarf galaxies to galaxies sufficiently massive to host luminous quasars. The simulations model multichannel stellar feedback, but neglect AGN feedback. We show that multiple physical properties, including halo mass, galaxy stellar mass, and depth of the central gravitational potential correlate with accelerated BH fuelling: constant thresholds in these properties are typically crossed within ∼0.1 Hubble time of accelerated BH fuelling. Black hole masses increase sharply when the stellar surface density in the inner 1 kpc crosses a threshold $\Sigma^\star _{1\,\rm kpc}\approx 10^{9.5} \, {\rm M_{\odot }}\,{\rm kpc}^{-2}$, a characteristic value above which gravity prevents stellar feedback from ejecting gas, and similar to the value above which galaxies are observed to quench. We further show that accelerated BH growth correlates with the emergence of long-lived thin gas discs, as well as with virialization of the inner circumgalactic medium. The halo mass Mhalo ∼ 1012 M⊙ and stellar mass M* ∼ 1010.5 M⊙ at which BH growth accelerates correspond to ∼L⋆ galaxies. The fact that stellar feedback becomes inefficient at ejecting gas from the nucleus above this mass scale may play an important role in explaining why AGN feedback appears to be most important in galaxies above L⋆.

>.



# Annotations%% begin annotations %%





%% end annotations %%
