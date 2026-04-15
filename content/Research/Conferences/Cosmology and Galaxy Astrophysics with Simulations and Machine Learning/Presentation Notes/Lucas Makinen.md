---
Day: Day 2
Observational Data: [MANGA]
Type of ML used: [Simulation Based Inference]
Code/Program Developed/Used: [FISHNETS, SAPPHIRE]
---
## What can Data tell us about Galaxy Formation?

- Given galaxy data what model best describe and reproduce the parameters and give insight
- **SAPPHIRE**
    - Model galaxy as complex dynamical system
    - Galaxy + atmosphere described by several non linear ODEs
    - Feedback
        - Ratio of stuff going out and stuff being made
        - Can be parametrized by power laws
- FISHNETS
    - SBI (simulation based inference) statistics
    - Can obtain a “score”/embedding vector that describes the parameters of a group of galaxies and then can get matrix of fisher info
    - Can then get a maximum likelihood estimator for the global parameters
    - Can use a NN to predict sizes of the vector and matrix
    - Add additional features to accurately capture the parameters
- MAnGA
    - Add noise to Sapphire data and then make a cut to pass to FISHNETS
    - Then also pass MAnGA data to FISHNETS
    - Can obtain join constraints on parameters