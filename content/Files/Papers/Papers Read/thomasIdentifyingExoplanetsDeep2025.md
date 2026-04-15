
---
Title: Identifying Exoplanets with Deep Learning: A CNN and RNN Classifier for Kepler DR25 and Candidate Vetting

tags: #Astrophysics-Instrumentation-and-Methods-for-Astrophysics #Astrophysics-Earth-and-Planetary-Astrophysics #paper #Deep-Learning #CNN #RNN #exoplanet 

citekey: thomasIdentifyingExoplanetsDeep2025

collection:

- Papers to Read

status: unread

dateread:

---
# Notes
## Abstract
- Use hybrid deep learning with
	- Convolutional networks
	- Bidirectional [[Long short-term memory|LSTM]]s
	- Attention mechanism
- To identify planetary transit signals with improved accuracy and interpretability
- Fast predictions allow for scalable discovery
## Main Paper
### Introduction
- Using a bidirectional LSTM (BiLSTM) would be able to enable the model to capture long-range sequential information across the light curve
- The attention layer provides interpretability by highlighting which parts of the sequence influence the classification decision
- Build on top of prior CNN only model
- Research Gap:
	- CNNs can't fully capture sequential context alone
	- RNNs address that but struggle with interpretability
	- Attention mechanisms offer interpretability but struggle with local feature extraction when alone
- Interpretability
	- By displaying how attention is distributed across the input sequence can see which time bins played the biggest role in classification
### Discussion
- 
## Conclusion
- Use a DL framework with CNNs bidirectional LSTM layers and attention mechanisms to enhance classification of exoplanet transit signals
- Balances accuracy, computational efficiency, and interpretability
- Attention maps provide information about model's decision making process and visualizations of transit features
## Questions
- 

> [!Cite]

Thomas, Bibin, Vittal Bhat M, Salman Arafath Mohammed, Abdul Wase Mohammed, Adis Abebaw Dessalegn, and Mohit Mittal. “Identifying Exoplanets with Deep Learning: A CNN and RNN Classifier for Kepler DR25 and Candidate Vetting.” arXiv:2509.04793. Preprint, arXiv, September 5, 2025. [https://doi.org/10.48550/arXiv.2509.04793](https://doi.org/10.48550/arXiv.2509.04793).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Thomas, B]] 
**Author**: [[Files/Authors/M, V]] 
**Author**: [[Files/Authors/Mohammed, S]] 
**Author**: [[Files/Authors/Mohammed, A]] 
**Author**: [[Files/Authors/Dessalegn, A]] 
**Author**: [[Files/Authors/Mittal, M]] 


> **Year**: 2025  

> **Citekey**: thomasIdentifyingExoplanetsDeep2025 

> **itemType**: preprint 

> **DOI**:: 10.48550/arXiv.2509.04793   

  
> [!Abstract]

>

> The rapid expansion of exoplanet survey missions such as Kepler, TESS, and the upcoming PLATO mission has generated massive light-curve datasets that challenge traditional vetting pipelines. We introduce a hybrid deep-learning framework that integrates convolutional networks, bidirectional LSTMs, and an attention mechanism to identify planetary transit signals with improved accuracy and interpretability. Trained on Kepler DR25 data, the model achieves F1 = $0.910 \pm 0.008$ (AUC--ROC = $0.984 \pm 0.004$), significantly outperforming CNN-only baselines. Attention-based visualizations highlight ingress and egress phases consistent with astrophysical expectations. Applied to 1,360 DR25 candidate dispositions, our pipeline identified 190 high-confidence signals (P(model) $<$ 0.70) that passed initial validation. Following comprehensive false positive probability (FPP) analysis and contamination tests, 13 candidates achieved statistical validation, of which three were fully confirmed as robust exoplanets: KOI-901.01 (warm mini-Neptune), KOI-1066.01 (hot Jupiter), and KOI-212.01 (warm Neptune). With an inference time of $\sim 80$ ms per candidate, this framework enables scalable real-time triage for TESS and future PLATO operations, while the validated candidates provide a prioritized list for radial velocity, timing, and atmospheric follow-up. This interpretable, efficient pipeline addresses the bottleneck in exoplanet confirmation, advancing scalable discovery in the era of large-scale surveys.

>.



# Annotations%% begin annotations %%





%% end annotations %%
