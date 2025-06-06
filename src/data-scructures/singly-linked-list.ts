/**
 * Represents a node in a singly linked list.
 */
export class ListNode<T> {
  /**
   * The value stored in the node.
   */
  val: T;

  /**
   * The reference to the next node in the list.
   */
  next: ListNode<T> | null;

  /**
   * Creates a new ListNode.
   * @param {number} [val=0] - The value to store in the node.
   * @param {ListNode | null} [next=null] - The next node in the list.
   */
  constructor(val: T, next?: ListNode<T> | null) {
    this.val = val;
    this.next = next === undefined ? null : next;
  }
}
