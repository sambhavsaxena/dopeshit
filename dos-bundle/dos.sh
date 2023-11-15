# file: userstats.bin
# Usage: chmod +x dos.sh && ./dos.sh

#!/bin/bash
if ! command -v gcc &> /dev/null
then
    echo "gcc could not be found, please install gcc and try again"
    exit 1
fi

if [[ "$OSTYPE" == "msys" ]]; then
    echo "Windows detected"
    gcc main.c
    ./a.exe
    exit 0
fi

if [[ "$OSTYPE" == "linux-gnu" ]]; then
    echo "Linux detected"
    gcc -o main main.c
    ./main
    exit 0
fi

//check if os is mac
if [[ "$OSTYPE" == "darwin"* ]]; then
    echo "Mac detected"
    gcc -o main main.c
    ./main
    exit 0
fi

exit 1
