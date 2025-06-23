"""
LeetCode Problem: Copy List with Random Pointer
Problem Link: https://leetcode.com/problems/copy-list-with-random-pointer/
Level: Medium
Problem Statement:
A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

Return the head of the copied linked list.

The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
Your code will only be given the head of the original linked list.

Example 1:

Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]

Example 2:

Input: head = [[1,1],[2,1]]
Output: [[1,1],[2,1]]

Example 3:

Input: head = [[3,null],[3,0],[3,null]]
Output: [[3,null],[3,0],[3,null]]

Time Complexity: O(n) where n is the number of nodes in the linked list.
Space Complexity: O(n) for the hash map used to store the mapping from old nodes to new nodes.

Hint: We can use a hash map to keep track of the mapping from old nodes to new nodes,
 and then iterate through the list twice: first to create the new nodes, and second to set the next and random pointers.
"""

from typing import Optional

from src.utils.expect import expect


# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random

class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        old_to_copy = {None: None}

        curr = head
        while curr:
            old_to_copy[curr] = Node(curr.val)
            curr = curr.next

        curr = head
        while curr:
            old_to_copy[curr].next = old_to_copy[curr.next]
            old_to_copy[curr].random = old_to_copy[curr.random]
            curr = curr.next

        return old_to_copy[head]


# Tests
if __name__ == "__main__":
    solution = Solution()

    # Example 1
    head1 = Node(7, None, None)
    head1.next = Node(13, None, head1)
    head1.next.next = Node(11, None, head1.next.next)
    head1.next.next.next = Node(10, None, head1.next.next)
    head1.next.next.next.next = Node(1, None, head1)

    result1 = solution.copyRandomList(head1)
    expect(result1.val, 7)
    expect(result1.random,None)
    expect(result1.next.val,13)
    expect(result1.next.next.val, 11)
    expect(result1.next.next.next.val, 10)
    expect(result1.next.next.next.next.val, 1)

    # Example 2
    head2 = Node(1, None, None)
    head2.random = head2

    result2 = solution.copyRandomList(head2)
    expect(result2.val, 1)
