---
sidebar_position: 100
title: Coding Terms
---

## Index


### reduce 

reduce in english means to reduce or make smaller.
in programming, it means to transform an array into a single value.

"Reduce (aka: fold, accumulate) utility commonly used in functional programming that lets you iterate over a list, applying a function to an accumulated value and the next item in the list, until the iteration is complete and the accumulated value gets returned. Many list operations can be implemented with reduce. Reduce takes a reducer function and an initial value, and returns the accumulated value." 
- Eric Elliott, ["Reduce (Composing Software)"](https://medium.com/javascript-scene/reduce-composing-software-fe22f0c39a1d#:~:text=Reduce%20(aka%3A%20fold%2C%20accumulate,can%20be%20implemented%20with%20reduce.)

```javascript
array.reduce(
  reducer: (accumulator: Any, current: Any) => Any,
  initialValue: Any
) => accumulator: Any
```

[application in Javascript arrays](02-Javascript.md#5-use-reduce-for-complex-array-transformations)
