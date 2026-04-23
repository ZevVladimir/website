## Misc
To check along the way:
- [[MAROON-X Outputs and Quality Control.pdf]]
- Go to data10/MaroonX_spectra_reduced then more 202506*/*SOOOE*.log | grep ERROR
- There is a data reduction log where to note issues or how it went
- Can run out of room on each of the data (drives?) like data1-10 
	- Periodically check this with ` df -h /data10 `
	- And if it goes below 50GB let Andreas know
Nina email: ninamelissabrown@gmail.com

### 1.  Access the servers
- There are three servers mxcrunch, mxred, and mxblue
	- As far as I'm aware only mxcrunch and mxred are used and are indicated below which one to use for which step
	- ` ssh -Y -J zvladimir@bastion.psd.uchicago.edu maroonx@mxred.uchicago.edu `
	-  ` ssh -Y -J zvladimir@bastion.psd.uchicago.edu maroonx@mxcrunch.uchicago.edu `
	- Only need the ` -J zvladimi@bastion.psd.uchicago.edu ` if not on University Wifi
### 2. byobu
- byobu: like Screen allows for running different things in separate screens
- https://www.byobu.org/documentation
- To activate just type on the server `byobu`
- Keyboard shortcuts
	- New screen: F2
	- Naming the screen: F8
	- Moving between screens F3 (left) and F4 (right)
### 3. Add programs to GEMINI OT
[MAROON-X Runs Spreadsheet](https://docs.google.com/spreadsheets/d/1jLNXt3G-6MPNY9XhzvsaaQOpZQnfLwBEEsXLoBx8fCQ/edit?usp=sharing)  details external programs -- includes program IDs and passcodes to access gemini OT
### 4. Remounting drive
Sometimes the drive can get unmounted and jobs will fail and you can see errors like `/data10: Transport endpoint is not connected `

 To fix this Andreas documented in `/home/maroonx/sshfs-hints.txt` the following
 
Stale mount? Solution (example for /data10):

(1) In all byobu windows, leave the directory that is linked to the mountpoint that is dropped (e.g. /data10/..). Potentially kill ssh sessions from other users that access the folder.

(2) `sudo umount -f /mnt/data10` or can add `-l` for lazy unmount

(3) `sudo sshfs -o allow_other,default_permissions maroonx@mxblue:/data10 /mnt/data10`

---
# Taking Calibration Frames
- [Calibration Log Spreadsheet](https://docs.google.com/spreadsheets/d/1B9okatlExAJA8iSA-mONATdKOFgi7dNcYgqaBEIM2gI/edit?usp=sharing)  details any calibration notes from 2024A - present
- [MAROON-X Taking Calibration Frames (Tanya)](https://docs.google.com/document/d/1oEUMED9RQCRjuBPXED_uqqo5M-Fvd5VVpjNLzcd4qD8/edit?usp=sharing)  write-up on troubleshooting, and taking darks, flats, and ThAr frames
- [MAROON-X Observer Guide for Calibration Frames](https://docs.google.com/document/d/1dGjw0E_AywcmMmNJksN3MP9LeYS7yRu8IgxzrpuxflM/edit?usp=sharing) shared with gemini observers, but covers the calibration sequence for etalon and lfc frames
- **2024 Data Problems**
	- [Analysis results of MAROON-X](https://drive.google.com/drive/folders/1jp_8OqvZXff6ZomkPEWBKkKHbkqYuUoI?usp=drive_link)  from an analysis tanya did, covering any changes in the instrument over the course of 2024, and into 2025 I believe
	- [Log of Dark Shifts in Instrument Profile](https://docs.google.com/spreadsheets/d/1YuhTDMbF1gQB8QKvpAEPg3U1ySrJ9F92XOFcNqPg3PY/edit?usp=sharing) detailed log of any shifts in the instrument profile relative to 2024 darks
	- [Log of Flat Shifts in Instrument Profile](https://docs.google.com/spreadsheets/d/1MXK9ESUiP3Ot8ciebG40pSilV2sr90OPPwk01q3fLdM/edit?usp=sharing) detailed log of any shifts in the instrument profile relative to all flats
	- [2024 Reduction Files](https://docs.google.com/spreadsheets/d/1MBEgy0Q0voezbmeNCMexHlNWBrT7iEIAEC1yTJlSISw/edit?usp=sharing)  navigation guide for 2024 data taken between Feb - Sep. And what's been reduced with what method, and where is it stored on the servers
	- [Subpixel shifting](https://docs.google.com/document/d/1R0Mj_QtJZ9KzQpo3SnXvkvPuCRiwuMnEsPs6cjCYDxs/edit?usp=sharing) subpixel shifting was used to shift darks that were taken before/after an instrument profile shift, relative to science data. If ever needed again, this doc goes over a few cases where subpixel shifting helped results, and where it made things worse
### 1. MAROONX On Sky Cals
- Log in to [Keeper](https://kcm3.gemini.edu/#/)
	- Times to take CALS:
		- Morning 11:30AM-1PM
		- Evening 10PM-11:30PM (9PM ish is fine just make sure it is after 4PM Hawaii time)
- Log in to anydesk and LFC
- Automation layer
	- Operation mode set to astro comb to switch on
	- Look at progress bar and it should be green (but often red and can still take cals if it is ~90%)
	- Mark this color in the calibration spreadsheet
	- If it doesn't can try switching to standby high and then back
- Go to spectral flattening extended to see if it is switched on
	- Should be flat if it is switched on
#### DEEEE frames
- Set ADC mode to PARK when taking cals (top right)
	- Should target Zenith and telescope should not be moving (rotator at 180 degrees)
- Set exposure time: 0.05 seconds 
- Set min guiding interval: 1 second 
- Set aggressiveness: 1 
- **Move calib mirror: IN** 
- **Set telescope shutter: closed**
- **Set fiber shutter: open**
- Set exposure type to calibration etalon (bottom CCD cameras)
- Then press take frame in top left of Guider (top left)
	- Green dots are triangulation fibers used for guiding
	- Blue circle is science fiber
	- Drag the red circle onto the optic you want (large circle etalon light)
	- Click start guiding
	- When it is centered click stop guiding
- If the frame taken looks very weird (washed out in yellow and hard to tell what is there)
	- change backlight ND to ND_1 and change the slider
	- Make a note in the spreadsheet
	- Ping Andreas/Tanya
- Then manually guide
	- Look at photonCounter (center right)
	- Click reset plot
	- In top left of this screen can see number which is PC counts/s want >900 but 890-910 good
	- Then go to guider to top right of that screen where T/T axis
	- Move x first then y in steps ~5-10 to see if there is improvement
	- Then reset plot
- Go back to Guider
	- **Uncheck fit template star**
	- Go to CCD Camera 
		- **uncheck backlightlaser** (always have to do this since after exposure taken it rechecks) Might be a delay in unchecking
		- Set number of exposures to 2
		- Click take frame (if you want to stop exposure just decrease number of exposures)
- Write down in the calibrations schedule notes [Calibration Log Spreadsheet](https://docs.google.com/spreadsheets/d/1B9okatlExAJA8iSA-mONATdKOFgi7dNcYgqaBEIM2gI/edit?usp=sharing) 
	- In comments write TT position and PC counts
- **After morning cals**
	- Close fiber shutter
- **After night cals**
	- Set exposure type to science (CCD camera)
	- Move calibration mirror out (Guider)
	- Check fit template stars
	- Close fiber shutter
#### DLLLL Frames
- After turning on LFC go back to Keeper
- Switch1to Calibration LFC (DLLLL)
	- Reset PhotonCounter plot
	- Frontend: LFC
	- Sim. Calibration: LFC
	- Turn off backlight laser
	- Set exposure time in red to 10s
	- Set exposure time in blue to 15s
	- Set number of exposures to 2
	- Take frame
	- Check LFC is fine
	- If the PC count is very weird with spikes or other weird behavior make a note in the spreadsheet
#### DLLLE Frames
- Switch to Calibration LFC + Etalon
	- Turn off backlight laser
	- Frontend: LFC
	- Sim. Calibration: Etalon
	- Set exposure time in red to 10s
	- Set exposure time in blue to 15s
	- Set number of exposures to 2
	- Take frame
	- Check LFC is fine
#### DLLLD Frames
- Start from Calibration LFC + Etalon
- Switch to Manual mode (DLLLD)
	- Turn off backlight laser
	- Frontend: LFC
	- Sim. Calibration: OFF
	- Set exposure time in red to 10s
	- Set exposure time in blue to 15s
	- Set number of exposures to 1
	- Take frame
#### DDDDE Frames
- Start from Calibration LFC + Etalon 
- Switch to Manual Mode (DDDDE)
	- Turn off backlight laser
	- Close fiber shutter
	- Frontend: OFF
	- Sim. Calibration: Etalon
	- Set exposure time in red to 10s
	- Set exposure time in blue to 15s
	- Check sync check is on and that both frames are taken (otherwise will have to take red/blue separately)
	- Set number of exposures to 2
	- Take frame
#### After Taking LFC Frames
- Then go to any desk and LFC and turn off by doing the following
	- Switch to standby high
		-  Progress bar should be green
	- SLM spectra~ should just look like noise
#### 2. MAROONX Off Sky Cals
- Turn on LFC and log into keeper
#### DDDDL Frames
- Start from Calibration LFC
- Switch to Manual mode (DDDDL)
	- Turn off backlight laser
	- Set exposure time in red to 15s
	- Set exposure time in blue to 20s
	- Frontend OFF
	- Set number of exposures to 2
	- Sim. Calibration LFC
#### DDDDE Frames
- Start from Calibration Etalon 
- Switch to Manual Mode (DDDDE)
	- Turn off backlight laser
	- Close fiber shutter
	- Frontend: OFF
	- Sim. Calibration: Etalon
	- Check sync check is on and that both frames are taken (otherwise will have to take red/blue separately)
	- Set number of exposures to 2
	- Take frame
### Checks/Fixes
- If flux is low
	- Go to workspace 5 with DS9
	- Open the file for that day (red and blue in each sub window)
	- Can see scale parameters ( total flux in the file)
- Check temperatures
	- Workspace 4
	- There should be a heart at the top and it should be green
	- Meatlocker and Glycal (?) should be white
	- NO RED HEARTS!
- Check spectra
	- Workspace 5
	- Open current date and what was just taken (both red and blue)
	- Check how much flux (<4000 for flats not really worry for etalon) can just click on which side you want to see flux of
- System monitor (bottom right)
	- Want to be below 40GB system memory 
	- If just reaching there close the Guider and it should automatically reopen
	- Then can drag and Zoom in 
- If closing something else
	- Go to terminal maroonx@mxcontrol1
	- Its a byobu window and just go to the one that was closed
	- Then do the last command but double check its right but it is in the MAROON-X Observer Handbook under VNC Desktop -> widgets
- **Issues**
	- Check the MX cals and issue fix and see if its there
	- Otherwise just message Andreas
- While taking frames things to look out for
	- If there is a spike/fall during the frames make a note of it in the spreadsheet
	- While taking frames do not switch windows in anydesk
		- This can cause the LFC to get very noisy
		- Wait for frames then switch windows and let it settle down again before taking more
	- Flux around ~700 but no exact value
## Darks and Flats
- Follow instructions in [MAROON-X Taking Calibration Frames (Tanya)](https://docs.google.com/document/d/1oEUMED9RQCRjuBPXED_uqqo5M-Fvd5VVpjNLzcd4qD8/edit?usp=sharing)
- For flats Can skip: "The sky fiber position is different from science fiber. Manually adjust the TT position to inject flat light into the sky fiber. It is around TT position (-3000,-520) where -3000 is the limit of the TT mirror. Full flat light doesn’t fall on sky fiber but some part of it does with this adjustment. Ignore this step if sky fiber is unreachable."
### Taking Darks
- Check that both fiber and telescope shutter are closed, nd3, calib mirror in. Backlight laser and fit template stars off?
- Move frontend to off — doesn’t really matter science-wise but does affect how the files are named. SimCal is Etalon.
- Close out of the CCD cameras GUI window
- Go to byobu window in workspace 1, to CCDCameras tab, and to ‘~/Repos/MaroonX-ControlPyQt/maroonx_control/scripts’
- nano calib_and_contineous_etalon.py and edit the darks you want taken at the bottom of the file (60s, 120s, 300s, 600s, 900s, 1200s, 1800s are typically a good spread)
Return to `~/Repos/MaroonX-ControlPyQt`, and run `cd /home/maroonx/Repos/MaroonX-ControlPyQt && PYTHONPATH=/home/maroonx/Repos/MaroonX-ControlPyQt GRPC_DNS_RESOLVER=native /home/maroonx/anaconda3/bin/python maroonx_control/scripts/calib_and_contineous_etalon.py -c etc/maroonx_config.ini`
- During evening cals, first check that the dark procedure is completed (can check it through the files created in ds9 in workspace5).
- Press ctrl-c (2 times if once doesn’t work) to come out to MaroonX-ControlPyQt. Press the up arrow till you find the command that runs camera_and_widgets.py (check exact name)  and press enter to reopen the CCD GUI.
# Data Reduction
- [[stepbystep_reduction.pdf]] Nina's guide for the process (what this is mainly based on)
- [External Program Spreadsheet](https://docs.google.com/spreadsheets/d/1s63OgzTn-GznKlM8k3xwRNaoiXx1OztdLcHPzwIs2rU/edit?usp=sharing) details external programs and reduction progress from all semesters
- [Quality Control and Checks document](https://docs.google.com/document/d/1yjWp0e4UcVBK8DO-aY1nsFzWXRcyTVfn_wtQULRzXpQ/edit?usp=sharing)  Provides examples of good and bad results along each step of the process and should be checked after every step if possible
## My data reduction
- Repository is kept at `/home/zeev/data_redux_mrx/`
- Run it with ` PYTHONPATH=${PWD} python /home/zeev/data_redux_mrx/main.py -y 2025 -m 12 -v 4`
## The Initial Data/Moving Data to the Server
- Data is automatically moved to the server
- If some data appears to be missing run `/data10/GSA_Download/manual_retrieve_GSA_data_and_convert.sh 20260101` to manually move it over
- Ignore (doesn't have permission to work now)
	- Wrote a script on mxcrunch in `/data10/GSA_Download/zev_import_data.sh`
		- Run with `bash zev_import_data.sh 2025 08` for example
			- This does the whole month of august
			- Can add a third argument with a **regex** for the date
		- Implements the following commands for a loop of inputted date(s)
```
curl https://archive.gemini.edu/download/canonical/MAROON-X/20250322 -o GSA_archive.tar tar -xvf GSA_archive.tar ls -1 N20250322M* > 20250322.lis python ~/Repos/maroonx_reduce/split_MEF_MAROONX.py -l 20250322.lis 
```
- [Data Archiving Notes](https://docs.google.com/document/d/11hQ0yGwS5lnvYacwuoa_KCDGqH7FrV7iMZV3X6TsUhI/edit?tab=t.0)
- Generally data is added automatically at the end of every UTC day 
- Some caveats
	- Sometimes take calibration data at or right after the end of the UTC dat (~7 pm Chicago time). 
		- Probably will run happen when taking darks going forward
		- The solution is to run the following:
			- ` cd /data10/GSA_Download/`
			- Make sure to edit the script’s date variable to the desired UTC date before executing and run ` bash manual_retrieve_GSA_data_and_convert.sh `
	- Data may also be skipped over if the server (data10) is out of storage space. This shouldn't happen anytime soon, but you'll know if it does. Same solution as above

## 1. Calibration reduction
### 1. Reduce Darks
#### 1.1 Normal Darks
- ` cd ~/Repos/maroonx_reduce `
- ` PYTHONPATH=${PWD} python reduce/recipes/zev_full_dark_reduce.py /data10/MaroonX_spectra/20250806 `
	- Make sure to change the date based off the [MAROON-X Calibration Schedule Spreadsheet](https://docs.google.com/spreadsheets/d/1B9okatlExAJA8iSA-mONATdKOFgi7dNcYgqaBEIM2gI/edit?pli=1&gid=975207402#gid=975207402) where it is marked in bold **Took Darks**
- For details see [[stepbystep_reduction.pdf]] but should be done automatically
#### 1.2 LFC Darks
- ` cd ~/Repos/maroonx_reduce/ `
- ` bash zev_reduce_LFC_darks.sh 2025 01 `
	- Make sure to adjust the year and date for whichever month you want to do
	- You can also add a *regex* expression as a third term if you don't want to run for the entire month but a subset of days/weeks
### 2. Reduce Flats
- ` cd ~/Repos/maroonx_reduce/ `
- ` PYTHONPATH=${PWD} python reduce/recipes/make_master_flats.py -dd /data10/MaroonX_spectra/20250804/ --filename_FDDDF_b *DDDDF_b* --filename_FDDDF_r *DDDDF_r* ; curl -H "Priority: 4" -d "Make master flats finished" https://ntfy.sh/MAROON-X `
	- **BEFORE RUNNING** check the data directory (-dd) and see if there are files that are not of the form FDDDF or DFFFD 
		- If you don't do this you will likely get an error related to crunch_stack for that fiber order 
	- For example now there are DDDDF files so need to add the ` --filename_FDDDF_b *DDDDF_b* --filename_FDDDF_r *DDDDF_r* ` parameter
- For each of the flat types that you have run the following command (done here for DFFFD and DDDDF files) for **both blue and red** 
	- ` PYTHONPATH=${PWD} python reduce/extraction.py -s '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202508xx/flats/20250804T19_masterflat_DFFFD_r_0002.fits' -f '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202508xx/flats/20250804T19_masterflat_DFFFD_r_0002.fits' -c '/data/MaroonX_spectra_reduced/Maroonx_configfiles/202005xx/config_r.hdf' -o '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202508xx/flats/' -dbg 1 -over True -fibers '2 3 4' -flat_fibers '2 3 4' ; curl -H "Priority: 4" -d "r DFFFD extraction finished" https://ntfy.sh/MAROON-X `
	-  ` PYTHONPATH=${PWD} python reduce/extraction.py -s '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202508xx/flats/20250804T19_masterflat_DDDDF_r_0002.fits' -f '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202508xx/flats/20250804T19_masterflat_DDDDF_r_0002.fits' -c '/data/MaroonX_spectra_reduced/Maroonx_configfiles/202005xx/config_r.hdf' -o '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202508xx/flats/' -dbg 1 -over True -fibers '5' -flat_fibers '5' ; curl -H "Priority: 4" -d "r DDDDF extraction finished" https://ntfy.sh/MAROON-X `
	- **Command line arguments**
		- Check the output from the command before `/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202508xx/flats/` (adjusting date as needed)
		- for `-s` and `-f`
			- Get the correct masterflat from the output folder checking for
				- Color
				- Date
				- Fiber arrangement
		- For `-c` 
			- Make sure that it is the right color
	- NOTE: plots are created and if they are not closed on your end the code will wait until they are. Unsure if there is a way to turn that off
		- NOTE: if someone else is on as maroonx then this can cause the code to fail saying it couldn't connect to localhost. Just logout and log back on and it should be fine 
- Move files from subfolder to the parent folder
	- ` mv /data10/MaroonX_spectra_reduced/Maroonx_masterframes/202508xx/flats/20250804/* /data10/MaroonX_spectra_reduced/Maroonx_masterframes/202508xx/flats/ `
	- ` rmdir /data10/MaroonX_spectra_reduced/Maroonx_masterframes/202508xx/flats/20250804 `
- Run background subtraction
	- ` PYTHONPATH=${PWD} python reduce/recipes/zev_backgroundfit.py -dd /data10/MaroonX_spectra_reduced/Maroonx_masterframes/202508xx/flats/ ; curl -H "Priority: 4" -d "flat background subtraction finished" https://ntfy.sh/MAROON-X `
	- BEFORE RUNNING** check the data directory (-dd) and see if there are files that are not of the form FDDDF or DFFFD 
	- For example now there are DDDDF files so need to add the ` --filename_FDDDF_b *DDDDF_b* --filename_FDDDF_r *DDDDF_r* ` parameter 
		- Will otherwise fail with an error like: 
	```
	File "reduce/recipes/backgroundfit.py", line 334, in <module>
	
		filename_reduced_FDDDF_b = glob(os.path.join(args.data_directory, filename_reduced))[0]
	
	IndexError: list index out of range
	```
	- If the flats were taken the month prior (EX: 20250831 for the September flat) then should do something like: ` mv /data10/MaroonX_spectra_reduced/Maroonx_masterframes/202508xx/flats/20250831* /data10/MaroonX_spectra_reduced/Maroonx_masterframes/202509xx/flats/ `  so code can find the correct files (assuming you have everything being output to 202509xx)
- Run flux extractions
	- Run for both colors
	- ` PYTHONPATH=${PWD} python reduce/extraction.py -s '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202508xx/flats/20250804T19_masterflat_backgroundsubtracted_FFFFF_r_0002.fits' -f '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202508xx/flats/20250804T19_masterflat_backgroundsubtracted_FFFFF_r_0002.fits' -c '/data/MaroonX_spectra_reduced/Maroonx_configfiles/202005xx/config_r.hdf' -o '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202508xx/flats/' -dbg 1 -over True -fibers '2 3 4 5' -flat_fibers '2 3 4 5' ; curl -H "Priority: 4" -d "r flat flux extraction finished" https://ntfy.sh/MAROON-X `
- Move files from subfolder to the parent folder
	- ` mv /data10/MaroonX_spectra_reduced/Maroonx_masterframes/202508xx/flats/20250804/* /data10/MaroonX_spectra_reduced/Maroonx_masterframes/202508xx/flats/ `
	- ` rmdir /data10/MaroonX_spectra_reduced/Maroonx_masterframes/202508xx/flats/20250804 `
- Create hd5 export file
	- ` PYTHONPATH=${PWD} python analyze/recipes/batch_spec_to_pandas.py -dd /data10/MaroonX_spectra_reduced/Maroonx_masterframes/202508xx/flats/ -o FFFFF -d '20250804T19' --file '20250804T19_masterflat_backgroundsubtracted_FFFFF_b_0007.hdf' ; curl -H "Priority: 4" -d "final flat finished" https://ntfy.sh/MAROON-X `

---
## 2. Science Reduction
### 1. Science flux extractions
- **Before running check**
	- Color matches within -c, -f(b/r), -f(b/r) path, -dkf (if using)
	- Exposure times within -e, -dkf (if using)
	- How many files are already being run. Should limit to ~40 otherwise overwhelm server
		- Using ` ls /data10/MaroonX_spectra/202507[0-1]?/*SOOOE_r_0120* | wc -l ` can tell you how many files are used for a given week range and exposure time 
		- Make sure to update the date and exposure time
	- That the correct dark file is being used and the dates match it
		- Darks are taken at multiple points during the month so make sure that the step uses the closest dark
		- For example: For July 2025, darks were taken on the 7th and 21st. So for data in 202507\[0-1\]?, you'd use the darks: 2025070x. And for 202507\[2-3\]?, you'd use the darks 2025072x
- Get all the programs
	- ` cd /data10/MaroonX_spectra/ `
	- ` dfits 202507*/*SOOOE_r*.fits | grep -e 'TARGETNAME' -e 'EXPTIME' -e 'PROGRAMID' > 202507_allobs.txt `
	- Move file locally and run ` python det_month_obs.py ` after adjusting input and output file names
		- Generates a .csv file of all the targets with all their program ids combined (if multiple) and all their exposure times combined (if multiple)
	- Paste the output .csv into the [MAROON-X Data Reduction Log Spreadsheet](https://docs.google.com/spreadsheets/d/1J0q-3RQ8wDYduAWej8Uz-9U2m5JHjx9IWIDlUOawJvA/edit?pli=1&gid=1123084410#gid=1123084410)
		- Paste without formatting (ctrl-shift-v) into the Target column
		- With all the rows still highlighted do Data->Split text to columns
- Run on **mxcrunch** ` cd ~/Repos/maroonx_reduce ` for
	- All the programs
		- Red
			- All exposure times
		- Blue
			- All exposure times 
	- Useful to use [Tracker Spreadsheet](https://docs.google.com/spreadsheets/d/1AAVXaSrot-zgfPOcEwH81j-CjnL27clHLSKsb3ST84w/edit?pli=1&gid=497678365#gid=497678365) 
- ` PYTHONPATH=${PWD} python reduce/batch_extraction.py -c 'b' -fb '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202507xx/flats/20250701T17_masterflat_backgroundsubtracted_FFFFF_b_0007.hdf' -dd '/data10/MaroonX_spectra/' -od '/data10/MaroonX_spectra_reduced/' -e '0300' -sl 5 -t SOOOE -d '202507[0-1]?' -dkd 2025070x ; curl -H "Priority: 4" -d "b Science flux extraction finished" https://ntfy.sh/MAROON-X `
`python /home/maroonx/Repos/maroonx_reduce/reduce/batch_extraction.py -c r -fr /data10/MaroonX_spectra_reduced/Maroonx_masterframes/202512xx/flats/20251218T02_masterflat_backgroundsubtracted_FFFFF_r_0002.hdf -dd /data10/MaroonX_spectra/ -od /data10/MaroonX_spectra_reduced/ -e 0120 -sl 5 -t SOOOE -d 202512{18..31} -dkd 2025121x`
- If script stalls with output similar to:
	```
	qt.qpa.screen: QXcbConnection: Could not connect to display localhost:10.0
	
	Could not connect to any X display.
	```
	- Cancel job (delete any files that might have been created before stall) then run: `export DISPLAY=` and you can restart the extraction and it should work
		- For some reason having it set to localhost can mess it up? Assuming this has to do with when multiple people have logged in as maroonx and switching up who is local
