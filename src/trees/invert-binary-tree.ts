/**
 * LeetCode Problem: Invert Binary Tree
 * Problem Link: https://leetcode.com/problems/invert-binary-tree/
 * Level: Easy
 * Problem Statement: Given the root of a binary tree, invert the tree, and return its root.
 *
 * Example 1:
 *
 * Input: root = [4,2,7,1,3,6,9]
 * Output: [4,7,2,9,6,3,1]
 *
 * Example 2:
 *
 * Input: root = [2,1,3]
 * Output: [2,3,1]
 *
 * Example 3:
 *
 * Input: root = []
 * Output: []
 *
 * Time Complexity: O(n), where n is the number of nodes in the tree.
 * Space Complexity: O(n), where n is the number of nodes in the tree.
 *
 * Hint: Use recursion to invert tree in each layer
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

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  invertTree(root.left);
  invertTree(root.right);

  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  return root;
}

// Tests
const tree1 = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9)));
expect(invertTree(tree1), new TreeNode(4, new TreeNode(7, new TreeNode(9), new TreeNode(6)), new TreeNode(2, new TreeNode(3), new TreeNode(1))));
const tree2 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
expect(invertTree(tree2), new TreeNode(2, new TreeNode(3), new TreeNode(1)));
const tree3 = null;
expect(invertTree(tree3), null);
