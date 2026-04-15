
---
Title: PatchNet: A hierarchical approach for neural field-level inference from Quijote Simulations

tags: #Astrophysics-Cosmology-and-Nongalactic-Astrophysics #Computer-Science-Information-Theory #Mathematics-Information-Theory  #paper

citekey: bairagiPatchNetHierarchicalApproach2025

collection:

- Papers to Read

status: unread

dateread:

---
# Notes
## Abstract
- [[Simulation-Based Inference]] provides powerful alternative to traditional methods to learn directly from forward-modeled simulations
- Introduce hierarchical model that integrates small-scale information from field sub-volumes or patches with large scale statistics (power spectrum and bispectrum)
## Main Paper
### Introduction
- Cosmological density field carries information about
	- Origin of primordial fluctuations
	- Energy budget of different components of the universe
	- Physical laws governing its evolution
- Traditional focused on analyzing 2-point correlations
	- Power spectrum $P(k)$ 
	- But this overlooks non-Gaussian information inherent in the DM distribution
	- Have also used higher-order clustering statistics
	- Limitations of perturbation theory to model DM clustering beyond quasi-linear scales
- Field-based approaches have begun to be used
	- Using SBI with normalizing flows or NN
	- But face two key limitations
		- Computationally expensive
		- Require high number of high-fidelity simulations (also expensive)
- Using hybrid-SBI framework addresses this
### Discussion/Conclusion
- Introduce hierarchical approach that integrates field-level information about small-scale structure from sub-volumes (patches) of the density field with the 2-point and 3-point correlations
- Since the power spectrum and bispectrum are sufficient for perturbative large-scale regime but not for the non-linear regime combining them with the field-based summary provides enough information to bridge the gap
- This work is conceptual and for an idealized case
	- Mainly limited by computational expense
## Questions
- 

> [!Cite]

Bairagi, Anirban, and Benjamin Wandelt. “PatchNet: A Hierarchical Approach for Neural Field-Level Inference from Quijote Simulations.” arXiv:2509.03165. Preprint, arXiv, September 3, 2025. [https://doi.org/10.48550/arXiv.2509.03165](https://doi.org/10.48550/arXiv.2509.03165).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Bairagi, A]] 
**Author**: [[Files/Authors/Wandelt, B]] 


> **Year**: 2025  

> **Citekey**: bairagiPatchNetHierarchicalApproach2025 

> **itemType**: preprint 

> **DOI**:: 10.48550/arXiv.2509.03165   

  
> [!Abstract]

>

> \textit{What is the cosmological information content of a cubic Gigaparsec of dark matter? } Extracting cosmological information from the non-linear matter distribution has high potential to tighten parameter constraints in the era of next-generation surveys such as Euclid, DESI, and the Vera Rubin Observatory. Traditional approaches relying on summary statistics like the power spectrum and bispectrum, though analytically tractable, fail to capture the full non-Gaussian and non-linear structure of the density field. Simulation-Based Inference (SBI) provides a powerful alternative by learning directly from forward-modeled simulations. In this work, we apply SBI to the \textit{Quijote} dark matter simulations and introduce a hierarchical method that integrates small-scale information from field sub-volumes or \textit{patches} with large-scale statistics such as power spectrum and bispectrum. This hybrid strategy is efficient both computationally and in terms of the amount of training data required. It overcomes the memory limitations associated with full-field training. We show that our approach enhances Fisher information relative to analytical summaries and matches that of a very different approach (wavelet-based statistics), providing evidence that we are estimating the full information content of the dark matter density field at the resolution of $\sim 7.8~\mathrm{Mpc}/h$.

>.



# Annotations%% begin annotations %%





%% end annotations %%
