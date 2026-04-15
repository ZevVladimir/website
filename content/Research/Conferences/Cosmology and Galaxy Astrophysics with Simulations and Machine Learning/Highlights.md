Slides: [https://www.dropbox.com/scl/fo/lun4fmhgn98uyt6uctgpg/AFlP0j-u9jELAVxHljBxaZw?rlkey=lvwovf6c8ixj5u2p0e7qrrfy2&st=yi3kg1bg&dl=0](https://www.dropbox.com/scl/fo/lun4fmhgn98uyt6uctgpg/AFlP0j-u9jELAVxHljBxaZw?rlkey=lvwovf6c8ixj5u2p0e7qrrfy2&st=yi3kg1bg&dl=0)

[https://www.simonsfoundation.org/event/cosmology-and-galaxy-astrophysics-with-simulations-and-machine-learning-2024/](https://www.simonsfoundation.org/event/cosmology-and-galaxy-astrophysics-with-simulations-and-machine-learning-2024/)

- Using CAMELS and other sims to create emulators and forward models for the next generation of observations (EUCLID)
- Use NN to generate
    - Maps of dark energy, dark matter, baryons, filaments, initial random fields, weak lensing (with baryons)
    - Generate spectra (lyman alpha brought up a few times)
    - Summary statistics
- Use NNs to improve compression
    - Using latent variables
    - Creating a summary vector
- New sims
    - Using bunch of low resolution sims to correct a couple high resolution ones
    - PRIYA: lyman alpha forest cosmology
    - Addition of photometry calculations within them for direct comparison to observation
    - CHARM: create mock halo catalogues from dark matter density field w/ NN trained on low resolution particle mesh
    - DREAMS: run a lot of zooms and has a wide variety of potential parameters that can be tuned allowing to train NNs on and get constraints and information about observables
    - JERALD: get high resolution DM and baryonic maps from lower resolution Nbody
    - FLAMINGO: big sims with baryonic and cosmology variations to allow for observationals
    - Frontier super computer really really big sims
- Fast radio bursts as a way to look at baryon effect on matter power spectrum
- Fast-PM Nbody sims
    - Use results from better Nbody sim
- JAX was mentioned as a way to really speed things up a lot (puts it on the GPU)
- Diffusion model to model distributions of things (like halos, galaxies, satellites)