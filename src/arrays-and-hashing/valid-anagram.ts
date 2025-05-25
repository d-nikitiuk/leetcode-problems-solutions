/**
 * LeetCode Problem: Valid Anagram
 * Problem Link: https://leetcode.com/problems/valid-anagram/
 * Level: Easy
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "anagram", t = "nagaram"
 *
 * Output: true
 *
 * Example 2:
 *
 * Input: s = "rat", t = "car"
 *
 * Output: false
 * @param s
 * @param t
 *
 * Time Complexity: O(n), where n is the length of the strings.
 * Space Complexity: O(1), since the character set is fixed (e.g., lowercase English letters).
 */
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const count: Record<string, number> = {};

  for (const char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  for (const char of t) {
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
}

// Example usage
console.log(isAnagram('anagram', 'nagaram')) // true;
console.log(isAnagram('rat', 'cat')) // false
console.log(isAnagram('aacc', 'ccac')) // false
