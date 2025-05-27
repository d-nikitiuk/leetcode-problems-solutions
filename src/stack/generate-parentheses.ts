/**
 * LeetCode Problem: Generate Parentheses
 * Problem Link: https://leetcode.com/problems/generate-parentheses/
 * Level: Medium
 * Problem Statement:
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 *
 *
 *
 * Example 1:
 *
 * Input: n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 * Example 2:
 *
 * Input: n = 1
 * Output: ["()"]
 *
 * Time Complexity: O(4^n / sqrt(n)), where n is the number of pairs of parentheses.
 * Space Complexity: O(4^n / sqrt(n)), for storing the combinations.
 */
function generateParenthesis(n: number): string[] {
  const allCombos: string[] = []

  function recurse(
    openParens: number, closedParens: number, combo: string
  ) {
    if (openParens === 0 && closedParens === 0) {
      allCombos.push(combo)
      return
    }

    if (openParens < closedParens) recurse(openParens, closedParens - 1, combo + ')')
    if (openParens > 0) recurse(openParens - 1, closedParens, combo + '(')
  }

  recurse(n, n, '')

  return allCombos
}

// Example usage:
console.log(generateParenthesis(3)); // Output: ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1)); // Output: ["()"]
