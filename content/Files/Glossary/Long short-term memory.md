---
tags: [RNN, machine learning]
aliases: [LSTM]
---
Type of [[Recurrent neural network]] constructed to mitigate the vanishing gradient problem. Provides short-term memory to the RNN that lasts thousands of timesteps.

Constructed of a cell and three gates: input gate, output gate and forget gate.
Forget gate determines what information to discard from previous state
Input gate decides which pieces of new information to store in the current cell
Output gate controls which pieces of information in the current cell state to output