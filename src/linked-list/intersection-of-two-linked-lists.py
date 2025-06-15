"""
LeetCode Problem: Intersection of Two Linked Lists
Problem Link: https://leetcode.com/problems/intersection-of-two-linked-lists/
Level: Easy
Problem Statement:
Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

For example, the following two linked lists begin to intersect at node c1:


The test cases are generated such that there are no cycles anywhere in the entire linked structure.

Note that the linked lists must retain their original structure after the function returns.

Custom Judge:

The inputs to the judge are given as follows (your program is not given these inputs):

intersectVal - The value of the node where the intersection occurs. This is 0 if there is no intersected node.
listA - The first linked list.
listB - The second linked list.
skipA - The number of nodes to skip ahead in listA (starting from the head) to get to the intersected node.
skipB - The number of nodes to skip ahead in listB (starting from the head) to get to the intersected node.
The judge will then create the linked structure based on these inputs and pass the two heads, headA and headB to your program. If you correctly return the intersected node, then your solution will be accepted.

Example 1:

Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Intersected at '8'
Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
- Note that the intersected node's value is not 1 because the nodes with value 1 in A and B (2nd node in A and 3rd node in B) are different node references. In other words, they point to two different locations in memory, while the nodes with value 8 in A and B (3rd node in A and 4th node in B) point to the same location in memory.

Example 2:

Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
Output: Intersected at '2'
Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).
From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.

Example 3:

Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
Output: No intersection
Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
Explanation: The two lists do not intersect, so return null.

Time Complexity: O(n+m) where n is the length of list A and m is the length of list B.
Space Complexity: O(1) since we are not using any extra space for storing nodes.
"""
from typing import Optional

from src.utils.expect import expect


# Definition for singly-linked list.
class ListNode:
    def __init__(self, x: int):
        self.val: int = x
        self.next = None

class Solution:
    # Time Complexity: O(n+m) where n is the length of list A and m is the length of list B.
    # Space Complexity: O(n) where n is the length of list A.
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        """Using a set to find the intersection node."""
        res: Optional[ListNode] = None

        cur = headA
        list_set = set()

        while cur:
            list_set.add(cur)
            cur = cur.next

        cur = headB

        while cur:
            if cur in list_set:
                res = cur
                break
            else:
                cur = cur.next

        return res

    # Time Complexity: O(n+m) where n is the length of list A and m is the length of list B.
    # Space Complexity: O(1) since we are not using any extra space for storing nodes.
    def getIntersectionNode2(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        """Two pointer approach to find the intersection node."""
        cur_a = headA
        cur_b = headB

        while cur_b != cur_a:
            cur_a = headB if cur_a is None else cur_a.next
            cur_b = headA if cur_b is None else cur_b.next

        return cur_a

# Tests
if __name__ == "__main__":
    solution = Solution()

    # Test case 1
    headA1 = ListNode(4)
    headA1.next = ListNode(1)
    intersect_node1 = ListNode(8)
    headA1.next.next = intersect_node1
    headA1.next.next.next = ListNode(4)
    headA1.next.next.next.next = ListNode(5)

    headB1 = ListNode(5)
    headB1.next = ListNode(6)
    headB1.next.next = ListNode(1)
    headB1.next.next.next = intersect_node1

    result1 = solution.getIntersectionNode2(headA1, headB1)
    expect(result1.val, 8)

    # Test case 2
    headA2 = ListNode(1)
    headA2.next = ListNode(9)
    intersect_node2 = ListNode(2)
    headA2.next.next = intersect_node2
    headA2.next.next.next = ListNode(4)

    headB2 = ListNode(3)
    headB2.next = intersect_node2

    result2 = solution.getIntersectionNode2(headA2, headB2)
    expect(result2.val, 2)

    # Test case 3 (no intersection)
    headA3 = ListNode(2)
    headA3.next = ListNode(6)
    headA3.next.next = ListNode(4)

    headB3 = ListNode(1)
    headB3.next = ListNode(5)

    result3 = solution.getIntersectionNode2(headA3, headB3)
    expect(result3, None)

    # Test case 4
    headA4 = ListNode(1)

    headB4 = headA4

    result4 = solution.getIntersectionNode2(headA4, headB4)
    expect(result4.val, 1)
