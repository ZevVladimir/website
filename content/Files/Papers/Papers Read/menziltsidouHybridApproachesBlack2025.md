
---
Title: Hybrid Approaches for Black Hole Spin Estimation: From Classical Spectroscopy to Physics-Informed Machine Learning

tags: #Astrophysics-Instrumentation-and-Methods-for-Astrophysics #Astrophysics-High-Energy-Astrophysical-Phenomena  #Black-Holes #ML  #paper

citekey: menziltsidouHybridApproachesBlack2025

collection:

- Papers to Read

status: unread

dateread:

---
# Notes
## Abstract
- Use a hybrid approach to measure black hole spin
- Integrate theoretical models based on the Teukolsky formalism into Physics-Informed Neural Networks (PINN)
## Main Paper
### Introduction
- Fundamental physical properties of a BH
	- Spin
	- Mass
	- Electric charge
- BHs characterized by
	- Dimensionless Kerr parameter $a=\dfrac{Jc}{GM}$
		- $J$ is the angular momentum
- Observationally determining spin
	- Thermal continuum of accretion disks
	- Relativistic reflection features and high frequency quasi-periodic oscillations in X-ray binaries
### Discussion
- PINN successfully captures spin-sensitive features of the angular Teukolsky solutions
- Limitations
	- Complete perturbed gravitational fields in Kerr spacetime were not addressed
	- Current implementation is more computationally expensive than traditional solvers
## Conclusion
- 
## Questions
- 

> [!Cite]

Menziltsidou, Stella. “Hybrid Approaches for Black Hole Spin Estimation: From Classical Spectroscopy to Physics-Informed Machine Learning.” arXiv:2508.06506. Preprint, arXiv, July 27, 2025. [https://doi.org/10.48550/arXiv.2508.06506](https://doi.org/10.48550/arXiv.2508.06506).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Menziltsidou, S]] 


> **Year**: 2025  

> **Citekey**: menziltsidouHybridApproachesBlack2025 

> **itemType**: preprint 

> **DOI**:: 10.48550/arXiv.2508.06506   

  
> [!Abstract]

>

> The measurement of black hole spin is considered one of the key problems in relativistic astrophysics. Existing methods, such as continuum fitting, X-ray reflection spectroscopy, and quasi-periodic oscillation analysis, suffer from limitations in accuracy, interpretability, and scalability. In this work, a hybrid approach is proposed in which theoretical models based on the Teukolsky formalism are integrated with Physics-Informed Neural Networks (PINNs). A PINN model is developed to solve the linearized spin problem in the scalar case, with physical constraints directly embedded into the training process. Annotated data are not required; instead, the model is trained using the differential operator and boundary conditions as supervision. It is demonstrated that the PINN converges reliably, with residual loss values below 10 and a root mean squared error (RMSE) on the order of $10^{-7}$. Benchmarking results indicate that the proposed method outperforms both classical and data-driven machine learning approaches in terms of AUC and sensitivity, while also exhibiting superior interpretability, generalizability, and adherence to physical principles, with moderate computational cost. Potential extensions include integration with general relativistic magnetohydrodynamics (GRMHD) solvers and application to real observational data. These findings support the viability of physics-based machine learning as a robust framework for accurate and interpretable black hole spin estimation.

>.



# Annotations%% begin annotations %%





%% end annotations %%
