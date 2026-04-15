---
tags: [MAROON-X]
aliases: []
---

This method is used to reject deviant pixels iteratively.  
Two parameters are used: the number of iterations and the standard deviation multiplier used (Kappa).  
For each iteration, the mean and standard deviation (Sigma) of the pixels in the stack are computed.  
Each pixel which value is farthest from the mean than more than Kappa * Sigma is rejected.  
The mean of the remaining pixels in the stack is computed for each pixel.
http://deepskystacker.free.fr/english/technical.htm