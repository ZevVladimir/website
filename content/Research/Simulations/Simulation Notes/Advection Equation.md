---
Type of Simulation: [Hydro]
---
# The Equation

During advection a fluid transports a conserved quantity (ex: energy) or material (ex: silt in a river) via _bulk motion_

  

$$\frac{\partial \psi}{\partial t} + \nabla \cdot (\psi \textbf{u})=0$$

The scalar field $\psi(t,x,y,z)$ describes some conserved quantity

The flow velocity is described with a vector field $\textbf{u}(u_x,u_y,u_z)$

  

Thus the equation says the change in the conserved quantity at a certain time and place is equal to the negative of how much of that quantity is being added or removed by the flow velocity.

  

The advection equation can be simplified down into 1D:

$$\frac{\partial \psi}{\partial t} + u_x \frac{\partial \psi}{\partial x} = 0$$

This assumes that $u_x$ is not dependent on x (is constant)

The sign of $u_x$ determines which direction the wave moves (<0 to the left, >0 to the right) and the magnitude is the speed of propagation

# General Solution

With the initial value: $\psi_0=\psi(x,0)$:

$$\psi(x,t)=\psi_0(x-u_xt)$$

# Numerical Solution

## Forward-Time Central-Space Method

Discretize time and space: $t_n = t_0 + \Delta t$, $x_i = x_0 + \Delta x$

Then write $\psi_i^n:=u(x_i,t_n)$, where i specifies the space step and n the time step

  

Then can rewrite the advection equation to be:  
  

$$\frac{\psi_i^{n+1}-\psi_i^n}{\Delta t} + u_x \frac{\psi_{i-1}^n - \psi_{i+1}^n}{2\Delta x} = 0$$

Where $\psi_i^{n+1}-\psi_i^n$ is 1 time step and the space depends on information from the two boxes next to it

We then rewrite in order to solve for $\psi_i^{n+1}$ at the next time step

$$\psi_i^{n+1}=\psi_i^n - u_x \frac{\Delta t}{2 \Delta x} (\psi_{i-1}^n-\psi_{i+1}^n)$$

**This method is** _**instable**_**.**

## Upwind/Downwind Methods

Instead can skew the spatial difference in the flow direction (determined by the sign of $u_x$)

Can instead approximate the $\frac{\partial \psi}{\partial x}\approx\frac{\psi_i^n-\psi_{i-1}^n}{x_i-x_{i-1}}$

This now only takes into account the amount flowing in from the left as such it only works for $u_x > 0$

$$\psi_i^{n+1}=\psi_i^n-u_x\frac{\Delta t}{\Delta x}(\psi_i^n-\psi_{i-1}^n)$$

## Courant Friedichs Lewy (CFL) Condition

Can’t let information travel in one timestep more than one box (equation does not take this into account)

$$\Delta t < \frac{\Delta x}{u}$$

This is the maximum time step so generally you take one smaller according to:

$$\Delta t = C \min(\Delta x / u)$$

Where C, Courant number, determines the size of $\Delta t$ such that C=1 means that it is the maximum and decreasing it increases the fineness of the time step.