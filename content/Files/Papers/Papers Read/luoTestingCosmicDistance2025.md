
---
**Title**:: Testing the Cosmic Distance Duality Relation with Neural Kernel Gaussian Process Regression 

tags: Astrophysics - Cosmology and Nongalactic Astrophysics

citekey: luoTestingCosmicDistance2025

collection:

- Papers to Read

status: unread

dateread:

---
# Notes
## Abstract
- Test the cosmic distance duality relation with supernova data and BAO measurements
- To resolve redshift mismatch use method called Neural Kernel Gaussian Process Regression (NKGPR)
	- Uses 2 neural networks
	- Simultaneously learns mean an dkernel functions of a [[Gaussian Process Model|Gaussian process]]
	- Mitigates trend mismatches and removes need for manual kernel selection
## Main Paper
### Introduction
- [[Gaussian Process Model|GPR]]
	- Results become unreliable with large uncertainties at high redshift with sparse data
	- Choice of kernel influences reconstruction results and is subjective
- ANNs (artificial neural networks $\equiv$ neural networks)
	- Can automatically learn complex relationships from observational data without relying on cosmological model assumptions
	- But it is difficult to directly account for the correlations among observational data
	- Interpretability of generated errors is not as good as a GPR
- Deep kernel learning was introduced to combine GPR and ANN
	- NN maps the input data into high dimensional feature space
	- This allows GPR to capture more complex patterns
	- But DKL remains dependent on predefined kernel functions limiting flexibility
- Introduce NKGPR
	- Uses 2 dedicated ANNs to learn kernel and mean functions directly from data
	- To guarantee symmetry and positive semi-definiteness in the kernel output a lower triangular matrix which is multiplied by its transpose
	- Bayesian inference is performed over the learned mean and covariance functions
## Conclusion
- Use NKGPR to reconstruct apparent magnitude from Panethon data and find that tehy are consistent at low redshift and provide reliable extrapolation at high redshift
- NKGPR exhibits improved smoothness and uncertainty control compared to traditional methods
- Several challenges #future-work 
	- Limited scalability and adaptability to larger datasets 
		- Current implementation fixes covariance matrix dimension at 200
			- Done to balance computational cost and performance
		- Also $O(n^3)$ complexity from Cholesky decomposition
		- Could explore low-rank approximations or sparse GP methods
	- To mitigate structural issues in the predicted covariance matrix introduced scaling matrix $S_{i,j}=\dfrac{1}{\sqrt{ i+j+1 }}$ 
		- Lacks formal theoretical derivation limiting robustness
		- More direct approach would be to replace generation of a lower triangular matrix with generation of a full 200x200 matrix and then construct covariance matrix by multiplying with its own transpose (but this increases computational cost/complexity)

> [!Cite]

Luo, Xin, and Nan Liang. “Testing the Cosmic Distance Duality Relation with Neural Kernel Gaussian Process Regression.” arXiv:2508.07040. Preprint, arXiv, August 9, 2025. [https://doi.org/10.48550/arXiv.2508.07040](https://doi.org/10.48550/arXiv.2508.07040).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Luo, X]] 
**Author**: [[Files/Authors/Liang, N]] 


> **Year**: 2025  

> **Citekey**: luoTestingCosmicDistance2025 

> **itemType**: preprint 

> **DOI**:: 10.48550/arXiv.2508.07040   

  
> [!Abstract]

>

> In this work, we test the cosmic distance duality relation (CDDR) by combining Pantheon+ Type Ia supernova (SNe Ia) data and DESI DR2 baryon acoustic oscillation (BAO) measurements. To resolve the redshift mismatch between the two datasets, we develop a new method called Neural Kernel Gaussian Process Regression (NKGPR), which uses two neural networks to simultaneously learn the mean and kernel functions of a Gaussian process. This approach improves upon traditional Gaussian process regression by mitigating trend mismatches and removing the need for manual kernel selection. We investigate possible deviations from the CDDR by adopting three parameterizations of the deviation function and constrain the model-independent parameter $\eta_0$ through a marginalized likelihood analysis. Our results show no significant departure from the expected relation, confirming the consistency of the CDDR within current observational uncertainties.

>.



# Annotations%% begin annotations %%





%% end annotations %%
