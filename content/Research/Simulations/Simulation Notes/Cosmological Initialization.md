https://indico.in2p3.fr/event/20603/contributions/82617/attachments/58851/79200/2020-05-05-Atelier-DE.pdf

To initialize where particles are in a simulation use a gaussian random field generated in Fourier space and then use the FFT to transform into real space.

- Start with random points generated with the Box-Muller transform using the polar form
	- [Wikipedia link](https://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform) using the polar from
	- Mean of 0 and standard deviation of 1
	- Generate two random numbers $U_{1}$ and $U_{2}$
		- Uniform distribution between 0 and 1
		- Within the unit circle in the range of \[-1,1]
	- Calculate distance from the center each point $(U_{1},U_{2})$ is
	- Use this distance to transform into a scaling factor
		- $s=\sqrt{ -2.0*\log (s) /s}$
		- Where $s=\sqrt{ U_{1}^{2}+U_{2}^{2} }$
	- Create two numbers with $s*U_{1}$ and $s*U_{2}$
- Calculate the power spectrum
	- Now just use a simple temporary function
	- But replace with [Class](http://class-code.net/) in the future
	- 