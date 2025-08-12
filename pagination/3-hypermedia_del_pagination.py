#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names."""
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self) -> None:
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Return the cached dataset (list of rows) without the header row."""
        if self.__dataset is None:
            with open(self.DATA_FILE, encoding="utf-8") as f:
                reader = csv.reader(f)
                data = [row for row in reader]
            self.__dataset = data[1:]  # drop header
        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """
        Return the dataset indexed by position starting at 0.
        """
        if self.__indexed_dataset is None:
            data = self.dataset()
            truncated = data[:1000]
            self.__indexed_dataset = dict(enumerate(truncated))
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None,
                        page_size: int = 10) -> Dict:
        """
        skips over missing keys and keeps returning the next available rows.

        Args:
            index: starting cursor (None -> 0). Must be within current bounds.
            page_size: number of items to return (> 0).

        Returns:
            {
              "index": <requested cursor>,
              "next_index": <cursor for next page or None>,
              "page_size": <actual count returned>,
              "data": <list of rows>
            }
        """
        if index is None:
            index = 0
        assert isinstance(index, int) and index >= 0
        assert isinstance(page_size, int) and page_size > 0

        indexed = self.indexed_dataset()
        if not indexed:
            return {
                "index": index,
                "next_index": None,
                "page_size": 0,
                "data": []
                }

        max_key = max(indexed.keys())
        # index can equal max_key (even if that key was deleted)
        assert index <= max_key

        # skip gaps caused by deletions (MAIN POINT)
        # If the exact index was removed, we move to the next surviving key.
        cursor = index
        while cursor <= max_key and cursor not in indexed:
            cursor += 1

        # Collect up to page_size existing rows, skipping any missing keys
        data = []
        while cursor <= max_key and len(data) < page_size:
            if cursor in indexed:
                data.append(indexed[cursor])
            cursor += 1

        # Next cursor is first position after the last returned item
        next_index: int = cursor if cursor <= max_key else None

        return {
            "index": index,
            "data": data,
            "page_size": len(data),
            "next_index": next_index,
        }
