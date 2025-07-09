"""
LeetCode Problem: Add Two Numbers
Problem Link: https://leetcode.com/problems/add-two-numbers/
Level: Medium
Problem Statement:
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order,
 and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

Time Complexity: O(max(m, n)) where m and n are the lengths of the two linked lists.
Space Complexity: O(max(m, n)) for the resulting linked list.

Hint: We can iterate through both linked lists, adding corresponding digits and managing carry-over values.
"""
from math import floor
from typing import Optional

from src.utils.expect import expect


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode()
        current = dummy

        leftover = 0

        while l1 or l2:
            plain_sum = (l1.val if l1 else 0) + (l2.val if l2 else 0) + leftover
            final_sum = plain_sum if plain_sum <= 9 else plain_sum - 10
            leftover = 0 if plain_sum <= 9 else floor(plain_sum / 10)

            current.next = ListNode(final_sum)
            current = current.next

            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None

        if leftover > 0: current.next = ListNode(leftover)

        return dummy.next


# Tests
if __name__ == "__main__":
    solution = Solution()

    # Test case 1
    l1 = ListNode(2, ListNode(4, ListNode(3)))
    l2 = ListNode(5, ListNode(6, ListNode(4)))
    result = solution.addTwoNumbers(l1, l2)
    expect(result.val, 7)
    expect(result.next.val, 0)
    expect(result.next.next.val, 8)

    # Test case 2
    l1 = ListNode(0)
    l2 = ListNode(0)
    result = solution.addTwoNumbers(l1, l2)
    expect(result.val, 0)
    expect(result.next, None)

    # Test case 3
    l1 = ListNode(9, ListNode(9, ListNode(9, ListNode(9, ListNode(9, ListNode(9, ListNode(9)))))))
    l2 = ListNode(9, ListNode(9, ListNode(9, ListNode(9))))
    result = solution.addTwoNumbers(l1, l2)
    expect(result.val, 8)
    expect(result.next.val, 9)
    expect(result.next.next.val, 9)
    expect(result.next.next.next.val, 9)
    expect(result.next.next.next.next.val, 0)
    expect(result.next.next.next.next.next.val, 0)
    expect(result.next.next.next.next.next.next.val, 0)
    expect(result.next.next.next.next.next.next.next.val, 1)

