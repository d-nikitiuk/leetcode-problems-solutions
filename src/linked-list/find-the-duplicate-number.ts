import { expect } from '../utils';

/**
 * LeetCode Problem: Find the Duplicate Number
 * Problem Link: https://leetcode.com/problems/find-the-duplicate-number/
 * Level: Medium
 * Problem Statement:
 * Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
 *
 * There is only one repeated number in nums, return this repeated number.
 *
 * You must solve the problem without modifying the array nums and using only constant extra space.
 *
 * Example 1:
 *
 * Input: nums = [1,3,4,2,2]
 * Output: 2
 *
 * Example 2:
 *
 * Input: nums = [3,1,3,4,2]
 * Output: 3
 *
 * Example 3:
 *
 * Input: nums = [3,3,3,3,3]
 * Output: 3
 * @param nums
 *
 * Time Complexity: O(n), where n is the length of the input array nums.
 * Space Complexity: O(1), since we are using only constant extra space.
 *
 * Hint: Use Floyd's Tortoise and Hare (Cycle Detection) algorithm to find the duplicate number.
 */
function findDuplicate(nums: number[]): number {
  let fast = 0;
  let slow = 0;

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];

    if (slow === fast) {
      break;
    }
  }

  let slow2 = 0;
  while (true) {
    slow = nums[slow];
    slow2 = nums[slow2];

    if (slow === slow2) {
      return slow;
    }
  }
}

// Tests
expect(findDuplicate([1, 3, 4, 2, 2]), 2);
expect(findDuplicate([3, 1, 3, 4, 2]), 3);
expect(findDuplicate([3, 3, 3, 3, 3]), 3);
