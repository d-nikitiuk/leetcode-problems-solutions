import { expect } from '../utils';

/**
 * LeetCode Problem: Minimum Window Substring
 * Problem Link: https://leetcode.com/problems/minimum-window-substring/
 * Level: Hard
 * Problem Statement:
 * Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
 *
 * The testcases will be generated such that the answer is unique.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "ADOBECODEBANC", t = "ABC"
 * Output: "BANC"
 * Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
 *
 * Example 2:
 *
 * Input: s = "a", t = "a"
 * Output: "a"
 * Explanation: The entire string s is the minimum window.
 *
 * Example 3:
 *
 * Input: s = "a", t = "aa"
 * Output: ""
 * Explanation: Both 'a's from t must be included in the window.
 * Since the largest window of s only has one 'a', return empty string.
 * @param s
 * @param t
 *
 * Time Complexity: O(m + n), where m is the length of s and n is the length of t.
 * Space Complexity: O(n), where n is the number of unique characters in t.
 */
function minWindow(s: string, t: string): string {
  if (t === '') return '';

  const tCountDict: Record<string, number> = {};
  for (let i = 0; i < t.length; i++) {
    tCountDict[t[i]] = (tCountDict[t[i]] || 0) + 1;
  }

  let need = Object.keys(tCountDict).length;

  const window: Record<string, number> = {};
  let result = '';

  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    window[char] = (window[char] || 0) + 1;

    if (tCountDict[char] && window[char] === tCountDict[char]) {
      need -= 1;
    }

    while (need === 0) {
      if (!result || right - left + 1 < result.length) {
        result = s.slice(left, right + 1);
      }

      window[s[left]]--;
      if (tCountDict[s[left]] && window[s[left]] < tCountDict[s[left]]) {
        need += 1;
      }

      left++;
    }
  }

  return result;
}

// Tests:
expect(minWindow('ADOBECODEBANC', 'ABC'), 'BANC');
expect(minWindow('a', 'a'), 'a');
expect(minWindow('a', 'aa'), '');
