/**
 * LeetCode Problem: Balanced Binary Tree
 * https://leetcode.com/problems/balanced-binary-tree/
 * Level: Easy
 * Problem Statement: Given a binary tree, determine if it is height-balanced.
 *
 * Example 1:
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: true
 *
 * Example 2:
 *
 * Input: root = [1,2,2,3,3,null,null,4,4]
 * Output: false
 *
 * Example 3:
 *
 * Input: root = []
 * Output: true
 *
 * Time Complexity: O(n), where n is the number of node in the tree.
 * Space Complexity: O(h), where h is the number of layers in the tree.
 *
 * Hint: Use depth-first search to find if the lower tree is balanced, and its height to determine if the upper tree is balanced
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

function isBalanced(root: TreeNode | null): boolean {
  const dfs = (root: TreeNode | null): [boolean, number] => {
    if (!root) return [true, 0];

    const [left, right] = [dfs(root.left), dfs(root.right)];
    const balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;

    return [balanced, 1 + Math.max(left[1], right[1])];
  };

  return dfs(root)[0];
}

// Tests
const tree1 = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
expect(isBalanced(tree1), true);
const tree2 = new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4), new TreeNode(4)), new TreeNode(3)), new TreeNode(2));
expect(isBalanced(tree2), false);
const tree3 = new TreeNode();
expect(isBalanced(tree3), true);
