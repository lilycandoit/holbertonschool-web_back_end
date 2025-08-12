#!/usr/bin/env python3
"""lists all documents in a collection in a database"""

def list_all(mongo_collection):
    """return all docs"""
    return list(mongo_collection.find())
