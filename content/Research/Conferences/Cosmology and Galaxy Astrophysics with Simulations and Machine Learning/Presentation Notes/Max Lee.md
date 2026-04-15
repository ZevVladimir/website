---
Day: Day 4
Simulations Used: [CAMELS-TNG]
Code/Program Developed/Used: [CARPoolGP]
---
## Zooming by in the CARPoolGP Lane: New CAMELS-TNG sims of zoomed in massive halos

- Not enough massive halos in CAMELS
    - So use zoom-in sims: sample variance, expensive, massive param space
- CARPool
    - Take high resolution sims and use low resolution to reduce error bars
    - Force correlations between sims and use gaussian process
    - Write algorithm to determine where to run new simulations to improve variance and match distribution
    - **Compton Y parameter**
    - Added **HMC** compatibility and now constraining params with **XMM** data