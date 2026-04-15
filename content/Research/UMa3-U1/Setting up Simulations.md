# General
- Running simulations do something like ` nohup bash myjob.sh > output.log 2>&1 & `
	- This allows for there to be no issues if the machine submitting the job is ssh'd in as well as allowing for easier access by different machines
# Petar
## Compilation
- `pyenv activate petar`
	- Or whatever virtual environment will be used
- Within the same directory
	- For FDPS go to https://github.com/FDPS/FDPS/releases to download version 7.0 
		- Then rename to FDPS `mv FDPS-7.0 FDPS`
	- For Galpy use version `pip install galpy==1.10.2`
	- For SDAR can just use the most up to date one (?)
	- Clone Petar as well 
- Go into `./PeTar`
- ` ./configure --prefix=/home/zvladimi/petar_code --with-mpi=yes --enable-cuda --with-interrupt=bse --with-external=galpy `
```bash
  make clean
  make -j
  make install
```
## Simulation Setup
```bash
mkdir -p ~/UMaIIIU1/PeTar_runs/example_sim/ouput
```
- Create a dat.10 file with mcluster and move that into `~/UMaIIIU1/PeTar_runs/example_sim/ouput`
- Create the bash file to handle running simulation and data gathering (see next section)
## Running
```bash
#!/usr/bin/env bash

export PYENV_ROOT="$HOME/.pyenv"

export PATH="$PYENV_ROOT/bin:$PATH"

eval "$(pyenv init -)"

eval "$(pyenv virtualenv-init -)"

  

pyenv activate petar

# use mcluster to generate a star cluster with the initial condtion: 
# -N6000 particles
# -C 5, this is used to generated initial condtion in format for PeTar
# -R initial half mass radius of 3.0
# -S no mass segregation
# -Q cluster in virial equilibrium
# -f2 User set IMF
# -m -a set Devlin (2025) IMF
# -P1 King model
# -W5 W0 parameter set to be equivalent to a concentration of 1
# -Z0.0001 set metallicity
# -e0.1 set the stellar age of the cluster
# -G1 use graphics card
# -s123 random seed
# -u1 output in astorphysical units
# -X Initial cluster position (x,y,z)
# -V Initial cluster velocity (vx,vy,vz)
# -t3 Mikly way potential

mcluster_sse -N6000 -C5 -R3.0 -S0.0 -Q0.5 -f2 -m0.08 -a-0.3 -m0.4 -a-1.65 -m1.0 -a-2.3 -m100.0 -P1 -W5 -Z0.0001 -e0.1 -G1 -s123 -u1 -X 17404 -X -19217 -X -19285 -V 20.425 -V 141.328 -V 10.896 -t3 >mc.log  

# use petar.init to create initial data for petar.
# the mcluster option '-u 1' generate data in astronomical unit (Msun, pc, km/s), but petar requires a self-consistent unit of velocity: pc/Myr, '-v kms2pcmyr' will do this.
# the stellar evolution is switched on '-s bse'
# -t uses galpy potential
# -c sets the origin of the cluster x,y,z,vx,vy,vz

petar.init -s bse -v kms2pcmyr -f input -t -c 17404,-19217,-19285,20.425,141.328,10.896 test.dat.10

# Use PeTar to execute the simulation with stellar evolution.
# Use '-t 100.0' to run the simulation for 100 Myr.
# Use '-o 5' to generate output snapshots every 5 Myr
# Use '-u 1' to set the units to astronomical units (Msun, pc, pc/Myr).
# Use '-b ' to specify the number of primordial binaries here we have none.
# Use '--bse-metallicity 0.0001' to set the metallicity of star as Z=0.0001.

# To use a specific number of threads, add 'OMP_NUM_THREADS=[number of threads]'."

OMP_STACKSIZE=128M petar -u 1 --bse-metallicity 0.0001 -t 10000.0 -o 5.0 input &>output

# after mode finished, gether the output data and do post-data process to detect binaries, obtain Lagrangian and core radii and corresponding properties. And make a movie of the simulation

petar.data.gether data

petar.data.process -t galpy -i bse data.snap.lst

petar.movie -t galpy --x-min -100 --x-max 100 --y-min -100 --y-max 100 -o ../movie -L data.lagr --rlagr-max 50 -m x-y -H data.snap.lst
```
- `nohup bash myjob.sh > output.log 2>&1 &`
- Track output 
```bash
tail -f output | grep -E "^Time|^T =" 
```
## Stopping Simulation
- To allow the simulation to end gracefully use
	- ` kill -SIGTERM <pid> `
