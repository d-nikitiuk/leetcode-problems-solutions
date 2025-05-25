/**
 * Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.
 *
 * Please implement encode and decode
 *
 * Example 1:
 *
 * Input: ["neet","code","love","you"]
 *
 * Output:["neet","code","love","you"]
 * Example 2:
 *
 * Input: ["we","say",":","yes"]
 *
 * Output: ["we","say",":","yes"]
 */
function encode(strs: string[]): string {
  return strs.reduce((acc, str) => acc + `${str.length}#${str}`, '');
}

function decode(str: string): string[] {
  const result: string[] = [];
  let i = 0;

  while (i < str.length) {
    const j = str.indexOf('#', i);
    const length = parseInt(str.slice(i, j), 10);
    result.push(str.slice(j + 1, j + 1 + length));
    i = j + 1 + length;
  }

  return result;
}
// Example usage:
const strs1 = ['neet', 'code', 'love', 'you'];
const strs2 = ['we', 'say', ':', 'yes'];
const encoded1 = encode(strs1);
const decoded1 = decode(encoded1);
const encoded2 = encode(strs2);
const decoded2 = decode(encoded2);
console.log(encoded1); // Output: Encoded string
console.log(decoded1); // Output: ["neet", "code", "love", "you"]
console.log(encoded2); // Output: Encoded string
console.log(decoded2); // Output: ["we", "say", ":", "yes"]
