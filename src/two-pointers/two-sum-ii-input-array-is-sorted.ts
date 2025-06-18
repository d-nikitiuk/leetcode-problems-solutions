import { expect } from '../utils';

/**
 * LeetCode Problem: Two Sum II - Input Array Is Sorted
 * Problem Link: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * Level: Medium
 * Problem Statement:
 * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
 *
 * Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
 *
 * The tests are generated such that there is exactly one solution. You may not use the same element twice.
 *
 * Your solution must use only constant extra space.
 *
 *
 *
 * Example 1:
 *
 * Input: numbers = [2,7,11,15], target = 9
 * Output: [1,2]
 * Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
 * Example 2:
 *
 * Input: numbers = [2,3,4], target = 6
 * Output: [1,3]
 * Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
 * Example 3:
 *
 * Input: numbers = [-1,0], target = -1
 * Output: [1,2]
 * Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
 *
 * Time Complexity: O(n), where n is the length of the input array numbers.
 * Space Complexity: O(1), since we are using only constant extra space.
 *
 * Hint: Use a two-pointer technique to find the indices of the two numbers that add up to the target.
 */
function twoSum(numbers: number[], target: number): number[] {
  let low = 0;
  let high = numbers.length - 1;

  while (low <= high) {
    if (numbers[low] + numbers[high] > target) high--;
    else if (numbers[low] + numbers[high] < target) low++;
    else return [low + 1, high + 1];
  }

  return [];
}

// Tests:
const numbers1 = [2, 7, 11, 15];
const target1 = 9;
const numbers2 = [2, 3, 4];
const target2 = 6;
const numbers3 = [-1, 0];
const target3 = -1;
expect(twoSum(numbers1, target1), [1, 2]);
expect(twoSum(numbers2, target2), [1, 3]);
expect(twoSum(numbers3, target3), [1, 2]);
