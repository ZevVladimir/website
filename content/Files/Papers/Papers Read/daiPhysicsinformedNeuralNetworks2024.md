
---
Title: Physics-informed neural networks in the recreation of hydrodynamic simulations from dark matter

tags: #PINN #paper

citekey: daiPhysicsinformedNeuralNetworks2024

collection:

- Papers to Read

status: unread

dateread:

---
# Abstract
- Present the application of PINNs to baryon painting onto DM simulations
- Inject theory of baryon conversion efficiency into the loss function
- Also have a prediction comparison to the Kullback-Leibler divergence enforcing scatter reproduction
- Using the SIMBA simulations for baryonic properties they are able to predict them from the DM halo and successfully recover the metallicity relation
# Introduction
- Incorporate PINNs into DM only sims to add baryonic properties
	- Modify training process by extending the loss function
	- First inject physical theory into the model by adding the stellar-halo mass relation (SHMR) to the training
	- Second fores the model to recreate the scatter of the hydrodynamic simulations by including the Kullback-Leibler divergence
		- Use it as an asymmetric distance measure between approximations of the probability distributions between training targets and model predictions
- Adding domain knowledge to the loss function improves generalizability of PINNs
	- Reduces bias component of error
	- Keeps variance component under control
# Discussion
- Cosmological simulations are limited in the physics they implement and their assumptions/simplifications which then can get fed into the PINNs
- #future-work 
	- Add more domain knowledge to the loss function. 
	- Use more complex approximations allowing for non-Gaussian features/multimodal distributions
# Conclusion
- Use PINNs to predict baryonic properties based on DM halo variables
- Add the SHMR to parameterize the instantaneous baryon conversion efficiency
- Enforce baryonic scatter using KLD
- Demonstrate that PINNs offer a way to bake theoretical constraints and distributional adherence into NN architectures
- 
# Questions
- How much information can you insert into the loss function? Is there a smarter/better way to handle such a loss function rather than just adding in different parts?

> [!Cite]

Dai, Zhenyu, Ben Moews, Ricardo Vilalta, and Romeel Davé. “Physics-Informed Neural Networks in the Recreation of Hydrodynamic Simulations from Dark Matter.” _Monthly Notices of the Royal Astronomical Society_ 527, no. 2 (2024): 3381–94. [https://doi.org/10.1093/mnras/stad3394](https://doi.org/10.1093/mnras/stad3394).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Dai, Z]] 
**Author**: [[Files/Authors/Moews, B]] 
**Author**: [[Files/Authors/Vilalta, R]] 
**Author**: [[Files/Authors/Davé, R]] 


> **Date**: 2024-01-11  

> **Citekey**: daiPhysicsinformedNeuralNetworks2024 

> **itemType**: journalArticle 

> **Journal**: *Monthly Notices of the Royal Astronomical Society* 

> **Volume**: 527 

> **Issue**: 2  

> **Pages**: 3381-3394 

> **DOI**:: 10.1093/mnras/stad3394   

  
> [!Abstract]

>

> Physics-informed neural networks have emerged as a coherent framework for building predictive models that combine statistical patterns with domain knowledge. The underlying notion is to enrich the optimization loss function with known relationships to constrain the space of possible solutions. Hydrodynamic simulations are a core constituent of modern cosmology, while the required computations are both expensive and time-consuming. At the same time, the comparatively fast simulation of dark matter requires fewer resources, which has led to the emergence of machine learning algorithms for baryon inpainting as an active area of research; here, recreating the scatter found in hydrodynamic simulations is an ongoing challenge. This paper presents the first application of physics-informed neural networks to baryon inpainting by combining advances in neural network architectures with physical constraints, injecting theory on baryon conversion efficiency into the model loss function. We also introduce a punitive prediction comparison based on the Kullback–Leibler divergence, which enforces scatter reproduction. By simultaneously extracting the complete set of baryonic properties for the simba suite of cosmological simulations, our results demonstrate improved accuracy of baryonic predictions based on dark matter halo properties and successful recovery of the fundamental metallicity relation, and retrieve scatter that traces the target simulation’s distribution.

>.



# Annotations%% begin annotations %%





%% end annotations %%
