# Table of Contents

- [Introduction](#introduction)
- [Setup](#setup)
- [Reserved words](#reserved-words)
- [Comments](#comments)
- [Variables](#variables)
  * [undefined and null](#undefined-and-null)
  * [Leaked variables](#leaked-variables)
  * [Scope](#scope)
    + [Global scope](#global-scope)
    + [Local scope](#local-scope)
      - [Function block](#function-block)
      - [if block](#if-block)
      - [Hoisting](#hoisting)
- [Data types](#data-types)
  * [How to check the data type](#how-to-check-the-data-type)
  * [Type coercion](#type-coercion)
  * [String](#string)
    + [Methods and properties](#methods-and-properties)
    + [Template strings](#template-strings)
    + [Escape charecters](#escape-charecters)
  * [Number](#number)
    + [Methods and properties](#methods-and-properties-1)
  * [BigInt](#bigint)
  * [Symbol](#symbol)
  * [Undefind](#undefind)
  * [null](#null)
  * [Object](#object)
    + [Empty object.](#empty-object)
    + [Equality](#equality)
    + [Object with properties and values.](#object-with-properties-and-values)
    + [Object reference](#object-reference)
    + [Get all the keys.](#get-all-the-keys)
    + [Get all the values.](#get-all-the-values)
    + [Checking properties.](#checking-properties)
    + [Get all the keys and values.](#get-all-the-keys-and-values)
    + [Object destructuring](#object-destructuring)
    + [Object property shorthand](#object-property-shorthand)
    + [Spread syntax (...)](#spread-syntax-)
    + [Rest syntax (parameters) (...)](#rest-syntax-parameters-)
- [Array](#array)
  * [Array methods](#array-methods)
    + [2. concat](#2-concat)
    + [5. every](#5-every)
    + [6. fill](#6-fill)
    + [7. filter](#7-filter)
    + [8. findIndex](#8-findindex)
    + [9. find](#9-find)
    + [12. forEach](#12-foreach)
    + [14. includes](#14-includes)
    + [15. indexOf](#15-indexof)
    + [17. join](#17-join)
    + [19. lastIndexOf](#19-lastindexof)
    + [20. map](#20-map)
    + [22. pop](#22-pop)
    + [23. push](#23-push)
    + [24. reduce](#24-reduce)
    + [26. reverse](#26-reverse)
    + [27. shift](#27-shift)
    + [28. slice](#28-slice)
    + [29. some](#29-some)
    + [30. sort](#30-sort)
    + [31. splice](#31-splice)
    + [34. toString](#34-tostring)
    + [35. unshift](#35-unshift)
  * [Array destructuring](#array-destructuring)
  * [Two-dimensional array](#two-dimensional-array)
- [Conditinal statements](#conditinal-statements)
  * [Ternary operator](#ternary-operator)
- [Function](#function)
  * [Regular / Named function](#regular--named-function)
  * [Function expression](#function-expression)
  * [Arrow function](#arrow-function)
  * [Immediately invoked function expression](#immediately-invoked-function-expression)
  * [Callback functions](#callback-functions)
  * [Default parameters](#default-parameters)
- [Delay](#delay)
  * [Print "Hello, World" every 1 second](#print-hello-world-every-1-second)
  * [Print "Hello, World" after 1 second](#print-hello-world-after-1-second)
- [Loops](#loops)
  * [for](#for)
  * [do...while](#dowhile)
  * [while](#while)
  * [break](#break)
  * [continue](#continue)
  * [labeled](#labeled)
  * [for...in](#forin)
  * [for...of](#forof)
- [Falsy and Truthy values](#falsy-and-truthy-values)
- [Logical AND (&&)](#logical-and-)
- [Logical OR (||)](#logical-or-)
- [JavaScript modules](#javascript-modules)
- [Promises](#promises)
- [Async & Await](#async--await)
- [Class](#class)
- [Try Catch](#try-catch)
- [Debugging](#debugging)
  * [Debugger](#debugger)
- [HTML with live server](#html-with-live-server)
- [How to add JavaScript to a web page](#how-to-add-javascript-to-a-web-page)
  * [Everything between script tags will be executed by the web browser](#everything-between-script-tags-will-be-executed-by-the-web-browser)
  * [Link an external file to a web page](#link-an-external-file-to-a-web-page)
- [DOM - Document Object Model](#dom---document-object-model)
  * [DOM manipulation](#dom-manipulation)
  * [Event handling](#event-handling)
- [Local Storage](#local-storage)
- [Window interface](#window-interface)
- [Tools](#tools)
- [Resources](#resources)

# Introduction

Ecma (European Computer Manufacturers Association) International creates standardization of information and communication systems. You can find all the standards over [here](https://www.ecma-international.org/publications-and-standards/standards/). One of the standards is called [ecma-262](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/). This refers to the specification for [ECMAScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources) programming language. On the other hand, JavaScript is an implementation of that specification. Below we have a list of ECMAScript language specifications.

ES1 (1997), ES2 (1998), ES3 (1999), ES4, ES5 (2009), ES6 or ES2015 (2015), ES2016, ES2017, ES2018, ES2019, ES2020, ES2022

JavaScript can run on the client side (Chrome, Firefox, Microsoft Edge, Opera, Safari) and server-side (Node.js).

# Setup

Install Node.js.

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

# Variables

Use camel case for naming variables. Variable names can start with letters, `_` and `$` sign. It can't be reserved words.

```js
let firstName = "Bob";
```

```js
var firstName = "Bob";
let id = 8765;
const BIRTH_DAY = "1 Jan 2000";
```

Use `let` and `var` if the value will change over time and `const` (can not be changed later, and you'll get an error if you try reassigning a new value) for a constant value. `var` has global and `let` has block scope. You can't define `let` and `const` variables more than once.

```js
var a = "aaa";
var a = "aaa";

let b = "bbb";
let b = "bbb"; // 'b' has already been declared

const C = "ccc";
const C = "ccc"; // 'C' has already been declared
```

## undefined and null

```js
let name;
console.log(name);
```

```js
let convertFahrenheitToCelsius = function (fahrenheit) {
    console.log(fahrenheit); // undefined
    return (fahrenheit - 32) * (5 / 9);
};

console.log(convertFahrenheitToCelsius()); // null
```

A function without a return statement will return a default value, in this case `undefined`.

```js
let convertFahrenheitToCelsius = function (fahrenheit) {
    console.log(fahrenheit); // undefined
};

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
        let country = "Australia";
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
    let city = "Melbourne";
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

The code is defined inside a code block. Code in between two curly brackets `{}` is called a block.

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

Prior to the execution of the code, the interpreter moves the definition of functions, variables, or classes to the top of their scope. This process is known as JavaScript hoisting. It does not take the value or initialization only declaration, `var`, `let`, `const` are hoisted, and only var declarations are initialized with `undefined`. On the other hand `let` and `const` declarations are not initialized.

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

<table>
<tr>
<th>Before Hoisting</th>
<th>After Hoisting</th>
</tr>
<tr>
<td>
<pre lang="js">
console.log(fullName); // undefined
fullName = "Dariana Trahan";
console.log(fullName); // Dariana Trahan
var fullName;
</pre>
</td>
<td>
<pre lang="js">
var fullName;
console.log(fullName); // undefined
fullName = "Dariana Trahan";
console.log(fullName); // Dariana Trahan
</pre>
</td>
</tr>
</table>

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

| No  | Name      | Example                                                                                                        | Doc                                                                 | Data Type          |
| --- | --------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------ |
| 1   | Number    | `let a = 17`                                                                                                   | [link](https://developer.mozilla.org/en-US/docs/Glossary/Number)    | Primitive data     |
| 2   | BigInt    | `let a = 348378344239489n`                                                                                     | [link](https://developer.mozilla.org/en-US/docs/Glossary/BigInt)    | Primitive data     |
| 3   | String    | `let a = "Hello universe"` <br/> `let a = 'Hello universe'` <br/> <code> let a = \`${Hello universe}\` </code> | [link](https://developer.mozilla.org/en-US/docs/Glossary/String)    | Primitive data     |
| 4   | Boolean   | `let a = true`                                                                                                 | [link](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)   | Primitive data     |
| 5   | Symbol    | `let sym = Symbol()`                                                                                           | [link](https://developer.mozilla.org/en-US/docs/Glossary/Symbol)    | Primitive data     |
| 6   | null      | `let a = null`                                                                                                 | [link](https://developer.mozilla.org/en-US/docs/Glossary/Null)      | Primitive data     |
| 7   | undefined | `let a = undefined`                                                                                            | [link](https://developer.mozilla.org/en-US/docs/Glossary/undefined) | Primitive data     |
| 8   | Object    | `let a = {a: 'test'}`                                                                                          | [link](https://developer.mozilla.org/en-US/docs/Glossary/Object)    | Non-primitive data |

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

## Type coercion

```js
// String concatanation
let num1 = '2' + 3;
console.log(num1); // 23
console.log(typeof num1); // string

// Subtracting integers
let num2 = '3' - 2;
console.log(num2); // 1
console.log(typeof num2); // number
```

```js
// Check equality and type
console.log(2 === 2); // true
console.log('2' === 2); // false

// Check equality without type
console.log(2 == 2); // true
console.log('2' == 2); // true
console.log('3' == 2); // false
```

## String

### Methods and properties

```js
let fullName = "Bob Rob";
console.log(fullName.length); // 7
console.log(fullName.toUpperCase()); // BOB ROB
console.log(fullName.toLowerCase()); // bob rob
console.log(fullName.includes("bob")); // false
console.log(fullName.includes("Bob")); // true

let sentence = "ThereIsNoSpoon";
let words = sentence.split(/(?=[A-Z])/);
console.log(words); // ['There', 'Is', 'No', 'Spoon']
```

[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### Template strings

```js
let name = "Bob";
let score = 10;
let result = `Name: ${name} - Score: ${score}`;
console.log(result); // Name: Bob - Score: 10
```

### Escape charecters

```js
let description = '"If you\'re going to do something, then do it properly."';
```

## Number

The number data type can hold numbers between 2 <sup>53-1</sup> and -2 <sup>53-1</sup>.

The `Number.MAX_SAFE_INTEGER` constant represents 2 <sup>53-1</sup> and `Number.MIN_SAFE_INTEGER` constant represents -2 <sup>53-1</sup>.

```js
let numInt = 710;
let numDec = 710.0;
let numExp = 7.1e2; // 7.1 * (10 ** 2)
let numOct = 0c1306;
let numHex = 0x2C6;
let numBin = 0b1011000110;
```

### Methods and properties

```js
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

## Undefind

todo

## null

todo

## Object

### Empty object.

```js
const user = {};
```

### Equality

Points to two different memory locations.

```js
console.log({} === {}); // false
```

Points to the same memory location.

```js
let someObject = {};
let otherObject = someObject;
console.log(someObject === otherObject); // true
```

### Object with properties and values.

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

### Object reference

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
};

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
};

console.log(user); // {id: 1, firstName: "Bob", lastName: "Rob", getFullName: ƒ()}
changeId(user, 10); // {id: 10}
console.log(user); // {id: 10, firstName: "Bob", lastName: "Rob", getFullName: ƒ()}
```

### Get all the keys.

```js
const keys = Object.keys(user);
console.log(keys); // ['id', 'firstName', 'lastName', 'getFullName']
```

### Get all the values.

```js
const values = Object.values(user);
console.log(values); // [1, 'bob', 'rob', ƒ]
```

### Checking properties.

```js
console.log(user.hasOwnProperty("id")); // true
console.log(user.hasOwnProperty("age")); // false
```

### Get all the keys and values.

```js
const entries = Object.entries(user);
console.log(entries);

// 0: (2) ['id', 1]
// 1: (2) ['firstName', 'bob']
// 2: (2) ['lastName', 'rob']
// 3: (2) ['getFullName', ƒ]
```

### Object destructuring

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

### Object property shorthand

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

### Spread syntax (...)

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

### Rest syntax (parameters) (...)

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

# Array

```js
const arr = Array();
const arr = [];
console.log(arr.length); // 0
```

## Array methods

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

### 2. concat

```js
const arr1 = [1, 2, 3];
const arr2 = [1, 4, 5];
const arr3 = arr1.concat(arr2);
console.log(arr3); // [1, 2, 3, 1, 4, 5]
// or
const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 1, 4, 5]
```

### 5. every

```js
let fruits = ["Apple", "Banana", "Orange", "Mango", "Apple"];
let every = fruits.every((fruit) => fruit.toLowerCase().includes("apple"));
console.log(fruits + "/" + every); // Apple,Banana,Orange,Mango/false

let fruits = ["Apple", "Apple", "Apple", "Apple", "Apple"];
let every = fruits.every((fruit) => fruit.toLowerCase().includes("apple"));
console.log(fruits + "/" + every); // Apple,Apple,Apple,Apple,Apple/true
```

### 6. fill

```js
const arr = Array(10).fill(0);
console.log(arr); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
```

### 7. filter

```js
let fruits = ["Apple", "Banana", "Orange", "Mango", "Apple"];
let filter = fruits.filter((fruit) => fruit.toLowerCase().includes("apple"));
console.log(fruits + "/" + filter); // Apple,Banana,Orange,Mango/Apple,Apple
```

```js
let notes = [
    {
        title: "First title",
        body: "First body",
    },
    {
        title: "Second title",
        body: "Second body",
    },
    {
        title: "Third title",
        body: "Third body",
    },
];

let filterdNotes = notes.filter((note, index) => {
    const isTitleMatch = note.title.toLowerCase().includes("rs");
    const isBodyMatch = note.body.toLowerCase().includes("rs");
    return isTitleMatch || isBodyMatch;
});

console.log(JSON.stringify(filterdNotes)); // [{"title":"First title","body":"First body"}]
```

### 8. findIndex

```js
let fruits = ["Apple", "Banana", "Orange", "Mango", "Apple"];
let index = fruits.findIndex((fruit) => {
    return fruit.toLowerCase().includes("apple");
});
console.log(fruits + "/" + index); // Apple,Banana,Orange,Mango/0
```

```js
let notes = [
    {
        title: "First title",
        body: "First body",
    },
    {
        title: "Second title",
        body: "Second body",
    },
    {
        title: "Third title",
        body: "Third body",
    },
];

let index = notes.findIndex((note, index) => {
    return note.title === "Second title";
});

console.log(JSON.stringify(notes) + "/" + index); // [{"title":"First title","body":"First body"},{"title":"Second title","body":"Second body"},{"title":"Third title","body":"Third body"}]/1
```

```js
let notes = [
    {
        title: "First title",
        body: "First body",
    },
    {
        title: "Second title",
        body: "Second body",
    },
    {
        title: "Third title",
        body: "Third body",
    },
];

const findNote = (notes, title) => {
    let index = notes.findIndex((note, index) => {
        return note.title.toLowerCase() === title.toLowerCase();
    });
    return notes[index];
};

let note = findNote(notes, "second title");
console.log(note); // {title: "Second title", body: "Second body"}
```

### 9. find

Return the first occurrence of an item.

```js
let fruits = ["Apple", "Banana", "Orange", "Mango", "Apple"];
let find = fruits.find((fruit) => fruit.toLowerCase().includes("apple"));
console.log(fruits + "/" + find); // Apple,Banana,Orange,Mango/Apple
```

```js
let notes = [
    {
        title: "First title",
        body: "First body",
    },
    {
        title: "Second title",
        body: "Second body",
    },
    {
        title: "Third title",
        body: "Third body",
    },
];

const findNote = (notes, title) => {
    return notes.find((note, index) => {
        return note.title.toLowerCase() === title.toLowerCase();
    });
};

let note = findNote(notes, "second title");
console.log(note); // {title: "Second title", body: "Second body"}
```

### 12. forEach

`forEach` function takes single argument (a function or a callback function), and this function gets called with some arguments.

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
```

```js
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

/*
Dariana Trahan
Lillie Earl
Esther Yeager
Marianna Brownlee
Sara Tong
Clint Winslow
Efrain Popp
Anya Aiello
Sergio Truitt
Keyshawn Apodaca
*/
```

```js
names.forEach((name, index) => console.log(index, ":", name));

/*
0,":","Dariana Trahan"
1,":","Lillie Earl"
2,":","Esther Yeager"
3,":","Marianna Brownlee"
4,":","Sara Tong"
5,":","Clint Winslow"
6,":","Efrain Popp"
7,":","Anya Aiello"
8,":","Sergio Truitt"
9,":","Keyshawn Apodaca"
*/
```

```js
names.forEach((name, index, array) =>
    console.log(index, ":", name, "-", array[index])
);

/*
0,":","Dariana Trahan","-","Dariana Trahan"
1,":","Lillie Earl","-","Lillie Earl"
2,":","Esther Yeager","-","Esther Yeager"
3,":","Marianna Brownlee","-","Marianna Brownlee"
4,":","Sara Tong","-","Sara Tong"
5,":","Clint Winslow","-","Clint Winslow"
6,":","Efrain Popp","-","Efrain Popp"
7,":","Anya Aiello","-","Anya Aiello"
8,":","Sergio Truitt","-","Sergio Truitt"
9,":","Keyshawn Apodaca","-","Keyshawn Apodaca"
*/
```

### 14. includes

```js
let arr = [1, 1, 23, , 5];

console.log(arr.includes(1)); // true
console.log(arr.includes(6)); // false
console.log(arr.includes(5)); // true
```

### 15. indexOf

```js
let arr = [1, 1, 23, , 5];

console.log(arr.indexOf(1)); // 0
console.log(arr.indexOf(6)); // -1
console.log(arr.indexOf(5)); // 4
```

### 17. join

```js
const words = ["There", "Is", "No", "Spoon"];
console.log(words.join(", ")); // There, Is, No, Spoon
```

### 19. lastIndexOf

```js
console.log(arr3.lastIndexOf(1)); // 3
```

### 20. map

```js
let letters = ["a", "b", "c"];
let upperCaseLetters = letters.map((letter) => letter.toUpperCase());
console.log(letters + "/" + upperCaseLetters); // a,b,c/A,B,C
```

### 22. pop

```js
// Remove an item from the end
let num = [1, 2, 3, 1, 4, 5, 1234];
let rmItem = num.pop();
console.log(num); // [1, 2, 3, 1, 4, 5]
console.log(rmItem); // 1234
```

### 23. push

```js
// Add an item at the end
let num = [1, 2, 3, 1, 4, 5];
num.push(1234);
console.log(num); // [1, 2, 3, 1, 4, 5, 1234]
```

### 24. reduce

```js
let num = [1, 2, 5666, 22, 45, 7, 0];
const sum = num.reduce((acc, cur) => acc + cur);
console.log(num + "/" + sum); // 1,2,5666,22,45,7,0/5743

let letters = ["a", "b", "c"];
const join = letters.reduce((acc, cur) => acc + cur);
console.log(letters + "/" + join); // a,b,c/abc
```

### 26. reverse

```js
let num = [1, 2, 5666, 22, 45, 7, 0];
num.reverse();
console.log(num); // [0, 7, 45, 22, 5666, 2, 1]
```

### 27. shift

```js
// Remove an item at the beginning and shift rest of the elements to the left
let num = [1234, 1, 2, 3, 1, 4, 5];
let rmItem = num.shift();
console.log(num); // [1, 2, 3, 1, 4, 5]
console.log(rmItem); // 1234
```

### 28. slice

```js
// The slice(start, end) method where the end is exclusive returns a shallow copy of a part of an array and returns a new array. It does not change the original array.
let num = [1, 2, 3, 1, 4, 5];
console.log(num.slice(3, 4)); // [1]
console.log(num); // [1, 2, 3, 1, 4, 5]

// other variations
console.log(num.slice()); // [1, 2, 3, 1, 4, 5]
console.log(num.slice(3)); // [1, 4, 5]
```

### 29. some

```js
let fruits = ["Apple", "Banana", "Orange", "Mango", "Apple"];
let some = fruits.some((fruit) => fruit.toLowerCase().includes("apple"));
console.log(fruits + "/" + some); // Apple,Banana,Orange,Mango/true
```

### 30. sort

```js
let nums = [1, 2, 5666, 22, 45, 7, 0];
nums.sort();
console.log(nums); // [0, 1, 2, 22, 45, 5666, 7]
```

```js
let notes = [
    {
        title: "Second title",
        body: "Second body",
    },
    {
        title: "Third title",
        body: "Third body",
    },
    {
        title: "First title",
        body: "First body",
    },
];

const sortNotes = (notes) => {
    return notes.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
        } else if (b.title.toLowerCase() < b.title.toLowerCase()) {
            return 1;
        } else {
            return 0;
        }
    });
};

sortNotes(notes);
console.log(notes); // [{title: "First title", body: "First body"}, {title: "Second title", body: "Second body"}, {title: "Third title", body: "Third body"}]
```

### 31. splice

```js
// The splice(start, deleteCount, item1, item2, itemN) returns an array containing the deleted element. It modifies the original array by removing or adding additional items.
let num = [1, 2, 3, 1, 4, 5];
let delItems = num.splice(1, 4, 20, 21, 22, 23);
console.log(delItems); // [2, 3, 1, 4]
console.log(num); // [1, 20, 21, 22, 23, 5]

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

let num = [1, 3, 4];
console.log(num.splice(1, 0, 2)); // []
console.log(num); // [1, 2, 3, 4]
```

### 34. toString

```js
console.log(arr3.toString()); // 1,2,3,1,4,5
```

### 35. unshift

```js
// Add an item at the beginning and shift rest of the elements to the right
let num = [1, 2, 3, 1, 4, 5];
num.unshift(1234);
console.log(num); // [1234, 1, 2, 3, 1, 4, 5]
```

## Array destructuring

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

## Two-dimensional array

```js
let nums = [
    [1, 2, 3],
    [4, 5, 6],
];

console.log(nums[0]); // [1, 2, 3]
console.log(nums[1]); // [4, 5, 6]
console.log(nums[0][1]); // 2
```

[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

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

## Ternary operator

```js
const age = 22;
let message = age >= 18 ? "You're over 18" : "You're under 18"; 
console.log(message); // You're over 18
```

# Function

-   Regular / Named function
-   Function expression / Anonymous function
-   Arrow function
-   Immediately invoked function expression
-   Callback functions

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

The `arguments` object (local variable) accessible inside functions that contains the values of the arguments passed to that function. It is available within all non-arrow functions.

```js
function hello() {
    console.log(arguments); // {0: "1", 1: "2", 2: "3"}
    return "hello world";
}

hello("1", "2", "3")
```

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

console.log(user.getFullName());
```

```js
let user = {
    id: 1,
    firstName: "Bob",
    lastName: "Rob",
    getFullName() {
        console.log(this); // {id: 1, firstName: "Bob", lastName: "Rob", getFullName: ƒ()}
        return `${this.firstName} ${this.lastName}`;
    },
};

console.log(user.getFullName());
```

[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)

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

```js
const hello = () => {
    return "hello world";
};

hello(); // 'hello world'
```

With a concise body, we can have an implicit return using the shorthand syntax.

```js
const hello = () => "hello world";

hello(); // 'hello world'
```

Arrow functions don't have `this` and `arguments` binding.

```js
const hello = () => {
    console.log(arguments); // Uncaught ReferenceError: arguments is not defined
    return "hello world";
}

hello("1", "2", "3")
```

```js
let user = {
    id: 1,
    firstName: "Bob",
    lastName: "Rob",
    getFullName: () => {
        console.log(this); // undefined
        return `${this.firstName} ${this.lastName}`; // TypeError: Cannot read properties of undefined (reading 'firstName')
    },
};

console.log(user.getFullName()); 
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
let getResult = function (name = "Anonymous", score = 0) {
    return `Name: ${name} - Score: ${score}`;
};

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

## for

```js
for ([initialExpression]; [conditionExpression]; [incrementExpression])
    statement;

for (let num = 1; num <= 10; num++) {
    console.log("#", num);
}
```

## do...while

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

## while

```js
while (condition) statement;

let num = 1;
while (num <= 10) {
    console.log("#", num);
    num += 1;
}
```

## break

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

## continue

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

## labeled

```js
// labeled statement is used with a break or continue statements.

label: statement;

// todo
```

## for...in

`for...in` statement iterates over object literals to get the index/keys of the object.

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

## for...of

`for...of` statement iterates over iterable objects including String, Array, TypedArray, Map, Set, and Intl. Segments to get the property values.

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

# Falsy and Truthy values

```js
let nums = [false, 0, '', "", ``, null, NaN, undefined];

nums.map((num) => {
    if (num) {
        console.log(`${num} is truthy`);
    } else {
        console.log(`${num} is falsy`);
    }
})

// false is falsy
// 0 is falsy
// is falsy
// is falsy
// is falsy
// null is falsy
// NaN is falsy
// undefined is falsy
```

```js
let nums = [true, {}, [], 22, "0", "false", new Date(), -22, 3.14, -3.14, Infinity, -Infinity];

nums.map((num) => {
    if (num) {
        console.log(`${num} is truthy`);
    } else {
        console.log(`${num} is falsy`);
    }
})

// true is truthy
// [object Object] is truthy
// is truthy
// 22 is truthy
// 0 is truthy
// false is truthy
// Thu Sep 29 2022 15:34:49 GMT+1000 (Australian Eastern Standard Time) is truthy
// -22 is truthy
// 3.14 is truthy
// -3.14 is truthy
// Infinity is truthy
// -Infinity is truthy
```



# Logical AND (&&)

Logical AND (&&) evaluates operands from left to the right. It returns the value of the first falsy operand. If all values are truthy, it returns the value of the last operand.

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

# Try Catch

```js
const getTotalAmount = (amount) => {
    if (typeof amount === 'number') {
        return amount + 100;
    } else {
    	throw Error("Not a number"); 
    }
}

console.log(getTotalAmount(12)); // 112
console.log(getTotalAmount('12')); // Error: Not a number
```

```js
const getTotalAmount = (amount) => {
    if (typeof amount === 'number') {
        return amount + 100;
    } else {
    	throw Error("Not a number"); 
    }
}

try {
    console.log(getTotalAmount(12)); // 112
    console.log(getTotalAmount('12')); // Error: Not a number
} catch (e) {
    console.log(e);
}
```

# Debugging

```js
console.log("This is a test");
```

## Debugger

```js
debugger;
```

[source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger)

# HTML with live server

```shell
npm install -g live-server
live-server --version
// live-server 1.2.2

mkdir folder_name
cd folder_name
```

Now create a file called `index.html` inside the folder `folder_name` with the following content.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<body>
		Hello World
	</body>
</html>
```

Start the live server.

```shell
live-server folder_name
// Serving "folder_name" at http://127.0.0.1:8080
// Ready for changes
```

Alernatively you can use this [VSCode Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

[Source](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

# How to add JavaScript to a web page

## Everything between script tags will be executed by the web browser

```html
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

Get the code from [here](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/examples/example-1).

## Link an external file to a web page

```html
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
	<script type="text/javascript" src="index.js"></script>
    </body>
</html>
```

Get the code from [here](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/examples/example-2).

# DOM - Document Object Model

## DOM manipulation

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<body>
		<p>Hello World</p>
		<script type="text/javascript" src="index.js"></script>
	</body>
</html>
```

```js
const p = document.querySelector("p");
console.log(p);
p.remove(); 
```

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<body>
		<p>Hello World</p>
		<p>Hello Universe</p>
		<script type="text/javascript" src="index.js"></script>
	</body>
</html>
```

```js
const ps = document.querySelectorAll("p");
console.log(ps);

ps.forEach((p) => {
	p.remove();
});

const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new element from JavaScript";
document.querySelector("body").appendChild(newParagraph);
```
## Event handling

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<body>
		<h1>Notes</h1>
		<button>Create note</button>
		<script type="text/javascript" src="index.js"></script>
	</body>
</html>
```

```js
let notes = [
	{
		title: "First title",
		body: "First body",
	},
	{
		title: "Second title",
		body: "Second body",
	},
	{
		title: "Third title",
		body: "Third body",
	},
];

document.querySelector("button").addEventListener("click", (e) => {
	console.log(`${e.target.textContent} Button is clicked`);
});
```

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<body>
		<h1>Notes</h1>
		<p class="note">Note 1</p>
		<p class="note">Note 2</p>
		<p class="note">Note 3</p>
		<button id="create-note">Create note</button>
		<button id="remove-all">Remove all notes</button>
		<script type="text/javascript" src="index.js"></script>
	</body>
</html>
```

```js
let notes = [
	{
		title: "First title",
		body: "First body",
	},
	{
		title: "Second title",
		body: "Second body",
	},
	{
		title: "Third title",
		body: "Third body",
	},
];

document.getElementById("create-note").addEventListener("click", (e) => {
	console.log(`${e.target.textContent} Button is clicked`);
});

document.getElementById("remove-all").addEventListener("click", (e) => {
	console.log(`Delete all notes`);
	[...document.getElementsByClassName("note")].forEach((note) => {
		note.remove();
	});
});
```

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<body>
		<h1>Notes</h1>
		<p class="note">Note 1</p>
		<p class="note">Note 2</p>
		<p class="note">Note 3</p>
		<input id="search-note" type="text" />
		<button id="create-note">Create note</button>
		<button id="remove-all">Remove all notes</button>
		<script type="text/javascript" src="index.js"></script>
	</body>
</html>
```

```js
let notes = [
	{
		title: "First title",
		body: "First body",
	},
	{
		title: "Second title",
		body: "Second body",
	},
	{
		title: "Third title",
		body: "Third body",
	},
];

document.getElementById("create-note").addEventListener("click", (e) => {
	console.log(`${e.target.textContent} Button is clicked`);
});

document.getElementById("remove-all").addEventListener("click", (e) => {
	console.log(`Delete all notes`);
	[...document.getElementsByClassName("note")].forEach((note) => {
		note.remove();
	});
});

document.getElementById("search-note").addEventListener("input", (e) => {
	console.log(`${e.target.value}`);
});
```

[Source](https://developer.mozilla.org/en-US/docs/Glossary/Empty_element)

# Local Storage

```js
localStorage.setItem("your_key", "your_value");
localStorage.getItem("your_key");
localStorage.localStorage.removeItem("your_key");
localStorage.clear();
```

```js
localStorage.setItem("your_key", JSON.stringify("your_value"))
localStorage.getItem(JSON.parse("your_key"));
```

# Window interface

```js
window.console.log("Hello");
window.document === document;
```

```js
window.addEventListener('click', () => {
	console.log("Clicked");
})
```

localStorage Sync across pages: The storage event of the Window interface fires when a localStorage is changed in the context of another document. So the storage event does not fire for the document that is responsible for the localStorage changes; it will fire the storage event for the other documents. In simple words if we have 3 tabs open, and if tab1 changes the localStorage then only tab2 and tab3 will fire storage event.

```js
window.addEventListener('storage', () => {
	console.log("Clicked");
})
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
9. [JavaScript](https://github.com/Asabeneh/30-Days-Of-JavaScript)
