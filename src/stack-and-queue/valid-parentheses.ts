import { expect } from '../utils';

/**
 * LeetCode Problem: Valid Parentheses
 * Problem Link: https://leetcode.com/problems/valid-parentheses/
 * Level: Easy
 * Problem Statement:
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 *
 *
 * Example 1:
 *
 * Input: s = "()"
 *
 * Output: true
 *
 * Example 2:
 *
 * Input: s = "()[]{}"
 *
 * Output: true
 *
 * Example 3:
 *
 * Input: s = "(]"
 *
 * Output: false
 *
 * Example 4:
 *
 * Input: s = "([])"
 *
 * Output: true
 * @param s
 *
 * Time Complexity: O(n), where n is the length of the string s.
 * Space Complexity: O(n), in the worst case, where all characters are opening brackets and stored in the stack.
 *
 * Hint: Use a stack to keep track of opening brackets and check for matching closing brackets.
 */
function isValid(s: string): boolean {
  const stack: string[] = [];

  for (const symbol of s.split('')) {
    if (symbol === '(') {
      stack.push(')');
      continue;
    }
    if (symbol === '[') {
      stack.push(']');
      continue;
    }
    if (symbol === '{') {
      stack.push('}');
      continue;
    }

    if (stack[stack.length - 1] !== symbol) {
      return false;
    }

    stack.pop();
  }

  return !stack.length;
}

// Tests:
const s1 = '()';
const s2 = '()[]{}';
const s3 = '(]';
const s4 = '([])';
const s5 = '[';
const s6 = ']';
expect(isValid(s1), true);
expect(isValid(s2), true);
expect(isValid(s3), false);
expect(isValid(s4), true);
expect(isValid(s5), false);
expect(isValid(s6), false);
