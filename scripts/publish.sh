#!/usr/bin/env bash

set -e

envsubst < app.json.template > app.json
npm ci
npm run publish
