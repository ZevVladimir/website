
---
Title: Gravitational N-Body Simulations Tools and Algorithms

tags:  #paper

citekey: sverreGravitationalNBodySimulations2003

collection:

- Textbooks

status: unread

dateread:

---
# 8 Initial Setup
- [x] #TODO Read chapter 8 Gravitational N-Body Simulations  [due:: 2026-01-21]  [completion:: 2026-01-22]
## 8.1 Introduction
- Describe initial conditions for star cluster simulations
- Cluster models are generated for single stars with an initial mass function (IMF)
- They are then scaled to internal units
- Describe distributions
- Present procedures for including distribution of primordial binaries
- After completing these procedures and any external effects initialize the force polynomials
## 8.2 Initial conditions for clusters
- Choosing IMF
	- Simplest choice is Salpeter IMF with a power law: $f(m)\propto m^{-\alpha}$
		- Generally $\alpha=2.3$
		- Mass range of $[m_{1},m_{N}]$
		- Distribution for each member:
			- $m_{i}^{-(\alpha-1)}=m_{1}^{-(\alpha-1)}-(i-1)g_{N}$
			- $g_{N}=\dfrac{m_{1}^{-(\alpha-1)}-m_{N}^{-(\alpha-1)}}{N-1}$
	- More realistic is
		- $m(X)=0.08+\dfrac{\gamma_{1}X^{\gamma_{2}}+\gamma_{3}X^{\gamma_{4}}}{(1-X)^{0.58}}$
		- $X$ is a uniform random number in $[0,1]$
		- Best fits for solar neighborhood:
			- $\gamma_{1}=0.19$
			- $\gamma_{2}=1.55$
			- $\gamma_{3}=0.05$
			- $\gamma_{4}=0.6$
		- Can specify lower limit of $m_{N}>0.08$
- Typically treat the initial density distribution as a Plummer model
	- Space density: $\rho(r)=\dfrac{3M}{4\pi r_{0}^{3}} \dfrac{1}{\left[ 1+(r/r_{0})^{2} \right]^{5/2}}$
		- $r_{0}$ is the scale factor related to the half-mass radius with $r_{h}\simeq1.3r_{0}$
	- Then describe creation like [[aarsethComparisonNumericalMethods1974]]
- Describe king models
## 8.3 Primordial binaries
- Use conventional definition of binary fraction: $f_{b}=\dfrac{N_{b}}{(N_{b}+N_{s})}$
	- $N_{s}$ is the number of single stars
	- Particle number $N=N_{s}+N_{b}$
	- 

> [!Cite]

Sverre, Aarseth. _Gravitational N-Body Simulations Tools and Algorithms_. 2003.
  

>[!md]

**FirstAuthor**: [[Files/Authors/Sverre, A]] 


> **Date**: 2003-01-01  

> **Citekey**: sverreGravitationalNBodySimulations2003 

> **itemType**: book 

> **ISBN**:: 978-0-521-43272-6   

  
> [!Abstract]

>.



# Annotations%% begin annotations %%





%% end annotations %%
