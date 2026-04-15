```Bash
#!/bin/bash

# Array of values you want to run with
snap_dir_format=("{:03d}" "{:03d}" "{:03d}" "{:04d}" "{:03d}" "{:03d}")
snap_format=("{:03d}" "{:03d}" "{:03d}" "{:04d}" "{:03d}" "{:04d}")
curr_sparta_file=("cbol_l0063_n1024_4r200m_1-5v200m" "cbol_l0125_n1024_4r200m_1-5v200m" "cbol_l0250_n1024_4r200m_1-5v200m" "cbol_l0500_n1024_4r200m_1-5v200m" "cbol_l1000_n1024_4r200m_1-5v200m" "cbol_l2000_n1024_4r200m_1-5v200m")

config="/home/zvladimi/scratch/ATHENA/config.ini"

# Loop through the parameter values
for i in "${!curr_sparta_file[@]}"; do
    tdyn_steps_val="[1]"
    snap_dir_format_val="${snap_dir_format[$i]}"
    snap_format_val="${snap_format[$i]}"
    curr_sparta_file_val="${curr_sparta_file[$i]}"
    temp_config="/home/zvladimi/scratch/ATHENA/cbol_config_run_$i.ini"
    sim_cosmol_val="bolshoi"

    # Copy and modify config
    cp "$config" "$temp_config"

    sed -i "s/^snap_dir_format=.*/snap_dir_format=$snap_dir_format_val/" "$temp_config"
    sed -i "s/^snap_format=.*/snap_format=$snap_format_val/" "$temp_config"
    sed -i "s/^curr_sparta_file=.*/curr_sparta_file=$curr_sparta_file_val/" "$temp_config"
    sed -i "s/^sim_cosmol=.*/sim_cosmol=$sim_cosmol_val/" "$temp_config"
    sed -i "s/^tdyn_steps=.*/tdyn_steps=$tdyn_steps_val/" "$temp_config"

    # Submit the SLURM job with this config
    sbatch submit_gen_ML_dset_config.sh "$temp_config"
done
```