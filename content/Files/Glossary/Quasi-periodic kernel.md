---
tags: [GP-model, kernel, modeling, periodic, stars]
aliases: [QP kernel, QP]
---
[[stockGaussianProcessesRadial2023]] Can model both a periodic signal and a correlation length of that signal simultaneously. No specific form but commonly the multiplication of an exponential-sine-squared kernel with a squared-exponential kernel: $k(\tau)=\sigma_{GP}^{2}\exp(- \dfrac{\tau^{2}}{2l^{2}}-\Gamma \sin^2(\dfrac{\pi \tau}{P_{rot}}))$
Where: 
- $\sigma_{GP}$ is the amplitude of the GP component (units of the data)
- $\Gamma$ defines the relative weight between the GP sine-squared component and the squared-exponential component (dimensionless)
- $l$ is the correlation length scale of the GP squared-exponential component (units of time)
- $P_{rot}$ is the period of the GP sine-squared component (units of time)
- $\tau$ is the time lag (units of time)
Common to add a jitter term to the diagonal terms of the covariance function.
Infinitely differentiable.

[[angusInferringProbabilisticStellar2018]]
Defines QP kernel as $k_{i,j}=A\exp\left[- \dfrac{(x_{i}-x_{j})^{2}}{2l^{2}}-\Gamma^{2}\sin ^{2}\left(\dfrac{\pi(x_{1}-x_{j})}{P}\right)\right]{\sigma^{2}\delta_{ij}}$
Where $x_{i}-x_{j}$ is the separation between datapoints. P can be interpreted as the rotation period of the star, $\Gamma$ controls the amplitude of the $\sin ^{2}$ term, $\sigma$ captures white noise