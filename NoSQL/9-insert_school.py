#!/usr/bin/env python3
"""
Insert document in Python
"""


def insert_school(mongo_collection, **kwargs):
    """return the new _id"""
    _id = mongo_collection.insert_one(kwargs).inserted_id
    return _id
