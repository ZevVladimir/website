# Server access
Nyx
- ssh zvladimi@terra.astro.umd.edu
- ssh nyx
Zaratan
- ssh zvladimi@login.zaratan.umd.edu
# Moving Data to Zaratan
- The data, rockstar halo catalogues and snapshot data is stored on nyx and we need to bring it over to Zaratan for use by SPARTA and ATHENA
- [globus](https://www.globus.org/) is the best way to do this
	- Use `@umd.edu` email
	- Then sync/transfer files from nyx to zaratan
	- Rockstar catalogues stored on nyx at `/nbody/data/rockstar_cats_200m_bnd/` then under the simulation name
	- Snapshot data stored on nyx at `/nbody/data/snaps/` then under the simulation name
		- When running ATHENA recommend only using the snapshots you need or a couple around the rough redshift to save space 
			- For the paper
				- The cbol sims only need snapshots 99 and 89 (0.75 tdyn)
				- The cpla sims use
		- When running SPARTA need all the snapshots
	- Store information on the shared drive in zaratan `/scratch/zt1/project/diemer-prj/shared/`
# SPARTA Dataset Creation
- We use SPARTA to determine if particles are orbiting (by counting pericenters). We also use the outputted dataset to easily access halo information and particle information (positions, velocities, R200m etc.) all in one place
## Installing SPARTA
 - SPARTA is available on [bitbucket](https://bitbucket.org/bdiemer/sparta/src/master/)
- To setup follow the steps in Bendikt's [documentation](https://bdiemer.bitbucket.io/sparta/run.html)
## Running SPARTA
- For the simulations used in the paper we edit the following files for each simulation 
	- sparta/build/sparta.h file
		- Update the following to match the number of snapshots should be 101 for all used in the paper
			- \#define ANALYSIS_RSP_MAX_SNAPS 101
			- \#define ANALYSIS_RSP_MAX_SNAPS 101
			- \#define MAX_SNAPS 101
		- Otherwise follow what is turned on/off in the example file
	- sparta/config/sparta_complete.cfg
		- cat_path: update to where the rockstar halo catalogues are stored
			- Since I stored them in the same place can just update the numbers
			- Ex: `/scratch/zt1/project/diemer-prj/shared/rockstar_cats_200m_bnd/cbol_l1000_n1024/`
		- snap_path: update to where the simulation snapshots are stored
			- Since I stored them in the same place can just update the numbers 
			- **Note** the `%03` might need to be updated (for the paper it is either `%03` or `%04`) check the data
			- Ex: `/scratch/zt1/project/diemer-prj/shared/snaps/cbol_l1000_n1024/snapdir_<snap:%03d>/snapshot_<snap:%03d>.<chunk:%d>`
		- sim_force_res
			- The force resolution of the simulation
			- For all simulations used in paper they can be found in Table 2. of THE SPLASHBACK RADIUS OF HALOS FROM PARTICLE DYNAMICS: III. HALO CATALOGS, MERGER TREES, AND HOST–SUBHALO RELATIONS
		- output_path 
			- Where you want the outputted SPARTA information to go, make sure to update the file path to match the simulation being run
			- Ex: `/home/zvladimi/scratch/SPARTA/sparta_output/cbol_l1000_n1024/`
		- output_file 
			- The hdf5 file all the information is saved to again make sure to update it to correctly reflect the run
			- Ex: `cbol_l1000_n1024_4r200m_200v200m.hdf5`
		- Otherwise follow what is turned on/off in the example file
- Then run `sbatch submit_sparta.sh`
# Running ATHENA
- ATHENA runs using SPARTA's output and the simulation output 
- To install use the [github](https://github.com/ZevVladimir/ATHENA)
- Information on how ATHENA works is all included there
- I use submission scripts to speed up the process that loop through and create config files for all simulations and run them all at once

# Overview

# ATHENA: **pArticle classificaTion with macHine lEarning N-body simulAtions**

## XGBoost Results Layout (out of date)

- <SPARTA_file_train_on>_<snapshots>_<search_radius>
    - <model_name>_<frac_training_data>_<GPU/CPU>
        - plots
            - Generic plots to the model
        - <dataset_type>_<SPARTA_file_test_on>
            - plots
                - Plots specific to the model testing on this dataset
        - <model_name>_<SPARTA_file_train_on>_<frac_training_data>_<GPU/CPU>
        - model_info.pickle

**Information Format of model_info.pickle file (out of date)**

- Misc Info:
    - Dataset trained on:
    - Snapshots used:
    - Search Radius:
- Training Info:
    - Frac of training data used:
    - Trained on GPU:
    - HPO used:
    - Training params:
        - All parameters for the XGBoost model
- Results
    - Dataset tested on:
        - Primary Snap:
            - Total Number of Particles:
            - Num Incorrect Infalling Particles:
            - Num Incorrect Orbiting Particles:
        - Secondary Snap:
            - Total Number of Particles:
            - Num Incorrect Infalling Particles:
            - Num Incorrect Orbiting Particles:

## Classification Report Meaning:

[https://muthu.co/understanding-the-classification-report-in-sklearn/](https://muthu.co/understanding-the-classification-report-in-sklearn/)

**Precision:** Precision is the ability of a classifier not to label an instance positive that is actually negative. FoNum Incorrect All Particlesr each class it is defined as the ratio of true positives to the sum of true and false positives.

**Recall:** Ability of model to find all the correct instances. The ratio of true positives to the sum of true positives and false negatives

**F1 Score:** Percent of positive predictions were correct. F1 = 2*(Recall * Precision) / (Recall + Precision)

  

### **Useful Commands**

**Ssh to my UMD desktop:** ssh zvladimi@10.204.15.115

**Ssh to terra/nyx:** ssh zvladimi@terra.astro.umd.edu

**Ssh to Zaratan:** ssh zvladimi@login.zaratan.umd.edu

**Copying files from remote to local:** scp (-r if whole directory) <username@server>:/path/to/file /path/to/where/file/go (_use rsync command now_: _)_

```JavaScript
alias mvres='rsync -avP zvladimi@login.zaratan.umd.edu:/home/zvladimi/scratch/MLOIS/xgboost_results/* ~/MLOIS/xgboost_results/'
```

**Globus personal:** ~/globusconnectpersonal-3.2.2/globusconnectpersonal

**Queue after other job:** `sbatch -d afterok:<first_job_ID> <next_job_script.sh>`

### Zaratan setup

- [[ATHENA venv setup]]

### Sparta commands (for nyx)

1. $ cdtome
2. $ cd sparta_dev
3. In /build edit Makefile to have path sparta_dev, platform := umdastro,
4. Edit sparta.h to have parameters you want
5. In /config edit sparta_complete.cfg
    1. cat_path /n/nyx1/common/nbody/data/rockstar_cats_200m_bnd/cbol_l0063_n0256
    2. snap_path /n/nyx1/common/nbody/data/snaps/cbol_l0063_n0256/snapdir_snap:d/snapshot_snap:d.chunk:%d
    3. Set output to correct path
    4. Change parameters as needed
6. cd to /build
7. $ make
8. mpirun -np 8 /n/nyx1/common/tmp/zvladimi/sparta_dev/build/sparta /n/nyx1/common/tmp/zvladimi/sparta_dev/config/sparta_complete.cfg
9. Leave nyx
10. scp zvladimi@terra.astro.umd.edu:/n/nyx1/common/tmp/zvladimi/sparta_output/<name of output file>.hdf5 /home/zvladimi/MLOIS/SPARTA_data/

  