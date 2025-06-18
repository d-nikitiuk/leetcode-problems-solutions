import { expect } from '../utils';

/**
 * LeetCode Problem: Time Based Key-Value Store
 * Problem Link: https://leetcode.com/problems/time-based-key-value-store/
 * Level: Medium
 * Problem Statement:
 * Design a time-based key-value data structure that can store multiple values for the same key at different time stamps
 * and retrieve the key's value at a certain timestamp.
 *
 * Implement the TimeMap class:
 *
 * TimeMap() Initializes the object of the data structure.
 * void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
 * String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp.
 * If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".
 *
 *
 * Example 1:
 *
 * Input
 * ["TimeMap", "set", "get", "get", "set", "get", "get"]
 * [[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]
 * Output
 * [null, null, "bar", "bar", null, "bar2", "bar2"]
 *
 * Explanation
 * TimeMap timeMap = new TimeMap();
 * timeMap.set("foo", "bar", 1);  // store the key "foo" and value "bar" along with timestamp = 1.
 * timeMap.get("foo", 1);         // return "bar"
 * timeMap.get("foo", 3);         // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2,
 * then the only value is at timestamp 1 is "bar".
 * timeMap.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
 * timeMap.get("foo", 4);         // return "bar2"
 * timeMap.get("foo", 5);         // return "bar2"
 *
 * Time Complexity: O(log n) for get operation, O(1) for set operation, where n is the number of values stored for a key.
 * Space Complexity: O(n) for storing the values, where n is the number of values stored for a key.
 *
 * Hint: Use a Map to store key-value pairs with timestamps, and binary search to find the closest timestamp.
 */
class TimeMap {
  map: Map<string, [number, string][]>;

  constructor() {
    this.map = new Map();
  }

  set(key: string, value: string, timestamp: number): void {
    let currentValues = this.map.get(key);
    if (!currentValues) {
      currentValues = [];

      this.map.set(key, currentValues);
    }

    currentValues.push([timestamp, value]);
  }

  get(key: string, timestamp: number): string {
    const values = this.map.get(key)!;
    let left = 0;
    let right = values.length - 1;
    let ans = '';

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (values[mid][0] > timestamp) {
        right = mid - 1;
      } else {
        left = mid + 1;
        ans = values[mid][1];
      }
    }

    return ans;
  }
}

// Tests:
const timeMap1 = new TimeMap();
timeMap1.set('foo', 'bar', 1);
expect(timeMap1.get('foo', 1), 'bar');
expect(timeMap1.get('foo', 3), 'bar');
timeMap1.set('foo', 'bar2', 4);
expect(timeMap1.get('foo', 4), 'bar2');
expect(timeMap1.get('foo', 5), 'bar2');

const timeMap2 = new TimeMap();
timeMap2.set('love', 'high', 10);
timeMap2.set('love', 'low', 20);
expect(timeMap2.get('love', 5), '');
expect(timeMap2.get('love', 10), 'high');
expect(timeMap2.get('love', 15), 'high');
expect(timeMap2.get('love', 20), 'low');
expect(timeMap2.get('love', 25), 'low');
