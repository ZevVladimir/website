Dear reviewer,

Thank you for your insightful and helpful feedback to our paper. We appreciate the time and effort you have dedicated and we think they have improved our paper. We have highlighted all of the changes in the manuscript and provide a point-by-point response.

1. It seems that something is missing in the last sentence of the first paragraph of Section 2.2. 

**Response:** Thank you for catching this, it has been corrected to read: "We exclude subhalos because it is challenging to consistently determine if their constituent particles have a pericenter \citep[e.g.,][]{han_resolving_2012}, which is required by our definition of orbiting." (Pg. 2)
  
2. In the third paragraph of Section 2.2, the authors claim that due to the isotropy of halos, the tangential and radial velocities fully describe the particle velocity. I believe it is more consistent with the scope of the paper to state that, due to the average isotropy of halos, most of the information can be encapsulated in the radial and tangential velocity decompositions. In the Introduction, the authors rightfully criticize the spherical overdensity definition and note that halos can be significantly anisotropic.  

**Response:** We have changed the sentence to now read: "Due to the average isotropy of the halos we can capture most of the information about a particle's physical velocity in terms of its radial and tangential components." (Pg. 2)
  
3. In the subsequent line, the expression reads: v_hub = H_0 x r. Did the authors intend H(z) x r instead?  

**Response:** Thank you, we have been corrected to read as H(z) x r.

4. Could the authors clarify whether the normalizing factors (R₂₀₀ₘ and V₂₀₀ₘ) in the input variables correspond, in both cases (current and past snapshots), to the host halo at the current snapshot? If not, could the notation be adjusted to make this explicit?  

**Response:** This has been clarified that the normalizing factors correspond to the values of the particle's radius/velocities in the current snapshot. "With the halo's $R_{\mathrm{200m}}$ and $V_\mathrm{200m}$ at the current snapshot, we normalize the particles' radii and velocities respectively." (Pg. 2)

5. The authors could consider testing whether AutoML tools, such as tea-pot, improve the ML performance.  

**Response:** This is a very interesting suggestion that would help for model prototyping and hyperparameter tuning. When training our model, we prioritized interpretability and a custom pipeline that was generalizable and easily understandable. Our current model meets our performance goals with very high accuracy and accurately reproduced density profiles while minimizing complexity and hyperparameter tuning. Given the substantial effort that would be required to re-train and analyze an AutoML model that could potentially be less understandable we do not believe it would provide enough of an increase in accuracy or interpretability to justify its inclusion. We thank the reviewer for bringing this to our attention and will consider applying these tools on future projects.

6. In Figure 2, I recommend adopting a more coherent color scheme across both panels. In the top panels, bluish tones correspond to lower values, while in the bottom panels, the opposite is true.  

**Response:** This was a good suggestion and we have implemented this by adjusting the color scheme of row 4 in Figure 2. (Pg. 4) to have blue tones corresponding to lower values.

7. If the EdS solution is used for the overdensity threshold, there is no need to denote it as δ_c(z). Instead, I would write ν_δ = δ_c/σ_M(M, z).  

**Response:** Thank you for this catch this has been corrected (Pg. 6)

8. I would be very interested in an assessment of the cosmological dependence of the model using less conservative cosmologies. Although the extrapolation of the WMAP7 model to Planck simulations is interesting, it would be important to identify at which points this extrapolation begins to break down.  

**Response:** We think this is a very interesting avenue of future work and we want to explore this. However, we do think that with the simulations we present we are covering a very reasonable range of $\Omega_{m}$ values (0.27-0.32) which tends to be the most important parameter for splashback profiles (Diemer et. al. 2017). Additionally, testing simulations with less conservative cosmologies would require incorporating external simulations and significant additional time to effectively and accurately test them, which we believe is outside of the scope of this particular work and would only provide an incremental benefit to the main findings.

9. I recommend removing the leftmost panel of Figures 4 and 5.  

**Response:** As suggested, all density profile plots no longer have the all profile ratio (leftmost panel).

10. There are a few sentences that begin with the abbreviation "Fig.".

**Response:** Thank you for catching this, these have all been corrected.


**Data Review**
Thank you for the suggestions in regards to the best manner to host our code and data. We have since deposited our code in Zenodo and added the doi link in our paper.

Thank you again for your very helpful and constructive feedback.

Best,
Ze'ev Vladimir