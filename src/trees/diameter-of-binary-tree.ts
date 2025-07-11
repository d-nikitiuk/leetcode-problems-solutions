/**
 * LeetCode Problem: Diameter of Binary Tree
 * Problem Link: https://leetcode.com/problems/diameter-of-binary-tree/
 * Level: Easy
 * Problem Statement:
 * Given the root of a binary tree, return the length of the diameter of the tree.
 *
 * The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
 * This path may or may not pass through the root.
 *
 * The length of a path between two nodes is represented by the number of edges between them.
 *
 * Example 1:
 *
 * Input: root = [1,2,3,4,5]
 * Output: 3
 * Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
 *
 * Example 2:
 *
 * Input: root = [1,2]
 * Output: 1
 *
 * Time Complexity: O(n), where n is the number of nodes in the tree.
 * Space Complexity: O(h), where h is the number of layers in the tree.
 *
 * Hint: Use recursion for DFS to calculate height and sum heights for diameter
 */
import { expect } from '../utils';

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function diameterOfBinaryTree(root: TreeNode | null): number {
  let result = 0;

  const dfs = (curr: TreeNode | null): number => {
    if (!curr) return 0;

    const left = dfs(curr.left);
    const right = dfs(curr.right);

    result = Math.max(result, left + right);

    return 1 + Math.max(left, right);
  };

  dfs(root);

  return result;
}

// Tests
const tree1 = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
expect(diameterOfBinaryTree(tree1), 3);
const tree2 = new TreeNode(1, new TreeNode(2));
expect(diameterOfBinaryTree(tree2), 1);
