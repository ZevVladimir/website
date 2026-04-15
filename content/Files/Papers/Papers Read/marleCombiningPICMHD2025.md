
---
Title: Combining PIC and MHD to model particle acceleration in astrophysical shocks

tags: #Astrophysics-High-Energy-Astrophysical-Phenomena #PIC #MHD #paper

citekey: marleCombiningPICMHD2025

collection:

- Papers to Read

status: unread

dateread:

---
# Abstract
- Want to model the shock from the collision of supersonic plasma flows
- This accelerates non-thermal ions which reach relativistic speeds and become cosmic rays
- Difficult to simulate due to requiring macro and micro physics
- Use PIC-MHD 
	- Describe plasma as thermal gas (MHD) and a small non thermal component (PIC)
# Introduction
- Astrophysical shocks are considered the primary source of CRs
- The particles are accelerated to relativistic speeds by repeated shock crossing
	- Gains momentum by being reflected across the shock with the local magnetic field
- These particles also affect the stream by draining energy and triggering instabilities
- But this is rarely considered in simulation due to the numerical challenge in modeling across scales
- 
# Discussion
- 
# Conclusion
- PIC-MHD is demonstrated to be a viable alternative to PIC and di-hybrid methods
- Still much more future work of extending to additional physics like special relativistic MHD
# Questions
- 

> [!Cite]

Marle, Allard Jan van. “Combining PIC and MHD to Model Particle Acceleration in Astrophysical Shocks.” arXiv:2509.12150. Preprint, arXiv, September 15, 2025. [https://doi.org/10.48550/arXiv.2509.12150](https://doi.org/10.48550/arXiv.2509.12150).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Marle, A]] 


> **Date**: 2025-09-15  

> **Citekey**: marleCombiningPICMHD2025 

> **itemType**: preprint 

> **DOI**:: 10.48550/arXiv.2509.12150   

  
> [!Abstract]

>

> When supersonic plasma flows collide, many physical processes contribute to the morphology of the resulting shock. One of these processes is the acceleration of non-thermal ions, which will, eventually, reach relativistic speeds and become cosmic rays. This process is difficult to simulate in a computer model because it requires both macro-physics (the overall shape of the shock) and micro-physics (the interaction between individual particles and the magnetic field). The combined PIC-MHD method is one of several options to get around this problem. It is based on the assumption that a plasma can be described as a combination of a thermal gas, which can be accurately described as a fluid using grid-based magnetohydrodynamics (MHD) and a small non-thermal component which has to be described as individual particles using particle-in-cell (PIC). By combining aspects of both methods, we reduce the computational costs while maintaining the ability to trace the acceleration of individual particles. We apply this method to a variety of astrophysical shock configurations to investigate if, and how, they can contribute to the cosmic ray spectrum.

>.



# Annotations%% begin annotations %%





%% end annotations %%
