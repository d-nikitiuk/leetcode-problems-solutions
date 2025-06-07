import { ListNode } from '../data-scructures';
import { expect } from '../utils';

/**
 * LeetCode Problem: Merge Two Sorted Lists
 * Problem Link: https://leetcode.com/problems/merge-two-sorted-lists/
 * Level: Easy
 * Problem Statement:
 * You are given the heads of two sorted linked lists list1 and list2.
 *
 * Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
 *
 * Return the head of the merged linked list.
 *
 *
 *
 * Example 1:
 *
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 *
 * Example 2:
 *
 * Input: list1 = [], list2 = []
 * Output: []
 *
 * Example 3:
 *
 * Input: list1 = [], list2 = [0]
 * Output: [0]
 * @param list1
 * @param list2
 *
 * Time Complexity: O(n + m), where n and m are the lengths of the two linked lists.
 * Space Complexity: O(1), since we are merging the lists in place without using any additional data structures.
 */
function mergeTwoLists(list1: ListNode<number> | null, list2: ListNode<number> | null): ListNode<number> | null {
  const head: ListNode<number> = { val: 0, next: null };
  let node = head;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      node.next = list1;
      list1 = list1.next;
    } else {
      node.next = list2;
      list2 = list2.next;
    }
    node = node.next;
  }

  if (list1) {
    node.next = list1;
  } else {
    node.next = list2;
  }

  return head.next;
}

// Tests
const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
expect(mergeTwoLists(list1, list2), new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4)))))));
expect(mergeTwoLists(null, null), null);
expect(mergeTwoLists(null, new ListNode(0)), new ListNode(0));
