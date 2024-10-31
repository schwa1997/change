---
sidebar_position: 3
title: Javascript
---
*JavaScript fundamentals, TypeScript, Frameworks*

## Index

| Section | Link | Key Points |
|---------|------|--------|
| Introduction | [Introduction](#introduction) |`TypeScript` `Frameworks`|
|  Variables | [Variables](#variables) | `const` `let`  `var`|
|  Numbers and Operators | [Numbers and Operators](#numbers-and-operators) | `strToNum` `parseInt` `parseFloat`|
|  Strings | [Strings](#strings) | `.toLowerCase()` `${name}`|
|  Arrays⭐ | [Arrays](#arrays) | `map()` `filter()` `reduce()`|
|  Building Blocks | [Building Blocks](#building-blocks) | `conditions` `loops` `switch` `?:`|
|  Objects | [Objects](#objects) | |
|  Asynchronous JavaScript | [Asynchronous JavaScript](#asynchronous-javascript) |  |
|  TypeScript | [TypeScript](#typescript) |  |

## Introduction
### JavaScript
- Dynamic client-side scripting language
- Universal & Easy to Start
- Built into all browsers
- No installation needed
- Huge ecosystem (npm)

### TypeScript
- JavaScript with static typing
- Adds type safety and better tooling
- Considered best practice for large applications

### Popular Frameworks
#### Front-end
- React - Components with unified HTML/CSS/TS files
- Vue - Similar component structure to React
- Angular - Separates HTML/CSS/TS files

#### Back-end & Full-stack
- NodeJs
    - NestJs, Hono
- Express

[🔝 Back to Top](#index)

## Variables
### WHAT
- `const` (recommended default)
  - Block-scoped, immutable reference
  - Can modify properties of objects but not reassign
- `let` 
  - Block-scoped, mutable
  - Use when variable needs reassignment
- `var` (avoid)
  - Function-scoped, hoisted
  - Legacy keyword, not recommended
### HOW?
1. Use `const` by default
2. Use `let` only when reassignment is needed
3. Avoid `var`
### WHY?
```javascript
const greeting = "Hello World";
console.log(greeting);


// var example - function scope
function example() {
    var x = 1;
    if (true) {
        var x = 2;  // same x, if someone use the same name x in another function, it will be the same x
    }
    console.log(x);  // outputs 2
}

// let example - block scope
function example2() {
    let x = 1;
    if (true) {
        let x = 2;  // new x in different scope, because let creates a new variable in the block scope
    }
    console.log(x);  // outputs 1
}

// const example - immutable reference
const user = {name: "张三"};
user.name = "李四";  // can modify properties
user = {};  // error! cannot reassign so make sure the const is safe
```


[🔝 Back to Top](#index)
## Numbers and Operators
### WHAT
- All numbers in JavaScript are 64-bit floating-point (IEEE 754)
- Special values: `Infinity`, `-Infinity`, `NaN`
- `BigInt` for integers larger than 2^53
- Main operators:
  - Arithmetic: `+`, `-`, `*`, `/`, `%`, `**` (exponent)
  - Increment/Decrement: `++`, `--`
  - Assignment: `=`, `+=`, `-=`, `*=`, `/=`, `%=`
  - Comparison: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
  - Logical: `&&`, `||`, `!`, `??` (nullish coalescing)

### HOW?
```javascript
// Number basics, when you give the value, i
const integer = 42; //Despite different ways of writing numbers, they are all stored as the same type (number) internally, except for BigInt
const float = 42.42;
const scientific = 1e6;  // 1,000,000
const binary = 0b1010;  // 10
const hex = 0xFF;       // 255， JavaScript automatically detects the number format based on the prefix

// Type conversion
const strToNum = Number("42");     // 42
const parseInteger = parseInt("42.9");  // 42
const parseFloat = parseFloat("42.9");  // 42.9

// Special cases
const divByZero = 1 / 0;           // Infinity
const notANumber = 0 / 0;          // NaN
const bigInteger = 9007199254740991n;  // BigInt

// Common gotchas
0.1 + 0.2 !== 0.3;                // true! (floating-point precision)
Number.isInteger(1.0);             // true
Number.isNaN(NaN);                // true
```


[🔝 Back to Top](#index)

## Strings
### WHAT
- Immutable sequences of characters
- Can use single (`'`) or double (`"`) quotes, or backticks (`` ` ``) for template literals
- Unicode support with UTF-16 encoding
- Key properties/methods:
  - `.length`
  - `.indexOf()`, `.lastIndexOf()`
  - `.slice()`, `.substring()`
  - `.toLowerCase()`, `.toUpperCase()`
  - `.trim()`, `.trimStart()`, `.trimEnd()`
  - `.split()`, `.join()`
  - `.replace()`, `.replaceAll()`
  - `.includes()`, `.startsWith()`, `.endsWith()`
  - `.padStart()`, `.padEnd()`

### HOW?
```javascript
// String creation
const single = 'Hello';
const double = "World";
const template = `${single} ${double}!`;  // Template literal with interpolation

// Common operations
const str = "JavaScript";
str.length;                    // 10
str.indexOf('Script');         // 4
str.slice(0, 4);              // "Java"
str.toUpperCase();            // "JAVASCRIPT"

// String manipulation
const text = "  Hello World  ";
text.trim();                  // "Hello World"
text.replace('World', 'JS');  // "  Hello JS  "

// Splitting and joining
const words = "apple,banana,orange".split(',');  // ['apple', 'banana', 'orange']
words.join('-');                                 // "apple-banana-orange"

// Modern methods
const sentence = "Hello JavaScript";
sentence.includes('Java');     // true
sentence.startsWith('Hello');  // true
sentence.endsWith('Script');   // true

// Padding
const num = "42";
num.padStart(5, '0');         // "00042"
num.padEnd(5, '0');           // "42000"

// Escape sequences
const special = 'Line 1\nLine 2\tTabbed';  // Newline and tab
const path = 'C:\\Program Files';          // Escaped backslash
```

### WHY?
- Strings are fundamental for:
  - Text processing
  - User input/output
  - Data formatting
  - URL manipulation
  - HTML/JSON handling
- Immutability ensures predictable behavior
- Template literals make string interpolation clean and readable
- Rich set of methods simplifies common text operations

### BEST PRACTICES
1. Use template literals for string interpolation instead of concatenation

```javascript
const name = "张三";
const age = 25;

// 旧方式：字符串连接 (concatenation)
// 不推荐 ❌
const message1 = "我叫" + name + "，今年" + age + "岁。";
const message2 = "我叫".concat(name, "，今年", age, "岁。");

// 现代方式：模板字符串 (template literals)
// 推荐 ✅
const message3 = `我叫${name}，今年${age}岁。`;

// 模板字符串的其他优势：
// 1. 可以轻松写多行字符串
const html = `
  <div>
    <h1>个人信息</h1>
    <p>姓名：${name}</p>
    <p>年龄：${age}</p>
  </div>
`;

// 2. 可以在 ${} 中使用表达式
const price = 99.99;
const quantity = 2;
const total = `总价：${price * quantity}元`;

// 3. 可以调用函数
const getGreeting = (name) => `你好，${name}！`;
const greeting = `消息：${getGreeting(name)}`;// "Hello, Alice!"
```


[🔝 Back to Top](#index)

2. Consider string immutability when performing multiple operations

```javascript
// 不好的做法 ❌
// 每次操作都创建新字符串，浪费内存
let result = "";
for (let i = 0; i < 1000; i++) {
    result += i + ",";  // 每次循环都创建新字符串
}

// 好的做法 ✅
// 1. 使用数组收集，最后join
const parts = [];
for (let i = 0; i < 1000; i++) {
    parts.push(i);
}
const result = parts.join(",");

// 2. 或者使用数组的方法
const result2 = Array.from({length: 1000}, (_, i) => i).join(",");

// 3. 处理大量文本时，考虑使用数组缓存
const words = [];
function processText(text) {
    words.push(text.trim());
    // ... 其他处理 ...
    return words.join(" ");
}

// 4. 如果需要多次替换，一次性���成而不是逐步替换
const text = "Hello World";
// 不好的做法 ❌
let newText = text.replace("Hello", "Hi");
newText = newText.replace("World", "JavaScript");

// 好的做法 ✅
const finalText = text
    .replace("Hello", "Hi")
    .replace("World", "JavaScript");
```




[🔝 Back to Top](#index)

3. Use appropriate methods for case-insensitive comparisons

```javascript
// 1. 基本字符串比较
// ❌ 直接比较 - 区分大小写
const isEqual = "JavaScript" === "javascript";  // false

// ✅ 使用 toLowerCase() 或 toUpperCase() 进行比较
const userInput = "JavaScript";
const isMatch = userInput.toLowerCase() === "javascript".toLowerCase();

// 2. 字符串搜索
// ❌ 使用 indexOf 而不转换大小写
const text = "JavaScript is awesome";
const contains = text.indexOf("java") !== -1;  // false

// ✅ 在搜索时使用 toLowerCase()
const searchText = "JavaScript is awesome";
const searchTerm = "JAVA";
const containsTerm = searchText.toLowerCase().includes(searchTerm.toLowerCase());

// 3. 正则表达式匹配
// ✅ 在正则表达式中使用 i 标志实现不区分大小写
const pattern = /javascript/i;  // i 标志表示不区分大小写
const isMatch2 = pattern.test("JavaScript");  // true

// 4. 数组操作
// ✅ 用于数组去重和标准化
const languages = ["JavaScript", "Python", "JAVA", "javascript"];
const uniqueLanguages = [...new Set(languages.map(lang => lang.toLowerCase()))];

// 5. 循环中的字符串比较
// ❌ 在循环中重复转换
let found = false;
const items = ["JavaScript", "Python", "Java"];
const search = "JAVA";
for (let item of items) {
    // 每次循环都转换
    if (item.toLowerCase() === search.toLowerCase()) {
        found = true;
        break;
    }
}

// ✅ 优化循环中的字符串比较
const searchLower = search.toLowerCase();
for (let item of items) {
    if (item.toLowerCase() === searchLower) {
        found = true;
        break;
    }
}
```

[🔝 Back to Top](#index)

4. Be mindful of Unicode issues with emoji and special characters
    - Use dedicated libraries for Unicode handling (e.g., lodash)
    - Use `Array.from()` for precise emoji handling
    - Use `.normalize()` for handling special characters like accents
    - Use Unicode flags in regular expressions (`/u`)
    - example

```javascript
// 1. 中文字符是比较"简单"的 Unicode 字符
const chinese = "你好";
console.log(chinese.length);        // 2 (正确！每个中文字符占 1 个长度)
console.log(Array.from(chinese));   // ["你", "好"]

// 2. 对比表情符号
const emoji = "👋";
console.log(emoji.length);          // 2 (一个表情符号却占 2 个长度)
console.log(Array.from(emoji));     // ["👋"]

// 3. 混合使用的例子
const mixed = "你好👋世界";
console.log(mixed.length);          // 6 (2个中文 + 2个码位的表情 + 2个中文)
console.log(Array.from(mixed));     // ["你", "好", "👋", "世", "界"]

// 4. 中文的编码范围
console.log("你".charCodeAt(0));    // 20320 (在 Unicode 的 CJK 统一表意文字范围内)
```



5. Use `includes()` instead of `indexOf() !== -1` for existence checks

[🔝 Back to Top](#index)

## Arrays
### WHAT
- Ordered, zero-indexed collections of any type of values
- Dynamic length and heterogeneous content
- Key methods:
  - Adding/Removing: `push()`, `pop()`, `shift()`, `unshift()`, `splice()`
  - Transforming: `map()`, `filter()`, `reduce()`, `sort()`, `reverse()`
  - Searching: `find()`, `findIndex()`, `includes()`, `indexOf()`
  - Iteration: `forEach()`, `some()`, `every()`
  - Creating: `slice()`, `concat()`, `from()`, `Array.of()`
  - Other: `join()`, `flat()`, `flatMap()`

### HOW?
```javascript
// Creating arrays
const arr1 = [1, 2, 3];
const arr2 = new Array(3);  // [empty × 3]
const arr3 = Array.from('hello');  // ['h', 'e', 'l', 'l', 'o']

// Basic operations
const fruits = ['apple'];
fruits.push('banana');      // Add to end: ['apple', 'banana']
fruits.pop();              // Remove from end: ['apple']
fruits.unshift('orange');  // Add to start: ['orange', 'apple']
fruits.shift();           // Remove from start: ['apple']

// Transforming arrays
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);        // [2, 4, 6, 8, 10]
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]
const sum = numbers.reduce((a, b) => a + b, 0); // 15

// Searching and checking
const fruits2 = ['apple', 'banana', 'orange'];
fruits2.includes('banana');                     // true
fruits2.indexOf('orange');                      // 2
fruits2.find(f => f.startsWith('b'));          // 'banana'

// Iterating
numbers.forEach(n => console.log(n));
const hasEven = numbers.some(n => n % 2 === 0);   // true
const allPositive = numbers.every(n => n > 0);    // true

// Slicing and combining
const slice = numbers.slice(1, 3);              // [2, 3]
const combined = numbers.concat([6, 7]);        // [1, 2, 3, 4, 5, 6, 7]
const flattened = [1, [2, 3], [4]].flat();     // [1, 2, 3, 4]
```

[🔝 Back to Top](#index)

### BEST PRACTICES
1. Use modern array methods instead of loops

```javascript
// ❌ Don't use traditional loops
const numbers = [1, 2, 3, 4, 5];
const doubled = [];
for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
}

// ✅ Use array methods
const doubled = numbers.map(n => n * 2);
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
const evens = numbers.filter(n => n % 2 === 0);
```

2. Use spread operator for array manipulation

```javascript
// Copying arrays
const original = [1, 2, 3];
const copy = [...original];

// Combining arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];

// Adding elements
const newArray = [...original, 4, 5];

// Using with functions
const numbers = [1, 2, 3];
Math.max(...numbers);
```

[🔝 Back to Top](#index)

3. Use destructuring for array operations

```javascript
// Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  // 1
console.log(rest);   // [3, 4, 5]

// Swapping values
let a = 1, b = 2;
[a, b] = [b, a];

// Function returns
function getCoords() {
    return [12.3, 45.6];
}
const [lat, lng] = getCoords();
```

[🔝 Back to Top](#index)


4. Consider immutability when working with arrays

```javascript
const numbers = [1, 2, 3];

// ❌ Mutating original array
numbers.push(4);
numbers.reverse();

// ✅ Creating new arrays
const added = [...numbers, 4];
const reversed = [...numbers].reverse();
```

5. Use reduce for complex array transformations

```javascript
// 1. Grouping objects by property
const users = [
    {name: "Alice", age: 25, role: "admin"},
    {name: "Bob", age: 30, role: "user"},
    {name: "Charlie", age: 25, role: "user"}
];

const groupByAge = users.reduce((groups, user) => {
    const age = user.age;
    groups[age] = groups[age] || [];
    groups[age].push(user);
    return groups;
}, {});
// Result: { 25: [{name: "Alice", ...}, {name: "Charlie", ...}], 30: [{name: "Bob", ...}] }

// 2. Creating a frequency map
const words = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];
const frequency = words.reduce((count, word) => {
    count[word] = (count[word] || 0) + 1;
    return count;
}, {});
// Result: { apple: 3, banana: 2, cherry: 1 }

// 3. Flattening nested arrays
const nested = [[1, 2], [3, 4], [5, 6]];
const flattened = nested.reduce((flat, current) => flat.concat(current), []);
// Result: [1, 2, 3, 4, 5, 6]

// 4. Building complex objects from arrays
const data = [
    ['name', 'Alice'],
    ['age', 25],
    ['role', 'admin']
];
const object = data.reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
}, {});
// Result: { name: 'Alice', age: 25, role: 'admin' }

// 5. Chaining transformations
const transactions = [
    {type: 'debit', amount: 100},
    {type: 'credit', amount: 50},
    {type: 'debit', amount: 75}
];

const summary = transactions.reduce((result, t) => {
    result.total += t.type === 'debit' ? -t.amount : t.amount;
    result[t.type] = (result[t.type] || 0) + t.amount;
    return result;
}, { total: 0 });
// Result: { total: -125, debit: 175, credit: 50 }
```




[🔝 Back to Top](#index)

## Building Blocks
### Conditionals
#### 1. Conditional Statements
##### if...else
```javascript
// Basic if
if (condition) {
    // code
}

// if...else
if (condition) {
    // code when true
} else {
    // code when false
}

// if...else if...else
if (condition1) {
    // code for condition1
} else if (condition2) {
    // code for condition2
} else {
    // default code
}
```

##### Ternary Operator
```javascript
// condition ? valueIfTrue : valueIfFalse
const status = age >= 18 ? 'adult' : 'minor';
```

##### switch
```javascript
switch (expression) {
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // default code
        break;
}
```

#### 2. Logical Operators
```javascript
// AND (&&) - returns first falsy value or last truthy value
const result1 = true && 'Hello' && 1;  // 1
const result2 = true && false && 'Hello';  // false

// OR (||) - returns first truthy value or last falsy value
const result3 = false || 0 || 'Hello';  // 'Hello'
const result4 = false || 0 || '';  // ''

// NOT (!) - inverts boolean value
const result5 = !true;  // false

// Nullish coalescing (??) - returns right side only if left is null/undefined
const result6 = null ?? 'default';  // 'default'
const result7 = 0 ?? 'default';     // 0
```

#### 3. Short-Circuit Evaluation
```javascript
// Common patterns
const user = {
    name: 'John'
};

// Safe property access
const userCity = user && user.address && user.address.city;

// Default values
const greeting = user.customGreeting || 'Hello';

// Conditional execution
user.isAdmin && showAdminPanel();
```

#### Best Practices
1. Use early returns to reduce nesting
```javascript
// ❌ Deeply nested
function processUser(user) {
    if (user) {
        if (user.isActive) {
            if (user.hasPermission) {
                // process user
            }
        }
    }
}

// ✅ Early returns
function processUser(user) {
    if (!user) return;
    if (!user.isActive) return;
    if (!user.hasPermission) return;
    // process user
}
```

2. Prefer ternary for simple conditions
```javascript
// ❌ Verbose if...else
let status;
if (age >= 18) {
    status = 'adult';
} else {
    status = 'minor';
}

// ✅ Concise ternary
const status = age >= 18 ? 'adult' : 'minor';
```

3. Use switch for multiple conditions with the same variable
```javascript
// ❌ Multiple if...else
if (role === 'admin') {
    // admin logic
} else if (role === 'manager') {
    // manager logic
} else if (role === 'user') {
    // user logic
}

// ✅ Switch statement
switch (role) {
    case 'admin':
        // admin logic
        break;
    case 'manager':
        // manager logic
        break;
    case 'user':
        // user logic
        break;
    default:
        // default logic
}
```

[🔝 Back to Top](#index)
### Looping code
#### 1. For Loops
```javascript
// Standard for loop
for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}

// for...of - iterating over array elements
const fruits = ['apple', 'banana', 'orange'];
for (const fruit of fruits) {
    console.log(fruit);
}

// for...in - iterating over object properties
const user = { name: 'John', age: 30 };
for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}
```

#### 2. Collection Methods
```javascript
const numbers = [1, 2, 3, 4, 5];

// map() - transform each element
const doubled = numbers.map(num => num * 2);  // [2, 4, 6, 8, 10]

// filter() - select elements that match condition
const evens = numbers.filter(num => num % 2 === 0);  // [2, 4]

// forEach() - execute function for each element
numbers.forEach(num => console.log(num));

// some() - check if any element matches condition
const hasEven = numbers.some(num => num % 2 === 0);  // true

// every() - check if all elements match condition
const allPositive = numbers.every(num => num > 0);  // true
```

#### 3. While Loops
```javascript
// while loop - executes while condition is true
let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}

// do...while - executes at least once
let num = 0;
do {
    console.log(num);
    num++;
} while (num < 3);

// break and continue
let i = 0;
while (true) {
    if (i >= 3) break;  // exit loop
    if (i === 1) {
        i++;
        continue;  // skip to next iteration
    }
    console.log(i);
    i++;
}
```

#### Best Practices
1. Choose the right loop for the task
```javascript
// ❌ Using for loop for array operations
const numbers = [1, 2, 3, 4, 5];
const doubled = [];
for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
}

// ✅ Using array methods
const doubled = numbers.map(num => num * 2);
```

2. Avoid modifying loop variables inside the loop
```javascript
// ❌ Modifying loop variable
for (let i = 0; i < 3; i++) {
    if (someCondition) {
        i--;  // Dangerous!
    }
}

// ✅ Use while loop for variable conditions
let i = 0;
while (i < 3) {
    if (someCondition) {
        continue;
    }
    i++;
}
```

3. Use appropriate array methods instead of loops when possible
```javascript
const users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 }
];

// ❌ Using loops
const names = [];
for (const user of users) {
    if (user.age > 25) {
        names.push(user.name);
    }
}

// ✅ Using chain of array methods
const names = users
    .filter(user => user.age > 25)
    .map(user => user.name);
```

[🔝 Back to Top](#index)


### Functions — reusable blocks of code
#### 1. Function Declarations
```javascript
// Basic function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function with default parameters
function multiply(a, b = 1) {
    return a * b;
}

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Method in an object
const calculator = {
    add(a, b) {  // Shorthand method syntax
        return a + b;
    },
    subtract: function(a, b) {  // Traditional method syntax
        return a - b;
    }
};
```

#### 2. Function Expressions & Arrow Functions
```javascript
// Function expression
const greet = function(name) {
    return `Hello, ${name}!`;
};

// Arrow function - concise syntax
const multiply = (a, b) => a * b;

// Arrow function with block
const processUser = user => {
    if (!user.name) return false;
    console.log(user.name);
    return true;
};

// IIFE (Immediately Invoked Function Expression)
(function() {
    console.log('Executed immediately');
})();

// Common use cases for arrow functions
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
const filtered = numbers.filter(n => n > 1);
```

#### 3. Function Scope and Closures
```javascript
// Lexical scope
function outer() {
    const message = 'Hello';
    
    function inner() {
        console.log(message);  // Can access outer variables
    }
    
    return inner;
}

// Closure example
function createCounter() {
    let count = 0;
    return {
        increment() { return ++count; },
        decrement() { return --count; },
        getCount() { return count; }
    };
}

const counter = createCounter();
counter.increment();  // 1
counter.increment();  // 2
counter.decrement();  // 1
```

#### Best Practices
1. Use arrow functions for callbacks and methods that don't need `this`
```javascript
// ❌ Traditional callback
element.addEventListener('click', function(e) {
    console.log(e.target);
});

// ✅ Arrow function callback
element.addEventListener('click', e => {
    console.log(e.target);
});
```

2. Use default parameters instead of conditionals
```javascript
// ❌ Checking parameters manually
function greet(name) {
    name = name || 'Guest';
    return `Hello, ${name}!`;
}

// ✅ Using default parameters
function greet(name = 'Guest') {
    return `Hello, ${name}!`;
}
```

3. Use early returns for cleaner code
```javascript
// ❌ Nested conditionals
function processUser(user) {
    if (user) {
        if (user.isActive) {
            return user.name;
        }
    }
    return null;
}

// ✅ Early returns
function processUser(user) {
    if (!user) return null;
    if (!user.isActive) return null;
    return user.name;
}
```

4. Use pure functions when possible
```javascript
// ❌ Impure function (side effects)
let total = 0;
function addToTotal(value) {
    total += value;
    return total;
}

// ✅ Pure function
function add(a, b) {
    return a + b;
}
```

[🔝 Back to Top](#index)

## Objects
[🔝 Back to Top](#index)
## Asynchronous JavaScript
[🔝 Back to Top](#index)


## TypeScript
[🔝 Back to Top](#index)