import { expect } from '../utils';

/**
 * LeetCode Problem: Min Stack
 * Problem Link: https://leetcode.com/problems/min-stack/
 * Level: Medium
 * Problem Statement:
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 *
 * Implement the MinStack class:
 *
 * MinStack() initializes the stack object.
 * void push(int val) pushes the element val onto the stack.
 * void pop() removes the element on the top of the stack.
 * int top() gets the top element of the stack.
 * int getMin() retrieves the minimum element in the stack.
 * You must implement a solution with O(1) time complexity for each function.
 *
 *
 *
 * Example 1:
 *
 * Input
 * ["MinStack","push","push","push","getMin","pop","top","getMin"]
 * [[],[-2],[0],[-3],[],[],[],[]]
 *
 * Output
 * [null,null,null,null,-3,null,0,-2]
 *
 * Explanation
 * const minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin(); // return -3
 * minStack.pop();
 * minStack.top();    // return 0
 * minStack.getMin(); // return -2
 *
 * Time Complexity: O(1) for all operations.
 */
class MinStack {
  private stack: { val: number; min: number }[];

  constructor() {
    this.stack = [];
  }

  push(val: number): void {
    this.stack.push({ val, min: Math.min(val, this.stack[this.stack.length - 1] ? this.stack[this.stack.length - 1].min : val) });
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1].val;
  }

  getMin(): number {
    return this.stack[this.stack.length - 1].min;
  }
}

// Tests:
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
expect(minStack.getMin(), -3);
minStack.pop();
expect(minStack.top(), 0);
expect(minStack.getMin(), -2);
