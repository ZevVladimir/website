---
tags: log
---
## 2025-11-24
- [x] #TODO Update overleaf and arxiv with proofread version  [due:: 2026-01-14]  [completion:: 2026-01-19]
## 2025-11-19
- [x] #TODO Finalize paper through ApJ  [due:: 2025-11-24]  [completion:: 2025-11-24]
## 2025-10-31
- [x] #TODO Tell Benedikt and Calvin paper was accepted and Andrey  [due:: 2025-11-01]  [completion:: 2025-11-01]
## 2025-10-27
- Finally wrote the [[Reviewer Response]]
- [x] #TODO Go through benedikt's comments and submit reviewer response  [due:: 2025-10-29]  [completion:: 2025-10-28]
## 2025-09-29
- Finalized github with the creation of a license, first release, and addition to zenodo
- Updated the paper with the plots from the model with a time separation of 1 dynamical time
	- Also updated text to reflect the new redshifts 
	- Updated density profile caption to reflect missing panel
- [x] #TODO Draft email for reviewer  [due:: 2025-10-24]  [completion:: 2025-10-27]
## 2025-09-24
- Basically have finished rerunning everything
	- Just have the combined density profile plots (ML and KE cuts) for completion since I am doing this for 0.75 dynamical time separation
	- However, when placing the new figures in noticed that although the cbol density profile looks better than the 1 dynamical time (which is why I had been running it with 0.75) the cpla plots look a bit worse
	- So going to rerun everything again but now with a separation of 1 dynamical time. Should be a bit faster because I won't have to rerun SPARTA
- Running on css simulations (self similar)
	- Having issues with a bug popping up for both css25 and css20 
	```
	[ 37] FILE /home/zvladimi/scratch/SPARTA/sparta//src/analyses/analysis_profiles.c, FUNCTION runAnalysisProfiles, LINE 430: Found NULL for tracer tree results in profile routine (halo ID 9286921, needs_all_particles 1, uses_all_particles 0).
	```
	- Told Benedikt about this and apparently its pretty but Calvin is going to look into it and see what's going wrong
	- Tried turning off in the sparta_complete.cfg file
	```
	anl_prf_do_subs               0
	anl_prf_do_ghosts             0
	```
## 2025-09-15
- Still running SPARTA 
	- Didn't update the sim-force-res parameter for cbol_l0500_n1024. This shouldn't make much of a difference but if I have the time I'll rerun that again
## 2025-09-11
- Started going through reviewer changes 
	- Vast majority of them are just wording changes or simple changes to the plots
		- [x] #TODO Implement reviewer changes for text  [due:: 2025-09-18]  [completion:: 2025-09-17]
		- [x] #TODO Implement reviewer changes for plots  [due:: 2025-09-24]  [completion:: 2025-09-24]
	- One was about testing on more diverse cosmologies
		- Benedikt said not really possible with Erebos and probably not worth it
		- [x] #TODO Test model on the self similar simulations and seeing what the results are  [due:: 2025-10-03]  [completion:: 2025-09-30]
- Started rerunning everything because I was stupid and deleted all the data to make space
	- Need to do this to recreate some of the plots as requested by the reviewer
- [x] #TODO Update ATHENA github according to reviewer's comments  [due:: 2025-09-29]  [completion:: 2025-09-29]
## 2025-09-03
- Got the review report back and it looks pretty good
	- Pretty much just small text changes 
	- Did suggest I try and use an AutoML method and see if that improves performance
		- Might just try setting it up and seeing how it goes
		- But I can't imagine it will have too much of an effect at this stage with the model already performing so well
	- [x] #TODO Mark changes to paper from reviewer  [priority:: high]  [due:: 2025-09-08]  [completion:: 2025-09-11]
## 2025-07-23
- [x] #TODO Submit paper to ApJ  [priority:: high]  [due:: 2025-07-25]  [completion:: 2025-07-24]
## 2025-06-12
- Add ability to also make validation set and more smartly split halos between datasets
    - Sort the halos by the number of particles within them from largest to smallest
    - Split this sorted array number into groups which are 1% of the total size
        - Might want to play around with this
    - Then for each group split it according to the percentage that each dataset gets
## 2025-06-11

- Correct tdyn calculation with 2r200m-v200m with units
    - Converted from kpc/km to kpc/kpc
    - Converted from s to Gyr
    - Divide tdyn by little h not multiply
    - Now matches what Benedikt’s code with colossus gives!
- Now loop through all datasets desired (Full, Train, Test, Val) for everything giving full control over that
- Clean up functions especially ke cut ones
## 2025-06-10
- Ran into issues rerunning multiple models at the same time
    - Would probably be a good idea to update the submission scripts to be able to take care of all the submissions for a full run
    - But looks like with a dynamical time separation of 0.75 we get snapshots at 99 and 89 compared to before with the incorrect calculation which gave 99 and 90
        - So results shouldn’t be too different
        - Going to go ahead with the arxiv submission with this and adjust after as needed for the final one
        - Also probably the issue with the original calculation is units? will have to fiddle around again with that
- Met with Edgar about him using my code for plotting the fast KE cut fraction of orbiting by radius
    - I am going to send him the code but think I have to clean it up to make it more generalizable?
- Also have to update the r_cut for predictions since it has been using the calibration radius rather than the prediction one
- Issues with the 89 snapshot for some reason
    - cbol L0125 just fails on the secondary snapshot on the first Training split due to incorrect indexing of the ptls_pid with the ptl indices from the initial search
    - cpla L0125 uses snap 89 when the other cpla ones use snap 90
## 2025-06-09
- Using Benedikts code to determine the correct dynamical time which makes a lot more use of colossus which I probably should’ve done before…
    
    - But does basically give the same results if I set the dynamical time step to be 0.5 instead of 1 so just rerunning everything to be correct but I’ll just change the wording in the paper so it’s ready for publication
    
    ```Python
    # Using dynamical time find the time tdyn_step dynamical times ago and convert that to redshift
    def get_past_z(cosmol, init_z, tdyn_step, mass_def = "200m"):
        tdyn = mass_so.dynamicalTime(init_z,mass_def,"crossing")
        curr_time = cosmol.age(init_z)
        past_time = curr_time - (tdyn_step * tdyn)
        
        past_z = cosmol.age(past_time,inverse=True)
        return past_z
    ```
## 2025-06-08
- Finished going thorugh benedikts edits
- Benedikt raised the point that my redshifts don’t look right for “200m” definition
    - Tried to implement the way that Colossus calculates dynamical time and got a result that is almost exactly twice what I get from my original calculation with 2 *R200m / V200m when they should be equivalent
    - Inserted my unit calculations and code
```Python
def calc_tdyn(halo_r200m, red_shift, little_h):
    halo_m200m = mass_so.R_to_M(halo_r200m, red_shift, "200m")
    curr_v200m = calc_v200m(halo_m200m, halo_r200m)
    t_dyn = (2*halo_r200m)/curr_v200m
 
    return t_dyn * little_h

def calc_tdyn_col(cosmol,curr_z,little_h):
    rho_c = cosmol.rho_c(curr_z)
    rho_m = cosmol.rho_m(curr_z)
    rho_200m = 200 * rho_m
    t_hubb = (1/cosmol.Hz(curr_z)) * 1e3 
    
    t_dyn_def = np.power(2,(3/2)) * t_hubb * np.power((rho_200m / rho_c),(-1/2))
    print("Colossus Tdyn",t_dyn_def)
    return t_dyn_def
```

- Fixed banding that occurred in the plotting of the optimal and fast ke cuts on the distribution
    - Needed to set rasterization=True for the ax.2dhist

## 2025-06-06
- Lots of updates for both finalizing the paper and the code
- Trained a new model on just one snapshot after finalizing code to be able to take any number of snapshots
    - We do this by inputting a starting z value and then having a list of tdyn_steps to calculate back from
    - The parameter names are now labeled with how far back in dynamical time they are and so can be matched across cosmologies even if the snapshot numbers are different
- Made a new plot comparing the fraction of orbiting particles at each radial bin for all the methods we used in the paper
    
    - We see pretty much expected with ML and then optimized cuts closely matching SPARTA but the fast cut does match the general shape
    
- Also made a plot comparing the radii of particles at present and past snaps for where the KE cut and SPARTA agree and where they disagree in the phase space of: "p_Scaled_radii": [('>',1.7),('<',1.9)] "p_lnv2": [('>',-4),('<',-3)]
    - This required updating the filtering system to take both < and > for one parameter
    - Found that it actually performs faster when just computing the Dataframe rather than continuing to use Dask… even for all the sims
    - Might have to look into just overall not using Dask or ways to use dask correctly
        
- Then have been doing lots of bug fixes for various things around the code and doing some reruns each time :D
    - Removed custom model optimization code as it was unnecessary to achieve good results and was bloat
    - Now which cosmology being used by dataset is saved and then loaded in according to that rather than the config.ini file for training/testing
        - Have not actually tested this for a mixed train/test set but no bugs yet lol
    - Added back in the log scale to Fig. 7 in the paper to demonstrate the tails in the distributions 
    
    - Created a bash script that modifies the config file and submits all the cbol and then one for all the cpla simulations. Greatly speeds up the process as they can all run at once and I dont need to manually update the files 
        - [[Bash File to gen dsets for multiple sims]]
    - Updated the memory calculation function to be a bit more pessimistic about how much memory each particle takes. Also now use 5GB splits which does slow down gen_ML_dsets but should give a better balance across the halos
        - Led to fixing bugs with saving halo info files only once and with the past snapshot HIPIDs not being matched with their correct present snapshot HIPIDs since I was now actually using the for loop to go over each batch 
    - Found that joblib is better for handling large np arrays than pickle so implemented that function as an alternative
    - Generalized the density profile function and now the code is a bit cleaner and more uniform across the various density profile functions
    - Generalized the particle distribution and misclassified plotting functions to recreate both the paper plot and any variation on it
        - Takes in a dictionary of all the data that will be used somewhere in the plot (allows one data say the radius to be reused in different plots)
        - A list of dictionaries that supply information about labels, titles, splitting the axes and what data to use for each plot
    - Generalized more plotting functions in fast_ke_cut
    - Loop through multiple test_sims in the full list for all files now instead of just taking the first one
## 2025-05-20
- Fixing issue of second snapshot being different for different simulations
    - Think I can just extract all the snapshots and then just choose the second one for each?
    - Have to rename them though to be mutually usable by the xgboost model
## 2025-05-19
-  Finalized Implement any number of snapshots for training for the generic functions that are needed to get from creating datasets to training and testing model
    - Might have more work to do with other files like SHAP plots or the kinetic energy (phase space renamed) cut plots
    - Now code does _not_ require a halo to exist in the complementary snapshot to be used
        - For the small test snapshot there is only one of these halos and this seemingly throws off the tes dataset
        - I believe this is because there is only one of these types of halos and as it is in the test dataset the model never learns from this
            - To test this I’ll run on all the larger sims which should give enough halos for the model to learn on
    - Now each snapshot is saved separately in the ptl_info folder rather than in one big dataframe
        - Think this means that I can somehow just reuse the snapshots in it rather than running the code twice for example say once for snapshots 99 and 90 but then for just 99 I can instead just use the 99 data from the run with 99 and 90.
        - Not sure if this is optimal though since there is some specific information (mainly the redshifts/dyanmical times used) that would differ. But worth looking into
- Plot particles comparing them between my model and
    - 3 histograms
    - Choose some radial window 1.7-1.9
    - Take all the particles for which sparta and fast agree, fast says orbiting and sparta says is infalling
        - Histogram radial distance of infalling and orbiting and past snapshot
        - Agree + disagree
            - Infalling + orbiting present snap
            - Infaling + orbiting past snap
## 2025-05-16
- Implement any number of snapshots for training
    - Going through code to generalize to not only be able to take 2 snapshots
    - User can input a list of redshifts and dynamical time steps
        - The first redshift is considered the primary redshift and is used to calculate the dynamical time steps from
        - ==The dynamical times steps are calculated and the corresponding redshifts are found and compared to the redshift list to ensure no repeats==
        - The process of finding the data for each snapshot is now done uniquely rather than together in one function
            - The primary snapshot data should be small enough to keep in memory and then each complementary snapshot is compared to it and then saved
            - ==Each snapshot now will have its own subfolder in ptl_info==
            - ==Each snapshots information is now loaded and its tree constructed one at a time and then removed as it is unneeded after==
- General cleanup
    - Using load_pickle and save_pickle functions instead of two line opening of files
    - Using load_SPARTA_data
        - Now includes matching indices before and after loading
- Currently code requires a halo to exist in the complementary snapshot to be used
    - Don’t know if this actually makes sense?
## 2025-05-08
Figured out why there are lines at 1 R200m in the particle distribution
    - Looked at L1000 and found that when we turn off assigning the particles that were born in the halo as orbiting it is fixed
Old distribution where there is a clear line at 1 R200m in D13

New distribution with the born in halo orbiting is turned off

- Testing optimal configuration for testing
[https://docs.google.com/spreadsheets/d/1FqaKVWKXi7KBmJQvjxB5bo30jp2iVLUT1GAK9CgksdE/edit?gid=0#gid=0](https://docs.google.com/spreadsheets/d/1FqaKVWKXi7KBmJQvjxB5bo30jp2iVLUT1GAK9CgksdE/edit?gid=0#gid=0)
## 2025-04-28
- Going through the final edits of the paper: right now just Calvin’s but he raised a couple points/I noticed some things to look into
    - I want to look into the optimal number of trees for the model since I am still just using the default 100
        - I remember seeing a while ago plots where the usefulness of more trees trails off (which makes sense) but having more trees means that it takes longer for each prediction (each particle has to be put through each tree)
        - So added some code that plots the error with each number of trees and the timing for the predictions to see how important it is
    - There are some stark lines now in the particle misclassification and distribution plots which are slightly worrying
        - Will have to debug these and Calvin suggested looking at the scaling R200ms so maybe they were still using some old pickled file or the wrong snapshot
    - Also that there are orbiting particles with velocities beyond the hard cut implemented by SPARTA
        - There aren’t many though and when I looked through the old plots I made of the distribution of these particles there were still particles beyond this cut
        - But I don’t really know why they are?
        - Maybe because they were classified as orbiting when their velocites weren’t as high but in the snapshot I am looking at they have been accelerated
- Also renamed from MLOIS to ATHENA (**pArticle classificaTion with macHine lEarning N-body simulAtions)**
    - Which is quite forced but wanted to name it after Athena :)
