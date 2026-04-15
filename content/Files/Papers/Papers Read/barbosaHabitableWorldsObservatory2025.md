
---
**Title**: Towards the Habitable Worlds Observatory: 1D CNN Retrieval of Reflection Spectra from Evolving Earth Analogs 

tags: #Astrophysics-Earth-and-Planetary-Astrophysics #paper 

citekey: barbosaHabitableWorldsObservatory2025

collection:

- Papers Read

status: unread

dateread:

---
# Notes
## Abstract
- Using a 1D CNN can rapidly retrieve key planetary parameters from reflected-light spectra
	- Infers 6 molecular abundances
	- Radius
	- Gravity
	-  Surface pressure 
	- Temperature
- Applied to reflection spectra of Earth-like exoplanets generated for Archean, Proterozoic and Modern eras
- Inference is done with Monte Carlo Dropout
	- Allows for uncertainty estimation very quickly
- Interpret the model with integrated gradients shows model bases predictions on physically meaningful features
	- Fraunhofer A band for O2
	- Hartley Huggins band for O3
## Main Paper
- 
## Conclusion
- Much faster than traditional Bayesian methods running on the order of seconds compared to hours or days
- Performance is dependent on spectral signature strength
- Model underestimates epistemic variance (model uncertainty)
- Future work
	- More accurate model of atmospheric composition
		- Vertical atmospheric gradients
		- Multiple scattering by clouds and hazes
	- Model underestimates uncertainties

> [!Cite]

Barbosa, Sarah G. A., Raissa Estrela, Paulo C. F. da Silva Filho, and Daniel B. de Freitas. “Towards the Habitable Worlds Observatory: 1D CNN Retrieval of Reflection Spectra from Evolving Earth Analogs.” arXiv:2508.00076. Preprint, arXiv, July 31, 2025. [https://doi.org/10.48550/arXiv.2508.00076](https://doi.org/10.48550/arXiv.2508.00076).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Barbosa, S]] 
**Author**: [[Files/Authors/Estrela, R]] 
**Author**: [[Files/Authors/Filho, P]] 
**Author**: [[Files/Authors/Freitas, D]] 


> **Year**: 2025  

> **Citekey**: barbosaHabitableWorldsObservatory2025 

> **itemType**: preprint 

> **DOI**:: 10.48550/arXiv.2508.00076   

  
> [!Abstract]

>

> Upcoming direct-imaging missions like the Habitable Worlds Observatory (HWO) aim to characterize dozens of Earth-like exoplanets by capturing their reflected-light spectra. However, traditional atmospheric retrieval frameworks are too computationally intensive to explore the high-dimensional parameter spaces such missions will generate. Here, we present a one-dimensional convolutional neural network (1D CNN), trained on over one million synthetic, noise-injected spectra simulating Archean, Proterozoic, and Modern Earth analogs, as observed by LUVOIR-B (0.2-2.0 $\mu$m) and HabEx/SS (0.2-1.8 $\mu$m). Our model simultaneously infers six molecular abundances (including biosignatures O$_2$ and O$_3$) along with radius, gravity, surface pressure, and temperature. Inference on unseen test data is performed via Monte Carlo Dropout, enabling uncertainty estimation across thousands of realizations within seconds. The network performs best where spectral features are prominent, accurately recovering CH$_4$ and CO$_2$ in Archean atmospheres and O$_2$ and O$_3$ in Modern cases, while avoiding false positives and outputting near-zero abundances in scenarios of true absence such as Archean O$_2$ and O$_3$. Interpretation via Integrated Gradients confirms that the model bases its predictions on physically meaningful features, including the Fraunhofer A band for O$_2$, and the Hartley-Huggins band for O$_3$. Credibility curve analysis indicates that O$_3$ remains retrievable across a wide range of stellar types and distances, while O$_2$ is detectable out to 12 pc around FG stars. These results elevate the CNN from proof of concept to a mission-ready retrieval engine, capable of processing direct-imaging spectra with HWO on an operational cadence.

>.



# Annotations%% begin annotations %%





%% end annotations %%
