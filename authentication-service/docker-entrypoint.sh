#!/bin/bash

set -e

echo "Running database migrations"
yarn migrate

echo "Starting server"
npm start