---
Type of Simulation: [Hydro]
---
# Sources

[https://www.ita.uni-heidelberg.de/~dullemond/lectures/num_fluid_2009/Chapter_4.pdf](https://www.ita.uni-heidelberg.de/~dullemond/lectures/num_fluid_2009/Chapter_4.pdf)

  

Need numerical methods to be in a _numerically flux conserving form_ as otherwise our equations of energy, mass, and momentum conservation make no sense

  

Create cells from the grid with the cell walls located at:

$$x_{i+1/2}=\frac{1}{2}(x_i+x_{i+1})$$

We hard code boundary cell walls on the left and right for a total of **N+1 cell interfaces (walls)**:

$$x_{1/2}=x_1-\frac{1}{2}(x_2-x_1)\\x_{N+1/2}=X_N+\frac{1}{2}(x_N-x_{N-1})$$

# 3D Generalization

This can then be generalized to a 3-D flow such that the volume is $V=\Delta x S; S=\Delta y \Delta z$

Each cell contains a conserved quantity $q_i^n$ with a total content $Q_i^n=q_i^nV$

$Q_i$ can only flow in and out at a cell interface so we create a flux $f_{i+1/2}$ at these boundaries

$$\frac{dQ_i}{dt}=(f_{i-1/2}-f_{i+1/2})\cdot S$$

This is then discretized and put into half time

$$\frac{Q_i^{n+1}-Q_i^n}{\Delta t} = (f^{n+1/2}_{i-1/2}-f^{n+1/2}_{i+1/2})\cdot S$$

Transforming $Q_i^n \rarr q_i^nV; V\rarr S\Delta x$

$$\frac{q_i^{n+1} - q_i^n}{\Delta t}=\frac{f^{n+1/2}_{i-1/2}-f^{n+1/2}_{i+1/2}}{\Delta x}\\  
q^{n+1}_i = q_i^n + \frac{\Delta t}{\Delta x}(f^{n+1/2}_{i-1/2}-f^{n+1/2}_{i+1/2})$$

### Irregular $\Delta x$

Can generalize $\Delta x = x_{i+1/2}-x_{i-1/2}$

## Non-constant Advection Velocity

$$\partial_tq(x,t)+\partial_x(u(x)q(x,t))=0$$

How the flux $f_{i+1/2}^{n+1/2}$ is calculated from $q_i^n$ and u(x) depends on the algorithm for advection but generally depends on the velocities at the interfaces (either as given from the problem or interpolated from cell center velocities)

  

Then

$$f_{i+1/2}^{n+1/2}=q_{i+1/2}^{\sim n+1/2}u_{i+1/2}$$

Where

$$q_{i+1/2}^{\sim n+1/2}=estimate \: of \: \frac{1}{t_{n+1}-t_n}\int_{t_n}^{t_{n+1}}q(x_{i+1/2},t)dt$$

## Donor-cell Advection

We approximate $q_{i+1/2}^{\sim n+1/2}$ using:

$$q_{i+1/2}^{\sim n+1/2}=\begin{cases} q_i^n & \text{for } u_{i+1/2} > 0\\ q_{i+1}^n & \text{for } u_{i+1/2}<0 \end{cases}$$

With the flux at the cell interfaces:

$$f_{i+1/2}^{n+1/2}=\begin{cases} u_{i+1/2}q_i^n & \text{for } u_{i+1/2} > 0\\ u_{i+1/2}q_{i+1}^n & \text{for } u_{i+1/2}<0 \end{cases}$$