- **AFTER RUNNING EVERYTHING** 
	- `cd /data10/MaroonX_spectra_reduced/` Run `ls 202507*/*SOOOE*.hdf | wc` and make sure it matches up with what is returned for the fits files with `cd /data10/MaroonX_spectra/` `ls 202507*/*SOOOE*.fits | wc`
	- If there is a discrepancy that means that some files were missed
-  If something goes wrong make sure to **remove old files**
	- Be very careful to have the specific files correct before removal
	- If you do not remove then when it is run again it will just append the new information creating very large files
- Command line arguments
	- -c is color 'r' or 'b'
	- -fr and -fb flat file using
		- Make sure to have the correct date
		- And use full file path
		- Different flats for each arm as different exposure time (2 seconds red blue is 7)
		- #Question what does the FFFFF mean? Some variation with D and F
			- All fibers are Flat
	- -dkd enter in the date take darks roughly every ten days 2025070x
		- For example: For July 2025, darks were taken on the 7th and 21st. So for data in 202507\[0-1\]?, you'd use the darks: 2025070x. And for 202507\[2-3\]?, you'd use the darks 2025072x
	- -d UTC date of observation e.g. 2025070* is all dates july 2025 1-9
	- -sl 5 (stray light removal on fiber 5)
		- #Question why only fiber 5
			- Removes light bleeding into this fiber (etalon fiber) from the science fibers
			- Don't want extra light as that can mess up the calculation of the instrument drift
	- -e exposure times
	- -od reduced data output directory
		- Data 1-10 have raw and reduced data
		- Currently at data10 but likely to loop to data 1 soon
		- MAROONX-spectra has raw data
		- MaroonX_spectra_reduced is reduced data
			- Maroonx_master_frames has the master frames. Reduced darks and flats currently 2025070x/darks and 202507xx flats
	- -dd data directory calling from
	- -t exposure type either S000E or DEEEE
		- SOOOE is science
		- DEEE DLLLL are calibration data
	- -dkf
		- However for the test because the masterframes don't exist there switch -dkd to -dkf to specify where they are 
		- `PYTHONPATH=${PWD} python reduce/batch_extraction.py -c 'b' -fb '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202507xx/flats/20250701T17_masterflat_backgroundsubtracted_FFFFF_b_0007.hdf' -dd '/data10/MaroonX_spectra/zeev_practice/' -od '/data10/MaroonX_spectra_reduced/zeev_practice/' -e '0300' -sl 5 -t SOOOE -d '2025070*' -dkf '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/2025070x/darks/2025070x_masterdark_mean_DDDDE_b_0300.fits' `
		- This requires updating the masterframe that is being used's color and exposure to match the science files
