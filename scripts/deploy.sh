#!/usr/bin/env bash

set -e

npm ci
npm test
expo-cli publish
expo-cli build:ios
expo-cli upload:ios --app-name 'Tastespuds'
