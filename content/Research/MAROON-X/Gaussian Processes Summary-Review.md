 # Why you would want GPs?
1. Modeling stellar activity
	- Stellar activity to be modeled
		1. [[Stellar Granulation]]
		2. Star spots
			- Spot sizes
			- Spot distributions
			- Spot lifetime
			- Spot number
			- [[lugerMappingStellarSurfaces2021]]
		3. [[Facula]]
		4. [[Stellar Oscillation]]
	- Stellar activity can impact the radial velocity of the star on scales at or larger than what earth like planets would have
	- Would fit the GP at the same time as keplerian models for the planets
2. Obtain rotational periods of stars (kinda)
	- [[angusInferringProbabilisticStellar2018]]
	- [[stockGaussianProcessesRadial2023]]
3. Learn information about stellar activity and the stellar surfaces
	- [[lugerMappingStellarSurfaces2021]]

# Current state
## [[Gaussian Process Model]]

- A GP is a generalization of the multivariate Gaussian distribution characterized by a mean function and a covariance/kernel function
- Each draw from a GP is a function
If a stochastic process is both gaussian and stationary then can be described by Gaussian Process that is fully characterized by mean and kernel functions

## Strengths of Gaussian Process
- Are very flexible and models a distribution over functions rather than just one function.
- Obtain an uncertainty for your predictions
- Do not require large amounts of data
- Can interpolate within its training data
### Kernels/Covariance Function
- Optimal kernel seems to be the [[Quasi-periodic kernel]] as most stellar activity is quasi-periodic in nature particularly star spots and facula and simple with only two parameters
- Some use a [[Quasi-periodic plus cosine kernel]] in order to capture some of the harmonics of the stellar rotation
	- [[nicholsonQuasiperiodicGaussianProcesses2022]] found this to generally not be worth the extra complexity and computation
- Generally want to keep the kernel simple to fit the data easily but if the goal is looking for physical interpretation in the star/stellar activity its a trade off as there can be complicated interactions made of multiple effects only captured by one parameter
### Mean function
- Generally the prior is just set to 0 and then the posterior is not confined to be 0
- [[rasmussenGaussianProcessesMachine2008]] describes some cases where you would want to explicitly model it
	- Interpretability of model
	- Convenience of expression prior information and a number of analytical limits
	- Way to specify a non-zero mean over functions
- Used to account for keplerian contributions [[camachoModellingStellarActivity2023]]
### Weaknesses
- Hyperparameters from training on light curves can vary heavily depending on where in the solar cycle the star is [[kosiarekPhotometryProxyStellar2020]]
	- Assuming this is just a general problem? With GPs not being super generalizable 
- Due to inversion of matrix takes $O(N^3)$ time
	- But with approximations can speed this up
## Iterations on Gaussian Processes
### Deep Gaussian Processes
- [[damianouDeepGaussianProcesses2013]]
	- Initial aim is to build a representation of stellar activity in a form dictated by physical considerations
	- FENRIR model represents observation channels (RVs, photometry, activity indicators etc) with three ingredients
		- Effect of a given stellar feature as a function of its parameters called the *impulse*
		- The statistical distribution of the feature parameters knowing some hyperparameters $\eta$ 
		- The rate at which features appear which might vary over the magnetic cycle
	- If possible to constrain the three ingredients get a model with 2 advantages
		- Greater ability to correct stellar signal and find smaller planets
		- Possibility to perform "statistical Doppler imaging"
			- Retrieving statistical properties of spots rather than their instantaneous values
### Neural Kernel Gaussian Process Regression
- [[luoTestingCosmicDistance2025]] using two neural networks one to generate a kernel function and the other to generate the mean function
	- Means you no longer have to somewhat arbitrarily choose which functions to use and instead learn it. from the data
	- Not sure how well the interpretability works and if you can then connect to physical properties
### Deep Kernel Learning
- [[wilsonDeepKernelLearning2015]]
### More physically motivated models
- [[haraStatisticalModelStellar2025]]
	- https://www.astro.unige.ch/~delisle/spleaf/doc/fenrir_phys.html
