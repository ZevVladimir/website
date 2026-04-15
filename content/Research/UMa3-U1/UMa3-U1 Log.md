---
tags: log

---
# Quick Links
[[Setting up Simulations]]
## 2026-04-13
- `--e-escape` Energy criterion for escaper; if the value is 'bound_noext', calculate bound energy without external potential and remove etot > 0; otherwise etot > mass * e-escape (default: 0.0).
	- For the sims with galpy will want to use `--e-escape bound_noext`
	- Otherwise `--e-escape 0`
- `--r-escape` Distance criterion for escaper; if the value is 'tidal', calculate the tidal radius (only works when external-mode is on); otherwise, it is a constant escape distance criterion. If not given, it is 20 times the half-mass radius.
	- For sims with galpy will use `--r-escape tidal`
	- Otherwise `--r-escape 20`
## 2026-04-10
- Figured out why there was a weird energy spike when turning on BSE
	- It is because of the natal kicks given to the black holes which then gives them a very high velocity (much larger than the escape velocity) and greatly increases the kinetic energy of the cluster
- There is a way to get the "actual" energies/virial ratios from the Lagrangian file and using calc-energy and `--e-escape 0.0 --r-escape 50` to effectively exclude particles.
	- [x] #TODO Understand the exclusion parameters in the data processing of petar #UMaIII/U1  [due:: 2026-04-13]
	- Will have to play around with this since now the reported virial ratio is ~1
### PeTar try4
- I ran one short simulation (10Myr) to see exactly when the increase of energy occurs 
- It is exactly when black holes start being formed and then escaping from the cluster
### PeTar try5
- I ran a longer simulation (100Myr) which looked at how the evolution was with `OMP_STACKSIZE=128M petar -u 1 --bse-metallicity 0.01 --bse-sigma 0.0 -t 100.0 -o 1.0 input &>output` turning off these black hole natal kicks
- This resulted in the energy staying reasonable and the cluster roughly remaining in virial equilibrium during the simulation
- Asked Andrey what he thinks, but Devlin did include these natal kicks so I think we should as well. Just might be a matter of trying to subtract out their energy to avoid messing up the energy plots 
## 2026-03-18
- [x] #TODO Figure out why the energy is so weird in the sims with BSE enabled. Also try plotting KE and U separately and plotting the output virial ratio? [due:: 2026-04-10] #UMaIII/U1
## 2026-03-17
### PeTar try1-3
- Reran try 1-2 for yes bse no binaries, no bse no binaries, and ran try3 for yes bse yes binaries
- 
## 2026-03-11
- [ ] #TODO Figure out what I'm actually looking for here. How does DM affect the cluster evolution vs not having the DM. How do stellar streams affect this/are affected by this? [due:: 2026-04-20] #UMaIII/U1
### PeTar Initial Summary
- UMaIIIU1 Try1 (Yes bse, No binaries, yes MW Pot)
	- Started
- UMaIIIU1 Try2 (Yes bse, 50% binaries, yes MW Pot)
	- Finished, and looks more correct now for the escapers
- UMaIIIU1 Try3 (No bse, No binaries, yes MW Pot)
	- 
- Think there is an issue with how I handled restarts that means data is duplicated and potentially assigned the wrong time. 
	- Noticed with stopping of escapers at T=2Gyr which is wrong...
	- Think I should have used petar.data.clear at each restart point
	- Think this means I'll have to restart the try1 and try3 simulations and be more intelligent when restarting
	- [x] #TODO Rerun UMaIIIU1 Try1  [due:: 2026-03-12]  [completion:: 2026-03-16]
	- [x] #TODO Rerun UMaIIIU1 Try3  [due:: 2026-03-13]  [completion:: 2026-03-16]
- Data processing command
	- Adding in the `--r-escape tidal --e-escape bound_noext` parameter to handle the escaping criterion correctly since otherwise its a very rough calculation
	- Adding the `--calc-energy` parameter to get the code's calculated potential and virial ratio rather than relying on me to do that
## 2026-03-10
### PeTar umaiiiu1 Try3
- Run without binaries or stellar evolution
- Recompiled petar without stellar evolution
## 2026-03-05
### PeTar umaiiiu1 Try1
- Started rerun with the `--galpy-set`
## 2026-03-04
- Realized I should first reproduce NBODY results first before jumping into umaiiiu1 simulations so try1-3 will be reproducing NBODY try12, 13, 15
### PeTar try1
- I want to reproduce the results from NBODY try12
- Have to recompile petar without galpy
- ` mcluster_sse -M10000 -C5 -R5.0 -S0.0 -Q0.5 -f1 -P0 -Z0.01 -e0.1  -a2.3 -G1 -s123 -u1 `
- There seems to be some difference with stellar evolution's effects compared to NBODY. Believe this is because a different model is being used
	- Petar uses updated SSE/BSE version from Banerjee et al. 2020, A&A, 639, A41.
	- NBODY uses Eggleton, Tout & Hurley
### PeTar try2
- Reproduce NBODY try15 no binary no stellar evolution
- Have to recompile petar to not contain stellar evolution or galpy
- `mcluster -M10000 -C5 -R30.0 -S0.0 -Q0.5 -f1 -P0 -a2.3 -G1 -s123 -u1`
- Looks pretty good at 1 Gyr
### PeTar umaiiiu1 Try1
- No binaries, using MW potential, stellar evolution
- Following Devlin
- Need to rerun with --galpy-set MWPotential2014 for petar
## 2026-03-03
### PeTar umaiiiu1 Try2
- Add in binary fraction of 50% following Devlin
	- Add `-b 0.5` to mcluster
	- Add `-b 1500` to petar (1500 primordial binaries are made by mcluster)
