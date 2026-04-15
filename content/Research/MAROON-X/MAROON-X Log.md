---
tags: log
---
## 2026-04-15
### Data Reduction
#### 202603 reduction
- Failed because there weren't darks created for 1660s exposure so recreating the 20260304 darks and then will manually do the science flux extraction before continuing
- Think these 1660 files must have been some of the ones that were not originally moved over
#### 2024 GJ725A Reduction
- Created [these slides](https://docs.google.com/presentation/d/11monlV4H-20PJaLF8F2tId8XmjAG-CoaPYs7YHxh1JA/edit?usp=sharing) to track the results from the SERVAL runs
	- All files
	- Before June 11
	- After June 11
	- All files with orders 0-5 removed
- Overall don't really see any change
## 2026-04-14
### Data Reduction
#### 202603 reduction
- Got stopped because ran out of swap space think there were too many processes running and some never got fully killed
- So will restart
#### 2024 GJ725A Reduction
- SERVAL 
	- Same results
	- Will try running with a split before and after Jun 11
	- Also will try running where the orders have -100 -> -150 DLW values
- Have to reduce the etalon for 20240623 since they're not there...
	- Redid the red frames too... and then re-re-reduced it after deleting the files to avoid double extraction
- Weird barycnetric results
```
File: /data10/MaroonX_spectra_reduced/20240225/20240225T154818Z_SOOOE_r_0300.hdf
2026-04-14 13:15:30,442 photoncounter INFO     Target: GJ 725 A
2026-04-14 13:15:30,442 photoncounter INFO     Exptime: 300.0 sec
2026-04-14 13:15:30,443 photoncounter INFO     BERV dv/dt             : -0.0109, -0.0110, -0.0108 m/s/s
2026-04-14 13:15:30,508 photoncounter INFO     UTC_START:               2024-02-25T15:48:18.000
2026-04-14 13:15:30,508 photoncounter INFO     UTC_CORRECTION:          0.0
2026-04-14 13:15:30,508 photoncounter INFO     UTC_MIDPOINT:            2024-02-25T15:50:48.000
2026-04-14 13:15:30,508 photoncounter INFO     UTC_FLUXWEIGHTED_PC:     2024-02-25T15:50:48.000
2026-04-14 13:15:30,508 photoncounter INFO     UTC_FLUXWEIGHTED_FRD:    2024-02-25T15:50:48.000
2026-04-14 13:15:30,509 photoncounter INFO     JD_UTC_START:            2460366.1585417
2026-04-14 13:15:30,509 photoncounter INFO     JD_UTC_MIDPOINT:         2460366.1602778
2026-04-14 13:15:30,509 photoncounter INFO     JD_UTC_FLUXWEIGHTED_PC:  2460366.1602778
2026-04-14 13:15:30,509 photoncounter INFO     JD_UTC_FLUXWEIGHTED_FRD: 2460366.1602778
2026-04-14 13:15:30,509 photoncounter INFO     BERV_SIMBAD_TARGET:      GJ 725 A
2026-04-14 13:15:30,509 photoncounter INFO     BERV_TELESCOPE_TARGET:   Struve 2398 A
2026-04-14 13:15:30,509 photoncounter INFO     BERV_MIDPOINT:           2056.77 m/s
2026-04-14 13:15:30,510 photoncounter INFO     BERV_FLUXWEIGHTED_PC:    2056.77 m/s
2026-04-14 13:15:30,510 photoncounter INFO     BERV_FLUXWEIGHTED_FRD:   2056.77 m/s
2026-04-14 13:15:30,510 photoncounter INFO     BERV_DIFFERENCE_PC:      0.00 m/s
2026-04-14 13:15:30,510 photoncounter INFO     BERV_DIFFERENCE_FRD:     0.00 m/s
2026-04-14 13:15:30,510 photoncounter INFO     BERV_DVDT:               -0.0109 m/s/s
2026-04-14 13:15:30,510 photoncounter INFO     COUNTS_PC_MIN:           nan
2026-04-14 13:15:30,510 photoncounter INFO     COUNTS_PC_MAX            nan
2026-04-14 13:15:30,511 photoncounter INFO     COUNTS_PC_MEDIAN:        nan
2026-04-14 13:15:30,511 photoncounter INFO     COUNTS_PC_STD:           nan
2026-04-14 13:15:30,511 photoncounter INFO     COUNTS_PC_ZP:            15.90
2026-04-14 13:15:30,511 photoncounter INFO     COUNTS_FRD_MIN:          nan
2026-04-14 13:15:30,511 photoncounter INFO     COUNTS_FRD_MAX           nan
2026-04-14 13:15:30,511 photoncounter INFO     COUNTS_FRD_MEDIAN:       nan
2026-04-14 13:15:30,511 photoncounter INFO     COUNTS_FRD_STD:          nan
2026-04-14 13:15:30,511 photoncounter INFO     COUNTS_FRD_ZP:           2.00
2026-04-14 13:15:30,512 photoncounter INFO     SCALEFACTOR:             nan
2026-04-14 13:15:30,512 photoncounter WARNING  Less than two valid datapoints found for PC channel.
2026-04-14 13:15:30,512 photoncounter WARNING  Less than two valid datapoints found for FRD channel.
```
	```
## 2026-04-13
### Data Reduction
#### 202603 reduction
- Missing all the backgroundfit.pdf plots for 20260306 SOOOE b 0900 frames. Which is from the science flux extraction which is a bit concerning
	- Will rerun the data reduction pipeline for that data  
	- After re-reduction those files were there. Just had to remove the two quarantined files as well
	- [ ] #TODO Re-run serval on TOI-519  [due:: 2026-04-16]
- Decided I'm just going to re-run the reduction all together now that all the data is on the server and I can remove the two bad files
#### SERVAL
- GN-2026A-Q-133
	- TOI-6894
		- Not enough SNR in the blue to run
		- Red arm reran with 0 1 2 3 4 5 9 12 19 excluded
	- TOI-519
		- On re-run with re-reduced 20260306 data the first run of serval red arm just failed
		- Had to run with orders  0 1 2 5 13 19 excluded
## 2026-04-10
### Data Reduction
- [x] #TODO Update data reduction log to also include what flats are used for the pixel shift #MAROON-X  [due:: 2026-04-13]
	- Follow [This spreadsheet](https://docs.google.com/spreadsheets/d/1MBEgy0Q0voezbmeNCMexHlNWBrT7iEIAEC1yTJlSISw/edit?gid=0#gid=0) for which flats to use
	- Don't delete the old flats present since they might have still been used
- [x] #TODO Reduce TOI-6894 for GN-2026A-Q-133  [due:: 2026-04-13]
- [x] #TODO Look at there being too many plots opened by flux extraction. Could be reason for too much memory consumption  [due:: 2026-04-15]
#### 202603 Data Reduction
- The combine to fiber 6 issue was just that I had not run the transfer solution for the blue files for 20260308
	- After doing so it ran no problem
#### 2024 GJ725 Re-reduction
- [x] #TODO Rezip spectra after re-reducing  [due:: 2026-04-16]
- Starting with 20240803, with exposure times of 300 and 600
- For reducing 2024 data
	- Use [This Spreadsheet](https://docs.google.com/spreadsheets/d/1YuhTDMbF1gQB8QKvpAEPg3U1ySrJ9F92XOFcNqPg3PY/edit?gid=1210334380#gid=1210334380) for overview of subpixel shifts and examples
	- Under example use and then 2. Scaling with integer shift
	- Make sure to adjust the flats and darks according to [this spreadsheet](https://docs.google.com/spreadsheets/d/1MBEgy0Q0voezbmeNCMexHlNWBrT7iEIAEC1yTJlSISw/edit?gid=0#gid=0) not what is in thee data reduction log
		- Make sure to adjust the dark exposure time as well to match
	- Adjust the exposure time and dates
	- Created with Tanya [This spreadsheet](https://docs.google.com/spreadsheets/d/1FiTxcxbTuheMevO26GNMwj22na984MG3y0iMRPtnz9E/edit?gid=0#gid=0) for the frames that have to be re-reduced
	- For reds should just be 'x_shift' and blues both 'x_shift' and 'y_shift'
	- First removed the already reduced data for the exposure time and date since I'm pretty sure things can be messed up if flux is extracted twice
	- Also had to unzip the spectra before running `gunzip 20240225/*SOOOE*0300*fits.gz`
		```bash
	PYTHONPATH=${PWD} python reduce/batch_extraction_scale.py -c 'r' -fr '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202404xx/flats/20240401T00_masterflat_backgroundsubtracted_FFFFF_r_0002.hdf' -dd '/data10/MaroonX_spectra/' -od '/data10/MaroonX_spectra_reduced/' -e '0300' -t SOOOE -d '20240225' -dkf '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202311xx/darks/202311xx_masterdark_mean_DDDDE_r_0300.fits' -sd 5 -scale -sh '(-1.0,0.0)' -sl 5 ; curl -H "Priority: 4" -d "r Science flux extraction finished" https://ntfy.sh/MAROON-X
		```
	```bash
	PYTHONPATH=${PWD} python reduce/batch_extraction_scale.py -c 'b' -fb '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202404xx/flats/20240401T00_masterflat_backgroundsubtracted_FFFFF_b_0008.hdf' -dd '/data10/MaroonX_spectra/' -od '/data10/MaroonX_spectra_reduced/' -e '0300' -t SOOOE -d '20240225' -dkf '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202311xx/darks/202311xx_masterdark_mean_DDDDE_b_0300.fits' -sd 5 -scale -sh '(-1.0,-2.0)' -sl 5; curl -H "Priority: 4" -d "b Science flux extraction finished" https://ntfy.sh/MAROON-X
	```
### Andreas meeting
- Missing data from March/April
	- March had 20260308 and 20260319 just missing
	-  April was missing some files (at least 20260401)
- Weird behavior with RVs in GJ725A
	- Will try to reduce but any insight?
- Working through SERVAL implementation with DRAGONS
- Two files that failed on wavelength solution transfer
	- 20260306T103143Z_SOOOE_b_0900.hdf
	- 20260306T101501Z_SOOOE_b_0900.hdf
	```
	"""
Traceback (most recent call last):
  File "/home/maroonx/anaconda3/lib/python3.7/multiprocessing/pool.py", line 121, in worker
    result = (True, func(*args, **kwds))
  File "/home/maroonx/anaconda3/lib/python3.7/multiprocessing/pool.py", line 44, in mapstar
    return list(map(*args))
  File "/home/maroonx/anaconda3/lib/python3.7/site-packages/parmap/parmap.py", line 105, in _func_star_single
    **func_item_args[3])
  File "analyze/recipes/batch_science_spline_wls_dynamic.py", line 53, in work
    fit_and_apply_etalon_wls(param_file, etalon_file, file,p=p,symmetric_linefits=symmetric_linefits)
  File "/home/maroonx/Repos/maroonx_reduce/analyze/recipes/etalon_spline_wls_dynamic.py", line 262, in fit_and_apply_etalon_wls
    shift = x.loc[:] - x_ref.loc[:].reindex(x.loc[:].index, method="nearest", tolerance=0.5)
AttributeError: 'numpy.float64' object has no attribute 'loc'
"""
The above exception was the direct cause of the following exception:
Traceback (most recent call last):
  File "analyze/recipes/batch_science_spline_wls_dynamic.py", line 128, in <module>
    pm_pbar=True)
  File "/home/maroonx/anaconda3/lib/python3.7/site-packages/parmap/parmap.py", line 304, in map
    return _map_or_starmap(function, iterable, args, kwargs, "map")
  File "/home/maroonx/anaconda3/lib/python3.7/site-packages/parmap/parmap.py", line 282, in _map_or_starmap
    output = result.get()
  File "/home/maroonx/anaconda3/lib/python3.7/multiprocessing/pool.py", line 657, in get
    raise self._value
AttributeError: 'numpy.float64' object has no attribute 'loc'
	```
## 2026-04-09
### Data Reduction
#### 202603 Data Reduction
- Have to reduce SOOOE from 20260308 and then two from 20260306
	- Just removed 20260306 and full reducing it
- Have to reduce DEEEE from 20260319 and 20260306 (accidentally flux extracted again 20260308 so will be re-reducing again)
- Combine to fiber 6 for 20260308 failed because wavelength solution not found??
	- [x] #TODO Figure out why 20260308 combine to fiber 6 failed  [due:: 2026-04-14]
- Finished 20260306 though and the DEEEE frames
### SERVAL
#### DRAGONS integration with SERVAL
- There seems to be a difference in the header organization between the fits and the hdf file
	- In the fits there is a division between the main header and then the headers for each observation
	- What I'll do is just combine the main header with the observation header first and then I think it'll all work and I don't think the extra information should be an issue?
	- Now combine both headers with priority given to the observation one for overlapping parameters
- For the timetag before was just taking a slice of the file name which was not robust so I am just going to take it from the keys in the file
- For the ordering of the orders might have to check this not sure if implementation is correct
	- It was in fact not correct and had to read in the orders from the fits file and match it to the order of the orders expected by serval
- ASK MARTIN
	- Files seem to be missing order by order SNR
		- Can just calculate this from the data
		- Using nanmedian of the flux to error ratio
- Did not realize that the reduced files aren't all for the same target so have to figure out how to easily read through them and create a list for one target
	- Chose TOI-6662.01 and Lalande 21185
- Creating file list for original data
```python
with open('/home/maroonx/serval/martin_orig_lalande-21185.lis', 'w') as out:
   ...:    ...:     for f in glob.glob('/data10/MaroonX_spectra_reduced/martin_test/*reduced_*fits'):
   ...:    ...:         ad = astrodata.from_file(f)
   ...:    ...:         if ad.header[0]["OBJECT"] == "Lalande 21185":
   ...:    ...:             out.write(ad.header[2]["ORIGNAME"] + '\n')
```
- Creating file list for martin reduced data
```python
with open('/home/maroonx/serval/martin_test.lis', 'w') as out:
   ...:     for f in glob.glob('/data10/MaroonX_spectra_reduced/martin_test/*reduced_*fits'):
   ...:         ad = astrodata.from_file(f)
   ...:         if ad.header[0]["OBJECT"] == "Lalande 21185":
   ...:             out.write(f + '\n')
```
- For TOI-6662.01 looks pretty good
	- Average difference for red arm: -0.0010 m/s
	- Average difference for blue arm: -0.0087 m/s
	- Max difference for red arm: 0.0951 m/s
	- Max difference for blue arm: 0.0912 m/s
- For Lalande 21185 similar
	- Average difference for red arm: 0.0156 m/s
	- Average difference for blue arm: 0.0052 m/s
	- Max difference for red arm: 0.0853 m/s
	- Max difference for blue arm: 0.0792 m/s
## 2026-04-08
### SERVAL
#### Meeting with Martin
- Need to import maroonx_instruments
- Then for the two science in each reduced file
	- ad\[0].hdr
		- Can read the ARM key for the color
	- Then can do ad_red = ad\[1]
		- ad_red.hdr.get('ARM')
	- Then to get the data
		- ad_red.OPTIMAL_REDUCED_FIBER_6
#### DRAGONS integration with SERVAL 
- [x] #TODO Set up an environment that works with dragons/serval locally and then port to mxred  [due:: 2026-04-09] #MAROON-X
	- Difficult since astrodata doesn't work with python 3.7 which is the original serval environment
	- Currently creating a new environment and trying to manage deprecations and that sort of thing
	- Copied over serval3_maroonx to serval3_maroonx_new to make these changes while minimizing long term issues
- [x] #TODO Check Claude's code for serval adjustment in loading in fits files  [due:: 2026-04-09]
- Decided to just ignore what Claude has implemented and do it manually
	- So far going ok, main issue is going to be figuring out the best method for determining what color to use and then correctly loading that in
### Data Reduction
#### RVs with SERVAL
- GN-2026A-Q-133
	- TOI-519
		- Blue does not have enough SNR
		- Red reran with some orders excluded and will send both options over
		- Sent out first look
### Tanya DLLLE 20260406 reduction
- Adjusted the auto DLLLE flux extraction script to take in a user specified month/date
- Had to further update the script to go through multiple exposures times for DLLLE as long as they are all under 25 seconds
#### 202604 Data Reduction
- Reduced the first flat/dark
	- Had an issue where not all the 1800s dark frames were on the server for some reason
		- Manually moved them over
	- Had some small issues with variable naming in the auto flat reduction but think thats fixed now
		- Also had to update the auto LFC dark script to do the same
- Reduced the LFC darks up to today
- Also running DEEEE frame reduction for April so far
- [x] #TODO Let Tanya know when DEEEE for early April is finished  [due:: 2026-04-09]
### 202603 Data Reduction
- There seems to be full missing dates 20260308 and 20260319
	- I'm manually moving those over and will manually reduce them day by day
	- Could be a good time to implement day by day reduction in the auto reducer but I'll see
	- [x] #TODO Reduce the missing data from 202603  [due:: 2026-04-09] #MAROON-X
		- [x] #TODO Reduce missing DEEEE  [due:: 2026-04-09]
		- [x] #TODO Reduce missing SOOOE  [due:: 2026-04-09]
	- [x] #TODO Run DLLLE reduction for 20260306 and 20260314 as well (just rerun full month?)  [due:: 2026-04-09] #MAROON-X 
		- Only 20260305 would be the saturated ones
## 2026-04-07
### Data Reduction
- For Ritivik's run of GJ725A 
	- Reran it on mxred and got the same results as he did
	- The run didn't include any files missing barycentric correction so that's not the issue
	- [x] #TODO Re-reduce the 2024 data with incorrect RVs  [due:: 2026-04-14] #MAROON-X
		- Want to try on minimal sample as possible ideally just one day and see if that corrects the SERVAL result for that observation
#### 202603 Data Reduction
- Failing again on the transferring of blue solutions
	```bash
	Traceback (most recent call last):
  File "/home/zeev/data_redux_mrx/main.py", line 593, in <module>
    main()
  File "/home/zeev/data_redux_mrx/main.py", line 497, in main
    success = submission_fxns.execute_script(python_bin, submission_args, logger, f"{color} Transfer Solution", log_dir=log_dir)
  File "/home/zeev/data_redux_mrx/submission_fxns.py", line 33, in execute_script
    raise e
  File "/home/zeev/data_redux_mrx/submission_fxns.py", line 24, in execute_script
    text=True
  File "/home/maroonx/anaconda3/lib/python3.7/subprocess.py", line 512, in run
    output=stdout, stderr=stderr)
	```
	- Trying to run without multiprocessing manually to identify which file is causing this since some (most?) files seem to get through fine
	- Potential idea that it could be one of the frames Teo had mentioned having issues 20260328
		- Maybe 2026-03-28 08:20:19 frame? Or somewhere around that
		- It isn't 20260328 ran fine
		- Now leaving 202603* to run overnight and will see tomorrow what caused it
	- Problem file: `/data10/MaroonX_spectra_reduced/20260306/20260306T101501Z_SOOOE_b_0900.hdf` and `20260306T103143Z_SOOOE_b_0900.hdf`
		- Moved it to `/data10/MaroonX_spectra_reduced/quarantine_202603/`
## 2026-04-06
- Cals
	- Normal cals then after DDDDE frames
		- Reopen fiber shutter
		- Go to LFC+Etalon
		- Go to Manual
		- Backlight laser off
		- Exposure time 15s r 20s b
		- FE Cal ND pos set to 288
		- Take three exposures
			- Update the spreadsheet with the time stamps and the columns except SLM db
		- Then take one DLLLD with same exposure time (15s r 20s b) one exposure
			- Update the spreadsheet with the time stamps and the columns except SLM db
		- Then take DDDDE with same exposure time (15s r 20s b) take two exposures
			- Update the spreadsheet with the time stamps and the columns except SLM db
- [x] #TODO Reduce DLLLE data from 20260406 check from spreadsheet Tanya sends  [due:: 2026-04-08] #MAROON-X
	- Flux subtracted with dark subtraction ASAP
### Data Reduction
- [x] #TODO Figure out why the data for Ritvik's run has weird RVs for range in 2024. Just re-reduce it?  [due:: 2026-04-10]
	- Think it has to do with barycentric corrections again
	- Will ask Ritvik how this was able to be run/what data he used
	- Then will reduce the data with barycentric correction and add the `-p` command for exposure meter, look at stepbystep file for details if needed
	- But it isn't all these files only some of them (of which some are at the 20240330/20240331 which we had removed before I think)
	- Now running serval on the red 2024 data with those missing barycentric corrections removed and will see what that looks like
	- They actually don't match the points that have weird RVs...
	- Ritvik also had run this on mxred so just not sure what the issue is
- Auto data reduction
	- Issue with the etalon fitting where it just stops
		- Too many processes running at once?
		- Cleared some old batch_extraction tasks that were taking up swap memory
		- Then set the code to just run one etalon fitting at a time. Think this is still efficient since it is maxing out the number of cores and otherwise I think there is overhead when switching between programs?
- DLLLE data reduction
	- Do not have to run the etalon fits only have to do flux extraction
	- On 20260304 and 20260305 there were two exposure amounts taken for the frames so that threw off my current script which just looks at one exposure time. Could adjust to just do all but Tanya said to just ignore them
	- Reran the LFC dark reduction as well since there were some dates with the wrong LFC (with the higher exposure) and that was what was directly causing the script to choose the wrong files
## 2026-04-05
- Fixed mistype in code that meant that not all etalon data was being flux extracted (only the last dates in the loop actually were run)
- [ ] #TODO Implement more robust checks in data reduction #MAROON-X  [due:: 2026-04-17]
	- Check that all the etalon files are flux extracted (like what is done with the science files)
- [x] #TODO Improve logging for individual runs of a step in data reduction to be separate or append to one file. Right now they overwrite one another with the same name.  [due:: 2026-04-09]
## 2026-04-03
### Data Reduction
- Had a failure with the auto reduction with the science flux extraction
	- There was one corrupted fits file (not 100% sure why) but manually reran the day
	- Then manually reran the flux extraction for that day
	- Then continued with the auto reduction
## 2026-04-03
### Data Reduction
- LFC data reduction for 202603
	- Updated the LFC dark reduction script I have to explicitly exclude darks with exposures greater than 25 which wouldn't be for the LFC
		- Not sure if this is perfectly robust
		- But otherwise had an issue where some dates wouldn't be reduced if darks were taken and then the ND filters didn't match
		- I also added a log file to actually be able to go through and see what happened
	- DLLLL
		- Flux extraction
			- Flat 20260304
				- [x] 1-9 r
				- [x] 1-9 b
				- [x] 10-15 r
				- [x] 10-15 b
			- Flat 20260316
				- [x] 16-19 r
				- [x] 16-19 b
				- [x] 20-31 r
				- [x] 20-31 b
	- DLLLE
		- Wrote a script `zev_reduce_DLLLE.sh` that goes through March and for each date matches the LFC dark to the date
		- It also looks for the exposure time from the LFC dark to look for in reducing the DLLLE frames
		- It also performs the dark subtraction
		- It does require reducing the DDDDE frames for LFC first
		- (DO NOT HAVE TO DO THIS) Then ran etalon fits. Again having to split up to accurately capture the right flat
		```bash
		PYTHONPATH=${PWD} python reduce/batch_extract_etalon_positions.py -dd '/data10/MaroonX_spectra_reduced/' -fb '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202603xx/flats/20260304T03_masterflat_backgroundsubtracted_FFFFF_b_0007.hdf' -c 'b' -e '*' -t 'DLLLE' -d '2026030*' -fs 5 ; curl -H "Priority: 4" -d "b DLLLE Etalon fitting finished" https://ntfy.sh/MAROON-X
		```
- Automation of 202603 data reduction
	- Updated to be able to split by the flat frame for reduction
	- Added checks for if the darks/flats are already reduced and now they will reduce them if they haven't yet been reduced unless explicitly specified
## 2026-04-02
- Adjusting my auto code to handle multiple flats is a bit harder than I wanted especially to do it robustly
- Will also want to update how darks are handled to match how flats are going to be
- Right now just save the directories that flats and darks were saved to a dictionary that is then loaded. This has many issues:
	- If the reduction is run once and one dark is reduced but later on more darks are taken it wouldn't know to rerun the darks unless explicitly prompted to
	- If the darks/flats were reduced manually and did not get saved to the dictionary would have to have a manual pass to the auto reduction
- What I want to implement
	- Remove the dictionary saving information
	- Each time check which directories have dark/flat files
	- Then check if there are corresponding reduced dark/flat files
		- If there are save the information for future use
		- If there are not reduce them
	- Add an option to overwrite the currently reduced dark/flat files if desired. This will just overwrite all and if more granulation is required can just be done manually
- For tomorrow have to figure out how to correctly assign the red and blue flats in the science extraction. Then have to do implement for each step after
## 2026-03-31
	### Data Reduction
- Redid the 20260304 flat reduction since there seemed to be an issue with the red frame that didn't have the full reduction done?
### SERVAL
- Have to modify serval to take in the necessary information from Martin's fits compared to the hdf files
## 2026-03-30
### Data Reduction
- [x] #TODO Run SERVAL on Martin's data  [due:: 2026-04-09] #MAROON-X
- [x] #TODO Send out first transit data for GN-2026A-Q-133  #MAROON-X  [due:: 2026-04-08]
- [x] #TODO Check programs for data that is ready to send out #MAROON-X   [due:: 2026-04-07]
- [x] #TODO Ask Andreas for a meeting about SERVAL next steps #MAROON-X  [due:: 2026-04-02]
- [x] #TODO Package data for HD 260655, BD+44 3567, and Barnard Star  #MAROON-X  [due:: 2026-03-31]
	- When packaging the hd5 files had to adjust for the fact that the normal method when tarring only looks in data10 (since the adjusted paths are output without the parent directory and just the 'x' file)
	- HD 260655/TOI-4599 (GN-2022A-Q-120, GN-2023B-Q-113)
		- [x] Fits package
		- [x] Hd5 package
		- [x] Serval package
	- BD+44 3567/TOI-4481 (GN-2021B-Q-121, GN-2022A-Q-218, GN-2023A-Q-120, GN-2024A-Q-216)
		- [x] Fits package
		- [x] Hd5 package
		- [x] Serval package
	- Barnard Star (GN-2021A-Q-119, GN-2021B-LP-202, GN-2022A-LP-202, GN-2022A-CAL-201, GN-2022A-Q-409, GN-2023A-Q-405, GN-2023A-Q-120, GN-2023B-LP-202, GN-2024A-LP-202, GN-2024A-Q-405, GN-2024A-CAL-201, GN-2024B-Q-406, GN-2024B-CAL-201)
		- [x] Fits package
		- [x] Hd5 package
		- [x] Serval package
	- Flats
		- [x] 04/21 3
		- 05/21 4 Uses 04/21
		- [x] 08/21 5 No combined flat
		- [x] 11/21 6 uses 10/21 No combined flat
		- [x] 04/22 8 Uses 03/22
		- [x] 05/22 8
		- [x] 07/22 8
		- 08/22 8 Use 07/22
		- [x] 06/23 9
		- [x] 10/23 10
		- 11/23 10 Uses 10/23
		- 12/23 10 Uses 10/23
		- 02/24 10 Uses 10/23
		- [x] 04/24 10
		- 05/24 10 Uses 04/24
		- 06/24 10 Uses 04/24
		- 07/24 10 Uses 04/24
		- 08/24 10 Uses 04/24
		- [x] 09/24 10
		- [x] 10/24 10
- Tanya reduction
	- [x] #TODO Reduce LFC data #MAROON-X  [due:: 2026-04-06]  [completion:: 2026-04-06]
		- [x] #TODO Flux extract DLLLL files as normal  [due:: 2026-04-06]  [completion:: 2026-04-06]
			- Still had to split by march and then split again because can't just do 1-16 easily with the input date. So 1-9 and then 10-15. Then 16-19 and 20-31
		- [x] #TODO DLLLE frames do the dark subtraction during the flux extract (-sd5?)  [due:: 2026-04-06]  [completion:: 2026-04-06]
			- Do this on a date by date basis
			- First have to create LFC darks
		- Then package this on the server and send to Tanya
	- [x] #TODO Reduce Scrambling test date 2 ([spreadsheet](https://docs.google.com/spreadsheets/d/1O51wl3XMcKgYzFwXfXwza5XVDGcMOAmk4oSwNY70hrU/edit?gid=1895596458#gid=1895596458)) #MAROON-X  [due:: 2026-04-01]
		- Created a new directory `/data10/MaroonX_spectra/scrambling_20260329/` for fits files and `/data10/MaroonX_spectra/scrambling_20260329/` for reduced ones
			- Moved all the data there in order so that it would be easy to filter what DEEEE frames are for this and what will be used for data reduction
			- ` ls 20260329/*DEEEE*fits | awk -F'T' '{split($2,a,"Z"); if (a[1] >= "165751" && a[1] <= "204709") print}' | xargs mv -t scrambling_20260329/ `
		- Data taken on 20260329
		- Darks on top of the sheet
			- Reduce them like LFC darks (this was taken care of with the full month of LFC dark reduction I do)
		- Then do dark subtract for DEEEE for fiber five on all data for the test
			- `PYTHONPATH=${PWD} python reduce/batch_extraction.py -c 'r' -fr '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202603xx/flats/20260316T17_masterflat_backgroundsubtracted_FFFFF_r_0002.hdf' -dd '/data10/MaroonX_spectra/scrambling_20260329/' -od '/data10/MaroonX_spectra_reduced/scrambling_20260329/' -e '*' -t DEEEE -d 20260329 -dkf '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/20260329/darks/20260329T20_masterdark_mean_DDDDE_r_0005.fits' -sd 5`
			- `PYTHONPATH=${PWD} python reduce/batch_extraction.py -c 'b' -fb '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202603xx/flats/20260316T17_masterflat_backgroundsubtracted_FFFFF_b_0007.hdf' -dd '/data10/MaroonX_spectra/scrambling_20260329/' -od '/data10/MaroonX_spectra_reduced/scrambling_20260329/' -e '*' -t DEEEE -d 20260329 -dkf '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/20260329/darks/20260329T20_masterdark_mean_DDDDE_b_0020.fits' -sd 5`
		- Then fitting
			- `PYTHONPATH=${PWD} python reduce/batch_extract_etalon_positions.py -dd '/data10/MaroonX_spectra_reduced/scrambling_20260329/' -fb '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202603xx/flats/20260316T17_masterflat_backgroundsubtracted_FFFFF_b_0007.hdf' -c 'b' -e '*' -t 'DEEEE' -d '20260329' -fs 2-5 ; curl -H "Priority: 4" -d "b DEEEE Etalon fitting finished" https://ntfy.sh/MAROON-X`
			- `PYTHONPATH=${PWD} python reduce/batch_extract_etalon_positions.py -dd '/data10/MaroonX_spectra_reduced/scrambling_20260329/' -fr '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202603xx/flats/20260316T17_masterflat_backgroundsubtracted_FFFFF_r_0002.hdf' -c 'r' -e '*' -t 'DEEEE' -d '20260329' -fs 2-5 ; curl -H "Priority: 4" -d "r DEEEE Etalon fitting finished" https://ntfy.sh/MAROON-X`
		- Then normal wavelength solution
		- Make sure just within the time step
	- [x] #TODO Move to failed scrambling data different folder (DEEEE) #MAROON-X  [due:: 2026-03-30]  [completion:: 2026-03-30]
		- 20260326 T175752 - T196016
		- ` ls 20260326/*DEEEE*fits | awk -F'T' '{split($2,a,"Z"); if (a[1] >= "175752" && a[1] <= "196016") print}' | xargs mv -t scrambling_20260326/ `
## 2026-03-23
- [x] #TODO When reducing March data reduce separately before and after shutdown (before and after 16th). Check with Tanya to see if there is a shift [due:: 2026-04-07] #MAROON-X
- [x] #TODO Reduce data for Martin with current pipeline and run SERVAL #MAROON-X  [due:: 2026-03-25]  [completion:: 2026-03-30]
## 2026-03-17
- Continued reduction of Ritviks files
	- Now tracking in [[Ritvik File tracker]]
	- Also slightly messed up since I ran out of room and meant to delete the sig5_niter2 current reduction but accidently deleted the sig5
		- But will just continue and do sig5_niter2 first and send to ritvik and then delete and reduce sig5
- Ran serval for Kepler-100
	- Had to combine some lists to get all the observations
	- Then ran on all observations 2021-2023
	- Then packaged reduced data and sent out
## 2026-03-16
### Data Reduction
- GN-2023B-Q-237
	- Reran SERVAL to correct the bjd dates found within
- [x] #TODO Package Kepler-100 data  [due:: 2026-03-17]  [completion:: 2026-03-18]
- Continued reduction for Ritvik's files (logged under 2026-03-12)
- Re-reduced flat taken on 20260304 after removing the first DFFFD frame and deleting the first reduction
	- There were flats taken on 20260312 but not using those and added the parameter to just select frames from 20260304 for my script
- Created lists for HD3651 and Gl 486 for 2024-2025 for Ritvik
	- Used a smarter command to find potential variations in naming also had to look through .tar.gz files for prior to 202410
		```bash
		(
dfits /data*/MaroonX*/202[4-5]*/*SOOOE*.fits | \
    fitsort 'HIERARCH MAROONX TELESCOPE TARGETNAME' | \
    grep -iE 'HD[[:space:]]*3651' | \
    awk '{print $1}'

python3 -c "
import glob, astropy.io.fits as fits
for f in sorted(glob.glob('/data*/MaroonX*/202[4-5]*/*SOOOE*.fits.gz')):
    try:
        hdr = fits.getheader(f)
        target = hdr.get('HIERARCH MAROONX TELESCOPE TARGETNAME', '')
        if 'HD 3651' in target.upper() or 'HD3651' in target.upper():
            print(f)
    except:
        pass
"
) | sort -u > HD3651_2024_2025.lis
		```
``` bash
(
dfits /data*/MaroonX*/202[4-5]*/*SOOOE*.fits | \
    fitsort 'HIERARCH MAROONX TELESCOPE TARGETNAME' | \
    grep -iE 'Gl[[:space:]]*486' | \
    awk '{print $1}'

python3 -c "
import glob, astropy.io.fits as fits
for f in sorted(glob.glob('/data*/MaroonX*/202[4-5]*/*SOOOE*.fits.gz')):
    try:
        hdr = fits.getheader(f)
        target = hdr.get('HIERARCH MAROONX TELESCOPE TARGETNAME', '')
        if 'Gl 486' in target.upper() or 'Gl486' in target.upper():
            print(f)
    except:
        pass
"
) | sort -u > Gl486_2024_2025.lis
```
## 2026-03-12
### Data Reduction
- [x] #TODO Undo edit to reduce/batch_extraction.py at line 56 [due:: 2026-03-30] #MAROON-X
	- Added for the Ritvik reduction to allow for the data directory to be a different folder within MaroonX_spectra
- [ ] #TODO See if sim links can be created for log files across the data reduction so they're all in the same location after [due:: 2026-04-22] #MAROON-X
- [x] #TODO Respond to email about GN-2026A-FT-107  [due:: 2026-03-12]  [completion:: 2026-03-16]
- For Ritvik's files
	- Go month by month for 
		- 
## 2026-03-11
### Data Reduction
- [x] #TODO Reduce DEEEE frames for march and send to Tanya  [due:: 2026-03-16]  [completion:: 2026-03-17]
- For Ritvik's files
	- One base reduction
	- One with osig 5
		- Created `/data10/MaroonX_spectra/outlSel_sig5/` to preserve original
		- Will store in `/data10/MaroonX_spectra_reduced/outlSel_sig5/`
- [x] #TODO #MAROON-X Reduce all HD3651 files with osig 5  [due:: 2026-03-25]
	- One with osig 5 and fixing number of iterations of all orders to 2
		- Created `/data10/MaroonX_spectra/outlSel_sig5_niter2/` to preserve original
		- Will store in `/data10/MaroonX_spectra_reduced/outlSel_sig5_niter2/`
- [x] #TODO Reduce all HD3651 files with osig 5 niter 2  [due:: 2026-03-23]  [completion:: 2026-03-23]
- Create directories for needed files
	```bash
	grep -oP '(?<=/MaroonX_spectra_reduced/)\d{8}' HD3651_2025_unique.txt | sort -u | xargs -I{} bash -c '
  mkdir -p /data10/MaroonX_spectra/outlSel_sig5/{}
  mkdir -p /data10/MaroonX_spectra/outlSel_sig5_niter2/{}'
	```
	- Copy SOOOE files to those directories
	```bash
	grep -oP '/data10/MaroonX_spectra_reduced/\K\d{8}/\d{8}T\w+(?=\.hdf)' HD3651_2025_unique.txt | sort -u | while read -r path; do
  date=$(echo "$path" | cut -d'/' -f1)
  name=$(echo "$path" | cut -d'/' -f2)
  src="/data10/MaroonX_spectra/${date}/${name}.fits"
  cp "$src" "/data10/MaroonX_spectra/outlSel_sig5/${date}/"
  cp "$src" "/data10/MaroonX_spectra/outlSel_sig5_niter2/${date}/"
done
	```
	- Copy all DEEEE files to those directories for those dates
	```bash
	grep -oP '(?<=/MaroonX_spectra_reduced/)\d{8}' HD3651_2025_unique.txt | sort -u | while read -r date; do
  find "/data10/MaroonX_spectra/${date}/" -name "*DEEEE*.fits" | while read -r f; do
    cp "$f" "/data10/MaroonX_spectra/outlSel_sig5/${date}/"
    cp "$f" "/data10/MaroonX_spectra/outlSel_sig5_niter2/${date}/"
  done
done
	```
	- Copy all exposure meter files (?)
	```bash
	grep -oP '(?<=/MaroonX_spectra/)\d{8}' HD3651_2025_unique.txt | sort -u | while read -r date; do
    find "/data10/MaroonX_spectra/${date}/" -name "*p*pkl" | while read -r f; do
        cp "$f" "/data10/MaroonX_spectra/outlSel_sig5/${date}/"
        cp "$f" "/data10/MaroonX_spectra/outlSel_sig5_niter2/${date}/"
    done
done
	```
## 2026-03-10
- Issue with reducing darks and flats. Failed on creating the final master dark
	- Issue was there was one science file that was empty (`/data10/MaroonX_spectra/20260306/20260306T101501Z_SOOOE_r_0900.fits`)
	- Ran the manual retrieval script for 20260306
## 2026-03-09
### Data Reduction
- [x] #TODO Reduce flats and darks for 202603  [due:: 2026-03-11]  [completion:: 2026-03-10]
- [x] #TODO Talk to or message Andreas about SERVAL and what my next steps are  [due:: 2026-03-11]  [completion:: 2026-03-11]
### Raccoon
- Just send what I have with my version of the code for them to mess around with
- Created a github that contains my custom version of raccoon as well as the output, data lists, and the jupyter notebook
- Also created a setup script and had some issues with wxpython but was able to resolve it by both removing wxpython and raccoon from the requirements.txt and installing wxpython separately based on what operating system is used
## 2026-03-04
### Data Reduction
- [ ] #TODO Reduce first look data for GN-2026A-Q-324 [due:: 2026-04-16] #MAROON-X
- Looks like auto data mover isn't working? Might be because not enough space on data10 or it just is a day behind, will wait one day until asking
	- Was just a day behind
- Packaging Lorenzo Pino npz files
	- Put all the npz files into a list on `/data10/MaroonX_spectra_reduced/lorenzo_npz.lis`
	- Then pacakged them
	- GN-2020B-FT-208
		- Targets
			- BD+01 316 (WASP-76)
		- `/data6/MaroonX_spectra_reduced/MAROON-X_WASP76_20200903_v2.npz`
		- `/data6/MaroonX_spectra_reduced/MAROON-X_WASP76_20200912_v2.npz`
		- `/data6/MaroonX_spectra_reduced/MAROON-X_WASP76_20201121_v3.npz`
	- GN-2021A-Q-218 
		- Targets
			- HD 133112 (WASP-189)
		- `/data3/MaroonX_spectra_reduced/MAROON-X_WASP189_20210423_v2.npz`
	- GN-2021B-Q-220
		- Targets
			- KELT-7
			- MASCARA-1
			- HAT-P-70
		- `/data6/MaroonX_spectra_reduced/MAROON-X_HAT-P-70_20211029_v1.npz`
		- `/data6/MaroonX_spectra_reduced/MAROON-X_HAT-P-70_20211031_v1.npz`
		- `/data6/MaroonX_spectra_reduced/MAROON-X_HAT-P-70_20211111_v1.npz`
		- `/data6/MaroonX_spectra_reduced/MAROON-X_KELT7_20211102_v1.npz`
		- `/data6/MaroonX_spectra_reduced/MAROON-X_KELT7_20211107_v1.npz`
		- `/data6/MaroonX_spectra_reduced/MAROON-X_MASCARA-1_20211101_v1.npz`
		- `/data6/MaroonX_spectra_reduced/MAROON-X_WASP76_20200903_v2.npz`
		- `/data6/MaroonX_spectra_reduced/MAROON-X_WASP76_20200912_v2.npz`
		- `/data6/MaroonX_spectra_reduced/MAROON-X_WASP76_20201121_v3.npz`
		- `/data6/MaroonX_spectra_reduced/MAROON-X_WASP76_20211028_v2.npz`
	- GN-2022B-Q-218
		- Targets
			- kelt-16
		- `/data9/MaroonX_spectra_reduced/MAROON-X_KELT16_20220805.npz`
		- `/data9/MaroonX_spectra_reduced/MAROON-X_KELT16_20220807.npz`
		- `/data9/MaroonX_spectra_reduced/MAROON-X_KELT16_20230624.npz`
	- GN-2023A-Q-219
		- Targets
			- kelt-16
			- MASCARA-5
			- WASP-103
		- `/data9/MaroonX_spectra_reduced/MAROON-X_WASP103_20230701.npz`
		- `/data9/MaroonX_spectra_reduced/MAROON-X_WASP103_20230705.npz`
## 2026-03-03
### SERVAL
- Looking for why python2 serval is so different than python3
- Tried explicitly setting fiber 6 for python2 but no change
- There are slight differences in the telluric files but doesn't seem that significant
- Commands used
	- Python2
	```bash
	time python /home/maroonx/Repos/serval_maroonx/src/serval.py Wolf-359_2025B_red /home/maroonx/serval/Wolf-359_2025B_red.lis -inst MAROONXredcoadd -snmax 10000 -brvref WE -targ 'Wolf 359' -fiber fiber_6
	```
	- Python3
	```bash
	time python time_maroonxserval.py --instrument MAROONXredcoadd --inputlist /home/maroonx/serval/Wolf-359_2025B_red.lis --outputdir /home/maroonx/serval3/Wolf-359_test_fast/ --K_upper_limit 3000 --snrmax 10000 --skipknots 'Wolf 359'
	```
## 2026-03-02
### Data Reduction
- Reran reduction for Ritvik
	- Fixed the iteration to 2 for order 74, fiber 4 in the etalon fitting step
- [x] #TODO Package the npz files for Lorenzo Pino  [due:: 2026-03-10]  [completion:: 2026-03-10]
### SERVAL
- From before on Wolf-359_2025B_red.lis
	- serval3_maroonx with spltype=3
		- real    38m45.231s
	- serval3_maroonx with spltype=1
		- real    40m2.655s
- Now test with `/serval_maroonx/`
	- Much faster with real    10m41.417s
- The thing slowing down the current version of serval is the finding of the optimal number of knots
- Some potential solutions
	- Do a smarter search
		- Start with coarser grid
		- Then refine
	- Use the same knot optimization from iteration 1 for iteration 2
### Raccoon
- [x] #TODO Look into creating custom raccoon mask rather than using ESPRESSO's  [due:: 2026-03-03]  [completion:: 2026-03-02]
- [x] #TODO Run raccoon with custom mask created with raccoon  [due:: 2026-03-03]  [completion:: 2026-03-03]
	- Added option in maskcompute for serval_mx and made use of input instrument parameters from before
	- Updated spectrograph utils to switch fits from bigendian to littlendian when loading in
- Custom mask command
	```bash
	raccoonmask /home/zvladimi/MAROON-X/GN-2025B-Q-207-SERVAL/TOI-1408_2025B/TOI-1408/MAROONXredcoadd/TOI-1408_template.fits serval_mx TOI-1408 --inst MAROONX-red --tplrv 10. --cont poly --contfiltmed 1 --contfiltmax 400 --contpolyord 2 --line_fwhmmin 2.00 --line_fwhmmax 30.00 --line_contrastminmin 0.06 --line_depthw_percentdeepest 0.10 --line_depthw_depthmaxquantile 0.6 --verbose --dirout ./red_mask_output/
	```
- Then added the mask to ccf.py in listmask_default()
- Removed from ccfcompute.py the loading method for the ESPRESSO mask since we now use a .mas not a .fits file
- Updated ccf command to reflect actual spectral type of TOI-1408
```bash
raccoonccf b_spectra.lis "MAROONX-blue" TOI-1408 --obj TOI-1408 --bjd header --spt F8.0 --dirout './blue_ccf_output/' --rvshift header --rvrng 15
```
- With the updated masks the blue looks about the same and the red no longer looks random
	- However red has a much wider range of values from -80 - 100 m/s than SERVAL says
	- Although the shape is roughly correct
- Removed `--maskair` but should check if should be done
	- Didn't really change anything though
![[bjd_vs_rv.png]]
## 2026-02-27
### Meeting with Andreas
- Been sending out "Recalculating an improved instrument response function is on the list of things we need to do, but it might take a few weeks to get to this"
	- What is the status of this?
	- Just take this out
- [x] #TODO Ask Lorenzo if he wants repackaging of npz data cubes since we have added in flux uncertainties  [due:: 2026-03-02]  [completion:: 2026-03-02]
- [x] #TODO Try running serval2 on the server  [due:: 2026-03-02]  [completion:: 2026-03-02]
	- Using other python environment
	- Look at the last command file to run it
	- Run a large dataset and compare timing
## 2026-02-26
### Raccoon
- Add in loading of barycentric correction function
- `raccoonccf b_spectra.lis "MAROONX-blue" ESPRESSO_F9 --obj TOI-1408 --bjd header --maskair --spt F9.0 --dirout './blue_ccf_output/' --rvshift header --rvrng 15``
	- Add `--rvshift header` to command
	- Add `--rvrng 15`
- The ESPRESSO mask does not cover the red arm very well, large amounts of orders with no lines
- Adjusted the input of berv correction to be negative
## 2026-02-25
### Raccoon
- `spectrograph_utils.py`
	- Changed dicnord to reflect the actual number of orders not the number they go up to
		- 28 for red
		- 34 for blue
	- Updated dicoref to be the middle order again not sure if this is 'the' reference order but probably good enough
	- Added to dictspix (pixels per resolution element)
		- 'MAROONX-red': 3.3
		- 'MAROONX-blue': 3.3
	- Added to dicres (resolution)
		- 'MAROONX-red': 85000
		- 'MAROONX-blue': 85000
	- Checked dicrvpixmed values of 1.1 km/s
		```bash
		with h5py.File(hdf_file, 'r') as f:
		    keys = sorted(list(f['optimal_extraction']['fiber_6'].keys()), key=int)
	    # pick a middle order
		    w = f['wavelengths']['fiber_6'][keys[14]][:] * 10.  # nm -> Angstrom
		    dw = np.diff(w)
		    dv = (dw / w[:-1]) * 3e5  # km/s per pixel
		    print(np.median(dv))
		```
		- Confirmed for both red and blue it is ~1.1km/s
- `ccfcompute.py`
	- Went through and updated mapping so that even though MAROONX orders aren't initialied
- Update command 
	- `raccoonccf b_spectra.lis "MAROONX-blue" ESPRESSO_F9 --obj TOI-1408 --bjd header --maskair --spt F9.0 --dirout './blue_ccf_output/`
- Following a lot of back and forth with Claude to find all the places in `ccfcompute.py` and `ccf.py` to use the mapping from MAROONX orders it seems to run and at least for blue provides reasonable values for RVs but they are in the exact opposite direction and about half of what SERVAL produces...
- So will ask at next meeting
### Data Reduction
- Ritvik Re-reduction
	- `PYTHONPATH=${PWD} python reduce/batch_extract_etalon_positions_outlSel.py -dd '/data10/MaroonX_spectra_reduced/outlSel_test/' -fb '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202504xx/flats/20250409T02_masterflat_backgroundsubtracted_FFFFF_b_0007.hdf' -c 'b' -e '0010' -t 'DEEEE' -d '202504*' -osig 5`
	- And corresponding red frames
- [x] #TODO Look into ability to use on list file for both serval running and for packaging hdf5 files. Also determine a simpler way for tarring/gzip #MAROON-X  [due:: 2026-04-10]  [completion:: 2026-04-09]
- Packaging data for Lorenzo Pino
	- GN-2020B-FT-208 
		- Targets
			- BD+01 316 (WASP-76)
		- [x] Zipped hdf
		- [x] Zipped fits
		- [x] Moved to box
	- GN-2021A-Q-218 
		- Targets
			- HD 133112 (WASP-189)
		- [x] Zipped hdf
		- [x] Zipped fits
			- Put on data6 since data10 out of storage
		- [x] Moved to box
	- GN-2021B-Q-220
		- Targets
			- KELT-7
			- MASCARA-1
			- HAT-P-70
		- [x] Zipped fits 
		- [x] Zipped hdf
		- [x] Moved to box
	- GN-2022B-FT-105
		- No observations?
	- GN-2022B-Q-218
		- Targets
			- kelt-16
		- [x] Zipped fits
		- [x] Zipped hdf
		- [x] Moved to box
	- GN-2023A-Q-219
		- Targets
			- kelt-16
			- MASCARA-5
			- WASP-103
		- [x] Zipped fits
		- [x] Zipped hdf
		- [x] Moved to box
## 2026-02-24
### Data Reduction
- Packaging data for Lorenzo Pino
	- GN-2022B-FT-105 has no observations
### SERVAL
- Compared to final python2 version before python3 porting version began (`git checkout -b python2-version 58ed65c`)
- Went through the core functions and generally found no real difference (slightly different print statements or np vs python datatypes)
	- There is vsini consideration in python3
	- serval.py
		- fitspec()
		- optidrift()
		- polyreg()
		- SSRstat
			- v_step in python2 is hard coded (input) but is calculated as `dv = vgrid[dk] - vgrid[0]` in python3
		- opti()
		- CCF()
	- calc_spec.py
	- cspline.py
		- Python3 adds effective degree of freedom calculation
- Ran time_maroonxserval.py to determine where the bottleneck is the largest
	- Compared to a run with the normal to ensure the AI script didn't make a mistake in the copying
	- The slow down seems to be from "ESTIMATING OPTIMAL KNOTS" which I believe can be parallelized across different files?
	- 
## 2026-02-23
### Data Reduction
- Sent out the reduced spectra for IRAS 04125+2902
- Ritvik re-reduction
	- Chose `/data10/MaroonX_spectra_reduced/20260101/20260101T033524Z_DEEEE_r_0005.hdf`
	- Created new data/output directory: `/data10/MaroonX_spectra_reduced/outlSel_test`
	- Check with osig 3
		```bash
		PYTHONPATH=${PWD} python reduce/batch_extract_etalon_positions_outlSel.py -dd '/data10/MaroonX_spectra_reduced/outlSel_test/' -fr '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202601xx/flats/20260101T17_masterflat_backgroundsubtracted_FFFFF_r_0002.hdf' -c 'r' -e '0005' -t 'DEEEE' -d '20260101'
		```
		- Had to change the import `from reduce.etalon_fit import iterative_fit` to `from reduce.etalon_fit_outlSel import iterative_fit`
	- Checked differences with
		```bash
		diff -y --width=200 --suppress-common-lines <(sed 's/^[0-9-]* [0-9:,]* - //; s/[[:space:]]*$//' orig_20260101T033524Z_DEEEE_r_0005_etalon_peakfit.log | sort) <(sed 's/^[0-9-]* [0-9:,]* - //; s/[[:space:]]*$//' 20260101T033524Z_DEEEE_r_0005_etalon_peakfit.log | sort)  > differences.txt
		```
		- Found no differences except expected ones
			- Time taken
			- Storage location
			- Time taken for fitting
			- And that Using sigma value 3 for outlier rejection
	- Then ran on:
		- 20260101T033524Z_DEEEE_r_0005.hdf
		- 20260103T175610Z_DEEEE_r_0005.hdf
		- 20260103T175421Z_DEEEE_r_0005.hdf
		- 20260104T031746Z_DEEEE_r_0005.hdf
	- With command
	```bash
	PYTHONPATH=${PWD} python reduce//batch_extract_etalon_positions_outlSel.py -dd '/data10/MaroonX_spectra_reduced/outlSel_test/' -fr '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202601xx/flats/20260101T17_masterflat_backgroundsubtracted_FFFFF_r_0002.hdf' -c 'r' -e '0005' -t 'DEEEE' -d '202601*'
	```
	- All comparisons look good
	- Then ran with -osig 5
	- [x] #TODO Run reduction with etalon fitting of -osig 5 (and then onwards) for Ritvik's list  [due:: 2026-02-25]  [completion:: 2026-02-25]
### Meeting with Tanya
- For Ritvik reduction
	- When calling ` batch_extract_etalon_positions.py` use `batch_extract_etalon_positions_outlSel.py`  instead can pass parameter to set sigma cutoff to 5 instead of 3
		- Parameters based on [doc](https://docs.google.com/document/d/1ziPnmlGljDJLPcv8wCC6AGBvUPArWcifjTBujokQ3KQ/edit?tab=t.0)
	- Choose one file from list Ritvik sends
		- Red from any date
		- Keep a copy of the original etalon peakfit log
		- Run peak fitting with `batch_extract_etalon_positions_outlSel.py` with default value 
			- Check if it is logging what signal values (`Using sigma value {outl_sigma} for outlier rejection`) is present
		- Then compare the values in the log files
			- Number of peak maxima found
			- No more improvement after iterations
			- Fit residuals
		- Then run on 3 frames and confirm it is consistently all the same
		- If right let Tanya run
		- Then run peak fitting with `--osig 5` 
		- Check if it has printed that the sigma value used is five
	- Then re-reduce for the full list of frames Ritvik sends
## 2026-02-20
### Data Reduction
- Packaging data for Lorenzo Pino
	- Have to redo GN-2020B-FT-208, GN-2021A-Q-218 hdf files since there were no \_x\_ files the command only pulls blue files and need to readjust to pull red as well and re-tar
	- Also out of room on data10 so have to wait for Andreas to free up space
### SERVAL
- Try the Python2 version of SERVAL and see if that is faster
- Try running the Python3 version straight and seeing if there is indeed a different than tuning the MAROON-X version on the server to using the compiled spline fitting
- [ ] #TODO Look into multiprocessing for SERVAL and where it can be implemented [due:: 2026-04-24] #MAROON-X
- [x] #TODO Plan out SERVAL update  [due:: 2026-02-24]  [completion:: 2026-02-24]
## 2026-02-19
%%- [ ] #TODO Automate the packaging of data, input list of targets/program IDs and iterate through. Also include at least warning or handling of older data [due:: 2026-04-10] #MAROON-X%%
## 2026-02-17
### Andreas Meeting
### Data Reduction
- For collecting all data on hard drives that are zipped
	- Have to use a short scrip that only looks at the header of zipped files to create the list
	- Can then just tar them together skipping the trim_dfits script and the zipping step
	- Additionally since these drives are full when tarring the files together I needed to save it to /data10/
- For older hdf data PROGRAMID and TARGETNAME don't seem to work so using BERV_SIMBAD_TARGET seems to be an alternative

### SERVAL
- It looks like the SERVAL speed up can just be used already according to AI
>**The speed difference comes from a config choice, not algorithmic changes.** In `serval_config.py`, they set `spltype = 1` (scipy's pure-Python `splrep`) instead of the original's `spltype = 3` (compiled C `cubicSpline.spl_cf`). They also set `def_wlog = False` (linear wavelength) instead of `True` (log wavelength). If you use the original with `spltype = 3`, you already have the fast version.
- In serval_config.py
	```python
	if spltype==1:
		print("Using spline_cv = interpolate.splrep")

	if spltype==2:
		print("Using spline_cv = cubicSpline.spl_c")

	if spltype==3:
		print("Using spline_cv = cubicSpline.spl_cf")
	```
- Started runs for with time to compare the two
	- The one in serval1 on mxred is with spltype=3
		- real    38m45.231s
	- The one in serval2 on mxred is with spltype=1
		- real    40m2.655s
## 2026-02-16
- [x] #TODO Take a look at Martin's plots  [due:: 2026-02-21]  [completion:: 2026-02-19]
## 2026-02-12
### Jacob Meeting
- Review RV plots of GN-2025B-Q-225
- Qualifying exam, program structure
	- What form of exam?
- Physics stronger outside academia
- Expectation of TA vs RA
	- Try to do RA first during classes
	- Program requirements for teaching
	- If teaching all set for summer or not?
- Expected class sizes specifically for astro
- Availability of courses
- Structure of courses
- Conference
- What is typical graduation timeline?
	- And funding support through that
- Computing resources and access to them
	- Cross departmental collaboration
	- What classes in AI/ML
		- Taking classes cross department time and availabilty
		- Where does AI fit into the department
- Grad students what they like/don't like
	- Living/affordability
	- Stuff to do
	- Professor expectations
	- What is TAing like
## 2026-02-11
### Andreas Meeting
- Ask about difference in bjd times from 2023 data send out versus now for GN-2025B-FT-107
	- Before was using jd for SERVAL and now use the correct bjd values so use the newly reduced data 
## 2026-02-10
### Data Reduction
- For reducing tanya 20260106
	- Finished the run but found errors from the wavelength solution like the following for 67 and 69 not 100% sure what this means. Also only find it in the red
	```
	./20260106T201337Z_DEEEE_r_0010_spline.log:2026-02-10 09:14:47,020 - Spectrum - ERROR - Error processing file: /data10/MaroonX_spectra_reduced/tanya_spec_DEEEE/20260106/20260106T201337Z_DEEEE_r_0010.hdf
./20260106T201337Z_DEEEE_r_0010_spline.log:2026-02-10 09:14:47,021 - Spectrum - ERROR - Exception: 69
	```
	- Reran by reducing the darks using the LFC dark reduction method instead of the nromal dark method
### Data Reduction
- [x] #TODO Re-package and run serval for GN-2020B-FT-208 (redo hdf), GN-2021A-Q-218 (redo hdf), GN-2021B-Q-220, GN-2022B-FT-105, GN-2022B-Q-218, GN-2023A-Q-219  [due:: 2026-02-25]  [completion:: 2026-02-26]
## 2026-02-04
### Data Reduction
- For reducing Tanya 20260106
	- Apparently there were errors in the red and I forgot to do dark subtraction
	- So did the dark subtraction step and now going through the steps again
- [x] #TODO Remove /data10/MaroonX_spectra_reduced/20250119/20250119T152238Z_SOOOE_r_1800.hdf from Wolf-359_2025B and rerun serval  [due:: 2026-02-10]  [completion:: 2026-02-10]
	- Was taken during what looks like a very strong flare so removing to help clean up spectra plots
## 2026-01-30
### Data Reduction
- For reducing the darks for Tanya added to `reduce/recipes/make_coeffs_from_masterdarks.py` saving ndfilter=ndfilter to both .npz files
## 2026-01-29
### Data reduction
- Issue with GJ725B in 2024
	- Error with BERV_FLUXWEIGHTED_FRD not found and `'Spectrum' object has no attribute 'jd_utc'`
	-  Had this happen earlier with GJ725A where I just had to rerun the barycenter corrections for the files missing this
	- Also note to run on the data7 for 2024 not data10
- Reducing special frames 2020106
	- Issue with making darks where since there were only darks for the specific exposure times for one color (only 42s for blue and none for red) there was an issue with the first step (make_master_darks.py) so just had to comment out the code for blue files when doing the red and seemed to work
	- ` PYTHONPATH=${PWD} python reduce/recipes/make_master_darks.py -dd '/data10/MaroonX_spectra/20260105_06_spec_darks' -d '20260106' -t 10 `
		- Also had to put all the files into `/data10/MaroonX_spectra/20260105_06_spec_darks/20260106` so it would find them correctly
	- For the second step made a special dark directory with 20260106 rather than 202601xx
	- Then ran ` PYTHONPATH=${PWD} python reduce/recipes/make_coeffs_from_masterdarks.py -l '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/masterdarks_20260106_red.lis' --overwrite -od '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/20260106/darks/' -cr 'masterdarks_20260106_red.npz' `
	- For the creation of coefficients added in the mean master darks from 20260101 otherwise didn't have enough files for it to run
	- Finally `PYTHONPATH=${PWD} python reduce/recipes/make_master_darks_from_coeffs.py -dd '/data10/MaroonX_spectra/20260105_06_spec_darks/' -od '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/20260106/darks/' -cr 'masterdarks_coeffs_20260106_red.npz' -cb 'masterdarks_coeffs_20260106_blue.npz' -d '20260106'`
## 2026-01-28
### Data reduction
- 202503 re-reduction
	- Missing
		- 20250326T145933Z_SOOOE_b_1850.hd5
		- 20250326T142700Z_SOOOE_b_1850.hd5
		- 20250326T135427Z_SOOOE_b_1850.hd5
		- But don't think those should be there? Otherwise don't appear for any other reductions with .hd5s usually for \_x\_ files
	- Copied the old reduction of 20250331 to backup_20250331 since it was not re-reduced due to etalon failure
- 202404 re-reduction
	- Unzipped all the fits otherwise not found correctly
	- Don't know where to find the Dark files (either the unreduced or reduced ones)
		- Because there were some weird things with 2024 data 
		- How to actually do it:
			- Documentation: [Docs](https://docs.google.com/document/d/1J6xahiZIApc50IEpCsUpF7tB2Xggy0a4qU2LAKSBX5o/edit?tab=t.0) [Sheet](https://docs.google.com/spreadsheets/d/1YuhTDMbF1gQB8QKvpAEPg3U1ySrJ9F92XOFcNqPg3PY/edit?gid=0#gid=0)
			- Use integer pixel shift not sub pixel shift
			- Original darks in 202311xx and then we scale them on the fly for the science flux extraction
	- Didn't actually have to do this!
- Resolution for Wolf 359 2024 data
	- Use the data in /data7/ for all of 2024 data!
- GN-2025B-Q-123 Wolf 359
	- With re-reductions of 202503-04 and removal of 20250331 able to run Wolf-359 with no issue
	- Blue: exclude 3 4 11 18 19 22 23 24 29
	- Red: exclude 1 6 8 9 10 14 19
- Reduction of 01/15 and 01/16
	- Spectra are in ` /data10/MaroonX_spectra/20260105_06_spec_darks`
	- Reduced spectra are in ` /data10/MaroonX_spectra_reduced/tanya_spec_DEEEE`
	- Have to use the DDDDE darks taken in the spec_darks folder to create darks
- Recreated list for GJ725A/B since missing data from 2021-2 main issue seems to be spacing in Gl 725A vs Gl 725 A or maybe just missed an asterisk...
	- Filtering:
		- `grep -vE "/data7/.*/2023|/data/.*/2023|/data9/.*/2023|/data10/.*2024" GJ725A_all_red.lis > filtered_GJ275A_r.lis`
	- Can skip GJ725A and HD 173739 (and corresponding for B) since no observations under these names or variations according to spreadsheet
## 2026-01-27
### Data Reduction
- Finished 202504 re-reduction 
	- Had to not reduce 20250401 and just used the backed up version
- Have to re-reduce march potentially? But that also could be an issue again with the etalon dying on the 31st so will check that
- Did run out of space so had to do some fixes with moving things around and removing the 202504 backup to make the 202503 backup
	- Useful commands:
		- ` diff -y <(ls 20250404) <(ls 202504_backup/20250404) `
			- Compares which files are in the directories and highlights which don't match
		- `for d in 202504_backup/202504*/darks; do dt=$(basename $(dirname $d)); mkdir -p "./Maroonx_masterframes/$dt/darks"; mv "$d"/* "./Maroonx_masterframes/$dt/darks/"; done`
			- Moves the dark folders to their correct spot 
			- Next time should just create a separate parent directory for darks if I need to do this again tho
- Made a backup for 20250331 to then run the reduction of march without since it was failing on the wavelength solution transfer due to missing etalon
- Found the missing files for TOI-5553 for GN-2023B-Q-217 since they were in 2024 not 2023... so rerunning serval on that 
	- [x] #TODO Send out corrected serval run for TOI-5553  [due:: 2026-01-28]  [completion:: 2026-01-28]
	- Red: exclude 6 7 8 9 10 11 14 19 20 21
	- Blue: exclude 18 27 28
- Started updating the auto data reduction to split up dark and flat specification
	- Need to improve this though to account for
		- Not having to put in full paths and just a date and then this is used to find the right folder
		- Getting the necessary information needed for the darks/flats (paths to the reduced files)
		- Correctly saving the right paths
	- Also need to check the logic for the science flux extraction getting `WARNING: LIMIT EXCEEDED: Single day 20250318-31 (r) has 2 obs. Running solo.` which either is logging wrong or shouldn't be failing
## 2026-01-26
- MAROON-X Meeting
	- Ask about ROTSE1 J142425.69+230316.8 and V* VY Ser have super RVs
		- They're just RR Lyrae wouldn't expect to calculate RVs from them since they are pulsing really fast which makes RVs look massive
		- Can just send out the spectra and say this is what we have let us know if you want anything else
	- Ask about V1057 Cas weird output error and high rvs
		- Same thing as above with these being RR Lyrae
- [x] #TODO Create Serval file lists for Ritvik  [due:: 2026-01-27]  [completion:: 2026-01-27]
	- Wolf 359 (1 more in blue)
		- R 
			- Wolf 359 
		- B 
			- Wolf 359 
	- Ross 154
		- R
			- Ross 154 
			- CD-23 14742
		- B
			- Ross 154
			- CD-23 14742
	- Ross 128
		- R
			- Ross 128
		- B
			- Ross 128 
	- Ross 248
		- R
			- Ross 248 
		- B
			- Ross 248
	- Luyten's star
		- R
			- BD+05 1668
			- Luytens Star
		- B
			- BD+05 1668
			- Luytens Star
	- Barnard's star
		- R
			- Barnard's star
			- Barnard
			- Barnards
			- Barnard star
		- B
			- Barnard's star
			- Barnard
			- Barnards
			- Barnard star
	- GJ725A
		- R
			- GJ725A
			- [x] HD 173739
			- [x] Struve 2398 A
			- [x] Gl 725A
			- [x] Gl 725 A
		- B
			- GJ725A
			- HD 173739
			- [x] Struve 2398 A
			- [x] Gl 725A
			- [x] Gl 725 A
	- GJ725B
		- R
			- [x] GJ725B
			- [x] HD 173740
			- [x] Struve 2398 B
			- [x] Gl 725B
			- [x] Gl 725 B
		- B
			- GJ725B
			- HD 173740
			- [x] Struve 2398 B
			- [x] Gl 725B
			- [x] Gl 725 B
	- Lalande 21185
		- R
			- Lalande 21185
			- HD 95735
		- B
			- Lalande 21185
			- HD 95735
## 2026-01-22
- Data Reduction
	- GN-2025B-Q-203
		- HD3651 run for baseline that covers range of TOI-6662_full
			- Red: exclude 6 7 9 10 11 14 19 20
				- Looks fine after rerun
			- Blue: exclude 17 18 19
				- Looks fine after rerun
		- [x] TOI-5159
			- Blue: looks good
			- Red: exclude: 0 8 14 17 18 20 25
				- On rerun looks good
	- [x] ==GN-2025B-Q-204==
		- New data for TOI-1420
			- Blue: exclude 18 19 24 28 29
				- Looks good after rerun
			- Red: exclude 0 1 2 8 9 10 14 18 19 
				- Looks fine after rerun
		- No new data HAT-P-18
	- [x] ==GN-2025B-Q-207==
		- No new data
	- [x] ==GN-2025B-Q-217==
		- TOI-233 (aka LP 821-31)
			- Blue: exclude: 9 18 28 29
				- Looks good after rerun
			- Red: exclude 5 7 8 9 10 11 18 19 20 25
				- Looks good after rerun
	- [x] ==GN-2025B-Q-218==
		- TOI-2104 (aka LSPM J1006+8305)
			- Blue: looks good
			- Red: exclude 6 7 9 10 14 18 20
				- Looks good after rerun
	- [x] ==GN-2025B-Q-225==
		- TIC 150070085
			- Blue: excl 0 1 2 11 14 15 16 17 19 21 26 28 29
				- Looks fine after rerun
			- Red: excl 0 1 2 3 4 5 6 7 13 16 18 23
				- Looks fine after rerun
	- [x] ==GN-2025B-Q-406==
		- No serval
	- [x] ==GN-2025B-Q-407==
		- No serval
	- [x] ==GN-2025B-Q-409==
		- No serval
	- GN-2025B-Q-411
		- V1057 Cas
			- Very high radial velocities
			- Error when outputting
			```
				Traceback (most recent call last):
				  File "maroonxserval.py", line 188, in <module>
				    K_upper_limit=K_upper_limit)
				  File "/home/maroonx/Repos/serval3_maroonx/src/serval_plotting.py", line 754, in master_rv_project
				    K_upper_limit=K_upper_limit)
				  File "/home/maroonx/Repos/serval3_maroonx/src/serval_plotting.py", line 132, in get_rvs_no_prervs
				    savedir_CaIRT=savedir_CaIRT)
				  File "/home/maroonx/Repos/serval3_maroonx/src/serval_help.py", line 1836, in calculate_rvs_from_final_template
				    func, x[ind] - xc, rv[i][ind], np.array([0.0, 0.0]), e_rv[i][ind]
				  File "/home/maroonx/anaconda3/envs/serval3_maroonx/lib/python3.7/site-packages/scipy/optimize/minpack.py", line 763, in curve_fit
				    res = leastsq(func, p0, Dfun=jac, full_output=1, **kwargs)
				  File "/home/maroonx/anaconda3/envs/serval3_maroonx/lib/python3.7/site-packages/scipy/optimize/minpack.py", line 392, in leastsq
				    raise TypeError('Improper input: N=%s must not exceed M=%s' % (n, m))
				TypeError: Improper input: N=2 must not exceed M=1
				unclosed file <_io.TextIOWrapper name='/home/maroonx/serval3/V1057-Cas_2025B//V1057 Cas/MAROONXbluecoadd/log.txt' mode='w+' encoding='UTF-8'>
			```
	- GN-2025B-Q-413
		- Run all data 
	- GN-2025A-Q-408
		- ROTSE1 J142425.69+230316.8
			- Super high RVs ask at meeting
			- Blue: 
			- Red
		- V* VY Ser
			- Super high RVs ask at meeting
	- Rereducing 202504
		- Issue reducing dark for 20250404 where there wasn't a red frame for 30 sec
			- Just skipping it and using the other darks
			- Tried redownloading that day and didn't help
## 2026-01-22
- Data reduction
	- [x] #TODO HD3651 run for baseline that covers range of TOI-6662_full and send to ritvik  [due:: 2026-01-23]  [completion:: 2026-01-24]
	- [x] GN-2025B-FT-109
		- Packaged
		- Sent out
	- [x] GN-2025B-FT-210
		- Packaged
		- Sent out
	- [x] GN-2025B-FT-107
		- Packaged 
		- Sent out
		- Rerunning for full dataset
	- [x] GN-2025B-LP-112
		- Don't see any data under this?
		- Think this might be that they were just taken on other instruments again
	- [x] GN-2025B-LP-211
		- Looks like no new data since last update sent
	- [x] GN-2025B-LP-212
		- Only new data for BD+05 1668
		- Packaged
		- Sent out
	- [x] GN-2025B-Q-102
		- Only new data for HD 96127
		- Don't see all the data for fits files but see it for hdf5? not sure why...
			- For some reason all of august was zipped??
			- So unzipping those now...
		- Packaged
		- Sent out
	- [x] GN-2025B-Q-108
		- No new data
	- GN-2025B-Q-123
		- New data for Wolf 359
		- Issue with serval described below
	- GN-2025B-Q-203
		- New data for TOI-6662 and TOI-5159
		- 
	- Serval
		- [x] TOI 5553 (GN-2025B-FT-107)
			- Blue exclude: 18 19 27 28
			- Red exclude: 9 10 11 14 16 17 19 20
			- On rerun looks good
		- [x] BD+05 1668 (GN-2025B-LP-212)
			- Blue: looks good
			- Red: exclude 7 9 10 19 21
				- Looks good on rerun
		- [x] TOI 5553 full (GN-2025B-FT-107 + GN-2023B-Q-237)
			- Blue: looks good
			- Red: exclude 6 7 8 9 10 14 18 19 20 21
				- Looks good on rerun
		- Wolf 359 (GN-2025B-Q-123)
			- Issue with files from April 2025 where fiber 6 doesn't exist `/data10/MaroonX_spectra_reduced/20250404/20250404T060719Z_SOOOE_r_1800.hdf`
				- Put all 202504 files in `backup_202504` and then reran data reduction on that month 
				- Also put backup flats and darks there. Wasn't smart about it and put them in a unique directory but they are all under dark/flats folders even if they are under a date like 20250414
		- TOI-5159 (GN-2025B-Q-203)
		- TOI 6662 Full (GN-2025B-Q-203)
			- Blue: exclude 0 1 2 7 8 9 15 18
			- Red: exclude 0 6 9 19
		- HD3651 run for baseline that covers range of TOI-6662_full
			- 
- Meeting with Jacob
	- Check with Madison if she has the old code for raccoon that she used
## 2026-01-21
- Data reduction
	- [x] #TODO Rerun SERVAL for GN-2025B-Q-203 with January data  [due:: 2026-01-23]  [completion:: 2026-01-22]
	- [ ] #TODO Check on status of GN-2026A-Q-324 (they are looking for very fast turn around)  [due:: 2026-03-30]
	- Serval runs
		- TOI 3850 (GN-2025B-FT-109)
			- Blue
				- Orders exclude: 16 17 19 25 28 29
			- Red
				- Orders exclude: 0 1 2 3 8 9 14 16 18 22 25
			- On rerun looks alright although red still not great for the chi2 plot
		- TOI 6662 2025B (GN-2025B-Q-203)
			- Blue
				- Not bad but
				- Orders exclude: 0 1 2 6 7 8 9 15 18
			- Red
				- Pretty good but
				- Orders exclude: 19 20
			- On rerun looks good
		- TOI 5973 (GN-2025B-FT-210)
			- Blue
				- Looks bad but only 4 observations
			- Red
				- Looks bad but only 4 observations
- Raccoon
	- Initial radial velocities look very wrong. Around ~200m/s with no real structure unlike those obtained by serval which are much smaller and clearly decrease with time
	- Calculate RV per pixel
			- https://www.gemini.edu/instrumentation/maroon-x/capability Not 100% sure about $N_{\mathrm{pix}}$ as they first say it is 3.2 per resolution element but then that it is $\sim100$ but might be a typo for the second or for considering all different fibers?
	$$\begin{align}
\dfrac{1}{R} & =\dfrac{v}{c} \\
v & =\dfrac{c}{R} \\
v & =\dfrac{3\cdot10^{8}}{85000} \\
v & =3530 \mathrm{\;m/s} \\
v_{\mathrm{pix}} &= \dfrac{v}{N_{\mathrm{pix}}} \\
v_{\mathrm{pix}} & = 1103 \mathrm{\;m/s} \\
v_{\mathrm{pix}} & =1.1\mathrm{\;km/s}
\end{align}$$
## 2026-01-20
- Issue with downloading data to server
	- The download doesn't pull the proprietary data which contains the vast majority of the science frames
	- Updated the import script to use the `archive_retrieval.py` script but that didn't fix it
	- Asked Andreas and waiting for response
	- Issue is likely that I no longer have permissions (or maybe never did) and likely am overwriting what the auto data download pulls from the server which does have permissions
	- **Solution** remove the auto import in my script and instead just rely on the one in the server
	- If data is missing run `/data10/GSA_Download/manual_retrieve_GSA_data_and_convert.sh 20260101`
- Raccoon
	- Issue seems to be nan values for ron
		- Issue stemmed from there being red and blue files in the list both of which have different order lengths 
		- Then the function would select the first type of file which would then cut out all the orders files of the other color that don't overlap
	- Further changed to split MAROONX into MAROONX-red and MAROONX-blue
		- Similar to how the data reduction is done, it is easier to treat them as two separate instruments
		- However, not sure on all the reference numbers chose 80 as the reference order for red since it is in the middle
		- And then copied values from MAROONX-blue (which were also copied from other instruments)
	- Update raccoon command: `raccoonccf b_spectra.lis "MAROONX-blue" ESPRESSO_F9 --obj TOI-1408 --bjd header --maskair --ords_use 91 92 93 94 95 96 97 98 99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 123 124`
	- Blue seems to run fine now but issue with red
	- Also can probably just select the orders for red/blue with `--ords_use`
		- Red: `--ords_use 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94`
		- Blue: ` --ords_use 91 92 93 94 95 96 97 98 99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 123 124 `
## 2026-01-19
- [x] #TODO Reduce 202501 flat accidentally deleted it instead of 202601  [due:: 2026-01-22]  [completion:: 2026-01-22]
## 2026-01-15
- Data reduction
	- Issue with wavelength solution and transferring it
		- Was because there was incorrect indentation in the loop so red was not actually run
	- Issue with bary corr on `"/data10/MaroonX_spectra_reduced/20251223/20251223T150423Z_SOOOE_r_1200.hdf"`
	- [x] #TODO Figure out TIC 150070085 bary corr  [due:: 2026-01-26]  [completion:: 2026-01-26]
	- Issue with moving data over? 
		- Fixed one issue with the month not having two digits 20261 versus 202601
		- But still doesn't seem to actually be bringing all the data over? Or processing it right
		- [x] #TODO Figure out why data for 202601 isn't being moved correctly  [due:: 2026-01-16]  [completion:: 2026-01-19]
- Raccoon
	- What is the rv per pixel \[km/s]? (dicrvpixmex in spectrographutils)
		- Set to 0.5
	- 
## 2026-01-14
- Data reduction
	- Failed last night because of some logger errors
		- Not exactly sure why
		- Potentially because output to logs was interrupted by disconnection of data10 but I don't think that happened
		- Also had it so the logger in `zev_batch_extraction.py` now uses sys.STDOUT which should mean all output is put to the log files rather than to terminal which could help
		- **Answer:** Turns out because out of memory so removed other fixes and lowered the maximum number of observations to be reduced at once to 30
	- CANCELED: Improved the checking after science fluxes have completed extraction
		- Now outputs which observations failed and attempts to retry the reduction with only the failed ones
		- Generalized this to also check before the first extraction to allow for running the science flux extraction without having to deal with starting from the very beginning if some had successfully completed before
		- Realized this **doesn't** actually work
			- No way of knowing if the files created are actually completed or had faced an error
			- Useful check to know if something went wrong but not safe to consider everything done if all the files are present
			- So removing the multiple tries and initial checking of files
	- Implemented a better queuing system that should ideally search for jobs that can fit
	- [x] #TODO Implement smarter queue for science flux extraction [due:: 2026-04-10] #MAROON-X
		- Check the queue for any job that fits into $C_{avail}$ without needing a split.
		- If no job fits perfectly, then apply the split logic to the top job in the queue.
			- Only split if the new piece is at least X% of the size of a minimum number of observations
			- 
- Raccoon
	- Implemented functions to load in SNR, airmass, exposure time, readout noise
	- For dicoref set the order to 111 because in the hdf file under `['wavelengths']['fiber_6']['111']` the wavelengths covered 550 which seemed to be what was being done
	- Implemented loading of ESPRESSO mask using astropy and an override to select for MAROONX
	- Loading in data from files
		- Made some progress on identifying where elements are in the hdf file
		- But not completely sure on how to correctly combine them since it isn't just the data part of a fits file
		- Will try to look at example data if there is any
## 2026-01-13
- Data reduction
	- Fixed bug in the creation of the flat file where for the extraction run on the FFFFF frames it was doing that on fibers 1-5 which resulted in only fibers 1-4 being run. Now detect if it is FFFFF and just set those fibers to 2-5
		- This was causing issues since it was creating flats with fibers 1-4 which then affected the etalon and everything else
	- Restarted the data reduction from scratch since the incorrect flats will throw everything off
	- Added ssh key to be able to login without password from maroonxcrunch to mxred which hopefully will mean the process won't get interrupted/potentially cancelled
	- [x] #TODO Reduce DEEEE frames for Aug/Sep with wavelength 5 transfer  [due:: 2026-01-15]  [completion:: 2026-01-13]
- Raccoon
	- Moving files over straight from mxcrunch to desktop: `rsync -avP --files-from=TOI-1408_2025B_blue.lis -e 'ssh -J zvladimir@bastion.psd.uchicago.edu' maroonx@mxcrunch.uchicago.edu:/ ./GN-2025B-Q-207-Spectra/`
	- [x] #TODO Implement methods to take information from fits/hdf files for raccoon  [due:: 2026-01-14]  [completion:: 2026-01-14]
	- Finding information needed
		- Airmass: fits file under HIERARCH MAROONX TELESCOPE AIRMASS
		- Exposure time: fits file under EXPTIME
		- Readout noise (RON): fits file under RDNOISE
		- SNR: hdf file under SNR_* where * is for each order
## 2026-01-12
- Fixed issue where the to_date in `get_files` function now includes the day of the to_date rather than just until 00:00 of that day
- Meeting with Tanya
	- [x] #TODO Reduce special test DEEEE frames for 01/05  [due:: 2026-01-20]  [completion:: 2026-01-21]
	- [x] #TODO Reduce special test DEEEE frames for 01/06  [due:: 2026-01-30]  [completion:: 2026-01-30]
		- 01/05-06 MAKE SURE THESE ARE PUT INTO A SEPARATE DIRECTORY CHECK THIS IN THE DATA REDUCTION
		- 01/05 starts 183503
		- 01/06 starts 191010
	- DEEEE frames
	- If there are issues with low flux (line identification) just let Tanya know
	- Data on 01/06
		- Longer exposure times
			- 10s for r 42s for b
		- Subtract darks for 20260106/194519 onwards
			- Use the code Tanya normally uses for DLLLE
			- Have to adjust exposure time and check other values
		- Wait for confirmation from Andreas to do this
	- Do normal DEEEE Reduction
		- Flux extraction
		- Fitting
		- Wavelength solution
	- Then move to separate directory
- [x] #TODO Look at RVs for after September 15 to see if anything looks weird  [due:: 2026-01-13]  [completion:: 2026-01-13]
- Calculating RVs with raccoon
	- Having to adjust the code to fit with MAROONX
	- Set npixels to 4400 based off size of fits files 
	- Currently running ` raccoonccf spectra.lis "MAROONX" ESPRESSO_F9.fits --obj TOI-1408 --bjd header `
	- Have to deal with getting the files over to my home computer which will either be through using bastion or moving it to my laptop and then my home computer
## 2026-01-09
- [x] #TODO Fix issue with 20251231 data not being extracted  [due:: 2026-01-12]  [completion:: 2026-01-12]
## 2026-01-08
- Meeting with Jacob
	- Ask where to actually get the binary masks for ESPRESSO
	- Prepare for a question like explaining like a TA (see rohan message)
		- Coolest thing I learned in astro course and then explain it
- Data reduction
	- Got through the flats with a few more bug fixes
	- For science flux extraction had to adjust the file and created `zev_batch_extraction.py` to handle passing "{18..23}" type dates which allow me to pass specific date ranges for darks
## 2026-01-07
- [x] #TODO Reduce GN-2025B-Q-226's TIC 46432937  [due:: 2026-01-19]  [completion:: 2026-01-20]
- Data reduction
	- Starting testing the script on the server
	- When updating the code have to give execution power to the import_data script. Maybe keep this somewhere separate?
	- The dark reduction has to be done on mrxred so had to use ssh in the commands for the coefficients and final master dark creation.
		- This might be made easier where I don't have to put the password in each time once Andreas allows maroonx to access both servers without the password
	- Tested up to flats which were running when I left
## 2026-01-06
- Data reduction
	- "Finished" the data reduction code
	- Haven't really tested it yet so I'm sure there are lots of bugs but everything there should be in place and after a day or two of testing should be ready to go.
	- [x] #TODO Test semi-automated data reduction process  [due:: 2026-01-19]  [completion:: 2026-01-20]
## 2026-01-05
- [x] #TODO Write down how to remount drive in [[MAROON-X Data Reduction]]  [due:: 2026-01-06]  [completion:: 2026-01-05]
- Data reduction
	- Worked on my scripts that "automate" the data reduction process
	- Completed (have not tested, waiting for Andreas to tell me the best way to clone my repo onto the server) dark and flat reduction as well as science flux extraction
	- This took a while but I'm hoping the other components will not be as intense as they don't require as many things to be run at once
## 2025-12-25
- [x] #TODO Check if description of results from GN-2025A-Q-141 is correct  [due:: 2025-12-29]  [completion:: 2026-01-04]
## 2025-12-19
- [x] #TODO Reduce DLLLE frames for August and September for Ritvik  [due:: 2025-12-30]  [completion:: 2026-01-04]
- [x] #TODO Reduce LFC darks for September  [due:: 2025-12-19]  [completion:: 2025-12-19]
## 2025-12-16
- [x] #TODO Calculate rvs with raccoon for 2025B-Q-207  [due:: 2026-02-25]  [completion:: 2026-02-25]
## 2025-12-04
- [x] #TODO Ask rohan about caltech interview  [due:: 2025-12-04]  [completion:: 2025-12-04]
- Ask first years about interview experiences
## 2025-11-20
- SERVAL project
	- Need to correctly install gnuplot.py from the Python folder as well
		- It isn't a package...
## 2025-11-17
- [x] #TODO Setup SERVAL locally  [due:: 2025-11-18]  [completion:: 2025-11-17]
- [x] #TODO Change SERVAL gnuplot to matplotlib  [due:: 2026-02-18]  [completion:: 2026-02-18]
- [x] #TODO Try to apply wavelength solution to DEEEE frames using fiber five  [due:: 2025-11-19]  [completion:: 2025-11-19]
	- Use `batch_science_spline_wls_dynamic.py` but with DEEEE instead of SOOOE
	- For April-July
	- Also moved the original files so they don't get overwritten
	```
	rsync -av \
	      --include='202504*/' \
	      --include='*DEEEE*hdf' \
	      --exclude='*' \
	      /data10/MaroonX_spectra_reduced/ \
	      /data10/MaroonX_spectra_reduced/backup_DEEEE/
	```
	- Move back
	```
	rsync -av \
	  --include='20250[4-7]*/' \
	  --include='*DEEEE*hdf' \
	  --exclude='*' \
	  /data10/MaroonX_spectra_reduced/backup_DEEEE/ \
	  /data10/MaroonX_spectra_reduced/
	```
## 2025-11-13
- Now new SERVAL in Python3 and faster
- Our version is much slower than it needs to be
- So use new SERVAL
	- Make sure to read new MAROONX data
	- Make sure all settings that were changed are propagating
		- Number of interpolation knots
		- Ask Madison about this (may need to set up a meeting)
			- About BIC vs knot plot how it work?
			- [x] #TODO Ask Madison about what settings were changed from original SERVAL to version we use now  [due:: 2025-11-17]  [completion:: 2025-11-17]
	- Use matplotlib instead of gnuplot
- Matthias Zechmeister
- [x] #TODO Find new SERVAL repo  [due:: 2025-11-17]  [completion:: 2025-11-17]
## 2025-11-11
- [x] #TODO Semi-Automate data reduction process  [priority:: medium]  [due:: 2026-01-09]  [completion:: 2026-01-06]
## 2025-11-07
- [x] #TODO Reduce blue DLLLE for Ritvik  [due:: 2025-11-11]  [completion:: 2025-11-11]
## 2025-11-06
- Look into SERVAL
	- Bean will post to maroonx channel
	- See what can be done
	- Make it work with Martin's output
## 2025-11-05
- GN-2025A-Q-408
	- Andreas says that since this if for RR Lyrae stars we wouldn't expect good RV results with SERVAL
	- ~~But it did work for GN-2025B-Q-407 so not sure but I think odds are I'll just tell them it isn't meant for these stars and send the reduced spectra. But waiting on confirmation~~
		- This isn't true got it mixed up with another program
	- **Sent out initial look**
## 2025-11-04
- Data reduction
	- GN-2025A-Q-408
		- [x] #TODO Send out completed GN-2025A-Q-408 data  [priority:: medium]  [due:: 2025-11-06]  [completion:: 2025-11-05]
		- SERVAL Run
			- Had issues with chi2 dists converging
			- Stellar activity lines were misaligned but after running correction code they are still off...
	- SERVAL
		- Added '.png' to the filenames for the following since a star with a period in its name wouldn't save correctly
			- filename_order_wl_dLW   
			- filename_order_wl_RV    
			- filename_order_bjd_dLW  
			- filename_order_bjd_RV  
## 2025-11-03
- Data reduction
	- GN-2025B-LP-112
		- **Sent out initial look**
	- GN-2025B- LP-212
		- Serval run
			- HD1326B_2025B
				- Reran red because some of the template knots had the red dot beyond the last black line
			- CD-23 14742
				- Reran blue and red because some of the template knots had the red dot beyond the last black line
				- One slightly weird point but it is much earlier in the month than the others so keeping it
		- **Sent out initial look**
	- GN-2025B-Q-102
		- **Sent out initial look**
	- GN-2025B-Q-108
		- **Sent out initial look**
		- Even though not said in proposal RVs are to be run
		- Serval run
			- TOI-3573
				- Excluded a couple orders at the end of blue arm that were pretty diffuse
				- Excluded a couple orders at the beginning of red arm that were pretty diffuse
	- GN-2025B-Q-123
		- Serval run
			- Ross 248
				- Removed /data10/MaroonX_spectra_reduced/20250914/20250914T091246Z_SOOOE_b_1800.hdf had very large error
				- Removed /data10/MaroonX_spectra_reduced/20250914/20250914T091246Z_SOOOE_r_1800.hdf slightly large error not as bad as blue arm
				- Bunch of orders where the template knots have the red dot go beyond the black line. But the ch2 dists look ok and it feels like too many to remove
			- Gl 12
				- Removed a couple orders on red arm
		- **Sent out initial look**
	- GN-2025B-Q-203
		- Serval run 
			- BD+19 451
		- **Sent out initial look**
	- GN-2025B-Q-207
		- Serval run
			- TOI-1408
				- Excluded a couple of orders in red arm that were somewhat off (not too bad
		- **Sent out initial look**
	- GN-2025B-Q-226
		- Serval run
			- TOI-3714
				- Removed a few orders in both red/blue arms with slightly off looking chi2 dists and larger errors in low orders
				- Already sent out
			- TOI-5205
				- Already sent out
	- GN-2025B-Q-407
		- **Sent out initial look**
## 2025-10-31
- Data reduction
	- Programs that seem to have some completed data
		- GN-2025B-LP-112 
			- Supernova observations but most seem to have been taken in October somehow?
			- Read the actual observations and they were taken on other instruments on GEMINI
		- GN-2025B-LP-211
			- There are a few stars with spectra
			- [x] #TODO Send out completed GN-2025B-LP-211 data  [due:: 2025-11-05]  [completion:: 2025-11-03]
		- GN-2025B- LP-212
			- 2/3 stars are completed
			- [x] #TODO Send out completed GN-2025B-LP-212 data  [due:: 2025-11-05]  [completion:: 2025-11-03]
		- GN-2025B-Q-102
			- 2/3 stars are completed
			- [x] #TODO Send out completed GN-2025B-Q-102 data  [due:: 2025-11-05]  [completion:: 2025-11-03]
		- GN-2025B-Q-108
			- 1/3 transits completed
			- [x] #TODO Send out completed GN-2025B-Q-108 data  [due:: 2025-11-05]  [completion:: 2025-11-03]
		- GN-2025B-Q-123
			- 2/3 stars are completed
			- Radial velocities needed
			- [x] #TODO Send out completed GN-2025B-Q-123 data  [due:: 2025-11-05]  [completion:: 2025-11-03]
		- GN-2025B-Q-203
			- 1/3 stars completed
			- Radial velocities needed
			- [x] #TODO Send out completed GN-2025B-Q-203 data  [due:: 2025-11-05]  [completion:: 2025-11-03]
		- GN-2025B-Q-207
			- 1/3 transits completed
			- Radial velocities needed
			- [x] #TODO Send out completed GN-2025B-Q-207 data  [due:: 2025-11-05]  [completion:: 2025-11-03]
		- GN-2025B-Q-226
			- 2/3 transits completed
			- Radial velocities needed
			- [x] #TODO Send out completed GN-2025B-Q-226 data  [due:: 2025-11-05]  [completion:: 2025-11-03]
		- GN-2025B-Q-407
			- 2/5 stars completed
			- [x] #TODO Send out completed GN-2025B-Q-407 data  [due:: 2025-11-05]  [completion:: 2025-11-03]
	- Martin DRAGONS reduction
		- For primitives just go through the source code for documentation
		- Make sure to download new build 
## 2025-10-30
- [x] #TODO Check if any of the data reduction programs have anything to be sent out  [due:: 2025-10-31]  [completion:: 2025-10-31]
	- Individual targets that are finished
	- Anything that looks complete
## 2025-10-29
- Run the pipeline on some new data
	- See if it works with the current pipeline or have to redownload the data
## 2025-10-28
- Using astrodata to look at fits files
	- Make sure to import maroonx-instruments
- Meeting with Martin
	- Repo (dev branch): [https://github.com/GeminiDRSoftware/MAROONXDR/tree/develop](https://urldefense.com/v3/__https://github.com/GeminiDRSoftware/MAROONXDR/tree/develop__;!!BpyFHLRN4TMTrA!-KNzLcdTJ-GgfqjsswQUUvzSGmmwUiQtykvlcRmZsM5PW2SvAsvtyVwZBe8LxR8Gb0wbgYoo-7W-TG26uktoJATG0Kjd$ "https://urldefense.com/v3/__https://github.com/GeminiDRSoftware/MAROONXDR/tree/develop__;!!BpyFHLRN4TMTrA!-KNzLcdTJ-GgfqjsswQUUvzSGmmwUiQtykvlcRmZsM5PW2SvAsvtyVwZBe8LxR8Gb0wbgYoo-7W-TG26uktoJATG0Kjd$")
	- Docs: [https://maroonxdr.readthedocs.io/latest/](https://urldefense.com/v3/__https://maroonxdr.readthedocs.io/latest/__;!!BpyFHLRN4TMTrA!-KNzLcdTJ-GgfqjsswQUUvzSGmmwUiQtykvlcRmZsM5PW2SvAsvtyVwZBe8LxR8Gb0wbgYoo-7W-TG26uktoJITyMdz1$ "https://urldefense.com/v3/__https://maroonxdr.readthedocs.io/latest/__;!!BpyFHLRN4TMTrA!-KNzLcdTJ-GgfqjsswQUUvzSGmmwUiQtykvlcRmZsM5PW2SvAsvtyVwZBe8LxR8Gb0wbgYoo-7W-TG26uktoJITyMdz1$")
## 2025-10-27
- Designing tests for the comparison with the auto data reduction 
- SERVAL run for GN-2025B-Q-226
	- Managed to get it all to run with to order exclusion basically filter rv and e_rv based off where there are nans in the *rv* for both
		- Orders get correctly filtered but rv/e_rv retain their nans
		- Sometimes e_rv has a nan when rv does not so just keep the rv rather than doing some even more complicated filtering
	- Also reran with combined as Jacob said: "These observations are “Rossiter-McLaughlin” observations. So each one is a continuous time series for a few hours during a transit. They don’t care about the orbits of the planets. They only care about the relative change during transit.""You could run the three visits of TOI-5205 together or separately. I could see advantages to both. Running them together should boost the S/N and help identifying and removing telluric lines. But if the star is active its intrinsic spectrum could change in a meaningful way between the visits, thus making the template more noisy when you combine all the data. If you think the data are low S/N I would actually lean towards running them together"
	- I'm going to just send out all options and explain and let the PI decide
		- combined
			- Blue good enough
			- Red good enough
		- 20250902 TOI-5205
			- Blue good enough
			- Red good enough
		- 20250820 TOI-5205
			- Blue good enough 
			- Red good enough
		- 20250802 TOI-5205
			- Blue too low SNR
			- Red good enough
		- TOI-3714
			- Blue good enough
			- Red good enough
## 2025-10-24
- Reducing LFC data for Ritvik
	- Initial issue with there not being fibers 2-4 for the wavelength. This was because I was still using the etalon wavelength solution file instead of `batch_science_spline_wls_dynamic.py`
- SERVAL run for GN-2025B-Q-226
	- Issue with the chi-2 plots being very weird and then the RVs on a per order basis having very high err8or
	- Tried removing the orders from the SERVAL run but that didn't work as when creating the plots it threw an error 
	- Asked Jacob and he said to run each transit separately since these are separate events
## 2025-10-20
- Reducing LFC data for Ritvik
	- Follow step 2-3 from method summary at the end of [Drift implementation doc](https://docs.google.com/document/d/1Hwwyws9UdNULAPtlCZFZbku3t25nLpCJKOZeJ5IWa0M/edit?tab=t.0) 
		- Use DLLLE 
		- Only red LFC
		- April, May, June, July
- HD3651 for all of 2025
	- hd5 x files
	- Fits
	- Package and send to Tanya
- When taking calibration
	- Go to fourth page where there are hearts and make sure they are green
## 2025-10-15
- Jacob meeting
	- Data reduction
		- Seems like it can be fully automated with something like Apache Airflow
			- This however is a bit overkill from what I see right now
			- If we want it to be fully automatic this could be an option
## 2025-10-14
- Automating data reduction
	- Finished the steps for downloading data and then reducing darks and flats 
		- Right now everything is done even if things have already been completed before
		- This is probably ok for these as generally there are catches in the scripts being called for this 
		- Also since the goal of this is just for the monthly reduction and if there has to be any re-reduction it will likely (?) be done without the entire pipeline
		- But some potential solutions to be implemented after:
			- Turn off each element of the pipeline
			- Check if there are finalized darks/flats where they should be
				- Then probably add a parameter to overwrite them if desired
	- Looked at using something like apache airflow but that seemed to be a bit overkill for what we are doing
		- But will ask Jacob tomorrow what he thinks
## 2025-10-08
- Juliet fitting
	- Fixed issue where juliet would break after adding two planets
		- Turns out the planets have to be ordered in ascending order based on their period
		- This is mentioned https://juliet.readthedocs.io/en/latest/user/priorsnparameters.html
		- Wrote a function that goes through the priors dictionary and makes sure that they are correctly labeled going from smallest to largest period so don't have to manually change the order I add planets
## 2025-10-07
- Meeting with ritvik
	- Can do either instrument by instrument GP or a global GP
		- Instrument doesn't make much sense for very small runs
		- Unless using multiple different instruments
		- Make sure to add "\_rv" to the GP parameters
			- If instrument by instrument it should say the instrument name
	- Juliet doesn't store GP information
		- If running a global GP
		- Remove the keplerian from it
		- The trend should be non existent if I'm removing that correctly so can just subtract out keplerian from full model to get GP
	- Plotting GP
		- Can't do instrument by instrument
	- Smaller planets not coming up
		- Not enough data points
		- Do full dataset from 2021
			- Have to do different offsets and fit specifically for 2024-2025
	- There are duplicate data points for 2024 where the same data is stored in different data mounts (data7 and data10) so they are just repeated
- Programs with observations completed (not already sent out)
	- LP-116
	- Q-121
	- Two transits of Q-226
- Serval
	- LP-116 
		- TOI 6008
			- Red looked fine
			- Blue was rerun with one observation removed that had high error in the RV
	- Q-226 
		- TOI-3714
			- Removed order 0 in blue
		- TOI-5205
- Sent out GN-2025B-Q-121
- Sent out GN-2025B-LP-116
- Bean meeting
	- AAS conference
		- Would be worth going to but not super
	- Automatic data reduction
		- Get into their next meeting about that
		- See about checking current progress with what is being done
	- Automation of planet finding? What are the main obstacles (assuming it's mainly tuning)
		- [x] #TODO Ask Madison about automation of finding planets and what makes it not feasible  [due:: 2025-10-09]  [completion:: 2025-10-09]
		- Starting point of knowledge
		- Calibrations differ
		- Sampling differs
	- Checking with current approach to juliet fitting
		- Use single slope with 2cm/s/day with error bar then fit for offsets between the three different groups
		- Everything else should be stellar activity
	- Potential paths to take with juliet fitting
## 2025-10-06
- Data reduction
	- No errors after fitting etalon and science
	- Finished wavelength solution 
	- Finished transferring solutions
	- Finished combining to one fiber
	- Finished barycentric correction
	- Finished pandas packaging
- Running SERVAL
	- Started for LP-116 (TOI 6008)
- Sent out GN-2025B-Q-119
## 2025-10-02
- Juliet fitting
	- Getting weird results with periods that don't match what ritvik finds and after 2 planets there are no longer an significant peaks in the periodogram
	- There also seems to be some issue with the GP so maybe that has something to do with it?
		- Can't figure out how to accurately plot it because what I can find is just a flat line at 0
		- But there are GP parameters so ig I could construct it myself? But asked ritvik and hopefully he can figure it out :D 
- Data reduction
	- Rerunning the darks for 08/31 didn't seem to fix the issue of there not being a dark. for 30 and 180 seconds
		- But there is one for 09/10 so I'll just use that and I'm sure it'll be ok there aren't many observations and it is still very close in time
	- Otherwise continued on with reducing the rest of the data
## 2025-10-01
- Data reduction
	- Started reducing September data
	- [x] #TODO Finish reducing full September data  [due:: 2025-10-08]  [completion:: 2025-10-07]
## 2025-09-29
- Finished 2025B programs
	- LP-116
	- First two transits Q-226 (one more remaining)
	- Q-119
- Ritvik issue with 2024 data
	- Looks like an issue with bary corr not being run
	- With it being run again (with notice taken to to extra parameter being added since it is pre 2025 data) seems to be corrected
		- Adjusting the month to get the most accurate exposure file (For February used march's since there isn't one for February)
		- Not 100% sure this is right but seems to make the most sense...
	- Not working for Struve 2398 A: Have less than 2 datapoints in FRD/PC seems to be the reason
		- 20240330
		- 20240331
		- 20240602
		- 20240628
	- Not working for Struve 2398 B seems like array of 0s for pc but the error comes from passing a nan to the astropy time function
		- 20240225
		- 20240227
		- 20240330
		- 20240510
		- 20240602
		- 20240623
		- 20240706
		- 20240725
## 2025-09-26
- How are elements done in simulations?
- Data reduction
	- Reducing August data
		- Finished fitting science frames
		- Finished wavelength solution
		- Finished transferring solutions
		- Finished combining to Fiber 6
		- Finished barycenter corrections
		- Finished pandas packaging
	- Reducing September data for GN-2025B-Q-204
		- Finished fitting etalon
		- Finished fitting science frames
		- Finished wavelength solution
		- Finished transferring solutions
		- Finished combining to Fiber 6
		- Finished barycenter correction for TOI-1420
		- Sent out
	- Running serval for GN-2025B-Q-204
		- HAT-P-18
			- Looks good except for one observation at 20250628
			- Will rerun without
		- TOI-1420
			- Overall looks good
			- One observation with decently high error at 20250714T12 relative to the others
			- Will run again without it just to see if it improves it
	- Ritvik having issues with Gl 725 A
		- Specifically with 2024 data and a `jd_utc` error
		- Not really sure what the issue is but will try to meet him monday 
## 2025-09-25
- Data reduction
	- Reducing August data
		- Finished etalon fitting for august
		- Started fitting science frames
		- [x] #TODO Let Ritvik know when August data reduction finishes  [due:: 2025-09-29]  [completion:: 2025-09-26]
	- Reducing September data
		- Finished reducing darks
		- Started reduction for just 1200s (requested for GN-2025B-Q-204)
		- Extracted etalon flux (up until 20250924)
		- Started fitting etalon
	- Teo said for syncing programs in Gemini just delete and readd the keys which is kinda annoying but hopefully it stays fixed otherwise will make a help desk ticket
- Read
	- [[lozovskyOrderingExoplanetSystems2025]]
## 2025-09-24
- Data reduction
	- Continued reduction for August
	- [x] #TODO Reduce data for GN-2025B-Q-204 including RVs  [due:: 2025-09-29]  [completion:: 2025-09-28]
		- Started this but still waiting for the darks for 20250910 and 20250920 to finish so I can run those weeks as well
		- Had to split up differently since we have darks more often. So now three separate runs for science flux extractions for the 0? 1? and \[2-3]? dates
	- When trying to sync some programs in Gemini OT it says I do not have access so asked Teo what's going on so hopefully that is fixed soon
## 2025-09-23
- Data reduction
	- Issues with reducing data for Andreas/Tanya
		- Some things I just forgot to do...
			- Have to do the reduction steps of 
				- Etalon flux extraction red and blue
				- Etalon fitting red and blue for all types
				- Wavelength and drift solutions red and blue
		- But apparently reducing the DLLLE frames thats currently not doable on the server according to Tanya
			- So she said she will just take care of it
			- But added the commands to [[MAROON-X Data Reduction]] that is done locally to reduce it
		- Also have to redo this for some reason as described for the reduction of darks, not all the files were on the server
	- Issues with reducing darks
		- Sometimes all the data isn't moved to the server
		- Wrote a script (that might already be written but I think mine is nicer) that moves data from the server for a given date or date range (within a month)
		- So I'll try running this before performing any reduction to ensure everything is there
		- But this seemed to solve the problem with the 1800s exposures not being there
	- Reducing August data
		- Finished science flux extraction
		- Finished etalon flux extraction
		- Waiting to finish etalon fitting of September weekend data before starting that
	- Etalon flux extraction
		- Don't flux extract with DLLL? now since that requires the extra subtraction step that is not present on the server right now so Tanya handles it
		- Split it up into DLLLD and DLLLL
	- Fitting etalons
		- Now don't do DLLLE since that is handled by Tanya for now
		- Don't have to fit an etalon to DLLLL or DLLLD because they don't have an etalon :D
## 2025-09-22
- What is a [[Hycean planet]]
- Data reduction
	- Something wrong with the dark reduction python script I wrote?
		- Something with not finding/creating the right files for 1800s exposure for 08/31 so have to look into that
		- Might have something to do with the times that the frames were taken?
			- For 08/17 all were at T22
			- For 08/31 only one was T22 and other two were at T05 and T11
		- Check function `get_files` in `reduce/extraction_utils.py`
## 2025-09-19
- Data reduction
	- Started reducing the flats for september since Andreas needs data from last weekend reduced
		- Realized there were some small errors in the commands I have saved for it where DDDDF files still had the fibers set to `2 3 4` which I realize directly corresponds to the Fs in DFFFD so I switched it to `5` for DDDDF command
		- Probably means I should rerun August's data but I'm going to wait until I finish this run to make sure I didn't miss anything else 
		- [x] #TODO Rerun August data reduction with corrected (and rereduced) August flat  [due:: 2025-09-29]  [completion:: 2025-09-26]
	- When reducing flats there was an inconsistency in `backgroundfit.py` when doing background subtraction
		- When looking for the master flats for FDDDF and DDDDF files it does a search for all the fits master flat files (masterflat, masterflat_median, masterflat_sigma, masterflat_sigma_diff)
		- 3 out of the 4 times it returned the masterflat file which I believe is expected result but the other time the first file was the masterflat_median resulting in a different result
		- To fix this I know search through all of the found files for the masterflat specifically
		- This is implemented in `zev_backgroundfit.py`
	- Found solution for when below occurs
		```
		qt.qpa.screen: QXcbConnection: Could not connect to display localhost:10.0
		
		Could not connect to any X display.
		```
		- `export DISPLAY=`
		- For some reason having it set to localhost can mess it up? Assuming this has to do with when multiple people have logged in as maroonx and switching up who is local
## 2025-09-18
- Meeting with Jacob
	- Ask about [[espinozaJulietVersatileModelling2019]] and photometry derivation
	- What are free offsets? page 3 [[basantFourSubEarthPlanets2025]]
	- Courses
		- Thinking about
			- Autumn: Auditing Stars
				- But would Exoplanets make more sense
			- Winter: Taking/Auditing Statistical Methods in Astrophysics
			- Spring: Taking/Auditing Galaxies
	- Working with GPs/Juliet
		- Access to Dune?
			- Ask Michael Jiang and ask for account
			- Also Midway and submit a request online RCC
	- Weird barycorr plots
- Fitting with juliet
	- Keep each observation as a separate instrument with different parameters
	- Have to fit with a GP otherwise will not work
	- Use a periodogram to get each signal to remove
	- Remove sequentially
	- What to do
		- Correct. for information offset
			- Up to and including 2023
				- There was an offset (most likely mainly etalon and mostly constant)
				- Need to fit for this offset (don't have to worry about constraining since periods are so short)
			- Starting in 2024
				- Need to model more since continuous
				- Roughly 2cm/s/day
				- [x] #TODO Reread Madison GJ12 https://arxiv.org/abs/2506.20561  [due:: 2025-09-22]  [completion:: 2025-09-24]
				- Look for discontinuities in the data stream
					- Instrument shouldn't have these but could be caused by alignment of fiber when frontend removed/readded
					- This should match up with that though and see if they match the discontinuities
					- [x] #TODO Ask Tanya for dates since 2024 when there could've been discontinuities in the data (instrument malfunction, earth quake)  [due:: 2025-09-29]  [completion:: 2025-09-29]
- [x] #TODO Reduce calibration frames from last weekend  [due:: 2025-09-23]  [completion:: 2025-09-24]
## 2025-09-17
- Read 
	- [[yalcinkayaTOI1743TOI5799TOI57992025]]
	- [[espinozaJWSTTSTDREAMSNIRSpec2025]]
## 2025-09-16
- Read
	- [[chaplinFilteringSolarlikeOscillations2019]]
## 2025-09-15
- Data reduction
	- Going through the Barycentric correction exposuremeter.pdf files
		- Go below zeropoint (?)
			- TOI-5205
			- TOI-4479
			- SPECULOOS-3
		- Outside guide lines
			- WASP-80
- Read
	- [[wilsonDeepKernelLearning2015]]
## 2025-09-10
- Running juliet
	- Fix from yesterday did not actually work
	- But was able to just create a conda environment instead since I could then use conda to install pymultinest and then use pip to install everything else
- Meeting with Tanya
	- [x] #TODO Send Tanya chi2 plot for UCAC2  [due:: 2025-09-11]  [completion:: 2025-09-11]
	- Went through how to take LFC calibration frames

## 2025-09-09
- Data Reduction
	- Got a request to send out data for GN-2025A-LP-112 even though it was marked in the sheet as sent out. Now not sure if all the data had been correctly sent out before?
		- Looks like it might be that they just sent out prior observations as they came in before and thats why it was marked as done (since this is a supernova observation program)
		- For future when I have programs like this might have a different color to indicate partial send out?
	- Took this chance to use new barycentric correction process to re-finalize all the data from July
- Read
	- Finished [[espinozaJulietVersatileModelling2019]]
	- [[basantFourSubEarthPlanets2025]]
- Running Juliet
	- Going through the tutorials now
	- Set up a [github](https://github.com/ZevVladimir/testing_GPs)
	- Having issues installing pymultinest which is unfortunate because it greatly speeds up the calculations (for one of the larger steps in the tutorial went from ~10min to ~10s)
	- Found people had the same [issue](https://github.com/nespinoza/juliet/issues/28) but the solutions there didn't seem to work
	- Then found another github [issue](https://github.com/JohannesBuchner/PyMultiNest/issues/267#issuecomment-2856072844) and added the following to `.zshrc`  and it seems to work now:
		```
		FC=$(which gfortran-14)
		CC=$(which gcc)
		CXX=$(which g++)
		```
- [x] #TODO Ask tanya to do cals when I am flying  [due:: 2025-09-11]  [completion:: 2025-09-11]
## 2025-09-08
- Read
	- [[zhaoImprovingEarthlikePlanet2024]]
	- Started [[espinozaJulietVersatileModelling2019]]
		- Very confused on photometry derivations 
- Data Reduction
	- Continued making progress and should finish today
	- Had a little trouble with barycentric correction process 
		- Hard to do a lot at once and keep track of which need to have coordinates used or to adjust the default PC and FRD values
		- Updated in the document a process that makes it easier to determine all files have been run and then runs a script on the logs to determine which ones need to be rerun for incorrect PC/FRD values
## 2025-09-08
- Read
	- [[horneOPTIMALEXTRACTIONALGORITHM1986]]
	- [[welschRoleMagneticReconnection2025]]
- Meeting
	- Ask about UCAC2
		- Chi2 looks bad
		- Just send out the results
			- Lower end of SNR
			- What we find for RVs doesn't really match what they were expecting to see
			- Bean also seemed to not expect that the two hot jupiters they were expecting to see (with such low periods) would be dynamically stable
	- Finished sending out 2025A data reduction results
		- Technically still have Q-408 but since it is a Band 4 proposal with time remaining based of what Teo said I can just leave it until it finishes or next semester since they might still do more observations
## 2025-09-05
- Data reduction
	- Finished science flux extractions
	- Finished etalon flux extractions
	- Started fitting etalon (blue)
	- When correcting the radial velocity for stars without RVs from SIMBAD added in the barycentric effect from the SERVAL csv output
## 2025-09-04
- Meeting with Jacob
	- Project
		- Start learning how to fit datasets with Juliet and other GP models
			- Fit what Basant 2025 does
			- See if I could understand the actual Juliet code
			- Look in the paper to see if there is a reparametrization of the problem
			- 
		- [x] #TODO Get example wavelength calibration from Tanya/Ritvik  [due:: 2025-09-08]  [completion:: 2025-09-05]
			- Wavelength vs pixel position in a single frame for the etalon for a few orders
			- See if a GP can fit it well?
				- Simple
				- Fast 
				- Robust (highest priority)
			- See how easy it is to pull out the 30 knot spline and see how it fits in
			- Ritvik tried PCHIP fitting 
	- Applications for Phd
		- [x] #TODO Send research statement that I had last year to Bean  [due:: 2025-09-05]  [completion:: 2025-09-05]
		- Research statement not that important
			- Lots of apps
			- He looked at
				- In a R1 university for physics
				- GPA
				- Take advanced classes
				- Do they have research experience
					- First author paper is a good signifier
				- Letters are very critical
				- Research statement last
					- Explain interest in astro and experience simply and easily to understand
					- What was interesting how you solved problems
					- what you want to be doing
					- More like a pass/fail
					- For top 3 schools say that they are the top 3 schools
			- Making connections
				- Have Benedikt get an introduction at the top universities I want to go to
				- Want Benedikt to tell them I'm special/have training
				- Then have me tel them that this school is in the top three
				- Probably don't to do now but do it around time of application submission
	- Applications for fellowships
		- See what NSF is looking for specifically in their requirements/language
		- Hertz is just a straight physics scholarship
			- Very in-depth physics questions, know your shit about fundamental physics
			- Can you think on your feet like a physicist
		- [x] #TODO Look for other fellowship options  [due:: 2025-09-12]  [completion:: 2025-09-12]
	- RV shift
		- Two things shifting RV the star and barycentric effect of observatory
		- Not sure what SErVAL is plotting 
		- So use the actual rest frame wavelength of Halpha for the calculation
			- Look at header of data file and see what the barycentric velocity is and subtract that off
		- [x] #TODO Implement more accurate RV shift from halpha (or just guess and check)  [due:: 2025-09-05]  [completion:: 2025-09-05]
- Data reduction
	- SERVAL
		- GN-2025A-Q-141
			- Sent out with email saying SERVAL results aren't great suggest looking for other alternatives
			- Don't think there is much more to do and don't want to keep them waiting too long
		- GN-2025A-Q-233 TOI-519
			- Trying to run SERVAL on data just before 20250401 since there was a problem with an etalon then and I think that might be messing up the data?
			- Now only 4 observations
			- For blue arm doesn't run because they aren't high enough SNR
			- For red arm there is 1 observation that makes the SNR cutoff so SERVAL makes no sense
			- I'll probably just send the email with the SERVAL results with April included since they look slightly better? And then just re-mention the issue with the etalon on April 1st and that the data before that had very low SNR
	- Having weird things happen with the science flux extractions
	- For the first two weeks
		- They seem to be going fine and then will freeze towards the end
		- Something like
		```
		2025-09-04 10:23:53,956 20250819T054419Z_SOOOE_r_0600 INFO     SNR in order 94: 30
		
		2025-09-04 10:23:53,956 20250819T054419Z_SOOOE_r_0600 INFO     Saved estimated SNRs in header
		DONE
		
		 98%|████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████▏    | 42/43 [46:50<01:00, 60.08s/it]
		```
		- Doesn't look like everything gets finished
			- I do ` ls 202508[0-1]?/*SOOOE*0600*.fits | wc -l ` in MaroonX_spectra and ` ls 202508[0-1]?/*SOOOE*0600*.hdf | wc -l` in MaroonX_spectra and they have different numbers of files
		- **FIX**: This was becasue there are too many files that were being reduced. because the first two weeks have 86 files which is more than the ~40 that is good
			- Trying it now and doing it by 20250813 with 20 and then I'll try 20250814 with ~60
			- For the second day did it color by color in order to again try and not overwhelm the server
	- For the second two weeks
		- It will get stuck towards the end with ` Could not connect to any X display ` 
		- Not sure why this is happening... occurs throughout the run but seems to do ok until the end where it hangs
		- Doesn't occur for the first two weeks and the only difference is the dates and darks used
		- **FIX** Just exited the byobu window and went back in and seems like it is working now
## 2025-09-03
- For stellar activity lines that aren't centered in SERVAL
	- EX Q322 where SIMBAD doesn't have the RV
	- Calculate RV by hand and input that into SERVAL
	- Best to do this with $H\alpha$ and use centroiding?
	- Figuring out how to do this...
		- $v=c \dfrac{\Delta\lambda}{\lambda_{0}}$
			- $\Delta\lambda=\lambda_{obs}-\lambda_{0}$
			- $\lambda_{obs}$ is the observed wavelength
			- $\lambda_{0}$ is the expected wavelength
		- Wrote a scipt that goes through the spectrum for all the files and finds the peak for Halpha
		- But it doesn't look like there is a way to get what SERVAL thinks the wavlegnth is in order to get $\Delta\lambda$
		- However for Q322's TOI-5799 it looks like there is an RV in SIMBAD under another name
			- I just manually put the RV in and will see if that works
			- But I think in the future I can put in the name SIMBAD has it for
## 2025-09-02
- Data reduction
	- Wrote a script for reducing darks in mxred at `~/Repos/maroonx_reduce/reduce/recipes/zev_full_dark_reduce.py`
		- Automates the process of reducing the darks all you have to do is supply as an argument the date the darks were taken like 20250806 and it does all the steps
	- Reduced the darks for August
	- Reduced the flats for August
## 2025-08-29
- Data reduction
	- Ran for Dr. Narita 2022A-Q-104, GN-2022B-Q-102, and GN-2024A-Q-202 together through SERVAL for TOI-2094
- Read
	- [[bluhmPreciseMassRadius2020]]
	- [[forestanoSupervisedMachineLearning2025]]
	- [[sodicksonSearchDecayAnalysis2025]]
## 2025-08-28
- Data reduction
	- Was able to upload the data I had already packaged since Andreas told me what to do to reactivate Filezilla and updated data reduction page with that
	- Still waiting for his responses about the weird SERVAL results
- Read
	- [[delisleEfficientModelingCorrelated2022]]
	- [[picosChemicalEvolutionImprints2025]]
	- [[alzateCoronalCellsCoronal2025]]
	- [[onionsLifeTimesDark2025]]
	- [[grunblattDETERMININGMASSKEPLER78b2015]]
## 2025-08-27
- Data reduction
	- Look into just using a command line command instead of Filezilla
- Read
	-  [[gilbertsonExtremelyPreciseRadial2020]]
## 2025-08-26
- Read
	- [[petersburgExtremeprecisionRadialvelocityPipeline2020]]
	- [[rubenzahlStaringSunKeck2023]]
	- [[trifonovNearbyTransitingRocky2021]]
	- [[ihRockyPlanetsStars2025]]
- Data reduction
	- Q-322
		- TOI-5388
			- Got a similar error to Q-233 where it said fiber6 doesn't exist
			- This was because of the data from 2025/03/31 which now know had issues with
			- Simply removed that file from the list and SERVAL is currently running
			- SERVAL plots
				- General plots look good
				- Stellar activity does look misaligned however
		- TOI-5799
			- Started running SERVAL
			- SERVAL plots
				- General plots look good
				- Stellar activity does look misaligned however
	- Q-233 **TOI-519**  
		- When I try to run SERVAL there is an issue with the observations for 2025/04/01
			- See this in the logs where it goes through the data from march fine and then the rest of the data is for this April date
		```
		[2025-08-26 10:18:12,771 - Logger] - INFO - 0
		[2025-08-26 10:18:13,885 - Logger] - INFO - 1
		[2025-08-26 10:18:14,174 - Logger] - INFO - 2
		[2025-08-26 10:18:14,585 - Logger] - INFO - 3
		[2025-08-26 10:18:14,881 - Logger] - INFO - 4
		Traceback (most recent call last):
		  File "maroonxserval.py", line 156, in <module>
		    brvref=args.brvref,vref=args.vref)
		  File "/home/maroonx/Repos/serval3_maroonx/src/serval_help.py", line 638, in read_spectra
		    vref=vref
		  File "/home/maroonx/Repos/serval3_maroonx/src/sspectrum.py", line 62, in __init__
		    vref=vref)
		  File "/home/maroonx/Repos/serval3_maroonx/src/read_spec.py", line 75, in __init__
		    self.read_spec(filename, inst_config=inst_config, pfits=pfits, verb=verb)   # scan fits header
		  File "/home/maroonx/Repos/serval3_maroonx/src/read_spec.py", line 230, in read_spec
		    sp = self.read_maroonxcoadd(s, inst_config=inst_config,**kwargs)
		  File "/home/maroonx/Repos/serval3_maroonx/src/read_spec.py", line 631, in read_maroonxcoadd
		    w = np.vstack([hdf['wavelengths'][fk][o] for o in oabs_list]) * 10.0  # nm to A
		  File "/home/maroonx/Repos/serval3_maroonx/src/read_spec.py", line 631, in <listcomp>
		    w = np.vstack([hdf['wavelengths'][fk][o] for o in oabs_list]) * 10.0  # nm to A
		  File "h5py/_objects.pyx", line 54, in h5py._objects.with_phil.wrapper
		  File "h5py/_objects.pyx", line 55, in h5py._objects.with_phil.wrapper
		  File "/home/maroonx/anaconda3/envs/serval3_maroonx/lib/python3.7/site-packages/h5py/_hl/group.py", line 264, in __getitem__
		    oid = h5o.open(self.id, self._e(name), lapl=self._lapl)
		  File "h5py/_objects.pyx", line 54, in h5py._objects.with_phil.wrapper
		  File "h5py/_objects.pyx", line 55, in h5py._objects.with_phil.wrapper
		  File "h5py/h5o.pyx", line 190, in h5py.h5o.open
		KeyError: "Unable to open object (object 'fiber_6' doesn't exist)"
		```
		- I tried rerunning the steps from combine to fiber 6 onwards for this data and didn't run into any errors while doing that but SERVAL threw the same error
		- I saw on the data reduction log Nina had left a comment that "etalon burnout -- already reduced-ish" 
		- Again asked Andreas if he had any suggestsions
	- Q-136 **UCAC2 33444340**
		- Looking at the output files the radial velocities are extremely high
		- Try and remove the dates that seem like outliers, basically did anything >400m/s
		- Didn't actually do much think just overall the RVs are crazy high
		- Asked Andreas if he had any suggestions
		```
		/data10/MaroonX_spectra_reduced/20250323/20250323T143201Z_SOOOE_r_0900.hdf
		--/data10/MaroonX_spectra_reduced/20250326/20250326T153514Z_SOOOE_r_0900.hdf--
		/data10/MaroonX_spectra_reduced/20250329/20250329T150108Z_SOOOE_r_0900.hdf
		--/data10/MaroonX_spectra_reduced/20250408/20250408T151121Z_SOOOE_r_0900.hdf--
		/data10/MaroonX_spectra_reduced/20250420/20250420T124533Z_SOOOE_r_0900.hdf
		/data10/MaroonX_spectra_reduced/20250424/20250424T142942Z_SOOOE_r_0900.hdf
		/data10/MaroonX_spectra_reduced/20250426/20250426T134820Z_SOOOE_r_0900.hdf
		/data10/MaroonX_spectra_reduced/20250501/20250501T134448Z_SOOOE_r_0900.hdf
		/data10/MaroonX_spectra_reduced/20250507/20250507T121856Z_SOOOE_r_0900.hdf
		/data10/MaroonX_spectra_reduced/20250508/20250508T123845Z_SOOOE_r_0900.hdf
		/data10/MaroonX_spectra_reduced/20250516/20250516T143056Z_SOOOE_r_0900.hdf
		/data10/MaroonX_spectra_reduced/20250520/20250520T122031Z_SOOOE_r_0900.hdf
		/data10/MaroonX_spectra_reduced/20250524/20250524T125014Z_SOOOE_r_0900.hdf
		/data10/MaroonX_spectra_reduced/20250529/20250529T101411Z_SOOOE_r_0900.hdf
		/data10/MaroonX_spectra_reduced/20250601/20250601T091613Z_SOOOE_r_0900.hdf
		/data10/MaroonX_spectra_reduced/20250605/20250605T090921Z_SOOOE_r_0900.hdf
		```
		- Similarly for the blue 
```
/data10/MaroonX_spectra_reduced/20250323/20250323T143201Z_SOOOE_b_0900.hdf
--/data10/MaroonX_spectra_reduced/20250326/20250326T153514Z_SOOOE_b_0900.hdf--
/data10/MaroonX_spectra_reduced/20250329/20250329T150108Z_SOOOE_b_0900.hdf
/data10/MaroonX_spectra_reduced/20250408/20250408T151121Z_SOOOE_b_0900.hdf
/data10/MaroonX_spectra_reduced/20250420/20250420T124533Z_SOOOE_b_0900.hdf
/data10/MaroonX_spectra_reduced/20250424/20250424T142942Z_SOOOE_b_0900.hdf
/data10/MaroonX_spectra_reduced/20250426/20250426T134820Z_SOOOE_b_0900.hdf
/data10/MaroonX_spectra_reduced/20250501/20250501T134448Z_SOOOE_b_0900.hdf
/data10/MaroonX_spectra_reduced/20250507/20250507T121856Z_SOOOE_b_0900.hdf
/data10/MaroonX_spectra_reduced/20250508/20250508T123845Z_SOOOE_b_0900.hdf
/data10/MaroonX_spectra_reduced/20250516/20250516T143056Z_SOOOE_b_0900.hdf
/data10/MaroonX_spectra_reduced/20250520/20250520T122031Z_SOOOE_b_0900.hdf
/data10/MaroonX_spectra_reduced/20250524/20250524T125014Z_SOOOE_b_0900.hdf
/data10/MaroonX_spectra_reduced/20250529/20250529T101411Z_SOOOE_b_0900.hdf
/data10/MaroonX_spectra_reduced/20250601/20250601T091613Z_SOOOE_b_0900.hdf
/data10/MaroonX_spectra_reduced/20250605/20250605T090921Z_SOOOE_b_0900.hdf
```
## 2025-08-25
- Data reduction
	- Q-101
		- Think the issue was that I had did the steps of the packaging wrong. The list should have x files not r files
		- Re did all the steps for the packaging and it worked fine (ig it could have been something I reran but kinda doubt it tbh)
		- Sent out data
	- Q-243
		- Packaged up the data
		- Couldn't upload it to box because filezilla is just not working from home on either the mac or the desktop...
		- [x] #TODO Upload packaged Q-243 data  [due:: 2025-08-28]  [completion:: 2025-08-28]
	- Q-109
		- Ran SERVAL on the stars that had observations (TOI-5747, GJ-3929 b)
		- Packaged up the data
		- Again still need to upload it to box for same reason as Q-243
		- [x] #TODO Upload packaged Q-109 data to box  [due:: 2025-08-28]  [completion:: 2025-08-28]
	- Q-119
		- Packaged up the data
		- Again still need to upload it to box for same reason as Q-243
		- [x] #TODO Upload packaged Q-119 data to box  [due:: 2025-08-28]  [completion:: 2025-08-28]
	- Q-136
		- Started running SERVAL
			- Chi2 look pretty bad so have to debug that
		- [x] #TODO Look at why Q-136 UCAC2-33444340 chi2 is so bad  [due:: 2025-08-26]  [completion:: 2025-08-27]
	- Q-216
		- Packaged up the data
		- Again still need to upload it to box for same reason as Q-243
		- [x] #TODO Upload packaged Q-216 data to box  [due:: 2025-08-28]  [completion:: 2025-08-28]
	- Q-233
		- Started running SERVAL
			- Ran into error... will debug tomrorow
## 2025-08-22
- Data reduction
	- FT-209
		- Ran SERVAL on results
		- Checked SERVAL output and all looks good
	- Q-101
		- Started packaging results since didn't need SERVAL run
		- But seems like the 1850 exposure for the red arm was not reduced so reducing that now
		- When reducing data for 202503 running into issues with transferring the wavelength solutions to the science frames
		```
		multiprocessing.pool.RemoteTraceback: 
		Traceback (most recent call last):
		  File "/home/maroonx/anaconda3/lib/python3.7/multiprocessing/pool.py", line 121, in worker
		    result = (True, func(*args, **kwds))
		  File "/home/maroonx/anaconda3/lib/python3.7/multiprocessing/pool.py", line 44, in mapstar
		    return list(map(*args))
		  File "/home/maroonx/anaconda3/lib/python3.7/site-packages/parmap/parmap.py", line 105, in _func_star_single
		    **func_item_args[3])
		  File "analyze/recipes/batch_science_spline_wls_dynamic.py", line 53, in work
		    fit_and_apply_etalon_wls(param_file, etalon_file, file,p=p,symmetric_linefits=symmetric_linefits)
		  File "/home/maroonx/Repos/maroonx_reduce/analyze/recipes/etalon_spline_wls_dynamic.py", line 262, in fit_and_apply_etalon_wls
		    shift = x.loc[:] - x_ref.loc[:].reindex(x.loc[:].index, method="nearest", tolerance=0.5)
		AttributeError: 'numpy.float64' object has no attribute 'loc'
		
		"""
		The above exception was the direct cause of the following exception:
		Traceback (most recent call last):
		  File "analyze/recipes/batch_science_spline_wls_dynamic.py", line 127, in <module>
		    pm_pbar=True)
		  File "/home/maroonx/anaconda3/lib/python3.7/site-packages/parmap/parmap.py", line 304, in map
		    return _map_or_starmap(function, iterable, args, kwargs, "map")
		  File "/home/maroonx/anaconda3/lib/python3.7/site-packages/parmap/parmap.py", line 282, in _map_or_starmap
		    output = result.get()
		  File "/home/maroonx/anaconda3/lib/python3.7/multiprocessing/pool.py", line 657, in get
		    raise self._value
		AttributeError: 'numpy.float64' object has no attribute 'loc'
		```
		- So far have tried rerunning `PYTHONPATH=${PWD} python analyze/recipes/batch_etalon_spline_wls.py -d '202503??' -c 'r' -m True -dd /data10/MaroonX_spectra_reduced/ -o 'DEEEE' ; curl -H "Priority: 4" -d "wavelength and drift solutions finished" https://ntfy.sh/MAROON-X` for red and blue but still the same issue.
		- Will try rerunning the etalon fit first now
			- Still waiting on DLLLE and DEEEE (running blue now and then have to run red)

## 2025-08-21
- Meeting with Teo about Gemini OT
	- If run out of allocated time then the program is done
	- Usable observation means not quite enough signal as requested but could be good for something else
		- Good to still reduce and just let PI know
	- Always two guiding
		- P2 guiding is rough guiding
		- Then fine tuning is done by MAROON-X tilt mirror
		- Can look at image to see where the coordinates are (yellow) and then with proper motion taken into account (green circle)
	- Look at Phase II filing 
		- If says stop program after allocated time then it fully stops
		- If it just says keep observing then they can keep going
	- Check notes for usable observations to see what went wrong
		- These observations are then re-added with a replacement observation
	- Can check plot button to see how timing window fits in during the night
		- Change date by going to view then date and select date of observation
	- Programs can't run over to new semesters
		- Except for FT and Band 4 programs
			- FT programs all have a 3 month cycle and could over run a semester
			- FT can also finish before their cycle but can always just wait
			- Band 4 from 25A could still be moved over to 25B since observations could be useful and something like Q409 can still be used as a calibrator
		- But even for these won't get rolled over 2 semester
	- So like for now wait 1 day until after 2025 A and then start reducing for regular programs
	- Band 4 are poor weather programs
		- Easy to get but need to be ok with bad weather
	- Rules if reduce
		- If from 2 semesters or everything is black and is filled to allocated time then it is done
		- If still pending observations wait or email Teo (mainly tricky for band 4 otherwise they end after their semester)
				- If labeled as underfilled could still have observations added later so best to leave for later
- Wrote a bash script that automates the reduction of LFC darks
	- Otherwise very tedious and have to do it day by day and color by color
	- Script simply takes what year and month (and a potential regex expression for days if not all days wanted)
	- Then for each day and each color creates the list of files and then calls the python script to reduce it
- Meeting with Bean
	- Wavelength calibration
		- 2 calibrations for 4 fibers 2-5
		- Make a wavelength solution for each order for each fiber
		- Then during the night on fiber 5 and then see the drift and assume it is the same for 2-4
		- Make a function that says for each pixel whats the wavelength based off finding the center of wavelength you know
		- Every 10 pixels there is a line (4000 pixels 400 lines)
			- Can plot pixel position vs wavelength
		- But there are places on the detector where there are residuals that remain and now are in a pattern which is weird
		- Spline isn't good at identifying outliers and doesn't have the right level of complexity and no uncertainty
		- Look at what the rms of the lines over the whole detector based off the fitting function
			- Lower is better but no sense of the importance of the number
			- Could maybe calculate the importance?
		- How to get the drift from the daily calibration
			- Should be small $\Delta$
			- Don't want to do full wavelength solution on every fiber 5 since instrument hasn't changed so much
			- So use line differences and fit a simpler function to that instead on top of the big 30 knot spline solution
		- LFC doesn't track the same as the etalon
			- Etalon stays roughly the same on hourly time scales
			- But LFC be moving a lot and it varies how much
				- Tied to operational issues with LFC software or hardware
				- Adding variability from optics or injection of light affecting noise
			- Want LFC to be able to tell how the etalon is changing in time
				- LFC is noisy but systematically ok
				- Etalon is not noisy but systematically not ok
		- None of the orders are tied together
			- Some instruments use a 2D function
	- Take an order of LFC or etalon information and then try to fit with a Gaussian process
		- Don't want too flexible especially at the ends of the order
	- Some papers to read about handling of wavelength solutions in other instruments
		- [[petersburgExtremeprecisionRadialvelocityPipeline2020]]
		- [[schmidtFundamentalPhysicsESPRESSO2021]]
		- [[rubenzahlStaringSunKeck2023]]
## 2025-08-20
- Finished [[haraStatisticalModelStellar2025]]
- Data reduction
	- [x] #TODO Figure out what is wrong with Ritvik's SERVAL run (or ask Andreas)  [due:: 2025-08-21]  [completion:: 2025-08-21]
	- 2025A-Q-141
		- SERVAL was unable to run for the blue arm of **LP 788-1,** **WIS 0720-0846 AB,**  and **GJ 1215** due to the observations having too low SNR
		- **LP 848-50** only had 1 observation, so unable to run SERVAL on either arm.
		- Similarly **LHS 6167 AB** only had 2 observations and didn't run SERVAL 
		- **WT 1827 AB** was able to be run on both arms.
	- 2024B-Q-415
		- Only one observation and the program is finished
		- Asked Andreas if just send out the data with an apology since can't run SERVAL on that... **Yes**
	- 2025A-Q-243
		- Has 3+ observations
			- Gaia DR3 1749013354127453696
		- Only has 2 observations
			- Gaia DR3 809741149368202752
			- Gaia DR3 1854241667792418304
			- Gaia DR3 747174436620510976
		- Only has 1 observation
			- Gaia DR3 1581117310088807552 
			- Gaia DR3 1702370142434513152
			- Gaia DR3 1965342674912210176
			- UCAC4 779-023817
	- From Teo
		- Can see which programs are complete in OT (don't just look at the observations) but I don't see that option for me
		- Will see when he responds and will try and setup a meeting to learn how to effectively use OT
## 2025-08-19
- Data Reduction
	- Emailed Teo to better understand what is displayed in OT 
		- Don't know if all observations are finished or if/when more observations will be taken for a few of the projects
		- Want to wait for that so that I can do the full reduction at once if possible
- Gaussian processes
	- Read
		- [[damianouDeepGaussianProcesses2013]]
		- [[nicholsonQuasiperiodicGaussianProcesses2022]]
		- [[hintonUsingDeepBelief2007]]
			- Probably not really applicable to what I'm looking for since it is designed for "high dimensional, highly structured data, it is an effective way to make use of a large unlabeled data set"
				- RV data is not high dimensional (1D time series)
				- RV data is not really highly structured
					- The underlying data is relatively simple (keplerian orbits)
					- More a noisy dataset than one with complex structure
				- Not really a labeling problem?
		- [[luoTestingCosmicDistance2025]]
			- Seems like an interesting approach that hasn't been done yet for exoplanets?
			- Could potentially provide more insight into what is going on if the generated mean and covariance functions are interpretable
		- [[haraStatisticalModelStellar2025]]
## 2025-08-18
- Met with Tanya about taking cals notes are in [[MAROON-X Data Reduction]]
- Data Reduction
	- Running the pandas export step for the months that hadn't been run (up to March)
	- Going through the programs to identify which are ready to be sent out
	- Q-106
		- Differing slopes in the red vs blue arms for the RV data. Apparently occurred before in their last program but wanted to confirm it was ok. Confirmed ok probably just because taking observations of sun like stars
		- ![[RV_plot_HD 126053.png]]
		- ![[RV_plot_HD 157347.png]]
## 2025-08-15
- Read
	- [[stockCARMENESSearchExoplanets2020]]
- Data reduction
	- Updated the [[MAROON-X Data Reduction]] page and fixed a mistype that said for the transferring solutions step to only do on DEEE when it should only be SOOOE
	- Updated formatting a little and moved in all the links Nina sent to corresponding sections
	- Went through week 1 of the 1800s blue data since that was missed as well. Now have a new command written in the doc that will help checking that there are the same number of hdf files as there were of raw fits
	- Got through Q-106 and getting it ready to submit
		- Had another couple snags that weren't too hard to figure out but added to file
		- Waiting for Nina to confirm by end of day to send out 
		- [x] #TODO Send out Q-106 data  [priority:: high]  [due:: 2025-08-18]  [completion:: 2025-08-18]
## 2025-08-14
- Read 
	- [[stockGaussianProcessesRadial2023]]
	- [[angusInferringProbabilisticStellar2018]]
- Data reduction for July
	- Sending out data for GN-2025A-FT-215 but ran into some issues
		- Looks like I didn't run 1800s blue for at least the first two weeks of July on the Science data??
		- Not sure how that happened since I marked it off on the spreadsheet so should probably have some better check for that or pay more attention
		- But now rerunning the process for that data
		- Otherwise relatively easy to package up information and added those steps to the [[MAROON-X Data Reduction]] page
## 2025-08-13
- Data reduction for July
	- For the planet that didn't show up it does exist and to check look at https://exofop.ipac.caltech.edu/tess/
	- Having an issue with the 600 second exposure hdf5 files being seen as open when trying to run something like `hdf_header.py -dd '/data10/MaroonX_spectra_reduced/202507*/' -f '202507*SOOOE*_b_0600.hdf' -ff "TARGETNAME=TYC 2799-825-1" > 	TYC2799-825-1_2025BJul_blue.lis`
		- Can theoretically just clear the hdf5 flags but want to check and make sure its ok and won't lead to file corruption or something
	- Otherwise finished running all other data through SERVAL
- Meeting with Nina
	- Look at SERVAL results for 
		- HD3651 spectra sigma clipping
			- Clipping on sides is ok
		- Ross 248 red knots order 8, 15, 25
			- Ask Andreas
		- TOI6034 blue order zero looks really bad. Then lots of sigma clipping
			- Can rerun SERVAL --o_exl and then exclude orders 0,1
		- TOI7265
	- Packaging data
		- MAROON-X external programs spreadsheet for keeping track of status of data and what has to be sent out
		- Byobu mxred 16? maybe 14
		- Prioritize people who email and FT and LP programs
		- For low signal programs tell PI SERVAL doesn't work well with this data try with an alternative method
		- convert_serval_to_hd5
			- Trims the data and converts hdf to hd5 and uses an x instead of r/b
		- tar the files together
		- Then zip the tarfile with gzip
		- Then package up the fits file
			-  in f15 byobu
			- dfits 
			- trim_dfits.sh
			- after fits list use convert_fits_to_logs
			- tar
			- gzip
		-  tar and zip up Serval info
			- tar the files `tar -cvf` tar files you want and then just hte folder name (before for a list use -T)
			- gzip 
			- Add in name SERVAL to it
		- Add the flats (calibration) files
			- MaroonX_spectra_reduced master frames
			- Once a month and the hd5 file
		- Add the plot_pandas_spec.py file
			- Add the first hd5 file for the file name
		- Add all of these to Box drive
			- Create folder under MAROON-X with program name and star
			- Then use filezilla which moves the zipped file to box
				- Might need box server info?
		- Have an email template
- Reading
	- Finished [[lugerMappingStellarSurfaces2021]]
	- Started [[stockGaussianProcessesRadial2023]]
## 2025-08-12
- Running Serval
	- on mxred
	- SERVAL with 3 or less observations it isn't worth running unless someone really wants
	- Create separate input lists for red and blue arm
	- /Repos/Serval3_maroonx/src
	- Conda activate 
	- Specify date range in naming
	- After running:
		- Check chi squared map to make sure it looks nice and neat/clean want the minimum to be in the middle
			- #Question for Andreas or maybe Madison what to do
		- Correlation plots
			- Don't want correlation between RV and dLW or crx
		- Binned: shortened and observations below certain levels will be clipped but unbinned doesn't clip anything
		- RV vs wavlength
			- Make sure there isn't one order that is throwing everything off
		- Template knots
			- Make sure line with red dot is before other line
		- Combined template spectra per order
			- Make sure spectra doesn't look really wrong
			- Make sure black points are along spectra
			- Having ~5 sigma clipped fine but if having a bunch in every frame thats an issue
				- To fix ask Andreas if change sigma clipping or upper signal to noise
		- Stellar activity indicators: H alpha in both arms and Calcium in blue and sodium doublets in red
			- Make sure they are centered
	- Only run SERVAL for programs that request and for the calibration stars
- Program names:
	- FT: fast turnaround
	- Q: normal program
	- 100-400 is the priority
	- LP: Large and long Programs
	- DB: Directors discretionary (priority)
	- CAL: Calibration program
- Read 
	- [[haraStatisticalMethodsExoplanet2023]]
	- [[lugerStarry_processInterpretableGaussian2021]]
	- Started [[lugerMappingStellarSurfaces2021]]
- Data reduction for July
	- Started running SERVAL on the targets that require it
		- More detail found in notes above for toady about running SERVAL and in [[MAROON-X Data Reduction]] steps 15-17
	- Splitting up the DLLL\[LE] etalon fitting into DLLLE and DLLLL could help speed it up since DLLLD ran a lot faster than that did and it shouldn't really use more resources
	- #Question Weird errors in etalon fitting not mentioned in [[MAROON-X Outputs and Quality Control.pdf]] 
	1. Peaks failing besides the ones that were mentioned in the Quality Control document. There are a few I didn't include here because they were pretty close to these values. But these occurred across a range of files and both DLLLL and DLLLE
```
20250705/20250705T164128Z_DLLLE_r_0004_etalon_peakfit.log:2025-08-11 17:18:35,379 - etalon_positions.fit - ERROR - Failed fitting peak at 2765.057802548435.
20250708/20250708T161138Z_DLLLL_r_0004_etalon_peakfit.log:2025-08-11 19:46:31,578 - etalon_positions.fit - ERROR - Failed fitting peak at 3091.980707552735.
20250710/20250710T160957Z_DLLLL_b_0005_etalon_peakfit.log:2025-08-11 14:31:13,746 - etalon_positions.fit - ERROR - Failed fitting peak at 75.21563829515487.
20250711/20250711T162158Z_DLLLE_b_0010_etalon_peakfit.log:2025-08-11 16:38:06,789 - etalon_positions.fit - ERROR - Failed fitting peak at 2146.5734869438643.
20250711/20250711T162158Z_DLLLE_b_0010_etalon_peakfit.log:2025-08-11 16:39:14,124 - etalon_positions.fit - ERROR - Failed fitting peak at 2468.957240649932.
20250716/20250716T025509Z_DLLLL_b_0005_etalon_peakfit.log:2025-08-11 20:15:00,271 - etalon_positions.fit - ERROR - Failed fitting peak at 3790.859000678875.
20250716/20250716T030616Z_DLLLE_b_0010_etalon_peakfit.log:2025-08-11 20:49:29,646 - etalon_positions.fit - ERROR - Failed fitting peak at 130.01986709873518.
20250718/20250718T025647Z_DLLLL_b_0005_etalon_peakfit.log:2025-08-11 22:54:31,936 - etalon_positions.fit - ERROR - Failed fitting peak at 181.34301765989818.
20250718/20250718T163417Z_DLLLL_b_0005_etalon_peakfit.log:2025-08-11 23:27:23,389 - etalon_positions.fit - ERROR - Failed fitting peak at 552.4301813635811.
```
**Answer:** Blue LFC frames don't have a set exposure time so too high/low flux can lead to peak fit errors so not that concerning. Andreas didn't see anything conclusive but nothing to do for now
2. There were a couple fails for the blue frames with orders 115, 116, and 117. In the Quality Control doc it says >117 so I wanted to bring this up even though these are close to that value. Here are a few of them but there are a some more but they look similar for DLLLL and DLLLE. The errors for order 15 were only for the file I have below (20250720/20250720T162118Z_DLLLL_b_0005) and the only DLLLD errors are also shown below (20250719T024221Z_DLLLD_b and 20250720T163220Z_DLLLD_b).  

```
20250720/20250720T163056Z_DLLLE_b_0010_etalon_peakfit.log:2025-08-12 02:12:39,310 - etalon_positions - ERROR - Failed fitting: 3/116 (Error fitting polynomials: Amplitudes, sigma or width was < 0)

20250720/20250720T162118Z_DLLLL_b_0005_etalon_peakfit.log:2025-08-12 01:41:34,366 - etalon_positions - ERROR - Failed fitting: 2/115 (Error fitting polynomials: Amplitudes, sigma or width was < 0)
20250720/20250720T162118Z_DLLLL_b_0005_etalon_peakfit.log:2025-08-12 01:41:34,366 - etalon_positions - ERROR - Failed fitting: 3/115 (Error fitting polynomials: Amplitudes, sigma or width was < 0)
20250720/20250720T162118Z_DLLLL_b_0005_etalon_peakfit.log:2025-08-12 01:41:34,366 - etalon_positions - ERROR - Failed fitting: 4/115 (Error fitting polynomials: Amplitudes, sigma or width was < 0)
20250720/20250720T162118Z_DLLLL_b_0005_etalon_peakfit.log:2025-08-12 01:41:34,366 - etalon_positions - ERROR - Failed fitting: 5/115 (Error fitting polynomials: Amplitudes, sigma or width was < 0)

20250725/20250725T021902Z_DLLLL_b_0005_etalon_peakfit.log:2025-08-12 07:22:47,718 - etalon_positions - ERROR - Failed fitting: 2/116 (Error fitting polynomials: Amplitudes, sigma or width was < 0)
20250725/20250725T021902Z_DLLLL_b_0005_etalon_peakfit.log:2025-08-12 07:22:47,718 - etalon_positions - ERROR - Failed fitting: 5/116 (Error fitting polynomials: Amplitudes, sigma or width was < 0)
20250725/20250725T021902Z_DLLLL_b_0005_etalon_peakfit.log:2025-08-12 07:22:47,718 - etalon_positions - ERROR - Failed fitting: 4/116 (Error fitting polynomials: Amplitudes, sigma or width was < 0)

20250721/20250721T031222Z_DLLLL_b_0005_etalon_peakfit.log:2025-08-12 02:18:46,929 - etalon_positions - ERROR - Failed fitting: 3/117 (Error fitting polynomials: Amplitudes, sigma or width was < 0)
20250721/20250721T031222Z_DLLLL_b_0005_etalon_peakfit.log:2025-08-12 02:18:46,930 - etalon_positions - ERROR - Failed fitting: 2/117 (Error fitting polynomials: Amplitudes, sigma or width was < 0)
20250721/20250721T031222Z_DLLLL_b_0005_etalon_peakfit.log:2025-08-12 02:18:46,930 - etalon_positions - ERROR - Failed fitting: 4/117 (Error fitting polynomials: Amplitudes, sigma or width was < 0)
20250721/20250721T031222Z_DLLLL_b_0005_etalon_peakfit.log:2025-08-12 02:18:46,930 - etalon_positions - ERROR - Failed fitting: 5/117 (Error fitting polynomials: Amplitudes, sigma or width was < 0)

20250719/20250719T024221Z_DLLLD_b_0010_etalon_peakfit.log:2025-08-11 15:38:37,689 - etalon_positions - ERROR - Failed fitting: 3/117 (Error fitting polynomials: Amplitudes, sigma or width was < 0)
20250719/20250719T024221Z_DLLLD_b_0010_etalon_peakfit.log:2025-08-11 15:38:37,689 - etalon_positions - ERROR - Failed fitting: 2/117 (Error fitting polynomials: Amplitudes, sigma or width was < 0)
20250719/20250719T024221Z_DLLLD_b_0010_etalon_peakfit.log:2025-08-11 15:38:37,690 - etalon_positions - ERROR - Failed fitting: 4/117 (Error fitting polynomials: Amplitudes, sigma or width was < 0)

20250720/20250720T163220Z_DLLLD_b_0010_etalon_peakfit.log:2025-08-11 15:58:56,208 - etalon_positions - ERROR - Failed fitting: 2/116 (Error fitting polynomials: Amplitudes, sigma or width was < 0)
20250720/20250720T163220Z_DLLLD_b_0010_etalon_peakfit.log:2025-08-11 15:58:56,208 - etalon_positions - ERROR - Failed fitting: 3/116 (Error fitting polynomials: Amplitudes, sigma or width was < 0)
```
**Answer:** Same as 4 with the dropoff of flux for blue happening earlier

3. For 20250710T020423Z_DEEEE_b and 20250710T020423Z_DEEEE_r there were the following exceptions:  
```
20250710/20250710T020423Z_DEEEE_b_0010_spline.log:2025-08-11 09:22:03,222 - Spectrum - ERROR - Error processing file: /data10/MaroonX_spectra_reduced/20250710/20250710T020423Z_DEEEE_b_0010.hdf
20250710/20250710T020423Z_DEEEE_b_0010_spline.log:2025-08-11 09:22:03,223 - Spectrum - ERROR - Exception: 91
```
I'm wondering if this is covered by the failure on order 91 mentioned in the doc because before this it failed to fit that order. But it also occurs for the red as below:  
```
20250710/20250710T020423Z_DEEEE_r_0004_spline.log:2025-08-11 09:22:58,676 - Spectrum - ERROR - Error processing file: /data10/MaroonX_spectra_reduced/20250710/20250710T020423Z_DEEEE_r_0004.hdf
20250710/20250710T020423Z_DEEEE_r_0004_spline.log:2025-08-11 09:22:58,681 - Spectrum - ERROR - Exception: 93
```
**Answer:** from the [Calibration Spreadsheet](https://docs.google.com/spreadsheets/d/1B9okatlExAJA8iSA-mONATdKOFgi7dNcYgqaBEIM2gI/edit?pli=1&gid=975207402#gid=975207402) there were issues with the calibration frames taken 20250709 (note bcs time is UTC T02 means it would be labeled as 20250710 but taken in 20250709). Should just delete bad calibration frames and leave the raw
4. File 20250724T163641Z_DLLLL_b had a large number of fitted peaks that were not seen elsewhere:  
```
20250724/20250724T163641Z_DLLLL_b_0005_etalon_peakfit.log:2025-08-12 06:19:42,371 - etalon_positions.fit - ERROR - Failed fitting peak at 2.686673212036516.
20250724/20250724T163641Z_DLLLL_b_0005_etalon_peakfit.log:2025-08-12 06:19:49,359 - etalon_positions.fit - ERROR - Failed fitting peak at 12.55640107752062.
20250724/20250724T163641Z_DLLLL_b_0005_etalon_peakfit.log:2025-08-12 06:19:58,393 - etalon_positions.fit - ERROR - Failed fitting peak at 25.860900767321294.
20250724/20250724T163641Z_DLLLL_b_0005_etalon_peakfit.log:2025-08-12 06:20:05,709 - etalon_positions.fit - ERROR - Failed fitting peak at 32.95706869577707.
20250724/20250724T163641Z_DLLLL_b_0005_etalon_peakfit.log:2025-08-12 06:20:15,930 - etalon_positions.fit - ERROR - Failed fitting peak at 45.5958168931552.
20250724/20250724T163641Z_DLLLL_b_0005_etalon_peakfit.log:2025-08-12 06:20:23,005 - etalon_positions.fit - ERROR - Failed fitting peak at 51.735652104333404.
20250724/20250724T163641Z_DLLLL_b_0005_etalon_peakfit.log:2025-08-12 06:20:31,656 - etalon_positions.fit - ERROR - Failed fitting peak at 59.43068557105501.
20250724/20250724T163641Z_DLLLL_b_0005_etalon_peakfit.log:2025-08-12 06:20:38,022 - etalon_positions.fit - ERROR - Failed fitting peak at 67.55043997206735.
20250724/20250724T163641Z_DLLLL_b_0005_etalon_peakfit.log:2025-08-12 06:20:51,887 - etalon_positions.fit - ERROR - Failed fitting peak at 81.63094984612454.
20250724/20250724T163641Z_DLLLL_b_0005_etalon_peakfit.log:2025-08-12 06:20:57,611 - etalon_positions.fit - ERROR - Failed fitting peak at 96.1653427941851.
20250724/20250724T163641Z_DLLLL_b_0005_etalon_peakfit.log:2025-08-12 06:21:03,938 - etalon_positions.fit - ERROR - Failed fitting peak at 104.59111081305677.
20250724/20250724T163641Z_DLLLL_b_0005_etalon_peakfit.log:2025-08-12 06:21:09,158 - etalon_positions.fit - ERROR - Failed fitting peak at 117.63975445106922.
20250724/20250724T163641Z_DLLLL_b_0005_etalon_peakfit.log:2025-08-12 06:21:21,411 - etalon_positions.fit - ERROR - Failed fitting peak at 131.46213427883896.
```
**Answer:** these are all at order 119 which is ok to have failures at. Can see this at the end of the log file. Median flux was much too low to get anything
## 2025-08-11
- Continue with data reduction of July
	- For the etalon fitting issue was that for the DLLL? files they should be split into DLLL\[LE] and DLLLD files
		- This is because DLLLD the fifth fiber is a dark and that messes things up so for those frames only have the fibers be 2-4
		- Then for DLLL\[LE] can still have fibers be 2-5
		- Updated [[MAROON-X Data Reduction]] to reflect this
	- Before hearing about that ran through everything up to and including the pandas packaging
		- Relatively easy and fast
		- For the barycentric corrections takes a bit longer since have to write in each target manually
			- There were a few that had really large PC or FRD values but just set them to the expected 2.0 and 15.9 and hopefully that is fine?
- Read [[rajpaulGaussianProcessFramework2015]] and [[xuStarspotEvolutionDifferential2021]] started [[haraStatisticalMethodsExoplanet2023]]
## 2025-08-07
- Set up new MAC laptop
- Continued with data reduction
	- Running multiple instances of Fitting etalon frames since they take a long time to run
	- Seem to have a lot of errors with the DLLL? files specifically
		- They have been running well over a day now 
		- When I did `grep -F 'ERROR' 202507*/*.log` there were a *lot* of errors
		- Messaged andreas about this and hopefully can see what went wrong
- Gaussian process
	- Fit Gaussian Process model to spectrum data taken for Barnard's Star from HARPS
		- Was able to get a pretty good fit with using a RBF and ExpSineSquared kernel added together
		- Still have to figure out how to optimize the parameters in these kernels
	- Downloaded some RV data from HARPS
		- https://archive.eso.org/scienceportal/home (filtered by Data Type: catalogs and instrument: HARPS)
		- Description of columns: https://www.eso.org/qi/catalog/show/416
		- Filtering to just Barnards Star:
```
with fits.open(harps_path) as hdul: 
	objs = hdul[1].data["tel_object"]
	with open('./HARPS_data/object_list.txt', 'w') as f:
		for obj in objs:
			f.write(f'{obj}\n')
			bjd = hdul[1].data["drs_bjd"]
			rvc = hdul[1].data["drs_ccf_rvc"]
fltr = np.where(objs == 'Barnards-star')[0]
bjd = bjd[fltr]
rvc = rvc[fltr]
```
- 
## 2025-08-06
- Reading more about Gaussian Processes [[Gaussian Processes Summary-Review]]
	- Read [[aigrainGaussianProcessRegression2023]]
	- Read [[A Visual Exploration of Gaussian Processes.pdf]]
	- Read [[Gaussian processes (1_3) - From scratch.pdf]]
- Based off [[Gaussian processes (1_3) - From scratch.pdf]] started writing the code for a GP model I can play around with
	- Still having some trouble fully understanding the key math behind how it works
	- But understand the overall concepts I think?
- Finished running the flux extractions for the science data for July
	- Using a spreadsheet here to keep track of which ones have finished: https://docs.google.com/spreadsheets/d/1AAVXaSrot-zgfPOcEwH81j-CjnL27clHLSKsb3ST84w/edit?gid=497678365#gid=497678365
	- Important to keep track of how many files are being run at a time to maximize performance because otherwise wasting a lot of time just waiting for 1 file to finish each run. 
	- Started running the etalon fitting but that apparently takes a while so will see tomorrow the results
## 2025-08-05
- Set up nfty 
	- Allows for notifications to be sent to phone when  a command is completed
	- Basic uses ` ; curl -H "Priority: urgent" -d "Command finished!" https://ntfy.sh/MAROON-X `
		- Priority determines how strong/long the vibration is
		- ; is after any, && is after success, || is after fail
		- -d is what the notification says
		- the link is given by the nfty app
	- Can then combine to create a message that says if the job failed or not:
		- ` && curl -d "Job finished successfully! ✅" https://ntfy.sh/MAROON-X || curl -d "Job failed! ❌" https://ntfy.sh/MAROON-X `
- Started running data reduction on the July data
	- Have to do it in two batches because darks are split up since they get retaken 2-3 times a month
	- The darks for the second part of the month weren't there but Nina should be working on that now?
	- Got some of the way there and added some useful commands to make submitting jobs, checking on logs, and seeing how many files to run for the science flux extraction
- Started reading [[aigrainGaussianProcessRegression2023]]
## 2025-08-04
- Continued work on data reduction and did the barycorr and pandas extraction steps
- Tried to setup access to the server so I could more easily view the output figures
	- Couldn't ssh through vscode
	- -Y wasn't really working with xauth and not sure why
	- Somewhat hopeful that once I get the new computer (mac) that I will be able to access it
- Meeting with Andreas
	- [[MAROON-X Outputs and Quality Control.pdf]]
	- Added in notes about checking to make sure the data reduction process is working to notes in [[MAROON-X Data Reduction]]
		- Not 100% sure that they are all accurate/in the right step... so something to be aware of when doing a real run and check it all make sense
## 2025-07-30
- Meeting with Nina
	- Questions: 
		- What research project did you work on?
		- How did you choose that project?
			- Had talked to him generally but had an idea of what she wanted to do
			- He had some data lying around that no one was using
		- Why did you choose UArizona?
			- Research fit
			- Keeping up to date on what papers are coming out
				- Papers through the slack
				- Journal club
			- Looking at conferences (specific to EPRV) wasn't able to go but see who speakers were
		- Taking classes
			- Graduate student at large
			- Do have to apply to it
## 2025-07-29
- Running data reduction
	- Meeting with Andreas and Nina again with notes taken in [[MAROON-X Data Reduction#^00d1a8]]
		- Looked at some of the raw data in DS9 and then the 1D spectra after
	- Updated notes for [[MAROON-X Data Reduction#^687647]]
	- Was successfully able to run the flux extractions
- Read [[Johnson-Ch2-Stellar-Wobbles.pdf]] with notes in [[Readings on Radial Velocity#^2a9d73]]
- Read [[RV_Detailed_Derivation.pdf]] with notes in [[Readings on Radial Velocity#^8f07e4]]
## 2025-07-28
- Read [[RV_Handbook_Chap2.pdf]] with notes in [[Readings on Radial Velocity]]
- Met with Nina about the data reduction steps. Notes taken in [[MAROON-X Data Reduction]]
- Got Bastion setup for laptop and main ubuntu computer
	- Couldn't use VPN as that would interfere with me using tailscale as a VPN to keep things synced and connected with the NAS
	- To login: `ssh -J zvladimir@bastion.psd.uchicago.edu zeev@mxred.uchicago.edu`
## 2025-07-25
- Read [[liangAESTRADeepLearning2023]]
- On systemic for system GJ876
	- #Question Why does order matter so much for identifying periods? Makes sense somewhat logically to go from highest signal to smallest but shouldn't it just work regardless?
		- Can do any order
		- If you take out the wrong planet/period messes up the residuals and signals in the periods
		- Mainly the sampling across datasets is different and causes issues. Means you need to do trial and error
	- Went period 60 -> 30 -> 2 -> 120
	- Mean motion resonance
		- In mean motion resonance periods in integer multipliers
		- Have their closest approach at the same time continuously adding energy and affecting angular momentum and thus the orbit of one another (can both stabilize *or* de stabilize)
		- Can't just use Keplerian orbits but can instead use N-body integration
			- Do need numerical orbiting for Keplerian but much faster than N-body
	- #Question Why couldn't I really get rid of the signal at 30 days even with planets at 30, 60, and 120 days
		- Signal of the interaction left over
		- See if with integration that goes away
- Improved [[MAROON-X Glossary]] to have a main page
	- [x] #TODO Create a template for adding elements to the Glossary  [due:: 2025-07-30]  [completion:: 2025-07-31]
- Created [[MAROON-X Data Reduction]]
	- Intended to keep track of everything related to the Data Reduction process
		- File types and what they contain
		- The codes and what they do
		- The steps to run the full process
- Meeting with Dr. Bean
	- Parameters gained from RV measurements
		- Bolded is needed to determine a planet's radial velocity orbit
		- Get lower bound of mass $m\sin{i}$
			- Degeneracy between orbital orientation
			- Line of sight measurement
			- 90 degree minimum is equal to the actual mass
		- **Period**
			- Measure the period
			- Not the physical thing that matters care more about mass and semi-major axis
		- **Amplitude**
			- Function of mass period and eccentricity
		- **Eccentricity**
		- **Longitude of periastron** (distance at closest approach)
			- Angle between 0-360 degrees
			- How the ellipse of orbit is oriented
			- Measured from plane of sky 
			- Tied to eccentricity
			- Symbol \omega
		- **Reference time**
			- Different choices could use time of periastron
			- Just moves the time series left or right 
			- No physical meaning just need zero point
		- Semi-major axis
			- Tied to the period P^2=a^3 (Period in year, a in AU, mass in earth mass #Check)
			- General is Newtons formulation done in SI
	- [x] #TODO Read [[RV_Handbook_Chap2.pdf]]  [due:: 2025-07-30]  [completion:: 2025-07-28]
	- [x] #TODO Read [[Johnson-Ch2-Stellar-Wobbles.pdf]]  [due:: 2025-07-30]  [completion:: 2025-07-29]
	- [x] #TODO Read [[RV_Detailed_Derivation.pdf]]  [due:: 2025-07-30]  [completion:: 2025-07-29]
	- [x] #TODO Question about zero-point of RV from ML paper?  [due:: 2025-07-25]  [completion:: 2025-07-28]
- Meeting with Andreas and Nina
	- Setup UChicago VPN
	- Use MAROON-X account to do data reduction instead of personal account
		- maroonx@server_name
	- Give SERVAL the full dataset because it is building a template from all the observations
	- Run everything on the server
	- Get in GEMINI rotation for taking calibration photos
	- [x] #TODO Set up Bastion for ubuntu to access server  [due:: 2025-07-28]  [completion:: 2025-07-28]
## 2025-07-24
- Went through [[Lab 1 Manual.pdf]] some key points
	- Fitting a model (sine curve) to the data lets you obtain the amplitude (which can be an approximation for the velocity), the period, time offset, and velocity offset
	- From this and assuming orbit is circular can do $v=\frac{2 \pi r}{T}$ to get the radius or use kepler's law (assuming the mass of the star is known) $T^2=\frac{4 \pi^2}{GM}r^3$ 
	- Then using COM equation can determine what the *minimum* mass of the planet is 
- Did a first read through [[zechmeisterSpectrumRadialVelocity2018]] 
	- [x] #TODO Finalize reading and notes of [[zechmeisterSpectrumRadialVelocity2018]]  [due:: 2025-07-28]  [completion:: 2025-07-25]
- [[MAROON-X Data Reduction#^6226e8|Serval]] ran SERVAL on practice dataset 
- Meeting with Dr. Bean
	- Finding what signals in periodograms are real or not or aliases
		- Can get signals every day every month based on observation ferquency or every half year star only visible then
		- Can also get close integer multiples of signals
	- Check upsilon andromadae
	- Adding in uncertainties of measurements
	- Metallicity variation and impact on type of planets
	- #Question Brightest sun like star in the nearest galaxy
	- #Question Can you resolve stars in other galaxies
		- Yes but difficult especially if non-super bright ones
	- Envelope of distances for RV and transits is about 1kpc and microlensing is about 4kpc (generally around center of our galaxy)
	- 2 Challenges
		- Getting better precision from the instruments (calibration, building, data reduction)
		- Stellar activity !!
			- All should have a wavelength dependency
			- Planets is a perfect effect on all wavelengths
	- 9 cm/s is golden number for detecting earth like in habitable zone
	- Check out GJ876 on Systemic

## 2025-07-23
- Started setting up MAROON-X version of SERVAL
	- Had some issues with dependencies being deprecated in the versions of Python I used so waiting for Nina to find out which version of Python is best
- There is a known bias towards non-zero eccentricity in radial velocity fits (Laughlin 2005)
- Meeting with Dr. Bean
	- Gaussian Process
		- Have periodic rotation from stars rotation causing quasi-periodic spurious radial velocity shifts with things like sunspots
			- Stellar absorption lines are broadened by stellar rotation (blue and red shifted depending on which direction)
			- Causes difference in spectrum (missing some light) which causes there to be some flux missing. So looks like a chunk of the spectral line is missing
				- Can see this moving through the line
				- Shifts how red or blue shifted a line looks by taking a chunk of something that is more red or blue and shifting to the other
			- Often these don't last very long and in the same place or the same size (thats what makes it quasi periodic)
		- However, planets are almost always perfectly periodic (keplerian)
		- Use GP to model and remove the quasi periodic processes
			- Can condition on extra info like stars rotation
			- Good for modeling things that you don't know where they came from exactly
		- Have to be very careful as they can very easily overfit and absorb other signals
			- Try to constrain with priors as much as possible
	- Stellar activity
		- Can look at individual lines like H alpha and see stellar activity variations
		- Can see the cores of these lines that probe the corona of the stars and are more sensitive and see how they adjust and compare to the radial velocity
		- See 1 to 1 relation between RV and Halpha (or something) that means the RV is being influenced by the stellar activity
	- Chromatic index
		- How the velocity changes with wavelength
		- If there is a trend that is an indication stellar activity
	- dLW how the line width is changing over time
	- Always deal with relative radial velocity
	- Stefanom
		- 51 pegasus
		- Use power spectrum which tells you periodicity
			- Generally there is one around 1 day which isn't real
		- Always just fit for telescope offsets
- [x] #TODO Read serval paper  [priority:: high]  [due:: 2025-07-24]  [completion:: 2025-07-24]
- [x] #TODO Do the lab for https://www.stefanom.org/systemic-online/?sys=14Her.sys&np=0&im=0  [priority:: high]  [due:: 2025-07-24]![[Lab 1 Manual.pdf]  [completion:: 2025-07-25]
- [x] #TODO Look at SPOCK code for dynamical stability  [priority:: medium]  [due:: 2025-07-30]  [completion:: 2025-07-29]
## 2025-07-22
- Set up SERVAL and looked through outputs
	- https://github.com/mzechmeister/serval
- Serval output file notes
	- rv_unbin.csv file contains the final output
- Meeting with Dr. Bean
	- Have to calibrate instrument repeatedly as instrument isn’t stable
	- Spectral resolution: $R=\frac{\lambda}{\Delta \lambda}$ ($\Delta \lambda$ is resolution element)
		- [x] #TODO Calculate the speed of moving across pixel with R~85,000 MAROON-X at wavelength of 790 nm across 3 pixels detector has 4k pixels. (Answer ~ 500 m/s)  [priority:: high]  [due:: 2025-07-23]  [completion:: 2025-07-22] 
		-  $$ \begin{align} R&=\frac{\lambda}{\Delta \lambda} \\ R&=\frac{c}{\Delta v} \\ \Delta v &= \frac{c}{R} \\ \Delta v &= \frac{3\cdot 10^8}{85000}=353m/s \end{align} $$
	    - Each pixel represents a $\Delta \lambda$ 
	    - Then use doppler shift to measure rv as wavelength moves across pixel
	    - Have to assign wavelengths to every pixel
	    - See how much wavelength moves over time
	    - Have to measure wavelengths very well
	- Wave length calibration
	    - Emission source (just delta functions with specified wavelengths)
	    - Measure position of each of those lines per order
	    - Then can use a function to map (per order) how wavelength varies per pixel
	    - Complex relationship so use spline instead of high order polynomial
	        - Obtain residual structure that doesn’t go away
	- Light from star is split into 3 fibers (sliced)
	    - Then fed into spectrograph
	    - For each order there are 3 spectras (science) and then 1 for calibration
	    - Take a base calibration on all fibers and then can compare each observation during the night to calibration on 1 fiber
	    - Each order drifts separately
	- Measuring the center of gaussian
	    - 4 pixels for FWHM
	    - Then can get better sub pixel measurement
	    - Use many orders and do this 1000s of times and then get SNR ~500
	- Take images and get 1D spectra flux vs wavelength
	- Then use serval to get rvs
	    - Serval creates a reference template from many observations
	    - Can’t just model as they are not precise enough or base off another star
	- Meet every day at 10CST
- Had to uninstall snap version of vs code and use the .deb version to get SERVAL to work with GNU plot
- #Question Explain BIC vs K graph
	- In notes with Meeting with Dr. Bean
## 2025-07-21
- Read a few papers
    - [[seifahrtDevelopmentConstructionMAROONX2016]]
    - [[basantFourSubEarthPlanets2025]]
    - [[bradyEarthlikeDensityTemperate2025]]
- MAROON-X Meeting 
- Went through the data structures of the basic files
	- Doesn't seem too crazy with HDF5 files and FITS files- Read a few papers
- MAROON-X Meeting 
- Went through the data structures of the basic files
	- Doesn't seem too crazy with HDF5 files and FITS files
## 2025-07-15
- Can work from home just have to be there for meetings
- 1/2 tuition
- Lunch talk tuesday
- Seminars wednesdays
- Journal club monday
- Adler planetarium