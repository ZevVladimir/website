---
tags: [GP-model, kernel]
aliases: []
---
For a GP applied to a single time series this kernel can be represented as a semi-separable matrix which means that it scales as $O(n)$
$k(\Delta t)=\sum_{s<n_{c}}(a_{s}\cos(v_{s}\Delta t)+b_{s}\sin(v_{s}\Delta t))e^{-\lambda_{s}\Delta t}$
- $n_{c}$ is the number of components
- $a_{s},\;b_{s},\;\lambda_{s},\;v_{s}$ are kernel hyperparameters
- 