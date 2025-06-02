import { expect } from '../expect';

/**
 * LeetCode Problem: Search a 2D Matrix
 * Problem Link: https://leetcode.com/problems/search-a-2d-matrix/
 * Level: Medium
 * Problem Statement:
 * You are given an m x n integer matrix `matrix` with the following two properties:
 *
 * Each row is sorted in non-decreasing order.
 * The first integer of each row is greater than the last integer of the previous row.
 * Given an integer target, return true if target is in matrix or false otherwise.
 *
 * You must write a solution in O(log(m * n)) time complexity.
 *
 *
 *
 * Example 1:
 *
 * Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
 * Output: true
 *
 * Example 2:
 * Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
 * Output: false
 *
 * Time Complexity: O(log(m * n)), where m is the number of rows and n is the number of columns in the matrix.
 * Space Complexity: O(1), as we are using a constant amount of space for variables.
 */
function searchMatrix(matrix: number[][], target: number): boolean {
  const [rows, cols] = [matrix.length, matrix[0].length];

  let left = 0;
  let right = rows * cols - 1;

  while (left <= right) {
    const midIndex = Math.floor((left + right) / 2);
    const mid = matrix[Math.floor(midIndex / cols)][midIndex % cols];

    if (target > mid) left = midIndex + 1;
    else if (target < mid) right = midIndex - 1;
    else return true;
  }

  return false;
}

// Tests:
const matrix1 = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const target1 = 3;
const matrix2 = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const target2 = 13;
expect(searchMatrix(matrix1, target1), true);
expect(searchMatrix(matrix2, target2), false);
