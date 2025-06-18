"""
LeetCode Problem: Remove Duplicates from Sorted List II
Problem Link: https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
Level: Medium
Problem Statement:
Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

Example 1:

Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]

Example 2:

Input: head = [1,1,1,2,3]
Output: [2,3]

Time Complexity: O(n) where n is the number of nodes in the linked list.
Space Complexity: O(1) since we are modifying the list in place.

Hint: We can iterate through the linked list and use a dummy node to keep track of the last unique node,
    skipping over duplicates as we go.
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
        dummy = ListNode(-1)
        dummy.next = head
        prev = dummy
        curr = head

        while curr and curr.next:
            if curr.val == curr.next.val:
                while curr.next and curr.val == curr.next.val:
                    curr = curr.next
                prev.next = curr.next
            else:
                prev = prev.next
            curr = curr.next

        return dummy.next


# Tests
if __name__ == "__main__":
    solution = Solution()

    # Test case 1
    head1 = ListNode(1, ListNode(2, ListNode(3, ListNode(3, ListNode(4, ListNode(4, ListNode(5)))))))
    result1 = solution.deleteDuplicates(head1)
    current = result1
    expected_values1 = [1, 2, 5]
    for value in expected_values1:
        expect(current.val, value)
        current = current.next
    expect(current, None)

    # Test case 2
    head2 = ListNode(1, ListNode(1, ListNode(1, ListNode(2, ListNode(3)))))
    result2 = solution.deleteDuplicates(head2)
    current = result2
    expected_values2 = [2, 3]
    for value in expected_values2:
        expect(current.val, value)
        current = current.next
    expect(current, None)
