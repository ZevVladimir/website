
---
Title: A sub-Earth-mass planet orbiting Barnard’s star

tags:  #paper #exoplanet #RV-analysis #Barnards-Star

citekey: hernandezSubEarthmassPlanetOrbiting2024

collection:

- Papers to Read

status: unread

dateread:

---
# Notes
## Abstract
- Analyze ESPRESSO data with [[Gaussian Process Model|Gaussian process]]es to model stellar activity
- Find planets with periods of 
	- 3.15d
	- 4.12d
	- 2.34d
	- 6.74d
## Main Paper
### Stellar Activity
#### GP model
- Stellar noise is described with a covariance function dependent on a set of parameters
- To avoid overfitting and suppressing planetary signals
	- Train with photometric data or activity indicators
	- Simultaneous modeling of activity proxies and RV measurements with shared hyper parameters
	- Use multi-dimensional GPS
		- Join the fit of all time series under a single covariance matrix
		- Assumes an underlying function governing the behavior of stellar activity $G(t)$
		- This with its gradient $G'(t)$ and their amplitudes for each time series $j(\Delta TS_{j})$, $j=0,\dots,N$ with N time series
			- $\Delta TS_{j}=A_{j}\cdot G(t)+B_{j}\cdot G'(t)$
		- Has good correlation between FWHM of the [[Cross-Correlation Function|CCF]] and the activity induced RV
		- Kernel:
			- A combination of two simple harmonic oscillators (SHO) at the first and second harmonics of the rotation period $P_{ROT}$ and $P_{ROT/2}$
			- $k(\tau)=k_{\mathrm{SHO,1}}(\tau,P_{1},S_{1},Q_{1})+k_{\mathrm{SHO,2}}(\tau,P_{2},S_{2},Q_{2})$ 
				- $\tau=t_{n}-t_{n-1}$ or the time lag between measurements 
				- $\Delta TS_{j}=A_{11,j}\cdot G_{\mathrm{SHO,1}}+A_{12,j}\cdot G'_{\mathrm{SHO,1}}+A_{21,j}\cdot G_{\mathrm{SHO,2}}+A_{22,j}\cdot G'_{\mathrm{SHO,2}}$ Is the activity induced signal in each time series $j$
					- $G_{\mathrm{SHO,i}}$ and $G'_{\mathrm{SHO,i}}$ are the realization of a GP with kernel $k_{\mathrm{SHO,i}}$ and its derivative
				- $k_{i}(\tau)=C_{i}^{2}e^{-\tau/L}\begin{Bmatrix}\cos(h\eta \dfrac{2\pi \tau}{P_{i}})+\dfrac{P_{i}}{2\pi \eta L}\sin(h \dfrac{2\pi \tau}{P_{i}});\mathrm{P_{i}>2\pi L} \\ 2(1+\dfrac{2\pi \tau}{P_{i}});\mathrm{P_{i}=2\pi L} \\ \cos(\dfrac{\eta 2\pi \tau}{P_{i}})+ \dfrac{P_{i}}{2\pi \eta L}\sin(\dfrac{\eta 2\pi \tau}{P_{i}});\mathrm{P_{i}<2\pi L}\end{Bmatrix}$
					- $\eta=(1-(2L/P_{i})^{-2})^{1/2}$ controls the damping
				- The power spectrum density of the kernel: $S(\omega)=\sqrt{ \dfrac{2}{\pi} } \dfrac{S_{i}\omega_{i}^4}{(\omega^{2}-\omega_{i}^{2})^{2}+\omega_{i}^{2}\omega^{2}/Q^{2}}$
					- $\omega$ is the angular frequency
					- $\omega_{i}=2\pi/P_{i}$ is the undamped angular frequency for each component
					- $S_{i}$ is. the power at $\omega=\omega_i$
					- $Q_{i}$ is the quality factor
				- Sample $S_{i}$, $P_{i}$, $Q_{i}$ in the covariance matrix relative to amplitude $(C_{i})$, rotation period $(P=P_{\mathrm{ROT}})$, timescale of evolution $(L=T_{\mathrm{ROT}})$
					- $P_{1}=P$ $P_{2}=\dfrac{P}{2}$
					.  $S_{1}=\dfrac{C_{1}}{2\cdot L}(\dfrac{P_{1}}{\pi})^{2}$ $S_{2}=\dfrac{C_{2}}{2\cdot L}(\dfrac{P_{2}}{\pi})^{2}$
					- $Q_{1}=\dfrac{\pi L}{P_{1}}$  $Q_{2}=\dfrac{\pi L}{P_{2}}$
### Discussion
- 
## Conclusion
- 
## Questions
- 

> [!Cite]

