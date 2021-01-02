#!/bin/bash

set -e
set -u

function create_DBs() {
	local DB=$1
	echo "  Creating a User and Database '$DB'"
	psql -v --username "$POSTGRES_USERNAME" <<-EOSQL
	    CREATE DATABASE $DB;
	    GRANT ALL PRIVILEGES ON DATABASE $DB TO $POSTGRES_USER;
EOSQL
}

if [ -n "$POSTGRES_DB_LIST" ]; then
	echo "Multiple DB creation requested: $POSTGRES_DB_LIST"
	for DB in $(echo $POSTGRES_DB_LIST | tr ',' ' '); do
		create_DBs $DB
	done
	echo "Multiple DBs created"
fi