
---
**Title**:: A statistical model of stellar variability. I. FENRIR: a physics-based model of stellar activity, and its fast Gaussian process approximation 

tags: #Astrophysics-Instrumentation-and-Methods-for-Astrophysics #Astrophysics-Solar-and-Stellar-Astrophysics #Astrophysics-Earth-and-Planetary-Astrophysics #Statistics-Applications #Mathematics-Statistics-Theory #Statistics-Statistics-Theory 

citekey: haraStatisticalModelStellar2025

collection:

- Papers to Read

status: unread

dateread:

---
# Notes
## Abstract
- Goal is to build formalism to allow transfer of knowledge of stellar activity into practical data analysis methods
- Want to obtain kernels with physical parameters
	- Better modeling signals of stellar origin to find smaller exoplanets
	- Extracting information about the star from the statistical properties of the data
- Use: photometry, RV, activity indicators to build **FENRIR**
	- Compute analytically the covariance of this process
	- Implement in S+LEAF framework to reduce likelihood evaluations from $O(N^3)$ to $O(N)$
## Main Paper
### Introduction
- Stellar signals
	- Astroseismic signals 
		- Can be averaged out by tuning the integration time to a few oscillations
		- Can also model with [[Quasi-periodic kernel|QP]]-[[Gaussian Process Model|GP]]
	- Convection causes [[Stellar Granulation]]
	- Spots and [[Facula]]
		- Rate and properties vary with the magnetic cycles of the stars
	- In this work discuss effects of stellar activity: spots and faculae and present model for granulation but do not discuss acoustic oscillations
	- Standard process to model them with stationary gaussian process
		- Covariance of stellar signal sampled at 2 epochs separated by time interval $\Delta t$ or equivalently its Fourier transform (power spectrum density)
- When analyzing RV can use:
	- While planets cause pure Doppler shift stellar signals also affect spectral shape
	- Expect non-linear dependences such as phase shifts between RVs and indicators
	- Can simultaneously model the RV indicators and photometry if available
- FENRIR does not start from assumption of Gaussianity
	- Compute analytically mean and covariance to approximate it with a Gaussian process
	- Compute higher order cumulants of the model to see information from the non Gaussianity
### Statistical Framework
- **Finite Energy Random Impulse Response (FENRIR)**
	- Stellar activity affects several *observables*
		- Radial velocity
		- Photometry
		- Activity indicators
	- The time scales corresponding to one observable is a *channel*
	- Because stellar surface changes unpredictably the channels can be considered a random processes which we want to describe
	- Model must satisfy
		- Effect of the stellar feature on the channels must depend on its physical parameters as well as stellar parameters
		- Feature parameters shall be allowed to be drawn from a parametrized distribution
		- The distribution of stellar features and the rate at which they appear shall depend on time
		- Properties of stellar features shall be allowed to depend on the features already present
	- Assume 2 channels for clarity
		- Effect of stellar activity on two channels is $y(t)$ and $z(t)$
		- Assume stellar feature has parameters $\gamma$ 
			- Affects channels $y$ and $z$ with $g(t,\gamma)$ and $h(t,\gamma)$
			- Contains but isn't limited to longitude area and lifetime
		- Stellar features are transient and if they appear at times $t_{k}$ the effects are:
			- $y(t)=\sum_{k=-\infty}^{+\infty}g(t-t_{k},\gamma(t_{k}))$
			- $z(t)=\sum_{k=-\infty}^{+\infty}h(t-t_{k},\gamma(t_{k}))$
			- $\gamma(t_{k})\sim p(\gamma,|t_{k},\eta)$
				- Parameters are drawn from probability distribution
				- $\eta$ is a vector of parameters describing the distribution (hyperparameters of the GP modeling $y(t)$ and $z(t)$)
		- Stellar features appear at non stationary rate $\lambda(t)$ so the probability of feature occurring after one at $t_{0}$: $p(t|t_{0})=\lambda(t_{0}+\Delta t)e^{-\int_{0}^{t+\Delta t}\lambda(t)dt}$
			- Number of features $N$ in time interval $[t_{1},t_{2}]$ follows poisson distribution of $\Lambda=\int_{t_{1}}^{t_{2}}\lambda(t)dt$
			- Times of appearance of a spot $t_{i,i=1..N}$ are drawn independently from $\dfrac{\lambda(t)}{\Lambda}$
