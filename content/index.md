---
publish: true
title: Ze'ev Vladimir
---
Hello, I'm Ze'ev Vladimir, a Ph.D. student at the University of Arizona working with Dr. Gurtina Besla. I am studying the Magellanic Clouds using [[Hydrodynamical Simulations|hydrodynamic simulations]] to understand star formation and stellar feedback (for more info see [[Simulating the Magellanic Clouds Overview]]). I also am currently working with Dr. Andrey Kravtsov, from the University of Chicago, to classify if the faintest satellite orbiting in the [[Milky Way]] (Ursa Major III / UNIONS 1) is a galaxy or a cluster of stars (for more info see [[Ursa Major III - UNIONS 1 Overview]]). 

I previously worked as post-baccalaureate researcher at the University of Chicago with Dr. Jacob Bean to reduce data from the MAROON-X instrument. The data-reduction pipeline takes the raw spectral data from the star and calculates extremely precise measurement of a star's radial velocity to find exoplanets (for more info see [[MAROON-X Overview]]). As an undergraduate I worked with Dr. Benedikt Diemer at the University of Maryland to train a machine learning model to classify if, in [[Dark Matter|dark matter]] only [[N-body Simulation|N-body simulations]], the dark matter particles belong to a [[Dark Matter Halo|dark matter halo]] or not (for more information see [[ATHENA Overview]]).

My primary interests are in how computational techniques can be applied to better understand galaxy formation, evolution, and dynamics. I use [[N-body Simulation|N-body simulations]], [[Hydrodynamical Simulations|hydrodynamical simulations]], and machine learning techniques to better understand [[Galaxy|galaxies]] and [[Dark Matter|dark matter]].
## About
<div style="display: flex; gap: 12px; flex-wrap: wrap;">
  <a href="https://docs.google.com/document/d/1OPk-gnkTspwi4OK_xEU7kQBY0EPEafZlNjCIedh0hHQ/edit?usp=sharing" class="button">View my CV</a>
  <a href="https://scixplorer.org/search?fq=%7B%21type%3Daqp+v%3D%24fq_database%7D&fq_database=%28database%3Aastronomy+OR+database%3Aphysics%29&q=+author%3A%22Vladimir%2C+Ze%27ev%22&sort=date+desc%2C+bibcode+desc&p_=0&d=astrophysics" class="button">SciX-ADS</a>
  <a href="https://github.com/ZevVladimir" class="button">GitHub</a>
</div>

<style>
.button {
  display: inline-block;
  padding: 12px 24px;
  background-color: var(--secondary);
  color: var(--light);
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.1em;
  transition: opacity 0.2s;
}
.button:hover {
  opacity: 0.85;
}
</style>

I have some information about my personal interests and community work in [[About Me]]. For information about my research projects see any of the overview pages which are listed below. 
## Research Projects
### Modern Simulations of the Magellanic Clouds
My Ph.D. thesis, advised by [Dr. Gurtina Besla](https://sites.google.com/view/thebeslagroup/home) at the University of Arizona, centers around using [[Hydrodynamical Simulations|hydrodynamic simulations]] to understand observations of the Large and Small Magellanic Clouds (the LMC and SMC respectively). Current simulations that model the Magellanic Clouds are unable to explain the high rates of star formation we observe in the SMC as well as several key structures such as the LMC's off-center bar and single armed spiral and the SMC's small line of sight size but large depth. Our current theory is that with accurate modeling of the orbits of the LMC and SMC that includes the, now confirmed, collision between the two galaxies and an updated model of the [[ISM|interstellar medium]], which describes how stars form and affect their surrounding environment, we will be able to explain these observations.

For a more in-depth explanation please check out [[Simulating the Magellanic Clouds Overview]]

### Dwarf Galaxy versus Stellar Cluster
Dwarf galaxies, the smallest [[Galaxy|galaxies]], provide an excellent "laboratory" to study both galaxies and [[Dark Matter|dark matter]]. Based on characteristics of these galaxies like their mass, [[Luminosity|luminosities]], or what stars are present we can place constraints on different models of dark matter. These constraints will help us eliminate certain models and narrow the possibilities that need to be tested. With [Dr. Andrey Kravstov](https://astro.uchicago.edu/~andrey/) at the University of Chicago I am running [[N-body Simulation|N-body simulations]] of a potential dwarf galaxy, Ursa Major III / UNIONS 1. We are looking for an observable [[Stellar Stream|stellar stream]] from which we would be able to determine if it is indeed the smallest dwarf galaxy ever found.

### Exoplanet Search with the Radial Velocity Method 
As a post-baccalaureate researcher at the University of Chicago with [Dr. Jacob Bean](https://astro.uchicago.edu/~jbean/index.html) I reduced the data produced by MAROON-X. MAROON-X is an instrument on the Gemini-North telescope that targets M-dwarf stars looking for exoplanets using the [[Radial Velocity Method|radial velocity method]]. The reduction pipeline I ran takes the raw [[Charge-Coupled Device|CCD]] images taken by MAROON-X and through careful calibrations produces extremely precise radial velocity measurements of stars. With these radial velocities we, and our collaborators, are able to find and characterize exoplanets. 

For a more in-depth explanation please check out [[MAROON-X Overview]]

### Dark Matter Halo Characterization with Machine Learning
[[Dark Matter Halo|Dark matter halos]] are one of the key building blocks in our universe and are the hosts of galaxies. Understanding their shape is important to understanding how galaxies themselves form and evolve as well as providing an essential probe into what [[Dark Matter|dark matter]] is. With [Dr. Benedikt Diemer](https://www.benediktdiemer.com/) at the University of Maryland I trained a machine learning model, XGBoost, to accurately and quickly identify which dark matter particles in an N-body simulation belong to a dark matter halo. With this we were able to more effectively determine the halo's structure than comparable methods. 

For more information check out: 
- Distinguishing Orbiting and Infalling Dark Matter Particles with Machine Learning.  **Vladimir, Z.**, Osinga, C., Diemer, B., Salazar, E. M., & Rozo, E. — *The Astrophysical Journal*, 2025 [Paper](https://doi.org/10.3847/1538-4357/ae1a76) | [arXiv](https://arxiv.org/abs/2506.09146) | [Code](https://doi.org/10.5281/zenodo.17228903) 
- [[ATHENA Overview]]

## Navigating the Website
I also am trying to make my website as accessible as possible to people from a broad range of backgrounds. You have probably noticed links like [[index|Example Link]] which take you to different pages within the website much like Wikipedia. Additionally, if you are on a computer you can just hover over these links to get a quick look! 

I've tried to provide definitions, illustrations, videos, and links to additional resources where possible. The goal is to provide a broader understanding of some key astrophysical concepts which motivate the very specific work I do. Additionally, as you navigate, you will see some of these pages have the following call outs: 

>[!lay]+ For everyone!
> These blocks indicate the information is for people of any background. Expect more digestible explanations that leave out the more technical details/nuances. They also might include longer descriptions of plots or results to help everyone learn.

>[!general]+ Slightly more technical
> These blocks indicate that the topics will contain more complex material, often more jargon or equations. They are intended for an audience with background in astrophysics but not so difficult to scare anyone off. So if you're interested in a particular topic definitely check these out too!

## Contact
**Email:** zevvladimir3002@gmail.com