- Checks [[MAROON-X Outputs and Quality Control.pdf]]
	- Ideally don't want a lot of pixels rejected generally bad more than 20 pixels *regularly* is worth taking a note of
		- High signal data generally will have more rejected pixels (something like 300 seconds will have more than 1800s)
	- Correction step look to make sure there isn't a lot of modulation (some order visible but barely)
		- Flat field taken with science fibers and one with calibration fiber too. Then use space between orders to subtract background
		- Science frame has barely any background and always do background subtraction
	- Worth checking for flats and then one per night for the science data
		- Don't need to check every pdf since it has been working robustly
		- Would come up in later step if issue had occurred
	- Logs:
		- Use grep/fgrep to check for WARNING and ERROR
		- Using ` awk '/Rejected/ && $9>100' ./202507[0-1]?/*SOOOE*.log > ./bad_pixels_202507.txt ` can check if there are there a lot of rejected pixels
			- Make sure to change the date for what you are looking for
			- Can just scp the txt file since using vim in byobu is weird...
			- Shouldn't have more than 100 per order
			- If it just rejects the entire column this is ok. Happens in every image especially in red arm and long exposure times
		- Rejection for flux levels under 0.05%
			- A shift between the flat and science frames can lead to a large difference between the two
			- Would indicate that there is something wrong
			- If goes over 50% then becomes WARNING
