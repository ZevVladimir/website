---
Day: Day 2
Code/Program Developed/Used: [HACC]
---
## Calibrating sub-grid physics in large scale structure simulations

- **HACC** used for very large sims
    - Adding additional subgrid models
    - Must be calibrated to observations
- Fast emulators
    - Using NNs go from input to particle 6D fields
    - Gaussian process still most effective
- Subgrid calibration
    
    - Run an ensemble of hydrodynamical sims to get cosmological summary stats and then inference and cosmological measurements to train a really good one
    - Vary 5 subgrid parameters with **Latin Hypercube**
    - Use multiple summary statistics to capture complex connection between parameters