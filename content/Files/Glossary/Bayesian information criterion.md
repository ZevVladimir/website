---
aliases: [BIC]
tags: [MAROON-X,statistics,model-selection]
---

A criterion for model selection where models with a lower BIC are generally preferred. Introduce a penalty term for the number of parameters in the model to reduce overfitting

$\mathrm{BIC}=k\ln(n)=2\ln \hat{L}$
- $\hat{L}$ is the maximized value of the likelihood function of the model M: $\hat{L}=p(x|\hat{\theta},M)$ with $\{\hat{\theta}\}$ being the parameter values that maximize the likelihood function and $x$ behind the observed data
- $n$ is the number of data points in $x$
- $k$ is the number of parameters estimated by the model

BIC is only significant in relative terms.
BIC is suited to select between different models not to select between different samples

In [[sodicksonSearchDecayAnalysis2025]] given by $BIC=\chi^{2}+k\times \ln(N)$

For MAROON-X: The number of knots indicate where the piece wise parts of a spline join. (not sure what I meant by this maybe BIC is used to determine the number of knots or placement?)