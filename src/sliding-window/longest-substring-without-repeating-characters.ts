import { expect } from '../utils';

/**
 * LeetCode Problem: Longest Substring Without Repeating Characters
 * Problem Link: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Level: Medium
 * Problem Statement:
 * Given a string s, find the length of the longest substring without duplicate characters.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 * Example 2:
 *
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 * Example 3:
 *
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 * Time Complexity: O(n), where n is the length of the string s.
 * Space Complexity: O(min(n, m)), where n is the length of the string s and m is the size of the character set (e.g., 26 for lowercase English letters).
 * @param s
 */
function lengthOfLongestSubstring(s: string): number {
  let length = 0;
  const charMap: Map<string, number> = new Map();

  let leftIndex = 0;

  for (let rightIndex = 0; rightIndex < s.length; rightIndex++) {
    const char = s[rightIndex];

    if (charMap.has(char) && charMap.get(char)! >= leftIndex) {
      leftIndex = charMap.get(char)! + 1;
    }

    length = Math.max(length, rightIndex - leftIndex + 1);
    charMap.set(char, rightIndex);
  }

  return length;
}

// Tests:
expect(lengthOfLongestSubstring('abcabcbb'), 3);
expect(lengthOfLongestSubstring('bbbbb'), 1);
expect(lengthOfLongestSubstring('pwwkew'), 3);
expect(lengthOfLongestSubstring('dvdf'), 3);
