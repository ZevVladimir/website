---
Type of Simulation: [NBody]
---
- Store information in a tree where each node has 4 children
- Create tree
    1. Loop through bodies one after another
    2. If node x doesn’t contain a body, put the new body there
    3. If node x is an internal node, update the center-of-mass and total mass of the node. Then insert the body into the appropriate quadrant
    4. If node x is an external node, containing another body, subdivide the region by creating four children and place b and c in the appropriate quadrants. May have to repeat this if the particles end up in the same quadrants. Then update center-of-mass and total mass of node
- Calculate force on body
    1. Start at root node
    2. If center-of-mass of internal node is sufficiently far away,roximate it as the group’s total mass at the group’s center of mass
        1. To determine how far away: compute s/d where s is the width of the region represented by the internal node and d is the distance between the body and the node’s center of mass
        2. Generally have $s/d > \theta; \theta=0.5$

## Sources

[http://arborjs.org/docs/barnes-hut](http://arborjs.org/docs/barnes-hut)