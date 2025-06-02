import { expect } from '../expect';

/**
 * LeetCode Problem: Valid Palindrome
 * Problem Link: https://leetcode.com/problems/valid-palindrome/
 * Level: Easy
 * Problem Statement:
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: "amanaplanacanalpanama" is a palindrome.
 * Example 2:
 *
 * Input: s = "race a car"
 * Output: false
 * Explanation: "raceacar" is not a palindrome.
 * Example 3:
 *
 * Input: s = " "
 * Output: true
 * Explanation: s is an empty string "" after removing non-alphanumeric characters.
 * Since an empty string reads the same forward and backward, it is a palindrome.
 *
 * Time Complexity: O(n), where n is the length of the string s. We traverse the string once to filter and normalize it.
 * Space Complexity: O(n), where n is the length of the filtered string. We store the filtered string in memory.
 */
function isPalindrome(s: string): boolean {
  const sAlphaNum = s.replace(/[^0-9a-z]/gi, '').toLowerCase();

  for (let i = 0; i <= sAlphaNum.length; i++) {
    if (sAlphaNum[i] !== sAlphaNum[sAlphaNum.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

// Example usage
expect(isPalindrome('A man, a plan, a canal: Panama'), true);
expect(isPalindrome('race a car'), false);
expect(isPalindrome(' '), true);
expect(isPalindrome('ab_a'), true);
