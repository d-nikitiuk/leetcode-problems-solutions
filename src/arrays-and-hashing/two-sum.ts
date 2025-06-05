import { expect } from '../utils';

/**
 * LeetCode Problem: Two Sum
 * Problem Link: https://leetcode.com/problems/two-sum/
 * Level: Easy
 * Problem Statement:
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * Example 2:
 *
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * Example 3:
 *
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 * @param nums
 * @param target
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function twoSum(nums: number[], target: number): number[] {
  const numberMap = new Map();

  for (const [index, int] of nums.entries()) {
    const diff = target - int;

    if (numberMap.has(diff)) {
      return [numberMap.get(diff), index];
    }

    numberMap.set(int, index);
  }

  return [];
}

// Tests:
const nums1 = [2, 7, 11, 15];
const target1 = 9;
const nums2 = [3, 2, 4];
const target2 = 6;
const nums3 = [3, 3];
const target3 = 6;
expect(twoSum(nums1, target1), [0, 1]);
expect(twoSum(nums2, target2), [1, 2]);
expect(twoSum(nums3, target3), [0, 1]);