- Actually using the Milky Way potential with petar
	- Added `--galpy-set MWPotential2014` when runnning `petar`
### PeTar umaiiiu1 Try4
- In future want to try evolving MW potential with MWPotentialEvolve
## 2026-02-27
### PeTar Setup
- Added documentation to [[Setting up Simulations]]
- Running through the tests provided
	- `star_cluster_bse.sh`
	- `star_cluster_bse_galpy.sh`
	- And seem to get reasonable outputs
	- Will have to learn the data processing aspect to get the same outputs as I did for NBODY but seems doable
- Adjusted `star_cluster_bse_galpy.sh` to create `umaiiiu1.sh` 
	- Used the prior mcluster command and updated
### NBODY Devlin UMaIII/U1 Try2
- Adjust mcluster to include the MW potential when creating the cluster
	- Add `-t3`
	- ` mcluster_sse -N6000 -C5 -R3.0 -S0.0 -Q0.5 -f2 -m0.08 -a-0.3 -m0.4 -a-1.65 -m1.0 -a-2.3 -m100.0 -P1 -W5 -Z0.0001 -e0.1 -G1 -s123 -u1 -X 17404 -X -19217 -X -19285 -V 20.425 -V 141.328 -V 10.896 -t3 -odevlin `
- Adjust input file ZMET=0.0001 to match paper and mcluster
- Edited escape.F
	- Added if statement as a guard for when RTIDE=0 to stop all particles as being marked as outside the cluster at T=0
	```fortran
	32       RESC2 = 4.0*RTIDE**2
 33       IF (RTIDE.LE.0.0D0) RETURN
	```
- Milky Way potential through galpy is just not present in nbody6++GPU and not sure where to get NBODY7 that Devlin cites
## 2026-02-26
- Renamed `M1_rostami_10b/` to `test_nbody/` since it quickly stopped being based off the rostami paper and was just figuring out how nbody6++GPU works.
- Copied the plots over to still have them accessible
- Then compressed old simulations using xz compression since I likely won't be reusing them
	- `tar -cf - test_nbody/ | xz --threads=0 > archive_test_nbody.tar.xz`
	- Multithreading speeds it up immensely
### NBODY [[devlinReevaluatingUMa3U12025a]] UMaIII/U1 Simulation Try1
- Starting point
	- From [[smithDiscoveryFaintestKnown2024]] Table 2 and 3 get initial conditions
		- $\mathrm{RA}\approx174.7\degree$, $\mathrm{Dec}\approx31.07\degree$
	- Integrate backwards 12 Gyr
	- Use Galpy MWPotential2014
	- Used Claude to get code and matches the values provided in the paper very closely
	- Initial values
		- X = 17.404 kpc
		- Y = -19.217 kpc
		- Z = -19.285 kpc
		- vx = 20.425 km/s
		- vy = 141.328 km/s
		- vz = 10.896 km/s
- Generating cluster (From Table 1 and section 2.3 of Devlin)
	- Uses a King model instead of Plummer
		- `-P1`
		- `-W5`
			- Paper sets $c=1$
			- Looking at [[binneyGalacticDynamics2ndEdition]] Figure 4.10 $c$ is $\dfrac{\Phi(0)}{\sigma^{2}}$ is about 5 which I think is W0
		- `-f2` user defined IMF
			- From the paper
			$$
\xi(m)dm=\begin{cases}
m^{-0.3}dm & m<0.4\mathrm{M_{\odot }} \\
m^{-1.65}dm & 0.4\mathrm{M_{\odot }}<m<1.0\mathrm{M_{\odot }} \\
m^{-2.3}dm & 1.0\mathrm{M_{\odot }}\leq m
\end{cases}
$$
			- `-f2 -m0.08 -a-0.3 -m0.4 -a-1.65 -m1.0 -a-2.3 -m100.0`
		- `-N6000`
			- From the paper for all BH/NS given natal kick
		- `-X -X -X`
			- Position from galpy (prior section) 
		- `-V -V -V`
			- Velocity from galpy (prior section)
	- ` mcluster_sse -N6000 -C5 -R3.0 -S0.0 -Q0.5 -f2 -m0.08 -a-0.3 -m0.4 -a-1.65 -m1.0 -a-2.3 -m100.0 -P1 -W5 -Z0.0001 -e0.1 -G1 -s123 -u1 -X 17404 -X -19217 -X -19285 -V 20.425 -V 141.328 -V 10.896 `
- Running NBODY6++GPU
	- KZ(14)=5 for MW potential
	- KZ(19)=5 for stellar evolution
	- &INXTRNL0
		- RG 17.404, -19.217, -19.285
		- VG 20.425, 141.328, 10.896
	- In escape.F changed
		- Line 155 4000I10 to 6500I10
		- Line 160 to (from 4000 -> 6500)    20 FORMAT(' ESCAPE ANGLES ',1P,6500('| ',I10,2E13.5))
		- Probably not necessary as this was indicative that the entire cluster was escaping at once lol but shouldn't cause an issue...
	- To stop the cluster from completely escapign right away had to set:
		- &INSCALE RTIDE=32.1
