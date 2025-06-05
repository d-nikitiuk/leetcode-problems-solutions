import { deepEqual } from 'fast-equals';

const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const RESET = '\x1b[0m';

/**
 * Compares the actual value with the expected value and logs the result.
 * If they are not equal, it logs an error message with the expected and actual values.
 * If they are equal, it logs a success message.
 * @param actual
 * @param expected
 */
export const expect = (actual: unknown, expected: unknown): void => {
  if (!deepEqual(actual, expected)) {
    console.error(`${RED}❌ Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(actual)}${RESET}`);
    return;
  }

  console.log(`${GREEN}✅ Test passed with expected value: ${JSON.stringify(expected)}${RESET}`);
};
