#!/usr/bin/env python3
"""Module that defines a function to return
a tuple of string and squared float."""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple where the first element is a string
    and the second is the square of v as a float."""
    return (k, float(v ** 2))
