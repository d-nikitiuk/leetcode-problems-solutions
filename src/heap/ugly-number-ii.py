"""
LeetCode Problem: Ugly Number II
Problem Link: https://leetcode.com/problems/ugly-number-ii/
Level: Medium
Problem Statement:
An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

Given an integer n, return the nth ugly number.

Example 1:

Input: n = 10
Output: 12
Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.

Example 2:

Input: n = 1
Output: 1
Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.

Time Complexity: O(n log n) for the heap approach and O(n) for the dynamic programming approach.
Space Complexity: O(n) for the heap approach and O(1) for the dynamic programming approach.

Hint: We can use a min-heap to efficiently find the nth ugly number by always expanding the smallest ugly number
    and pushing new ugly numbers into the heap.
"""
import heapq

from src.utils.expect import expect


class Solution:
    def nthUglyNumber(self, n: int) -> int:
        """Find the nth ugly number using a min-heap approach."""
        primes = [2,3,5]
        ugly_heap = [1]
        visited = set(ugly_heap)
        current = ugly_heap[-1]

        for _ in range(n):
            current = heapq.heappop(ugly_heap)
            for prime in primes:
                new_ugly = current * prime
                if new_ugly not in visited:
                    visited.add(new_ugly)
                    heapq.heappush(ugly_heap, new_ugly)
        return current

    def nthUglyNumber2(self, n: int) -> int:
        """Find the nth ugly number using a dynamic programming approach."""
        nums = [1]
        i2, i3, i5 = 0, 0, 0

        for i in range(1, n):
            next_num = min(nums[i2] * 2, nums[i3] * 3, nums[i5] * 5)

            nums.append(next_num)
            if next_num == nums[i2] * 2: i2 += 1
            if next_num == nums[i3] * 3: i3 += 1
            if next_num == nums[i5] * 5: i5 += 1

        return nums[n - 1]


# Tests
if __name__ == "__main__":
    solution = Solution()

    expect(solution.nthUglyNumber(10), 12)
    expect(solution.nthUglyNumber(1), 1)

    expect(solution.nthUglyNumber2(10), 12)
    expect(solution.nthUglyNumber2(1), 1)
