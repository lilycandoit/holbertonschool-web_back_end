#!/usr/bin/env python3
"""
Hypermedia pagination on the Popular_Baby_Names.csv dataset.

Exposes Server.get_hyper(), which returns both
the data slice and
navigation metadata (page, page_size, next_page, prev_page, total_pages).
"""

import csv
import math
from typing import List, Dict, Any
index_range = __import__('0-simple_helper_function').index_range


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Use assert to verify that both arguments are integers greater than 0.

        Use index_range to find the correct indexes.

        If the input arguments are out of range
        for the dataset, an empty list should be returned.

        Return page of the dataset.
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        data = self.dataset()
        start, end = index_range(page, page_size)

        if start >= len(data):
            return []
        return data[start:end]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict[str, Any]:
        """
        Return hypermedia-style pagination info and the page data.

        Keys:
            - page_size: length of returned page
            - page: current page number
            - data: the page data (list of rows)
            - next_page: next page number, or None if no next page
            - prev_page: previous page number, or None if no previous page
            - total_pages: total number of pages (int)
        """
        data_page = self.get_page(page, page_size)
        total_items = len(self.dataset())
        total_pages = math.ceil(total_items / page_size)

        prev_page = page - 1 if page > 1 else None
        next_page = page + 1 if page < total_pages else None

        return {
            "page_size": len(data_page),
            "page": page,
            "data": data_page,
            "next_page": next_page,
            "prev_page": prev_page,
            "total_pages": total_pages,
        }
