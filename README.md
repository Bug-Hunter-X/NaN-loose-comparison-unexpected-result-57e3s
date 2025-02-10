# JavaScript NaN loose comparison bug
This repository demonstrates a common pitfall in JavaScript: the unexpected behavior of loose equality (==) when comparing NaN values.

## The Bug
The `foo` function is intended to check if two values are equal. However, it fails when comparing NaN to NaN because NaN does not equal itself.  Loose equality (==) is used, which is problematic in this case.

## The Solution
The solution involves using `Object.is()` or `Number.isNaN()` for accurate NaN comparison.