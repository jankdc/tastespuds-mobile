#!/usr/bin/env bash

set -e

npm ci
npm run publish
npm run build:ios
npm run build:android
npm run upload
