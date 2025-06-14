import json
from typing import Any

GREEN = "\033[32m"
RED = "\033[31m"
RESET = "\033[0m"


def deep_equal(a: Any, b: Any) -> bool:
    if isinstance(a, dict) and isinstance(b, dict):
        return all(deep_equal(a[k], b[k]) for k in a) and all(k in a for k in b)
    elif isinstance(a, list) and isinstance(b, list):
        return len(a) == len(b) and all(deep_equal(x, y) for x, y in zip(a, b))
    else:
        return a == b


def expect(actual: Any, expected: Any) -> None:
    if not deep_equal(actual, expected):
        print(f"{RED}❌ Expected {json.dumps(expected, default=vars)}, but got {json.dumps(actual, default=vars)}{RESET}")
    else:
        print(f"{GREEN}✅ Test passed with expected value: {json.dumps(expected, default=vars)}{RESET}")