Hernández, J. I. González, A. Suárez Mascareño, A. M. Silva, et al. “A Sub-Earth-Mass Planet Orbiting Barnard’s Star.” _Astronomy & Astrophysics_ 690 (October 2024): A79. [https://doi.org/10.1051/0004-6361/202451311](https://doi.org/10.1051/0004-6361/202451311).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Hernández, J. I. González]] 
**Author**: [[Files/Authors/Mascareño, A. Suárez]] 
**Author**: [[Files/Authors/Silva, A. M.]] 
**Author**: [[Files/Authors/Stefanov, A. K.]] 
**Author**: [[Files/Authors/Faria, J. P.]] 
**Author**: [[Files/Authors/Tabernero, H. M.]] 
**Author**: [[Files/Authors/Sozzetti, A]] 
**Author**: [[Files/Authors/Rebolo, R]] 
**Author**: [[Files/Authors/Pepe, F]] 
**Author**: [[Files/Authors/Santos, N. C.]] 
**Author**: [[Files/Authors/Cristiani, S]] 
**Author**: [[Files/Authors/Lovis, C]] 
**Author**: [[Files/Authors/Dumusque, X]] 
**Author**: [[Files/Authors/Figueira, P]] 
**Author**: [[Files/Authors/Lillo-Box, J]] 
**Author**: [[Files/Authors/Nari, N]] 
**Author**: [[Files/Authors/Benatti, S]] 
**Author**: [[Files/Authors/Hobson, M. J.]] 
**Author**: [[Files/Authors/Castro-González, A]] 
**Author**: [[Files/Authors/Allart, R]] 
**Author**: [[Files/Authors/Passegger, V. M.]] 
**Author**: [[Files/Authors/Osorio, M.-R. Zapatero]] 
**Author**: [[Files/Authors/Adibekyan, V]] 
**Author**: [[Files/Authors/Alibert, Y]] 
**Author**: [[Files/Authors/Prieto, C. Allende]] 
**Author**: [[Files/Authors/Bouchy, F]] 
**Author**: [[Files/Authors/Damasso, M]] 
**Author**: [[Files/Authors/D’Odorico, V]] 
**Author**: [[Files/Authors/Marcantonio, P. Di]] 
**Author**: [[Files/Authors/Ehrenreich, D]] 
**Author**: [[Files/Authors/Curto, G. Lo]] 
**Author**: [[Files/Authors/Santos, R. Génova]] 
**Author**: [[Files/Authors/Martins, C. J. a. P.]] 
**Author**: [[Files/Authors/Mehner, A]] 
**Author**: [[Files/Authors/Micela, G]] 
**Author**: [[Files/Authors/Molaro, P]] 
**Author**: [[Files/Authors/Nunes, N]] 
**Author**: [[Files/Authors/Palle, E]] 
**Author**: [[Files/Authors/Sousa, S. G.]] 
**Author**: [[Files/Authors/Udry, S]] 


> **Year**: 2024  

> **Citekey**: hernandezSubEarthmassPlanetOrbiting2024 

> **itemType**: journalArticle 

> **Journal**: *Astronomy & Astrophysics* 

> **Volume**: 690  

> **Pages**: A79 

> **DOI**:: 10.1051/0004-6361/202451311   

  
> [!Abstract]

>

> <i>Context.<i/> ESPRESSO guaranteed time observations (GTOs) at the 8.2m VLT telescope were performed to look for Earth-like exoplanets in the habitable zone of nearby stars. Barnard’s star is a primary target within the ESPRESSO GTO as it is the second closest neighbour to our Sun after the α Centauri stellar system.<i>Aims.<i/> We present here a large set of 156 ESPRESSO observations of Barnard’s star carried out over four years with the goal of exploring periods of shorter than 50 days, thus including the habitable zone (HZ).<i>Methods.<i/> Our analysis of ESPRESSO data using Gaussian process (GP) to model stellar activity suggests a long-term activity cycle at 3200 d and confirms stellar activity due to rotation at 140 d as the dominant source of radial velocity (RV) variations. These results are in agreement with findings based on publicly available HARPS, HARPS-N, and CARMENES data. ESPRESSO RVs do not support the existence of the previously reported candidate planet at 233 d.<i>Results.<i/> After subtracting the GP model, ESPRESSO RVs reveal several short-period candidate planet signals at periods of 3.15 d, 4.12 d, 2.34 d, and 6.74 d. We confirm the 3.15 d signal as a sub-Earth mass planet, with a semi-amplitude of 55 ± 7 cm s<sup>−1<sup/>, leading to a planet minimum mass <i>m<sub>p<sub/><i/> sin <i>i<i/> of 0.37 ± 0.05 <i>M<i/><sub>⊕<sub/>, which is about three times the mass of Mars. ESPRESSO RVs suggest the possible existence of a candidate system with four sub-Earth mass planets in circular orbits with semi-amplitudes from 20 to 47 cm s<sup>−1<sup/>, thus corresponding to minimum masses in the range of 0.17–0.32 <i>M<i/><sub>⊕<sub/>.<i>Conclusions.<i/> The sub-Earth mass planet at 3.1533 ± 0.0006 d is in a close-to circular orbit with a semi-major axis of 0.0229 ± 0.0003 AU, thus located inwards from the HZ of Barnard’s star, with an equilibrium temperature of 400 K. Additional ESPRESSO observations would be required to confirm that the other three candidate signals originate from a compact short-period planet system orbiting Barnard’s star inwards from its HZ.

>.



# Annotations%% begin annotations %%





%% end annotations %%
