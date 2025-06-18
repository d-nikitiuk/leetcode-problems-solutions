import { expect } from '../utils';
import { Deque } from '../data-scructures';

/**
 * LeetCode Problem: Sliding Window Maximum
 * Problem Link: https://leetcode.com/problems/sliding-window-maximum/
 * Level: Hard
 * Problem Statement:
 * You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.
 *
 * Return the max sliding window.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
 * Output: [3,3,5,5,6,7]
 * Explanation:
 * Window position                Max
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 *  1 [3  -1  -3] 5  3  6  7       3
 *  1  3 [-1  -3  5] 3  6  7       5
 *  1  3  -1 [-3  5  3] 6  7       5
 *  1  3  -1  -3 [5  3  6] 7       6
 *  1  3  -1  -3  5 [3  6  7]      7
 *
 * Example 2:
 *
 * Input: nums = [1], k = 1
 * Output: [1]
 * @param nums
 * @param k
 *
 * Time Complexity: O(n), where n is the number of elements in nums.
 * Space Complexity: O(k), where k is the size of the sliding window.
 *
 * Hint: Use a deque to keep track of the maximum elements in the current window.
 */
function maxSlidingWindow(nums: number[], k: number): number[] {
  const result = new Array(nums.length - k + 1);
  const indexesQueue = new Deque<number>();
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    while (indexesQueue.size && nums[indexesQueue.back!] < nums[right]) {
      indexesQueue.popBack();
    }
    indexesQueue.pushBack(right);

    if (left > indexesQueue.front!) {
      indexesQueue.popFront();
    }

    if (right + 1 >= k) {
      result[left] = nums[indexesQueue.front!];
      left++;
    }
    right++;
  }

  return result;
}

// Tests:
expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3), [3, 3, 5, 5, 6, 7]);
expect(maxSlidingWindow([1], 1), [1]);
