import { expect } from '../expect';

/**
 * LeetCode Problem: Trapping Rain Water
 * Problem Link: https://leetcode.com/problems/trapping-rain-water/
 * Level: Hard
 * Problem Statement:
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 *
 * Example 1:
 *
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
 * In this case, 6 units of rain water (blue section) are being trapped.
 *
 * Example 2:
 *
 * Input: height = [4,2,0,3,2,5]
 * Output: 9
 *
 * Time Complexity: O(n), where n is the length of the input array height.
 * Space Complexity: O(1), as we are using a constant amount of space for variables.
 */
function trap(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxLeft = height[left];
  let maxRight = height[right];
  let area = 0;

  while (left < right) {
    if (maxLeft > height[left]) area += maxLeft - height[left];
    else maxLeft = height[left];

    if (maxRight > height[right]) area += maxRight - height[right];
    else maxRight = height[right];

    if (height[left] > height[right]) right--;
    else left++;
  }

  return area;
}

// Tests:
const height1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const height2 = [4, 2, 0, 3, 2, 5];
expect(trap(height1), 6);
expect(trap(height2), 9);
