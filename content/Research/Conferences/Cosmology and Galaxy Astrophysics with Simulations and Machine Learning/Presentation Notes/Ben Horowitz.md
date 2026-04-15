---
Day: Day 2
Observational Data: [COSMOS]
Simulations Used: [IllustrisTNG]
Code/Program Developed/Used: [JAX, TARDIS]
---
## Unified Chrono-cosmographic Analysis of Astrophysical Data with Differentiable Simulations

- Specifically looking at Lyman Alpha Tomography to build 3D maps
- Initial density/parameters → physical sim → sim outputs + outside data → cost/likelihood function. Then loop this and all is differentiable so you can back propagate
- **TARDIS**
- Use COSMOS field for real data of cosmic web
- Connect constraints from COSMOS with IllustrisTNG hydro
    - Instead use hydrosim outputs with TARDIS?
- **JAX**
- Overall trying to reproduce initial conditions from data. Want to build to full field modelling
- Differentiability allows constraining of subgrid physics with data