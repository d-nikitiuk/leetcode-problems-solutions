"""
LeetCode Problem: Implement Queue using Stacks
Problem Link: https://leetcode.com/problems/implement-queue-using-stacks/
Level: Easy
Problem Statement:
Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions
 of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue)
 as long as you use only a stack's standard operations.


Example 1:

Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false

Time Complexity: O(1) for all operations
Space Complexity: O(n+1) for storing elements in two stacks
"""
from src.utils.expect import expect

class Item:
    def __init__(self, x: int, index: int):
        self.x = x
        self.index = index

class MyQueue:
    def __init__(self):
        """Initialize two stacks to simulate a queue."""
        self.stack_in: list[Item] = []
        self.stack_out: list[Item] = []

    def push(self, x: int) -> None:
        """Push element x to the back of the queue."""
        index = self.stack_in[-1].index + 1 if self.stack_in else 0
        self.stack_in.append(Item(x, index))

    def pop(self) -> int:
        """
        Remove the element from the front of the queue and return it.
        Maintains stack_out as a history of popped elements.
        """
        peek = self.__get_front_item()

        if self.stack_out:
            self.stack_out.pop()

        self.stack_out.append(peek)

        return peek.x

    def peek(self) -> int:
        """Get the front element."""
        return self.__get_front_item().x

    def __get_front_item(self) -> Item:
        """Helper to get the front Item object."""
        if self.stack_out:
            return self.stack_in[self.stack_out[-1].index + 1]

        return self.stack_in[0]

    def empty(self) -> bool:
        """Return True if the queue is empty, False otherwise."""
        if self.stack_out and self.stack_in:
            return self.stack_out[-1].index == self.stack_in[-1].index

        return len(self.stack_out) == len(self.stack_in)

# Tests
if __name__ == "__main__":
    queue = MyQueue()

    queue.push(1)
    queue.push(2)
    queue.push(3)
    queue.push(4)
    expect(queue.pop(), 1)
    queue.push(5)
    expect(queue.pop(), 2)
    expect(queue.pop(), 3)
    expect(queue.pop(), 4)
    expect(queue.pop(), 5)
    expect(queue.empty(), True)
