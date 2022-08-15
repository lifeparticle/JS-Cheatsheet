# Introduction

[ECMAScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources)

ES1 (1997), ES2 (1998), ES3 (1999), ES4, ES5 (2009), ES6 or ES2015 (2015), ES2016, ES2017, ES2018, ES2019, ES2020, ES2021

# Data types

| No  | Name      | Example                  | Doc                                                                 | Data Type          |
| --- | --------- | ------------------------ | ------------------------------------------------------------------- | ------------------ |
| 1   | Number    | let a = 17               | [link](https://developer.mozilla.org/en-US/docs/Glossary/Number)    | Primitive data     |
| 2   | BigInt    | let a = 348378344239489n | [link](https://developer.mozilla.org/en-US/docs/Glossary/BigInt)    | Primitive data     |
| 3   | String    | let a = "Hello universe" | [link](https://developer.mozilla.org/en-US/docs/Glossary/String)    | Primitive data     |
| 4   | Boolean   | let a = true             | [link](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)   | Primitive data     |
| 5   | Symbol    | let sym = Symbol()       | [link](https://developer.mozilla.org/en-US/docs/Glossary/Symbol)    | Primitive data     |
| 6   | null      | let a = null             | [link](https://developer.mozilla.org/en-US/docs/Glossary/Null)      | Primitive data     |
| 7   | undefined | let a = undefined        | [link](https://developer.mozilla.org/en-US/docs/Glossary/undefined) | Primitive data     |
| 8   | Object    | let a = {a: 'test'}      | [link](https://developer.mozilla.org/en-US/docs/Glossary/Object)    | Non-primitive data |

## How to check the data type

```js
typeof 17; // 'number'
typeof 348378344239489n; // 'bigint'
typeof "Hello universe"; // 'string'
typeof true; // 'boolean'
typeof Symbol(); // 'symbol'
typeof null; // 'object' -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null
typeof undefined; // 'undefined'
typeof { a: "test" }; // 'object'
typeof [17, 18]; // 'object'
Array.isArray([17, 18]); // true
Array.isArray({ a: "test" }); // false
```

## Array

```js
const arr = Array();
const arr = [];
```

### Array methods

| No  | Name             | When to use |
| --- | ---------------- | ----------- |
| 1   | at()             |             |
| 2   | concat()         |             |
| 3   | copyWithin()     |             |
| 4   | entries()        |             |
| 5   | every()          |             |
| 6   | fill()           |             |
| 7   | filter()         |             |
| 8   | findIndex()      |             |
| 9   | find()           |             |
| 10  | flat()           |             |
| 11  | flatMap()        |             |
| 12  | forEach()        |             |
| 13  | from()           |             |
| 14  | includes()       |             |
| 15  | indexOf()        |             |
| 16  | isArray()        |             |
| 17  | join()           |             |
| 18  | keys()           |             |
| 19  | lastIndexOf()    |             |
| 20  | map()            |             |
| 21  | of()             |             |
| 22  | pop()            |             |
| 23  | push()           |             |
| 24  | reduce()         |             |
| 25  | reduceRight()    |             |
| 26  | reverse()        |             |
| 27  | shift()          |             |
| 28  | slice()          |             |
| 29  | some()           |             |
| 30  | sort()           |             |
| 31  | splice()         |             |
| 32  | toLocaleString() |             |
| 33  | toSource()       |             |
| 34  | toString()       |             |
| 35  | unshift()        |             |
| 36  | values()         |             |

### Array destructuring

```js
let num = [123, 44, 65];
let [first, second] = num;

/*
function firstNum(num) {
  return num[0];
}
*/

function firstNum([first]) {
	return first;
}

firstNum(num);
```

```js
// split
let sentence = "ThereIsNoSpoon";
let words = sentence.split(/(?=[A-Z])/);
console.log(words); // ['There', 'Is', 'No', 'Spoon']

// fill
const arr = Array(10).fill(0);
console.log(arr); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// concat
const arr1 = [1, 2, 3];
const arr2 = [1, 4, 5];
const arr3 = arr1.concat(arr2);
console.log(arr3); // [1, 2, 3, 1, 4, 5]
// or
const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 1, 4, 5]

// length
console.log(arr3.length); // 6

// indexOf
console.log(arr3.indexOf(1)); // 0
console.log(arr3.indexOf(6)); // -1
console.log(arr3.indexOf(5)); // 5

// lastIndexOf
console.log(arr3.lastIndexOf(1)); // 3

// includes
console.log(arr3.includes(1)); // true
console.log(arr3.includes(6)); // false
console.log(arr3.includes(5)); // true

// toString
console.log(arr3.toString()); // 1,2,3,1,4,5

// join
const words = ["There", "Is", "No", "Spoon"];
console.log(words.join(", ")); // There, Is, No, Spoon

// slice
// The slice(start, end) method where end is exclusive, returns a shallow copy of a part of an array and returns a new array. It does not change the original array.
let num = [1, 2, 3, 1, 4, 5];
console.log(num.slice(3, 4)); // [1]
console.log(num); // [1, 2, 3, 1, 4, 5]
// other variations
console.log(num.slice()); // [1, 2, 3, 1, 4, 5]
console.log(num.slice(3)); // [1, 4, 5]

// splice
// The splice(start, deleteCount, item1, item2, itemN) returns an array containing the deleted element. It modifies the original array by removing or adding additional items.
let num = [1, 2, 3, 1, 4, 5];
console.log(num.splice(1, 6, 1, 1, 1, 1, 1, 1)); // [2, 3, 1, 4, 5]
console.log(num); // [1, 1, 1, 1, 1, 1, 1]
// other variations
let num = [1, 2, 3, 1, 4, 5];
console.log(num.splice(2)); // [3, 1, 4, 5]
console.log(num); // [1, 2]
let num = [1, 2, 3, 1, 4, 5];
console.log(num.splice(1, 1)); // [2]
console.log(num); // [1, 3, 1, 4, 5]
let num = [1, 2, 3, 1, 4, 5];
console.log(num.splice(0, 2, 4566)); // [1, 2]
console.log(num); // [4566, 3, 1, 4, 5]

// push
// Add an item at the end
let num = [1, 2, 3, 1, 4, 5];
num.push(1234);
console.log(num); // [1, 2, 3, 1, 4, 5, 1234]

// pop
// Remove an item from the end
let num = [1, 2, 3, 1, 4, 5, 1234];
num.pop();
console.log(num); // [1, 2, 3, 1, 4, 5]

// unshift
// Add an item at the beginning and shift rest of elements to the right
let num = [1, 2, 3, 1, 4, 5];
num.unshift(1234);
console.log(num); // [1234, 1, 2, 3, 1, 4, 5]

// shift
// Remove an item at the beginning and shift rest of elements to the left
let num = [1234, 1, 2, 3, 1, 4, 5];
num.shift();
console.log(num); // [1, 2, 3, 1, 4, 5]

// reverse
let num = [1, 2, 5666, 22, 45, 7, 0];
num.reverse();
console.log(num); // [0, 7, 45, 22, 5666, 2, 1]

// sort
let num = [1, 2, 5666, 22, 45, 7, 0];
num.sort();
console.log(num); // [0, 1, 2, 22, 45, 5666, 7]
```

### Two dimensional array

```js
let nums = [
	[1, 2, 3],
	[4, 5, 6],
];

console.log(nums[0]); // [1, 2, 3]
console.log(nums[1]); // [4, 5, 6]
console.log(nums[0][1]); // 2
```

# Conditinal statements

```js
let num = 89;

if (num === 89) {
	console.log("89");
} else if (num === 90) {
	console.log("90");
} else {
	console.log("Not 89 or 90");
}
```

```js
let num = 89;

switch (num) {
	case 89:
		console.log("89");
		break;
	case 90:
		console.log("90");
		break;
	default:
		console.log("Not 89 or 90");
}
```

```js
let num = 89;

let is89 = num === 89 ? true : false;
console.log(is89);
```

# JavaScript Variables

```js
var
let
const
```

`let` and `const` behave the same, except `const` can not be changed later. So use `let` if the value will change over time and `const` for constant value.

## Scope

### Global scope

```js
let name = "Dariana Trahan"; // var name = "Dariana Trahan"; const name = "Dariana Trahan";
console.log(name); // Dariana Trahan

function getName() {
	console.log(name); // Dariana Trahan
}

console.log(name); // Dariana Trahan
```

### Local scope

Code in between two curly brackets `{}` is called a block.

#### Function block

```js
// can't access here
console.log(name); // undefined

function getName() {
	let name = "Dariana Trahan";
	console.log(name); // Dariana Trahan
}

// can't access here
console.log(name); // undefined
```

#### Block scope

```js
if (true) {
	let name = "Dariana Trahan"; // const name = "Dariana Trahan";
	console.log(name);
}

console.log(name); // undefined
```

```js
if (true) {
	var name = "Dariana Trahan";
	console.log(name);
}

console.log(name); // Dariana Trahan
```

Prior to the execution of the code, the interpreter move the definition of functions, variables, or classes to the top of their scope. This process is known as JavaScript hoisting. It does not take the value.

```js
name = "Dariana Trahan";
console.log(name);
var name;
```

```js
console.log(getName());

function getName() {
	console.log(name); // Dariana Trahan
}
```

We can avoid hoisting and save sapce using anonymous function expression .

```js
console.log(getName()); // Uncaught ReferenceError: getName is not defined

const getName = () => {
	console.log(name); // Dariana Trahan
};
```

```js
const getName = () => {
	console.log(name); // Dariana Trahan
};

console.log(getName()); // Dariana Trahan
```

# Function

- Regular / Named function
- Function expression / Anonymous function
- Arrow function
- Immediately invoked function expression
- Callback functions

## Regular / Named function

You can use functions before you create them. Because they are hoisted.

```js
function hello() {
	return "hello world";
}

hello(); // 'hello world'
```

```js
function hello(name) {
	return name;
}

hello("hello world"); // 'hello world'
```

## Function expression

You can't use function expressions before you create them. So they are not hoisted.

```js
const hello = function () {
	return "hello world";
};

hello(); // 'hello world'
```

## Arrow function

With block body, we need explicit return.

```
const hello = () => {
    return "hello world";
};

hello(); // 'hello world'
```

With concise body, we can have implicit return.

```js
const hello = () => "hello world";

hello(); // 'hello world'
```

## Immediately invoked function expression

```js
(function () {
	return "hello world";
})();

(() => {
	return "hello world";
})();

(async () => {
	return "hello world";
})();
```

Store the return value.

```js
let result = (function () {
	return "hello world";
})();
console.log(result); // hello world
```

## Callback functions

A callback function (A) is a function passed into another function (B) as an argument, which can be called by that function (B).

```js

// A
const callBackThisFunction = (name) => {
	return "Hello, " + name;
}

// B
const hello = (callback, name) => {
	return callBackThisFunction(name);
}

console.log(hello(callBackThisFunction, "Bob"));
```

# Delay

## Print "Hello, World" in every 1 second
```js
const callBackThisFunction = (name) => {
	console.log("Hello, World");
}

setInterval(callBackThisFunction, 1000);
```

## Print "Hello, World" after 1 second
```js
const callBackThisFunction = (name) => {
	console.log("Hello, World");
}

setTimeout(callBackThisFunction, 1000);
```

# Loops

## for statement
```js
for ([initialExpression]; [conditionExpression]; [incrementExpression])
  statement

for (let num = 1; num <= 10; num++) {
  console.log('#', num);
}
```

## do...while statement

```js
// do...while can be useful when you want to execute the statment at least once

do
  statement
while (condition);

let num = 1;
do {
  console.log('#', num);
  num += 1;
} while (num <= 10);
```

## while statement
```js
while (condition)
  statement

let num = 1;
while (num <= 10) {
  console.log('#', num);
  num += 1;
}
```

## break statement

```js
// break without a label terminates the innermost enclosing while, do-while, for, or switch immediately and transfers control to the following statement

break;
break label;

let theNum = 5;
for (let num = 1; num <= 10; num++) {
  if (num === theNum) {
     console.log('Found the number', theNum);
     break;
  }
   console.log('Looking at', num);
}

// The following code will break the inner loop 10 times and print "Found the number 5" 10 times
let theNum = 5;
for (let outer = 1; outer <= 10; outer++) {
	for (let inner = 1; inner <= 10; inner++) {
	  if (inner === theNum) {
	     console.log('Found the number', theNum);
	     break;
	  }
	  console.log('Looking at', inner);
	}
}


// The following code will break the inner and outer loop and print "Found the number 5" once.
let theNum = 5;
outerLoop:
for (let outer = 1; outer <= 10; outer++) {
	innerLoop:
	for (let inner = 1; inner <= 10; inner++) {
	  if (inner === theNum) {
	     console.log('Found the number', theNum);
	     break outerLoop;
	  }
	  console.log('Looking at', inner);
	}
}
```

## continue statement

```js
// continue without a label terminates the innermost enclosing while, do-while, for, or switch immediately and continues execution of the loop with the next iteration.

continue;
continue label;

// Look at the all numbers.
let theNum = 5;
for (let num = 1; num <= 10; num++) {
  if (num === theNum) {
     console.log('Found the number', theNum);
     continue;
  }
  console.log('Looking at', num);
}


// todo
```

## labeled statement
```js
// labeled statement is used with break or continue statements.

label:
  statement

// todo
```

## for...in statement iterates over object literals to get the index/keys of the object.
```js
for (variable in object)
  statement

let names = ["Dariana Trahan", "Lillie Earl", "Esther Yeager", "Marianna Brownlee", "Sara Tong", "Clint Winslow", "Efrain Popp", "Anya Aiello", "Sergio Truitt", "Keyshawn Apodaca"];

for (const i in names) {
  console.log(names[i]);
}

let person = {
  name: "Dariana Trahan",
  age: 21,
  address: "localhost"
}

for (const key in person) {
  console.log(key,":",person[key]);
}
```

## for...of statement iterates over iterable objects including String, Array, TypedArray, Map, Set, and Intl.Segments to get the property values.
```js
for (variable of object)
  statement

let names = ["Dariana Trahan", "Lillie Earl", "Esther Yeager", "Marianna Brownlee", "Sara Tong", "Clint Winslow", "Efrain Popp", "Anya Aiello", "Sergio Truitt", "Keyshawn Apodaca"];

for (const name of names) {
  console.log(name);
}

let person = {
  name: "Dariana Trahan",
  age: 21,
  address: "localhost"
}

for (const value of Object.values(person)) {
  console.log(value);
}
```

## forEach function
```js
forEach((element) => { /* … */ })
forEach((element, index) => { /* … */ })
forEach((element, index, array) => { /* … */ })
// element = The current element being processed in the array.
// index = The index of element in the array.
// array = The array forEach() was called upon.

let names = ["Dariana Trahan", "Lillie Earl", "Esther Yeager", "Marianna Brownlee", "Sara Tong", "Clint Winslow", "Efrain Popp", "Anya Aiello", "Sergio Truitt", "Keyshawn Apodaca"];

names.forEach((name) => console.log(name));
names.forEach((name, index) => console.log(index,":",name));
names.forEach((name, index, array) => console.log(index,":",name,"-",array[index]));
```

# Logical AND (&&)

Logical AND (&&) evaluates operands from left to right. It returns value of the first falsy operand. If all values are truthy, it returns value of the last operand.

Examples falsy:

```
false;
null;
NaN;
0;
empty string ("" or '' or ``);
undefined.
```

```js
result = "" && "foo"; // ""
result = 2 && 0; // 0
result = "foo" && 4; // 4
```

[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)

# Logical OR (||)

Logical OR (||) evaluates operands from left to right. It returns value of the first truthy operand. If all values are falsy, it returns value of the last operand.

```js
result = "" || "foo"; //  'foo'
result = 2 || 0; // 2
result = "foo" || 4; // 'foo'
```

[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)

# JavaScript modules

We can export functions, var, let, const, and classes. Exported items needs to be top-level items. We can't export items from a function.

1. We can use the `export` statement to give access to module features.

```js
// ./modules/constants.js
export const PI = 3.14;
export const ONE = 1;
export const ZERO = 0;
```

There is only zero or one default export allowed per module and zero or more Named Exports.

```js
// ./modules/random.js

function randomString() {
  ...
}

function randomFloat() {
  ...
}

function randomNum() {
  ...
}

export { randomString, randomFloat };
export default randomNum;
```

```js
// ./modules/random.js

function randomString() {
  ...
}

function randomFloat() {
  ...
}

export default function() {
  ...
}

export { randomString, randomFloat };
```

2. We can use `import` statement to get access to a module features

```js
// main.js
import { PI, ONE, ZERO } from "./modules/constants.js";
```

```js
// main.js
import { randomString, randomFloat } from "./modules/random.js";
import randomNum from "./modules/random.js";
```

3. Renaming imports and exports

```js
// ./modules/random.js

function randomString() {
  ...
}

function randomFloat() {
  ...
}

function randomNum() {
  ...
}


export {
  randomString as newRandomStringFunctionName,
  randomFloat as newRandomFloatFunctionName
  randomNum as newRandomNumFunctionName
};

```

```js
// main.js
import {
	newRandomStringFunctionName as randS,
	newRandomFloatFunctionName as randF,
	newRandomNumFunctionName as randN,
} from "./modules/random.js";
```

4. Creating a module object

```
import * as Rand from './modules/random.js';

Rand.newRandomStringFunctionName();
Rand.newRandomFloatFunctionName();
Rand.newRandomNumFunctionName();
```

5. No relative path

The code will look for the modules under the folder called `node_modules`.

```js
import { Card } from "antd";
```

[JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

# Object

## Empty object.

```js
const user = {};
```

## Object with values and method.

```js
let user = {
	id: 1,
	firstName: "bob",
	lastName: "rob",
	getFullName: function () {
		return `${this.firstName} ${this.lastName}`;
	},
};
```

## Get all the keys.

```js
const keys = Object.keys(user);
console.log(keys); // ['id', 'firstName', 'lastName', 'getFullName']
```

## Get all the values.

```js
const values = Object.values(user);
console.log(values); // [1, 'bob', 'rob', ƒ]
```

## Checking properties.

```js
console.log(user.hasOwnProperty("id")); // true
console.log(user.hasOwnProperty("age")); // false
```

## Get all the keys and values.

```js
const entries = Object.entries(user);
console.log(entries);

// 0: (2) ['id', 1]
// 1: (2) ['firstName', 'bob']
// 2: (2) ['lastName', 'rob']
// 3: (2) ['getFullName', ƒ]
```

## Object destructuring

```js
let firstName = user.firstName;

let { firstName } = user;

function userId(user) {
	return user.id;
}

function userId({ id }) {
	return id;
}

userId(user);
```

## Object property shorthand

We can use the object property shorthand, when property value has the same name as the property key.

```js
let user = {
	id: id,
	firstName: firstName,
	lastName: lastName,
};

let user = {
	id,
	firstName,
	lastName,
};
```

## Spread syntax (...)

TODO

```js
let user = {
	id: 1,
	firstName: "bob",
	lastName: "rob",
};

function userId({ id, ...rest }) {
	return {
		id: id + 1,
		...rest,
	};
}

userId(user); // {id: 2, firstName: 'bob', lastName: 'rob'}
```

## Rest syntax (parameters) (...)

The rest parameter syntax (last parameter in a function) allows a function to accept an indefinite number of arguments.

```js
let user = {
	id: 1,
	firstName: "bob",
	lastName: "rob",
};

function userId({ id, ...rest }) {
	console.log(rest); // {firstName: 'bob', lastName: 'rob'}
	return `${id} ${rest.firstName} ${rest.lastName}`;
}

userId(user); // '1 bob rob'
```

# Promises

```js
todo;
```

# Async & Await

```js
todo;
```

# Tools

1. [Webpack](https://webpack.js.org/concepts/why-webpack/)
2. [Polyfill](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill)
3. [Babel-polyfill](https://babeljs.io/docs/en/babel-polyfill/)

# Resources

1. [Javascript The React Parts](https://reacttraining.com/blog/javascript-the-react-parts/)
2. [Learn Typescript for free](https://scrimba.com/learn/typescript)
3. [Learn JavaScript for free](https://scrimba.com/learn/learnjavascript)
4. [Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
5. [Javascript refresher](https://github.com/Asabeneh/30-Days-Of-React/blob/master/01_Day_JavaScript_Refresher/01_javascript_refresher.md)
