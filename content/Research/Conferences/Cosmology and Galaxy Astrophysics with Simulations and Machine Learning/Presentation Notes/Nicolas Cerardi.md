---
Day: Day 2
Simulations Used: [CAMELS]
Type of ML used: [Lagrangian Deep Learning]
---
## Lagrangian Deep Learning with CAMELS : towards simulation-based inference for cluster cosmology

- Galaxy clusters are sensitive of structure growth, and geometry and expansion
    - Dependent on cosmological parameters and halo mass function (HMF)
- Traditionally use scaling relations to go between HMF and observed clusters
    - However, issues due to environmental impact and feedback
    - Traditional empirical scaling relations are degenerate with cosmology and not connected to physical processes
- So use simulation-based inference and modeling
    - Now use 3D X-ray observations
- And now use hydro simulation emulation with ML
- Baryon pasting
    - **Lagrangian Deep Learning (LDL)**
    - Go from DM field (LDL) into X-ray (LDL)
    - Conditioned on simulation parameters using a NN
    - Compare with CAMELS and it looks pretty good
    - Implemented into full pipeline
- Simulation portion very fast on GPUs