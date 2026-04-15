
---
**Title**:: Efficient modeling of correlated noise - III. Scalable methods for jointly modeling several observables’ time series with Gaussian processes 

tags: #GP-Model #Astrophysics-Instrumentation-and-Methods-for-Astrophysics #RV 

citekey: delisleEfficientModelingCorrelated2022

collection:

- Papers to Read

status: unread

dateread:

---
# Notes
## Abstract
- General way to disentangle stellar activity from planetary signals in RV measurements is to model the RV time series jointly with stellar activity indicators using [[Gaussian Process Model|Gaussian process]]es and their derivatives
- However, this is computational prohibitive for large datasets as it scales as $O(N^3)$
- Present S+LEAF2 which can jointly model several time series with computational cost that scales linearly
## Main Paper
### Introduction 
- RV data corrupted by
	- Photon noise: uncorrelated and so as more data is acquired the desired signal is more apparent
	- Contamination from physical events which is correlated noise
		- Earth's atmosphere
		- Instrumental noise
		- Stellar activity
	- [[Gaussian process regression model|GP Regression]] allows for modeling of complex processes by parametrizing the covariance between measurements instead of using a deterministic model
	- For a GP $G(t)$ measured at times $t_{i}$ and $t_{j}$
		- $G(t_{i})$ and $G(t_{j})$ are assumed to be randomly drawn from a normal distribution
		- They have a covariance $C_{i,j}=k(t_{i},t_{j})$ with k being the kernel
		- GP often assumed to be stationary such that $k$ only depends on the lag $\Delta t=|t_{i}-t_{j}|$ between two measurements
		- Often use [[Quasi-periodic kernel|QP kernel]] 
	- To avoid GPs absorbing signal of interest model the RV time series jointly with activity indicators
		- Model evolution of RV and indicators as
			- $\Delta \mathrm{RV}=V_{c}G(t)+V_{r}G'(t)$
			- $\Delta \mathrm{BIS}=B_{c}G(t)+B_{r}G'(t)$
			- $\Delta \log R_{\mathrm{HK}}'=L_{c}G(t))$
			- For some constants $V_{c},V_{r},B_{c},B_{r},L_{c}$
		- Now hyperparameters are constrained with three time series reducing overfitting
	- This however is $O((3n)^{3})$
	- For GP on a single time series can use [[Celerite kernel]]
	- Can then extend this to more general class of covariance matrices the S+LEAF matrix
	- Here extend celerite and S+LEAF models to account for case of several time series with independent calendars
		- Modeled as a linear combination of several GPs and their derivatives
### The celerite and S+LEAF models for homogenous time series
- Consider time series of measurements $(t_{i},y_{i})(i=1,\dots,n)$ can be modeled by a
	- Deterministic component
		Encompasses the reflex motion due to
		- Companions
		- Systematic velocity of the system
		- Instrumental offsets etc.
	- GP component
		- Used to model physical mechanisms
		- Generally mechanisms that are too poorly understood to be included in the deterministic part
	- Measurement noise
		- Photon nosie
		- Calibration noise
		- etc.
- Express time series as $y_{i}=m(t_{i})+G(t_{i})+\epsilon_{i}$
- Then log-likelihood function of a given set of parameters $\theta$: $\ln \mathcal{L}(\theta)=\ln p(y|\theta)=-\dfrac{1}{2}(y-m_{\theta})^TC_{\theta}^{-1}(y-m_{\theta})-\dfrac{1}{2}\ln \det(2\pi C_{\theta})$
	- $C$ is the total covariance matrix of the time series
		- Split into $C=K+\Sigma$
		- $K$ is the covariance of the GP $G$
			- $K_{i,j}=\mathrm{cov}(G(t_{i}),G(t_{j}))=k(t_{i},t_{j})$
		- $\Sigma$ is the covariance of the noise
			- $\Sigma_{i,j}=\mathrm{cov}(\epsilon_{i},\epsilon_{j})$
#### Celerite model
- If:
	- White noise ($\Sigma=\mathrm{diag}(\sigma^{2})$)
	- Kernel function $k$ follows $k(\Delta t)=\sum_{s<n_{c}}(a_{s}\cos(v_{s}\Delta t)+b_{s}\sin(v_{s}\Delta t))e^{-\lambda_{s}\Delta t}$
- Then
	- $C=\mathrm{diag}(A+\sigma^{2})+\mathrm{tril}(UV^T)+\mathrm{triu}(VU^T)$
	- Not $\mathrm{tril}$ is triangle lower and $\mathrm{triu}$ is triangle upper
	- See text for definition of matrices
- This low-rank representation of the covariance matrix allows to use efficient dedicated algorithms
	- Cholesky decomposition
	- Solving
	- Dot product
	- Determinant
- Memory scales as $O(nr)$
- Computational cost scales as $O(nr^{2})$
- With $r=2n_{c}$
#### S+LEAF model
- Extends celerite to the case of correlated measurement noise
- $\Sigma$ can now be represented by LEAF matrices
	- Sparse matrices where non-zero values are close to the diagonal
