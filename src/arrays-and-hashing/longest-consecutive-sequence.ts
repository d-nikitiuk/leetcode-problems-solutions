/**
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 *
 * You must write an algorithm that runs in O(n) time.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [100,4,200,1,3,2]
 * Output: 4
 * Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
 * Example 2:
 *
 * Input: nums = [0,3,7,2,5,8,4,6,0,1]
 * Output: 9
 * Example 3:
 *
 * Input: nums = [1,0,1,2]
 * Output: 3
 * @param nums
 */
function longestConsecutive(nums: number[]): number {
  const numsSet = new Set(nums);
  let longest = 0;

  // of numsSet cause unique elements => less iterations
  for (const num of numsSet) {
    if (!numsSet.has(num - 1)) {
      let length = 0;
      while (numsSet.has(num + length)) {
        length += 1;
      }
      longest = Math.max(longest, length);
    }
  }

  return longest;
}

// Example usage:
const nums1 = [100, 4, 200, 1, 3, 2];
const nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
const nums3 = [1, 0, 1, 2];
console.log(longestConsecutive(nums1)); // Output: 4
console.log(longestConsecutive(nums2)); // Output: 9
console.log(longestConsecutive(nums3)); // Output: 3
