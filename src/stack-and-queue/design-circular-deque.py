"""
LeetCode Problem: Design Circular Deque
Problem Link: https://leetcode.com/problems/design-circular-deque/
Level: Medium
Problem Statement:
Design your implementation of the circular double-ended queue (deque).

Implement the MyCircularDeque class:

MyCircularDeque(int k) Initializes the deque with a maximum size of k.
boolean insertFront() Adds an item at the front of Deque. Returns true if the operation is successful, or false otherwise.
boolean insertLast() Adds an item at the rear of Deque. Returns true if the operation is successful, or false otherwise.
boolean deleteFront() Deletes an item from the front of Deque. Returns true if the operation is successful, or false otherwise.
boolean deleteLast() Deletes an item from the rear of Deque. Returns true if the operation is successful, or false otherwise.
int getFront() Returns the front item from the Deque. Returns -1 if the deque is empty.
int getRear() Returns the last item from Deque. Returns -1 if the deque is empty.
boolean isEmpty() Returns true if the deque is empty, or false otherwise.
boolean isFull() Returns true if the deque is full, or false otherwise.


Example 1:

Input
["MyCircularDeque", "insertLast", "insertLast", "insertFront", "insertFront", "getRear", "isFull", "deleteLast", "insertFront", "getFront"]
[[3], [1], [2], [3], [4], [], [], [], [4], []]
Output
[null, true, true, true, false, 2, true, true, true, 4]

Explanation
MyCircularDeque myCircularDeque = new MyCircularDeque(3);
myCircularDeque.insertLast(1);  // return True
myCircularDeque.insertLast(2);  // return True
myCircularDeque.insertFront(3); // return True
myCircularDeque.insertFront(4); // return False, the queue is full.
myCircularDeque.getRear();      // return 2
myCircularDeque.isFull();       // return True
myCircularDeque.deleteLast();   // return True
myCircularDeque.insertFront(4); // return True
myCircularDeque.getFront();     // return 4

Time Complexity: O(1) for all operations.
Space Complexity: O(k) where k is the maximum size of the deque.
"""
from src.utils.expect import expect


class Node:
    def __init__(self, value: int):
        self.value = value
        self.prev: 'Node | None' = None
        self.next: 'Node | None' = None


class MyCircularDeque:
    def __init__(self, k: int):
        self.frontNode = None
        self.rearNode = None
        self.size = 0
        self.max_size = k

    def insertFront(self, value: int) -> bool:
        if self.isFull():
            return False

        new_node = Node(value)

        if self.rearNode is None:
            self.rearNode = self.frontNode = new_node
        else:
            self.frontNode.prev = new_node
            new_node.next = self.frontNode
            self.frontNode = new_node

        self.size += 1

        return True

    def insertLast(self, value: int) -> bool:
        if self.isFull():
            return False

        new_node = Node(value)

        if self.rearNode is None:
            self.rearNode = self.frontNode = new_node
        else:
            self.rearNode.next = new_node
            new_node.prev = self.rearNode
            self.rearNode = new_node

        self.size += 1

        return True

    def deleteFront(self) -> bool:
        if self.isEmpty():
            return False

        if self.frontNode.next is not None:
            self.frontNode = self.frontNode.next
            self.frontNode.prev = None
        else:
            self.frontNode = self.rearNode = None

        self.size -= 1

        return True

    def deleteLast(self) -> bool:
        if self.isEmpty():
            return False

        if self.rearNode.prev is not None:
            self.rearNode = self.rearNode.prev
            self.rearNode.next = None
        else:
            self.rearNode = self.frontNode = None

        self.size -= 1

        return True

    def getFront(self) -> int:
        return -1 if self.isEmpty() else self.frontNode.value

    def getRear(self) -> int:
        return -1 if self.isEmpty() else self.rearNode.value

    def isEmpty(self) -> bool:
        return self.size == 0

    def isFull(self) -> bool:
        return self.size == self.max_size


# Tests
if __name__ == "__main__":
    myCircularDeque = MyCircularDeque(3)
    expect(myCircularDeque.insertLast(1), True)
    expect(myCircularDeque.insertLast(2), True)
    expect(myCircularDeque.insertFront(3), True)
    expect(myCircularDeque.insertFront(4), False)
    expect(myCircularDeque.getRear(), 2)
    expect(myCircularDeque.isFull(), True)
    expect(myCircularDeque.deleteLast(), True)
    expect(myCircularDeque.insertFront(4), True)
    expect(myCircularDeque.getFront(), 4)

    myCircularDeque = MyCircularDeque(5)
    expect(myCircularDeque.insertFront(7), True)
    expect(myCircularDeque.insertLast(0), True)
    expect(myCircularDeque.getFront(), 7)
    expect(myCircularDeque.insertLast(3), True)
    expect(myCircularDeque.getFront(), 7)
    expect(myCircularDeque.insertFront(9), True)
    expect(myCircularDeque.getRear(), 3)
    expect(myCircularDeque.getFront(), 9)
    expect(myCircularDeque.getFront(), 9)
    expect(myCircularDeque.deleteLast(), True)
    expect(myCircularDeque.getRear(), 0)

    myCircularDeque = MyCircularDeque(3)
    expect(myCircularDeque.insertLast(1), True)
    expect(myCircularDeque.insertLast(2), True)
    expect(myCircularDeque.insertLast(3), True)
    expect(myCircularDeque.insertLast(4), False)
    expect(myCircularDeque.deleteFront(), True)
    expect(myCircularDeque.deleteFront(), True)
    expect(myCircularDeque.deleteFront(), True)
    expect(myCircularDeque.insertLast(4), True)
    expect(myCircularDeque.insertLast(6), True)
