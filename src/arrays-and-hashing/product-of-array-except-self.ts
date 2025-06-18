import { expect } from '../utils';

/**
 * LeetCode Problem: Product of Array Except Self
 * Problem Link: https://leetcode.com/problems/product-of-array-except-self/
 * Level: Medium
 * Problem Statement:
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 *
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 * Example 2:
 *
 * Input: nums = [-1,1,0,-3,3]
 * Output: [0,0,9,0,0]
 * @param nums
 *
 * Time Complexity: O(n), where n is the length of the input array nums.
 * Space Complexity: O(n), where n is the length of the input array nums.
 *
 * Hint: Use two passes to calculate prefix and postfix products.
 */
function productExceptSelf(nums: number[]): number[] {
  const result = new Array(nums.length).fill(1);
  let prefix = 1;
  let postfix = 1;
  for (let i = 0; i < nums.length; ++i) {
    result[i] *= prefix;
    result[nums.length - 1 - i] *= postfix;
    prefix *= nums[i];
    postfix *= nums[nums.length - 1 - i];
  }
  return result;
}

// Tests:
const nums1 = [1, 2, 3, 4];
// res = [1, 1, 2, 6]
const nums2 = [-1, 1, 0, -3, 3];
expect(productExceptSelf(nums1), [24, 12, 8, 6]);
expect(productExceptSelf(nums2), [0, 0, 9, 0, 0]);
