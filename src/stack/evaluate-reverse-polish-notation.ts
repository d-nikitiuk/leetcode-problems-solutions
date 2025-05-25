/**
 * LeetCode Problem: Evaluate Reverse Polish Notation
 * Problem Link: https://leetcode.com/problems/evaluate-reverse-polish-notation/
 * Level: Medium
 * Problem Statement:
 * You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
 *
 * Evaluate the expression. Return an integer that represents the value of the expression.
 *
 * Note that:
 *
 * The valid operators are '+', '-', '*', and '/'.
 * Each operand may be an integer or another expression.
 * The division between two integers always truncates toward zero.
 * There will not be any division by zero.
 * The input represents a valid arithmetic expression in a reverse polish notation.
 * The answer and all the intermediate calculations can be represented in a 32-bit integer.
 *
 *
 * Example 1:
 *
 * Input: tokens = ["2","1","+","3","*"]
 * Output: 9
 * Explanation: ((2 + 1) * 3) = 9
 * Example 2:
 *
 * Input: tokens = ["4","13","5","/","+"]
 * Output: 6
 * Explanation: (4 + (13 / 5)) = 6
 * Example 3:
 *
 * Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
 * Output: 22
 * Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
 * = ((10 * (6 / (12 * -11))) + 17) + 5
 * = ((10 * (6 / -132)) + 17) + 5
 * = ((10 * 0) + 17) + 5
 * = (0 + 17) + 5
 * = 17 + 5
 * = 22
 *
 * Time Complexity: O(n), where n is the number of tokens.
 * Space Complexity: O(n), where n is the number of tokens.
 */
function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  const operators = ['+', '-', '*', '/'];

  for (const token of tokens) {
    if (!operators.includes(token)) {
      stack.push(parseInt(token, 10));

      continue;
    }

    const num2 = stack.pop()!;
    const num1 = stack.pop()!;

    if (token === '/') {
      const result = num1 / num2
      stack.push(result > 0 ? Math.floor(result) : Math.ceil(result));
    }
    if (token === '*') stack.push(num1 * num2);
    if (token === '+') stack.push(num1 + num2);
    if (token === '-') stack.push(num1 - num2);
  }

  return stack[0];
}

// Example usage:
const tokens1 = ['2', '1', '+', '3', '*'];
const tokens2 = ['4', '13', '5', '/', '+'];
const tokens3 = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'];
console.log(evalRPN(tokens1)); // Output: 9
console.log(evalRPN(tokens2)); // Output: 6
console.log(evalRPN(tokens3)); // Output: 22
