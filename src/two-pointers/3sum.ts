import { expect } from '../expect';

/**
 * LeetCode Problem: 3Sum
 * Problem Link: https://leetcode.com/problems/3sum/
 * Level: Medium
 * Problem Statement:
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 *
 * Notice that the solution set must not contain duplicate triplets.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 * Explanation:
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
 * The distinct triplets are [-1,0,1] and [-1,-1,2].
 * Notice that the order of the output and the order of the triplets does not matter.
 * Example 2:
 *
 * Input: nums = [0,1,1]
 * Output: []
 * Explanation: The only possible triplet does not sum up to 0.
 * Example 3:
 *
 * Input: nums = [0,0,0]
 * Output: [[0,0,0]]
 * Explanation: The only possible triplet sums up to 0.
 *
 * * Time Complexity: O(n^2), where n is the length of the input array nums.
 * * Space Complexity: O(1) for the result map, as we are not using any additional data structures that grow with input size.
 */
function threeSum(nums: number[]): number[][] {
  const sortedNums: number[] = nums.sort((a, b) => a - b);
  const map: Map<string, number[]> = new Map();

  for (const [index, num] of sortedNums.entries()) {
    if (index > 0 && num === sortedNums[index - 1]) {
      continue;
    }

    let left = index + 1;
    let right = sortedNums.length - 1;

    while (left < right) {
      const sum = num + sortedNums[left] + sortedNums[right];
      if (sum === 0) {
        map.set('' + num + sortedNums[left] + sortedNums[right], [num, sortedNums[left], sortedNums[right]]);
        left++;
        right--;
      }
      if (sum > 0) right--;
      if (sum < 0) left++;
    }
  }

  return [...map.values()];
}

// Tests:
const nums1 = [-1, 0, 1, 2, -1, -4];
const nums2 = [0, 1, 1];
const nums3 = [0, 0, 0];
expect(threeSum(nums1), [
  [-1, -1, 2],
  [-1, 0, 1],
]);
expect(threeSum(nums2), []);
expect(threeSum(nums3), [[0, 0, 0]]);
