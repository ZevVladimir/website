---
tags: [machine learning]
aliases: [RNN]
---
Designed for processing sequential data where ordering of the elements is important. Output of a neuron at one time step is fed back as input to the network at the next time step.

Fundamental building block is a recurrent unit with a hidden state (or memory that is updated at each time step based on current input and prior hidden state).

Traditional models suffer from vanishing gradient problem so they can not learn long-range dependencies as well. But with [[Long short-term memory|LSTM]] they are able to handle them.