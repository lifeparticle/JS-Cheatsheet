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

Array methods.

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

# Function

```js
function hello() {
    return "hello world";
}

hello();
```

```js
function hello(name) {
    return name;
}

hello("hello world");
```

```
const hello = () => {
    return "hello world";
}

hello();
```

```js
const hello = () => "hello world";

hello();
```

Function expression

```js
const hello = function() {
    return "hello world";
};

hello();
```