## 2026-02-25
### NBODY Try15
- Using $\dfrac{t_{cross}}{t_{relax}}>10$ for minimal two body interactions try with half mass radius of 30 pc with 10,000 $M_{\odot}$ 
- Again no stellar evolution or binaries
- `mcluster -M10000 -C5 -R30.0 -S0.0 -Q0.5 -f1 -P0 -a2.3 -G1 -s123 -u1`
- Over timescales (~500Myr-1Gyr+) it is quite stable. Over long time scales binaries can form which disrupt the cluster with spikes in radius/large amounts of escaping mass.
- But now looks like the code is running correctly 
## 2026-02-24
- Check comenv and how that impacts the outputted EBIND and if that can explain why it is very large and positive with stellar evolution enabled
- Also seems like that without binaries the amount of mass escaping matches the amount of cluster loss
### NBODY Try14
- `mcluster -M10000 -C5 -R2.0 -S0.0 -Q0.5 -f1 -P0 -Z0.01 -a2.3 -G1 -s123 -u1`
- Decrease the radius of the cluster to see if this allows it to become stable since t_relax should be smaller
- This doesn't keep it stable the crossing time is too high and there are too many interactions
## 2026-02-17
### NBODY Try13
- No binaries and no stellar evolution
- `mcluster -M10000 -C5 -R5.0 -S0.0 -Q0.5 -f1 -P0 -Z0.01 -a2.3 -G1 -s123 -u1`
- KZ(19)=0
## 2026-02-13
- Run simulation without stellar evolution and then without binaries
- Figure out how EBIND is calculated and then how the potential energy is calculated
- Follow try11 information
- Check if there is a cutoff at 100Myr for stellar evolution
- [x] #TODO Send update to Andrey about checks on no binaries and no stellar evolution  [due:: 2026-02-17]  [completion:: 2026-02-17]
### NBODY Try11
- Remove `BHFLAG=2,KMECH=1,DISP=150.0,ECSIG=15.0,WDSIG1=2.0,WDSIG2=2.0,WDKMAX=6.0 /` from input file although keep in mind for future
- Remove stellar evolution KZ(19)=0
	- `mcluster -M10000 -C5 -R5.0 -S0.0 -Q0.5 -f1 -P0 -Z0.01 -b0.1 -a2.3 -G1 -s123 -u1` 
- Results in a much more reasonable energy plot with no spikes so assuming it is indeed stellar evolution that is causing the weird spikeyness in TRY10
### NBODY Try12
- KZ(19)=5
- `mcluster_sse -M10000 -C5 -R5.0 -S0.0 -Q0.5 -f1 -P0 -Z0.01 -e0.1  -a2.3 -G1 -s123 -u1`
### NBODY Try7
- Issue seems to be from too large of a kick after the creation of a neutron star
- Used Claude for parameters for stellar evolution which were added to the input file
	```fortran
	&INSSE
	BHFLAG=2,KMECH=1,DISP=150.0,ECSIG=15.0,WDSIG1=2.0,WDSIG2=2.0,WDKMAX=6.0 /
	```
	- **BHFLAG=2** - BH kicks scaled by fallback (keeps your current setting)
	- **KMECH=1** - Standard momentum-conserving kicks (was 4 = neutrino-driven)
	- **DISP=150.0** - NS kick dispersion reduced from 265 km/s
	- **ECSIG=15.0** - Electron-capture SN kicks (increased from 3.0 km/s)
	- **WDSIG1=2.0, WDSIG2=2.0, WDKMAX=6.0** - White dwarf kick parameters
### NBODY Try8
- Since the issue seems to now be hardware level where I require more memory than available in order to get neighbor lists large enough
- So will try a cluster with a mass of 10000 which will hopefully lower the load enough for the computer to handle it
	`mcluster_sse -M10000 -C5 -R5.0 -S0.0 -Q0.5 -f1 -P0 -Z0.01 -e0.1 -b0.1 -a2.3 -G1 -s123 -u1`
	- 18331 stars
	- 916 binary systems
### NBODY Try9
- Single threading and debug with `-O1` instead of `-O3`
	- In make file ` FFLAGS = -O1 -g -fbacktrace -fPIC -mcmodel=large -fopenmp -I../include $(GPU_FLAGS) $(MPI_FLAGS) ${SIMD_FLAGS} ${OMP_FLAGS} `
```bash
export OMP_NUM_THREADS=1
gdb ./nbody6++.avx.gpu.mpi
run < ../M1_rostami_10b.inp
```
### NBODY Try10
- Single threading and debug with `-O2` 
- In make file ` FFLAGS = -O2 -g -fbacktrace -fPIC -mcmodel=large -fopenmp -I../include $(GPU_FLAGS) $(MPI_FLAGS) ${SIMD_FLAGS} ${OMP_FLAGS} `
```bash
export OMP_NUM_THREADS=1
gdb ./nbody6++.avx.gpu.mpi
run < ../M1_rostami_10b.inp > ../try10.out
```
- This seems to work (at least get past Try8) so will just stick with -O2 rather than chasing down the exact optimization as it seems to work fine and don't have to do `export OMP_NUM_THREADS=1`
## 2026-02-12
### NBODY Try7
- To fix issue with crashes tried:
	- irr.avx.cpp changed `#define NNBMAX 2048` to `#define NNBMAX 4096` 
	- In the input file NNBOPT from 200 to 600
	- DTMIN=1.E-10 from 1.E-8
	- In the configuration update `--with-lmax=2048` to `--with-lmax=4096`
		- This is what actually fixed it with NNBMAX adjustment to match
	- This got it to go further but still crashed so increase to `--with-lmax=8192`  and `#define NNBMAX 8192`
