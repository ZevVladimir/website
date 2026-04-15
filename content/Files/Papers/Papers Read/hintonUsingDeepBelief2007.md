
---
**Title**:: Using Deep Belief Nets to Learn Covariance Kernels for Gaussian Processes 

tags: #GP-Model #kernel #DBN #Computer-Science-Machine-Learning 

citekey: hintonUsingDeepBelief2007

collection:

- MAROON-X/To Read

status: unread

dateread:

---
# Notes
## Abstract
- Can use unlabeled data and a deep belief net to learn a good covariance kernel for a [[Gaussian Process Model|GP]]
- Learn a deep generative model of unlabeled data using fast greedy algorithm
## Main Paper
### Introduction
- GPs are discriminative models by nature and within standard regression or classification scenario unlabeled data is of no use
- Exploit 2 properties of [[Deep Belief Networks]] (DBN)
	- Can be learned efficiently from unlabeled data. Top level features generally capture significant high-order correlations in the data
	- Can be discriminatively fine-tuned using backpropagation
- Process
	- Learn DBN model of $p(\boldsymbol{X})$ in an entirely unsupervised way using fast greedy learning algorithm
	- Use this to initialize multi-layer non-linear mapping $F(\boldsymbol{x}|W)$ 
		- Parametrized by W 
		- $F:\boldsymbol{X}\to \boldsymbol{Z}$ maps the input vectors in $\boldsymbol{X}$ into the feature space $\boldsymbol{Z}$
			- Will contain million of parameters
			- Top-level features fairly accurately reconstruct the input
	- Set kernel function to $K(\boldsymbol{x}_{i},\boldsymbol{x}_{j})=\exp(-||F(\boldsymbol{x}_{i}|W)-F(\boldsymbol{x}_{j}|W)||^{2})$
		- Initialized entirely unsupervised
		- Parameters W can be fine-tuned using labeled data by maximizing log probability
### Learning Deep Belief Networks
- Training a [[Deep Belief Networks]] can be done efficiently with [[Restricted Boltzmann Machine|RBM]]s by learning one layer of hidden features at a time
- **Modeling real value data**
	- Use conditional Gaussian distribution for modeling observed "visible" pixel values $\boldsymbol{x}$ and a conditional Bernoulli distribution for modeling "hidden" features $\boldsymbol{h}$
		- $p(x_{i}=x|\boldsymbol{h})=\dfrac{1}{\sqrt{ 2\pi }\sigma_{i}}\exp \left( - \dfrac{\left( x-b_{i}-\sigma_{i}\sum_{j}h_{j}w_{ij} \right)^{2}}{2\sigma_{i}^{2}} \right)$
		- $p(h_{j}=1|\boldsymbol{x})=g\left( b_{j}+\sum_{i}w_{ij} \dfrac{x_{i}}{\sigma_{i}} \right)$
			- $g(x)=\dfrac{1}{1+\exp(-x)}$ is the logistic function
			- $w_{ij}$ is a symmetric interaction term between input $i$ and feature $j$
			- $\sigma_{i}^{2}$ is the variance of input $i$ 
			- $b_{i},b_{j}$ are biases
	- Marginal distribution over visible vector $\boldsymbol{x}$
		- $p(\boldsymbol{x})=\sum_{h} \dfrac{\exp(-E(\boldsymbol{x,h}))}{\int_{u}\sum_{g}\exp(-E(\boldsymbol{u,g}))d\boldsymbol{u}}$
		- Where $E(\boldsymbol{x,h})$ is an energy term: $E(\boldsymbol{x,h})=\sum_{i} \dfrac{(x_{i}-b_{i})^{2}}{2\sigma_{i}^{2}}-\sum_{j}b_{j}h_{j}-\sum_{i,j}h_{j}w_{ij} \dfrac{x_{i}}{\sigma_{i}}$
	- To perform gradient ascent:
		- $\Delta w_{ij}=\epsilon \frac{ \partial \log p(\boldsymbol{x}) }{ \partial w_{i,j} }=\epsilon(\langle z_{i}h_{j} \rangle_{data}-\langle z_{i}h_{j} \rangle_{model})$
		- $\epsilon$ is the learning rate
		- $z_{i}=\dfrac{x_{i}}{\sigma_{i}}$
### Learning the Covariance Kernel for a GP
- After pretraining the stochastic activities of the binary features in each layer are rpelaced by deterministic real valued probabilities
- Then use the DBN to initialize a multi layer non linear mapping $f(\boldsymbol{x}|W))$
- Define Gaussian covariance function parametrized by $\theta=\{\alpha,\beta\}$ and W
	- $K_{ij}=\alpha \exp \left( - \dfrac{1}{2\beta}||F(\boldsymbol{x}_{i}|W)-F(\boldsymbol{x}_{j}|W)||^{2} \right)$
	- Initialization is done entirely unsupervised
- Maximize the log likelihood with respect to parameters of covariance function using the labeled data
	- Text describes the gradients needed $\frac{ \partial L }{ \partial \theta }$ and $\frac{ \partial L }{ \partial W }$
- Each gradient evaluation has $O(N^3)$ complexity ($N$= number of labeled training cases)
	- But this can be kept small and used only to refine what is learned from unlabeled data
## Conclusion
- Show how to use DBNs to greedily pretrain and discriminatively fine tune a covariance kernel for a GP
- For high dimensional, highly structured data, it is an effective way to make use of a large unlabeled data set

> [!Cite]

Hinton, Geoffrey E, and Russ R Salakhutdinov. “Using Deep Belief Nets to Learn Covariance Kernels for Gaussian Processes.” _Advances in Neural Information Processing Systems_ 20 (2007). [https://papers.nips.cc/paper_files/paper/2007/hash/4b6538a44a1dfdc2b83477cd76dee98e-Abstract.html](https://papers.nips.cc/paper_files/paper/2007/hash/4b6538a44a1dfdc2b83477cd76dee98e-Abstract.html).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Hinton, G]] 
**Author**: [[Files/Authors/Salakhutdinov, R]] 


> **Year**: 2007  

> **Citekey**: hintonUsingDeepBelief2007 

> **itemType**: conferencePaper 

> **Volume**: 20 

> **Publisher**: Curran Associates, Inc.   

  
> [!Abstract]

>

> We show how to use unlabeled data and a deep belief net (DBN) to learn a good covariance kernel for a Gaussian process. We first learn a deep generative model of the unlabeled data using the fast, greedy algorithm introduced by Hinton et.al. If the data is high-dimensional and highly-structured, a Gaussian kernel applied to the top layer of features in the DBN works much better than a similar kernel applied to the raw input. Performance at both regression and classification can then be further improved by using backpropagation through the DBN to discriminatively fine-tune the covariance kernel.

>.



# Annotations%% begin annotations %%





%% end annotations %%
