#!/bin/bash

path=$(pwd)
status=`cat $path/status.txt`
if [ $status == 0 ]
then
    xinput enable your-device-id
    > $path/status.txt
    echo 1 >> $path/status.txt
    notify-send -t 3000 -i face-laughing "Keyboard enabled!"
else
    xinput disable your-device-id
    > $path/status.txt
    echo 0 >> $path/status.txt
   notify-send -t 3000 -i error "Keyboard disabled!"
fi