## 2025-04-21
- How much I’m differing from OASIS and how to deal with that
    - For predictions I use R200m instead of R200b
        - Benedikt said this is ok since we only use hosts and it should be roughly the same
        - I’ve added a couple sentences clarifying this difference
    - OASIS uses peculiar velocities and I use physical velocities
        - Is it worth rerunning it with the peculiar velocities or can I just specify this is a different method?
- What is the reason for the uptick of orbiting particles with vr<0 by SPARTA’s definition?
## 2025-04-08
- Started working with getting R200b for OASIS comparison
    - Added function for reading rockstar halo catalogues which first finds the file with the closest redshift in the name of the file
    - Then looks through the file at the header which contains the column names (its just one big text file)
    - Then depending on input parameters to the loading function (like how sparta data is currently loaded) selected parameters are loaded and then put into a dictionary and returned
- What I still have to do
    - Depair the HIPIDS so I get the halo idxs for each particle
    - Use the halo idxs to get the halo ids for each particle
    - Then can match the R200m and R200b for each particle
    - Can then convert the particles r/R200m → r → r/R200b as needed for the parts of OASIS that require that see 2025-04-07 and Edgar’s notes
    - This probably has to be done on a simulation by simulation basis since halo ids are probably repeated across simulations so can’t just create one master dictionary easily
## 2025-04-07
- What I need to fix about edgar’s method
    - Use peculiar velocities
    - The isolated halo criterion is with R200b and not R200m. Same with the mass threshold it is 0.2M200b and not 0.2M200m.
    - uses R200m for calibration but R200b for classification
    - The limit for what particle can be orbiting for classification is 2R200b, not 3R200m.  

## 2025-04-03
- Comparing to OASIS
    - Different levels of abstraction (don’t require any previous knowledge)
        - What would be more fair is my fitted phase space cut
    - Make this more clear
- Train XGBoost on outputs from OASIS
    - How robust is it for any “label-maker”
    - Compare the SHAP values
- Does the model only work for lambda CDM cosmology? Or breaks with weird ones
## 2025-03-28
- Create one figure for density profiles from both phase space cut methods
    - Combined one figure overall the fitted method is a bit better but not enormously
    - Fortunately my ML model is better especially at larger radii where the phase-space cuts just don’t capture the different mass dependence in the orbiting profiles
- Confirmed that the phase space models do not generalize as well to other cosmologies (their density profiles look noticeably worse than what the ML model does)
- Also compared the mass accretion rate split density profiles to the nu split profiles for the ML model and the nu splits do look better
## 2025-03-26
- Update the logic for the optimization bin-by-bin for the loading of parameters and data
    - Now should only load the fitting data if it is necessary to perform the fit or if they are the same simulations as the testing ones
- Fixed a bug with the density profile splitting that was using the same density profiles for splits by nu and mass accretion
    
    - Added a parameter so that you choose if you want mass accretion splitting or not
    - Generally the splits by nu look better than by Gamma
## 2025-03-25

- Finalize how models are named
    - Names will be named as follows:
        - ==<model_type>==_==<sims_trained_on>==_hpo_==<hpo_radius_reduction>==_==<hpo_weights>==
        - The hpo stuff won’t be present if hpo isn’t used (hpo_ and onwards)
        - Otherwise these should be enough to distinguish the models beyond just writing all the individual parameters
- Check why the initial bins are not done easily for the phase space fit method
    - To do this was kinda janky but just ran the optimization twice once starting from the mean and once starting from the max and that pretty much fixed it
- Remake fitted phase space cut figure with full datasets
    - Did this although it does take a while for it to run (several hours) which ig is kinda expected as the other codes take this long with the full dataset. But it would be nice to look at speeding it up someway

- Make Benedikts fixes to the phase space distribution plot
    - Code currently running implemented the changes but the sizes of the boxes got kinda fucked up
    - Should be done tomorrow but might have to do some fiddling with the sizes some more
- Go through benedikts comments
    - Went through the comments primarily for section 4.2
    - Rewrote a decent chunk and now just waiting on a few plots to show and then hopefully it will be complete
    - Also should run my explanation of edgar’s method by edgar
- Test if phase space cut method is generalizable to planck
    - Currently running
    - Rewrote the optimization code to use the model simulations as the fitting simulations and then the testing simulations as the actual testing simulations
## 2025-03-24
- Started rewriting code and cleaning it up
    - Realized I have to Regeneralize the snap and SPARTA folders since for multiple simulations being used in one run requires a more general folder than a simulation specific one
    
- Fixed the fitting function, and now do the fits per bin
    - Still want to look at whats happening with the small radii bins since those should be the easiest to do but there is the largest decrease in accuracy of the orbiting density profiles. Check why the initial bins are not done easily for the phase space fit method
## 2025-03-05
- Finished Tasks
    - Fix tick overlap in lower left corner of phase space distribution plot
        - Added more padding between the ticks and the labels
        - Might have to check this actually works
    - More accurately plot the ratio between profiles
        - Implemented as described in the note
- Worked on tasks
    - Implement new fitted line classification splitting method
        - Wrote a function that uses scipy.minimize to minimize the number of particles that do not match SPARTA
        - If doing the infalling particles then just particles below the line and vice versa for orbiting
        - Do this for each bin and obtain an optimized m and b
        - These are then plotted
## 2025-03-03
- Made a new plot for the paper for Edgar’s method
    - Combines all the information about the distribution in this phase space and the comparison between SPARTA’s classifications and the fitted line’s classifications
    - To potentially improve on just the fitted line can do:
        - Loop over radial bins
        - Find the point (that draws a line in that bin) that maximizes the overlap between the fitted line’s and SPARTA’s classifications
    - Also change the density profile plot to more accurately reflect the ratio
        - As the solid line, plot the ratio of the medians
        - As the scatter, plot the percentages of all the ratios
## 2025-02-03
- Got edgars code to work and produce plots
    - Key changes were to only use the 1000Mpc simulation as there were more large halos that completely clear their environment and to use 500 halos from that sim
    - Was able to then use pretty much the default parameters except I changed the percentage to be 0.99
    - Overall the density profiles look solid for a simple method but noticeably worse than what the machine learning model produces (as expected)
- Also added some code to calculate mass accretion rate:
    
    $$\Gamma=\frac{\log[M(t)] - \log[M(t - t_{dyn})]}{\log[a(t)] - \log[a(t-t_{dyn})]}$$
    
    - Use this as another way to plot the density profiles instead of splitting them by nu (peak height) split them by this
## 2025-01-29
- Meeting with Edgar about his model
    - Increase number of halos
    - Check that the line from 1000 Mpc looks good for all sims then can use it for full dataset
    - increasing cut of radius to like 1.7-1.8 and then rais p to 0.95-0.98
    - Add vertical line where cut is being made
    - Add to title the name of simulation and mass range
    - Have the plot contain three rows (lin scale, log scale, gradient)
## 2025-01-27
- Meeting with Edgar about his model
    - Gradient calculated from either gradient function or there is a np function for it
    - Limit the number of massive halos in each simulation (200 largest halos)
    - Do it for each simulation and check that the distribution looks like
    - R200m bound is better than R200m for estimating the orbiting mass (can get from ROCKSTAR?) used for classification
        - Would scale radius with R200b
        - Mainly an issue for smaller halos
## 2024-011-25
- Made some finalizations for the plots
    - Density profiles:
        - Now will show the splits by nus
        - If each nu split has more than 10 halos show that nu
    - Phase space plots:
        - Updated the ticks so that some are white to improve visibility
        - Also made it so ticks are visible for all panels
    - SHAP plots
        - Now calculate SHAP values for all data points and then filter rather than filter and then calculate points
        - There seems to be very minimal difference but I think it should just be more accurate
## 20224-11-17
 Did a bunch of work fixing density profile plots
    - We realized that the orbiting profile should be dropping off much faster and basically go to 0 well before 4R200m
    - This was due to an error in how I was calculating density
        - I was using the total mass at every radius and the radius in R200m units…
    - After this spent a while debugging to get it to work with multiple simulations as well as with splits in nus
    - Took a while but was able to get it all figured out plots are below and they look as good if not better than what we had before which is reassuring
- Started working on recreating Edgar’s fitting function
    - Not entirely sure I’m doing things correctly but one major issue is that I need the radii to not be in R200m units
    - I’m not sure how to handle this because I wanted to directly compare to my method where we take the median of all the profiles and the density there
## 2024-10-28
- Answers to questions from presentations:
    - Why do density profiles not reach 4? **Because I am using the middle of the bin**
## 2024-10-23
- For presentation
    - Make plots just for the presentation
        - Restructure big plots to make it more viewable in presentation format
        - Make use of presentation to build up plots rather than just going through one at a time (for mine probably the panels)
        - Color coordinate populations of interest so it is easy to consistently follow throughout slides
    - Add more annotations that are obvious
        - Stuff like redshift or other “obvious” quantities that you don’t have to explain out loud
        - Or stuff to re-cue the audience
    - Make diagrams
    - Animate the annotations like circles and arrows
    - Don’t talk about SHAP values (have as a backup slide) unless I have time
    - Limit to phase space in results section and density profiles
    - Motivate why we care about dark matter and halos
        - Halos let us empirically study large scale structure
        - Halos and galaxies are connected and correlated
## 2024-10-21
- Trying to figure out how to order my introduction
    1. Dark matter is fundamental to the large scale structure of our universe
    2. Dark matter halos in particular are useful as they contain most of the dark matter and generally have easier to define shapes
    3. But still impossible to get an analytical solution so we use numerical simulations
    4. Within these simulations spheres are used based off an overdensity definition
    5. However, this definitions is arbitrary as there is no one criteria that is superior
    6. Look for a more physical definition that says only orbiting particles are part of the halo
        1. (Diemer 2014, Adhikari 2014, More 2015, Shi 2016, Mansfield 2017) Splashback radius which uses particles apocenters to define the radius
            1. Distribution of apocenters is broad (Diemer 2017)
            2. Difficult to define a singular radius for all orbiting particles/subhalos (Diemer 2021)
        2. (Diemer 2022) Orbiting definition based on pericenters. Notice the importance of mass accretion on the density profiles
        3. (Garcia 2021) Propose that the transition between the one and two halo terms is a better radius definition
        4. (Garcia 2022) New halo definition: A dark matter halo is comprised of the collection of particles orbiting their own self-generated potential
            1. Similar to Diemer 2022 but use a larger phase space and here focus on the orbiting/infalling split to argue for a redefinition of halos
            2. There is no one spherical definition that separate the orbiting/infalling particles
    7. We are seeking to continue this line of inquiry but improving the speed, accuracy, and generalizability of particle classification

1. Meeting with Edgar
    1. Parameters depend on cosmology (Check that mine match)
    2. A is the result of integrating the full profile
        1. M/integral of rho d^3x
    3. Use the values in his paper to get a starting point
    4. The mass I use for the profile determines what the fit does (use the median of the stacked halo)
    5. Only use datapoints larger than 0.1R200m
        1. Then for the model look at Appendix A for the correction
## 2024-10-16
 - Add labels for orbiting and infalling side
- Add legend
## 2024-10-13
- Made plot that shows the phase space split in log(physical velocity) space
- cbol_l0063_n0256 the population where the model does worse in vr vs r space. 0.3<r<0.5, -0.6<v_r<0.6. There are 500 correctly classified and 500 incorrectly classified orbiting particles.
- Make beeswarm plot to look at past features
## 2024-10-08
- Looking at the different populations in the vr vs r plot for orbiting particles
- There is a population close to the center that the model does very well on and then it does worse and then does very well again and trying to understand why
- The three populations I chose kinda by eye:
    - Then subsample 10% of them to have a “reasonable” amount of particles to plot
    - Inner well classified: 0 < r < 0.2 & -0.6 < vr < 0.6
        - Num ptls: 12,905,644
    - Outer well classified: 0.5<r<1 & 0 < vr <0.6
        - Num ptls: 9,048,193
    - Middle adequately classified: 0.3<r<0.5 & -0.6<vr<0.6
        - Num ptls: 10,236,038
- Also looked at particles with no secondary snapshot information
    - Subsampled 1% of them
    - 9,300,445
- Does the shap value renormalize in some way?
    - Can renormalize on my own? Based on full dataset in plot
    - Or can do one panel for each feature and have the colorbar unique to that panel
- Also look at
    - Specifically misclassified particles not the whole population
    - Compare in the one area of lower orbiting classification only correct to the misclassified
    - The spurs in S6
- Sort features the same way for all of them
- Change ticks to be white or more visible where needed
- Make plot to compare with edgar
    - total orbiting totl infalling populations in ln(v/v200m) something split
        - dN/N/dx/dy
        - Based on SPARTA
    - And fraction of orbitnig/infalling in this space
## 2024-09-21
- Overall have primarily been working on the paper and currently have a pretty solid outline with a couple things left before moving on to the next step
    - Need to rework the ordering in the Results section
    - Flesh out the discussion (specifically the interpretation of the model)
- Finalized density profile, ptl distribution, and scaled misclassified plots for the paper
    - Changed some sizing, layout, and other aesthetic stuff
    - Added linear then log scaling to the 2d hists
        - Was kinda annoying to do…
        - But ended up going with creating lineaer bins and log bins and then combining them all together
        - Could then just create an array based off this combined bin array to show with imshow
        - Ended up doing manual tick labeling as well because automatically generating them just did not look good enough
    - Actual plots are in the overleaf
