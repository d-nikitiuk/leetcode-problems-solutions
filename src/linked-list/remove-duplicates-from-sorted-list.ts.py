"""
LeetCode Problem: Remove Duplicates from Sorted List
Problem Link: https://leetcode.com/problems/remove-duplicates-from-sorted-list/
Level: Easy
Problem Statement:
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

Example 1:

Input: head = [1,1,2]
Output: [1,2]

Example 2:

Input: head = [1,1,2,3,3]
Output: [1,2,3]

Time Complexity: O(n) where n is the number of nodes in the linked list.
Space Complexity: O(1) since we are modifying the list in place.
"""
from typing import Optional

from src.utils.expect import expect


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = head

        while head and head.next:
            if head.next and head.next.val == head.val:
                head.next = head.next.next
            else:
                head = head.next

        return dummy

# Tests
if __name__ == "__main__":
    solution = Solution()

    head1 = ListNode(1, ListNode(1, ListNode(2)))
    result1 = solution.deleteDuplicates(head1)
    expect(result1.val, 1)
    expect(result1.next.val, 2)

    head2 = ListNode(1, ListNode(1, ListNode(2, ListNode(3, ListNode(3)))))
    result2 = solution.deleteDuplicates(head2)
    expect(result2.val, 1)
    expect(result2.next.val, 2)
    expect(result2.next.next.val, 3)
