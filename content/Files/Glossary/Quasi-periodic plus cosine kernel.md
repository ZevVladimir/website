---
tags: [GP-model]
aliases: [QPC]
---
An evolution on the [[Quasi-periodic kernel]] with the intention to explicitly generate power at half the rotation period. This is because in light and RV curves of active stars there is not only significant power at the stellar rotation period but also at its harmonics which is not captured by the QP kernel

Defined as: $k_{QPC}(t,t')=A\exp \left[ - \dfrac{(t-t')^{2}}{2l^{2}} \right]\times \left( \exp \left[ -\Gamma \sin ^{2}\left( \dfrac{\pi(t-t')}{P} \right) \right] +f\cos \left( \dfrac{4\pi(t-t')}{P} \right)\right)$
Where:
- $A$ is the variance
- $\Gamma$ is the scale factor (harmonic complexity)
- $P$ is the period of the sine-squared term
- $l$ is the evolution time-scale of the squared exponential term
- $f$ controls the amplitude of the cosine term relative to the sine-squared term (as it goes to 0 acts more like [[Quasi-periodic kernel|QP kernel]])