## Papers
1. [[rajpaulGaussianProcessFramework2015]]
	- They actual use GPs for RV data and finding planets
	- Present a [[Gaussian Process Model|GP]] framework to model RV time series jointly with ancillary activity indicators
	- Allows for the activity component of RV time series to be constrained and disentangled from planetary components
2. [[aigrainGaussianProcessRegression2023]]
	- General review of [[Gaussian Process Model|GP]]s
	- Future in RV time series
		- Development of more physically motivated GP models for stellar variability
		- Systematic use of GPR as part of detrending and detection pipelines for exoplanet transit and RV surveys
3. [[stockCARMENESSearchExoplanets2020]]
	- Model Keplerian orbits at the same time as a GP model to account for stellar activity
4. [[angusInferringProbabilisticStellar2018]]
	- Comparing GP, auto-correlation function (ACF), and Lomb-Scargle (LS) periodogram method to recover rotation periods find that the GP method produces the most accurate rotation periods
	- GP provides posterior PDF samples that can be used to provide (under)estimations of rotation period uncertainties
	- GP captures posterior PDF of periodic component of covariance matrix of a time series and not the actual rotation period of a physical star
5. [[stockGaussianProcessesRadial2023]]
	- The rotation period hyper-parameter of the QP-GP is in agreement with the stellar rotation period
	- QP-GP length scale hyper-parameter correlates with the star's spot lifetime but no 1:1 connection
	- Constraining the length scale of the QP-GP in the case of a plateau of samples that do not favor any specific rotation period significantly increases the efficiency of detecting the correct value of the rotation period
	- Best results when QP-GP was constrained to the rotation period or constrained to rotation period and had a minimum length scale
6. [[lugerMappingStellarSurfaces2021]]
	- Present a GP model for stellar variability whose hyperparameters explicitly correspond to physical properties on the surface
		- Can compute likelihood function for stellar light curves marginalized over nuisance parameters (specific size, positions, and contrasts of individual spots)
		- Can then do inference on interesting parameters (distribution of spot sizes, latitudes, and contrasts)
	- Has exact closed-form solution and is computationally efficient
	- Works best for ensemble analyses
	- GP can accurately infer:
		- The angular size of spots
		- The mode and standard deviation of their distribution in latitude
		- Stellar inclinations
	- Can be used to model small Sun-like spots
	- GP can be extended to model time-variable surfaces
	- GP can be used in exoplanet transit modeling and **extended to RV datasets**
7. [[haraStatisticalMethodsExoplanet2023]]
	-  Presented steps to RV data analysis separating into 3 problems
	- Reducing information of the spectrum into an RV time series
	- Modeling nuisance signals and the prior information on planetary and nuisance parameters (with GPs)
	- Deciding how many planets are present an what their orbital elements are 
