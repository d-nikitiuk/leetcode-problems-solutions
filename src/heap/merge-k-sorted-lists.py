"""
LeetCode Problem: Merge k Sorted Lists
Problem Link: https://leetcode.com/problems/merge-k-sorted-lists/
Level: Hard
Problem Statement:
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6

Example 2:

Input: lists = []
Output: []

Example 3:

Input: lists = [[]]
Output: []

Time Complexity: O(N log k) where N is the total number of nodes in all linked-lists and k is the number of linked-lists.
Space Complexity: O(k) for the priority queue used to merge the lists.

Hint: We can use a divide-and-conquer approach to merge the lists in pairs, or we can use a min-heap to always merge
    the smallest elements first.
"""
# Definition for singly-linked list.
from typing import List, Optional

from src.utils.expect import expect


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        if not lists or len(lists) == 0:
            return None

        while len(lists) > 1:
            mergedLists = []

            for i in range(0, len(lists), 2):
                list1 = lists[i]
                list2 = lists[i + 1] if len(lists) > i + 1 else None
                mergedLists.append(self.mergeTwoLists(list1, list2))

            lists = mergedLists

        return lists[0]

    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode()

        cur = dummy

        while list1 and list2:
            if list1.val < list2.val:
                cur.next = list1
                list1 = list1.next
            else:
                cur.next = list2
                list2 = list2.next
            cur = cur.next

        cur.next = list1 if list1 else list2

        return dummy.next


# Tests
if __name__ == "__main__":
    solution = Solution()

    # Test case 1
    list1 = ListNode(1, ListNode(4, ListNode(5)))
    list2 = ListNode(1, ListNode(3, ListNode(4)))
    list3 = ListNode(2, ListNode(6))
    lists = [list1, list2, list3]
    result = solution.mergeKLists(lists)

    # Print merged list
    actual_values = []
    current = result
    while current:
        actual_values.append(current.val)
        current = current.next
    expect(actual_values, [1, 1, 2, 3, 4, 4, 5, 6])
