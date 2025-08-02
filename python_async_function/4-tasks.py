#!/usr/bin/env python3
"""Concurrent task runner using task_wait_random."""

import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Spawn task_wait_random n times and return list of results in order of completion."""
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays: List[float] = []

    for task in asyncio.as_completed(tasks):
        result = await task
        delays.append(result)

    return delays
