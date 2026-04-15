---
Day: Day 2
Simulations Used: [Abacus, MilenniumTNG, Quijote, SimBIG]
---
## Practical Simulation-Based Cosmological Inference with Learning the Universe

- Build an implicit simulation based model to constrain the parameters based on observed data
- Generate DMO sim → galaxy halo connection → lighcone → mimic observations → compare to observations → do ML
- **SimBIG**
    - Matches well but isn’t big enough
- Improve DMO and halo biasing
- Run **Fast-PM** N-body sims
    - Didn’t work great for halo finders
- Local in-Matter Density
    - Connect number of halos to halo density (?) p(\delta(r))
- **CHARM** developed to input Fast-PM solution and 3D halo dist and velocity to generate halo catalogues
    - Now much faster than N-body
- Train ML model on emulator to predict parameters (?)
    - All trained and tested on Quijote
- Beyond quijote and go larger to **Abacus Sims** and MilleniumTNG
    - All have different methods of gravity, halo finder, light cone, etc. but it all matches well