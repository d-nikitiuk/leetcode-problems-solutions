import { expect } from '../utils';
/**
 * LeetCode Problem: Permutation in String
 * Problem Link: https://leetcode.com/problems/permutation-in-string/
 * Level: Medium
 * Problem Statement:
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
 *
 * In other words, return true if one of s1's permutations is the substring of s2.
 *
 *
 *
 * Example 1:
 *
 * Input: s1 = "ab", s2 = "eidbaooo"
 * Output: true
 * Explanation: s2 contains one permutation of s1 ("ba").
 *
 * Example 2:
 *
 * Input: s1 = "ab", s2 = "eidboaoo"
 * Output: false
 * @param s1
 * @param s2
 *
 * Time Complexity: O(n), where n is the length of s2.
 * Space Complexity: O(1), since the character set is fixed (e.g., lowercase English letters).
 */
function checkInclusion(s1: string, s2: string): boolean {
  // Number of characters in the English alphabet
  const chars: number[] = new Array(26).fill(0);
  // Helper function to get the index of a character in the chars array
  // It assumes that the input characters are lowercase English letters (a-z)
  // This function calculates the index by subtracting the ASCII code of 'a' (97) from the ASCII code of the character
  const getIndex = (char: string) => char.charCodeAt(0) - 97;

  for (const char of s1) {
    chars[getIndex(char)]++;
  }

  for (let i = 0; i < s2.length; i++) {
    // If we are at the start of the window, we need to decrement the character count
    chars[getIndex(s2[i])]--;

    if (i >= s1.length) {
      // If we have moved past the length of s1, we need to increment the character count that is sliding out of the window
      chars[getIndex(s2[i - s1.length])]++;
    }

    // Check if all characters in the chars array are zero
    if (chars.every((char) => char === 0)) return true;
  }

  return false;
}

// Tests:
expect(checkInclusion('ab', 'eidbaooo'), true);
expect(checkInclusion('ab', 'eidboaoo'), false);
expect(checkInclusion('abc', 'ccccbbbbaaaa'), false);
expect(checkInclusion('adc', 'dcda'), true);
expect(checkInclusion('abc', 'bbbca'), true);
