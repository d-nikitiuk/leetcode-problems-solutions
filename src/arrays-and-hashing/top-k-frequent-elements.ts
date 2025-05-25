/**
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 * Example 2:
 *
 * Input: nums = [1], k = 1
 * Output: [1]
 * @param nums
 * @param k
 */
function topKFrequent(nums: number[], k: number): number[] {
  const frequencyMap: Map<number, number> = new Map();

  for (const number of nums) {
    if (!frequencyMap.get(number)) {
      frequencyMap.set(number, 1);

      continue;
    }

    frequencyMap.set(number, frequencyMap.get(number)! + 1);
  }

  return Array.from(frequencyMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((item) => item[0]);
}

// Example usage:
const nums1 = [1, 1, 1, 2, 2, 3];
const k1 = 2;
const nums2 = [1];
const k2 = 1;
const nums3 = [-1, -1];
const k3 = 1;
console.log(topKFrequent(nums1, k1)); // Output: [1, 2]
console.log(topKFrequent(nums2, k2)); // Output: [1]
console.log(topKFrequent(nums3, k3)); // Output: [-1]
