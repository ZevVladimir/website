---
Day: Day 2
Type of ML used: [GNN, Simulation Based Inference]
---
## Machine Learning Solutions for Cosmic Problems. Future directions

- Astrophysics dominates **Simulation-based Inference** (smsharma/awesome-neural-sbi)
- Inductive biases
    - Use symmetry preserving architectures and continuous fields
    - Use GNNs to connect galaxies and pass messages (?)
    - **SEGNN**
    - _Use continuous fields to store a simulation inside a neural network’s weights_
        - Continuous in space and time
        - Still lossy compression
- Learning to represent the feedback manifold
    - Method 1: contrastive, compare two simulations in time and space with same cosmological parameters
    - Method 2: _a model that generates baryonic fields given Dark Matter and baryonic feedback_
    - Interpolate between simulations
- Controllable simulations
    - Use model to go from observation to joint params and initial conditions
    - Continuous time normalizing flows
        - Move from gaussian to base distribution with ODE and velocity field
        - But expensive so use other methods to avoid this
    - Use **interpolant** with stochastic interpolant
        - Turns problem into regression problem
    - Simulate what you want with fuzzy constraints