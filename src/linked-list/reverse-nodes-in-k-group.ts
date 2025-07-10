/**
 * LeetCode Problem: Reverse Nodes in k-Group
 * Problem Link: https://leetcode.com/problems/reverse-nodes-in-k-group/
 * Level: Hard
 * Problem Statement:
 * Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.
 *
 * k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.
 *
 * You may not alter the values in the list's nodes, only nodes themselves may be changed.
 *
 * Example 1:
 *
 * Input: head = [1,2,3,4,5], k = 2
 * Output: [2,1,4,3,5]
 *
 * Example 2:
 *
 * Input: head = [1,2,3,4,5], k = 3
 * Output: [3,2,1,4,5]
 *
 * Time Complexity: O(n), where n is the number of nodes in the linked list.
 * Space Complexity: O(1), since we are reversing the nodes in place without using any additional data structures.
 *
 * Hint: Use a dummy node to simplify the process of reversing nodes in k-groups.
 *  Find the kth node in each group and reverse the nodes between groupPrev and kth.
 */
import { expect } from '../utils';

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getKth(curr: ListNode | null, k: number) {
  while (curr && k > 0) {
    curr = curr.next;
    k -= 1;
  }

  return curr;
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let groupPrev = dummy;

  while (true) {
    const kth = getKth(groupPrev, k);
    if (!kth) {
      break;
    }
    const groupNext = kth.next;

    // Reverse group
    let prev = kth.next!;
    let current = groupPrev.next!;
    while (current !== groupNext) {
      const temp = current.next!;
      current.next = prev;
      prev = current;
      current = temp;
    }

    const temp = groupPrev.next!;
    groupPrev.next = kth;
    groupPrev = temp;
  }

  return dummy.next;
}

// Tests
const list1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const k1 = 2;
expect(reverseKGroup(list1, k1), new ListNode(2, new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(5))))));
const list2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const k2 = 3;
expect(reverseKGroup(list2, k2), new ListNode(3, new ListNode(2, new ListNode(1, new ListNode(4, new ListNode(5))))));
