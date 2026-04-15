
---
Title: Benchmarking AI-evolved cosmological structure formation

tags: #Astrophysics-Cosmology-and-Nongalactic-Astrophysics #Physics-Computational-Physics #Computer-Science-Machine-Learning  #paper

citekey: dongBenchmarkingAIevolvedCosmological2025

collection:

- Papers to Read

status: unread

dateread:

---
# Abstract
- Use two approaches for generating suitable cosmological matter fields
	- Analytical prescription from Zel'dovich approximation
	- Numerical N-body with particle-mesh
- Evolve the structure with U-Net (convolutional image translation framework)
- Find U-Net works well only for some physical metrics
	- Accuracy worse at increasingly smaller scalesBut with custom density-weighted loss function improve results
# Introduction
- Traditional methods of dealing with computational constraints with running cosmological simulations
	- Simplify computations
		- Lower resolution
		- Simpler physics
	- Reduce number of simulations
		- Adaptive and optimal sampling
		- Use. scaling
	- Replace simulations with a generative model
		- Trained on simulation results
- Want to see if deep learning (DL) models without domain knowledge of cosmology can
	- Capture intricacies of nonlinear gravitational clustering
	- How these emulators can complement standard approaches
- Need to determine if
	- DL results are accurate and physically consistent
	- How to benchmark these models
	- The scalability of the models
		- Larger simulation data
		- Large scale range
- They consider the Zel'dovich approximation and compare the distributions with particle mesh methods
# Discussion
- Emphasize need to have benchmarking capabilities and adapting loss functions to specific fields of interest
- Also important to include physics-inspired constraints
# Conclusion
- 
# Questions
- 

> [!Cite]

Dong, Xiaofeng, Nesar Ramachandra, Salman Habib, and Katrin Heitmann. “Benchmarking AI-Evolved Cosmological Structure Formation.” arXiv:2510.06731. Preprint, arXiv, October 10, 2025. [https://doi.org/10.48550/arXiv.2510.06731](https://doi.org/10.48550/arXiv.2510.06731).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Dong, X]] 
**Author**: [[Files/Authors/Ramachandra, N]] 
**Author**: [[Files/Authors/Habib, S]] 
**Author**: [[Files/Authors/Heitmann, K]] 


> **Date**: 2025-10-10  

> **Citekey**: dongBenchmarkingAIevolvedCosmological2025 

> **itemType**: preprint 

> **DOI**:: 10.48550/arXiv.2510.06731   

  
> [!Abstract]

>

> The potential of deep learning-based image-to-image translations has recently attracted significant attention. One possible application of such a framework is as a fast, approximate alternative to cosmological simulations, which would be particularly useful in various contexts, including covariance studies, investigations of systematics, and cosmological parameter inference. To investigate different aspects of learning-based cosmological mappings, we choose two approaches for generating suitable cosmological matter fields as datasets: a simple analytical prescription provided by the Zel'dovich approximation, and a numerical N-body method using the Particle-Mesh approach. The evolution of structure formation is modeled using U-Net, a widely employed convolutional image translation framework. Because of the lack of a controlled methodology, validation of these learned mappings requires multiple benchmarks beyond simple visual comparisons and summary statistics. A comprehensive list of metrics is considered, including higher-order correlation functions, conservation laws, topological indicators, and statistical independence of density fields. We find that the U-Net approach performs well only for some of these physical metrics, and accuracy is worse at increasingly smaller scales, where the dynamic range in density is large. By introducing a custom density-weighted loss function during training, we demonstrate a significant improvement in the U-Net results at smaller scales. This study provides an example of how a family of physically motivated benchmarks can, in turn, be used to fine-tune optimization schemes -- such as the density-weighted loss used here -- to significantly enhance the accuracy of scientific machine learning approaches by focusing attention on relevant features.

>.



# Annotations%% begin annotations %%





%% end annotations %%
