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
 *
 * Hint: Use a frequency map to count occurrences and then sort or bucket sort based on frequency.
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
LeetCode Problem: Check if the Sentence Is Pangram
Problem Link: https://leetcode.com/problems/check-if-the-sentence-is-pangram/
Level: Easy
Problem Statement:
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.



Example 1:

Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.
Example 2:

Input: sentence = "leetcode"
Output: false

Hint: To check if a sentence is a pangram, we can use a set to track the unique characters in the sentence and compare
    its size to the size of the English alphabet.
"""
import string

from src.utils.expect import expect


class Solution:
    def checkIfPangram(self, sentence: str) -> bool:
        if len(set(sentence)) >= len(set(string.ascii_lowercase)): return True
        else: return False

# Tests
if __name__ == "__main__":

    solution = Solution()
    expect(solution.checkIfPangram("thequickbrownfoxjumpsoverthelazydog"), True)
    expect(solution.checkIfPangram("leetcode"), False)
    expect(solution.checkIfPangram("abcdefghijklmnopqrstuvwxyz"), True)
    expect(solution.checkIfPangram("abcde"), False)
    expect(solution.checkIfPangram("a quick brown fox jumps over the lazy dog"), True)  # Contains spaces

```

## ✅ Problems Solved

| Difficulty | Count |
|------------|-------|
| Easy       | 17    |
| Medium     | 34    |
| Hard       | 8     |
| **Total**  | 59    |


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
or

```bash
pip install -r requirements.txt  # For Python solutions
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