### 2. Etalon flux extraction

^4ac7ff

- **Before running**
	- Check that all the colors are correct 
		- -c 
		- -fb or -fr
		- -f(b/r) the flat file name
	- Check that -t is correct 
	- Check that the date of the flat file is correct
- Run on **mxcrunch** (update flat dates and -d dates otherwise commands should be ok)
	1. Batch DLLLD red
		` PYTHONPATH=${PWD} python reduce/batch_extraction.py -c 'r' -fr '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202409xx/flats/20240916T19_masterflat_backgroundsubtracted_FFFFF_r_0002.hdf' -dd '/data10/MaroonX_spectra/' -od '/data10/MaroonX_spectra_reduced/' -e '*' -t 'DLLLD' -d '202507*' -sd 'all' ; curl -H "Priority: 4" -d "r DLLLD extraction finished" https://ntfy.sh/MAROON-X `
	2. Batch DLLLD blue
		` PYTHONPATH=${PWD} python reduce/batch_extraction.py -c 'b' -fb '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202409xx/flats/20240916T19_masterflat_backgroundsubtracted_FFFFF_b_0007.hdf' -dd '/data10/MaroonX_spectra/' -od '/data10/MaroonX_spectra_reduced/' -e '*' -t 'DLLLD' -d '202507*' -sd 'all' ; curl -H "Priority: 4" -d "b DLLLD extraction finished" https://ntfy.sh/MAROON-X `
	3. Batch DLLLL red
		` PYTHONPATH=${PWD} python reduce/batch_extraction.py -c 'r' -fr '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202409xx/flats/20240916T19_masterflat_backgroundsubtracted_FFFFF_r_0002.hdf' -dd '/data10/MaroonX_spectra/' -od '/data10/MaroonX_spectra_reduced/' -e '*' -t 'DLLLL' -d '202507*' -sd 'all' ; curl -H "Priority: 4" -d "r DLLLL extraction finished" https://ntfy.sh/MAROON-X `
	4. Batch DLLLL blue
		` PYTHONPATH=${PWD} python reduce/batch_extraction.py -c 'b' -fb '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202409xx/flats/20240916T19_masterflat_backgroundsubtracted_FFFFF_b_0007.hdf' -dd '/data10/MaroonX_spectra/' -od '/data10/MaroonX_spectra_reduced/' -e '*' -t 'DLLLL' -d '202507*' -sd 'all' ; curl -H "Priority: 4" -d "b DLLLL extraction finished" https://ntfy.sh/MAROON-X `
	5. Batch DEEEE red
		` PYTHONPATH=${PWD} python reduce/batch_extraction.py -c 'r' -fr '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202409xx/flats/20240916T19_masterflat_backgroundsubtracted_FFFFF_r_0002.hdf' -dd '/data10/MaroonX_spectra/' -od '/data10/MaroonX_spectra_reduced/' -e '*' -t 'DEEEE' -d '202507*' -sd 'all' ; curl -H "Priority: 4" -d "r DEEEE extraction finished" https://ntfy.sh/MAROON-X `
	6. Batch DEEEE blue
		` PYTHONPATH=${PWD} python reduce/batch_extraction.py -c 'b' -fb '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202409xx/flats/20240916T19_masterflat_backgroundsubtracted_FFFFF_b_0007.hdf' -dd '/data10/MaroonX_spectra/' -od '/data10/MaroonX_spectra_reduced/' -e '*' -t 'DEEEE' -d '202507*' -sd 'all' ; curl -H "Priority: 4" -d "b DEEEE extraction finished" https://ntfy.sh/MAROON-X `
- For DLLLE files have to do dark subtraction
	- Currently this can only be done locally
	- Tanya generally takes care of it but code is below
	```bash
	PYTHONPATH=${PWD} python reduce/batch_extraction.py -c 'r' -fr '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202509xx/flats/20250831T16_masterflat_backgroundsubtracted_FFFFF_r_0002.hdf' -dd '/data10/MaroonX_spectra/' -od '/data10/MaroonX_spectra_reduced/' -e '0020' -t DLLLE -d 20250915 -dkf '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/20250915/darks/20250915T00_masterdark_mean_DDDDE_r_0020.fits' -sd 5
	PYTHONPATH=${PWD} python reduce/batch_extraction.py -c 'b' -fb '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202509xx/flats/20250831T16_masterflat_backgroundsubtracted_FFFFF_b_0007.hdf' -dd '/data10/MaroonX_spectra/' -od '/data10/MaroonX_spectra_reduced/' -e '0025' -t DLLLE -d 20250915 -dkf '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/20250915/darks/20250915T00_masterdark_mean_DDDDE_b_0025.fits' -sd 5
	```
- General
	- ` PYTHONPATH=${PWD} python reduce/batch_extraction.py -c 'b' -fb '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202409xx/flats/20240916T19_masterflat_backgroundsubtracted_FFFFF_b_0007.hdf' -dd '/data10/MaroonX_spectra/' -od '/data10/MaroonX_spectra_reduced/' -e '*' -t 'DLLL?' -d '202507*' -sd 'all' ; curl -H "Priority: 4" -d "b DLLL? extraction finished" https://ntfy.sh/MAROON-X `
- Checks [[MAROON-X Outputs and Quality Control.pdf]]
### 3. Fitting etalon

^4f70b0

- **Before running**
	- Check that the colors are all correct -c -f(b/r)
- Run on **mxcrunch** for both colors
	- **DO NOT RUN UNTIL CODE IS ON SERVER**: (Has to be done locally currently) Two batches DLLLE
		- ` PYTHONPATH=${PWD} python reduce/batch_extract_etalon_positions.py -dd '/data10/MaroonX_spectra_reduced/' -fb '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202511xx/flats/20241114T19_masterflat_backgroundsubtracted_FFFFF_b_0007.hdf' -c 'b' -e '*' -t 'DLLLE' -d '202507*' -fs 5 ; curl -H "Priority: 4" -d "b DLLLE Etalon fitting finished" https://ntfy.sh/MAROON-X `
	- Two batches DEEEE
		- ` PYTHONPATH=${PWD} python reduce/batch_extract_etalon_positions.py -dd '/data10/MaroonX_spectra_reduced/' -fb '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202511xx/flats/ 20241114T19_masterflat_backgroundsubtracted_FFFFF_b_0007.hdf' -c 'b' -e '*' -t 'DEEEE' -d '202507*' -fs 2-5 ; curl -H "Priority: 4" -d "b DEEEE Etalon fitting finished" https://ntfy.sh/MAROON-X `
- Command line arguments
	- -fs fiber
	- -e exposure time
		- No worry about overloading server so can just do -e '**'
	- -t science data
	- -d data
	- -c color
	- -fb -fr flat
	- -dd data directory
