
---
**Title**:: Deep Kernel Learning 

tags: #Computer-Science-Machine-Learning #Computer-Science-Artificial-Intelligence #Statistics-Methodology #GP-Model 

citekey: wilsonDeepKernelLearning2015

collection:

- Papers to Read

status: unread

dateread:

---
# Notes
## Abstract
- Introduce scalable deep kernels combine structural properties of 
	- Deep learning architecture
	- Non-parametric flexibility of kernel methods
- Transform inputs of a spectral mixture base kernel with a deep architecture with
	- Local kernel interpolation
	- Inducing points
	- Structure exploiting algebra
- These kernels can be used as a drop-in replacement for standard kernels
- Learn properties with marginal likelihood of a [[Gaussian Process Model|Gaussian process]]
## Main Paper
### Introduction
#### Deep Kernel Learning
- Start from base kernel $k(\boldsymbol{x}_{i},\boldsymbol{x}_{j}|\boldsymbol{\theta})$ with hyperparameters $\boldsymbol{\theta}$
- Transform inputs $\boldsymbol{x}$ with $k(\boldsymbol{x}_{i},\boldsymbol{x}_{j}|\boldsymbol{\theta})\to k(g(\boldsymbol{x}_{i},\boldsymbol{w}),g(\boldsymbol{x}_{j},\boldsymbol{w})|\boldsymbol{\theta},\boldsymbol{w})$
	- $g(\boldsymbol{x},\boldsymbol{w})$ is a non-linear mapping given by a deep architecture parametrized by weights $\boldsymbol{w}$
- To improve flexibility use a spectral mixture base kernels: $k_{\mathrm{SM}}(\boldsymbol{x,x'|\theta})=\sum_{q=1}^{Q}a_{q} \dfrac{|\Sigma_{q}|^{1/2}}{(2\pi)^{D/2}}\exp(-\dfrac{1}{2}||\Sigma_{q}^{1/2}(\boldsymbol{x}-\boldsymbol{x}')||^{2})\cos(\boldsymbol{x}-\boldsymbol{x}',2\pi \boldsymbol{\mu}_{q})$
	- $a_{q}$ are mixture weights
	- $\Sigma_{q}$ are band widths (inverse length scales)
	- $\boldsymbol{\mu}_{q}$ are frequencies
- SM kernel discovers quasi-periodic stationary structure succinctly and interpretably 
- Deep learning transformation captures non-stationary and hierarchal structure
- Use the deep kernel as the covariance function of a Gaussian process to model data
### Discussion/Conclusion
- Major challenge in developing expressive kernel learning approaches is Euclidean and absolute distance based metrics 
- But these new kernels can just be dropped in in place of standard kernels with improved results
## Questions
- 

> [!Cite]

Wilson, Andrew Gordon, Zhiting Hu, Ruslan Salakhutdinov, and Eric P. Xing. “Deep Kernel Learning.” arXiv:1511.02222. Preprint, arXiv, November 6, 2015. [https://doi.org/10.48550/arXiv.1511.02222](https://doi.org/10.48550/arXiv.1511.02222).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Wilson, A]] 
**Author**: [[Files/Authors/Hu, Z]] 
**Author**: [[Files/Authors/Salakhutdinov, R]] 
**Author**: [[Files/Authors/Xing, E]] 


> **Year**: 2015  

> **Citekey**: wilsonDeepKernelLearning2015 

> **itemType**: preprint 

> **DOI**:: 10.48550/arXiv.1511.02222   

  
> [!Abstract]

>

> We introduce scalable deep kernels, which combine the structural properties of deep learning architectures with the non-parametric flexibility of kernel methods. Specifically, we transform the inputs of a spectral mixture base kernel with a deep architecture, using local kernel interpolation, inducing points, and structure exploiting (Kronecker and Toeplitz) algebra for a scalable kernel representation. These closed-form kernels can be used as drop-in replacements for standard kernels, with benefits in expressive power and scalability. We jointly learn the properties of these kernels through the marginal likelihood of a Gaussian process. Inference and learning cost $O(n)$ for $n$ training points, and predictions cost $O(1)$ per test point. On a large and diverse collection of applications, including a dataset with 2 million examples, we show improved performance over scalable Gaussian processes with flexible kernel learning models, and stand-alone deep architectures.

>.



# Annotations%% begin annotations %%





%% end annotations %%
