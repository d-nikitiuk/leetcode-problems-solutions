import { expect } from '../utils';
import { ListNode } from '../data-scructures';

/**
 * LeetCode Problem: Reverse Linked List
 * Problem Link: https://leetcode.com/problems/reverse-linked-list/
 * Level: Easy
 * Problem Statement:
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * Example 1:
 *
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 *
 * Example 2:
 *
 * Input: head = [1,2]
 * Output: [2,1]
 *
 * Example 3:
 *
 * Input: head = []
 * Output: []
 *
 * @param head
 *
 * Time Complexity: O(n), where n is the number of nodes in the linked list.
 * Space Complexity: O(1), since we are reversing the list in place without using any additional data structures.
 */
function reverseList<T>(head: ListNode<T> | null): ListNode<T> | null {
  let previous = null;
  let current = head;

  while (current) {
    const temporary = current.next;

    current.next = previous;
    previous = current;
    current = temporary;
  }

  return previous;
}

// Tests
expect(
  reverseList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))),
  new ListNode(5, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1))))),
);
expect(reverseList(new ListNode(1, new ListNode(2))), new ListNode(2, new ListNode(1)));
expect(reverseList(null), null);
