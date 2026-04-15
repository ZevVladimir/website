---
Day: Day 3
Type of ML used: [CNN]
---
## Physical insights on galaxy evolution from sparse coding

- Including info about galaxy morphologies and the connection to galaxy physics
    - Simple features currently used aren’t informative of morphology
    - So use CNNs to learn that info
- CNNs can accurately find metal information, spectral info, etc. juts from observational images
- Interpretability: sparse auto-encoders
    - Autoencoder: from x → condensed latent space → predict close to input
    - Sparse is just choosing top k latents and seeing if these can contain all info needed
- Use CNN as an encoder which then creates sparse features for CNN prediction
    - **SFNets**
- Can take a linear combination of the sparse parameters and what morphologies they correspond to and connect to galaxy evolution