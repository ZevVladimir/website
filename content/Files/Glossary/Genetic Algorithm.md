---
tags: [optimization, evolutionary-algorithm]
aliases: [GA]
---
An optimization method loosely based on biological evolutionary principles of random mutation and natural selection. Less likely to be caught in local maxima than local approaches.

**Process**
- GA begins with a initial population of candidate solutions
- For each candidate solution calculate the fitness function
- For each generation the population evolves with each solution being retained, altered, or replaced with an offspring of solutions with higher fitness by selection, mutation, and crossover operations
- Halt evolution after best fitness function doesn't improve for several generations
- In the final population take the solution with the best fitness function as the optimized set of targets

Well suited to solve a [[Knapsack problem]] when the problem is highly non-linear and potentially multi-modal. [[ihRockyPlanetsStars2025]]