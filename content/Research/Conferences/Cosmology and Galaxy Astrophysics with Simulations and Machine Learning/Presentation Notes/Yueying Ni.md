---
Day: Day 3
Simulations Used: [CAMELS]
---
## Harnessing Generative Models in Cosmological Simulations: Applications and Challenges

- Issue with scale of simulations and describing matter power spectrum
- Use generative models (variational diffusion model) to reconstruct dark matter field from galaxies
    - Doesn’t do perfectly but pretty close over all scales
- Marginalize over astrophysical parameters of CAMELS
- Apply model to larger volume
    - Requires translational symmetry but limitation of memory
    - So go patch by patch which can break symmetry
    - So add positional-encoded noise to ensure that boundaries are correct
- Also can use these models to reconstruct small-scale features hidden by resolution
    - Format N-body sims as 3D images in Lagrangian description (determines full phase space)
    - Conserves mass