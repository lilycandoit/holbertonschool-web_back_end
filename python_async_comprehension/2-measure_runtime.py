#!/usr/bin/env python3
"""Measure total runtime of four async comprehensions run in parallel."""

import asyncio
import time
from typing import Callable
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Run async_comprehension 4 times in parallel
    and return total runtime."""
    start_time = time.perf_counter()

    await asyncio.gather(*[async_comprehension() for _ in range(4)])

    end_time = time.perf_counter()
    return end_time - start_time
