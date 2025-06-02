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
    - `stack/`
        - `min-stack.ts` — Stack implementation supporting constant-time minimum retrieval.

## 🧩 Problem Format

Each solution typically includes:
- ✅ Problem description (as a comment)
- ✅ Time and space complexity 
- ✅ Well-named variables and clean logic

Example format:
```typescript
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
```

## ✅ Problems Solved

| Difficulty | Count |
|------------|-------|
| Easy       | 6     |
| Medium     | 15    |
| Hard       | 2     |
| **Total**  | 23    |


## 🚀 Getting Started

### Prerequisites

- Node.js
- npm

### Install dependencies

```bash
npm install
```

### Run solutions
```bash
npm start src/arrays-and-hashing/contains-duplicates.ts
```

### Lint the code

```bash
npm run lint
```

## Author
[Dmytro Nikitiuk](https://github.com/tomorroN)

## 🌟 Support

If you like this project, give it a ⭐ on GitHub!