- Useful to model calibration noise
- S+LEAF allows for sparse representation of the covariance matrix
### Derivative of a celerite/S+LEAF GP
- Consider GP $G(t)$ whose kernel function $k$ is stationary and has semi-separable decomposition
- Lots of math see the text
- For the GP to be differentiable the initial parameters must verify $\sum_{s<n_{c}}v_{s}b_{s}-\lambda_{s}a_{s}=0$
### S+LEAF2 Extending celerite/S+LEAF to heterogeneous time series
- Assume time series of RVs and indicators: $Y_{i,j}=f_{i}(T_{i,j})+\sum_{k}(a_{k,i}G_{k}(T_{i,j})+\beta_{k,i}G'_{k}(T_{i,j}))+\epsilon_{i,j}$
	- $(T_{1,..},Y_{1,..})$ is the RV time series and $T_{\mathbf{i..},Y_{\mathbf{i}..}}$ are the indicator time series (i>1)
	- $f_{i}$ is the determinist part of the model for the time series $i$
	- $G_{k}$ are independent GP
	- $\epsilon$ is the measurement noise
- Times and number of measurements don't have to be the same for all the time series
#### Semiseparable representation of the model
- Merge all time vectors $T_{i}$ into a single vector $t$ and all data vectors $Y_{i}$ into a single vector $y$
- Sort the measurements by increasing time
- For measurement $(t_{k},y_{k})$ denote by $\mathcal{I}_{k}$ index of the original time series the measurement belongs to and $\mathcal{J}_{k}$ index of the measurement in the original time series
- Rewrite model: $y_{k}=f_{\mathcal{I}_{k}}(t_{k})+\alpha_{k}G(t_{k})+\beta_{k}G'(t_{k})+\epsilon_{\mathcal{I}_{k}\mathcal{J}_{k}}$
	- $\alpha_{k}=\alpha_{\mathcal{I}_{k}}$
	- $\beta_{k}=\beta_{\mathcal{I}_{k}}$
- Then with math can assume that GP $G$ can be modeled by a semiseparable kernel
- $C=\mathrm{diag}(\mathcal{A})+\mathrm{tril}(\mathcal{UV}^T)+\mathrm{triu}(\mathcal{VU}^T)+\Sigma$
	- $\mathcal{A}=\alpha^{2}+A+\beta^{2}*B$
	- $\mathcal{U}=\alpha*U+\beta*U'$
	- $\mathcal{V}=\alpha*V+\beta*V'$
- Keeping the rank of the covariance matrix as low as possible significantly improves the performance scales with $O(nr^{2})$ with $r$ being the rank
### Application: Reanalysis of HD 13808
- Use kernel $k(\Delta t)=\sigma^{2} \dfrac{k_{3/2}(\Delta t)+fk_{\mathrm{SHO},\underline{f}.}(\Delta t)+\dfrac{f^{2}}{4}k_{\mathrm{SHO},harm.}(\Delta t)}{1+f+\dfrac{f^{2}}{4}}$
	- Combination of Matern 3/2 kernel and 2 underdamped SHO terms
## Conclusion
- Present S+LEAF2 a GP framework that can model multiple series simultaneously
- Their framework scales linearly with the data set size
- Take into account GP derivatives which is important for modeling stellar activity's effects on RVs
- Also accounts for time series that do not share the same calendar
- Results from periodogram and [[False Alarm Probability|FAP]] approach are consistent with more computer intensive Bayesian evidence calculations using nested sampling

> [!Cite]

Delisle, J.-B., N. Unger, N. C. Hara, and D. Ségransan. “Efficient Modeling of Correlated Noise - III. Scalable Methods for Jointly Modeling Several Observables’ Time Series with Gaussian Processes.” _Astronomy & Astrophysics_ 659 (March 2022): A182. [https://doi.org/10.1051/0004-6361/202141949](https://doi.org/10.1051/0004-6361/202141949).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Delisle, J.-B.]] 
**Author**: [[Files/Authors/Unger, N]] 
**Author**: [[Files/Authors/Hara, N. C.]] 
**Author**: [[Files/Authors/Ségransan, D]] 


> **Year**: 2022  

> **Citekey**: delisleEfficientModelingCorrelated2022 

> **itemType**: journalArticle 

> **Journal**: *Astronomy & Astrophysics* 

> **Volume**: 659  

> **Pages**: A182 

> **DOI**:: 10.1051/0004-6361/202141949   

  
> [!Abstract]

>

> The radial velocity method is a very productive technique used to detect and confirm extrasolar planets. The most recent spectrographs, such as ESPRESSO or EXPRES, have the potential to detect Earth-like planets around Sun-like stars. However, stellar activity can induce radial velocity variations that dilute or even mimic the signature of a planet. A widely recognized method for disentangling these signals is to model the radial velocity time series, jointly with stellar activity indicators, using Gaussian processes and their derivatives. However, such modeling is prohibitive in terms of computational resources for large data sets, as the cost typically scales as the total number of measurements cubed. Here, we present S+LEAF 2, a Gaussian process framework that can be used to jointly model several time series, with a computational cost that scales linearly with the data set size. This framework thus provides a state-of-the-art Gaussian process model, with tractable computations even for large data sets. We illustrate the power of this framework by reanalyzing the 246 HARPS radial velocity measurements of the nearby K2 dwarf HD 13808, together with two activity indicators. We reproduce the results of a previous analysis of these data, but with a strongly decreased computational cost (more than two order of magnitude). The gain would be even greater for larger data sets.

>.



# Annotations%% begin annotations %%





%% end annotations %%
