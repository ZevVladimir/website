---
tags: [ML]
aliases: [RBM]
---
Can be trained either unsupervised or supervised. Like Boltzmann machines but with the restriction that neurons must form a bipartite graph
- Pair of nodes from each of the two groups of units may have a symmetric connection between them
- No connections between nodes within a group
Contains binary valued hidden and visible units and consists of a matrix of weights $W$ of size $m\times n$ 
Can calculate the energy of a configuration pair: $E_{v,h}=-\sum_{i}a_{i}v_{i}-\sum_{j}b_{j}h_{j}-\sum_{i}\sum_{j}v_{i}w_{i,j}h_{j}$ and can be used to define the joint probability distribution $P(v,h)=\dfrac{1}{Z}e^{-E(v,h)}$
- $w_{i,j}$ is weight element of $W$ associated with the connection between the
	- Visible (input) unit $v_{i}$
	- Hidden unit ($h_{j}$)
- Bias weights (offsets) $a_{i}$ for $v_{i}$ and $b_{j}$ for $h_{j}$
Lower energy configurations are more probable