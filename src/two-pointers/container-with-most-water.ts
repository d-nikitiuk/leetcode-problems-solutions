import { expect } from '../expect';

/**
 * LeetCode Problem: Container With Most Water
 * Problem Link: https://leetcode.com/problems/container-with-most-water/
 * Level: Medium
 * Problem Statement:
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 *
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 *
 * Return the maximum amount of water a container can store.
 *
 * Notice that you may not slant the container.
 *
 *
 *
 * Example 1:
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
 * Example 2:
 *
 * Input: height = [1,1]
 * Output: 1
 *
 * * Time Complexity: O(n), where n is the length of the input array height.
 * * Space Complexity: O(1), as we are using a constant amount of space for variables.
 */
function maxArea(height: number[]): number {
  let maxArea = 0;

  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);

    if (area > maxArea) maxArea = area;

    if (height[left] > height[right]) {
      right -= 1;
    } else {
      left += 1;
    }
  }

  return maxArea;
}

// Tests:
const height1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const height2 = [1, 1];
expect(maxArea(height1), 49);
expect(maxArea(height2), 1);
