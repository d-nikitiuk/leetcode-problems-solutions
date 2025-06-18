"""
LeetCode Problem: LRU Cache
Problem Link: https://leetcode.com/problems/lru-cache/
Level: Hard
Problem Statement:
Design and implement a data structure for a Least Frequently Used (LFU) cache.

Implement the LFUCache class:

LFUCache(int capacity) Initializes the object with the capacity of the data structure.
int get(int key) Gets the value of the key if the key exists in the cache. Otherwise, returns -1.
void put(int key, int value) Update the value of the key if present, or inserts the key if not already present.
When the cache reaches its capacity, it should invalidate and remove the least frequently used key before inserting a new item.
For this problem, when there is a tie (i.e., two or more keys with the same frequency), the least recently used key would be invalidated.
To determine the least frequently used key, a use counter is maintained for each key in the cache. The key with the smallest use counter is the least frequently used key.

When a key is first inserted into the cache, its use counter is set to 1 (due to the put operation). The use counter for a key in the cache is incremented either a get or put operation is called on it.

The functions get and put must each run in O(1) average time complexity.



Example 1:

Input
["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, 3, null, -1, 3, 4]

Explanation
// cnt(x) = the use counter for key x
// cache=[] will show the last used order for tiebreakers (leftmost element is  most recent)
LFUCache lfu = new LFUCache(2);
lfu.put(1, 1);   // cache=[1,_], cnt(1)=1
lfu.put(2, 2);   // cache=[2,1], cnt(2)=1, cnt(1)=1
lfu.get(1);      // return 1
                 // cache=[1,2], cnt(2)=1, cnt(1)=2
lfu.put(3, 3);   // 2 is the LFU key because cnt(2)=1 is the smallest, invalidate 2.
                 // cache=[3,1], cnt(3)=1, cnt(1)=2
lfu.get(2);      // return -1 (not found)
lfu.get(3);      // return 3
                 // cache=[3,1], cnt(3)=2, cnt(1)=2
lfu.put(4, 4);   // Both 1 and 3 have the same cnt, but 1 is LRU, invalidate 1.
                 // cache=[4,3], cnt(4)=1, cnt(3)=2
lfu.get(1);      // return -1 (not found)
lfu.get(3);      // return 3
                 // cache=[3,4], cnt(4)=1, cnt(3)=3
lfu.get(4);      // return 4
                 // cache=[4,3], cnt(4)=2, cnt(3)=3

Time Complexity: O(1) for both get and put operations.
Space Complexity: O(capacity) for storing the cache entries and their frequencies.

Hint: We can use a combination of a dictionary to store the key-value pairs and their frequencies,
    and an OrderedDict to maintain the order of keys based on their usage frequency.
    This allows us to efficiently remove the least frequently used key when the cache exceeds its capacity.
"""
from collections import OrderedDict, defaultdict

from src.utils.expect import expect


class ListNode:
    def __init__(self, key, value):
        self.key = key
        self.val = value
        self.freq = 1


class LFUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.store: dict[int, ListNode] = dict()
        self.counter_store: dict[int, OrderedDict[int, int]] = defaultdict(OrderedDict)
        self.least_freq_counter: int = 0

    def get(self, key: int) -> int:
        if key not in self.store:
            return -1

        node = self.store[key]

        self.update_counter(node, node.val)
        return node.val

    def put(self, key: int, value: int) -> None:
        if self.capacity == 0:
            return
        if key not in self.store:
            if len(self.store) >= self.capacity:
                k, v = self.counter_store[self.least_freq_counter].popitem(last=False)
                self.store.pop(k)
            node = ListNode(key, value)
            self.store[key] = node
            self.counter_store[1][key] = value
            self.least_freq_counter = 1
        else:
            node = self.store[key]
            node.val = value
            self.update_counter(node, value)

    def update_counter(self, node: ListNode, new_val: int):
        k, f = node.key, node.freq
        self.counter_store[f].pop(k)
        if not self.counter_store[f] and self.least_freq_counter == f:
            self.least_freq_counter += 1
        self.counter_store[f + 1][k] = new_val
        node.freq += 1


# Tests
if __name__ == "__main__":
    lfu = LFUCache(2)
    lfu.put(1, 1)
    lfu.put(2, 2)
    expect(lfu.get(1), 1)
    lfu.put(3, 3)
    expect(lfu.get(2), -1)
    expect(lfu.get(3), 3)
    lfu.put(4, 4)
    expect(lfu.get(1), -1)
    expect(lfu.get(3), 3)
    expect(lfu.get(4), 4)

    lfu = LFUCache(2)
    expect(lfu.get(2), -1)
    lfu.put(2, 6)
    expect(lfu.get(1), -1)
    lfu.put(1, 5)
    lfu.put(1, 2)
    expect(lfu.get(1), 2)
    expect(lfu.get(2), 6)
