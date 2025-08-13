#!/usr/bin/env python3
"""
changes all topics of a school document based on the name
"""


def update_topics(mongo_collection, name, topics):
    """Replace the 'topics' list for
    all schools matching the name"""
    result = mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
    return result