## 2026-02-11
### NBODY Try7
- Change KZ(18)=4 for more output on hierarchical systems
- Try going back to KZ(19)=5 to have more complex stellar evolution and higher output
- Had issues with it crashing after a few snapshots
## 2026-02-10
- Run left on for a week basically made no progress because the time steps got so small didn't really get past 50 Myr and created large amounts of output ~400Gb in the .out file
### NBODY Try4
- Retrying with larger minimum time step and will see if the energy remains reasonable
	- Set to `DTMIN=1.E-8`
	- Seems to be working with the run already proceeding to 80 Myr with Q remaining around 0.5
		- Do see that around 50Myr there was an increase in how negative U was but this is resolved and doesn't really show in the other plots
	- Crashed at 88.464615 Myr
		- Very very large number of escapers which led to the code crashing (1066 vs maximum of 1000 in the code)
		- This corresponds with a large adjustment in the energies
		- To fix this will adjust the code `/src/Main/escape.F` recompile and restart
			- Line 155 `& 4E13.5,I10,' JLIST: ',1000I10)` to `& 4E13.5,I10,' JLIST: ',4000I10)`
			- Line 161 `20 FORMAT(' ESCAPE ANGLES ',1P,1000('| ',I10,2E13.5))` to `20 FORMAT(' ESCAPE ANGLES ',1P,4000('| ',I10,2E13.5))`
	- Wasn't able to restart because of below so just doing a new try
```
MPI-initial: This is rank=     0 size=     1 group=          2
 RANK:            0  OpenMP Number of Threads:           24
  MPI: iserreg,isernb,iserks,icore=         960         960           0          24
 Error! MMAX mismatch (Data:        1024 Current:        2048
```
### NBODY Try5
- Fails because of too close interaction? results in the cluster just disappearing with particles being moved extremely far away and an explosion in kinetic energy
- `nbody6++.avx.gpu.mpi: ../src/Main/gpunb.velocity.cu:73: Jparticle::Jparticle(double, double*, double*): Assertion `(xj[0]) == (xj[0])' failed.`
### NBODY Try6
- Turn on KZ(16)=1
- ETAI = ETAR = 0.05
- ETAU=0.005
## 2026-02-02
- Reason why status.36 is not being written to 
	- In custom_output.F 
		```fortran
		* call global_output(ZSM0,ZBM0,RC,
		
		* & N_SINGLE,N_BINARY,N_MERGER,KZ(7),KZ(19))
		```
		- It is commented out for some reason
- **M1_rostami_0b**
	- Trying to see if I can get further with less binaries and see if they are the cause of the issue in energy
	- `mcluster_sse -M20000 -C5 -R5.0 -S0.0 -Q0.5 -f1 -P0 -Z0.01 -e0.1 -b0.0 -a2.3 -G1 -s123 -u1`
		- 35788 stars
	- Also updated KZ(6)=3 to get more binary output
### NBODY Try2
- Turned on escapers KZ(23)=4
- Even though there are still spikes in kinetic and potential it seems to be more balanced with the total energy stay close to the same although it does start trending away
- Also helps with speed of each time step although it still is creeping up
## 2026-01-29
- The 80k particle 10% binary run went well but by ~750-800 Myr was going very very slowly
	- Realized I accidentally ran this with both `-b0.0` and `-B4100` but from the output it did look like binaries were created so going to keep going for now but will come back and check
- Going to now retry 20k particles at 10% but following parameters from [[rostami-shiraziDarkStarClusters2025]] Table 1
	- So switched to using `-M` to match the table for mass instead of `-N`
	- Also used `-a` for the alpha value
	- `-b` to more easily do the binary fraction
	- **M1_rostami_10b**
		- `mcluster_sse -M20000 -C5 -R5.0 -S0.0 -Q0.5 -f1 -P0 -Z0.01 -e0.1 -b0.1 -a2.3 -G1 -s123 -u1`
			- 35788 stars
			- 1789 binaries
- Also updated the creating of the movie for particle evolution to fit the new finding of data and has new ffmpeg command: 
	- ` ffmpeg -f concat -safe 0 -i ffmpeg_list.txt -r 20 -c:v libx264 -pix_fmt yuv420p -vf "pad=ceil(iw/2)*2:ceil(ih/2)*2" ../particle_evolution.mp4 `
## 2026-01-29
- Gave up trying to read through the HDF files and instead just using the normal binary outputs seems a lot more promising
- Do have to turn KZ(7) = 2 in order to output the Lagrangian radii which I'll be using to compare to the paper
- Overall looks pretty reasonable for no binaries no stellar evolution
- Trying with stellar evolution
	- ` mcluster_sse -N82000 -C5 -R35.0 -S0.0 -Q0.5 -f1 -P0 -Z0.01 -b0.0 -e0.1 -G1 -s123 -u1 `
	- `-e0.1` is suggested to set stellar evolution for the beginning
	- also added `-G1` for GPU usage
