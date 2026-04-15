---
Day: Day 2
Type of ML used: [CNN]
---
## Detecting Model Misspecification in Cosmology with Multiscale Normalizing Flows

- Connecting simulations and observations based on physical scale and field
- Use sims to detect anomalies in observed data and if sims describe observed accurately
- Focus on density based methods: model probability distribution
    - Difficult to calculate but can estimate with normalizing flows
    - Transform simple distribution to a complicated one conditioned on other parameters
- Pass density maps to CNN to neural summary statistic to normalizing flows to probability dist dependent on smoothing scale
- Want to use probability dist to determine if observed data is out-of-distribution