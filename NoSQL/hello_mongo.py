#!/usr/bin/env python3
from pymongo import MongoClient

# 1) Connect to local MongoDB (default: localhost:27017)
client = MongoClient("mongodb://localhost:27017/")

# 2) Choose database & collection
db = client["holberton_db"]
collection = db["students"]

# 3) Insert a sample document
doc = {"name": "Alice", "age": 25, "school": "Holberton"}
insert_result = collection.insert_one(doc)
print(f"Inserted document ID: {insert_result.inserted_id}")

# 4) Query the document back
found_doc = collection.find_one({"name": "Alice"})
print("Found document:", found_doc)

# 5) Clean up (optional)
collection.delete_one({"_id": insert_result.inserted_id})