- Using stellar evolution KZ(19)=3 means that after one time step Q jumps from 0.5 to 346
- Using stellar evolution KZ(19)=1 looks a lot better
- Adding 10% binary
	- `mcluster_sse -N82000 -C5 -R35.0 -S0.0 -Q0.5 -f1 -P0 -Z0.01 -b0.0 -e0.1 -B4100 -G1 -s123 -u1`
	- Added `-B4100` which from calculating using binary fraction and dividing by 2 is 10%
	- Changed in the input file 
		- NBIN0=4100
		- KZ(8)=2
		- NNBOPT=200 (from test.input)
		- RBAR and ZBAR (from test.input)
		- ETAU ETAR = 0.01 (from test.input)
		- KZ(7)=5 (from test.input)
		- KZ(9)=3 (from test.input)
		- KZ(27)=1 (from test.input)
		- KZ(40) = 0 (from test.input)
## 2026-01-28
- Based off [[dottiLongtermEvolutionUltra2026]]
	- From AI estimating $r_{h}=0.7r_{vir}$ but want to check this with Andrey
		- Gives $r_{h}=35$
	- `~/mcluster/mcluster -N82000 -C5 -R35.0 -S0.0 -Q0.5 -f1 -P0 -Z0.01 -b0.0 -s123 -u1`
		- [x] N=82000: `-N82000` 
		- [x] Q=0.5: `-Q0.5`
		- [x] $r_{vir}=50\mathrm{pc}$: `-R35.0`
		- [x] Plummer: `-P0`
		- [x] Kroupa IMF: `-f1`
		- [x] Simulation time $13.7 \mathrm{Gyr}$: Taken care of in NBODY params
		- [x] $Z=0.01$: `-Z0.01` Also adjusted in NBODY params
		- [x] $f_{b}=0,0.1,0.2,0.3,0.4,0.5$ of stars: `-b0.0`
		- [x] Random coupling of binaries: not needed for initial test with no binaries
## 2026-01-21
- Trying without gpu
	- Noticeably slower
- Created a setting up simulation page to record how to compile/run these simulations
## 2026-01-16
- No binary no SE
	- Try5 DTMIN=1.E-12,RMIN=4.E-4 start from beginning
	- Try6 ETAU=0.01
- Checking the Q value looks better? but super spikey
- Energy also looks better with kinetic staying roughly constant before getting spikey but not spiking straight up like before
- Potential energy is steadily decreasing tho
## 2026-01-08
- No binary no SE
	- Try2 DTMIN=1.E-12,RMIN=2.E-4, restart at 90
		- Improved but still jump in energy
	- Try3 DTMIN=1.E-14,RMIN=2.E-4 restart at 90
		- Same as Try2
	- Try4 DTMIN=1.E-12,RMIN=4.E-4, restart at 90
- Look for a paper on best practices
- Try without GPU (measure time too)
- Plot the energy distribution by particle
- Start again from 20 after figuring out parameter tuning
## 2026-01-07
- For no binary notice a failure in energy conservation around 100Myr to try and resolve
	- DTMIN set to 1.e-9 from 2.5e-9 to get more precision per time step
	- RMIN set to 1.e-4 from 8.e-5 to catch close encounters earlier
- Restarting at a particular point in time
	- Move all newer files beyond that time to a poison directory
	- `mv *{91..251}* poison` select the numbers such that they do not include and then go beyond the final snap to remove. Potential issues is capturing the 6 in the nbody object or 10 in dat.10 but at that point just start from the beginning?
- Comparison between different combinations of stellar evolution and inclusion of binaries
- Original: KZ(19) = 3 with binaries
![[20k_binary_se3_plots.png]]
![[20k_binary_se3_energy_evolution.png]]
- KZ(19)=1 with binaries

![[20k_binary_se1_plots.png]]

![[20k_binary_se1_energy_evolution.png]]
- KZ(19)=0 No binaries
![[20k_nobinary_plots.png]]

![[20k_nobinary_energy_evolution.png]]
- KZ(19)=1 no binaries

## 2026-01-07
- Trying mcluster without any binaries `~/mcluster/mcluster -N 20000 -C 5 -R 3.0 -S 0.0 -Q 0.5 -f 1 -s 123 -u 1`
- Find that around 6-7 Myr there are large velocity kicks which then mess up the energy and after that things just break
	- Tried trying without velocity kicks for white dwarfs KZ(25) but that didn't help
	- Then tried without stellar evolution KZ(19) which does seem to keep the system stable as expected
- Want to try different variations
	- [x] #TODO Run nbody without stellar evolution  [due:: 2026-01-07]  [completion:: 2026-01-07]
		- Energy looks good remaining constant
	- [x] #TODO Run nbody with KZ(19)=1 and without binaries  [due:: 2026-01-08]  [completion:: 2026-01-07]
		- Energy again looks reasonable and evolution decent?
	- [x] #TODO Run nbody with KZ(19)=1 and binaries  [due:: 2026-01-08]  [completion:: 2026-01-08]
		- 
	- [x] #TODO Run nbody with KZ(19)=0 but with binaries  [due:: 2026-01-08]  [completion:: 2026-01-08]
