---
Deadline: 2025-06-03
Location: UChicago, IL
Status: Done
Type of Program: 1 year post bacc
Paid: true
Start Date: 2025-07-01
Created: 2025-05-30T10:54
---
# Papers I’ve read

[Calibrating the Instrumental Drift in MAROON-X Using an Ensemble Analysis](https://www.notion.so/Calibrating-the-Instrumental-Drift-in-MAROON-X-Using-an-Ensemble-Analysis-21328b9efb2880c787c4cb0a6c8032e1?pvs=21)

[MAROON-X: The first two years of EPRVs from Gemini  
North](https://www.notion.so/MAROON-X-The-first-two-years-of-EPRVs-from-Gemini-North-21428b9efb2880fe94e4e5da76d306ad?pvs=21)

# MAROON-X

- Extreme precision radial velocity observations allow for determining both the mass and orbital eccentricity
    - This combined with radius and orbital period from transit light curve you get bulk density and insolation (exposure to sun’s rays)
    - These parameters put constraints on mass-radius relationship and mass function of extrasolar planets
- Uses radial velocity measurements of M dwarfs to study exoplanets
    - M dwarfs are small so the doppler signal is larger (inversely proportional to mass)
    - The habitable zone is closer to the M star
    - There are lots of M dwarfs in the solar neighborhood of which there are several future missions that will be looking at them
- Has two channels
    - Visible (Blue) 500-670nm
    - NIR (Red) 650-900nm
- MAROON-X data is calibrated using Fabry-Perot etalon spectra
    - Etalon: a device consisting of two reflecting glass plates, employed for measuring small differences in the wavelength of light using the interference it produces.
    - This is used to correct the spectrograph’s velocity variations with time
- Several issues have offset the results on a run to run basis
    - But the etalon itself drifts 2cms^-1 per day and had not been utilized in data reduction
        - Etalon was originally calibrated with the spectrum of a ThAr lamp
        - The etalon parameters were determined once in May 2020 and assumed invariable which is untrue
        - Can use the ThAr spectra to determine the etalon drift
        - An alternative permanent solution is to use a Laser Frequency Comb (LFC) to replace the ThAr as the absolute frequency reference
    - Earthquakes and power losses have affected the instrumental profile
    - To mitigate this is to observe quiet stars with low RV scatter to calibrate the zero points
- **Data Reduction**
    - Python pipeline to produce one-dimensional wavelength-calibrated spectra
    - Use **serval** package
        - Uses a template matching approach rather than cross-correlation with binary templates
            - Spectrum with high SNR is used as a reference
            - All other spectra are shifted to this reference frame and co-added
        - The telluric absorption and emission lines from the atmosphere of Earth are masked
        - The Red and Blue arms are reduced and analyzed separately
        - Template shifted to barycenter frame of solar system to remove Earth’s motion and secular acceleration (long-term continuous change of a celestial body’s velocity or rotational speed)
            - Use the barycorrpy code
        - Individual spectra are compared to this template to calculate differential RVs
    - Can take in separately or all together data from the three science fibers
        - If altogether use sub-pixel re-binning and spline interpolation based on the different wavelength solutions for each fiber
    - Depending on observational baseline and time interval between consecutive runs each RV time series from serval can have a different RV zero point
    - Both the cross-correlation function and template matching algorithms determine differential RVs relative to the template so the absolute RVs are not relevant to the work done in [Calibrating the Instrumental Drift in MAROON-X Using an Ensemble Analysis](https://www.notion.so/Calibrating-the-Instrumental-Drift-in-MAROON-X-Using-an-Ensemble-Analysis-21328b9efb2880c787c4cb0a6c8032e1?pvs=21)
    - To accurately estimate the offsets in RV measurements between runs have two methods
        - Observe a low-activity star across different runs and use it to calibrate the instrumental shift
        - Model signals that can be precisely constrained the RV data while allowing the offsets between runs to vary freely. Can then calibrate the offsets and apply it to the raw RV data