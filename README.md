# Introduction

Ecma (European Computer Manufacturers Association) International creates standardization of information and communication systems. You can find all the standards over [here](https://www.ecma-international.org/publications-and-standards/standards/). One of the standards is called [ecma-262](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/). This refers to the specification for [ECMAScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources) programming language. On the other hand, JavaScript is an implementation of that specification. Below we have a list of ECMAScript language specifications.

ES1 (1997), ES2 (1998), ES3 (1999), ES4, ES5 (2009), ES6 or ES2015 (2015), ES2016, ES2017, ES2018, ES2019, ES2020, ES2022

JavaScript can run on the client side (Chrome, Firefox, Microsoft Edge, Opera, Safari) and server-side (Node.js).

# How to add JavaScript to a web page

## Everything between script tags will be executed by the web browser

```js
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        Hello, World!
    </body>

    <script type="text/javascript">
        alert("Hello, World!");
    </script>
</html>
```

## Link an external file to a web page

```js
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <script type="text/javascript" src="index.js"></script>
    </head>
    <body>
        Hello, World!
    </body>
</html>
```

# Reserved words

```
break, case, catch, class, const, continue, debugger, default, delete, do,
else, export, extends, false, finally, for, function, if, import, in,
instanceof, new, null, return, static, super, switch, this, throw, true,
try, typeof, var, void, while, with, yield
```

[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words)

# Comments

```js
// single line comment
```

```js
/*
multiline;
comment;
*/
```

# JavaScript Variables

Use camel case for naming variables. Variable names can start with letters, `_` and `$` sign. It can't be reserved words.

```js
let firstName = 'Bob';
```

```js
var firstName = 'Bob';
let id = 8765;
const BIRTH_DAY = '1 Jan 2000';
```

Use `let` and `var` if the value will change over time and `const` (can not be changed later, and you'll get an error if you try reassigning a new value) for a constant value. `var` has global and `let` has block scope. You can't define `let` and `const` variables more than once.


```js
var a = 'aaa';
var a = 'aaa';


let b = 'bbb';
let b = 'bbb'; // 'b' has already been declared


const C = 'ccc';
const C = 'ccc'; // 'C' has already been declared
```

## undefined and null

```js
let name;
console.log(name);
```


```js
let convertFahrenheitToCelsius = function (fahrenheit) {
    console.log(fahrenheit); // undefined
    return (fahrenheit - 32) * (5/9);
}

console.log(convertFahrenheitToCelsius()); // null
```

A function without a return statement will return a default value, in this case `undefined`.

```js
let convertFahrenheitToCelsius = function (fahrenheit) {
    console.log(fahrenheit); // undefined
}

console.log(convertFahrenheitToCelsius()); // undefined
```

## Leaked variables

```js
if (true) {
    age = 22;
    console.log(age); // 22
}
```

## Scope

In a scope variables can be accessed defined in that scope or defined in parent scope.

```js
let fullName = "Dariana Trahan";

if (true) {
    let age = 22;
    console.log(fullName); // parent scope
    console.log(age); // local scope
    if (true) {
        let country = 'Australia';
        console.log(fullName); // parent scope
        console.log(age); // parent scope
        console.log(country); // local scope
    }
}

if (true) {
    let age = 22;
    console.log(fullName); // parent scope
    console.log(age); // local scope
}

if (true) {
    let city = 'Melbourne';
    console.log(fullName); // parent scope
    console.log(city); // local scope
}
```

Tree view of scopes.

```
                 fullName
	        (fullName)
	     /       |       \
            /        |        \
         age        age        city
(fullName, age) (fullName, age)  (fullName, city)
	/
    country
(fullName, age, country)
```

### Global scope

The code is defined outside all code blocks.

```js
let firstName = "Dariana Trahan"; // var name = "Dariana Trahan"; const name = "Dariana Trahan";
console.log(firstName); // Dariana Trahan

function getName() {
    console.log(firstName); // Dariana Trahan
}

console.log(firstName); // Dariana Trahan
```

### Local scope

The code is defined inside a code blocks. Code in between two curly brackets `{}` is called a block.

#### Function block

```js
// can't access it before the function
console.log(firstName); // Uncaught ReferenceError: firstName is not defined
```

```js
function getName() {
    let firstName = "Dariana Trahan";
    console.log(firstName); 
}
getName(); // Dariana Trahan
```

```js
// can't access it after the function
console.log(firstName); // Uncaught ReferenceError: firstName is not defined
```

#### if block

```js
if (true) {
    let fullName = "Dariana Trahan"; // const fullName = "Dariana Trahan";
    console.log(fullName); // Dariana Trahan
}

console.log(fullName); // Uncaught ReferenceError: fullName is not defined
```

#### Hoisting

Prior to the execution of the code, the interpreter moves the definition of functions, variables, or classes to the top of their scope. This process is known as JavaScript hoisting. It does not take the value or initialization only declaration, `var`, `let`, `const` are hoisted and only var declarations are initialized with `undefined`. On the other hand `let` and `const` declarations are not initialized.

```js
console.log(fullName); // ReferenceError: fullName is not defined

if (true) {
    let fullName = "Dariana Trahan";
    console.log(fullName);
}

console.log(fullName);
```

```js
console.log(fullName); // undefined

if (true) {
    var fullName = "Dariana Trahan";
    console.log(fullName); // Dariana Trahan
}

console.log(fullName); // Dariana Trahan
```

```js
if (true) {
    var fullName;
    console.log(fullName); // undefined
}

console.log(fullName); // undefined
fullName = "Dariana Trahan";
```

```js
function getFullName() {
    var fullName = "Dariana Trahan";
    console.log(fullName);
}

console.log(fullName); // ReferenceError: fullName is not defined
```

```js
let age = 20;
if (age > 30) {
    var fullName = "Dariana Trahan";
    console.log(fullName);
}

console.log(fullName); // undefined
```

```js
console.log(fullName); // undefined
fullName = "Dariana Trahan";
console.log(fullName); // Dariana Trahan
var fullName;
```

```js
console.log(getFullName()); // Dariana Trahan

function getFullName() {
    return "Dariana Trahan";
}
```

We can avoid hoisting and save space using anonymous function expression.

```js
console.log(getFullName()); // Uncaught ReferenceError: getName is not defined

const getFullName = () => {
    return "Dariana Trahan";
};
```

# Data types


| No  | Name      | Example                  | Doc                                                                 | Data Type          |
| --- | --------- | ------------------------ | ------------------------------------------------------------------- | ------------------ |
| 1   | Number    | let a = 17                                                                                     | [link](https://developer.mozilla.org/en-US/docs/Glossary/Number)    | Primitive data     |
| 2   | BigInt    | let a = 348378344239489n                                                                       | [link](https://developer.mozilla.org/en-US/docs/Glossary/BigInt)    | Primitive data     |
| 3   | String    | let a = "Hello universe" <br/> let a = 'Hello universe' <br/> let a = \`${Hello universe}\`    | [link](https://developer.mozilla.org/en-US/docs/Glossary/String)    | Primitive data     |
| 4   | Boolean   | let a = true                                                                                   | [link](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)   | Primitive data     |
| 5   | Symbol    | let sym = Symbol()                                                                             | [link](https://developer.mozilla.org/en-US/docs/Glossary/Symbol)    | Primitive data     |
| 6   | null      | let a = null                                                                                   | [link](https://developer.mozilla.org/en-US/docs/Glossary/Null)      | Primitive data     |
| 7   | undefined | let a = undefined                                                                              | [link](https://developer.mozilla.org/en-US/docs/Glossary/undefined) | Primitive data     |
| 8   | Object    | let a = {a: 'test'}                                                                            | [link](https://developer.mozilla.org/en-US/docs/Glossary/Object)    | Non-primitive data |

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

## String

### Methods and properties

```js
let fullName = 'Bob Rob';
console.log(fullName.length); // 7
console.log(fullName.toUpperCase()); // BOB ROB
console.log(fullName.toLowerCase()); // bob rob
console.log(fullName.includes('bob')); // false
console.log(fullName.includes('Bob')); // true
```

[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### Template strings

```js
let name = 'Bob';
let score = 10;
let result = `Name: ${name} - Score: ${score}`;
console.log(result); // Name: Bob - Score: 10
```

### Escape charecters

```js
let description = '\"If you\'re going to do something, then do it properly.\"'
```

## Number

The number data type can hold numbers between 2 <sup>53-1</sup> and -2 <sup>53-1</sup>.

The `Number.MAX_SAFE_INTEGER` constant represents  2 <sup>53-1</sup> and `Number.MIN_SAFE_INTEGER` constant represents -2 <sup>53-1</sup>.

```js
let numInt = 710;
let numDec = 710.0;
let numExp = 7.1e2; // 7.1 * (10 ** 2)
let numOct = 0c1306;
let numHex = 0x2C6;
let numBin = 0b1011000110;
```

### Methods and properties

``js
let num = 1220.4324345;
console.log(num.toFixed(2)); // 1220.43
console.log(Math.round(num)); // 1220
console.log(Math.floor(num)); // 1220
console.log(Math.ceil(num)); // 1221
```

[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

## BigInt
todo

## Symbol
todo

## Undefinde
todo

## null
todo

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

// Skip
let [first, , third] = num;

// Rest of the array
let [first, ...others] = num;
// others = [44, 65]

// Skip and rest of the array
let [first, , ...others] = num;
// others = [65]

let nums = [
    [1, 2, 3],
    [4, 5, 6],
];

let [row1, row2] = nums;
console.log(row1 + " " + row2);

for (const [first, second, third] of nums) {
    console.log(first, second, third);
}
```

### split

```js
let sentence = "ThereIsNoSpoon";
let words = sentence.split(/(?=[A-Z])/);
console.log(words); // ['There', 'Is', 'No', 'Spoon']
```

### fill

```js
const arr = Array(10).fill(0);
console.log(arr); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
```

### concat

```js
const arr1 = [1, 2, 3];
const arr2 = [1, 4, 5];
const arr3 = arr1.concat(arr2);
console.log(arr3); // [1, 2, 3, 1, 4, 5]
// or
const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 1, 4, 5]
```

### length

```js
console.log(arr3.length); // 6
```

### indexOf

```js
console.log(arr3.indexOf(1)); // 0
console.log(arr3.indexOf(6)); // -1
console.log(arr3.indexOf(5)); // 5
```

### lastIndexOf

```js
console.log(arr3.lastIndexOf(1)); // 3
```

### includes

```js
console.log(arr3.includes(1)); // true
console.log(arr3.includes(6)); // false
console.log(arr3.includes(5)); // true
```

### toString

```js
console.log(arr3.toString()); // 1,2,3,1,4,5
```

### join

```js
const words = ["There", "Is", "No", "Spoon"];
console.log(words.join(", ")); // There, Is, No, Spoon
```

### slice

```js
// The slice(start, end) method where the end is exclusive returns a shallow copy of a part of an array and returns a new array. It does not change the original array.
let num = [1, 2, 3, 1, 4, 5];
console.log(num.slice(3, 4)); // [1]
console.log(num); // [1, 2, 3, 1, 4, 5]
// other variations
console.log(num.slice()); // [1, 2, 3, 1, 4, 5]
console.log(num.slice(3)); // [1, 4, 5]
```

### splice

```js
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
```

### push

```js
// Add an item at the end
let num = [1, 2, 3, 1, 4, 5];
num.push(1234);
console.log(num); // [1, 2, 3, 1, 4, 5, 1234]
```

### pop

```js
// Remove an item from the end
let num = [1, 2, 3, 1, 4, 5, 1234];
num.pop();
console.log(num); // [1, 2, 3, 1, 4, 5]
```

### unshift

```js
// Add an item at the beginning and shift rest of the elements to the right
let num = [1, 2, 3, 1, 4, 5];
num.unshift(1234);
console.log(num); // [1234, 1, 2, 3, 1, 4, 5]
```

### shift

```js
// Remove an item at the beginning and shift rest of the elements to the left
let num = [1234, 1, 2, 3, 1, 4, 5];
num.shift();
console.log(num); // [1, 2, 3, 1, 4, 5]
```

### reverse

```js
let num = [1, 2, 5666, 22, 45, 7, 0];
num.reverse();
console.log(num); // [0, 7, 45, 22, 5666, 2, 1]
```

### sort

```js
let num = [1, 2, 5666, 22, 45, 7, 0];
num.sort();
console.log(num); // [0, 1, 2, 22, 45, 5666, 7]
```

### map

```js
let letters = ["a", "b", "c"];
let upperCaseLetters = letters.map((letter) => letter.toUpperCase());
console.log(letters + "/" + upperCaseLetters); // a,b,c/A,B,C
```

### filter

```js
let fruits = ["Apple", "Banana", "Orange", "Mango", "Apple"];
let filter = fruits.filter((fruit) => fruit.toLowerCase().includes("apple"));
console.log(fruits + "/" + filter); // Apple,Banana,Orange,Mango/Apple,Apple
```

### reduce

```js
let num = [1, 2, 5666, 22, 45, 7, 0];
const sum = num.reduce((acc, cur) => acc + cur);
console.log(num + "/" + sum); // 1,2,5666,22,45,7,0/5743

let letters = ["a", "b", "c"];
const join = letters.reduce((acc, cur) => acc + cur);
console.log(letters + "/" + join); // a,b,c/abc
```

### find

Return the first occurrence of an item.

```js
let fruits = ["Apple", "Banana", "Orange", "Mango", "Apple"];
let find = fruits.find((fruit) => fruit.toLowerCase().includes("apple"));
console.log(fruits + "/" + find); // Apple,Banana,Orange,Mango/Apple
```

### findIndex

```js
let fruits = ["Apple", "Banana", "Orange", "Mango", "Apple"];
let findIndex = fruits.findIndex((fruit) =>
	fruit.toLowerCase().includes("apple")
);
console.log(fruits + "/" + findIndex); // Apple,Banana,Orange,Mango/0
```

### some

```js
let fruits = ["Apple", "Banana", "Orange", "Mango", "Apple"];
let some = fruits.some((fruit) => fruit.toLowerCase().includes("apple"));
console.log(fruits + "/" + some); // Apple,Banana,Orange,Mango/true
```

### every

```js
let fruits = ["Apple", "Banana", "Orange", "Mango", "Apple"];
let every = fruits.every((fruit) => fruit.toLowerCase().includes("apple"));
console.log(fruits + "/" + every); // Apple,Banana,Orange,Mango/false

let fruits = ["Apple", "Apple", "Apple", "Apple", "Apple"];
let every = fruits.every((fruit) => fruit.toLowerCase().includes("apple"));
console.log(fruits + "/" + every); // Apple,Apple,Apple,Apple,Apple/true
```

### forEach function

```js
forEach((element) => {
    /* … */
});
forEach((element, index) => {
    /* … */
});
forEach((element, index, array) => {
    /* … */
});
// element = The current element being processed in the array.
// index = The index of element in the array.
// array = The array forEach() was called upon.

let names = [
    "Dariana Trahan",
    "Lillie Earl",
    "Esther Yeager",
    "Marianna Brownlee",
    "Sara Tong",
    "Clint Winslow",
    "Efrain Popp",
    "Anya Aiello",
    "Sergio Truitt",
    "Keyshawn Apodaca",
];

names.forEach((name) => console.log(name));
names.forEach((name, index) => console.log(index, ":", name));
names.forEach((name, index, array) =>
    console.log(index, ":", name, "-", array[index])
);
```

### Two-dimensional array

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

# Function

- Regular / Named function
- Function expression / Anonymous function
- Arrow function
- Immediately invoked function expression
- Callback functions

## Regular / Named function

You can use functions before you create them because they are hoisted.

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

With a concise body, we can have an implicit return.

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
};

// B
const hello = (callback, name) => {
    return callBackThisFunction(name);
};

console.log(hello(callBackThisFunction, "Bob"));
```

## Default parameters

```js
let getResult = function(name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`
}

console.log(getResult());
```

# Delay

## Print "Hello, World" every 1 second

```js
const callBackThisFunction = (name) => {
    console.log("Hello, World");
};

setInterval(callBackThisFunction, 1000);
```

## Print "Hello, World" after 1 second

```js
const callBackThisFunction = (name) => {
    console.log("Hello, World");
};

setTimeout(callBackThisFunction, 1000);
```


# Loops

## for statement

```js
for ([initialExpression]; [conditionExpression]; [incrementExpression])
    statement;

for (let num = 1; num <= 10; num++) {
    console.log("#", num);
}
```

## do...while statement

```js
// do...while can be useful when you want to execute the statement at least once

do statement;
while (condition);

let num = 1;
do {
    console.log("#", num);
    num += 1;
} while (num <= 10);
```

## while statement

```js
while (condition) statement;

let num = 1;
while (num <= 10) {
    console.log("#", num);
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

// Look at all the numbers.
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
// labeled statement is used with a break or continue statements.

label: statement;

// todo
```

## for...in statement iterates over object literals to get the index/keys of the object.

```js
for (variable in object) statement;

let names = [
    "Dariana Trahan",
    "Lillie Earl",
    "Esther Yeager",
    "Marianna Brownlee",
    "Sara Tong",
    "Clint Winslow",
    "Efrain Popp",
    "Anya Aiello",
    "Sergio Truitt",
    "Keyshawn Apodaca",
];

for (const i in names) {
    console.log(names[i]);
}

let person = {
    name: "Dariana Trahan",
    age: 21,
    address: "localhost",
};

for (const key in person) {
    console.log(key, ":", person[key]);
}
```

## for...of statement iterates over iterable objects including String, Array, TypedArray, Map, Set, and Intl. Segments to get the property values.

```js
for (variable of object) statement;

let names = [
    "Dariana Trahan",
    "Lillie Earl",
    "Esther Yeager",
    "Marianna Brownlee",
    "Sara Tong",
    "Clint Winslow",
    "Efrain Popp",
    "Anya Aiello",
    "Sergio Truitt",
    "Keyshawn Apodaca",
];

for (const name of names) {
    console.log(name);
}

let person = {
    name: "Dariana Trahan",
    age: 21,
    address: "localhost",
};

for (const value of Object.values(person)) {
    console.log(value);
}
```

# Logical AND (&&)

Logical AND (&&) evaluates operands from left to the right. It returns the value of the first falsy operand. If all values are truthy, it returns the value of the last operand.

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

Logical OR (||) evaluates operands from left to the right. It returns the value of the first truthy operand. If all values are falsy, it returns the value of the last operand.

```js
result = "" || "foo"; //  'foo'
result = 2 || 0; // 2
result = "foo" || 4; // 'foo'
```

[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)

# JavaScript modules

We can export functions, var, let, const, and classes. Exported items need to be top-level items. We can't export items from a function.

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

## Object with properties and values.

```js
let user = {
    id: 1,
    firstName: "Bob",
    lastName: "Rob",
    getFullName: function () {
        console.log(this); // {id: 1, firstName: "Bob", lastName: "Rob", getFullName: ƒ()}
        return `${this.firstName} ${this.lastName}`;
    },
};

console.log(user); // {id: 1, firstName: "Bob", lastName: "Rob", getFullName: ƒ()}
console.log(user.id); // 1
console.log(user.firstName); // Bob
console.log(user.lastName); // Rob
console.log(user.getFullName()); // Bob Rob
```

## Object reference

```js
let user = {
    id: 1,
    firstName: "Bob",
    lastName: "Rob",
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
};


let changeId = function (u, newId) {
    u.id = newId;
    console.log(u);
}

console.log(user); // {id: 1, firstName: "Bob", lastName: "Rob", getFullName: ƒ()}
changeId(user, 10); // {id: 10, firstName: "Bob", lastName: "Rob", getFullName: ƒ()}
console.log(user); // {id: 10, firstName: "Bob", lastName: "Rob", getFullName: ƒ()}
```

```js
let user = {
    id: 1,
    firstName: "Bob",
    lastName: "Rob",
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
};


let changeId = function (u, newId) {
    u = {};
    u.id = newId;
    console.log(u);
}

console.log(user); // {id: 1, firstName: "Bob", lastName: "Rob", getFullName: ƒ()}
changeId(user, 10); // {id: 10}
console.log(user); // {id: 10, firstName: "Bob", lastName: "Rob", getFullName: ƒ()}
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
let user = {
    id: 1,
    firstName: "bob",
    lastName: "rob",
    address: {
        unit: 2,
        city: "The City",
        country: "The Country",
    },
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
};

let firstName = user.firstName;

let { firstName } = user;

function userId(user) {
    return user.id;
}

function userId({ id }) {
    return id;
}

userId(user);

// Rename

let { firstName: fName } = user;
// fName = 'bob'

let {
    address: { unit, city, country },
} = user;
```

## Object property shorthand

We can use the object property shorthand when the property value has the same name as the property key.

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

# Class

```js
class Person {
    static #PRIVATE_STATIC_FIELD;

    // private fields
    #firstName;
    #lastName;
    constructor(firstName, lastName, age = 0) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.age = age;
        this.addresses = [];
    }
    getFullName() {
        return this.#firstName + " " + this.#lastName;
    }

    // private method
    #privateMethod() {
        return "hello world";
    }

    // private static method
    static #privateStaticMethod() {
        return "hello world";
    }
}

class User extends Person {
    static USER_COUNT = 0;
    // default value for age and set address with an initial value
    constructor(firstName, lastName, age = 0) {
        super(firstName, lastName, age);
        User.USER_COUNT++;
    }

    setAddress(address) {
        this.addresses.push(address);
    }

    static getTotalUser() {
        return this.USER_COUNT;
    }
}

let user = new User("Bob", "Rob");
console.log(user); // {age: 0, addresses: Array(2), #firstName: 'Bob', #lastName: 'Rob'}
console.log(user.getFullName()); // Bob Rob

user.setAddress("15 160th Road, Wathena,ks, 66090  United States");
user.setAddress("13 Central Avenue, Albany,ny, 12205  United States");

console.log(user.addresses); // ['15 160th Road, Wathena,ks, 66090  United States', '13 Central Avenue, Albany,ny, 12205  United States']

console.log(User.USER_COUNT); // 1
```

# Debugging

```js
console.log("This is a test");
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
6. [ecma-international](https://www.ecma-international.org/about-ecma/history/)
7. [Why-does-my-variable-show-its-deprecated](https://stackoverflow.com/questions/65379554/why-does-my-variable-show-its-deprecated)
8. [You Don't Know JS Yet](https://github.com/getify/You-Dont-Know-JS)