- 
## 2025-12-18
- Trying NBODY6++GPU with mcluster ICs
	- ` ~/mcluster/mcluster -N 20000 -B 2300 -C 5 -R 3.0 -S 0.0 -Q 0.5 -f 1 -s 123 -u 1 >plummer.log `
	- Looks weird
- Now going to try and run PeTar and NBODY6++GPU with the same ICs ` ~/mcluster/mcluster -N 20000 -P 0 -R 3.0 -S 0.0 -Q 0.5 -C 5 -o plummer -f 1 -B 2300 -s 123 -Z 0.001 -u 1 >mc.log `
	- 
## 2025-12-16
- Trying PeTar without bse enabled to get base
	- ` ./configure --prefix=/home/zvladimi/tools --enable-cuda --with-mpi=yes `
	- Adjusted the test script such that it uses ` ~/mcluster/mcluster` to generate initial conditions, have to look into making mcluster a global command
	- Using `/home/zvladimi/petar_code/PeTar/sample/star_cluster.sh`
- Binary fraction calculation $f_{b} = \dfrac{B}{S+B}$
	- Where $f_{b}$ is the binary fraction, $B$ is the number of binaries, $S$ is the number of single stars
	$$\begin{align} 
f_{b} & = \dfrac{B}{S+B} \\
S+2B & =N \\ 
S & =N-2B \\
f_{b} & =\dfrac{B}{N-2B+B} \\
f_{b} & =\dfrac{B}{N-B} \\
f_{b}N-f_{b}B & =B \\
B(1+f_{b}) & =f_{b}N \\
B & =\dfrac{f_{b}N}{1+f_{b}}
\end{align}$$
	- So if $f_{b}=0.95$ and $N=1000$ $B=487\approx500$ like in the example submissions
## 2025-12-11
- Run for 3 Gyr does not show improvement
	- Was a hope that after violent relaxation it would then display the expected core collapse
