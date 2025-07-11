"""
LeetCode Problem: Check if the Sentence Is Pangram
Problem Link: https://leetcode.com/problems/check-if-the-sentence-is-pangram/
Level: Easy
Problem Statement:
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.



Example 1:

Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.
Example 2:

Input: sentence = "leetcode"
Output: false

Time Complexity: O(n) where n is the length of the sentence.
Space Complexity: O(1) since we are using a fixed set of characters (the English alphabet).

Hint: To check if a sentence is a pangram, we can use a set to track the unique characters in the sentence and compare
    its size to the size of the English alphabet.
"""
import string

from src.utils.expect import expect


class Solution:
    def checkIfPangram(self, sentence: str) -> bool:
        if len(set(sentence)) >= len(set(string.ascii_lowercase)): return True
        else: return False

# Tests
if __name__ == "__main__":

    solution = Solution()
    expect(solution.checkIfPangram("thequickbrownfoxjumpsoverthelazydog"), True)
    expect(solution.checkIfPangram("leetcode"), False)
    expect(solution.checkIfPangram("abcdefghijklmnopqrstuvwxyz"), True)
    expect(solution.checkIfPangram("abcde"), False)
    expect(solution.checkIfPangram("a quick brown fox jumps over the lazy dog"), True)  # Contains spaces