- **Using FENRIR models**
	- Trying to determine exactly how many features affect the dataset would give maximum information but there is a degeneracy and is computationally impractical
	- Instead try to find spectral variability indictor 
		- Effect of it on the data $h(t,\gamma)$ is such that the effect of the feature on the signal of interest $g(t,\gamma)$ is proportional to $h(t,\gamma)$
		- If the SNR is good enough can potentially estimate the effect of stellar variability on RV or photometry with a linear scaling with the indicator
	- Not clear if representing stellar signals as linear combinations of activity indicators is realistic. Can also introduce extra noise/uncertainty
	- More principled method
		- Model simultaneously channels $y(t)$ and $z(t)$ and more generally $M$ channels $y_{j}(t);\;j=1\dots M$ with a likelihood function
		- Want to characterize joint statistical distribution of the vector with $MN$ components: $Y=(y_{j}(t_{i}))_{i=1\dots N,j=1\dots M}$ as a function of the statistical properties of the features $\eta$
		- Ideally $p(Y|\eta)$
		- Can further generalize to $p(Y|\eta,x)$ where x is (number of planets, periods, masses radii, eccentricities...)
		- To gain info about $x$ and $\eta$ compute posterior distribution $p(\eta,x|Y)$
		- Then marginalize (integrate) with respect to $\eta$ or $x$ if for planets or star respectively
	- Different channels are described by multivariate [[Gaussian Process Model|GP]]
		- Likelihood is a Gaussian multivariate distribution
		- $\mathbb{E}$ is the expectance $y_{i}(t),i\dots n$ are the different channels
		- Mean of $y(t)$ process is: $\mathbb{E}_{\eta}\{y(t_{a})\}=\iint g(t_{a}-t,\gamma)\lambda(t)p(\gamma|t,\eta)dtd\gamma$
		- Covariance of $y(t)$: $\mathrm{Cov}_{\eta}(y(t_{a},y(t_{b})))=\iint g(t_{a}-t,\gamma)g(t_{b}-t,\gamma)\lambda(t)p(\gamma|t,\eta)dtd\gamma$
		- To get mean and covariance of $z(t)$ replace $g(t)$ with $h(t)$
		- Covariance of $y(t_{a})$ and $z(t_{b})$: $\mathrm{Cov}_{\eta}(y(t_{a},z(t_{b})))=\iint g(t_{a}-t,\gamma)h(t_{b}-t,\gamma)\lambda(t)p(\gamma|t,\eta)dtd\gamma$
		- If process is stationary: $\mathrm{Cov}(y(t_{a},y(t_{b})))=k(|t_{a}-t_{b}|)$
	- To avoid losing information not only calculate the covariance but also higher order cumulants of $y(t)$
		- Cumulant of order $n+m$ of process $y(t)$ and $z(t)$ sampled respectively at $n\geq 0$ times $(t_{i})_{i=1..n}$ and $m\geq 0$ times $(t'_{i})_{i=1..m}$
		- $\kappa_{\eta}(y(t_{1}),y(t_{2})),\dots,y(t_{n}),z(t'_{1}),z(t'_{2}),\dots,z(t'_{m})=\iint g(t-t_{1},\gamma)\dots g(t-t_{n},\gamma)h(t-t'_{1},\gamma)\dots h(t-t_{m}',\gamma)\lambda(t)p(\gamma|t,\eta)dtd\gamma$
	- To model stellar variability signals need sum of at least two FENRIR processes
		- Granulation
		- Effect of spots and faculae
		- If processes are independent the cumulants of their sum is the sum of their cumulants
- **Gaussian process representation**
	- Time series $y(t)$ and $z(t)$ sampled at $(t_{i})_{i\dots q}$ 
	- To analyze jointly compute the likelihood of $Y=(y(t_{i}),z(t_{i}))_{i=1\dots q}$ with $2q$ components
	- $p(Y|\eta)= \dfrac{e^{-1/2Y^T V^{-1}(\eta)Y}}{\sqrt{ 2\pi }^{2q}|V(\eta)|}$
		- Covariance matrix $V$ is a $2q\times 2q$ matrix
	- Generally:
		- Analyze jointly channels $y(t)$ and $z_{j}(t)$ for $j=1\dots p$
		- Impulse responses $g$ and $h_{j}$
		- Then dataset $Y$ is stacked $m+1$ vectors 
		- Want to compute $pq\times pq$ covariance matrix made up of $p\times p$ blocks of $q\times q$ matrices
			- Parametrized by $i,j$ such that its element on row $n$ column $m$ is given by:
			- $V_{nm}^{ij}(\eta)=\iint g(t_{n}-t,\gamma)h_{j}(t_{m}-t,\gamma)\lambda(t)p(\gamma|t,\eta)dtd\gamma$
		- In practice using new covariances is exactly the same as using existing kernels like the [[Quasi-periodic kernel]] *except* hyperparameters $\eta$ are the parameters of distribution of stellar feature
	- To avoid the $O(N^3)$ performance of matrix inversion and do linear time follow below conditions
		- Effect of single feature without limb-darkening: $g_{0}(t,\gamma)=W(t)\boldsymbol{1}_{vis}(t)\sum_{k=1}^{d}a_{k}(\gamma)\cos k\omega t+b_{k}(\gamma)\sin k\omega t$
			- $\omega$ rotation frequency of star
			- $W(t)$ modulates the intensity of the signal
			- $\boldsymbol{1}_{vis}$ a function equal to one when the feature is visible and 0 otherwise
		- Longitude ate which a feature attains its maximal size is random on $[0,2\pi]$
		- Effect of differential rotation is neglected
### Physical model of magnetic activity signals
- **Spots and faculae**
	- Regions with magnetic field stronger than the continuum
	- Affect global flux of star as they pass through visible hemisphere
	- Break imbalance of approaching and receding limb of star (doppler signature)
	- Magnetic field inhibits convection motion of plasma
- **Impulse response**
	- Assume that the effect of a stellar magnetic region is multiplied by a certain limb-darkening law
	- Effect of a given magnetic region in RV is a weighted sum of the photometric and convective blueshift inhibition effect
- **Limb-darkening**
	- Assume this effect is multiplicative chanign the amplitude of the RV and photometric signals
	- $l(J)=\sum_{k=0}^{d}a_{k}J^k$
		- $J(\bar{i},\delta,\phi)=\sin \bar{i}\sin \delta+\cos \bar{i}\cos\delta \cos \phi$
		- Also $J=\cos \psi$ with $\psi$ being the angle between the line of sight and the normal to the magnetic region
- **Window Function**
	- Define $W^\tau(t)$ grasping the increase and decrease in intensity as spots and faculae grow and vanish
	- Consider three types of window functions
		- One sided exponential
			- Null then with exponential decay
		- Asymmetric exponential
		- Symmetric exponential
- **Group of Spots and Faculae**
	- Consider $g$ the effect of a group of spots
	- Assume impulse response of form $\tilde{g}(t;y,(a_{i})_{i=1\dots n})=g(t;\gamma_{i})+\alpha g(t-\dfrac{P}{2};\gamma_{i})$
		- Parameter $\alpha$ can be random controlled by $p(\alpha|\eta)$
- **Overall impulse response**
	- Global effect of spot/facula on RV is linear combination of $g_{ph}$ and $g_{cb}$
	- Assume common limb-darkening law for all 3 signals and $\phi=\omega t$
	- See paper for full expression of effect of spot/facula and impulse response on RV and flux
- **Rate** $\lambda(t)$
	- Consider the rate of apperance of spots is $\lambda(t)=A(1+\cos{\dfrac{2\pi}{Pt}})$
		- Could also consider $\lambda(t)$ as a gaussian process [[camachoModellingStellarActivity2023]]
- **Distribution of spot and faculae parameters**
	- Randomly draw longitude each time a new spot or faculae is drawn
	- Also assume that longitude at which the feature reaches its maximal area is uniformly distributed on $[0,2\pi]$
		- Partially untrue at least for sun
		- Active regions tend to appear near existing active regions on active longitudes #future-work 
	- Statistical distribution of spots and faculae should change with time and varies with stellar activity
- **Effects not included** #future-work 
	- Angular velocity of solar surface depends on latitude
	- Large spots the assumptions that they are pointwise break down
### Discussion
- [[Stellar Granulation]]
	- Convection pattern at the surface of the star creates a granulation pattern 
		- Rising hot gas is at the center of the granule
		- Cools down and goes downward at its periphery
	- Also super-granulation and maybe meso-granulation
	- Modeled in the same way: $g'(t,\gamma)=P(t,\gamma)W(t,\gamma)$
		- $W(t,\gamma)$ models combined effect of the variation of brightness and area of the granule as a function of time
		- $P(t,\gamma)$ is the periodic part due to stellar rotation and projection effect
	- Although granules are short lived (~15min) they appear in the same location 
		- Assume when granule appears at time $t_{0}$ N granules with the same properties will appear following at time $t_{i}$ with a rate of $\lambda$ between $t_{0}$ and $t_{0}+T$
		- Impulse response: $g_{gran}(t,\gamma)=\sum_{i=0}^{N}P(t,\gamma)W(t-t_{i})$
		- $T$ is small compared to stellar rotation period so can consider star stationary
	- Then granulation kernel $k_{gran}(\tau,\gamma)\propto\lambda T\int_{-\infty}^{+\infty}W(t)W(t+\tau)dt+(\lambda T)^{2}\int_{-\infty}^{+\infty} w(t)w(t+\tau)dt$
		- $w(t)=\dfrac{1}{T}\int_{0}^TW(t-u)du$
- **Are stellar signals Gaussian?**
	- Describing non Gaussian processes
		- Stellar activity is often assumed to be a stationary gaussian process
			- Stochastic process $X(t)$ is a gaussian process if for every finite collection of times $t_{1},\dots,t_{n}$ $X(t_{1}),\dots,X(t_{n})$ has a Gaussian multivariate distirbution
			- Stationary process is such that the distribution of $X(t+\tau_{1}),\dots,X(t+\tau_{n})$ doesn't depend on $t$
			- If both gaussian and stationary fully characterized by mean and kernel functions
		- The stellar activity model described here does not guarantee that for any finite times the distribution should be Gaussian
		- Stellar activity signals cannot be strictly Gaussian
		- To loose the assumption of Gaussianity use notion of cumulants and their Fourier transform (the polyspectra)
		- Cumulants are useful as a Gaussianity test as the cumulants of order $\geq 3$ are always 0
	- Poisson rate and asymmetry
		- Increasing rate $\lambda$ makes the signal more Gaussian
## Conclusion
- Initial aim is to build a representation of stellar activity in a form dictated by physical considerations
- FENRIR model represents observation channels (RVs, photometry, activity indicators etc) with three ingredients
	- Effect of a given stellar feature as a function of its parameters called the *impulse*
	- The statistical distribution of the feature parameters knowing some hyperparameters $\eta$ 
	- The rate at which features appear which might vary over the magnetic cycle
- Express the model in the S+LEAF framework so the likelihood evaluation is cost linear in number of observations
- If possible to constrain the three ingredients get a model with 2 advantages
	- Greater ability to correct stellar signal and find smaller planets
	- Possibility to perform "statistical Doppler imaging"
		- Retrieving statistical properties of spots rather than their instantaneous values

> [!Cite]

Hara, Nathan C., and Jean-Baptiste Delisle. “A Statistical Model of Stellar Variability. I. FENRIR: A Physics-Based Model of Stellar Activity, and Its Fast Gaussian Process Approximation.” _Astronomy & Astrophysics_ 696 (April 2025): A141. [https://doi.org/10.1051/0004-6361/202346391](https://doi.org/10.1051/0004-6361/202346391).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Hara, N]] 
**Author**: [[Files/Authors/Delisle, J]] 


> **Year**: 2025  

> **Citekey**: haraStatisticalModelStellar2025 

> **itemType**: journalArticle 

> **Journal**: *Astronomy & Astrophysics* 

> **Volume**: 696  

> **Pages**: A141 

> **DOI**:: 10.1051/0004-6361/202346391   

  
> [!Abstract]

>

> The detection of terrestrial planets by radial velocity and photometry is hindered by the presence of stellar signals. Those are often modeled as stationary Gaussian processes, whose kernels are based on qualitative considerations, which do not fully leverage the existing physical understanding of stars. Our aim is to build a formalism which allows to transfer the knowledge of stellar activity into practical data analysis methods. In particular, we aim at obtaining kernels with physical parameters. This has two purposes: better modelling signals of stellar origin to find smaller exoplanets, and extracting information about the star from the statistical properties of the data. We consider several observational channels such as photometry, radial velocity, activity indicators, and build a model called FENRIR to represent their stochastic variations due to stellar surface inhomogeneities. We compute analytically the covariance of this multi-channel stochastic process, and implement it in the S+LEAF framework to reduce the cost of likelihood evaluations from $O(N^3)$ to $O(N)$. We also compute analytically higher order cumulants of our FENRIR model, which quantify its non-Gaussianity. We obtain a fast Gaussian process framework with physical parameters, which we apply to the HARPS-N and SORCE observations of the Sun, and constrain a solar inclination compatible with the viewing geometry. We then discuss the application of our formalism to granulation. We exhibit non-Gaussianity in solar HARPS radial velocities, and argue that information is lost when stellar activity signals are assumed to be Gaussian. We finally discuss the origin of phase shifts between RVs and indicators, and how to build relevant activity indicators. We provide an open-source implementation of the FENRIR Gaussian process model with a Python interface.

>.



# Annotations%% begin annotations %%





%% end annotations %%