- Checks [[MAROON-X Outputs and Quality Control.pdf]]
	- Takes longer but can run on a lot of data (months worth of data but take like a day+)
	- Check in every few hours
	- grep for ERROR
	- Typically expect peak of median flux 1-1.5
	- For errors check out [Calibration Spreadsheet](https://docs.google.com/spreadsheets/d/1B9okatlExAJA8iSA-mONATdKOFgi7dNcYgqaBEIM2gI/edit?pli=1&gid=975207402#gid=975207402) to see if there were weird things happening that night
- batch_extraction but for etalon frames
- No dark subtraction, straylight removal, box extraction fibers 2-5
- Bcs box extraction can do a lot of frames at once
- Take etalon frames twice every morning and twice every night
### 4. Fitting science frames
- **Before running**
	- Check that the colors are correct -fb/r and -c and that the correct color flat is chosen
	- Don't have to have the etalon frames fitted yet to do this
- **Run on mxcrunch for**
	- Red
		- ` PYTHONPATH=${PWD} python reduce/batch_extract_etalon_positions.py -dd '/data10/MaroonX_spectra_reduced/' -fr '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202411xx/flats/20241114T19_masterflat_backgroundsubtracted_FFFFF_r_0002.hdf' -c 'r' -d '202507*' -t SOOOE -e '*' -fs 5 ; curl -H "Priority: 4" -d "r science fitting finished" https://ntfy.sh/MAROON-X `
	- Blue
		- ` PYTHONPATH=${PWD} python reduce/batch_extract_etalon_positions.py -dd '/data10/MaroonX_spectra_reduced/' -fb '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202411xx/flats/20241114T19_masterflat_backgroundsubtracted_FFFFF_b_0007.hdf' -c 'b' -d '202507*' -t SOOOE -e '*' -fs 5 ; curl -H "Priority: 4" -d "b science fitting finished" https://ntfy.sh/MAROON-X ` 
- Checks [[MAROON-X Outputs and Quality Control.pdf]]
	- Run **fgrep */*.log ‘ERROR'**
		- Used ` grep -F 'ERROR' /data10/MaroonX_spectra_reduced/202507*/*.log ` to actually get it outputted not sure why...
	- Common science errors are peak max/min mismatch
		- Caused by image artifacts/cosmic rays that weren't handled properly
		- To fix: provide etalon reference `-g '/data10/MaroonX_spectra_reduced/20250101/20250101T000000_DEEEE_b_0030.hdf'`
### 5. Wavelength and drift solutions
- **Before running**
	- Check that the color is correct
- **Run on mxcrunch for**
	- r DEEEE
	- b DEEEE
- **Only on DEEEE frames**
- ` PYTHONPATH=${PWD} python analyze/recipes/batch_etalon_spline_wls.py -d '202507??' -c 'b' -m True -dd /data10/MaroonX_spectra_reduced/ -o 'DEEEE' ; curl -H "Priority: 4" -d "b wavelength and drift solutions finished" https://ntfy.sh/MAROON-X `
- Command arguments
	- -d UTC date of file
	- -o observation type
		- DEEEE
	- -c color
	- -m multithreading
	- -dd data directory
- What it does
	- Calculating what the drift is over time of the etalon
	- Adds drift to each observation
- Checks [[MAROON-X Outputs and Quality Control.pdf]]
	- Full calibration on DEEEE then transfer to science frame using etalon SOOOE
	- Most useful are plots
		- Orders should like similar to neighboring ones
		- Should follow a smoothish pattern
		- After applied should get 11m/s for blue (?) and 5m/s for red and also smooth
		- Should just look like prior plots
	- Logs
		- Calculates instrument drift
			- Absolute useful if something going wrong
			- Relative is how much it has shifted over the night compared to etalon reference
				- Fibers 2-4 should match within 1m/s of fiber 5
		- Don't generally use these numbers for initial data reduction quality control
		- But bad lines per order is useful to track to make sure everything is good
### 6.  Transferring solutions
- **Run per color**
- **Run on SOOOE frames**
- ` PYTHONPATH=${PWD} python analyze/recipes/batch_science_spline_wls_dynamic.py -d '202507*' -c 'r' -m True -dd /data10/MaroonX_spectra_reduced/ -o 'SOOOE' ; curl -H "Priority: 4" -d "transferring solutions finished" https://ntfy.sh/MAROON-X `
- Command arguments
	- -d UTC date of file
	- -c color
	- -m multithreading
	- -dd data directory
	- -o observation type
- Transfers the etalon WLS (wavelength solution) from step 10 to science frames
### 7. Combine to fiber 6
- ` PYTHONPATH=${PWD} python analyze/recipes/combine_science_fibers.py -dd '/data10/MaroonX_spectra_reduced/' -d '202507*' --max_clip 20 ; curl -H "Priority: 4" -d "combine to fiber 6 finished" https://ntfy.sh/MAROON-X `
- Command arguments
	- -dd data directory
	- -d date
	- --max_clip the maximum pixels per order that are part of [[Kappa-sigma clipping]] 
- Combines fibers 2-4 into an artificial fiber 6
### 8. Barycentric correction
- **Run on mxcrunch for**
	- Each target object
		- Use the spreadsheet to keep track
- ` PYTHONPATH=${PWD} python analyze/recipes/batch_barycor.py -dd '/data10/MaroonX_spectra_reduced/' -d '202507*' -n 'Barnard Star' ; curl -H "Priority: 4" -d "barycenter correction finished" https://ntfy.sh/MAROON-X `
	- Don't need -p anymore because information is stored in the fits file
- Command arguments
	- -n is the name from SIMBAD if not --use-coords true
- If for older data that doesn't have the exposure meter files alongside it add the following `-p '/data10/MaroonX_spectra_reduced/Maroonx_masterframes/202311xx/expmeter/expmeter112023.pkl'`
- Want to have
	- FRD ~2.0 PC ~15.8-15.9
- **RECOMMENDED PROCESS**
	- Run the barycenter corrections for all stars through regardless of results
	- Check that there are the correct number of logs should be equal to the number of observations (just check one color) ` ls /data10/MaroonX_spectra_reduced/202509*/*_r_*exposuremeter.log | wc `
		- Sometimes it will complete the run but no files are analyzed
			- This is likely to happen for targets that are not in SIMBAD or in SIMBAD under a different name
		- Compare between the reported targets in the logs and the expected targets ( from data reduction log)
	- If there is a mismatch in the ls command and what is in the spreadsheet
		- Run in `/data10/MaroonX_spectra_reduced/` `python zev_missing_bary_cor.py` (adjusting the path inside for the right date)
		- This outputs a list of found stars that have had the barycenter correction applied
		- Copy this list into a spreadsheet and also the stars from the data reduction spreadsheet
		- Having them side by side can see which ones are missing
		- Then look for them in SIMBAD
			- If in SIMBAD but different name: add ` -sn SIMBAD_TARGET_NAME `
			- If not in SIMBAD at all: add ` --use_coords True `
	- Run `python zev_analyze_bary_cor_logs.py` (adjusting the path inside for the right date) outputs a list of all the stars (and which files specifically) have weird pc and frd counts beyond a certain (adjustable) range
	- Rerun the barycenter corrections with the additional  ` --zp_pc 15.9 --zp_frd 2.0 ` for all the stars that are outputted
- If there is the following error:
	```bash
	qt.qpa.screen: QXcbConnection: Could not connect to display localhost:10.0
	Could not connect to any X display.
	```
	- Then run: `export QT_QPA_PLATFORM=offscreen` and rerun the code
- Checks [[MAROON-X Outputs and Quality Control.pdf]]
	- Look at exposuremeter.pdf file
		- Want FRD to be at 2.0. If it starts suddenly changing look at exposure meter file
	- FRD: focal ratio degradation
		- But gives more flux than PC (photon count per millisecond)
	- PC and FRD should look about the same except for faint sources where PC doesn't have enough flux so future steps use FRD
	- FRD and PC baselines stay roughly constant but can have individual shifts in baselines (ex for full moon)
	- Measure before and after the exposure
		- Exposure marked by black lines
		- If multiple exposures taken in a row (like transit) never go off the source so don't get a background measurement
		- So set the base level manually
	- Logs
		- Go through logs and check for background levels to make sure no deviations from expected
### 9. Pandas Packaging
- ` PYTHONPATH=${PWD} python analyze/recipes/batch_spec_to_pandas.py -dd /data10/MaroonX_spectra_reduced/ -d '202507??' -t '*' ; curl -H "Priority: 4" -d "pandas packaging finished" https://ntfy.sh/MAROON-X `
- Checks [[MAROON-X Outputs and Quality Control.pdf]]
	- Doing error propagation and does another outlier rejection amongst fibers
	- Normal level of above 5 sigma gets cut but this led to sometimes whole fibers being rejected so set a limit on how many pixels
		- Iteratively raises sigma limit until only set number of pixels clipped
	- If getting large number of clipped pixels just set a maximum (just do this to begin with)
---
# 3. Special DEEEE Reduction
- Reducing DEEEE files by transferring the wavelength solution from fiber 5
## Move files
- Move the normal files in a way that maintains folder structure
```
rsync -av --include='202504*/' --include='*DEEEE*hdf' --exclude='*' /data10/MaroonX_spectra_reduced/ /data10/MaroonX_spectra_reduced/backup_DEEEE/
```
- Move them back after moving the newly reduced files to a different directory
```
rsync -av --include='202504*/' --include='*DEEEE*hdf' --exclude='*' /data10/MaroonX_spectra_reduced/backup_DEEEE/ /data10/MaroonX_spectra_reduced/
```
## 1.  Flux extraction
- Done as normal see [[MAROON-X Data Reduction#^4ac7ff]]
## 2. Line fitting
- Done as normal see [[MAROON-X Data Reduction#^4f70b0]]
## 3. Drift solution using batch_science_spline_wls_dynamic.py
- For red arm:
` PYTHONPATH=${PWD} python analyze/recipes/batch_science_spline_wls_dynamic.py -d '202508*' -c 'r' -m True -dd /data10/MaroonX_spectra_reduced/ -o 'DEEEE' 
- For blue arm:
` PYTHONPATH=${PWD} python analyze/recipes/batch_science_spline_wls_dynamic.py -d '202508*' -c 'b' -m True -dd /data10/MaroonX_spectra_reduced/ -o 'DEEEE' `

## 4. SERVAL
 [Running SERVAL guide](https://docs.google.com/document/d/1TsDIj4Ws4-Wg8tivqtu6wXjJaxwUfqvRtCC9iU3pL4Q/edit?usp=sharing)  Also provides some troubleshooting tips and how to look through QC files
### 1. Determine What Programs Need RVs
- Go to Gemini OT
- Add all the programs for this month based off the keys at the bottom of the [Maroon-X runs spreadsheet](https://docs.google.com/spreadsheets/d/1jLNXt3G-6MPNY9XhzvsaaQOpZQnfLwBEEsXLoBx8fCQ/edit?gid=446310336#gid=446310336) 
	- Add GN-2025B-Program Letters-Program number
	- Adjust year and part of year A or B as needed
- Download all the program summaries for the program IDs for the month
- Go through the summary and see if radial velocity is needed
	- Often written in abstract
	- But also can search for SERVAL or radial velocity within the summary and it should pop up
- If there is mention of $v_{los}$ which is radial velocity and the stars are RR Lyrae it isn't expected to run SERVAL for these, it will just return super high RVs and isn't the right method. Can just send out the spectra as is
### 2. SERVAL Generate Lists
- **Run on mxred for**
	- Each color 
	- Each target
- **Before running**
	- Ensure color is correct
		- Input files
		- Name out output file
	- Target name is correct
		- -ff
		- Output file
	- Dates are correct
		- -dd
		- -f
		- Output file
- Command
	- ` hdf_header.py -dd '/data10/MaroonX_spectra_reduced/2025*/' -f '2025*SOOOE*_b_????.hdf' -ff "TARGETNAME=GJ 908" > GJ908_2025B_blue.lis `
	- If doing transits make sure to set the dates such that each transit gets its own file and own SERVAL run
- If it doesn't work with it saying the hdf file isn't open change the ???? in the -f to the exposure time 
	- If multiple exposure times just create the file as normal with > and then for following exposures concatenate to that file with >>
- Similarly if multiple months can just concatenate the files together for each month
- **NOTE** for 2024 data should only include data from /data7/ this is the data that has had the darks correctly shifted while the data in /data10/ does not
- Note: for data in 2023 in /data/ and /data10/ should be the same so just choose one to avoid duplication
### 3. Run SERVAL
-  First ` cd /home/maroonx/Repos/serval3_maroonx/src `
- Then ` conda activate serval3_maroonx `
- **Run on mxred for**
	- Each color
	- Each target
- **Before running:**
	- Ensure the color is correct
		- --instrument
		- --inputlist
		- --outputdir
	- Ensure the target name is correct
		- --inputlist
		- --outputdir
		- ' ' at the end
- ` python maroonxserval.py --instrument MAROONXredcoadd --inputlist /home/maroonx/serval/GJ908_2025BJul_red.lis --outputdir /home/maroonx/serval3/GJ908_2025B/ --K_upper_limit 3000 --snrmax 10000 'GJ908' ; curl -H "Priority: 4" -d "SERVAL run finished" https://ntfy.sh/MAROON-X `
- If a planet isn't recognized in SIMBAD look for it https://exofop.ipac.caltech.edu/tess/
	- Copy and paste into SIMBAD either the coordinates from exofop or the FITS header
		- SIMBAD will give a map that marks your coordinates and any nearby catalogued stars
		- If it’s in SIMBAD under an alternative name use the arguments ` 'TOI-7265' -simbadname [the name SIMBAD has] `
		- If there’s no matching targets at all, then you’d have the code call target coordinates from the FITS header, as ` 'TOI-7265' -use_coord True `
- If it fails with something like:
	```
  Traceback (most recent call last):
  File "maroonxserval.py", line 166, in <module>
    args.vref = spall.vref[0]
    IndexError: index 0 is out of bounds for axis 0 with size 0
	```
	- This is likely a result of there not being enough observations with enough SNR (there is a cut of 10 < SNR < 1000)
	- Can double check this by looking at the log file for the blue arm and confirming this is the case
### 4. Checking SERVAL plots
- If the stellar activity lines are misaligned
	- Run ` /data10/MaroonX_spectra_reduced/python zev_adj_rv.py `
		- Adjust star_name
		- Requires SERVAL to have already been run
		- Will take the star name and add in dashes where there are blank spaces to find the files
	- Take the output corrections for each arm and rerun SERVAL with the `--vref` parameter with whatever number corresponds to this star's offset for this color
- If some of the orders in serval do not look well converged in the chi2 plots
	- Add `--o_excl` followed by each of the order numbers in the serval command
- **CHECKS**
	- See [[MAROON-X Outputs and Quality Control.pdf]] for general idea of what to look for
	- If there are some orders where the $\chi^2$ is particularly bad can rerun SERVAL with the `--o_excl` command and then just write out the orders that are bad
	- Check [Instructions for running SERVAL3 on mxred](https://docs.google.com/document/d/1TsDIj4Ws4-Wg8tivqtu6wXjJaxwUfqvRtCC9iU3pL4Q/edit?tab=t.0#heading=h.w7ocvv15du49) as well for some more things to look out for
	- To move data over: `rsync -avzP --exclude="*.hdf5" -e "ssh -J zvladimir@bastion.psd.uchicago.edu" maroonx@mxred.uchicago.edu:/home/maroonx/serval3/TOI-2094_Narita/ ~/MAROON-X/QC/serval/`
---
## 4. Packaging Data and Sending it out
- [Packaging and distributing data guide](https://docs.google.com/document/d/1tmEtEy7zzqezGsFKC0aCfSRFp4YaC2VOnWIk3NqyZ7c/edit?usp=sharing)  
- [NP packaging time series guide](https://docs.google.com/document/d/1quh3iLtGjRiWjABfV09kPP0l0IdALZRgPjKSnBodE2c/edit?tab=t.0) For time series of MAROON-X spectra used to analyze transit and eclipse data by some PIs is based on a numpy datacube.
 - [Data Handling and Distribution Slides](https://docs.google.com/presentation/d/1tbLOh-xJFketCU6C0qbNMzpLXQq9gbvG/edit?slide=id.p1#slide=id.p1)
### 1. Package FITS files
- Done on mxred
- ` cd /data10/MaroonX_spectra/`
- ` dfits /data10/MaroonX_spectra/2026*/*SOOOE*.fits | fitsort 'HIERARCH MAROONX TELESCOPE PROGRAMID' | fgrep -i '26A-Q-218' | awk '{print $1}' > GN-2026A-Q-218_inlist_fits.txt `
	- Before would
	- ` dfits 2025*/*SOOOE*.fits | fitsort 'HIERARCH MAROONX TELESCOPE PROGRAMID' | fgrep -i '25B-FT-215' > GN-2025B-FT-215_inlist_fits.txt `   
		- (or swap out ‘**PROGRAMID**’ for ‘**TARGETNAME**’)  
		- Creates a list of all the fits file paths
	- ` trim_dfits.sh GN-2025B-FT-215_inlist_fits.txt `
		- Removes any extra information at the end besides the actual file paths
- ` tar -czvf GN-2026A-Q-215_FITS.tar.gz -T GN-2026A-Q-215_inlist_fits.txt ; curl -H "Priority: 4" -d "tarred and zipped FITS files" https://ntfy.sh/MAROON-X `
	- Old way first tarred then zipped
		- ` tar -cvf GN-2025B-FT-215_FITS.tar -T GN-2025B-FT-215_inlist_fits.txt ; curl -H "Priority: 4" -d "tarred FITS files" https://ntfy.sh/MAROON-X `
			- Tar the all the files together -T tells tar to use the file paths to get those files
		- ` gzip -v GN-2025B-FT-215_FITS.tar ; curl -H "Priority: 4" -d "zipped FITS files" https://ntfy.sh/MAROON-X `
			- Zips up the tarball
### 2. Package QC files
- Done on mxred
- ` cd /data10/MaroonX_spectra_reduced/ `
- ` cp /data10/MaroonX_spectra/GN-2026A-Q-215_inlist_fits.txt . `
	- Copy the .txt with all the file paths from Step 18 to this directory
- `sed -i 's/MaroonX_spectra/MaroonX_spectra_reduced/g' /data10/MaroonX_spectra/TOI-1693_inlist_fits.txt`
	- Convert the paths to where the QC files are stored
- ` convert_fits_to_logs.sh GN-2026A-Q-215_inlist_fits.txt ` 
	- Gets all the file paths for logs and plots for each of the observations
	-  If some log or pdf files are not found that likely means the flux extraction was not run for that
	- Ex: shows that the science flux extraction had not been run for blue 1800s science
```
ls: cannot access '20250702/20250702T131007Z_SOOOE_b_1800*.log': No such file or directory
ls: cannot access '20250702/20250702T131007Z_SOOOE_b_1800*.pdf': No such file or directory
```
- ` tar -czvf GN-2026A-Q-215_QC.tar.gz -T GN-2026A-Q-215_inlist_fits.txt.logs ; curl -H "Priority: 4" -d "tarred and zipped QC files" https://ntfy.sh/MAROON-X `
	- Old method first tars then zips
		- ` tar -cvf GN-2025B-FT-215_QC.tar -T GN-2025B-FT-215_inlist_fits.txt.logs ; curl -H "Priority: 4" -d "tarred QC files" https://ntfy.sh/MAROON-X ` 
		- ` gzip -v GN-2025B-FT-215_QC.tar ; curl -H "Priority: 4" -d "zipped QC files" https://ntfy.sh/MAROON-X`
### 3. Package H5 files
- Done on mxred
- ` cd /data10/MaroonX_spectra_reduced/ ` 
- ` hdf_header.py -d '/data10/MaroonX_spectra_reduced/2026*' -f '2026*SOOOE_b_????.hdf' -ff 'PROGRAMID=GN-2026A-Q-215' > GN-2026A-Q-215_inlist_hd5.txt ; curl -H "Priority: 4" -d "created h5 file list" https://ntfy.sh/MAROON-X `
	- (or swap out ‘**PROGRAMID**’ for ‘**TARGETNAME**’)  
- ` zev_convert_serval_to_hd5.sh GN-2026A-Q-215_inlist_hd5.txt `
	- My version keeps the full paths so that if combining files across different data directories they are accurately found
	- ` convert_serval_to_hd5.sh GN-2026A-Q-215_inlist_hd5.txt `
- If you are doing over multiple years and/or there is the potential for duplication in the files in the list run the following to check
	- ` sort Barnard_2021A_to_2024B_inlist_hd5.txt | uniq -d `
- If the list is long/good practice you can check if any of the files don't exist. They likely just have been shifted by 1 second so just search +- 1 second around the expected time and replace the file name in the list
	- ` xargs -a Barnard_2021A_to_2024B_inlist_hd5.txt -I{} sh -c '[ ! -e "{}" ] && echo "MISSING: {}"' `
- ` tar -czvf GN-2026A-Q-215_HD5.tar.gz -T GN-2026A-Q-215_inlist_hd5.txt  ; curl -H "Priority: 4" -d "tarred and zipped h5 files" https://ntfy.sh/MAROON-X `
	-  (If the tarring fails, check that the hd5 timestamps listed match the actual hd5 files.)
		- This is generally if there is a 1 second difference between the red and blue arms and so the \_x\_ file can end up in a directory one second off than the one in the list of file paths. To fix this just correct the path to the right one
	- Old method first tar then zip
		- ` tar -cvf GN-2025B-FT-215_HD5.tar -T GN-2025B-FT-215_inlist_hd5.txt  ; curl -H "Priority: 4" -d "tarred and zipped h5 files" https://ntfy.sh/MAROON-X ` 
		- ` gzip -v GN-2025B-FT-215_HD5.tar  ; curl -H "Priority: 4" -d "zipped H5 files" https://ntfy.sh/MAROON-X `
### 4. Package SERVAL files (if RVs requested)
- ` cd  /home/maroonx/serval3/ `
- ` tar -czvf GN-2026A-Q-221_SERVAL.tar.gz Gl486_2025B  ; curl -H "Priority: 4" -d "tarred and zipped serval files" https://ntfy.sh/MAROON-X`
	- Old method first tar then zip
		- ` tar -cvf GN-2025B-Q-221_SERVAL.tar Gl486_2025B  ; curl -H "Priority: 4" -d "tarred serval files" https://ntfy.sh/MAROON-X` (skip ‘-T’) 
		- ` gzip -v GN-2025B-Q-221_SERVAL.tar  ; curl -H "Priority: 4" -d "zipped SERVAL files" https://ntfy.sh/MAROON-X`
### 5. Add files to Box
- Create a folder for the program in [Box](https://uchicago.app.box.com/folder/123374085540)
- Use `filezilla` to upload zipped tar files from prior steps
	- Need to have xquartz https://www.xquartz.org/ and filezilla installed
	- In the top under bookmarks click reconnect to last used server to connect to the box server
	- Go to where the files just packaged are and double click them to transfer over
	- If filezilla doesn't work try `. byobu-reconnect-sockets` and rerun
- Add plot_pandas_spec.py
	- Change the file variable for the science file to one used in the packaging
- Add the master flats for each month used for the science data 
	- For example `/data10/maroonX_spectra_reduced/Maroonx_masterframes/202507xx/flats/20250602T17_masterflat_backgroundsubtracted_FFFFF_x_0002.hd5`
---
### Package Old Data
- Use the [MAROON-X Data Reduction Log Spreadsheet](https://docs.google.com/spreadsheets/d/1J0q-3RQ8wDYduAWej8Uz-9U2m5JHjx9IWIDlUOawJvA/edit?pli=1&gid=1123084410#gid=1123084410) to determine which data directory the files are stored, indicated in the top of each page (Raw Data: fits and Reduced Data: hdf)
- Some data if taken across months will be in different directories so adjust command as needed
#### Zipped FITS files
- Some old files are now zipped so just look at header. Can also adjust like before TARGETNAME to use PROGRAMID but before ran into issues where PROGRAMIDs were not kept
```bash
python3 -c "
import glob, astropy.io.fits as fits
for f in sorted(glob.glob('2020*/*SOOOE*.fits.gz')):
    try:
        hdr = fits.getheader(f)
        target = hdr.get('MAROONX TELESCOPE TARGETNAME', '')
        if 'WASP-76' in target.upper():
            print(f)
    except:
        pass
" > GN-2020B-FT-208_inlist_fits.txt
```
- `tar -czvf /data10/MaroonX_spectra/GN-2020B-FT-208_FITS.tar.gz -T GN-2020B-FT-208_inlist_fits.txt`
#### Unzipped FITS files 
```bash
python3 -c "
import glob, astropy.io.fits as fits
for f in sorted(glob.glob('/data3/MaroonX_spectra/2021*/*SOOOE*.fits')):
    try:
        hdr = fits.getheader(f)
        target = hdr.get('MAROONX TELESCOPE TARGETNAME', '')
        if 'HD 133112' in target.upper():
            print(f)
    except:
        pass
" > GN-2021A-Q-218_inlist_fits.txt
```
- `tar -czvf /data10/MaroonX_spectra/GN-2021A-Q-218_FITS.tar.gz -T GN-2021A-Q-218_inlist_fits.txt`
#### H5 files
- The old hdf files don't seem to contain TARGETNAME or PROGRAMID so use BERV_SIMBAD_TARGET instead
```bash
python3 -c "
import glob, h5py
for f in sorted(glob.glob('/data6/MaroonX_spectra_reduced/2021*/*SOOOE_*_????.hdf')):
    try:
        with h5py.File(f, 'r') as hf:
            target = hf['header'].attrs.get('BERV_SIMBAD_TARGET', b'').decode()
            if 'HAT-P-70' in target:
                print(f)
    except:
        pass
" > GN-2021B-Q-220_inlist_hdf.txt
```
- There are also no hd5 files so we just tar together all the hdf files
`tar -cvf GN-2020B-FT-208_HDF.tar -T GN-2020B-FT-208_inlist_hdf.txt`
- For some older data there are no combined \_x\_ files and instead adjust the command to not only pull blue files but both blue and read and tar all of those together
	- `hdf_header.py -d '/data[5-6]/MaroonX_spectra_reduced/2021*' -f '2021*SOOOE_[rb]_????.hdf' -ff 'TARGETNAME=HAT-P-70' > GN-2021B-Q-220_inlist_hd5.txt`
## 5. Email professor
### Email template
Hello Dr. ,

I’m very sorry for the delay in updates – wrapping up reductions took much longer than expected. It also seems that TOI-6235 and TOI-6342 both have much larger radial velocities than expected, on the order of 20-80 km/s, which is far outside of our typical range. We’re still tinkering with SERVAL’s settings to try and get the best results possible, but honestly, we’re not sure how reliable the outcome will be after making so many alterations. I’ll toy with it over this weekend and try to give you an update early next week. Regardless, we’d recommend an additional alternative method of measuring the RVs for these two targets.

In the meantime, you can download the reduced spectra and K2-65 SERVAL results here: [https://uchicago.box.com/s/mzo0899d7eof0fixs471dnz5il6nln4f](https://uchicago.box.com/s/mzo0899d7eof0fixs471dnz5il6nln4f)

Which contains the following tar.gz archives:
GN-2025B-Q-116_FITS.tar.gz: contains your raw data  
GN-2025B-Q-116_HD5.tar.gz: contains reduced data as hdf pandas store files  
GN-2025B-Q-116_QC.tar.gz: contains selected pdfs and log files as part of the 'quality control' of the data reduction pipeline process  
GN-2025B-Q-109_SERVAL.tar.gz: contains SERVAL3 outputs for 

There’s also three masterflats:  
20240916T19_masterflat_backgroundsubtracted_FFFFF_x_0002.hd5: used to reduce data from Aug 01 – Oct 31  
20241114T19_masterflat_backgroundsubtracted_FFFFF_x_0002.hd5: used to reduce data from Nov 01 – Jan 09  
20250115T17_masterflat_backgroundsubtracted_FFFFF_x_0002.hd5: used to reduce data from Jan 10 – Jan 31

There is an additional file with the instrument response function that you can download here: [https://uchicago.box.com/s/rsvct86l0struq9ap9eafn4ljjnnz87v](https://uchicago.box.com/s/rsvct86l0struq9ap9eafn4ljjnnz87v)

You’ll also find a python script: plot_pandas_spec_2025B-Q-243.py will load one of your reduced data files in hdf pandas format as well as the instrument response function. It then produces plots, order-by-order, for the reduced spectrum, SNR, and the spectrum after correction for the instrumental throughput. The python file contains some inline comments that will hopefully help you understand the data structure of the hdf pandas store files.

MAROON-X has had an operational laser frequency comb (LFC) since June 2023. We are still working on the best way to incorporate the LFC data into the drift solution of the spectrograph. In the meantime, we still rely on our white light etalon calibrator for this. We thus expect long term drifts of the order of 3 cm/s/day. Once the LFC has been used to correct for those, we will re-analyze your data and notify you.


Some general info and pointers about the spectra:
- The blue and red channels of MAROON-X are reduced separately, file names indicate the channel with '_b_' or '_r_'. The pandas store file (.hd5) has the data from both channels combined into one file per observation ('_x_' in the filename).
- There are three science fibers, number 2, 3, and 4. Fiber 1 has the sky background, fiber 5 is the simultaneous calibration fiber and has an etalon spectrum. The data reduction also includes a step to combine the flux of the three science fibers into a 'virtual fiber', fiber 6. This is done with proper weighting and error propagation. Note that fiber 6 is not the added flux of fiber 2, 3, and 4 but rather a weighted and re-scaled mean. So the counts are somewhat arbitrary and the uncertainty vector ('optimal_var') needs to be used for proper error propagation (as opposed to estimating the error from the square root of the flux). I encourage you to use the combined flux in fiber 6 for your analysis. Also note that the optimal extracted flux from the individual science fibers (2, 3, 4) contains NAN values where defects on the CCD or cosmic ray hits did not allow for a proper flux extraction. If all three fibers have no useful flux for a given pixel, these NAN values are filled with interpolated flux in fiber 6, but their respective error value is set to a very high number such that the effective SNR for these pixels is close to 0. We found this useful for RV analysis as NaN values are not always handled correctly.
- The flux error is saved always as the variance, not as the standard deviation and is only saved for the optimum extracted flux. The variance of the box extracted flux is simply the flux divided by the gain (2.7e-/DN).
- Dividing by the instrument response function removes the majority of the instrument response (blaze functions and overall throughput) and reveals the underlying SED of the stellar spectrum. There is no correction for extinction or tellurics though. There are a number of imperfections left: (1) after a recent instrument intervention, our blue throughput went up, which is not yet taken into account in the response function; (2) there are also some 'bumps' left in the response function, particularly around 840nm; and (3) the echelle order overlaps still have some minor flux offsets. 
- The wavelength vector of each file contains the final wavelength solution which includes the instrumental drift solution.
- The header info (see python file) and the exposure meter log files (in the QC package) contain the barycentric velocity corrections for each observation. Please use the 'BERV_FLUXWEIGHTED_FRD' values. These are properly weighted for the time-variable throughput during the observation as measured by our exposure meter.


Radial velocity results:
- We have analyzed the spectra using the SERVAL pipeline ([https://www.aanda.org/articles/aa/abs/2018/01/aa31483-17/aa31483-17.html](https://www.aanda.org/articles/aa/abs/2018/01/aa31483-17/aa31483-17.html)), rewritten in python3 by our collaborator Guðmundur Stefánsson at Princeton. In short, the RV analysis is based on a template matching code which typically outperforms classical binary mask x-correlation codes for M-dwarfs.


Some notes on the SERVAL RV results:
- Blue and red channels are reduced separately.
- The main instrument drift is corrected for in the wavelength solution.
- Main results are in csv files `**Star-Name**_rv_unbin.csv` for each channel. For an explanation of the columns in the file, see the end of this email.
- Both red and blue channels capture the H-alpha line. 


Here are the definitions and units of all of the columns in the SERVAL csv files:
- bjd- Julian Date (days)  
- rv/e_rv- Barycentric-corrected radial velocity (and its error), in m/s. These are the final versions of the RVs with all corrections applied and should be able to be used directly to perform science.  
- sn_peak - Peak signal-to-noise in observation  
- exptime - exposure time, in seconds  
- drift - additional instrument drift incorporated in RVs, in m/s (if any)  
- berv - final barycentric correction to radial velocity, incorporated in RV, in km/s  
- fw_berv - flux midpoint-corrected barycentric correction to radial velocity, in km/s  
- nom_berv - nominal exposure midpoint barycentric correction, in km/s  
- v_ref - Absolute RV (from SIMBAD or manual input) of target for line activity index calculations, in km/s  
- qprog - Gemini Program ID  
- airmass - observation airmass  
- filename - name and location of data file on MAROONX server  
- dLW/e_dLW - Differential linewidth of observation (an activity indicator described in the serval documentation), in 1000 m^2/s^2  
- crx/e_crx - Chromatic index of observation (an activity indicator described in the serval documentation), in m/s/Np  
- ln_order_center - ignore  
- irt_ind/irt_ind_e - CaIRT activity indices of observation.  
- h_alpha_v/h_alpha_e - Halpha activity indices of observation.  
- nad_v/nad_e - NaD activity indices of observation.

Please don’t hesitate to contact me, or the whole team at [maroonx_science@gemini.edu](mailto:maroonx_science@gemini.edu), with any questions as you go through your data.

Best,
Ze'ev Vladimir

[[MAROON-X__Reduction_data_flow_charts.pdf]]


# Archive
## Viewing raw data

^00d1a8
- Using DS9
	- [x] #TODO download DS9  [completion:: 2025-07-29]
- View fits files
- CCD overscan: when reading out from the CCD and moving can keep clocking and read pixels that aren't there giving you a bias and then subtract that from all pixels since it is everywhere. Results in *artificial* gap when the spectrum is continuous ignoring that gap
- Difference between red and blue arms
	- Blue has 4 separate readouts resulting in 4 quadrants
	- Red has only two working ones
	- Red is "upside down" etalon fiber is on top. Is because readout goes the other way. But physically there is no difference
	- Blue starts from bluest at bottom and reddest at top
	- Red starts and reddest at the bottom and bluest at top
- Each band is an echelle spectral order
- Within the order there are traces from each fiber
	- There are 5
	- The sky one is dark
		- Not useful bcs not much light pollution
	- The etalon calibration one that is split up light. Not continuous spectra
	- 3 fibers for the science
		- Start with one fiber that gets star lights
		- Goes through pupil slice which splits it in 3 and then goes into these 3 fibers
		- More light goes into the central one than the ones on the edges of the pupil slicer
- Generally etalon is brighter than science unless star is really bright
	- So change scale to log to better see science
- Sometimes still bright emission lines that appear in the sky fiber
	- Can then see that imprint (of more light) in the science fibers
	- But decided its just easier to ignore these positions using masks when calculating RVs rather than trying to remove it
- Absorption lines appear in the science fibers as "missing light"
	- Can be from Earth or from star
- Data reduction pipeline is trying to go from 2D data to 1D data
	- There is no information in the cross dispersion direction (vertical)
	- Don't want spatial information of where in the detector the light is. Just want wavelength and flux information which is horizontal
- For each column add up all the light that falls into the traces of the individual fibers
	- Box extraction
	- Works fine if there weren't any disturbances on the CCD itself but there are artifacts (ex. cosmic rays or radioactive sources like the ground or some lenses)
- Optimal extraction
	- Compares for each column the measured spectrum with the expected flat field spectrum from a bright continuum lamp that doesn't have influence from the sky or generally cosmics since small exposure time or take multiple and since the cosmics won't repeat can then easily remove
	- Weights parts of the spectrum where there is less flux
	- Some cases where more than half of the pixels are affected by a cosmic so mark that column as bad. So then rely on the other fibers where if 2/3 are good just use those and throw out the other
- Can sometimes just have issues with the CCD and CCD readout where there are whole dark columns or whole bright columns. Or smears in the readout. Or hot spots.
	- Since these don't change in each image create a bad pixel mask
	- Can then just remove easily the bad pixels
- Results after condensing to 1D
	- Take an imprint of Na that often show up in stars but is also in our atmosphere and also in the ISM
	- Each peak shape is a spectral order
		- As a result of the CCD always having more light towards the middle than towards the edges (blaze function)
		- There is a wavelength where for each order their is the highest efficiency and then further from that it goes down
	- Depending on how the star is moving can get a spectral shift of the Na line. While earth's atmosphere doesn't really shift when looking up (a rest wavelength)
	- Echelle orders have spectral overlap
		- On the edges cover similar wavelengths
	- Flux per order depends on 
		- The stellar spectrum (M dwarfs will have more in the red)
		- Efficiency of the spectrograph. Seen in the envelope of the results 
			- Correct this with the blaze with a flat field source
			- Or compare to a known star
	- Can get artifacts after adjusting for the blaze
		- Based off imperfect blaze function or too much noise
		- Can get a lot of overlap like transition from blue to red arm
		- Since RV measurements are order by order not as much of an issue.
## File structures
### Flat Files
- Take flats as DDDDF and DFFFD separately, and then reduce and combine them into FFFFF frames (technically DFFFF  -- physically cannot illuminate fiber 1/sky due to guider problems, but not a problem as the sky fiber isn't used in reduction). 
	-  Note 5 letters for 5 fibers
	- D is dark F is flat
- Only need to use the FFFFF flats for reduction, the others are still mid-reduction flats
### HDF Files 
- Look like `20250321T130941Z_SOOOE_**b**_0300.hdf` and `20250321T130941Z_SOOOE_**r**_0300.hdf` 
	- These files are usable to run SERVAL
	- Keys
		- For the fiber subgroups Blue has keys (orders) of 91-124 and red has keys (orders) of 67-94
		- Extraction and strips files are from *flux extraction* or the first step of reduction
			- Extractions
				- [[Box Extraction]]
					- Fibers 2-5
				- [[Optimal Extraction]]
					- Fibers 2-4, 6
						- #Question why no etalon fiber 5?
							- In current implementation its computationally expensive and takes a lot of time
							- Optimal extraction not suited for emission line spectra. Depends on info from flat field to determine template. Get different line and shape than in box extraction from systematic effect. Not necessary as time frame is short so limited cosmic rays and generally high SNR
					- Has fiber 6 which is added after combining the data into this fiber
			- Wavelength keys
				- wavelengths
					- Fibers 2-6
					- Soft link and before SERVAL links to wavelengths_static in the first half of the reduction and then wavelength_simultaneous after the precise wavelength solution is calculated that accounts for nightly drift
				- wavelengths_simultaneous
					- Fibers 2-6
					- Added when transferring wavelength and drift solutions.
					- Uses the etalon line positions to correct for nightly drift
				- wavelengths_static
					- Fibers 2-5 prior to calculating the coadded fiber 6
					- Placeholder wavelength solution from the instrument configurations
					- Once a true wavelength solution is calculated that corrects for drift it is overwritten
			- etalon_peak_parameters
				- Stores the identified locations of the etalon comb "teeth"
				- From fiber 5
				- Used for a wavelength solution when fitting science frames
				- Can't open into np array but can view with hdfview
				- #Question Why is Recorded column all ERROR
					- Value for this column is not used similarly to lq_cost
			- Header
				- BERV in title means barycentric velocity corrections
					- BERV_FLUXWEIGHTED_FRD is recommended
- Or like` 20250321T130941Z_SOOOE_**x**_0300.hd5` type files
	- Keys
		- #Question Is there a reason these are .hd5 files instead of .hdf they all look like HDF5 files not HDF4?
			- Easier to categorize
			- .hd5 are particularly easy to read with pandas
			- .hdf files are native hdf while .hd5 are from pandas and have a different internal formatting and so only need to use pandas to read and are easier to read
		- blaze_blue/red 
			- From the masterflats in the reduction process
			- #Question How exactly are they obtained?
				- Maybe measurement of the bumps you see in the spectrum where the start and end of each order taper down to zero flux
				- Use it to correct spectrum into a flatter shape
		- header_blue/red
			- Store same header info from the r/b files
		- spec_blue/red
			- Store box_extraction, wavelengths, optimal_extraction, and optimal_var from the r/b files for fibers 2-6 (except box extraction 2-5)
### FITS files
- Look like `20250321T130941Z_SOOOE_b_0300.fits`
- Header contains a lot of info
	- Stuff about the CCD

## Running SERVAL with test data

^6226e8

- Data is here: https://uchicago.app.box.com/s/gdcqelab3v6m6lxrqvc9dmhdfr9w8bti
	- Specifically Barnard_Mar2025_HDF.tar.gz contains the data that is usable for SERVAL
- Wrote a small python script that takes the files in a folder and splits them based off red or blue (don't think this part is completely necessary as SERVAL says it can handle it) and writes all the paths into a text document which can be passed as --inputlist to SERVAL
- Blue option
	- ```python3 /home/zvladimi/MAROONX/Serval3/src/maroonxserval.py --instrument "MAROONXblue" --inputlist "/home/zvladimi/MAROONX/Barnard_Mar2025/hdf_file_paths_b.txt" --outputdir "/home/zvladimi/MAROONX/data/Serval3_output/" "Barnard's Star" ```
- Red option
	- ```python3 /home/zvladimi/MAROONX/Serval3/src/maroonxserval.py --instrument "MAROONXred" --inputlist "/home/zvladimi/MAROONX/Barnard_Mar2025/hdf_file_paths_r.txt" --outputdir "/home/zvladimi/MAROONX/Serval3_output/" "Barnard's Star"```
- The code couldn't do a SIMBAD search on its own so put together a config file in targets under Serval3 based off info from the SIMBAD database: https://simbad.u-strasbg.fr/simbad/sim-fid
	- Output options should set the coordinates to decimal units
	- Also epoch of J2000 which is equivalent to 2451545
		- [x] #TODO Why is epoch J2000 2451545  [due:: 2025-07-25]  [completion:: 2025-07-24]
			- An epoch is an arbitrarily chosen fixed instant in time used as a reference point
			- The standard epoch is January 1, 2000 (J2000) the julian date is 2451545
			- Can thus have a negative (before the date) or positive (after the date) value
	- Also note that the radial velocity is in *km/s* so convert to *m/s*
	- pmra and pmdec is proper motion ra and dec
	- px is parallax