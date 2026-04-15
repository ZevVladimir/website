
---

tags: #Astrophysics-Instrumentation-and-Methods-for-Astrophysics , #Computer-Science-Machine-Learning #paper 

citekey: smithAstronomiaExMachina2023

collection:

- MAROON-X/To Read

status: unread

dateread:

---
# Notes
## Abstract
- Review of use of deep learning methods in astronomy 
- Advocate for adoption of GPT like foundation models
## Main Paper
### Primer on Artificial Neurons
- MP neuron function
	- If the sum of inputs exceeds a threshold then the neuron fires outputting a 1 (if $\sum_{i=1}^{n}x_{i}>\Theta$ and $\mathcal{I}=0$)
	- Otherwise outputs 0
	- With $\mathcal{I}$ being an "inhibitory input"
	- Powerful but missing the ability to learn
#### The perceptron
- Takes numeric inputs $(x_{i})$ and multiplies them by a corresponding weight $(w_{i})$
- Then sum these and pass it to an activation function $H$ which transforms $\boldsymbol{w\cdot x}\to p$ into a prediction
- To train
	- Compare $p$ to $y$ the label with a loss function
	- The loss function is a differentiable function
	- Use the chain rule to find how to change the weights 
	- Want $\dfrac{ \partial \mathcal{L} }{ \partial \boldsymbol{w} }$
	- Use chain rule 
	- Then update w with a learning rate times $\dfrac{ \partial \mathcal{L} }{ \partial w }$
#### The multilayer perceptron
- Contains multiple layers of neurons
- Use back propagation to actually train it
- Again look for $\dfrac{ \partial \mathcal{}L }{ \partial \boldsymbol{w}_{l} }=\dfrac{ \partial \mathcal{L} }{ \partial \boldsymbol{p}_{l} }\dfrac{ \partial \boldsymbol{p}_{l} }{ \partial \boldsymbol{w}_{l} }$
- Then can go for each layer  and get a complete equation for describing the update per layer

## Conclusion
- 

> [!Cite]

Smith, Michael J., and James E. Geach. “Astronomia Ex Machina: A History, Primer, and Outlook on Neural Networks in Astronomy.” _Royal Society Open Science_ 10, no. 5 (2023). [https://doi.org/10.1098/rsos.221454](https://doi.org/10.1098/rsos.221454).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Smith, M]] 
**Author**: [[Files/Authors/Geach, J]] 


> **Year**: 2023  

> **Citekey**: smithAstronomiaExMachina2023 

> **itemType**: journalArticle 

> **Journal**: *Royal Society Open Science* 

> **Volume**: 10 

> **Issue**: 5 

> **DOI**:: 10.1098/rsos.221454   

  
> [!Abstract]

>

> In this review, we explore the historical development and future prospects of artificial intelligence (AI) and deep learning in astronomy. We trace the evolution of connectionism in astronomy through its three waves, from the early use of multilayer perceptrons, to the rise of convolutional and recurrent neural networks, and finally to the current era of unsupervised and generative deep learning methods. With the exponential growth of astronomical data, deep learning techniques offer an unprecedented opportunity to uncover valuable insights and tackle previously intractable problems. As we enter the anticipated fourth wave of astronomical connectionism, we argue for the adoption of GPT-like foundation models fine-tuned for astronomical applications. Such models could harness the wealth of high-quality, multimodal astronomical data to serve state-of-the-art downstream tasks. To keep pace with advancements driven by Big Tech, we propose a collaborative, open-source approach within the astronomy community to develop and maintain these foundation models, fostering a symbiotic relationship between AI and astronomy that capitalizes on the unique strengths of both fields.

>.



# Annotations%% begin annotations %%





%% end annotations %%
