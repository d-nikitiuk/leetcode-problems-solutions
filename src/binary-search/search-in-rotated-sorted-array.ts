import { expect } from '../expect';

/**
 * LeetCode Problem: Search in Rotated Sorted Array
 * Problem Link: https://leetcode.com/problems/search-in-rotated-sorted-array/
 * Level: Medium
 * Problem Statement:
 * There is an integer array nums sorted in ascending order (with distinct values).
 *
 * Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length)
 * such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
 * For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
 *
 * Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums,
 * or -1 if it is not in nums.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [4,5,6,7,0,1,2], target = 0
 * Output: 4
 *
 * Example 2:
 *
 * Input: nums = [4,5,6,7,0,1,2], target = 3
 * Output: -1
 *
 * Example 3:
 *
 * Input: nums = [1], target = 0
 * Output: -1
 * @param nums
 * @param target
 *
 * Time Complexity: O(log n), where n is the length of the input array nums.
 * Space Complexity: O(1), as we are using a constant amount of space for variables.
 */
function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // One side always sorted - left or right
    // Sorted left side
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) right = mid - 1;
      else left = mid + 1;
      // Sorted right side
    } else {
      if (nums[mid] < target && target <= nums[right]) left = mid + 1;
      else right = mid - 1;
    }
  }

  return -1;
}

// Tests:
expect(search([4, 5, 6, 7, 0, 1, 2], 0), 4);
expect(search([4, 5, 6, 7, 0, 1, 2], 3), -1);
expect(search([1], 0), -1);
