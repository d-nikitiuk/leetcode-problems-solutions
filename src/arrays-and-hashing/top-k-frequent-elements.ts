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
