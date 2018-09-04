#!/usr/bin/env bash

cd ../

npm version patch

npm run package

npm publish dist
