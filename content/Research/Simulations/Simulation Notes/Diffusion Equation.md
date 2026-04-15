---
Type of Simulation: [Hydro]
---
# The Equation

$$\partial_t \psi - D \partial_x^2 \psi = 0$$

Where $\psi$ is some conserved quantity described with some initial condition such as $\psi(x,0)=\delta(x)$

D is a constant diffusion coefficient

# Numerical Solution

Can write the equation as:

$$\frac{\psi_i^{n+1}-\psi_i}{\Delta t} - D (\frac{\psi_{i+1}^n - 2\psi_i^n + \psi_{i-1}^n}{\Delta x^2})=0$$