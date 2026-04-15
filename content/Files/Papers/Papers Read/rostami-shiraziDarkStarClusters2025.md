
---
Title: Dark Star Clusters or Ultrafaint Dwarf Galaxies? Revisiting UMa3/U1

tags: #UMaIII/U1 #Dwarf-Galaxies #Star-Clusters #Dark-Star-Cluster #paper

citekey: rostami-shiraziDarkStarClusters2025

collection:

- Papers to Read

status: unread

dateread:

---
# Abstract
- Asses whether $\mathrm{UMaIII/U1}$ is a dark star cluster (DSC) with N-body simulations
- Identify model that reproduces its compact structure and elevated $M_{\mathrm{dyn}}/L$ 
	- Supports self-gravitating cluster origin
- Cluster entered DSC phase $\sim4\mathrm{Gyr}$ ago
- Show DSCs occupy a region overlapping with faint ambiguous satellites in size versus total luminosity (L) and $M_{\mathrm{dyn}}/L-L$ spaces
# Introduction
- Globular clusters (GC)
	- Collisional systems
	- Relax in a period shorter than a Hubble time
	- Heavy homogeneity in stellar population's metallicities
	- Typically $M_{\mathrm{dyn}}/L\approx2M_{\odot}/L_{\odot}$
- Dwarf galaxies (dG)
	- Collisionless
	- Evolve over timescales longer than a Hubble time
	- Contain stars with significant metallicity dispersions
	- Typically $M_{\mathrm{dyn}}/L\approx10^{1}=-10^{4}M_{\odot}/L_{\odot}$
	- More diffuse
- Faint ambiguous satellites are in the region of $r_{h}\lesssim20\mathrm{pc}$ and $L\lesssim10^{3}L_{\odot}$
- [[erraniUrsaMajorIII2024]]
	- Used N-body simulations
	- Showed self-gravitating system in equilibrium would 
		- Exhibit a velocity dispersion of only $\approx50\mathrm{m\;s^{-1}}$
		- Be disrupted by the Galactic tidal field within $\approx0.4\mathrm{Gyr}$
	- Dwarf galaxies in cuspy DM halos
		- Account for long term survival
		- Velocity dispersion of $1-4\mathrm{km\;s^{-1}}$
- Dark star clusters (DSC)
	- Can exhibit extremely high $M_{\mathrm{dyn}}/L$
	- Retention of a substantial BH population (from low natal kicks) triggers assembly of centrally segregated BH subsystem (BHSub)
		- This injects energy into cluster with frequent BH interactions
		- Accelerates evaporation rate of luminous stars
		- Contributes to tidal stripping
	- DSC phase emerges when the BHSub's self depletion timescale surpasses the evaporation timescale of luminous stars
- Here use N-body simulations
	- Investigate whether a cluster in the DSC phase can reproduce observational features of $\mathrm{UMaIII/U1}$
	- Assess broader viability of DSCs as a formation scenario
# 2. Simulations
- Use $\texttt{NBODY7}$
- Initialize cluster with Plummer phase space distribution function
	$$\begin{align}
	\xi(m)\propto m^{-\alpha}:\begin{cases}
	\alpha_{1}=1.3\;0.07\leq \dfrac{m}{M_{\odot }}<0.5 \\
	\alpha_{2}=2.3\;0.50\leq \dfrac{m}{M_{\odot }}<1.0 \\
	\alpha_{3}\;1.00\leq \dfrac{m}{M_{\odot }}<150
	\end{cases}
	\end{align}$$
	- This is different than the IMF from [[devlinReevaluatingUMa3U12025a]]
- Trace orbit backward in time to set initial conditions
- Clusters are embedded in a stable Galactic potential of three parts
	- Central bulge
	- Miyamoto-Nagai disk
	- Phantom logarithmic dark matter halo
