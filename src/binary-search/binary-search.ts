import { expect } from '../utils';

/**
 * LeetCode Problem: Binary Search
 * Problem Link: https://leetcode.com/problems/binary-search/
 * Level: Easy
 * Problem Statement:
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.
 * If target exists, then return its index. Otherwise, return -1.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [-1,0,3,5,9,12], target = 9
 * Output: 4
 * Explanation: 9 exists in nums and its index is 4
 * Example 2:
 *
 * Input: nums = [-1,0,3,5,9,12], target = 2
 * Output: -1
 * Explanation: 2 does not exist in nums so return -1
 * @param nums
 * @param target
 *
 * Time Complexity: O(log n), where n is the length of the input array nums.
 * Space Complexity: O(1), as we are using a constant amount of space for variables.
 */
function search(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((high + low) / 2);
    const guess = nums[mid];

    if (guess === target) return mid;
    if (guess > target) high = mid - 1;
    if (guess < target) low = mid + 1;
  }

  return -1;
}

// Tests:
const nums1 = [-1, 0, 3, 5, 9, 12];
const target1 = 9;
const nums2 = [-1, 0, 3, 5, 9, 12];
const target2 = 2;
expect(search(nums1, target1), 4);
expect(search(nums2, target2), -1);
