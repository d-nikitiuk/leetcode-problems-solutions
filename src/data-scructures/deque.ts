/**
 * A node in a doubly linked Deque.
 * @template T The type of the value held in the node.
 */
interface DequeNode<T> {
  previous: DequeNode<T> | null;
  value: T;
  next: DequeNode<T> | null;
}

/**
 * A double-ended queue (Deque) implemented using a doubly linked list.
 * Allows efficient addition and removal of elements from both ends.
 *
 * @template T The type of elements stored in the deque.
 */
export class Deque<T> {
  private _front: DequeNode<T> | null = null;
  private _back: DequeNode<T> | null = null;
  private _size: number = 0;

  /**
   * Inserts an element at the back of the deque.
   * @param {T} value - The value to insert.
   * @returns {number} The new size of the deque.
   */
  public pushBack(value: T): number {
    const last = this._back;
    this._back = { previous: last, value: value, next: null };
    if (last !== null) last.next = this._back;
    if (this._front === null) this._front = this._back;
    this._size++;
    return this._size;
  }

  /**
   * Inserts an element at the front of the deque.
   * @param {T} value - The value to insert.
   * @returns {number} The new size of the deque.
   */
  public pushFront(value: T): number {
    const first = this._front;
    this._front = { previous: null, value: value, next: first };
    if (first !== null) first.previous = this._front;
    if (this._back === null) this._back = this._front;
    this._size++;
    return this._size;
  }

  /**
   * Removes and returns the element from the back of the deque.
   * @returns {T | null} The removed value, or null if the deque is empty.
   */
  public popBack(): T | null {
    if (this._size === 0) return null;
    const entry = this._back;
    this._back = entry?.previous ?? null;
    if (this._back !== null) this._back.next = null;
    if (this._front === entry) this._front = null;
    this._size--;
    return entry?.value ?? null;
  }

  /**
   * Removes and returns the element from the front of the deque.
   * @returns {T | null} The removed value, or null if the deque is empty.
   */
  public popFront(): T | null {
    if (this._size === 0) return null;
    const entry = this._front;
    this._front = entry?.next ?? null;
    if (this._front !== null) this._front.previous = null;
    if (this._back === entry) this._back = null;
    this._size--;
    return entry?.value ?? null;
  }

  /**
   * Returns the value at the front of the deque without removing it.
   * @returns {T | null} The front value, or null if the deque is empty.
   */
  get front(): T | null {
    return this._front?.value ?? null;
  }

  /**
   * Returns the value at the back of the deque without removing it.
   * @returns {T | null} The back value, or null if the deque is empty.
   */
  get back(): T | null {
    return this._back?.value ?? null;
  }

  /**
   * Returns the current number of elements in the deque.
   * @returns {number} The size of the deque.
   */
  get size(): number {
    return this._size;
  }
}
