---
Day: Day 1
Type of ML used: [GNN, NN, Simulation Based Inference]
---
## Simulation-based inference of cosmology from multi-probe maps using deep learning

- Train NN on forward model of simulation based observations to constrain cosmological parameters
    - Simulation based are more accurate than gaussian random fields
    - Using DeepLSS(?) works much better
- CosmoGridV1
    - Can create a lot weak lensing and galaxy clustering maps to combat noise
- Use learned summary statistics
    - Beyond gaussian
    - Easy probe combination
        - Weak lensing
        - Galaxy clustering
- Use deepsphere for the NN to capture map information
    - Graph CNNs