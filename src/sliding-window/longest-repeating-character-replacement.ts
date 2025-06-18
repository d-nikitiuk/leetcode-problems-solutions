import { expect } from '../utils';

/**
 * LeetCode Problem: Longest Repeating Character Replacement
 * Problem Link: https://leetcode.com/problems/longest-repeating-character-replacement/
 * Level: Medium
 * Problem Statement:
 * You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
 *
 * Return the length of the longest substring containing the same letter you can get after performing the above operations.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "ABAB", k = 2
 * Output: 4
 * Explanation: Replace the two 'A's with two 'B's or vice versa.
 *
 * Example 2:
 *
 * Input: s = "AABABBA", k = 1
 * Output: 4
 * Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
 * The substring "BBBB" has the longest repeating letters, which is 4.
 * There may exists other ways to achieve this answer too.
 * @param s
 * @param k
 *
 * Time Complexity: O(n), where n is the length of the string s. We traverse the string once with a sliding window.
 * Space Complexity: O(1), since we are using a fixed-size map to count character frequencies (at most 26 uppercase letters).
 *
 * Hint: Use a sliding window approach to maintain the longest substring with at most k replacements.
 */
function characterReplacement(s: string, k: number): number {
  let result = 0;
  let maxFrequency = 0;
  const charCountMap: Map<string, number> = new Map();
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const newCount = (charCountMap.get(s[right]) || 0) + 1;
    const windowLength = right - left + 1;

    charCountMap.set(s[right], newCount);
    maxFrequency = Math.max(maxFrequency, newCount);

    if (windowLength - maxFrequency <= k) {
      // Set max result
      result = Math.max(windowLength, result);
    } else {
      // Move left pointer of sliding window
      charCountMap.set(s[left], charCountMap.get(s[left])! - 1);
      left++;
    }
  }

  return result;
}

// Tests:
expect(characterReplacement('ABAB', 2), 4);
expect(characterReplacement('AABABBA', 1), 4);
