import { expect } from '../utils';

/**
 * LeetCode Problem: Find Minimum in Rotated Sorted Array
 * Problem Link: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * Level: Medium
 * Problem Statement:
 * Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
 *
 * [4,5,6,7,0,1,2] if it was rotated 4 times.
 * [0,1,2,4,5,6,7] if it was rotated 7 times.
 * Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
 *
 * Given the sorted rotated array nums of unique elements, return the minimum element of this array.
 *
 * You must write an algorithm that runs in O(log n) time.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [3,4,5,1,2]
 * Output: 1
 * Explanation: The original array was [1,2,3,4,5] rotated 3 times.
 * Example 2:
 *
 * Input: nums = [4,5,6,7,0,1,2]
 * Output: 0
 * Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
 * Example 3:
 *
 * Input: nums = [11,13,15,17]
 * Output: 11
 * Explanation: The original array was [11,13,15,17] and it was rotated 4 times.
 *
 * @param nums - An array of unique integers sorted in ascending order and then rotated.
 *
 * Time Complexity: O(log n), where n is the length of the input array nums.
 * Space Complexity: O(1), as we are using a constant amount of space for variables.
 *
 * Hint: Use binary search to find the minimum element in the rotated sorted array.
 */
function findMin(nums: number[]): number {
  if (nums[0] < nums[nums.length - 1]) {
    return nums[0];
  }

  let low = 0;
  let high = nums.length - 1;
  let minIndex = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((high + low) / 2);

    if (nums[nums.length - 1] < nums[mid]) low = mid + 1;
    else {
      high = mid - 1;
      minIndex = mid;
    }
  }

  return nums[minIndex];
}

// Tests:
expect(findMin([3, 4, 5, 1, 2]), 1);
expect(findMin([4, 5, 6, 7, 0, 1, 2]), 0);
expect(findMin([11, 13, 15, 17]), 11);
