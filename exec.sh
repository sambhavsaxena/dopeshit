#!/bin/bash

path=$(pwd)
status=`cat $path/status.txt`
if [ $status == 0 ]
then
    xinput reattach 15 3
    > $path/status.txt
    echo 1 >> $path/status.txt
    notify-send -t 3000 -i face-laughing "Keyboard enabled!"
else
    xinput float 15
    > $path/status.txt
    echo 0 >> $path/status.txt
   notify-send -t 3000 -i error "Keyboard disabled!"
fi
