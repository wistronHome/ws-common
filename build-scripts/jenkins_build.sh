#!/usr/bin/env bash

rm -r /usr/local/var/www/html/portal
rm -r /usr/local/var/www/html/user

cd ~/Documents/angular6/ws-common/build-scripts/
source ./build_func.sh

cd ~/Documents/angular6/ws-portal/build-scripts/
source ./build_func.sh

cd ~/Documents/angular6/ws-user/build-scripts/
source ./build_func.sh

sudo nginx -s reload
