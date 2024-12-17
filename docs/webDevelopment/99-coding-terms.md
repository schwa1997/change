---
sidebar_position: 100
title: Coding Terms
---

## Index

| [reduce](#reduce) |


### Reduce 

#### Definition
The word "reduce" means to make smaller or diminish. In programming, it refers to transforming an array or collection into a single value through iteration.

"Reduce (aka: fold, accumulate) utility commonly used in functional programming that lets you iterate over a list, applying a function to an accumulated value and the next item in the list, until the iteration is complete and the accumulated value gets returned. Many list operations can be implemented with reduce. Reduce takes a reducer function and an initial value, and returns the accumulated value."

> From Eric Elliott, [Reduce (Composing Software)](https://medium.com/javascript-scene/reduce-composing-software-fe22f0c39a1d)

#### Technical Application

```javascript
array.reduce(
  reducer: (accumulator: Any, current: Any) => Any,
  initialValue: Any
) => accumulator: Any
```

[application](./01-Language/Javascript.md#5-use-reduce-for-complex-array-transformations)
