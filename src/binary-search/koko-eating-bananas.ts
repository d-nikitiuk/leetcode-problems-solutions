import { expect } from '../expect.js';

/**
 * LeetCode Problem: Koko Eating Bananas
 * Problem Link: https://leetcode.com/problems/koko-eating-bananas/
 * Level: Medium
 * Problem Statement:
 * Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.
 *
 * Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile.
 * If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
 *
 * Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
 *
 * Return the minimum integer k such that she can eat all the bananas within h hours.
 *
 *
 *
 * Example 1:
 *
 * Input: piles = [3,6,7,11], h = 8
 * Output: 4
 * Example 2:
 *
 * Input: piles = [30,11,23,4,20], h = 5
 * Output: 30
 * Example 3:
 *
 * Input: piles = [30,11,23,4,20], h = 6
 * Output: 23
 *
 * Time Complexity: O(n log m), where n is the number of piles and m is the maximum number of bananas in a pile.
 * Space Complexity: O(1), as we are using a constant amount of space for variables.
 */
function minEatingSpeed(piles: number[], h: number): number {
  let low = 0;
  let high = Math.max(...piles);
  let result = high;

  const ableToEat = (speed: number) => {
    let hours = 0;
    for (const pile of piles) {
      hours += Math.ceil(pile / speed);
    }
    return hours <= h;
  };

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (ableToEat(mid)) {
      high = mid - 1;
      result = mid;
    } else low = mid + 1;
  }

  return result;
}

// Tests:
const piles1 = [3, 6, 7, 11];
const h1 = 8;
const piles2 = [30, 11, 23, 4, 20];
const h2 = 5;
const piles3 = [30, 11, 23, 4, 20];
const h3 = 6;
expect(minEatingSpeed(piles1, h1), 4);
expect(minEatingSpeed(piles2, h2), 30);
expect(minEatingSpeed(piles3, h3), 23);
