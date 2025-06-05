import { expect } from '../utils';

/**
 * LeetCode Problem: Contains Duplicate
 * Problem Link: https://leetcode.com/problems/longest-consecutive-sequence/
 * Level: Medium
 * Problem Statement:
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 *
 * You must write an algorithm that runs in O(n) time.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [100,4,200,1,3,2]
 * Output: 4
 * Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
 * Example 2:
 *
 * Input: nums = [0,3,7,2,5,8,4,6,0,1]
 * Output: 9
 * Example 3:
 *
 * Input: nums = [1,0,1,2]
 * Output: 3
 * @param nums
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function longestConsecutive(nums: number[]): number {
  const numsSet = new Set(nums);
  let longest = 0;

  // of numsSet cause unique elements => less iterations
  for (const num of numsSet) {
    if (!numsSet.has(num - 1)) {
      let length = 0;
      while (numsSet.has(num + length)) {
        length += 1;
      }
      longest = Math.max(longest, length);
    }
  }

  return longest;
}

// Tests:
const nums1 = [100, 4, 200, 1, 3, 2];
const nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
const nums3 = [1, 0, 1, 2];
expect(longestConsecutive(nums1), 4);
expect(longestConsecutive(nums2), 9);
expect(longestConsecutive(nums3), 3);