- Trying out [PeTar](https://github.com/lwang-astro/PeTar?tab=readme-ov-file)
	- Configure: `./configure --prefix=/home/zvladimi/tools --enable-cuda --with-mpi=yes --with-interrupt=bse`
	- Had to use sudo for `sudo make install`
	- Then ` export PATH=$PATH:/home/zvladimi/tools/bin ` and ` export PYTHONPATH=$PYTHONPATH:/home/zvladimi/tools/include ` Added this to `~/.bashrc` so should be automatic unless --prefix is changed
- Also installed [mcluster](https://github.com/lwang-astro/mcluster) to generate initial conditions
	- ` cd ~/mcluster/`
	- ` ./mcluster -N 20000 -P 0 -R 3 -f 1 -B 1000 -u 1 -o plummer `
		-  20000 stars
		- Plummer model
		- Half mass radius of 3pc
		- Kroupa IMF
		- 1000 binaries
		- Output in astrophysical units
		- Name of output is plummer.txt
- Then convert the mcluster to PeTar format
	- `petar.init -s bse -v kms2pcmyr -u 1 plummer.txt`
		- -s bse keeps the bse stellar evolution consistent
		- -v converts km/s output from mcluster to pc/Myr
		- -u keeps everything in astronomical units
- Run PeTar
## 2025-12-10
- To restart/continue a simulation
	- ` ls comm.2_* | sort -V | tail -n 1 | xargs -I {} cp {} comm.1 `
		- To start at the most recent point
	- ` cp comm.2_90 comm.1 `
		- Replace 90 with a specific point you want to start at
	- ` rm STOP`
	- In the input file set KSTART to 2 or 3 if changing parameters
	- Make sure to restart the jupyter notebook to clear all variables if it was run after the stop. Otherwise the hdf5 files are locked still
## 2025-12-09
- Adjusted the output timing
	- DELTAT from 0.1 - 1 
		- The in-between time steps don't seem accurate
	- DTADJ from 0.1 - 1
		- This is how often parameters are adjusted which is not being done (I think) and probably wouldn't need to be done that often
## 2025-12-05
- Meeting with Andrey
	- Correctly setting radius of cluster when half light radius is 3 pc
	- Calculating plummer sphere with varying masses and in astrophysical units
	- How to set RBAR and ZMBAR
		- Want to scale things to be order unity
		- Should be roughly ok for what I have now, will try setting ZMBAR to 0.5 since thats roughly the average mass
	- Why is the cluster moving?
		- Could this be because of stellar feedback? Or the ejection of stars?
- Fixed center of mass calculation to ignore particles with radii more than 50 parsecs
	- Before very large stars that got ejects caused the COM to be roughly 0 even though the cluster had been moving
- For my initialization
	- Check if mean velocity is zero
	- Check initial mass distribution and initial velocity distribution (Maxwellian)
- Trying NBODY's initialization
	- KZ(5) = 1 (Plummer random generation)
	- KZ(20) = 7 (Kroupa IMF extended to brown dwarfs with binary mass ratio corrected)
	- KZ(22) = 0 (initialize based off KZ(5) and KZ(20))
	- KZ(8) = 1 (Initialize primordial binaries based off of KZ(41) and KZ(42))
	- KZ(41) = 1 (proto-star evolution of eccentricity and period)
	- KZ(42) = 3 (Initial binary distribution)
	- Looks a lot more reasonable with a run for 50Myr having the half mass radius and mass stay roughly constant
- Find setting RBAR=4 gives a half mass radius of about 3 
	- Think this works because from the documentation $\mathrm{Astronomical\;units=N-body\;units\times scaling\;factor}$
	- Then the output of the simulation is in astronomical units because I have stellar evolution on
	- However this causes issues where again after ~20Myr the cluster starts moving and there is too much mass loss
	- Think this might be because KZ(42) = 4 needs RBAR < 1.5 so trying with KZ(42) = 3
		- This did not fix it
## 2025-12-04
- KZ(22) should be set to 10 not 6 since I am calculating everything already in $M_{\odot}$ pc and km/s
	- Before there was additional scaling
- Updated calculation of initial conditions
	- Now uses G to generate conditions with correct units
	- Before was just using G=1 (somewhat) but then having units be in terms of astrophysical ones
	- Added a correction to the positions and velocities based off center of mass mass and velocity
	- Not 100% sure I'm doing this right with my varying masses and getting results in astrophysical units
		- Might make more sense to copy what NBODY does and then scale it
	- Also maybe I add a limit to how far away particles can be generated
- Escape velocity calculation
	$$\begin{align}
\Phi(r) & =-\dfrac{GM_{0}}{\sqrt{ r^{2}+a^{2} }} \\ 
 & = -\dfrac{GM_{0}}{a} \dfrac{1}{\sqrt{ 1+\left( \dfrac{r}{a} \right) ^{2} }} \\
 & =-\dfrac{GM_{0}}{a}\left( 1+\left( \dfrac{r}{a} \right) ^{2} \right) ^{-1/2} \\
v_{esc} & =\sqrt{ -2\Phi(r) } \\ 
v_{esc} &  =\sqrt{ \dfrac{2GM_{0}}{a} }\left( 1+\left( \dfrac{r}{a} \right) ^{2} \right) ^{-1/4}
\end{align}$$
## 2025-12-03
- Issue with apartment wifi so can't run simulations at work
- But saw from last night the simulation with binaries acted weird
	- Around halfway a bit after 100 Myr the cluster started moving to the right for no reason
	- Not sure why...
- Also the half-light radius of $\mathrm{UMaIII/U1}$ is 3pc not the full radius not sure how to accurately set this.
	- From [[erraniUrsaMajorIII2024]]
	$$\begin{align}
r_{h} & \approx2.67r_{\star} \\
R_{h} & \approx2.02r_{\star} \\
R_{h} & =3\pm1 \\
r_{\star} & \approx1.485 \\
r_{h} & \approx3.965
\end{align}$$
	- So I will try increasing the size of the cluster significantly because right now the half mass radius is $\sim 0.75$
	- 
## 2025-12-02
- Corrected calculation of relaxation time
	- Requires G since I'm not doing it in nbody units anymore
	- Had to correct the value of G since colossus has it initially in kpc not pc and added that factor
- Ran simulation with binaries
	- KZ(6) = 1 KZ(8) = 2
	- Started with an initial percentage of 10%
		- So for N = 80000 NBIN0 = 8000
	- Had to increase lmax to 1024 and in irr.avx.cpp changed `#define NNBMAX 1024` to `#define NNBMAX 2048` ``
## 2025-11-20
- Made a github finally
- Followed [[aarsethComparisonNumericalMethods1974]]'s appendix for the creation of the Plummer sphere
	- Scaled by factors to correct for unique masses per particle and a specified scale radius
## 2025-11-19
- Implementing a Plummer sphere initialization file
	- Using a python package to do this and then Gemini's code for the Plummer model
	- Still need to double check the Plummer model
	- This way means that I enter a mass and it outputs a certain distribution (and number) of particles that make up that mass sampled from a desired mass function (currently using Kroupa)
		- Would be good to make it so that the input file is automatically updated to have the number
	- This is also missing binary initialization
- Making movie:
	- `ffmpeg -framerate 20 -i frame_%04d.png -c:v libx264 -pix_fmt yuv420p ../particle_evolution.mp4`
## 2025-11-17
- [x] #TODO Update calculation of $t_{\mathrm{rh}}$ using equation 7.108 in [[binneyGalacticDynamics2ndEdition]]  [due:: 2025-11-18]  [completion:: 2025-11-19]
- [x] #TODO Reproduce Fig 7.4 [[binneyGalacticDynamics2ndEdition]]  [due:: 2025-11-28]  [completion:: 2025-12-03]
## 2025-11-14
- Figured out issue about using Plummer sphere
	- Had to add in a line to actually read in this information
	- Also move up when the variables were broadcasted to MPI
- Since using stellar evolution don't have to use the scaling units to convert
- Having issues with Lmax being too small
	- Too many particles in too small an area
	- To increase this 
		- Specified each compile parameter rather than using `--with-par=b1m`
			- ` --with-lmax=2048 --with-nmax=100000 --with-mmax=2048 --with-kmax=512000`
			- Used the same value except for lmax and nmax (reflecting i'm only doing $10^{4}$ particles) as with b1m
		- In irr.avx.cpp changed `#define NNBMAX 600` to `#define NNBMAX 1024`
- Simulation seems very unstable
	- Trying
		- Fix where the mass function is correctly set and not from a file (not sure if this matters think it was just writing to a file but guide specifies setting to 0 not 1)
		- Removing primordial binaries KZ(8)
			- Also turned off KZ(9)
		- Turning off external tidal field KZ(14)
## 2025-11-11
- Spent a while figuring out the conversion for G to get it in the right units of $\mathrm{\dfrac{pc^{3}}{M_{\odot}Myr^{2}}}$ from what colossus has it in
- Now have to figure out how to work with the data to accurately switch between Nbody and physical units
## 2025-11-07
- Configure command: `./configure --enable-mcmodel=large --with-par=b1m --with-lmax=1024`
	- Can add ` --disable-gpu --disable-mpi` if needed
- Moving compiled model: `cp -p ./build/nbody6++* `
- Running model: `./nbody6++.avx.gpu.mpi < N100k.inp 1> 100k.out 2> 100k.err`
	- Create a separate directory for each run and move the model there since all the output just gets dumped where the model is run
- Summary of papers
	- [[smithDiscoveryFaintestKnown2024]] 2024-01-01
		- Initial discovery of the system
		- Due to a high velocity dispersion potentially could be a dwarf galaxy
		- But significant doubt removal of just two stars greatly lowers the velocity dispersion
			- Binary stars could have an impact
	- [[erraniUrsaMajorIII2024]] 2024-04-01
	- [[devlinReevaluatingUMa3U12025a]] 2025-05-01
	- [[rostami-shiraziDarkStarClusters2025]] 2025-08-14
		- Kroupa is not a well respected author
		- Still worth looking into the effects of stellar remnants
	- [[mayUpdatedBoundsUltralight2025]] 2025-09-02
	- [[cernyNoObservationalEvidence2025]] 2025-10-01
		- Metallicity spread
			- Only put an upper limit which is also wide enough to be a DG
			- Still no proof just narrowing the possibility
			- Limit on star formation between halo formation and reionization that kicks out hydrogen electrons
			- So need a very very low metallicity spread to eliminate DG
- Why message of SC isn't compelling
	- For the cluster there should be a stellar stream
		- But there hasn't been one
		- But wasn't discussed
		- Best way for now to determine if it is DG or not
	- Initial mass of their cluster isn't different than GD1 which had a very prominent stream
		- Stream of DG are wider because of larger $\sigma_{v}$
		- But GD1 had very narrow stream indicative of SC
	- UMaIII/U1 is prograde while GD1 is retrogade so prograde might be more disrupted
- Stellar remnants
	- Difficult to believe that could make enough
	- In other peoples models have not reached such high mass to light ratios as seen
- [x] #TODO Read Chap 8.4 [[binneyGalacticDynamics1stEdition]] (Tidal disruption and relaxation)  [due:: 2025-11-10]  [completion:: 2025-11-11]
	- Look for packages to work with the data from NBODY6++
## 2025-11-06
- Test NBody6++ from Andrey
	- Test first in which some larger number of particles, say N~1e4, is used and cluster is isolated. 
		- Softening of what they used
		- Evolve for 1-2 Gyr
		- Look at half mass radius, radius that encloses 99% of stars
			- Should be more or less stable for less than relaxation timescale
			- Estimate relaxation timescale (first millions of years)
	  - Understand how to set up initial conditions for an isolated cluster using the code manual
	  - The test would be to evolve the cluster and make sure that on timescales shorter than relaxation time scale, it is stable - size and mass do not change on average.
## 2025-11-05
- [x] #TODO Read [[erraniUrsaMajorIII2024]]  [due:: 2025-11-28]  [completion:: 2025-12-03]
- [x] #TODO Read [[rostami-shiraziDarkStarClusters2025]]  [due:: 2025-11-06]  [completion:: 2025-11-07]
## 2025-11-03
- Easily able to install NBODY6++ on home desktop linux
	- Using the [beijing fork](https://github.com/nbody6ppgpu/Nbody6PPGPU-beijing/tree/stable)
		- This is the one that is still being updated
	- So ssh into desktop using tailscale
## 2025-10-31
- [x] #TODO Read [[smithDiscoveryFaintestKnown2024]]  [due:: 2025-11-04]  [completion:: 2025-11-04]
- [x] #TODO Read [[cernyNoObservationalEvidence2025]]  [due:: 2025-11-05]  [completion:: 2025-11-05]
- [x] #TODO Read [[devlinReevaluatingUMa3U12025a]]  [due:: 2025-11-06]  [completion:: 2025-11-06]
- [x] #TODO Read [[mayUpdatedBoundsUltralight2025]]  [due:: 2025-11-04]  [completion:: 2025-11-04]
- [x] #TODO Install NBODY6  [due:: 2025-11-03]  [completion:: 2025-11-02]
	- Had to install with -mc-model=small
		- But then this doesn't work when running make 
		- Think it just is too much memory? and the large model is not available on mac
		- Will try on home computer and can see if I just ssh in
- Meeting with Andrey
	- Add to my SOP that I am regularly attending meetings  
	- Low mass galaxies
	- Galaxy needs DM halo
		- Cluster does not require DM halo
	- Ursa major 3
		- Good to reproduce prior results from paper
			- See how robust they are or what the real results are
			- Predict what stellar stream would be there
		- Find stellar trail
			- Not clear how prominent it should be
		- Can provided constraints on fuzzy DM if galaxy
		- Need numerical simulation with N-body code for star clusters
			- Need to account for stellar evolution 
			- NBODY 7 (might only have NBODY 6 that is publicly available)
			- REBOUND
				- Might be harder to use not as optimized and maybe no stellar evolution
		- First goal would be to setup models as close to what is in the paper