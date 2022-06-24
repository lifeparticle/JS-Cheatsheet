# Introduction

[ECMAScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources)

ES1 (1997), ES2 (1998), ES3 (1999), ES4, ES5 (2009), ES6 or ES2015 (2015), ES2016, ES2017, ES2018, ES2019, ES2020, ES2021

# Data types

| No | Type  | Example  | Doc  |
|---|---|---|---|
| 1 | Number    | let a = 17               | [link](https://developer.mozilla.org/en-US/docs/Glossary/Number)    |
| 2 | BigInt    | let a = 348378344239489n | [link](https://developer.mozilla.org/en-US/docs/Glossary/BigInt)    |
| 3 | String    | let a = "Hello universe" | [link](https://developer.mozilla.org/en-US/docs/Glossary/String)    |
| 4 | Boolean   | let a = true             | [link](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)   |
| 5 | Symbol    | let sym = Symbol()       | [link](https://developer.mozilla.org/en-US/docs/Glossary/Symbol)    |
| 6 | null      | let a = null             | [link](https://developer.mozilla.org/en-US/docs/Glossary/Null)      |
| 7 | undefined | let a = undefined        | [link](https://developer.mozilla.org/en-US/docs/Glossary/undefined) |
| 8 | Object    | let a = {a: 'test'}      | [link](https://developer.mozilla.org/en-US/docs/Glossary/Object)    |



# JavaScript Variables

```js
var
let
const
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
result = '' && 'foo';  // ""
result = 2 && 0;       // 0
result = 'foo' && 4;   // 4
```

[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)

# Logical OR (||)

Logical OR (||) evaluates operands from left to right. It returns value of the first truthy operand. If all values are falsy, it returns value of the last operand. 


```js
result = '' || 'foo';  //  'foo'
result = 2 || 0;       // 2
result = 'foo' || 4;   // 'foo'
```

[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)

# JavaScript modules

We can export functions, var, let, const, and classes. Exported items needs to be top-level items. We can't export items from a function.


1. We can use the `export` statement to give access to module features.

```js
// ./modules/constants.js
export const PI = 3.14
export const ONE = 1
export const ZERO = 0
```

There is only one default export allowed per module.

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
import { PI, ONE, ZERO } from './modules/constants.js';
```

 
```js
// main.js
import {randomString, randomFloat} from './modules/random.js';
import randomNum from './modules/random.js';
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
import { newRandomStringFunctionName as randS,
         newRandomFloatFunctionName as randF,
         newRandomNumFunctionName as randN } from './modules/random.js';
```

4. Creating a module object

```
import * as Rand from './modules/random.js';

Rand.newRandomStringFunctionName();
Rand.newRandomFloatFunctionName();
Rand.newRandomNumFunctionName();
```

[JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

# Array

## Array methods

| No | Name | When to use |
|---|---|---|
| 1  | at()					    |								|
| 2  | concat()			    |								|
| 3  | copyWithin()	    |								|
| 4  | entries()		    |								|
| 5  | every()			    |								|
| 6  | fill()				    |								|
| 7  | filter()			    |								|
| 8  | findIndex()	    |								|
| 9  | find()				    |								|
| 10 | flat()				    |								|
| 11 | flatMap()		    |								|
| 12 | forEach()		    |								|
| 13 | from()				    |								|
| 14 | includes()		    |								|
| 15 | indexOf()		    |								|
| 16 | isArray()		    |								|
| 17 | join()				    |								|
| 18 | keys()				    |								|
| 19 | lastIndexOf()    |								|
| 20 | map()				    |								|
| 21 | of()					    |								|
| 22 | pop()				    |								|
| 23 | push()				    |								|
| 24 | reduce()			    |								|
| 25 | reduceRight()    |								|
| 26 | reverse()		    |								|
| 27 | shift()			    |								|
| 28 | slice()			    |								|
| 29 | some()				    |								|
| 30 | sort()				    |								|
| 31 | splice()				  |								|
| 32 | toLocaleString() |								|
| 33 | toSource()			  |								|
| 34 | toString()			  |								|
| 35 | unshift()			  | 							|
| 36 | values()			    |								|


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
```

# Object destructuring

```js
let user = {
  id: 1,
  firstName: 'bob',
  lastName: 'rob'
};


let {firstName} = user;

/*
function userId(user) {
  return user.id;
}
*/

function userId({id}) {
  return id;
}

userId(user);
```

# Spread syntax (...)

TODO

```js
let user = {
  id: 1,
  firstName: 'bob',
  lastName: 'rob'
};

function userId({id, ...rest}) {
  return {
    id: id + 1,
    ...rest
  }
}

userId(user); // {id: 2, firstName: 'bob', lastName: 'rob'}
```

# Rest syntax (parameters) (...)

The rest parameter syntax (last parameter in a function) allows a function to accept an indefinite number of arguments.

```js
let user = {
  id: 1,
  firstName: 'bob',
  lastName: 'rob'
};

function userId({id, ...rest}) {
  console.log(rest); // {firstName: 'bob', lastName: 'rob'}
  return `${id} ${rest.firstName} ${rest.lastName}`;
}

userId(user); // '1 bob rob'
```

# Function

## Regular function

You can use functions before you create them. So they are hoisted.

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
const hello = function() {
    return "hello world";
};

hello(); // 'hello world'
```

## Arrow function

With block body, we need explicit return.

```
const hello = () => {
    return "hello world";
}

hello(); // 'hello world'
```

With concise body, we can have implicit return.

```js
const hello = () => "hello world";

hello(); // 'hello world'
```

Callback functions

```js
const getData = (callBackFunc) => {
    console.log("loading data.....");
    let data = "data data data";
    callBackFunc(data);
}

getData((data) => {
    console.log(data);
});
```

```js
const getData = (callBackFunc) => {
    console.log("loading data.....");
    let data = "data data data";
    callBackFunc(data);
}

const showData = (data) => {
    console.log(data);   
}

getData(showData);
```

# Tools

1. [Webpack](https://webpack.js.org/concepts/why-webpack/)
2. [Polyfill](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill)
3. [Babel-polyfill](https://babeljs.io/docs/en/babel-polyfill/)

