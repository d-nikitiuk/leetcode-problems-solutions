import json
from typing import Any
from deepdiff import DeepDiff

GREEN = "\033[32m"
RED = "\033[31m"
RESET = "\033[0m"

def expect(actual: Any, expected: Any) -> None:
    """Compares actual and expected values, printing a message based on the comparison."""
    if DeepDiff(actual, expected):
        print(f"{RED}❌ Expected {json.dumps(expected, default=vars)}, but got {json.dumps(actual, default=vars)}{RESET}")
    else:
        print(f"{GREEN}✅ Test passed with expected value: {json.dumps(expected, default=vars)}{RESET}")
