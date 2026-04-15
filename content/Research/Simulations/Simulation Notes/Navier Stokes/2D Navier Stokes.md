Based off this code: [https://github.com/leo-aa88/cnavier](https://github.com/leo-aa88/cnavier)

# Things I’ve learned

## Finite Difference Methods FDM

## Vorticity

The full vorticity equation is

$$\frac{D\omega}{Dt}=(\vec{\omega}\cdot \vec{\nabla})\vec{u}-(\vec{\nabla}\cdot \vec{u})\vec{\omega}+\frac{\vec{\nabla \rho}\times \vec{\nabla}p}{\rho^2}+\nu\nabla^2\vec{\omega}$$

Where $\frac{D}{Dt}$is the material derivative or $=\frac{\partial}{\partial t} + \frac{\partial}{\partial x}u + \frac{\partial}{\partial y}v + \frac{\partial}{\partial z}w$

Here since our fluid velocity is 2D (u,v,0) and vorticity is in the z direction (0,0,w_z) then the first term on the right goes to 0.

Since our fluid is incompressible then $\vec{\nabla}\cdot\vec{u}=0$

Since the density is assumed to be constant the third term goes to zero as well

And finally $\nu=1/Re$

So for the code we end up with the final equation of

$$dw_{i,j} = -u_{i,j}\frac{dw}{dx}_{i,j} -v_{i,j}\frac{dw}{dy}_{i,j} + \frac{1}{Re}(\frac{d^2w}{dx^2}_{i,j} + \frac{d^2w}{dx^2}_{i,j})$$

$w_{i,j}=dw_{i,j}*dt + w_{i,j}$

[https://uwaterloo.ca/applied-mathematics/current-undergraduates/continuum-and-fluid-mechanics-students/amath-463/vorticity](https://uwaterloo.ca/applied-mathematics/current-undergraduates/continuum-and-fluid-mechanics-students/amath-463/vorticity)

  

## Stream Function

[https://farside.ph.utexas.edu/teaching/336L/Fluidhtml/node69.html](https://farside.ph.utexas.edu/teaching/336L/Fluidhtml/node69.html)

- Used for incompressible or irrotational 2D flows
- Used to analyze and illustrate the flows
- Value of the stream function is constant along every streamline
- For incompressible flows $\nabla\cdot\vec{u}=0$ so $\vec{u}=\nabla z \times \nabla \psi$
    - This is satisfied with
    - $u=\frac{\partial \psi}{\partial x}; \, v=-\frac{\partial \psi}{\partial y}$
- Related to vorticity by $\omega=-\nabla^2\psi=+\nabla^2\psi'$
- This is what is being solved in the code with the poisson equation solver

### Poisson Solver

Actually relatively simple we transform the del^2 into the second order derivative FDM and then solve for $\psi$

$$\nabla^2\psi = \omega\\ \frac{\partial^2 \psi}{\partial x^2} + \frac{\partial^2 \psi}{\partial y^2}=\omega$$

Then with some math and rearrangement we get

$$\psi_{i,j}=\frac{dy^2(\psi_{i+1,j}+\psi_{i-1,j}) + dx^2 (\psi_{i,j+1}+\psi_{i,j-1}) - dx^2dy^2w_{i,j}}{2(dx^2+dy^2)}$$

## Continuity Check

- Check that the new update retains the incompressible flow required by $\nabla \cdot \vec{u} = 0$
- Since $\nabla\cdot\vec{u}=\frac{\partial u}{\partial x} + \frac{\partial v}{\partial y}$ and we have the right side from the stream function we can check that they are close to 0