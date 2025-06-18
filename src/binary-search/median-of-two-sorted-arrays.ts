import { expect } from '../utils';

/**
 * LeetCode Problem: Median of Two Sorted Arrays
 * Problem Link: https://leetcode.com/problems/median-of-two-sorted-arrays/
 * Level: Hard
 * Problem Statement:
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 *
 * The overall run time complexity should be O(log (m+n)).
 *
 *
 *
 * Example 1:
 *
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 * Explanation: merged array = [1,2,3] and median is 2.
 *
 * Example 2:
 *
 * Input: nums1 = [1,2], nums2 = [3,4]
 * Output: 2.50000
 * Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 * @param nums1
 * @param nums2
 *
 * Time Complexity: O(log(min(m, n))), where m and n are the lengths of the two input arrays.
 * Space Complexity: O(1), as we are using a constant amount of space for variables.
 *
 * Hint: Use binary search to find the correct partition between the two arrays.
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const total = nums1.length + nums2.length;
  const half = Math.floor(total / 2);
  let left = 0;
  let right = nums1.length;

  while (left <= right) {
    const midNums1 = Math.floor((left + right) / 2);
    const midNums2 = half - midNums1;

    const leftNums1 = midNums1 > 0 ? nums1[midNums1 - 1] : -Number.MAX_SAFE_INTEGER;
    const rightNums1 = midNums1 < nums1.length ? nums1[midNums1] : Number.MAX_SAFE_INTEGER;

    const leftNums2 = midNums2 > 0 ? nums2[midNums2 - 1] : -Number.MAX_SAFE_INTEGER;
    const rightNums2 = midNums2 < nums2.length ? nums2[midNums2] : Number.MAX_SAFE_INTEGER;

    if (leftNums1 <= rightNums2 && leftNums2 <= rightNums1) {
      if (total % 2 === 0) return (Math.max(leftNums1, leftNums2) + Math.min(rightNums1, rightNums2)) / 2;
      else return Math.min(rightNums1, rightNums2);
    } else if (leftNums1 > rightNums2) {
      right = midNums1 - 1;
    } else {
      left = midNums1 + 1;
    }
  }

  return 0;
}

// Tests:
expect(findMedianSortedArrays([1, 3], [2]), 2.0);
expect(findMedianSortedArrays([1, 2], [3, 4]), 2.5);
expect(findMedianSortedArrays([], [1]), 1);