- Define scaled DSC lifetime
	- $\tilde{\tau}_{\mathrm{DSC}}=\dfrac{\tau_{\mathrm{DSC}}}{\tau_{\mathrm{Diss}}}$
		- $\tau_{\mathrm{DSC}}$ denotes duration that cluster remains in DSC phase
		- $\tau_{\mathrm{Diss}}$ is the total cluster lifetime
	- Determines how much of a cluster's life time is in the DSC phase
- Assume near-complete retention of BHs formed
# Conclusion
- The dynamical mass-to-light ratio of $\mathrm{UMaIII/U1}$ can also arise in DSCs
	- Here a centrally segregated BHSub is retained due to low natal kicks
	- This heats stellar population driving loss of luminous stars
	- Resulting in being BH dominated with a high $M_{\mathrm{dyn}}/L$
- Most of the models from N body sims fail to match the compactness due to expansion from BHSub energy injection
- Find $M_{i}=10^{5}M_{\odot}$ and $r_{h,i}=8\mathrm{pc}$ the most accurate
- Map the evolutionary trajectories of DSC models in $R_{h}-L$ and $M_{\mathrm{dyn}}/L_{1/2}-L$ parameter spaces
# Questions
- 

> [!Cite]

Rostami-Shirazi, Ali, Hosein Haghi, Akram Hasani Zonoozi, and Pavel Kroupa. “Dark Star Clusters or Ultrafaint Dwarf Galaxies? Revisiting UMa3/U1.” _The Astrophysical Journal Letters_ 989, no. 1 (2025): L14. [https://doi.org/10.3847/2041-8213/adf320](https://doi.org/10.3847/2041-8213/adf320).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Rostami-Shirazi, A]] 
**Author**: [[Files/Authors/Haghi, H]] 
**Author**: [[Files/Authors/Zonoozi, A]] 
**Author**: [[Files/Authors/Kroupa, P]] 


> **Date**: 2025-08-14

> **Citekey**: rostami-shiraziDarkStarClusters2025 

> **itemType**: journalArticle 

> **Journal**: *The Astrophysical Journal Letters* 

> **Volume**: 989 

> **Issue**: 1  

> **Pages**: L14 

> **DOI**:: 10.3847/2041-8213/adf320   

  
> [!Abstract]

>

> Owing to sparse spectroscopic observations, the classification of faint satellites as either dark-matter-dominated dwarf galaxies or self-gravitating star clusters remains unresolved. The recently discovered Ursa Major III/UNIONS 1 (UMa3/U1) object, with its measured velocity dispersion, provides a rare observational anchor in this regime. Despite its cluster-like compactness, its inferred dynamical mass-to-light ratio (MDyn/L) suggests a dark-matter-dominated nature, prompting interpretations of UMa3/U1 as a microgalaxy, though current measurements remain inconclusive. Thousand-level MDyn/L values are not unique to galaxies; self-gravitating dark star clusters (DSCs) can reach comparable levels via energy injection driven by a centrally segregated black hole subsystem (BHSub), which accelerates the evaporation of luminous stars and leads to a supervirial appearance with elevated velocity dispersion. To assess whether UMa3/U1 is a DSC, we conducted direct N-body simulations and identified a model that successfully reproduces both its compact structure and elevated MDyn/L, supporting a self-gravitating cluster origin. We find the cluster entered the DSC phase around 4 Gyr ago, with its luminous stars expected to be depleted within the next 1 Gyr, followed by the gradual disruption of the central BHSub over the subsequent Gyr. We broaden our analysis by mapping DSC evolutionary tracks in the size versus total luminosity (L) and MDyn/L–L spaces, showing that DSCs occupy a region overlapping with faint, ambiguous satellites. In the MDyn/L–L diagram, DSCs trace a transitional channel bridging globular clusters and dwarf galaxies as they rise from MDyn/L ≈ 2 to 104 M⊙/L⊙.

>.



# Annotations%% begin annotations %%





%% end annotations %%
