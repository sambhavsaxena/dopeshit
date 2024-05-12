#!/bin/bash

# #############################################################
#
# Author: Sambhav Saxena
# Date: 8th August, 2023
# This script provides the user with system health details.
#
# Version: 1.0.0
#
# #############################################################

# Basic configuration

#set -x # debug mode
set -e # exit if any command fails
set -o pipefail # exit if any command within a pipe fails

# we can also use `set -exo` to do the same thing as above

printf "\n\n--------------------------------- SPACE USAGE ----------------------------------\n\n"
df -h

printf "\n\n---------------------------------- FREE SPACE ----------------------------------\n\n"
free -g

printf "\n\n-------------------------------- NUMBER OF CPUs ----------------------------------\n\n"
nproc 

printf "\n\n--------------------------------- CPU DETAILS ----------------------------------\n\n"
lscpu

printf "\n\n--------------------------------- ALL ACTIVE PROCESSES ----------------------------------\n\n"
ps -ef

printf "\n\n-------------------------------- PROCESS ID USING python ---------------------------------\n\n"
ps -ef | grep python | awk -F" " '{print $2}'

printf "\n\n---------------------------------------- $ EOF $ ---------------------------------------\n\n"

# printf "\n\n----------------------------- LIVE PROCESSES -------------------------------\n\n"
# top -n 1 -b | head -n 20

# End of script

