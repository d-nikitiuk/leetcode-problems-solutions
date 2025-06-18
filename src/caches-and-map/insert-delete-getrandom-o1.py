"""
LeetCode Problem: Insert Delete GetRandom O(1)
Problem Link: https://leetcode.com/problems/insert-delete-getrandom-o1/
Level: Medium
Problem Statement:
Implement the RandomizedSet class:

RandomizedSet() Initializes the RandomizedSet object.
bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
You must implement the functions of the class such that each function works in average O(1) time complexity.



Example 1:

Input
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
Output
[null, true, false, true, 2, true, false, 2]

Explanation
RandomizedSet randomizedSet = new RandomizedSet();
randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
randomizedSet.insert(2); // 2 was already in the set, so return false.
randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.

Time Complexity: O(1) for all operations.
Space Complexity: O(n) for storing elements in a list and a map.

Hint: To achieve O(1) time complexity for getRandom, we can use a list to store the elements and a map to track their indices.
    When removing an element, we can swap it with the last element in the list to maintain O(1) complexity.
"""
from math import floor
from random import random

from src.utils.expect import expect


class RandomizedSet:

    def __init__(self):
        self.map: dict[int, int] = {} # value per index
        self.list = []

    def insert(self, val: int) -> bool:
        if val in self.map: return False

        self.list.append(val)
        self.map[val] = len(self.list) - 1

        return True

    def remove(self, val: int) -> bool:
        if val not in self.map: return False

        index = self.map[val]
        last_item = self.list[-1]

        # Swap the last item with the item to be removed
        self.list[index] = last_item
        self.map[last_item] = index

        # Because we anyway pop last item
        # self.list[-1] = val
        self.list.pop()
        del self.map[val]

        return True

    def getRandom(self) -> int:
        index = floor(random() * len(self.list))
        return self.list[index]


# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()

# Tests
if __name__ == "__main__":
    randomizedSet = RandomizedSet()
    expect(randomizedSet.insert(1), True)
    expect(randomizedSet.remove(2), False)
    expect(randomizedSet.insert(2), True)
    expect(randomizedSet.getRandom() in [1, 2], True)
    expect(randomizedSet.remove(1), True)
    expect(randomizedSet.insert(2), False)
    expect(randomizedSet.getRandom(), 2)

    randomizedSet = RandomizedSet()
    expect(randomizedSet.remove(0), False)
    expect(randomizedSet.remove(0), False)
    expect(randomizedSet.insert(0), True)
    expect(randomizedSet.getRandom(), 0)
    expect(randomizedSet.remove(0), True)
    expect(randomizedSet.insert(0), True)
