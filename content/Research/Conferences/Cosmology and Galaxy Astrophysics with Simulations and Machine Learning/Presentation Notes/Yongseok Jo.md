---
Day: Day 2
Type of ML used: [CNN]
---
## Towards Robustness Across Different Cosmological Models

- Find a robust model that can predict cosmological parameters that is independent of cosmological model
    - Use CNN → latent variables → Classifier + Regressor
- Latent space
    - Encapsulates compressed information (summary statistics from input data)
    - This is compressed to _three_ $\Omega_m,\sigma_8$ and classification if classifiable
    - Can’t classify which simulation based on latent space with robustness but cosmological parameter info is retained (?)
- Adding robustness increases accuracy in test sims but decreases in training sims