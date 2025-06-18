"""
LeetCode Problem: Find K Pairs with Smallest Sums
Problem Link: https://leetcode.com/problems/find-k-pairs-with-smallest-sums/
Level: Medium
Problem Statement:
You are given two integer arrays nums1 and nums2 sorted in non-decreasing order and an integer k.

Define a pair (u, v) which consists of one element from the first array and one element from the second array.

Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.



Example 1:

Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
Output: [[1,2],[1,4],[1,6]]
Explanation: The first 3 pairs are returned from the sequence: [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
Example 2:

Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
Output: [[1,1],[1,1]]
Explanation: The first 2 pairs are returned from the sequence: [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]

Time Complexity: O(k log k) where k is the number of pairs to return. The heap operations take O(log k) time.
Space Complexity: O(k) for the result list and the heap.

Hint: We can use a min-heap to efficiently find the k pairs with the smallest sums by always expanding the smallest
    sum pair and pushing new pairs into the heap.
"""
import heapq
from typing import List

from src.utils.expect import expect


class Solution:
    def kSmallestPairs(self, nums1: List[int], nums2: List[int], k: int) -> List[List[int]]:
        if not nums1 or not nums2:
            return []
        # sum, index1, index2
        min_heap = []
        # tuple(index1, index2)
        visited = set()
        result = []

        heapq.heappush(min_heap, (nums1[0] + nums2[0], 0, 0))
        visited.add((0, 0))

        while min_heap and len(result) < k:
            sum, index1, index2 = heapq.heappop(min_heap)
            result.append([nums1[index1], nums2[index2]])

            if index2 + 1 < len(nums2) and (index1, index2 + 1) not in visited:
                visited.add((index1, index2 + 1))
                heapq.heappush(min_heap, (nums1[index1] + nums2[index2 + 1], index1, index2 + 1))

            if index1 + 1 < len(nums1) and (index1 + 1, index2) not in visited:
                visited.add((index1 + 1, index2))
                heapq.heappush(min_heap, (nums1[index1 + 1] + nums2[index2], index1 + 1, index2))

        return result


# Tests
if __name__ == "__main__":
    solution = Solution()

    # Test case 1
    nums1 = [1, 7, 11]
    nums2 = [2, 4, 6]
    k = 3
    result1 = solution.kSmallestPairs(nums1, nums2, k)
    expect(result1, [[1, 2], [1, 4], [1, 6]])

    # Test case 2
    nums1 = [1, 1, 2]
    nums2 = [1, 2, 3]
    k = 2
    result2 = solution.kSmallestPairs(nums1, nums2, k)
    expect(result2, [[1, 1], [1, 1]])

    #Test case 3
    nums1 = [1,2,4,5,6]
    nums2 = [3,5,7,9]
    k = 3
    result3 = solution.kSmallestPairs(nums1, nums2, k)
    expect(result3, [[1,3], [2,3], [1,5]])
