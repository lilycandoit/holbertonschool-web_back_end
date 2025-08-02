
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

## 🧪 Project Structure

```bash
python_async_function/
├── 0-basic_async_syntax.py      # Task 0: async function with random wait
├── 1-*.py                       # Task 1: concurrency with gather()
├── 2-*.py                       # Task 2: async task creation
├── ...                          # More tasks to follow
├── README.md                    # Project overview and async insights
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


