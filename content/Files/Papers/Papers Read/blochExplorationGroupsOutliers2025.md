
---
**Title**: Exploration of groups and outliers in Gaia RVS stellar spectra with metric learning 

tags: #Astrophysics-Instrumentation-and-Methods-for-Astrophysics #Astrophysics-Solar-and-Stellar-Astrophysics #paper 

citekey: blochExplorationGroupsOutliers2025

collection:

- Papers Read

status: unread

dateread:

---
# Notes
## Abstract
- Data from GAIA contains nearly million spectra from RV spectrometer (RVS)
- Use self-supervised metric learning techniques, dimensionality reduction, and anomaly detection to better parse this data
- They have a portal to interact with this data https://explore-platform.eu/sda/s-disco
## Main Paper
- Prior models/pipelines to analyze large datasets
	- Rely on detailed astrophysical models
	- Rely on specific parameter spaces
	- Designed to fit most objects well
	- Do not fit minority of sources well leaving them to be undetected/poorly characterized
- Use RF trained on synthetic spectra to establish a meaningful metric space
	- This allows for quantifying anomalies with a "weirdness score"
	- [[Metric Learning]] Compare objects to one another to generate a meaningful similarity metric
	- When training
		- Don't have an objective function to optimize
		- Expect population to be mostly normal with few rare objects. Seen in the weirdness score distribution
		- Expect the clustering properties to be a low-dimensional and relatively continuous manifold not many separated clusters
	- Creates an embedding in 500 dimensions
- UMAP allows for visualization of data structure in a 2D space. Study the similarities found with RF in lower dimensional space
	- Condense the 500D RF embedding into 2D
## Conclusion
- Use RF classification for metric learning and UMAP for dimensionality reduction
	- Can then identify groups and anomalies in the dataset
- [[Uniform Manifold Approximation and Projection|UMAP]] projections result in information loss especially in areas of "high-weirdness objects"
- Identify underlying patterns and structures within data without need for supervised training

> [!Cite]

Bloch, Yarden Eilat, Dovi Poznanski, Nick L. J. Cox, et al. “Exploration of Groups and Outliers in Gaia RVS Stellar Spectra with Metric Learning.” arXiv:2508.00071. Preprint, arXiv, July 31, 2025. [https://doi.org/10.48550/arXiv.2508.00071](https://doi.org/10.48550/arXiv.2508.00071).
  

>[!md]

**FirstAuthor**: [[Files/Authors/Bloch, Y]] 
**Author**: [[Files/Authors/Poznanski, D]] 
**Author**: [[Files/Authors/Cox, N]] 
**Author**: [[Files/Authors/Bernhard, E]] 
**Author**: [[Files/Authors/McDonald, I]] 
**Author**: [[Files/Authors/Rauch, M]] 
**Author**: [[Files/Authors/Zijlstra, A]] 


> **Year**: 2025  

> **Citekey**: blochExplorationGroupsOutliers2025 

> **itemType**: preprint 

> **DOI**:: 10.48550/arXiv.2508.00071   

  
> [!Abstract]

>

> The Gaia mission is transforming our view of the Milky Way by providing distances towards a billion stars, and much more. The third data release includes nearly a million spectra from its Radial Velocity Spectrometer (RVS). Identifying unexpected features in such vast datasets presents a significant challenge. It is impossible to visually inspect all of the spectra and difficult to analyze them in a comprehensive way. In order to supplement traditional analysis approaches, and in order to facilitate deeper insights from these spectra, we present a new dataset together with an interactive portal that applies established self-supervised metric learning techniques, dimensionality reduction, and anomaly detection, to allow researchers to visualize, analyze, and interact with the Gaia RVS spectra in straightforward but under-utilized manner. We demonstrate a few example interactions with the dataset, examining groupings and the most unusual RVS spectra, according to our metric. This combination of methodology and public availability enables broader exploration, and may reveal yet-to-be-discovered stellar phenomena.

>.



# Annotations%% begin annotations %%





%% end annotations %%
