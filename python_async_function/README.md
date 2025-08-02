
# 🌀 Python Async Function Project

This project explores asynchronous programming in Python using the `asyncio` library. The goal is to understand how to write non-blocking code that efficiently handles I/O-bound operations by leveraging coroutines, tasks, and event loops.

---

## 📚 Learning Objectives

By completing this project, you will be able to:

- ✅ Use the `async` and `await` syntax to define and execute coroutines
- ✅ Understand how the `asyncio` event loop manages asynchronous execution
- ✅ Run multiple coroutines concurrently using `asyncio.gather()`
- ✅ Schedule background execution with `asyncio.create_task()`
- ✅ Apply the `random` module to simulate unpredictable delays
- ✅ Recognize the difference between I/O-bound vs CPU-bound tasks
- ✅ Write code that follows best practices in type annotations and documentation

---

## 🔍 Key Concepts

### 1. `async` and `await`
- `async def` defines a coroutine.
- `await` pauses execution until another coroutine completes.
- Used to prevent blocking in single-threaded programs.

### 2. Event Loop (`asyncio`)
- Core of async execution; manages when and how coroutines are run.
- `asyncio.run()` starts the loop from a synchronous entry point.

### 3. Concurrency with `asyncio.gather()`
- Allows multiple coroutines to run concurrently (not in order).
- Example:
  ```python
  await asyncio.gather(task1(), task2(), task3())
    ```

### 4. Task Scheduling with `asyncio.create_task()`

* Starts a coroutine in the background immediately.
* Useful when you don’t want to wait immediately for a coroutine to finish.

### 5. Randomized Timing with `random.uniform()`

* Generates float delays to simulate I/O wait (e.g., `random.uniform(0, max_delay)`).
* Pairs well with `await asyncio.sleep()` to simulate realistic delays.

---

## 🧠 Async vs Threading vs Multiprocessing

| Type            | Best For               | Python Tool        | Parallel? |
| --------------- | ---------------------- | ------------------ | --------- |
| Async I/O       | I/O-bound tasks        | `asyncio`          | No        |
| Threading       | I/O-bound (legacy/lib) | `threading.Thread` | No (GIL)  |
| Multiprocessing | CPU-bound tasks        | `multiprocessing`  | Yes       |

---

## 📁 Project Structure

```bash
python_async_function/
├── 0-basic_async_syntax.py      # Task 0: Define wait_random coroutine
├── 1-concurrent_coroutines.py   # Task 1: Run wait_random concurrently n times
├── 2-measure_runtime.py         # Task 2: Time execution of concurrent coroutines
├── 3-tasks.py                   # Task 3: Return an asyncio.Task from a coroutine
├── 4-tasks.py                   # Task 4: Run multiple scheduled tasks concurrently
├── README.md                    # Summary and explanation of the project
```

---

## ✅ Code Requirements

* All files:

  * Must be executable (`#!/usr/bin/env python3`)
  * Must pass `pycodestyle` (PEP8) checks
  * Must be fully type-annotated
  * Must include full-sentence docstrings for all functions and modules

---

## 💡 Example Use Case

Simulate a service that:

* Sends multiple network requests
* Waits random time for each to complete
* Returns all results when done

This mirrors how real-world systems like API gateways, crawlers, and background schedulers work.

---

## 🔗 Resources Used

* [RealPython: Async IO in Python](https://realpython.com/async-io-python/)
* [Python Docs: asyncio](https://docs.python.org/3/library/asyncio.html)
* [Python Docs: random](https://docs.python.org/3/library/random.html)

---

## 🧠 Concept-by-Task Summary

### ✅ Task 0: `wait_random(max_delay)`

* Defines an `async def` coroutine that:

  * Waits for a random float between 0 and `max_delay` using `await asyncio.sleep(...)`
  * Returns the delay
* Key learning: **basic coroutine + await**

---

### ✅ Task 1: `wait_n(n, max_delay)`

* Spawns `n` coroutines using `wait_random(max_delay)`
* Runs them **concurrently** using `asyncio.gather`
* Returns a list of delays (in order of start)
* Key learning: **concurrent execution using gather**

---

### ✅ Task 2: `measure_time(n, max_delay)`

* Uses `time.perf_counter()` to measure how long `wait_n` takes
* Returns `total_time / n` as average per coroutine
* Key learning: **performance measurement** for async code

---

### ✅ Task 3: `task_wait_random(max_delay)`

* Regular function (not async!) that:

  * Returns an `asyncio.Task` using `asyncio.create_task(wait_random(...))`
* Key learning: **how to wrap and schedule a coroutine as a Task**

---

### ✅ Task 4: `task_wait_n(n, max_delay)`

* Like `wait_n`, but uses `task_wait_random(...)` to create `n` **Task** objects
* Uses `asyncio.as_completed()` to collect results **in the order they finish**
* Returns list of delays
* Key learning: **low-level async task management**, and how to handle completion order manually

---

## 🔄 Async Concepts Practiced

| Concept                  | Description                                                        |
| ------------------------ | ------------------------------------------------------------------ |
| `async def`              | Defines a coroutine (pausable function)                            |
| `await`                  | Pauses until a coroutine finishes                                  |
| `asyncio.run()`          | Runs async code from the top level                                 |
| `asyncio.gather()`       | Runs multiple coroutines in parallel and returns results in order  |
| `asyncio.as_completed()` | Yields coroutines one-by-one as they complete                      |
| `asyncio.create_task()`  | Converts a coroutine into a scheduled task                         |
| `asyncio.Task`           | Represents a scheduled coroutine (can be cancelled, awaited later) |

---

## 🔍 Real-World Applications

These concepts apply to:

* API clients that send many requests at once
* Downloaders and scrapers that fetch URLs concurrently
* Servers handling many users without blocking
* Games and simulations with time-based events

---