- This also means that only the simulation is stopped so data processing commands in the bash file still run.
	- If for some reason this is undesired can just `ctrl+c`
## Restarting Simulation
- Find the most recent data.\[N\]
```bash
ls -t data.* 2>/dev/null | grep -E '^data\.[0-9]+$' | head -1 
head -1 data.[N]
```
- Clean data and restart
```bash
petar.data.clear -t [time] data
OMP_STACKSIZE=128M petar -p input.par -u 1 -b 1500 --bse-metallicity 0.0001 -t 10000.0 -o 20.0 --galpy-set MWPotential2014 data.[N] &>>output
```
- Clearing all prior data for a full restart
  ```bash
find . -maxdepth 1 -type f ! -name '*.sh' -delete
  ```
# NBODY6++GPU 
## Compilation
```bash
cd /home/zvladimi/Nbody6PPGPU-beijing/
./configure --enable-mcmodel=large --with-par=b1m --with-lmax=16384 --with-nmax=100000 --with-mmax=2048 --with-kmax=512000
make clean
```
### Setting up Hdf5
Edit `/home/zvladimi/Nbody6PPGPU-beijing/build/Makefile` using `/home/zvladimi/Nbody6PPGPU-beijing/build/Makefile.save.hdf5` as a guide
- Line 25 ` HDF5_FLAGS = -D H5OUTPUT -I$(HDF5_DIR)/include/ `
- Line 30 ` FFLAGS =  -O3 -fPIC -mcmodel=large -fopenmp -I../include $(GPU_FLAGS) $(MPI_FLAGS) ${SIMD_FLAGS} ${OMP_FLAGS} ${HDF5_FLAGS} `
- Line 121 ` $(FC) $(FFLAGS) $(LDFLAGS) $(OBJECTS) $(EXTRAOBJ)   -lstdc++ -lcudart -L $(HDF5_DIR) -lhdf5_fortran `
```bash
make -j
cp build/nbody6++* ~/UMaIIIU1/nbody6pp_runs/
```
## Debug compilation
```
make FCFLAGS="-g -O0 -fcheck=all" CFLAGS="-g -O0" NVCCFLAGS="-g -G" -j
cp build/nbody6++* ~/UMaIIIU1/nbody6pp_runs/
```
## Simulation setup
```bash
mkdir -p ~/UMaIIIU1/nbody6pp_runs/example_sim/ouput
cp ~/UMaIIIU1/nbody6pp_runs/nbody6++.avx.mpi ~/UMaIIIU1/nbody6pp_runs/example_sim/ouput
```
- Create a dat.10 file with mcluster and move that into `~/UMaIIIU1/nbody6pp_runs/example_sim/ouput`
- Move the input file to `~/UMaIIIU1/nbody6pp_runs/example_sim/`
## Running
```bash
cd ~/UMaIIIU1/nbody6pp_runs/example_sim/output/
./nbody6++.avx.mpi < ../example.inp > ../example.out
```
- Cleaning directory for full restart
	
  ```bash
find . -maxdepth 1 -type f ! -name 'dat.10' ! -name 'nbody6++.avx.gpu.mpi' -delete
  ```
## Restart
IMPORTANT NOTE: if restarting files like `lagr.7` will have multiple entries for the same time (if going back in time) either manually remove these or write code to fix this
## Restart from most recent save
```bash
ls comm.2_* | sort -V | tail -n 1 | xargs -I {} cp {} comm.1
```
- If manually stopped go to the output folder
` rm STOP `
- Change KSTART in the .inp file to 2
- Change the run command to append instead of write 
```bash
./nbody6++.avx.gpu.mpi < ../M1_rostami_10b.inp >> ../try1.out
```
- And rerun