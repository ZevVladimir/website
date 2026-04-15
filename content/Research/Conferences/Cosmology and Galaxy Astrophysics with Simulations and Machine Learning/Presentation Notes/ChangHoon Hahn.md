---
Day: Day 1
Code/Program Developed/Used: [SPENDERQ]
---
## Reconstructing Quasar Spectra and Measuring the Ly$\alpha$ Forest with Spectrum Autoencoders

- Ly alpha forest from light of quasars through Hydrogen traces matter clustering
- Want to reconstruct quasar continuum from observations
    - Use spectrum auto encoders (SPENDER) to train a NN
    - SpenderQ does this then masks absorption regions and refeeds that in
    - Works well! Except for areas typically preprocessed regions where the halo of the quasar affects it (and so is correlated with quasar)
- Also can use the latent variables to find outliers