- For interpreting the model did some research into alternatives for feature importance since it was pretty inconsistent and was very general to the model and didn’t let me look at more specific particles/populations
    - Found SHAP values: [https://shap.readthedocs.io/en/latest/](https://shap.readthedocs.io/en/latest/)
	    - SHAP values are local which means that they can be used for individual particles.
	    - Looks at how the features impact the decision for each particle separately rather than how features affect the model
		- By focusing on trees only able to obtain local explanations in polynomial time rather than exact solutions in NP hard time.
	    - These are basically a measurement of how important different features are for determining what a particle is
    - With this can create some pretty sick plots that show how certain features influence what the model will classify them
    - Can also create plots for specific particles that show how each parameter was weighted to determine what classfication it is
    - Can also pass specific populations and see what they look like
- Got GPUS to work on Zaratan!!!!!
    - Basically just ended up commenting out the line that was giving the issue… [https://github.com/rapidsai/dask-cuda/issues/1381](https://github.com/rapidsai/dask-cuda/issues/1381)
    - So now things go so much faster which is really nice and can do things like SHAP easily
    - Not sure what exactly is causing the issue… but will try to somewhat keep up to date with what is happening in the above issue and see if a solution is eventually found
## 2024-08-01
- Since last update the biggest change has been in the dataset used from SPARTA
    - Now only go out to 4R200m and have a cut in orbiting classification at 1.5V200m
    - These two combined have led to much better density profile plots with consistent <5% disagreement for all models on all datasets so far
    - Since then have just been fixing some smaller bugs but now am at the point where I am just running my code on a bunch of simulations
    - So far done on
        - l0125_n1024
        - l0250_n1024
        - l1000_n1024
    - And working on l0063_n1024 which should be done today
    - After which I think I’ll probably meet or at least show them to Benedikt and see what we want to (if anything) improve about the model
    - It does seem that all the work I did implementing the HPO for scaling by radius or weighting by radius might not be super useful… but might want to use something like it to really improve our final model
- Have also been working on writing the paper and have a solid start on the outline and am implementing feedback from Benedikt for the intro and methods
- Added functionality such that for one model you can test on different simulations
    - This doesn’t remove functionality to test on combined datasets
    - Each testing set is now a sub list in the testing simulations list which is looped through
    - Should help making testing one model on all the other simulations easier
## 2024-07-18
- Put density profile on linear scale
    - Or fixed scale
- Make labels much larger
- No scatter below 0 line
    - Look at distribution in one bin at 1 R200m
- Look at model with bump and 2 param accuracy for all particles
    - Distribution of weights (what the a parameter does)
    - Larger sim
- Unbiased in the density profile is the goal
- Set R200m limit to 4 and v200m 3 in SPARTA
- Make ln(v/v200m) for 2v200m and 3v200m
## 2024-07-15
- Weight bins based off of how many particles are in them (1/n)
- Minimize the fraction incorrect in each bin
## 2024-07-04/05
- Implemented hyperparameter tuning for the weighting radius and minimum weight
- Had some issues with memory
    - Ideally would throw this on Zaratan or something but still haven’t gotten GPUs to work there
    - Instead just reduced the size of the dataset being used
- Performed this when the weighting was done for only the orbiting particles
    
    - 4.304_0.17 was chosen for when the loss function for hpo was only the accuracy of the orbiting particles
        - Done with scale_pos_weight tuned manually
    
    - 1.558_0.012 chosen for when the loss function for hpo was for all particles
        - Done with scale_pos_weight tuned manually
        - Density profile looks a bit better
## 2024-07-01
-  Find the halo’s initial id (use idx to find point at snapshot where it stops being -1)
- DO HPO tuning after tuning weights or scaled radii
## 2024-06-27
- Goal for today/past couple days has been to optimize the model by tuning the following parameters
    - reduce_rad / reduce_perc which lowers the number of particles past a certain radius by a percentage of the total particles within that radius per each following bin
    - weight_rad / min_weight which after a certain radiuses lowers the weight of orbiting particles until a minimum weight at the maximum radius
    - scale_pos_weight which weights how important orbiting particles are versus infalling
## 2024-06-18
- Particles that had pericenters in the recent past
    - Trajectories for the past few snaps
- Position of the halo for a few snaps
- Location of particles that have had pericenters recently
- Relative position as function of time (and radial velocity) for particles with these velocities
- Try using multiprocessing manager
- Try using one function in halo loop
## 2024-06-17
 - Make more zoomed in plot of orbiting particles
    - From this determine cut to make
## 2024-06-14
- Trained model on two larger sims l0063_n1024 and l1000_n1024 plots below
    - Still have the weird over velocity prediction in the model from the l0063 sim
    - Will have to go back and continue investigating that issue
- Implemented a couple of functions to adjust the training dataset
- Make cut where particle has much larger than v200m physical velocity
## 2024-06-11
- Use log spaced radius bins with a ceiling for the number ptls try a large number of bins
    - Plot hist of the number of ptls in each of these bins in linear space
- Find the number of types of particles in each bin of radius
## 2024-06-10
- Goals of paper
    - Have at least 1 model run on smaller sim and compare to human made phase space cut (Edgar) vs SPARTA
    - Understand resolution effects
    - Improve accuracy/stability
- How bad does the model perform as a function of distance from what it was trained on
## 2024-06-09
- Figured out the issue with the multiple simulations and the density profile plot I think
    - One issue was having different masses for each simulation
        - So now just pass a list of masses and then loop through each simulation’s halos and use the correct mass to determine the mass and density profiles
    - Another was incorrectly updating the halo_first index
        - Only was adding the halo_first value for the halo right before the split in sims
        - But need to add that value plus the halo_n for that halo as well to accurately align the sims
- Think this was noticed before but noticing again that in the cbol_l0063_n0256 simulation in small radii <0.05R200m there are disagreements in the total number of particles
    - After this point they look like they match perfectly so I don’t think it really is an issue (can just do a cut off before shorter radii)
    - But thought it was interesting because the cbol_l0500_n0256 simulation doesn’t have this issue
## 2024-06-04
- Fixed the memory division issue which was over allocating memory (looks good on the smaller sim, checking on the larger on now)
## 2024-06-03
- Show position space cuts of halo (ML vs SPARTA)
- General phase space plot of all particles
- How well the model generalizes to different redshifts
- If results for any variation seem the same just keep it as a short sentence (if needed) and if necessary can have a appendix
- Start with just one simulation and then have a section talking about generalizability of it in another section
## 2024-06-02
- Implemented a few new features/consolidated everything so that create_training_dataset.py is no longer needed
- Overview of the code now:
    - calc_ptl_props.py
        - Is run to create the datasets consisting of particle information:
            - Radius, radial velocity, tangential velocity (for two snaps)
            - Label (Orbit/Infall)
            - HIPID
        - And Halo Information
            - Indexing of the ptl dataset (halo first and halo n)
            - Indexing of halo information from SPARTA
        - Chunking is now created based off a memory maximum [might have to be a bit more strict with the limits, but works pretty well]
    - train_xgboost.py
        - Combines datasets from multiple simulations [untested as of rn]
        - Makes cuts in radius space for the training set
        - Makes cuts in nu space as desired (config parameter)
        - Calculates an averaged scale_pos_weight (which should be reasonably accurate despite not being calculated for the entire dataset all at once)
        - Sends this all to one big daskdataframe making use of futures and the like
        - Then does the training and evaluation as before
    - test_xgboost.py
        - Not currently implemented with the dataset creation functions as used in train_xgboost.py
        - But will have the same options and will create the plots for a specific model for a specific dataset
## 2024-05-29
-  Spent the past couple days trying to figure out how to load large datasets from chunks into dask dataframe and use that for the training
    - But this isn’t working on the smaller simulation (might just be because of limitations of my computer) but I think I’m missing something about how to use dask correctly
    - In the mean time think I can instead just subselect from each simulation so together they create one dataset that can be kept in memory and just do it as I have been
- Make a cut by simulation cut by halos below 200 particles
- Paper writing:
    - Start with figures and figure captions
    - Methods section:
        - Simulations used
        - Halo catalogues
        - Processes
        - Does this make sense/reproduce for anyone else
    - Then do Results
        - What figures?
        - What order?
        - What’s important?
    - Actually writing
        - Start off with bullets (very rough)
        - Then reorder and add connections between the points
        - Then make it sound good
- Paper reading
    - Read title
    - Read abstract
    - Don’t read intro
    - Figures
- Structure code to allow for nu bin selection
- Read literature about Random Forest analysis
- Somewhat interestingly there is a distinct improvement in the model at large radii when the data used to train the model only goes out to 5R200m if given the full dataset it will flatten out with predicting too many orbiting ptls while with a cut it converges towards 0
## 2024-05-23
- Implemented functionality for test_xgboost.py
    - Now there is a distinct separation between training and testing
    - Allows for different datasets to easily be used without relying on other config parameters for other files
- Added a config group to the calculated_info hdf5 file
- Think I will do another rework of the code because as of right now the training dataset and the calculated info are just repetitions of one another
    - Especially on zaratan this is wasting a lot of space
    - Think I can make use of **dask.dataframe.read_hdf**
- Rework!
    - Did not infact use dask.dataframe.read_hdf as that had some issues with numpy arrays
    - The current state is (and might change since I haven’t got it to work 100% yet)
        - calc_ptl_props.py now puts all the calculated data into a pandas (pd) dataframe (df) and then saves it to an hdf5 file. This is still chunked but now as separate hdf5 files not just one big one
        - We can actually skip create_train_dataset.py
            - With the pd df we can now load that into a dask df (ddf) and can do this in a loop eliminating the need for creating a stacked dataset
            - This saves a lot of memory (don’t have to create two datasets one in calculated_info and another in xgboost_results) and for stacked sims don’t have to create a third one for the stacked dataset
            - This is very useful as on zaratan with 4 sims it was using multiple TBs of data
        - However, there are a couple issues
            - Splitting into training and testing datasets
                - Decided not to do that preemptively because it doesn’t make a lot of sense to test a model on only part of another simulations dataset
                - And having a full dataset, as well as a training and testing dataset is yet again repetition of data
                - So this is now handled in train_xgboost.py (and maybe test_xgboost.py if it seems necessary)
                    - Unfortunately this is a bit more complicated
                    - Since we want to make a smart cut by halo and not by particle we have to determine that point for that to occur for each simulation
                    - This isn’t so bad and will likely involve loading the data simulation by simulation into a pd df doing the splitting there and then putting that into a ddf and stacking all of them
                - So overall this is mostly solves but ties in to the next problem
            - Dealing with small and large datasets
                - On the small simulation the data seems to be too small to make use of ddf’s except for when finally inputting into the training
                - However, for large simulations it might (haven’t tested yet) run into issues loading the entire simulation’s data as a pd df and doing operations before transferring to a ddf
                - This might be worked around by just figuring out someway to determine the dataset’s size and then just doing one operation or the other
                - However, the one issue that could arise is for large datasets if they have to be loaded as a ddf right away I’m not sure how to split them
        - Also more generally have to look into scattering and how futures work since those warnings pop up pretty frequently
## 2024-05-22
- Improved implementation of stacked simulation dataset
    - Updated the evaluation function and now this is run based off config parameters
        - If run using train_xgboost.py will use model_sims for the dataset
        - If run using test_xgboost.py will use test_sims for the dataset
        - For both will use the datasets specified in eval_datasets (full, train,test)
    - Uses indexing that’s a little weird
        - When stacking the halo_first + halo_n are no longer methods of immediately indexing the entire dataset
        - Instead they are stacked as they are in the simulation (so there are repeated 0s)
        - This allows for breaking the dataset up easily into simulations again (used in making density profiles)
        - However, it can rather easily be recombined by just looping through all the places there are 0s and adding the halo_first value right before that one to all the halo_first values up until the next 0
    - Changed it so it is saving to an hdf5 file since I was running into OOM issues with the 4 big simulations hopefully will see by tomorrow if this new version works
        - Also is nicer to have everything in one file rather than 5+ ones
- Also a rework that would probably be very useful is of the storing of basic simulation information in the outputted all_particle_properties.hdf5 file similar to how SPARTA does with the config/simulation groups
    - Would contain information like:
        - Snapshots and the corresponding SPARTA indices
        - Redshift
        - Search radius (for SPARTA)
        - Search radius (for calc_ptl_props)
    - I want to completely rely on only the SPARTA_output (and that as little as possible) and then anything generated with my code (basically remove dependence on snapshot data as it takes up too much space)
- Now will implement very similar code to train_xgboost except without the training and implementation of loading the right model and the right dataset as determined by config.ini
## 2024-05-21
- Continued working on the combined dataset training
    - Now the simulations desired for the training set are inputted in a list in the config.ini file
    - It will create a unique directory as well for each of the individual simulations used to create it
- However, implementation with the evaluation of the model is still missing
    - Think it will now follow a similar track to the training set where you just input the list of simulations you want and it will find it
    - Will probably need to add functionality where it will call the create_dataset for the simulation if it doesn’t exist
- Split each simulation and then create separately stacked train and test datasets
## 2024-05-20
- Started implementing the plan for the mass based dataset
    - Before meeting: thinking might just do the entire dataset rather than doing some split by mass? Feel like if I can get GPUs working (or maybe even not) it would definitely be doable with a few hours of training
    - Right now only have two of the larger simulations done and hoping to have 4 (63,125,500,1000) for the final dataset
        - Though getting very close to the maximum amount of storage we have so might have to change how some things work with storage
        - Although hopefully once all the sims are run I can just delete all the snaps here and move the sparta outputs to SHELL storage at least
- Making progress on getting the GPUs to work (maybe) I think?
    - Looks like it might actually have been an issue with package versions
    - Looks like the python virtual environment wasn’t getting decoupled from the standard installations of dask and so they weren’t getting updated
    - After several restarts think everything should be the right version waiting for the test to run tho
## 2024-05-19
- Updating create_train_dataset.py (need new name)
    - Can use the halo_n information (multiplied by mass/h) to determine peak height
        - use colossus lss.peaks.peakHeight()
    - Loop through each folder in calculated_info for the selected simulations
        - For now will use the same snapshots
            - Will need to adjust this when I want to incoporate lower resolution sims
        - Find which halos fit the desired mass range
    - No longer split the dataset in two in the calc_ptl_props.py
        - Will now do this in this file
## 2024-05-13
- Create it so training is simulation independent
    - Search through all simulation for specific mass bins and resolution (~200ptls)
    - Compare plots r-rv-tv (all ptls) for simulations
## 2024-05-03
- Updated file system for the storage of models and their plots
    - Now much easier to use the rdml command since path is more intuitive
    - Path format listed in notion
- Also fixed density profile ratio plot and now the scatter looks much much better
    - Although worryingly the profiile isn’t converging to 1 at high radii…
## 2024-05-02
- Created a pipline for all the scripts that are being used
    - config.init now has different tags for each python script which can be enabled
    - [exec.py](http://exec.py) then executes all the required scripts in order
    - The entire process is now simplified to putting in parameters in the config file and submitting one job
    - Will also work on doing the same but on zaratan
## 2024-04-22
- Fix scatter on the density profile plots
    - Dividing the ratio by the median
    - Make sure that it is consistent between when using all halos versus combined populations
    - Don’t take ratio first and then percentile
        - Use error propagation (?) double check this
- Check out feature importance
- Plotting the secondary snap
- Plotting panel of mislabeled particles not scaled
- Plotting the predictions of the model at each pixel
- Create a plot where you have a slider
    - Plot vr vs r
    - Then have a slider for vt and other params to adjust the population
- Make a cut for if a pixel has less than x particles then ignore in scaled misclass
    - Anything that is below this cutoff is set as white
- Add an annotation for each snapshot in the scaled misclass plot with an Ntot
- Add titles for primary snap on all columns also slightly more white space between the snaps
## 2024-04-16
- Meeting with Benedikt
    - halos of same mass across different sims
    - select what we use in the training set (specifically choose what we want rather than going with everything)
- General review of what I’ve been working on
    - Continuing to work on the particles that have a very high radial velocity
        - Developed code that plots the particle and the x closest halos at y snap going back z snaps in 3D space
        - Might have to do some debugging of the particle motion since it really seems to be jumping around a lot’
        - Also might be better to center around one of the halos?
        - Might also try to plot more orbiting events
            - Could do it so in the snapshots where there are orbiting events find the x halos nearest and plot those
    - Found a way so I don’t have to change the path everytime on zaratan! 
        
        ```
        os.environ.get('PWD') + "/config.ini"
        ```
        
    - Also worked on Poster for undergraduate research day (shown below) and abstract
    - Will also now start going again with the ML portion since I’ve been kinda stuck on these weird particles
        - Want to setup an effective pipeline for testing and training
        - Also need to come up with a good naming convention for models based on what they were trained on and then what they are being tested on
        - Should only be essential information for differentiating all other information should be stored in a text file outputted everytime
## 2024-04-01
- **Abstract**
    - Numerical simulations are run with dark matter particles and are needed but describing which of these particles belong to which halos is not easy. Generally done in a very simplified manner
    - 2nd sentence of 1st para
        - Reframe: galaxies form in the centers of halos and coevolve with their hosts such that many properties are correlated
- Movie plots
    - Keep velocity vectors but have it toggleable
    - have the paths that they take instead of at each separate snap
    - Plot only halos at the snapshot we care about don’t worry about older ones
        - When a pericenter is found put a point where that happened
## 2024-03-25
- Make plot with different mass range ln(v^2…) vs r
- Sync repo of sparta to get Calvin’s extension of snap hist
- Make the same plot for the larger sim
- Particle tracking plot
    - Do a search for all halos around a couple problematic particles
    - Plot through a few snapshots
    - Set the origin as the largest halo
- Abstract
    - Introduce dark matter: not well understood
    - Knowledge of how it behaves is crucial to adjusting the Standard Model
    - Large scale structure is a good probe of cosmological quantities (DM and DE)
    - DM forms structures called halos that form the cosmic web
    - Use halos to model what distribution of matter should like
        - Compare models to measured to constrain the quantities
    - Because most of the matter is in DM this is important
    - But current model is very arbitrary and this definition is more accurate/physical
    - Mention that this has been done before and this is improving on it (promising alternative)
## 2024-03-04
- Meeting with Benedikt and Calvin
	- Look at a few particles with SPARTA debug tracer see when they get a pericenter
	- Plot the trajectories of these particles
	- V200m distribution for one of these halos
	- Limit training set to not include these particles
	    - Anything higher than some cut in V200m is infalling
	    - Similar to some cut in R200m space
- Been working on the weird artifact mentioned in the last entry
- Found that the halos that have these particles have these particles moving in the same direction
    - Likely means that they belong to a halo moving through another halo at high speed
- To fix this made first a relabel where all particles <1.1R200m with radial velocity > 10 V200m are now labeled infalling
- Then also did another relabel with the same except for tangential velocity
- However, the ML model still seems to be making predictions as if these particles are present which is odd.
## 2024-02-19
- Issue with the cbol_l0063_n1024 having an odd cutoff at ~R200m where orbiting particles have much more particles and infalling have much less in the plot after training
- Checked out the density profiles for a couple halos and they looked good
- Then checked out the distribution for one bin during the calculation phase and the same artifact as before
- Look at the very high rad vel particles
    - Look at these plots for individual halos
    - Find a halo with a lot of these particles (>|50| vr/v200m)
    - Plot the particles and their velocity vectors. If they are all pointing in the same direction of a subhalo going through a larger one.
## 2024-02-05
- Test on
    - cbol_l0063_n1024
    - cbol_l0125_n1024
    - cbol_l0250_n1024
    - cbol_l0500_n1024
- How well the model works on other snapshots not trained on?
- How well do models trained on snaps at different redshifts (not z=0) perform
    - How well does the model capture a universal orbiting profile?
- Make a phase space plot of secondary snap for all particles
    - See if the shape is the same with the filtered second snap
## 2024-01-29
- Density Profile Plot
    - Limit range of y-axis more
    - Don't plot places where I don’t have enough halos (mention in caption)
    - Don’t plot ratio plot in log space
- Train 3 models on 3 different resolutions at same volume
    - How does each 3 perform with differing volumes at a different resolution
## 2024-01-27
- Created the new density profile map with the new error bars
    - Overall it looks pretty good I think? Not sure and will have to see what benedikt says
    - Also there are new orbiting particles all the way out to 10R200m which I find very odd and hopefully benedikt can give some sort of answer otherwise something probably is wrong
- Updated code so that when creating the training/testing datasets there is an option to have the dataset contain only up to a certain radius of data
    - This means I can now have training data out to 10R200m but only train on 5R200m of it
    - Potential later improvement could be to have it be a slice of radii but not sure how useful that would be.
        - This could help the implementation of multiple xgboost models for different radii ranges if I choose to implement that later
## 2024-01-25
- For extending the density profiles need to add the ability for my code to calculate r, vr, vt for up to a certain radius but then only train up to a smaller radius
## 2024-01-22
- How many particles are being dropped? Look in diemer 2021
- Make density profile plot with density
- Do np.percentile for 68% for density profile
- Make new column for the secondary snapshot but just r-vr
- Make density plot go out as far as my model is trained
    - Figure out how to do this lol
- Message edgar what snapshots I’m doing and set up a comparison
- Create confusion matrix from classification report
## 2024-01-17/18/19
- Spent the past few days working on perfecting the first figure for my paper
    - Is focused on the misclassified particles with plotting the r-vr, r-vt, vr-vt graphs
    - First row is the overall distribution
    - Second is all misclassified particles
    - Third is infalling particles that were labeled orbiting divided by number of infalling in the box
    - Fourth is orbiting particles that were labeled infalling divided by number of orbiting in the box
    - Fifth is all misclassified particles divided by total num of particles in the box
    - Had to fix a bunch of errors in my original plotting
        - What the misclassified particles were divided by was originally switched
        - Removal of extraneous ticks and labels
        - Still showing boxes that had no misclassified particles but had particles there
- Transferred over from using user inputted snapshot numbers to user inputted redshift value
    - Now program searches for nearest snapshot and uses that
    - Might want to add compatibility again for snapshot number
- Ran into an issue where older snapshots had incorrectly labeled particles since snap_is_lower_limit would get overwritten and I would have different labels for particles than the density profile would.
    - Right now will just use pericenters to determining orbiting or not and ignore lower limit in the decision (unless within three snapshots of the end)
    - Will revisit this in the future especially to see how using older snapshot data can be used to predict future snapshots and vice versa
## 2024-01-16
- Haven’t had much to report until now due to vacation and having a weird issue on Zaratan
    - Realized that there should be a lot more orbiting particles and when investigating found that for many halos the density profiles are vastly different
    - This didn’t make sense as the same code worked for the original simulation even running on zaratan
    - Made some changes to deal with potentially having too large arrays in memory
        - Changed how the multiprocessing works and removed all global variables involved with that and now everything gets passed per split not all at once
        - Also now have each snapshot information (snapshot number, box size, scale factor etc.) is stored in a dictionary. This should make it easier if in the future more than two snaps are being used
    - Then realized that the halos that have no matching particles are on opposite sides of the box meaning that they are probably separated in time
        - So the particle data for snapshot 90 does not match what SPARTA outputs for that snapshot
        - Looking into it there are 101 snapshot directories but only 91 rockstar halo catalogues so SPARTA only sees 91 snapshots but my code sees 101 leading to the mismatch
        - No clue what to do about this except wait for Benedikt to respond
## 2023-12-29
- Spoke about the different models I have (showed both base trained and HPO trained models predicting on the smaller simulation and the larger one with 1 and 2 dynamical times)
- Don’t have to show the r-rv-tv plots anymore but still keep making them
- Create a scaled percent error plot as well
- For scaled plots (percent error and misclassified ptls) set boxes with zero particles to white
- For scaled misclassified ptl plot
    - Use inferno cmap since no negative
    - Try plotting on a log scale
- Create new scaled misclassified ptl plot with all types of particles (add as a row)
## 2023-12-28
- Potential idea: go back to the multiple models but make larger use of hyperparameter training, specifically weighting?
    - Might make model worse at longer higher radii since most aren’t orbiting
    - So might want an upper limit?
- Try out regularization
- Compare density profiles
    - Recreate figure 3, 5, 6 on [https://academic.oup.com/mnras/article-abstract/513/1/573/6561624?redirectedFrom=PDF](https://academic.oup.com/mnras/article-abstract/513/1/573/6561624?redirectedFrom=PDF)
- What tests do we want to make to compare this
    - Compare to SPARTA and to traditional
- Look at single halos and see if there is visual distinction in phase space
- Try linkyourfile for notion to access text files for models
## 2023-12-23
- Focused primarily on hyperparameter tuning
    - Was able to get it to work although it does take a while (about 30min with 3 parameters being varied with 750 trees) on the smaller dataset so could be many hours on the larger one
    - While doing this adjusted how the layout of output folders are so now they are divided first by snapshots used and sparta file and then within that by model and then all the plots and info are put in
    - In addition now have an output plain text file that gives a summary of the model’s characteristics
    - Looks like tuning the hyperparemeters results in better results looking at the graphs
        - Tuned max_depth, learning_rate, and scale_pos_weight
        - Might still tune number of trees
        - But other than that not sure if it would be worth tuning much else or it will just add additional overhead
## 2023-12-22
- Continued making improvements in code for the visualization functions for the graphs of the ml predictions
    - Now everything should be abstracted in some way and is a lot lot less copy paste
- Spent a bunch of time looking into hyperparameter tuning
    - Ended up following [https://github.com/rapidsai/cloud-ml-examples/blob/main/dask/notebooks/HPO_demo.ipynb](https://github.com/rapidsai/cloud-ml-examples/blob/main/dask/notebooks/HPO_demo.ipynb)
    - The main (potential) issue is that they don’t use a daskdmatrix but use dask arrays so I’m not sure how well this will handle on zaratan
    - In addition the only examples used SKLearn’s implementation of XGBoost and not the basic XGBoost so that’s what I used
        - So what I’m thinking I will do is do the parameter searches to determine the best parameters and then do the training with those parameters enabled on base xgboost
    - But after a bunch of trial and error with other examples I got it to run locally on the smaller dataset and the most interesting result I think is that it found a max depth of 5 is the best
    - I only tested the learning rate and max depth so it could be worth experimenting with different values
    - I also don’t know if it is worth varying the number of trees since I think you can just do that automatically with early stopping rounds later on
    - **Future Steps**
        - Explore more parameters
        - Decide on how this will be implemented start to finish with what is currently present
            - The actual flow of search to train
            - Outputting parameters to a text file
            - Checking if model has already been trained with these params?
        - See if this can translate over to Zaratan
## 2023-12-21
- Current state of running on Zaratan is that I can actually train XGBoost which is good but there are some issues. The following steps are
    - Test the currently trained models
        - First have to improve the plotting code
            - Make it more clear?
            - Check that what it is plotting is correct
            - Less copy paste and more abstract if possible
        - See if adjusting certain parameters has an effect
        - See if having different dynamical times has an effect
    - Figure out how to get the model to be trained on gpus
        - Currently can’t use gpu_hist which is this version of XGBoost’s gpu training method
            - This has a problem that seems to be tied with Zaratan and will send an update on the ticket
        - Will try to run only on one node to see if the issue is the distribution of GPUs or just using GPUs
    - Another thing to look into is potential issues when using only a fraction of the dataset
        - See about random sampling instead of just choosing the first x data points
        - Shouldn’t make _too_ much of a difference since dataset is still so large
        - But had some issues with random.choice so something to look into
    - I should also create a baseline model with no modifications to compare against
- Made a bunch of updates to the visualization function code I had (primarily for the r-vr-vt graphs and related)
    - Made the code nicer where there are now a few functions that eliminate dozens of unnecessary copy-pasted lines
        - Probably still some room to make the code nicer (there are a bunch of copy-pasted .imshow() plots
        - But honestly might just wait to try and make my own more general plotting software unless there are some major issues
    - Fixed the rotation present in the vr-vt graphs
        - Got vt and vr switched up when creating the histograms as well as in the ranges plotted
    - Created a new plot that now graphs the unscaled misclassified number of particles
- Created a more general log for how the models trained on Zaratan perform located
## 2023-12-15
- After uninstallling all of the additional libraries that were already available on zaratan it seems that the training actually works now
    - One small downside is that this version of xgboost doesn’t have daskquantiledmatrix but as long as it still runs I don’t think its an issue
- Currently trying different combinations of percentage of training data as well as using gpus vs cpus
- Also as in yesterday I think there are some issues with my plotting code so I think I’m going to try and fix that first before making plots
- But I’ll use classification report to get a general idea of how good these models are
## 2023-12-12
- Check misclassification plots to make sure I’m dividing by the right thing
- Check error plots especially where there are just a couple bins marked
## 2023-12-05
- Figured out that I have to use dask_jobqueue.SLURMCluster() to deploy the GPU jobs rather than requesting the GPUs and then building a cluster (I think)
    - Although not super sure since I’m scaling by 8 jobs (with one GPU each) but when I look at my queue there are only two additional jobs to my initial submission
- Also had to reinstall my virtual environment and followed [https://stackoverflow.com/questions/76579783/rapids-pip-installation-issue](https://stackoverflow.com/questions/76579783/rapids-pip-installation-issue)
## 2023-12-04
- Made some edits to code so that the training dataset is now float32 not float64 to save space especially since extra precision is not needed
    - This should reduce the dataset down to a size that is usable since before I was able to train a model with .5 of the dataset and this should halve the memory
    - This had the additional side affect of splitting the training dataset into the actual training data (X), the labels (y), and the HIPIDS since they all have different dtypes
    - This will have some impact on code used in testing but should be pretty easy to avoid
- It also seems that dask is not correctly scaling up to make use of all the gpus available since it is only saying task assigned for 0-3 (so only 4 gpus on one node)
    - Looking into figuring out how to fix this
## 2023-11-28
- Look into having a progress bar for a loop
- Use memory profiler module for python
- Read diemer papers about SPARTA
    - Dynamics based density profile specifically
- Read Halo models of large scale structures
- Read Ryden cosmology textbook
- Read Rockstar paper Behroozi
- Read The cosmological simulation code gadget-2
- How to read these papers
    - Astronomy papers
        - Focus on introduction
        - Skip methods
        - Read particularly relevant sections
        - Highlight terms and topics unfamiliar with
        - Since these are old don’t look at what they reference
        - Look at who cites these papers on ADS and also talk about this topic
            - Can filter on ADS
    - Coding Papers
        - Focus on the methods and understand why decisions were made
        - What hiccups came along?
- Continuing to work on trying to get dask to work on the HPC cluster
- Going to try following [https://developer.nvidia.com/blog/unlocking-multi-gpu-model-training-with-dask-xgboost/](https://developer.nvidia.com/blog/unlocking-multi-gpu-model-training-with-dask-xgboost/) more closely
- Also will try to find out how much memory is being used by each thing
## 2023-10-31
- Exchange memory for temporary storage
    - Pickling the models and then loading them when needed
- Use multiple gpu nodes
    - Is this posisble?
    - Train model on a separate node with its own memory
- Look at particles in bins with high rad vel at around 2 R200m
    - Look at where they are in other phase space graphs
    - Make plots of the trajectories of these particles
        - With more snapshot data
    - Make graph of the kinetic energy (radial velocity) of the particles versus the potential energy of the host
        - Find where GMm/r = 1/2mv^2
        - plot vr = sqrt(GM/r) use M200m from R200m
        - See where these particles fall
        - Could ML be learning the bound potential?
    - Does training set have a positive vr cap?
        - Are these particles exceeding that cap?
- See how well the smaller dataset trained model performs on the larger dataset
    - Interesting resolution test
        - Convergence of model with resolution
- Recap from 10/18
	- - Ran calc_ptl_properties on Zaratan successfully
    - Will likely need to rerun this due to issues fixed that will be discussed later
    - Found what was taking so long
        - The finding of particle indices and number of particles per halo
        - Made that into multiprocessable and now the whole code takes about 6 hrs compared to > 25 hrs
- Running the training and testing of this new dataset on zaratan failed though
    - Not enough memory on the gpu partitions
    - Potential ideas talked about in 2023-10-31 CM
    - But initial thought was to divide the training dataset into multiple smaller files that would be iteratively loaded into xgboost [https://xgboost.readthedocs.io/en/stable/tutorials/external_memory.html](https://xgboost.readthedocs.io/en/stable/tutorials/external_memory.html)
        - However, this was pretty annoying to work with when testing on the local dataset
        - Can’t use sklearns implementation so no predict_proba that I could find
        - Also predictions (although on incorrect dataset) were all the same which was odd
- In the above process found issues with calc_ptl_props
    - The arrays where data per halo was loaded was not correctly doing it for some reason?
    - Also realized it was kinda dumb to do it the way I was doing with having one big array in memory each process accesses
    - So now everything is returned and then unzipped and recombined into one big array
    - Now everything works as intended with all particles present!
- Did a very slapdash training with this new corrected dataset and had really good results (overall 98% accuracy)
    - Plots also look pretty good as seen below
    - This was done with only one model and will try to do the radial split models again
        - Hopefully this will solve the issues with the misclassified particles around 1-2R200m
    - For the misclassified particles talked about in 2023-10-31 CM possible plots to make to narrow down what is happening
- **Next Steps**
    - Looking into the particles that show up with the high rad vel around 1-2R200m in the misclassified plot
        - Seeing what they look like in the different phase spaces
        - Graphing their kinetic energy versus the potential energy of the halo
        - Plotting the trajectory of these particles
    - Seeing if using three models with their training data split by radius has an effect on learning these misclassified particles
    - See how well this model performs on predicting the larger dataset on zaratan
    - Improve the training/testing code so it is actually usable with the larger dataset on zaratan
## 2023-10-24
- Eliminate some of the halos by mass in the training set
    - See how this impacts predictions
- See if split training dataset by halo bins
    - Somehow even out the number of particles
- Play around with search radii again
## 2023-10-17
- For my graphics of the ensemble
    - How to distinguish between splitting the particles in the training of particles for the different radii versus predicting through all three
- Recap from 10/10
	- Still stuck!!
    - Made some plots of the difference in number of particles in each bin rather than just the ratio
    - For some halos it looks like not even the total number of particles match which doesn’t really make sense… not sure how that could be happening
- Started working on goldwater research essay and made some progress have a draft of the intro and some bullet points for everything else I will discuss.
## 2023-10-10
- Find how many particles are wrong not just the fraction
- Check the halo status for density profiles
- Pipeline for Zaratan
    - First line is sbatch
    - Second line grabs job id
    - Declare dependency and after a job finishes without error code submit second job
## 2023-10-03
- Find out the masses of the halos that are having issues
    - Where they are located in space as well
- Make a histogram of these halos
- See if the same issue with the printing occurs for the halos that have good matches
- Check out [https://glueviz.org/](https://glueviz.org/) for visualizations of particles
- Make intro more compact
    - Start with talking about critical goal physics is to understand dark matter
        - Doesn’t fit into standard model
    - Talk about how we can’t observe dark matter but can observe its effects
        - Can use dark matter halos to model large scales and get constraints in cosmologies
        - Can also use them to model galaxies (very closely related) Gives insight from galactic to universal scales
        - Can see the visible matter and then get insight into behavior of dark matter
        - But need theoretical predictions of what these connections could potentially be → then go to simulations
    - In simulations find spherical overdensities we call dark matter halos
    - Talk about traditional halo definitions and issues with them
        - Don’t have the accuracy required to make constraints
        - Kurey and sheff (?) 2002 halo definition
        - Accuracy van den (?) bosch2013
        - Garcia, rafael 2021
## 2023-09-26
- Analyze what types of halos this is happening or what types of particles
- Create a fake halo with orbit/infall and check what the orbiting and infalling are after
- Constructing test cases (?)
- Look at 2d positions of halos and particles causing issues
- Rewrote code to try and hopefully fix issue with halo density profiles
    - Bad news: it still doesn’t work
    - Good news: the code is now compatible with multiprocessing
        - The halo search and particle parameter calculations are done in parallel and combined into one big array as the processes run by assigning indices calculated during the initial search
        - These results are then added to the hdf5 file like before
    - Meh news: there is no real speedup currently mainly because of the additional overhead now in the initial searches and in general multiprocessing has a start up overhead. But hopefully on zaratan with the much larger dataset we should see a noticeable improvement
- Converted everything with position units from kpc to kpc/h
    - This was causing issue with the colossus function where R200m is converted to M200m since it expected a value in kpc/h
    - Now everything across the code is standardized though so there shouldn’t be any issues hopefully?
    - What this changed was:
        - The dynamical time calculations so now are using different snapshots for the same t_dyn factor
        - The scaling of the radial and tangential velocities since V200m is now different
        - Everything else (specifically the searching) should still be the same since everything involved is now just adjusted by the same factor of h
## 2023-09-21
- Changed xgboost training to be split into four files now
    - This is done to make it easier on zaratan where requesting gpu takes a while
    - Now first file generates the datasets
        - Not sure this is really necessary… will have to look through it
    - Second file trains the models
        - Uses the third file which is the class for model which consists of sub models
    - Fourth file tests the models and makes the plots
- Now having issues with correctly assigning orbiting and infalling particles again…
    - Not sure why this is happening but it’s very close but there are a bunch of back and forth spikes in the density profile ratios
    - Also adjusting the assignment of orbiting/infalling since before seemed to have extraneous steps
## 2023-09-19
- Calvin Meeting
	- Sparta.load for the subset of halos I need
	- Then create a function that matches the index to where the halo id is in the sparta.load output
	- Halo_first and halo_n are moved to the halos section
	- Use github branches to try new things
	- Set up git on zaratan
## 2023-09-18
- Currently not finding nearly enough orbiting particles for some reason…
    - Process looks like this:
        1. Start with [1,2,3,4,5,6,7,8,9,10]
        2. Get the indices where the conditions for halos are met [2,3,5,6,7,10]
        
        ```Python
        np.where((p_halos_status == 10) & (p_halos_last_snap >= p_snap) & (c_halos_status > 0) & (c_halos_last_snap >= c_snap))[0]
        ```
        
        1. Then calculate the number of test halos based on test halo ratio
        2. Then choose which indices of the matched indices are for test and which are for train Train: [3,6,7,10] Test: [2,5]
        3. Then take the halo information corresponding to those indices
        4. Then loop through x amount of halos going in order (if x = 2) would do [3,6] and then [7,10] then [2,5]
        5. Then load the information from the sparta file based off of these indices
## 2023-09-15
- Something weird is going on with the orbit assigning now…
    - Seems like there are way too few orbiting particles
    - Changed the sparta load function to a custom one I made
## 2023-09-14
- Do the same binning for all the 2dhists
    - Have a set histogram for each subplot
    - For particles that are orbiting but are actually infalling
        - Number of mislabeled / number of targets
        - Check for NaNs and 0/0s
            - Mask all 0s in denominator to 1
            - Look for a numpy argument for divide by zero
    - Make percent error line of plots
    - Change title of hist to make more clear
- Do rows based on dynamical times (each row is a different dynamical time)
    - Show percent error for infall and orbit
    - Then a separate one for misclassified particles
- Look at zaratan high memory nodes
## 2023-09-12
- Recap from 09/07
	- Been working less so condensing several entries
	- Working on Zaratan
	    - Got SPARTA to run on the largest simulation
	    - Working on getting find particle properties to run on there
	        - Made that file a lot more easier to work with on zaratan
	        - More generic variables and paths
	        - Now just have all things that are needed to be changed per run at the top
		- Created some graphs for the misclassified particles but have to create new graphs where they are the fraction of particles that are misclassified
- Calvin Meeting
	- Do the same binning for all the 2dhists
    - Have a set histogram for each subplot
    - For particles that are orbiting but are actually infalling
        - Number of mislabeled / number of targets
        - Check for NaNs and 0/0s
            - Mask all 0s in denominator to 1
            - Look for a numpy argument for divide by zero
    - Make percent error line of plots
    - Change title of hist to make more clear
	- Do rows based on dynamical times (each row is a different dynamical time)
	    - Show percent error for infall and orbit
	    - Then a separate one for misclassified particles
	- Look at zaratan high memory nodes
## 2023-09-07
- Plot particles that are incorrectly classified as orbiting and then another for incorrectly classified as infalling
    - Do for .5, 1, 2 tdyn
- Look at pericenter and apocenter times
- Pull out ids that are wrong
    - Then analyze
- Time of accretion is hard to compute
- Maybe add more snapshots
- For 2 tdyn
    - Likely that it was a ptl from 2 tdyn ago and has reached the same poitn and looks infalling
- For 1 tdyn
    - Would’ve crossed from peri to apocenter and now some are at a similar point to where it fell in
- Completed t_dyn calculation transfer
    - Now completely automatically calculates t_dyn
    - Most bugs should be out
- Next steps to improve code
    - Automatically determine parameters (and number of them)
    - Determine which snapshots and sparta file from file name
- Doesn’t seem like the particles that are being misclassified around 3-4R200m aren’t because of the pericenters since the percentage of the particles there that had pericenters was ~20%
## 2023-09-06
- Now going to do t_dyn in the initial search
    - This means that now everything has to be done later
        - Filtering out halos
        - Choosing test and train indices
        - Etc.
    - But it means that t_dyn is automatically calculated and doesn’t have to be found in another run and then hard coded
    - Have to do some shifting of code around
        - But think I can just move initial search out of the split by mass function
- Added n_pericenters to output
    - This will let me test the particles around the 3-4R00m range as discussed in 2023-08-28 CM
    - Probably will be removed in the future
    - Might want to add a more robust method of saving to hdf5 file
        - Have saved parameters in a list and loop through
        - Would have to figure out someway to deal with different shapes
## 2023-09-05
- Put colossus in scratch but can put sparta/pygadgether reader in home directory
    - Export path to PYTHON
- Try running code without virtual environment
    - If it still doesn’t work submit help ticket about numexpr
- Use sparta method to match particles
    - sparta.load
    - res_match
    - res_pad_unmatched=True
- Setting up pyenv to match zaratan
    - pyenv local zaratan_env
    - pyenv activate
    - Location: /home/zvladimi/.pyenv/versions/zaratan_env
    - Have to add paths to pygadgetreader and sparta
        
        ```undefined
        sys.path.insert(0, '/home/zvladimi/MLOIS/pygadgetreader')
        sys.path.insert(0, '/home/zvladimi/MLOIS/sparta/analysis')
        ```
        
    - As well as building and installing both
        - python [setup.py](http://setup.py) build
        - python [setup.py](http://setup.py) install
    - Activate venv: source ~/my-venv/bin/activate
## 2023-08-31
- Implemented grid spec for plotting the r, vr, vt plots
    - Now everything looks the way it should with the color bars stretching for the first two plots and then a separate one for the third row
    - Right now the code is a bit ugly with it basically repeated for infalling and orbiting particles
        - Holding off on making it a function so I can try and implement (again) a general plotting class that implements gridspec
        - Hopefully this plot won’t need to change too much for rn tho
## 2023-08-28
- Plotting 2dhist
    - gridspec
    - For the colorbar in gs use cax = gs[:,-1]
- For particles beyond 4 ish R200m
    - If they already have had a pericenter before
        - Could be because they have been ejected out during orbit and are falling back in
    - Maybe add time of infall? Or time of accretion
        - Time of infall: turn ifl on
        - Or just use trajectory and use first_snap as a parameter
- In home directory on zaratan
    - Have the simulation data in Scratch or scratch-diemer-prj
    - The output from the SPARTA analysis
- Look at available software page for info about module
    - hdf5
    - openmpi or maybe intelmpi
    - gcc
    - gsl
    - fftw
    - python
    - ffmpeg
- For memory usage
    - In SPARTA logs there is a memory log level in sparta config file
    - Increase level in config
    - Look for peak memory
- Create a github for an overleaf paper
    - Then for adding images:
        - Then can just add the figures to the github folders
- Look at [https://github.com/calvinosinga/figrid](https://github.com/calvinosinga/figrid)
    - Look at adjusting figure after it has been made
    - Some shortcuts taken with colorbars and combining figs
- Running on Zaratan
    - Was able to run the sparta_cbol_l0063_n0256 simulation on zaratan
    - Overall wasn’t too bad just had to move the data and sparta_dev folders from nyx over
    - Then switch over the files within the sparta settings (as well as change the platform to default)
    - Then created a submit file
        - Got the memory usage from running SPARTA on nyx (will extrapolate from this for the larger sims)
            - Otherwise followed documentation in [https://hpcc.umd.edu/](https://hpcc.umd.edu/)
            - Also will extrapolate the amount of time as well
            - In addition had to add to .bashrc what was mentioned in 2023-08-28 CM
        - Then just mpirun "/home/zvladimi/scratch/sparta_dev/build/sparta” "/home/zvladimi/scratch/sparta_dev/config/sparta_complete.cfg”
## 2023-08-25
- Worked on getting set up on Zaratan
## 2023-08-24
- Spent a bunch of time trying to get the plot for 2dhists to be better
    - Want the colorbar to stretch for the two subplots of ML preds and actual labels and then the separate one for the percent error
    - Think I have to do something with gridspec but not exactly sure how
- Not 100% everything is working correctly as in the relative differences for 0-3 nu orbiting ptls
## 2023-08-21
- cmap.set_under to get a black background
- Anything below vmin = vmin
- Make a plot of the percent error between the ML model and the actual labels in 2d hist
- \#SBATCH —account=diemer-prf-aac
- Long term storage on nyx
- Globus
    - Can sync zaratan and nyx as collections
- Have to do module load to set environment
- Have commands in bashrc
    - Cancel command
    - Quotas for all the different storages
- \#SBATCH —array
    - Fast way to submit a bunch of the same job as one job
- Redo the same simulation as before first until it runs correctly
- Shouldn’t be using more than 2% of all the allocation
- Can have Slurm send emails about jobs
- Look at Slurm docs
	- Use srun for sub processes
## 2023-08-20
- Finally figured out the issue with the density profile ratio plots!!
    - Was an issue with the indexing of the SPARTA comparison profiles so nice to know it wasn’t my code…
    - But still took forever to finally figure that out…
- Overall the graphs look solid?
    - Honestly from these it looks like the model does really well with orbiting particles rather than with infalling
    - But will see what Benedikt says and then make some adjustments from there
## 2023-08-17
- Changed how models are created
    - Now each model per snap is a class
    - So should be applicable to any number of snapshots
    - Whenever a model class is created and trained three sub models are created as well so that is preserved
    - Overall functions the same as before but with the added benefit that no particles are left out as there are the additional models trained only on 3 parameters
- Issue with density profiles still
    - For one halo I looked at they do match so something must be kinda right
    - but for all the rest of them there are way to many particles in my predictions which doesn’t make sense…
    - So something might be wrong with my pairing function?
    - Maybe too big numbers or something else
## 2023-08-15
- If the halo didn’t exist before
    - Then have a model that is trained to only go off one snap
    - So always have a prediction
- Look into definitions of all the classification report and understand
    - **Precision can be seen as a measure of quality, and recall as a measure of quantity**. Higher precision means that an algorithm returns more relevant results than irrelevant ones, and high recall means that an algorithm returns most of the relevant results (whether or not irrelevant ones are also returned).
- Look into why the feature importance is so heavy on scaled radii values
- Combine all halos for the error at different radii
- Why aren’t color bars aren’t on the 2d hists?
- Don’t split 2dhist into different mass bins
- Can plot the density plot ratio by lines
- Plot the density profiles as well as the ratios
- Deal with particles that don’t have info from prior snap
    - Still save them with the data from the current snap but give 0s for the other params
    - Then when creating test/train datasets split them further so train sets for those with 6 params and those with 3 and same for test
    - Then train two separate sets of models one for those with 6 and one for those with 3
## 2023-08-14
Now using screens to run multiple data loading for different combos of snapshots at the same time
    
    - Create a screen:
    
    ```Bash
    $ screen -S <name of screen>
    ```
    
    - Run the particle finder and answer prompts:
    
    ```Bash
    python3 ~/MLOIS/find_particle_properties_ML.py
    ```
    
    - Other screen commands
    
    ```Bash
    ctrl-a d \#leave the screen
    $ screen -ls # see all current screens
    $ screen -r <screen id> # go to specific screen
    $ screen -XS <screen id> quit # remove a screen
    ```
    
    - Also useful is $ htop which lets you see CPU usage and all processes
    - Currently prompts for:
        - Whether 1 or 2+ snapshots
        - Using dynamical time or input multiple snaps
        - Which snap(s)
        - Search radius
        - (can add which SPARTA file to use when I get new ones)
- Ran ML model on different combos of snaps and search radii (results on validation:
    
    - **Snap 190, S.R. 4**
        
        |   |   |   |   |
        |---|---|---|---|
        ||Precision|Recall|f1|
        |0|.70|.99|.82|
        |1|.94|.27|.42|
        |Accuracy|||.73|
        
    - **Snap 190, S.R. 6**
    
    |   |   |   |   |
    |---|---|---|---|
    ||Precision|Recall|f1|
    |0|.85|1|.92|
    |1|.92|.25|.39|
    |Accuracy|||.8|
    
    - **Snap 176, S.R. 4**
        
        |   |   |   |   |
        |---|---|---|---|
        ||Precision|Recall|f1|
        |0|.69|.96|.8|
        |1|.8|.25|.39|
        |Accuracy|||.7|
        
    - **Snap 176, S.R. 5**
    
    |   |   |   |   |
    |---|---|---|---|
    ||Precision|Recall|f1|
    |0|.79|.98|.88|
    |1|.86|.26|.40|
    |Accuracy|||.80|
    
    - **Snap 176, S.R. 6**
        
        |   |   |   |   |
        |---|---|---|---|
        ||Precision|Recall|f1|
        |0|.85|.99|.91|
        |1|.82|.24|.38|
        |Accuracy|||.85|
        
    - **Snap 176, S.R. 7**
    
    |   |   |   |   |
    |---|---|---|---|
    ||Precision|Recall|f1|
    |0|.89|.99|.94|
    |1|.81|.23|.36|
    |Accuracy|||.88|
    
    - **Snap 190,176, S.R. 4**
        
        |   |   |   |   |
        |---|---|---|---|
        ||Precision|Recall|f1|
        |0|.91|.96|.94|
        |1|.96|.91|.93|
        |Accuracy|||.94|
        
    - **Snap 190,176 S.R. 5**
        
        |   |   |   |   |
        |---|---|---|---|
        ||Precision|Recall|f1|
        |0|.94|.98|.96|
        |1|.96|.89|.93|
        |Accuracy|||.95|
        
    - **Snap 190,176 S.R. 6**
        
        |   |   |   |   |
        |---|---|---|---|
        ||Precision|Recall|f1|
        |0|.96|.99|.97|
        |1|.96|.88|.92|
        |Accuracy|||.96|
        
    - **Snap 190,176 S.R. 7**
        
        |   |   |   |   |
        |---|---|---|---|
        ||Precision|Recall|f1|
        |0|.97|.99|.98|
        |1|.96|.88|.91|
        |Accuracy|||.97|
        
    - **Snap 190,176 S.R. 8**
        
        |   |   |   |   |
        |---|---|---|---|
        ||Precision|Recall|f1|
        |0|.98|.99|.98|
        |1|.96|.87|.91|
        |Accuracy|||.97|
        
    - **Snap 190,176 S.R. 9**
        
        |   |   |   |   |
        |---|---|---|---|
        ||Precision|Recall|f1|
        |0|.98|.99|.99|
        |1|.96|.86|.90|
        |Accuracy|||.98|
        
    - **Snap 190,176 S.R. 10**
        
        |   |   |   |   |
        |---|---|---|---|
        ||Precision|Recall|f1|
        |0|.98|1|.99|
        |1|.95|.85|.9|
        |Accuracy|||.98|
        
    - **Snap 190,176 S.R. 11**
        
        |   |   |   |   |
        |---|---|---|---|
        ||Precision|Recall|f1|
        |0|.99|1|.99|
        |1|.95|.85|.9|
        |Accuracy||.99||
        
    - **Snap 190,160 (2tdyn) S.R. 6**
        
        |   |   |   |   |
        |---|---|---|---|
        ||Precision|Recall|f1|
        |0|.95|.98|.96|
        |1|.96|.92|.94|
        |Accuracy|||.95|
        
    - **Snap 190,160 (2tdyn) S.R. 7**
    
    |   |   |   |   |
    |---|---|---|---|
    ||Precision|Recall|f1|
    |0|.96|.98|.97|
    |1|.95|.91|.93|
    |Accuracy|||.96|

## 2023-08-11
- Did a bunch of work on the visualization function
    - Now is able to create good plots for the 2d hist
    - Currently no longer doing the ratio of orbit to infall since those graphs didn’t really make much sense tbh…
    - Not sure if I should have the orbit from the ML and the actual on the same figure
        - Currently have it so each figure is the orbit and infall for ML and the orbit and infall for actual
    - Also now colorbars work and have the same range for actual and ML graphs
## 2023-08-03
- Create code to do all plotting easily and abstracted
    - Abstract what the data looks like
    - Abstract the function
- Change things to be plot sized rather than figure sized
## 2023-08-02
- Tried some more to get the 2dhist plots to be scaled better
    - Best I got right now is to get it so all the plots are scaled the same (orb and infall characteristics)
    - The color bar is now per row although it could be put in the middle between row 1 and 2 since they are the same colorbar
    - But still don’t have the scaling logarithmic or otherwise
        - Not too sure how to implement this since norm and doing manually didn’t work exactly as I expected
        - Will ask Calvin tomorrow how to approach this
- Converted over all the code to handle if there is only one snapshot inputted
    - Now can do both 1 and 2 and if needed can probably be relatively converted to 3+ with loops
    - However this seems to have broken the test halos as their accuracies are in the 30s when the validation set is in the 90s for both 1 and 2 snaps
    - There is a bug now where two snapshots doesn’t load everything correctly…
        - Not all the parameters are passed through
- Training models on only 1 snapshot
    - Now there seems to be a pretty substantial difference where the model relies a lot more evenly on the other parameters beyond scaled radii
    - They only have ~93 accuracy tho so a bit less than with two snapshots
## 2023-08-01
- Didn’t make too much progress today
- Played around a little more with using three models for the different rages of radii
    - But it didn’t really make that much of a difference
    - There was a small small difference in the feature importance graphs with the one trained on data around 0.8-2.5R200m but pretty negligible
    - In addition with the models averaged together the accuracy stays pretty much the same
- Also tried playing around a little with the 2dhists and trying to get all the colors to be the same across the graphs
    - But seems kinda hard with how matplotlib does this?
    - Not really sure if there is a simple way to accomplish what I want although it feels like there should be
    - The normalization and stuff like that wasn’t working like I expected it to
## 2023-07-27
- Now save the train and test indices so don’t have to copy paste them over… which is a nice quality of life improvement
- Graphed the accuracy at different radial bins.
    - Basically just find which particles in test halo(s) are in that bin use the model on them and then compare to the actual particles in that bin
    - Repeated this with the stacked halos and there does seem to be a noticeable decrease around 1-2 R200m so I’ll now start focusing on ways to improve that
- Stacked halos by mass in test set and regraphed 2dhists
    - Increased test set to 1500 halos (~20% of total number of halos)
    - Stacked these halos by mass bins like before by nu values
        - Only really had halos for 0.5 - 1.0, 1.0-1.5, and 1.5 - 2.0 so might have to specifically select some larger halos to be chosen for the test set
    - Overall this smoothed out the 2dhists and they look pretty solid?
    - One big issue is that the color bars aren’t the same for the ML predictions and the actual values
        - So this might be hiding some of the issues?
        - Or might be exacerbating them not sure…
        - But either way not exactly too sure how to fix this with how the code is currently set up
- Example plots below for nu 0.5-1.0
    - Text is all fucked up because I’m sshing to my computer and then downloading and scping it back here but on my actual computer it’s fine
## 2023-07-25
- Fixed a couple bugs in the particle finding
    - Was loading the particle information for snap 176 twice since I didn’t change the path
    - Also had to just delete all of the saved pickles since they were incorrect and causing the search to not find anything below 1 R200m for snap 190
- Made new graphs and updated how they look
    - Now everything fits and you can see it all
    - Changed how the colorbar is added
## 2023-07-24
- Calvin meeting
	- Find how many particles per halo
	- Choose halos with more particles
	- Smaller halos will have less accuracy
	    - Less time to measure an orbit/trajectory
	- See if this is a resolution or a low mass halo effect (when we move to a higher res sim)
	- Principle component analysis? Is same as feature importance?
	- Pick a range of radii around the edge of the halo
	    - What is the error around this area
	    - What is the error in each radial bin?
	- R200m definitions
	- Can I weight scores around a certain radial bin more?
	- Try to train just on a sample of particles on a boundary
	- Have astra node 05 from august 1-15
	    - Just ssh astra
	    - hpc-reserve
## 2023-07-21
- Change the code to now output from find_particle_properties_ML both the train and test dataset as hdf5 files
    - Have to change it so the indices chosen are saved as well as currently I just copy pasted them
    - But otherwise now it’s much simpler in the xgboost model file and the function for loading in the dataset
- Started graphing the test results for radius rad vel and tang vel
    - Spent a bunch of time getting the graph to look nicer and all on one
        - Settled on one graph for the orbiting particles one for the infalling and one for the ratio
    - Have a couple issues currently
        - Only looks like particles with larger radii are really coming through (around or bigger than R200m)
            - This is pretty odd and I’m not sure exactly what would be causing that I would think that there would be more particles with smaller radii
            - Will have to check throughout the files to see where this is going wrong
        - The graph of the ratio also is weird
            - I had to flip and then transpose the output from the 2d hists to match what the imshow plot was expecting
            - It also really highlights the prior issue where orbiting particles are pretty far out which seems wrong…
    - but overall the graphs look pretty neat which is cool
## 2023-07-20
- Plan to get test set to work
    - Set aside num_test_halo halo ids (and remove the corresponding particles from the training set)
        - Do this initially before the making of the test set
        - Create hdf5 files for each type of set
    - Get all of the PIDs in snapshot 190 for each of these halos
    - Calculate scaled_rad, rad_vel, tang_vel in respect to that halo in snap 190 and snap 176
- Got the two snaps to work and trained the model on this new dataset
    
    - Compared to 2023-07-13 the accuracy only went up by 0.01 but the precision and recall for orbiting particles went up by 0.02 and 0.05 and now are all at or above .9. Definitely some room for improvement which could be tested with different search radii.
    - In addition this is only on a validation set and the test set values look good for most of them but I want to redo how the test dataset is formed so I’ll see how this looks again tomorrow (hopefully)
    
    ```Plain
                 precision    recall  f1-score  support
         0.0       0.96      0.98      0.97     6439654
         1.0       0.94      0.90      0.92     2496405
    
    accuracy                            0.96     8936059
    macro avg       0.95      0.94      0.95     8936059
    weighted avg    0.96      0.96      0.96     8936059
    ```
    
## 2023-07-19
- Changed over code to work in method discussed in 2023-07-18
    - Having issues with accessing the right halos currently
        - What happens is that I want to access only halos that both existed at both snaps and at snap 190 were hosts and in the other snap just existed as some sort of halo
        - But I have to do this in such a way that the halo’s index is retained so I can use that later on as it’s id and for finding other things about it
        - This is an issue because I just want certain indices for most of the calculations/searches as if I preserve the indices I get a lot of 0s that then leads to issues in the mass → peak height conversion
        - Current thinking is just to preserve which indices where chosen in a separate array and then take the values i wanted and it should work
    - Now use a combination of halo index and PID through the use of a pairing function
        - [https://github.com/perrygeo/pairing](https://github.com/perrygeo/pairing)
        - [https://en.wikipedia.org/wiki/Pairing_function](https://en.wikipedia.org/wiki/Pairing_function)
        - Basically takes the halo index and PID as inputs and outputs a unique number
        - Not sure how efficient it will be but seems to be pretty much the only choice…
- Find snapshot 1 dynamical time ago
    - Pretty sure I did this in not the best way
    - I think SPARTA is supposed to have a list of snapshot’s redshift values but I just used pygadget reader in a loop for all the different snaps…
    - So basically it just takes a lot of memory to store all of the snapshot values so in the future it probably would be worth figuring out how to do this better
    - But it works and just finds which snapshot has the time closest to the dynamical time I calculated.
    - Got snapshot 176 which might be a bit early but still works i think…

## 2023-07-18
- Go 1/2 dynamical time back from snapshot 190 then convert to redshift then to get the snapshot
- Can just calculate snapshot 189 and 190 at the same time
- MAKE SURE I’M USING SEPARATE 189/190 SNAPSHOT FILTERS FOR SPARTA
- Make sure to correctly index halos by index not id for past halos
- Use halo index and PID together
- Check halos that didn’t exist before and don’t include them
    - Look at the status field in the past
        - If it didn’t exist ignore
        - If it was a subhalo do we want to use or not
- - Met with Benedikt and discussed an alternative to what I talked with Calvin about in 2023-07-17
    - I already have the halo information from my previous SPARTA run so I don’t have to deal with MORIA
    - I do have to change how I am going about my code
    - Pretty much will have to do the matching during the original search rather than doing each snapshot individually and then combining them later
- Started to implement this
    - Took a while to get an idea of what I actually wanted to do and have a general idea now just have to implement it
    - Current thought process
        
        - Will in a loop go through all the snapshots I’m looking for (trying to future proof in case I need more than 2 snapshots as much as possible)
        - The first snapshot (youngest age) will be kept separate as that is what all the others will be compared against
        - Go through all the halos present and meet criteria of existing past this time and being a host and collect all the particle and halo information (halo idx + PID, ptl pos, ptl vel, halo pos, halo vel)
        - Then loop through the other snapshots and construct a particle tree for that snapshot
        - Then find the halos present in that snapshot that are also present in the youngest snapshot as halos and search those get all particle and halo information (halo idx + PID, ptl pos, ptl vel, halo pos, halo vel)
        - Then can match with the combination halo idx and PID index
## 2023-07-17
- Create a new id stitch the particle id and the halo id associated with it together and then can associate the correct 6 parameters for
- What about if it wasn’t in the same halo across two snapshots
    - Could just have a large search radius
    - But odds are most particles won’t make it across that distance within a snapshot
    - Could find the PID part in the erebos snapshot and then calculate r vr and vt about the halo in the new snapshot for the particle when it was in the old snapshot
- Got it so halos are kept separate in a testing dataset to be used
    - However there are repetitions of particles and currently my training set is created by matching 189 to 190 so I’m only getting one particle so I’m losing information
    - In addition this is causing the problem with a lot of particles not having 6 parameters so I can’t input them into the model
- Talked with Calvin about this 2023-07-17 CM and we have a potential solution described there
    - However need to use MORIA and not sure what parameters to set for it so I’ll ask Benedikt tomorrow

## 2023-07-13
- Getting another snap into the training set
    - This took a while mainly because I kept making dumb mistakes and then waiting the 20minutes to redo the dataset instead of just doing a quick load and seeing if the problem was fixed
    - But basically PIDS weren’t being saved correctly because of issues with the number of bits I had assigned them due to memory constraints on my laptops
    - And also it wasn’t saving all of the data correctly to the hdf5 file which should be fixed now
    - Finally there is still some functionality broken with if a new file is being used. Right now it is just hard set to being new_file = True so you have to delete the old file. This is mainly because the arrays are different sizes due to different snaps
- ML results
    
    ```Plain
                  precision    recall  f1-score   support    
    		 0.0         0.96      0.98      0.97   3112535
         1.0         0.92      0.85      0.88    827504
    
    accuracy                             0.95    3940039
    macro avg        0.94      0.92      0.93   3940039
    weighted avg     0.95      0.95      0.95   3940039
    ```
    
    - Overall improved accuracy to .95 which is really great!
    - However a little worried that the recall for orbiting particles is only .85
        - Think this might be because I extended the search range to 6 R200m so might experiment with only 4 or 5 at least for now
    - Also currently don’t have the ability to make the plots because the information of which particles belong to which halo is lost in the creation of the dataset from multiple snaps
    - Current thinking is to in the beginning just cut out a few halos to use as a test dataset and then create the training set from the rest of them and create the graphs from the test halos
## 2023-07-12
- Don’t feed it the components of the the velocities
- For the 2dhist do percentage based on how many particles out of that bin are orbiting
- Plot both density profiles for average halo mass ML infalling profile divided by true infalling profile for a range of halos then comput the average the average of all of those profiles and the scatter and then take the 16th and 84th percentile
- Create 2D array radial bins with halos in each bin. For each bin take the mean and median and the 16th and 84 percentile and plot that as the bounds
- Or ML orbiting overall all actual orbiting graph
- Go out to 5-6 * R200m
    - Out there basically only infalling
    - Diemer 2022 and 2023
        - In first paper fig 6 no orbiting particles past ~4 R200m
        - But for some very small halos it can go much further
- Maybe allow halo mass as a label?
    - Use nu value p chi(?)
- Add another dynamical time values just as features
    - Experiment with different amounts of dynamical times
## 2023-07-10
- Calvin Meeting
	- Make my own cuts by eye as an additional comparison
	    - Make a cut a phase space (vr - r) to compare performance to
	    - Make some plots along those lines
	    - Look at papers from the edge-radius channel where they talk about that
	- Look into a lambda type value for XGBoost to say give it more “wiggle room”
	    - Different regularization parameters
	- Test with different inputs
	    - See which ones are the most important
	- Make a 2D histogram plot instead of scatter
	    - Radius bins and depending on how many particles are in each one assign a color
	    - A dynamics based density profile for dark halos I algorithms and basic results fig 3 Diemer
	- Looking at other papers who make cuts in phase space and comparing
	- Look at papers by Aung Han and Garcia Rafael and Eduardo rozo
	    - Aung et al 2021
	- Other parameters to look into? Accretion time?
- Saving data
    - Now save the magnitude of radial and tangential velocity to use for graphing
    - Also had something wrong where I’m pretty sure the mass bins weren’t all being saved to the hdf5 file but that is now fixed
- Plots
    - Made plots for radial vel vs radius, tangential vel vs radius, radial vel vs tangential vel
    - Will talk to calvin to actually analyze them
    - Also have graphs for the denisty profiles working now pretty sure the issue was what I fixed in saving data
## 2023-07-07
- Got the orbit/infall profiles to match!!!
    - So what I thought was wrong was indeed incorrect and Diemer told me how to fix it
    - Basically I was classifying particles which had orbited before snapshot 190 but then again after 190 as infalling because their last_snap was after 190
    - Changed res_oct_max_norbit in sparta config file to be 1 and problem was fixed
- New saving method
    - Added a new method to save the data to the hdf5 file
    - Now it is standardized and I can easily just expand or remove what I want saved
    - Wasn’t able to actually loop it which would be the ideal space saver
        - Just can’t think of a way to correctly assign the data to the right group without extra work and potentially slowing things down
- XGBoost new results
    - Got .87 accuracy which is awesome
    - Probably not good enough unless I can adjust some parameters and somehow push it to ~.99 since I think that’s what Diemer wants
    - But is a really good sign and shows that ML definitely has potential
    - Have to make some actual graphs though to visualize the predictions and see if there are any specific issues
- Changed how data is loaded in
    - So now you choose how many halos you don’t want to include to use later as the test halos
    - This will make it actually possible to create density profiles for the halos and in general see how the model does
    - Currently the method just takes in all the halo indices (chosen at random) except for those reserved and then loads all the data for each of those halos
    - This is then split into a training and validation set
- Next have to actually reproduce the density profiles for the test halos
## 2023-07-06
- Try sparta.load and see if that changes what I get
- Spent more time on profiles
    - Used sparta.load to find the tracers within the halo rather than using halo_n and halo_first 2023-07-06 GM
    - This improved the profiles (particularly for smaller ones) but for the larger halos there was still a pretty large discrepancy there
- Have a theory that I because I am filtering out all halos that have a pericenter after 190 that I might be getting rid of particles that were orbiting before 190 as well but then another afterwards
    - Will see what Diemer says and if this fits it
## 2023-07-03
- Checked that the tracers I am finding per halo matched sparta.load
    - Also figured out how to install sparat
    - Have to do

```Bash
$python3 setup.py build
$python3 setup.py install
```

- Got the orbit/infall profiles to match correctly
    - Basically follows the logic
        - If the pid is present in the tracer ids for this halo and if num_pericenter > 0 or n_is_lower_limit == 1 then it is orbiting
        - If the pid is present in the tracer ids for this halo but num_pericenter == 0 and n_is_lower_limit == 0 then it is infalling
        - If the pid is not present in the tracer ids for this halo then it is infalling
    - Implemented this by just using the tracer_id and orbit/infall assn array and then in the search:
        
        ```Python
        poss_pids = np.intersect1d(current_particles_pid, curr_tracer_ids, return_indices = True) # only check pids that are within the tracers for this halo (otherwise infall)           
        poss_pid_match = np.intersect1d(current_particles_pid[poss_pids[1]], orbit_assn_tracers[:,0], return_indices = True) # get the corresponding indices for the pids and their infall/orbit assn
        current_orbit_assn[poss_pids[1],1] = orbit_assn_tracers[poss_pid_match[2],1] # match the assignment of the tracers to the tracking array
        # create a mask to then set any particle that is not identified as orbiting to be infalling
        mask = np.ones(current_particles_pid.size, dtype = bool)
        mask[poss_pids[1]] = False
        current_orbit_assn[mask] = 0 # set every pid that didn't have a match to infalling
        ```
        
        - Basically just finding with pids belong to this halo specifically and then if they are orbiting
        - Any other pids are then treated as infalling
- Now the calculation of particles properties takes a very long time… I believe because of all the intersect1ds per halo
    - Don’t think I’ll put much work into speeding it up currently as I should now be done with using this program (hopefully for real this time) until I have to use different sparta files and/or different snapshots
## 2023-06-30
- Implemented what was talked about with Calvin in 2023-06-29
    
    ```Python
    repeat_pids_ind = np.intersect1d(current_orbit_assn[:,0], repeated_tracer_ids, return_indices = True)[1] # find indices of pids that are not unique
    curr_repeated_pids = current_orbit_assn[repeat_pids_ind,0] # which pids correspond to tracers that are repeated
    correct_pids_ind = np.intersect1d(curr_repeated_pids, curr_tracer_ids, return_indices = True)[1] # find which tracers belong to this halo that are repeated
    incorrect_pids = np.delete(curr_repeated_pids, correct_pids_ind) # remove the pids that have corresponding tracers in this halo
    current_orbit_assn[np.intersect1d(incorrect_pids, current_orbit_assn[:,0], return_indices = True)[2],1] = 0 # at the indices where the incorrect pids are set those particles as infalling
    ```
    
    - Took a bit to actually get working
        - Was using the wrong halo_first and halo_n
            - Was supposed to use from \[tcr_ptl]\[res_oct] not from the density profiles which makes sense
        - But now works with noticeable improvement over the original code
    - However there still are noticeable differences in the actual orbiting profile and the profile I calculate
        - This could be from tracers that are classified as orbiting in both halos which won’t be treated correctly in this version of the code
        - Will see what Diemer says I should do since it seems to me like this should be as accurate as possible since probably a lot of info about whether a particle is orbiting or infalling is contained in these particles
## 2023-06-29
- Calvin Meeting
	- Issue with the plots is that after ~R200m if halos are close I could be counting the particles that are orbiting another halo
	    - Use sho_oct_first and sho_oct_n
	    - Steps
	        - Do the search as normal
	        - Find any pids that come up >1 in tracer ids
	        - For each halo find the tracers given by halo_first and halo_n
	        - For each tracer id that comes up twice if it is within the halo_first and halo_n then use that tracer
	    - For orbiting particles outside of R200m
	        - See if they come up in other halos (tracer id comes up twice)
	        - If it is orbiting in one halo but not the other then assign it to the one where it is orbiting and not to the one it isn’t
	        - If it is orbiting both halos (and there still is a large discrepancy) use r in trajectory results then can find the tangent phi (change in angle) between two snapshots (when first tracked as tracer and then when it gets its first pericenter) and if the change in angle is less than pi/4 then it is not orbiting that halo
	- Also my search radius has been massive because of what I was doing with the avg rad vel plots but I can decrease that since that is probably going to really through off my ML
	    - 3 R200m might be a good choice since that’s what the density profiles from SPARTA go out to
- - Set up a Random Forest model
    - Was pretty easy to get running although was pretty slow until using multiprocessing
    - But now trains on one portion of the dataset in ~3min
    - Almost identical results to XGBoost
    - Not sure if I can use all the data though think it faces the same issues as XGBoost
    - So overall not really sure it’s too worthwhile pursuing this in addition to XGBoost
    - But will look into it because parameter tuning might be different/easier
- Implemented RandomUnderSampling as an option
    - This decreased scores by about .1
    - Will also try oversampling
    - Currently the split between infall/orbit is ~ 40/60 so it isn’t the worst split but potentially worth looking into
    - A little worried that doing this will cause incorrect conclusions later on as it might not be as physically accurate
- Met with Calvin 2023-06-29 
    - Think we figured out what was going on with the discrepancy in the profiles
    - In that note I listed out what we decided would fix it
    - Tried implementing it but it doesn’t work… so have to do some debugging
## 2023-06-28
- Graphing density profiles of orbit/infall
    - Spent a bunch of time on this
    - Struggling to get them to match perfectly
    - Fixed another bug where I was removing all the orbiting particles pericenters that had happened _before_ 190 rather than after
    - However the plots still don’t perfectly match up particularly startin around ~R200m
        - But not for all halos
        - And not all halos diverge in the same way
        - I imagine there is still another small bug in my code but I’m not sure what
        - I’ll bring it up with Calvin tomorrow and see if we can just go through it step by step
## 2023-06-27
- Manually check if the pericenter happened in the past
    - Any pericenter up to the current snapshot (190)
- Machine learning
    - How to actually interpret it?
    - See what “cuts” it sees
    - Try unsupervised?
    - Use plots afterwards to do the interpretation
    - Symbolic regression
- Main plot to make
    - Density profiles: 1halo and all part
- Graphing density profiles of orbiting/infalling particles
    - Having a lot of trouble with getting this to work
    - Fixed one issue in my code where I was sorting the radii but then not sorting the orbit/infall labels but still the plots don’t match
    - Went through my code a bunch but just couldn’t figure out what was going on
- Meeting with Benedikt 2023-06-27 GM
    - Talked about the density profiles and he said to try and figure out what is wrong with my code first because the other way of debugging is very annoying
    - Also talked about machine learning plans
        - Will probably try a whole bunch of methods and just see what works best
        - Currently thinking of
            - RF/XGBoost just to see if one snapshot is enough
                - Not sure if it will be very feasible to continue to expand this to x snapshots
                - But worth trying on 1-2
            - RNNs mainly for more than 1 snapshot to try and really capture the temporal component
            - Unsupervised learning to just see how it groups particles and seeing if anything useful can be gained there
        - The end goals
            - Graphing the profiles of what the model predicts
            - Creating a simple function (symbolic regression?) to model the split between orbit and infall
## 2023-06-26
- What exactly is virial radius/virialization that sort of thing
- What is $r_h$?
    - Halo radius?
- What exactly is turn around radius
- Density graph all
    - Showed this graph to Diemer and he said it looks good
- Density graph 1halo
    - Having trouble with this figure as the infall and orbit don’t seem right
    - The infalling from my code match perfectly with the orbit from SPARTA until a radii and then there start to be orbiting particles
    - None of that makes any sense
    - Benedikt said to compare the snapshot where you’re creating the profiles with the snapshot when pericenter occurred, which you can find in the OCT results: [https://bdiemer.bitbucket.io/sparta/run_rs_oct.html](https://bdiemer.bitbucket.io/sparta/run_rs_oct.html)
    - So I have to figure out exactly what that means and then implement
## 2023-06-23
- Work from NY fun
    - Couldn’t ssh to the computer in maryland
        - Not sure why this happened? maybe it just shut off even though it shouldn’t have
        - But not sure why it would not connect otherwise
    - So got my old laptop setup since it has a graphics card and an i9 at least
        - But it only has 16gb of RAM which is a big issue
        - Was able to actually get the find particle properties file to run with a little adjustment (and no chrome running)
        - Also loading data for the xgboost file takes about twice as long…
        - And right now it doesn’t recognize the gpu so it doesn’t even run so I’ll have to figure that out
- Fixed up the density profiles for all particles and now they match perfectly which is a very good sign
- Emailed Barkeshli about using an RNN to deal with the time components when working with multiple snapshots
    - Ideally I would still use decision trees somehow because I think they would be a lot more interpretable which would be useful for the actual science and creating an easy to understand definition
    - But unless I want to feed an absolute shit ton of data to my tree model from a lot of sources might not be possible
    - Hopefully he responds but regardless I’ll have to do more work on figuring out how to construct that sort of ML model
## 2023-06-20
- Debug halo in SPARTA prf_debut_halo prf_debug_bin src/analyses
- Change scale to log
- Check units of mass
    - Is actually in M_sun/h not M_sun alone
- Consider density profiles
    - (bin - last bin)/bin volume
- Can see plots with X11 forwarding?
    - How to set that up
    - Vs just download
- Got Notion mostly set up for MLOI project
    - Has Zotero integration
    - Prior logbooks are copied in (need to still copy in the other notes)
    - Overall seems really nice and much better than OneNote for organization
- Read Zaratan docs
    - I have to get a better idea of what exactly I need for running ML training
    - Not sure how to quantify it? Something to look into might ask Diemer for help with that
- Graphed the density profiles
    - They seem to follow the same shape as the actual profiles
    - But they are always beneath which makes some sense based off what Calvin told me
        - If I’m only considering particles as points they are either in or out
        - While in the simulation they can be somewhat in (their mass is a distribution) and so it makes sense to me (not 100% sure) that there would then be more mass counted
- Group Meeting: 2023-06-20 GM
## 2023-06-19
- Calvin Meeting
	- Mass profiles
	    - Look up:
	        - Finite volume cell technique
	        - Bolshoi cosmological simulation
	        - Adaptive refinement tree - a new high-resolution N-body code for cosmological simulations
	        - AREPO
	    - Compare all bins
	    - Make a plot of the profiles
	- Take 1 halo make 2d profile plot orbit and infalling particles
	- Make plot like fig 3 in A Better Halo Definition
		- 2D histogram of halos in mass range
		- Plotting the frequency of particles in each of the bins
- Figured out how to remote access my desktop when I’m at home
    - Downloaded linux and now I’ll just leave the computer running and I can ssh with my laptop in and run programs on it
    - Gives me an additional option beyond just running on a laptop at home or Zaratan
    - Remote access desktop: ssh zvladimi@10.204.15.115
- Coded comparing the density profiles from SPARTA with what I calculate
    - They don’t perfectly match which is what Diemer said they should…
    - Talked to Calvin about this: and got some ideas of where to progress and what is causing this issue
    - Will do some reading from the papers he talked about to better understand the simulation even if it isn’t 100% necessary
    - Will also actually graph these profiles instead of just printing them since they won’t be a perfect match
- Figured out how to get aterpconnect account and now will have access to Zaratan
    - Have to read the wiki: [https://www.astro.umd.edu/twiki/bin/view/AstroUMD/ITComputingCluster](https://www.astro.umd.edu/twiki/bin/view/AstroUMD/ITComputingCluster)
## 2023-06-15
**Goals**

**Get SPARTA to output halo pos and vel**

**Get orbit or infall matched to particles**

**Pickle outputs from tree search** 

**Test out XGBoost**

**Notes**

- Reran SPARTA and fixed the output by setting the output ghosts to 0
    - Also did the run for all snapshots just to have it all
- Wrote some code to match the orbiting/infalling of tracers to the pids
    - First find if a tracer is orbit/infall depending on n_pericenter and n_is_lower_limit
    - Then match tracer ids to pids
    - Then set pids to their corresponding tracer's categorization
    - Any pids not matched are left as infall
- Decided not to pickle outputs from tree search
    - Might've been useful earlier but now (hopefully) this won't go through to many iterations that I'll have to run it a lot
    - Also not sure how to effectively implement it so there aren't a million pickle files and everything is referenced correctly
- Tested out XGBoost and got some preliminary results!
    
    |   |   |   |   |   |
    |---|---|---|---|---|
    ||Precision|Recall|F1-score|support|
    |0|0.60|0.14|0.23|6903648|
    |1|0.63|0.94|0.75|10797468|
    |accuracy|||0.63|17701116|
    |Macro avg|0.61|0.54|0.49|17701116|
    |Weighted avg|0.62|0.63|0.55|17701116|
    
    - Had some issues getting the tree to run iteratively so this is just on 1/4 of the dataset
    - Overall accuracy isn't bad? Especially for just a super dry nothing tuned run
        - Very interested in the 0.14 for Recall for 0 will look into what can be done to improve that
## 2023-06-14
To run SPARTA: mpirun -np 8 /n/nyx1/common/tmp/zvladimi/sparta_dev/build/sparta /n/nyx1/common/tmp/zvladimi/sparta_dev/config/sparta_complete.cfg

- Worked on code and added some stuff for loading data
    - No longer have load_save_data.py
    - All code for generating the training set is now in one file
    - Currently data is taken from SPARTA .hdf5 file and stored in pickle files
        - If the pickle files for the currently used SPARTA files exist they are used
        - Otherwise a new directory is created to store those pickles
    - **Future Work**: have it so data from the tree search can be pickled to speed up processing
- SPARTA
    - Tried to run SPARTA again because I needed the halo positions and velocities
    - But now when I try to do make I get a bunch of error that look like this:

error**:** operator '||' has no right operand

LES_1HALO**) || (**DO_ANALYSIS_HALOPROPS **&& (**DO_ANALYSIS_HALOPROPS_RM **||** OUTPUT_ANALYSIS_HALOPROPS_ORBITING**)) ||** DO_GHOSTS

- Diemer said it was because I had two options for it (which was true) but I changed it and the error persists…
- Might have to just reinstall it?? Which would suck since I have to redo all the configs and stuff