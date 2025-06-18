import { expect } from '../utils';

/**
 * LeetCode Problem: Largest Rectangle in Histogram
 * Problem Link: https://leetcode.com/problems/largest-rectangle-in-histogram/
 * Level: Hard
 * Problem Statement:
 * Given an array of integers heights representing the histogram's bar height where the width
 * of each bar is 1, return the area of the largest rectangle in the histogram.
 *
 * Example 1:
 * Input: heights = [2,1,5,6,2,3]
 * Output: 10
 * Explanation: The above is a histogram where width of each bar is 1.
 * The largest rectangle is shown in the red area, which has an area = 10 units.
 *
 * Example 2:
 * Input: heights = [2,4]
 * Output: 4
 *
 * Time Complexity: O(n), where n is the length of the input array heights.
 * Space Complexity: O(n), for the stack used to store indices and heights.
 *
 * Hint: Use a stack to keep track of the indices of the histogram bars and calculate areas when encountering a shorter bar.
 */
function largestRectangleArea(heights: number[]): number {
  let maxArea = 0;
  // Stack to store pairs of [index, height]
  const stack: [number, number][] = [];

  // Iterate through each height in the histogram
  for (const [i, height] of heights.entries()) {
    let start = i;

    // While the stack is not empty and the current height is less than the height at the top of the stack
    while (stack.length && stack.at(-1)![1] > height) {
      // Pop the top element from the stack
      const [index, height] = stack.pop()!;

      // Calculate the area with the popped height as the smallest height
      maxArea = Math.max(maxArea, height * (i - index));
      // The start index for the current height is the index of the popped element
      start = index;
    }

    stack.push([start, height]);
  }

  for (const [index, height] of stack) {
    // Calculate the area for the remaining heights in the stack
    maxArea = Math.max(maxArea, height * (heights.length - index));
  }

  return maxArea;
}

// Tests:
const heights1 = [2, 1, 5, 6, 2, 3];
const heights2 = [2, 4];
expect(largestRectangleArea(heights1), 10);
expect(largestRectangleArea(heights2), 4);
