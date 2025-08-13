#!/usr/bin/env python3
"""
Provides stats about Nginx logs stored in MongoDB.
"""
from pymongo import MongoClient


def log_stats():
    """Print stats exactly in the required format."""
    client = MongoClient('mongodb://127.0.0.1:27017')
    collection = client.logs.nginx

    total = collection.count_documents({})
    print(f"{total} logs")

    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for m in methods:
        count_m = collection.count_documents({"method": m})
        print(f"\tmethod {m}: {count_m}")

    status = collection.count_documents({"method": "GET", "path": "/status"})
    print(f"{status} status check")


if __name__ == "__main__":
    log_stats()
