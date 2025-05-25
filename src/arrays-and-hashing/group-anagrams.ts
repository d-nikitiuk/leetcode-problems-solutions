/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 *
 *
 *
 * Example 1:
 *
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 *
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 *
 * Explanation:
 *
 * There is no string in strs that can be rearranged to form "bat".
 * The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
 * The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
 * Example 2:
 *
 * Input: strs = [""]
 *
 * Output: [[""]]
 *
 * Example 3:
 *
 * Input: strs = ["a"]
 *
 * Output: [["a"]]
 * @param strs
 */
function groupAnagrams(strs: string[]): string[][] {
  const map: Map<string, string[]> = new Map();
  for (const str of strs) {
    // Sort the string to find its anagram group
    const sortedStr = str.split('').sort().join('');

    // If the sorted string is not in the map, add it with an empty array
    if (!map.has(sortedStr)) {
      map.set(sortedStr, []);
    }

    // Push the original string into the corresponding anagram group
    map.get(sortedStr)?.push(str);
  }

  // Convert the map values to an array of arrays
  return Array.from(map.values());
}

// Example usage:
const strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
const strs2 = [""];
const strs3 = ["a"];
console.log(groupAnagrams(strs1)); // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams(strs2)); // Output: [[""]]
console.log(groupAnagrams(strs3)); // Output: [["a"]]
