# 🧠 LeetCode Problem Solutions

Welcome to the **LeetCode Problem Solutions** repository!  
This project contains solutions to various problems on [LeetCode](https://leetcode.com/), written in clean and readable code with a focus on clarity and efficiency.

---

## 📁 Project Structure

- `src/`
    - `arrays-and-hashing/`
        - `contains-duplicates.ts` — Checks for duplicate values in an array.
        - `valid-anagram.ts` — Determines if two strings are anagrams.
        - `product-of-array-except-self.ts` — Returns an array where each element is the product of all other elements.
    - `stack-and-queue/`
        - `min-stack.ts` — Stack implementation supporting constant-time minimum retrieval.
        - `design-circular-deque.py` — Implements a circular deque with efficient operations.

## 🧩 Problem Format

Each solution typically includes:
- ✅ Problem description (as a comment)
- ✅ Time and space complexity 
- ✅ Well-named variables and clean logic

Example format using TypeScript:
```typescript
import { expect } from '../utils';

/**
 * LeetCode Problem: Top K Frequent Elements
 * Problem Link: https://leetcode.com/problems/top-k-frequent-elements/
 * Level: Medium
 * Problem Statement:
 * Given an integer array nums and an integer k, return the k most frequent elements.
 * You may return the answer in any order.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 * Example 2:
 *
 * Input: nums = [1], k = 1
 * Output: [1]
 * @param nums
 * @param k
 *
 * Time Complexity: O(n), where n is the number of elements in nums.
 * Space Complexity: O(n), where n is the number of unique elements in nums.
 */
function topKFrequent(nums: number[], k: number): number[] {
  const frequencyMap: Map<number, number> = new Map();
  const arrayWithFrequencyAsIndex: number[][] = [];

  for (const number of nums) {
    if (!frequencyMap.get(number)) {
      frequencyMap.set(number, 1);

      continue;
    }

    frequencyMap.set(number, frequencyMap.get(number)! + 1);
  }

  for (const [number, frequency] of frequencyMap.entries()) {
    if (!arrayWithFrequencyAsIndex[frequency]) {
      arrayWithFrequencyAsIndex[frequency] = [number];

      continue;
    }

    arrayWithFrequencyAsIndex[frequency] = [...arrayWithFrequencyAsIndex[frequency], number];
  }

  const flat = arrayWithFrequencyAsIndex.flat();

  return flat.slice(flat.length - k);
}

// Tests:
const nums1 = [1, 1, 1, 2, 2, 3];
const k1 = 2;
const nums2 = [1];
const k2 = 1;
const nums3 = [-1, -1];
const k3 = 1;
const nums4 = [1, 2];
const k4 = 2;
expect(topKFrequent(nums1, k1).sort(), [1, 2].sort()); // Sorting to ensure order doesn't affect the test
expect(topKFrequent(nums2, k2), [1]);
expect(topKFrequent(nums3, k3), [-1]);
expect(topKFrequent(nums4, k4).sort(), [1, 2].sort()); // Sorting to ensure order doesn't affect the test
```
Example format using Python:
```python
"""
LeetCode Problem: Implement Queue using Stacks
Problem Link: https://leetcode.com/problems/implement-queue-using-stacks/
Level: Easy
Problem Statement:
Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions
 of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue)
 as long as you use only a stack's standard operations.


Example 1:

Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false

Time Complexity: O(1) for all operations
Space Complexity: O(n+1) for storing elements in two stacks
"""
from src.utils.expect import expect

class Item:
    def __init__(self, x: int, index: int):
        self.x = x
        self.index = index

class MyQueue:
    def __init__(self):
        """Initialize two stacks to simulate a queue."""
        self.stack_in: list[Item] = []
        self.stack_out: list[Item] = []

    def push(self, x: int) -> None:
        """Push element x to the back of the queue."""
        index = self.stack_in[-1].index + 1 if self.stack_in else 0
        self.stack_in.append(Item(x, index))

    def pop(self) -> int:
        """
        Remove the element from the front of the queue and return it.
        Maintains stack_out as a history of popped elements.
        """
        peek = self.__get_front_item()

        if self.stack_out:
            self.stack_out.pop()

        self.stack_out.append(peek)

        return peek.x

    def peek(self) -> int:
        """Get the front element."""
        return self.__get_front_item().x

    def __get_front_item(self) -> Item:
        """Helper to get the front Item object."""
        if self.stack_out:
            return self.stack_in[self.stack_out[-1].index + 1]

        return self.stack_in[0]

    def empty(self) -> bool:
        """Return True if the queue is empty, False otherwise."""
        if self.stack_out and self.stack_in:
            return self.stack_out[-1].index == self.stack_in[-1].index

        return len(self.stack_out) == len(self.stack_in)

# Tests
if __name__ == "__main__":
    queue = MyQueue()

    queue.push(1)
    queue.push(2)
    queue.push(3)
    queue.push(4)
    expect(queue.pop(), 1)
    queue.push(5)
    expect(queue.pop(), 2)
    expect(queue.pop(), 3)
    expect(queue.pop(), 4)
    expect(queue.pop(), 5)
    expect(queue.empty(), True)

```

## ✅ Problems Solved

| Difficulty | Count |
|------------|-------|
| Easy       | 12    |
| Medium     | 24    |
| Hard       | 5     |
| **Total**  | 41    |


## 🚀 Getting Started

### Prerequisites

- Node.js
- npm

or 

- Python 3.x (for Python solutions)

### Install dependencies

```bash
npm install
```

### Run solutions
```bash
npm start src/arrays-and-hashing/contains-duplicates.ts
```
or
```bash
PYTHONPATH=./ python3 src/stack-and-queue/design-circular-deque.py # For Python solutions
```

### Lint the code

```bash
npm run lint
```

## Author
[Dmytro Nikitiuk](https://github.com/tomorroN)

## 🌟 Support

If you like this project, give it a ⭐ on GitHub!
