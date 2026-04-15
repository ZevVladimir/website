---
Day: Day 2
Type of ML used: [Emulator, Simulation Based Inference]
---
## Learning Optimal and Interpretable Summary Statistics of Cosmological Simulations

- Use ML based inference model with entire data to learn summary statistics
- Use graphs to encode galaxy catalogues with translational + rotational symmetry preserved
- Then these graphs go to GNN and create a summary vector which is analyzed
- Compress summary vector and use PCA and examine **isomap** distributions
- Summaries are robust to machine architecture
- Compare simulations in isomap representation
    - Look at how much space is taken up in latent space
- Train emulator to predict summary given cosmological parameters
    - Find humanly meaningful structure