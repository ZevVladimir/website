---
aliases:
  - GP
  - GP model
  - GPR
  - Gaussian process
tags:
  - MAROON-X
  - ML
---
[[Gaussian Processes Summary-Review]]

A continuous, stochastic process such that every finite linear combination of the random variables it describes is normally distributed. Any linear function of a GP results in another GP. [[jonesImprovingExoplanetDetection2020]]

Models a distribution over functions, not just one single curve, but rather a range of possible ones each with a weight for how likely it is. Uses a kernel (covariance function) to determine how much the value at one point affects the value at another. Condition the model on observational data and can now predict new values with uncertainty from a mean function (the mostly likely curve)
See [[aigrainGaussianProcessRegression2023]] for more detail