8. [[damianouDeepGaussianProcesses2013]]
9. [[nicholsonQuasiperiodicGaussianProcesses2022]]
10. [[luoTestingCosmicDistance2025]]
11. [[haraStatisticalModelStellar2025]]
12. [[camachoModellingStellarActivity2023]]
13. [[gilbertsonExtremelyPreciseRadial2020]]
14. [[delisleEfficientModelingCorrelated2022]]
15. [[grunblattDETERMININGMASSKEPLER78b2015]]
## Gaussian Process Not Quite for Dummies
[GP not quite for dummies](https://thegradient.pub/gaussian-process-not-quite-for-dummies/)
- Marginalization
	- Multivariate Gaussian: $p(\boldsymbol{y_{1},y_{2}})=\mathcal{N}\left( \begin{bmatrix}\boldsymbol{a}\\\boldsymbol{b}\end{bmatrix},\begin{bmatrix}A & B\\ B^T & C\end{bmatrix} \right)$
	- Can compute the probability of $y_{1}$ using marginalization property $p(\boldsymbol{y_{1},y_{2}})=\mathcal{N}\left( \begin{bmatrix}\boldsymbol{a}\\\boldsymbol{b}\end{bmatrix},\begin{bmatrix}A & B\\ B^T & C\end{bmatrix} \right)\to p(\boldsymbol{y_{1}})=\mathcal{N}(\boldsymbol{a},A)$
		- Allows to calculate likelihood of $y_{1}$ while ignoring $y_{2}$
		- So can generalize from 2 variables to infinitely many by saying $y_{1}$ contains finite number of variables we are interested in and $y_{2}$ contains the rest
- Predictions
	- Observations are in $y_{2}$ and all points want to make predictions about are in $y_{1}$ everything else in some other $y_{3}$
	- $p(\boldsymbol{y_{1}}|\boldsymbol{y_{2}})= \dfrac{p(\boldsymbol{y_{1},y_{2}})}{p(\boldsymbol{y_{2}})}$
		- Since everything is a Gaussian on the left the right is as well
		- Thus can calculate analytically
	- $p(\boldsymbol{y_{1}}|\boldsymbol{y_{2}})=\mathcal{N}(\boldsymbol{a} + BC^{-1}(\boldsymbol{y_{2}-b}),A-BC^{-1}B^T)$
		- Where the first term of $\mathcal{N}(\dots)$ is the predictive mean and the second is the predictive covariance
		- Dependence on inverse of covariance matrix $C^{-1}$ is a $O(n^3)$ operation but can be improved
- Choosing kernel
	- Can just try a few out or do what is generally accepted
	- But also can use Bayesian model comparison:
		- $p(M|\boldsymbol{y}_{1:N})=\dfrac{p(\boldsymbol{y}_{1:N}|M)p(M)}{\Sigma_{M'}p(\boldsymbol{y}_{1:N},M')p(M')}$
		- Where $p(\boldsymbol{y}_{1:N}|M)$ is the marginal likelihood and equivalent to $\int d\theta p(\boldsymbol{y}_{1:N}|\theta,M)p(\theta|M)$
		- $p(M)$ is the prior over models
		- However dependence on integral can make this very difficult
## A Visual Exploration of GPs
[[A Visual Exploration of Gaussian Processes.pdf]]
### Multivariate Gaussian Distributions
- Multivariate case of Gaussian Distribution is where each random variable is distributed normally and their joint distribution is also Gaussian
- Defined by 
	- Mean vector $\mu$ 
		- Describes the expected value of the distribution
		- Each component describes the mean of the corresponding dimension
	- Covariance matrix $\Sigma$
		- Models the variance along each dimension
		- Determines how the different random variables are correlated
		- *Always* symmetric and positive semi-definite
		- The diagonal is the variance $\sigma_{i}^2$ of the i-th random variable
		- The off-diagonal elements $\sigma_{ij}$ are the correlation between the i-th and j-th random variable
	- $X=\begin{bmatrix}X_{1} \\ X_{2} \\ \vdots \\ X_{n}\end{bmatrix}\sim N(\mu,\Sigma)$
		- X follows normal distribution
		- $\Sigma$ describes the shape of that distribution
		- $\Sigma$ is defined in terms of the expected value E
			- $\Sigma=\mathrm{Cov}(X_{i},X_{j})=E[(X_{i}-\mu_{i})(X_{j}-\mu_{j})^T]$
#### Marginalization and Conditioning
- Gaussian distributions are closed under conditioning and marginalization
	- The resulting distributions from these operations are also Gaussian
- Both marginalization and conditioning work on subsets of the original notation: $P_{X,Y}=\begin{bmatrix}X \\ Y\end{bmatrix}\sim N(\mu,\Sigma)=N(\begin{bmatrix}\mu_{X} \\ \mu_{Y} \end{bmatrix},\begin{bmatrix}\Sigma_{XX} & \Sigma_{XY} \\ \Sigma_{YX}  & \Sigma_{YY} \end{bmatrix})$ 
	- With X and Y being subsets of the original random variables
- Can determine marginalized probability distributions given probability distribution $P(X,Y)$ over vectors of random variables X and Y
	- $X \sim N(\mu_{X},\Sigma_{XX})$
	- $Y \sim N(\mu_{Y},\Sigma_{YY})$
	- Each partition X and Y only depends on its corresponding entries in $\mu,\;\Sigma$
	- $p_{X}(x)=\int_{y}p_{X,Y}(x,y)dy=\int_{y} p_{X|Y}(x|y)p_{Y}(y)dy$
		- If we are interested in the probability density of X=x need to consider all the possible outcomes of Y that can jointly lead to the result
- Conditioning is used to determine the probability of one variable depending on another variable.
	- Allows for Bayesian inference
	- $X|Y \sim N(\mu_{X}+\Sigma_{XY}\Sigma_{YY}^{-1}(Y-\mu_{Y}), \Sigma_{XX}-\Sigma_{XY}\Sigma_{YY}^{-1}\Sigma_{YX})$
	- $Y|X\sim N(\mu_{Y}+\Sigma_{YX}\Sigma_{XX}^{-1}(X-\mu_{X}),\Sigma_{YY}-\Sigma_{YX}\Sigma_{XX}^{-1}\Sigma_{XY})$
### Gaussian Processes
- Rather than finding implicit function interested in predicting the function values at concrete points (test points, X)
- Goal is to learn underlying distribution of X, the training data, together with Y, the test data, as a multivariate normal distribution
- So $P_{X,Y}$ the joint probability distribution, spans the space of possible function values for the function we want to predict
	- Has $|X| + |Y|$ dimensions
- This problem is treated as Bayesian inference
	- Update the current hypothesis as new information (the training data) becomes available
	- So interested in the conditional probability $P_{X|Y}$ which due to property of Gaussian processes being closed under conditioning is also distributed normally
- The covariance matrix $\Sigma$ is determined by its covariance function k or the kernel of the GP
- Making a prediction using GP boils down to drawing samples from a multivariate Gaussian distribution with the same number of dimensions as random variables (or the number of test points)
	- Then the i-th component of the resulting vector is the function value for the i-th test point
#### Kernels
- $\mu$
	- In GPs it is often assumed that $\mu=0$ (although not the case for astrophysics apparently)
	- Centering: Can always assume such a distribution though and add $\mu$ back to the resulting function values after the prediction step
- $\Sigma$
	- Describes shape of distribution and determines characteristics of the function to be predicted
	- Generate it by evaluating the kernel k (the covariance function) pairwise on all points
	- $k:\mathbb{R}^n \times \mathbb{R}^n\to \mathbb{R},\; \Sigma=\mathrm{Cov}(X,X')=k(t,t')$
	- Entry $\Sigma_{ij}$ describes how much influence the i-th and the j-th point have on each other
	- The kernel describes the similarity between the values of the function
	- Stationary kernels (EX: RBF and periodic kernel) are functions invariant to translations. The covariance between 2 points is only dependent on relative position
	- Non-stationary kernels (EX: linear kernel): depend on absolute location
	- Can combine several kernels
#### Prior Distribution
- Each sample in the multivariate normal distribution represents one realization of our function values
- The distribution of functions is normal (assuming $\mu=0$?)
- The prior distribution $P_{X}$ is when no training data has been observed yet
	- Without having observed training examples revolves around $\mu=0$
	- Has the same dimensionality as the number of test points
- Use kernel to set up covariance matrix which has dimensions $N \times N$
- Covariance matrix determines which type of functions from the space of all possible functions are more probable
#### Posterior Distribution
- First form joint distribution $P_{X,Y}$ between test points X and training points Y
	- Increases number of dimensions to $|X|+|Y|$
- Using conditioning can find $P_{X|Y}$ from $P_{X,Y}$
	- Has dimensions of the number of test points N
	- Normal distribution
	- The training points constrain the set of functions to those hat pass through the training points
- Since the conditional distribution forces the set of functions to precisely pass through each training point they can be unecessarily complex and in real-world data has error/uncertainty
	- So model the error of the measurments
	- Add error term $\epsilon \sim N(0,\psi^2)$ to each of the training points
	- $Y=f(X)+\epsilon$
	- To do this modify the set up of $P_{X,Y}$
	- $P_{X,Y}=\begin{bmatrix}X \\ Y\end{bmatrix}\sim N(0,\Sigma)=N(\begin{bmatrix}0 \\ 0\end{bmatrix},\begin{bmatrix}\Sigma_{XX} & \Sigma_{XY} \\ \Sigma_{YX}  & \Sigma_{YY}+\psi^2I\end{bmatrix})$
- Prediction
	- Through marginalization of each random variable can extract the respective mean function value $\mu_{i}'$ and standard deviation $\sigma_{i}'=\Sigma_{ii}'$
	- This allows for a more meaningful prediction and allows for statement about confidence in it
#### Combining Different Kernels
- Combining kernels together results in a more specialized kernel
- Choice of kernel depends on prior knowledge of data
- As long as the covariance matrix of the GP is positive semi definite all methods are allowed
- Common kernel combinations are addition and multiplication
- Can learn specialized kernel functions from underlying data using deep learning
# Gaussian Processes from Scratch 1
[[Gaussian processes (1_3) - From scratch.pdf]]
### Predictions from posterior
$$
\begin{bmatrix}
\mathbf{y_{1}} \\ \mathbf{y_{2}}
\end{bmatrix} \sim \cal{N} \left(\begin{bmatrix}
\mu_{1} \\ \mu_{2}
\end{bmatrix}, \begin{bmatrix}
\Sigma_{11} & \Sigma_{12} \\
\Sigma_{21} & \Sigma_{22}
\end{bmatrix}\right)
$$
$$
\begin{align}
\mu_{1}&=m(X_{1})\;(n_{1}\times 1) \\
\mu_{2}&=m(X_{2})\;(n_{2}\times 1) \\
\Sigma_{11} &= k(X_{1},X_{1})\; (n_{1}\times n_{1}) \\
\Sigma_{22} &= k(X_{2},X_{2})\; (n_{2}\times n_{2}) \\
\Sigma_{12} &= k(X_{1},X_{2})=k_{21}\; (n_{1}\times n_{2})
\end{align}
$$
- m is the *mean function*
	- You can define this to be what you want but its basically a transform of the data X
	- Acts like a starting point for the model which is then updated
	- Necessary to help prediction away from training set. For example setting it to a constant means the GP will return quickly to that value on data far from its training dataset.
		- If you only care about points that are close to your training dataset this is fine
		- If you know the model has linear behavior at large enough values then you would want a linear mean function
	- https://stats.stackexchange.com/questions/222238/why-is-the-mean-function-in-gaussian-process-uninteresting
$$
\begin{align}
p(\mathbf{y_{2}|y_{1},X_{1},X_{2}}) &= \cal{N}(\mu_{2|1},\Sigma_{2|1}) \\
\mu_{2|1}&=\mu_{2}+\Sigma_{21}\Sigma_{11}^{-1} (\mathbf{y}_{1}-\mu_{1}) \\
\Sigma_{2|1}&=\Sigma_{22}-\Sigma_{21}\Sigma_{11}^{-1}\Sigma_{12}
\end{align}

$$
- If the prior $\mu$ is assumed to be 0 then can simplify $\mu_{2|1}$
- Then since $\Sigma_{11}$ is symmetric $\Sigma_{11}=\Sigma_{11}^T$
$$
\begin{align}
\mu_{2|1} &= \Sigma_{21}\Sigma_{11}^{-1}\mathbf{y}_{1} \\
\mu_{2|1} & = (\Sigma_{11}^{-1}\Sigma_{12})^T\mathbf{y}_{1}
\end{align}
$$
- Similarly can adjust $\Sigma_{2|1}$
$$
\Sigma_{2|1}=\Sigma_{22}-(\Sigma_{11}^{-1}\Sigma_{12})^T\Sigma_{12}
$$
- Can then predict $\mathbf{y}_{2}$ corresponding to input samples $X_{2}$
	- Use $\mu_{2|1}$ as a prediction
- The mean of the posterior predictions $\mu_{2|1}$ are the weighted averages of the observed variables $\mathbf{y_{1}}$ which are weighted by the covariance function k with variances in the diagonal of $\Sigma_{2|1}$
- 