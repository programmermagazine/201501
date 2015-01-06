#!/bin/bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH
if [ -f "$2" ]
then
  echo $2, ' not exist'
else
  mimetex -d "$1" -e $2.gif
  convert $2.gif $2.jpg
  rm $2.gif
fi
exit 0 
