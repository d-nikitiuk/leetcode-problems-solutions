import { expect } from '../utils';

/**
 * LeetCode Problem: Design a Stack With Increment Operation
 * Problem Link: https://leetcode.com/problems/design-a-stack-with-increment-operation/
 * Level: Medium
 * Problem Statement:
 * Design a stack that supports increment operations on its elements.
 *
 * Implement the CustomStack class:
 *
 * CustomStack(int maxSize) Initializes the object with maxSize which is the maximum number of elements in the stack.
 * void push(int x) Adds x to the top of the stack if the stack has not reached the maxSize.
 * int pop() Pops and returns the top of the stack or -1 if the stack is empty.
 * void inc(int k, int val) Increments the bottom k elements of the stack by val. If there are less than k elements in the stack,
 * increment all the elements in the stack.
 *
 *
 * Example 1:
 *
 * Input
 * ["CustomStack","push","push","pop","push","push","push","increment","increment","pop","pop","pop","pop"]
 * [[3],[1],[2],[],[2],[3],[4],[5,100],[2,100],[],[],[],[]]
 * Output
 * [null,null,null,2,null,null,null,null,null,103,202,201,-1]
 * Explanation
 * CustomStack stk = new CustomStack(3); // Stack is Empty []
 * stk.push(1);                          // stack becomes [1]
 * stk.push(2);                          // stack becomes [1, 2]
 * stk.pop();                            // return 2 --> Return top of the stack 2, stack becomes [1]
 * stk.push(2);                          // stack becomes [1, 2]
 * stk.push(3);                          // stack becomes [1, 2, 3]
 * stk.push(4);                          // stack still [1, 2, 3], Do not add another elements as size is 4
 * stk.increment(5, 100);                // stack becomes [101, 102, 103]
 * stk.increment(2, 100);                // stack becomes [201, 202, 103]
 * stk.pop();                            // return 103 --> Return top of the stack 103, stack becomes [201, 202]
 * stk.pop();                            // return 202 --> Return top of the stack 202, stack becomes [201]
 * stk.pop();                            // return 201 --> Return top of the stack 201, stack becomes []
 * stk.pop();                            // return -1 --> Stack is empty return -1.
 *
 * Time Complexity: O(1) for push, pop, and increment operations.
 * Space Complexity: O(maxSize) for storing the stack and increment values.
 */
class CustomStack {
  private stack: number[];
  readonly incrementArr: number[];
  private readonly maxSize: number;

  constructor(maxSize: number) {
    this.stack = [];
    this.incrementArr = new Array(maxSize).fill(0);
    this.maxSize = maxSize;
  }

  push(x: number): void {
    if (this.stack.length < this.maxSize) {
      this.stack.push(x);
    }
  }

  pop(): number {
    const idx = this.stack.length - 1;
    if (idx < 0) return -1;

    const popValue = this.stack.pop()! + this.incrementArr[idx];
    if (idx > 0) {
      this.incrementArr[idx - 1] += this.incrementArr[idx];
    }
    this.incrementArr[idx] = 0;
    return popValue;
  }

  increment(k: number, val: number): void {
    const limit = Math.min(k, this.stack.length);
    if (limit > 0) {
      this.incrementArr[limit - 1] += val;
    }
  }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */

// Tests
const customStack = new CustomStack(3);
customStack.push(1); // stack becomes [1]
customStack.push(2); // stack becomes [1, 2]
expect(customStack.pop(), 2); // return 2 --> Return top of the stack 2, stack becomes [1]
customStack.push(2); // stack becomes [1, 2]
customStack.push(3); // stack becomes [1, 2, 3]
customStack.push(4); // stack still [1, 2, 3], Do not add another elements as size is 4
customStack.increment(5, 100); // stack becomes [101, 102, 103]
customStack.increment(2, 100); // stack becomes [201, 202, 103]
expect(customStack.pop(), 103); // return 103 --> Return top of the stack 103, stack becomes [201, 202]
expect(customStack.pop(), 202); // return 202 --> Return top of the stack 202, stack becomes [201]
expect(customStack.pop(), 201); // return 201 --> Return top of the stack 201, stack becomes []
expect(customStack.pop(), -1); // return -1 --> Stack is empty return -1.
