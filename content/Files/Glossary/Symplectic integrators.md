---
aliases: []
tags: [MAROON-X]
---
Unlike numerical integrators like the classical Runge-Kutta iteration which carry penalty of numerical dissipation (secular change of energy even in conservative system) symplectic integrators preserve symplecticity. Practically total energy and angular momentum do not exhibit [[Secular Evolution]] so positional errors only grow linearly (not quadratically) with time. They split the Hamiltonian into an unperturbed Keplerian part and an additional contribution from smaller mutual gravitational interactions that are integrated separately