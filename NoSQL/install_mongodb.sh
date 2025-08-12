#!/usr/bin/env bash
# Minimal MongoDB 4.4 install for Ubuntu 20.04 (Focal) in Holberton container

# 1) Add MongoDB GPG key and repo
curl -fsSL https://pgp.mongodb.com/server-4.4.asc | \
  gpg --dearmor -o /usr/share/keyrings/mongodb-server-4.4.gpg

echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-4.4.gpg ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" \
  > /etc/apt/sources.list.d/mongodb-org-4.4.list

# 2) Install MongoDB
apt-get update -y
apt-get install -y mongodb-org

# 3) Prepare data & log directories (package default paths)
mkdir -p /var/lib/mongodb /var/log/mongodb
chown -R mongodb:mongodb /var/lib/mongodb /var/log/mongodb

# 4) Start MongoDB in background (since no systemd in Docker)
mongod --config /etc/mongod.conf --fork

# 5) Test connection
mongo --eval 'db.runCommand({ ping: 1 })'
