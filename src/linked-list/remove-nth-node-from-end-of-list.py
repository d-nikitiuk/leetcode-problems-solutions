"""
LeetCode Problem: Remove Nth Node From End of List
Problem Link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
Level: Medium
Problem Statement:
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:

Input: head = [1], n = 1
Output: []

Example 3:

Input: head = [1,2], n = 1
Output: [1]

Time Complexity: O(n) where n is the length of the linked list.
Space Complexity: O(1) since we are modifying the list in place.

Hint: We can use a two-pointer approach to find the nth node from the end of the list.
"""
# Definition for singly-linked list.
from typing import Optional

from src.utils.expect import expect


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummy = ListNode(0)  # Dummy node to simplify edge cases
        dummy.next = head

        first = dummy
        second = dummy

        # Move `first` n+1 steps ahead to create the necessary gap
        for _ in range(n + 1):
            first = first.next

        # Move both `first` and `second` until `first` reaches the end
        while first:
            first = first.next
            second = second.next

        # Remove the nth node from the end
        second.next = second.next.next

        return dummy.next  # Return the head of the modified list

# Tests
if __name__ == "__main__":
    solution = Solution()

    # Test case 1
    head1 = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))
    result1 = solution.removeNthFromEnd(head1, 2)
    current = result1
    expected_values = [1, 2, 3, 5]
    for value in expected_values:
        expect(current.val, value)
        current = current.next

    # Test case 2
    head2 = ListNode(1)
    result2 = solution.removeNthFromEnd(head2, 1)
    expect(result2, None)

    # Test case 3
    head3 = ListNode(1, ListNode(2))
    result3 = solution.removeNthFromEnd(head3, 1)
    current = result3
    expected_values = [1]
    for value in expected_values:
        expect(current.val, value)
        current = current.next
