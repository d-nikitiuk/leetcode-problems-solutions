/**
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

// Example usage:
const s1 = '()';
const s2 = '()[]{}';
const s3 = '(]';
const s4 = '([])';
const s5 = '[';
const s6 = ']';
console.log(isValid(s1)); // Output: true
console.log(isValid(s2)); // Output: true
console.log(isValid(s3)); // Output: false
console.log(isValid(s4)); // Output: true
console.log(isValid(s5)); // Output: false
console.log(isValid(s6)); // Output: false
