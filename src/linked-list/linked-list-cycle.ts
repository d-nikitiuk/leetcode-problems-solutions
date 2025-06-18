import { ListNode } from '../data-scructures';
import { expect } from '../utils';

/**
 * LeetCode Problem: Linked List Cycle
 * Problem Link: https://leetcode.com/problems/linked-list-cycle/
 * Level: Easy
 * Problem Statement:
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 *
 * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
 *
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: head = [3,2,0,-4], pos = 1
 * Output: true
 * Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
 * Example 2:
 *
 *
 * Input: head = [1,2], pos = 0
 * Output: true
 * Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
 * Example 3:
 *
 *
 * Input: head = [1], pos = -1
 * Output: false
 * Explanation: There is no cycle in the linked list.
 * @param head
 *
 * Time Complexity: O(n), where n is the number of nodes in the linked list.
 * Space Complexity: O(1), since we are using two pointers (slow and fast) to detect the cycle without using any additional data structures.
 *
 * Hint: Use Floyd's Tortoise and Hare algorithm to detect cycles in a linked list.
 */
function hasCycle(head: ListNode<number> | null): boolean {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    slow = slow?.next ?? null;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

// Tests
const listWithCycle = new ListNode(3, new ListNode(2, new ListNode(0, new ListNode(-4))));
listWithCycle.next!.next!.next!.next = listWithCycle.next; // Creates a cycle
expect(hasCycle(listWithCycle), true);
const listWithoutCycle = new ListNode(1, new ListNode(2));
expect(hasCycle(listWithoutCycle), false);
