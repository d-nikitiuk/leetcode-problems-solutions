"""
LeetCode Problem: LRU Cache
Problem Link: https://leetcode.com/problems/lru-cache/
Level: Medium
Problem Statement:
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.



Example 1:

Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4

Time Complexity: O(1) for both get and put operations.
Space Complexity: O(capacity) for storing the cache entries.
"""
from collections import OrderedDict

from src.utils.expect import expect


class LRUCache:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.store: OrderedDict[int, int] = OrderedDict()

    def get(self, key: int) -> int:
        if key not in self.store:
            return -1

        self.store.move_to_end(key)

        return self.store.get(key)

    def put(self, key: int, value: int) -> None:
        self.store[key] = value
        self.store.move_to_end(key)

        if len(self.store) > self.capacity:
            self.store.popitem(False)

# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)

# Tests
if __name__ == "__main__":
    lru_cache = LRUCache(2)
    lru_cache.put(1, 1)  # cache is {1=1}
    lru_cache.put(2, 2)  # cache is {1=1, 2=2}
    expect(lru_cache.get(1), 1)  # returns 1
    lru_cache.put(3, 3)  # LRU key was 2, evicts key 2, cache is {1=1, 3=3}
    expect(lru_cache.get(2), -1)  # returns -1 (not found)
    lru_cache.put(4, 4)  # LRU key was 1, evicts key 1, cache is {4=4, 3=3}
    expect(lru_cache.get(1), -1)  # return -1 (not found)
    expect(lru_cache.get(3), 3)  # return 3
    expect(lru_cache.get(4), 4)  # return 4
