

# Pagination in Python – Learning Notes

## Overview

This project is part of my backend learning journey with Python.
The goal is to understand **pagination** — from the simplest implementation to more advanced, deletion-resilient versions.

The project builds step-by-step:

1. **Simple Pagination**
2. **Hypermedia Pagination**
3. **Deletion-Resilient Hypermedia Pagination**

---

## **0. Simple Pagination**

**File:** `0-simple_pagination.py`

### Purpose

Split a dataset into smaller pages given:

* `page` (current page number, starting from 1)
* `page_size` (number of items per page)

### Key Steps

1. **Validate inputs**

   * `page` and `page_size` must be positive integers.
   * Raise `AssertionError` if invalid.

2. **Calculate slice indexes**

   ```python
   start = (page - 1) * page_size
   end = start + page_size
   ```

3. **Return sliced data**

   ```python
   return dataset[start:end]
   ```

### Example

```python
get_page(1, 3)  # → returns items [0, 1, 2]
get_page(3, 2)  # → returns items [4, 5]
```

---

## **1. Hypermedia Pagination**

**File:** `2-hypermedia_pagination.py`

### Purpose

Add **extra metadata** to pagination so clients can:

* Navigate forward/backward
* Know total number of pages

### Key Steps

1. Reuse `get_page` from task 0.
2. Return a **dictionary** containing:

   ```python
   {
       "page_size": len(data),
       "page": page,
       "data": data,
       "next_page": page + 1 if page < total_pages else None,
       "prev_page": page - 1 if page > 1 else None,
       "total_pages": total_pages
   }
   ```
3. Use `math.ceil` to compute `total_pages`.

### Example

```python
get_hyper(2, 2)
# {
#   "page_size": 2,
#   "page": 2,
#   "data": [...],
#   "next_page": 3,
#   "prev_page": 1,
#   "total_pages": 9709
# }
```

---

## **2. Deletion-Resilient Hypermedia Pagination**

**File:** `3-hypermedia_del_pagination.py`

### Purpose

If dataset rows are **deleted** between requests, the pagination should:

* Skip missing keys
* Still return the correct number of items

This is done by using a **cursor-based approach** rather than a fixed page number.

---

### Workflow

#### 1. Dataset & Indexed Dataset

* `dataset()` → loads the CSV file (without header), caches in `__dataset`.
* `indexed_dataset()` → creates a dictionary:

  ```python
  {
      0: row_0,
      1: row_1,
      ...
  }
  ```

  Keys = index positions, Values = row data
  Truncated to 1000 rows for testing.

#### 2. `get_hyper_index`

**Signature:**

```python
def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
```

**Logic:**

1. **Handle `index`**

   * If `None` → start from 0.
   * Validate type & range.

2. **Skip missing indexes** (deletion handling)

   ```python
   cursor = index
   while cursor <= max_key and cursor not in indexed:
       cursor += 1
   ```

3. **Collect page data**

   * Append rows until `page_size` reached or dataset ends.

   ```python
   data = []
   while cursor <= max_key and len(data) < page_size:
       if cursor in indexed:
           data.append(indexed[cursor])
       cursor += 1
   ```

4. **Set `next_index`**

   * First position after the last returned row
   * Or `None` if at dataset end

5. **Return dictionary**:

   ```python
   {
       "index": index,
       "next_index": next_index,
       "page_size": len(data),
       "data": data
   }
   ```

---

### Example Run

```python
# Request starting at index 3, page_size=2
res = get_hyper_index(3, 2)
# → {'index': 3, 'next_index': 5, 'page_size': 2, 'data': [...]}

# Remove the row at index 3
del indexed_dataset[3]

# Request again from same index
res = get_hyper_index(3, 2)
# Still returns 2 items, starting from next available index (4 or 5)
```

---

## **Key Takeaways**

* **Simple Pagination:** Direct slicing works but assumes dataset is static.
* **Hypermedia Pagination:** Adds metadata for navigation and UI.
* **Deletion-Resilient Pagination:** Uses cursor to skip missing rows, making pagination stable even if data changes between requests.
* **Caching:** Avoids re-reading the file every time by storing dataset in memory.
* **Validation:** Always assert page/index ranges to avoid runtime errors.

---
