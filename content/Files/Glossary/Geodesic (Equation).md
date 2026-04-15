---
tags: [general-relativity, cosmology]
aliases: [Geodesic, Geodesic Equation]
---
- The shortest path (extremal path) between two points

- $\dfrac{ \mathrm{d} ^{2}x'^{l} }{ \mathrm{d} t^{2} }+\left[ \left( \left\{ \dfrac{ \partial x }{ \partial x' } \right\}^{-1} \right)^{l}_{i} \dfrac{ \partial^{2}x^{i} }{ \partial x'^{j}\partial x'^{k} }\right]\dfrac{ \mathrm{d} x'^{k} }{ \mathrm{d} t }\dfrac{ \mathrm{d} x'^{j} }{ \mathrm{d} t }=0$
	- Define Christoffel symbol: $\Gamma_{jk}^{l}=\left[ \left( \left\{ \dfrac{ \partial x }{ \partial x' } \right\}^{-1} \right)^{l}_{i} \dfrac{ \partial^{2}x^{i} }{ \partial x'^{j}\partial x'^{k} }\right]$
- In relativity equation becomes: $\dfrac{ \mathrm{d} ^{2}x^{\mu} }{ \mathrm{d} \lambda^{2} }+\Gamma_{\alpha\beta}^{\mu}\dfrac{ \mathrm{d} x^{\alpha} }{ \mathrm{d} \lambda }\dfrac{ \mathrm{d} x^{\beta} }{ \mathrm{d} \lambda }=0$
	- Using $\Gamma_{\alpha\beta}^{\mu}=\dfrac{g^{\mu \nu}}{2}\left[ \dfrac{ \partial g_{\alpha \nu} }{ \partial x^{\beta} } +\dfrac{ \partial g_{\beta \nu} }{ \partial x^{\alpha} }-\dfrac{ \partial g_{\alpha\beta} }{ \partial x^{\nu} }\right]$
- Compact covariant form: $P^{\alpha}\nabla_{\alpha}P^{\mu}=0$
