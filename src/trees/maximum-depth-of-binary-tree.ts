/**
 * LeetCode Problem: Maximum Depth of Binary Tree
 * Problem Link: https://leetcode.com/problems/maximum-depth-of-binary-tree
 * Level: Easy
 * Problem Statement:
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 *
 * Example 1:
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 3
 *
 * Example 2:
 *
 * Input: root = [1,null,2]
 * Output: 2
 *
 * Time Complexity: O(n), where n is the number of nodes in the tree.
 * Space Complexity: O(w), where w is the max width of the tree.
 *
 * Hint: Use recursion to calculate depth in each layer of the tree
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

function maxDepth(root: TreeNode | null): number {
  return getDepth(root, 0);
}

function getDepth(root: TreeNode | null, depth: number): number {
  if (!root) return depth;

  return Math.max(getDepth(root.left, depth + 1), getDepth(root.right, depth + 1));
}

// Tests
const tree1 = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
expect(maxDepth(tree1), 3);
const tree2 = new TreeNode(1, null, new TreeNode(2));
expect(maxDepth(tree2), 2);
