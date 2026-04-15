---
Day: Day 2
Type of ML used: [CNN, Generative AI]
Code/Program Developed/Used: [CHARM, GOTHAM, PatchNET]
---
## How to Make Cosmological Simulations Useful

- Goal: to go from observations to simulations of initial conditions. Cosmological inference
- Use ML as implicit inference
    - Now sims can fit models to high level of data
    - Obtain tighter and better constraints
- **LtU-ILI pipeline** (?)
    - Makes process of data loading, inference, and validation much easier and accessible
- Simulation box sizes aren’t big enough bcs scaling problem of larger boxes
    - **South galactic cap** (?) last biggest
    - Requires ML-acceleration or emulation of full computational models for larger
- **CHARM**: generative model
    - Can generate mock catalogs at scale can actually compare to observations
- **GOTHAM**
    - Transformer model to look at Nbody sim then say the properties of which tracers would be found (halo dist)
    - Improves scales
- For power spectra NN doesn’t get all information out
    - But as you increase the number of sims it improves
    - Would need ~4000 sims to reach information bound
- To get all these sims use **PatchNet**
    - Can break up each box into patches to train a CNN summary of info from much fewer sims
- Goal is to use multiple datasets
- Can train diffusion models for initial conditions