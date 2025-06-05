/**
 * LeetCode Problem: Contains Duplicate
 * Problem Link: https://leetcode.com/problems/contains-duplicate/
 * Level: Easy
 *
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 *
 * Example 1:
 *
 * Input: nums = [1,2,3,1]
 *
 * Output: true
 *
 * Explanation:
 *
 * The element 1 occurs at the indices 0 and 3.
 *
 * Example 2:
 *
 * Input: nums = [1,2,3,4]
 *
 * Output: false
 *
 * Explanation:
 *
 * All elements are distinct.
 *
 * Example 3:
 *
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 *
 * Output: true
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
import { expect } from '../utils';

function containsDuplicate(nums: number[]): boolean {
  const numSet = new Set<number>();

  for (const num of nums) {
    if (numSet.has(num)) {
      return true;
    }
    numSet.add(num);
  }

  return false;
}

// Tests:
const nums1 = [1, 2, 3, 1];
const nums2 = [1, 2, 3, 4];
const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
expect(containsDuplicate(nums1), true);
expect(containsDuplicate(nums2), false);
expect(containsDuplicate(nums3), true);
