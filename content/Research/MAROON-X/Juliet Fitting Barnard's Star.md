## Data adjustments
- Log for issues: [Maintenance log spreadsheet](https://docs.google.com/spreadsheets/d/1-YTkuae7y6JHFitEm6_qqkY_Oz84y1YMpBe2K_vSL7g/edit?gid=0#gid=0)
- Instrumental issue September 1 2024 - September 18 2024. Following [[bradyEarthlikeDensityTemperate2025]] remove all data from this range
- Fit a slope to the data to account for etalon drift
- [[bradyEarthlikeDensityTemperate2025]] uses HD 3651 to calibrate RVs
	- Based on [[basantCalibratingInstrumentalDrift2025]] 
		- Subtract Keplerian fit from here from the RV data
		-  [[basantCalibratingInstrumentalDrift2025]] found RV drift of $2.2\mathrm{\;cm\;s^{-1}\;d^{-1}}$ 
	- Find from their analysis a etalon drift of $2.55^{+0.13}_{-0.17}\mathrm{cm\;s^{-1}d^{-1}}$ 
	- Use a prior of $2.4\pm0.5\mathrm{cm\;s^{-1}\;d^{-1}}$
- **Me**
	- Remove outliers
		- Weird outliers in Barnard 2023 data 20231014-20231026
			- Very high RVs $\geq7.5$ and separate from the rest of the data taken
		- Outlier in Barnard 2025A with very large error
			- 3.65 vs ~0.2-0.67
## Notes about Juliet
- Make sure names of instruments don't have underscores messes with the finding of instruments for GP kernels
- Make sure to include `GP_regressors_rv` parameter in first fit
- Afterwards can just load the values from the .dat file 