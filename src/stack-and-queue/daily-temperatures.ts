import { expect } from '../utils';

/**
 * LeetCode Problem: Daily Temperatures
 * Problem Link: https://leetcode.com/problems/daily-temperatures/
 * Level: Medium
 * Problem Statement:
 * Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i]
 * is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day
 * for which this is possible, keep answer[i] == 0 instead.
 *
 *
 *
 * Example 1:
 *
 * Input: temperatures = [73,74,75,71,69,72,76,73]
 * Output: [1,1,4,2,1,1,0,0]
 * Example 2:
 *
 * Input: temperatures = [30,40,50,60]
 * Output: [1,1,1,0]
 * Example 3:
 *
 * Input: temperatures = [30,60,90]
 * Output: [1,1,0]
 *
 * @param temperatures
 *
 * Time Complexity: O(n), where n is the length of the input array temperatures.
 * Space Complexity: O(n), where n is the length of the input array temperatures.
 *
 * Hint: Use a stack to keep track of indices of temperatures and their values to find the next warmer day efficiently.
 */
function dailyTemperatures(temperatures: number[]): number[] {
  const result: number[] = new Array(temperatures.length).fill(0);
  const stack: { index: number; val: number }[] = [];

  for (const [index, temp] of temperatures.entries()) {
    let topElement = stack[stack.length - 1];

    while (topElement && temp > topElement.val) {
      result[topElement.index] = index - topElement.index;

      stack.pop();

      topElement = stack[stack.length - 1];
    }

    stack.push({ index, val: temp });
  }

  return result;
}

// Tests:
const temperatures1 = [73, 74, 75, 71, 69, 72, 76, 73];
const temperatures2 = [30, 40, 50, 60];
const temperatures3 = [30, 60, 90];
expect(dailyTemperatures(temperatures1), [1, 1, 4, 2, 1, 1, 0, 0]);
expect(dailyTemperatures(temperatures2), [1, 1, 1, 0]);
expect(dailyTemperatures(temperatures3), [1, 1, 0]);
