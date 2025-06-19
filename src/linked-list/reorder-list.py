"""
LeetCode Problem: Reorder List
Problem Link: https://leetcode.com/problems/reorder-list/
Level: Medium
Problem Statement:
You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

Example 1:

Input: head = [1,2,3,4]
Output: [1,4,2,3]

Example 2:

Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]

Time Complexity: O(n) where n is the number of nodes in the linked list.
Space Complexity: O(1) since we are modifying the list in place.

Hint: We can use a two-pointer approach to find the middle of the list, reverse the second half,
    and then merge the two halves.
"""
from typing import Optional

from src.utils.expect import expect


class ListNode:
    def __init__(self, val=0, next=None):
        self.val: int = val
        self.next = next


class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        fast = head
        slow = head

        # Step 1: Find the middle of the list
        while fast and fast.next:
            fast = fast.next.next
            slow = slow.next

        # Step 2: Reverse the second half of the list
        second = slow.next
        slow.next = None
        node = None

        while second:
            temp = second.next
            second.next = node
            node = second
            second = temp

        # Step 3: Merge the two halves
        first = head
        second = node

        while second:
            temp1, temp2 = first.next, second.next
            first.next, second.next = second, temp1
            first, second = temp1, temp2



# Tests
if __name__ == "__main__":
    solution = Solution()

    # Test case 1
    head1 = ListNode(1, ListNode(2, ListNode(3, ListNode(4))))
    solution.reorderList(head1)
    current = head1
    expected_order = [1, 4, 2, 3]
    for value in expected_order:
        expect(current.val, value)
        current = current.next

    # Test case 2
    head2 = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))
    solution.reorderList(head2)
    current2 = head2
    expected_order = [1, 5, 2, 4, 3]
    for value in expected_order:
        expect(current2.val, value)
        current2 = current2.next
