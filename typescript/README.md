[TypeScript](https://www.typescriptlang.org/) is a superset of JavaScript. TypeScript additionally supports static typing. On the other hand, JavaScript supports only dynamic typing. So, by using TypeScript we can avoid runtime errors. 

It transpiles to plain JavaScript. The difference between transpiling and compiling is transpiling converts one language to another and compiling converts a language 
into machine code.

Once the transpile is compelte, we can run the JavaScript code in the browser (Gogole Chrome) or using a JavaScript engine (V8).


TypeScript
```tsx
let name: string;
name = 999;  // compile-time error
```

JavaScript
```js
let name;
name = 999;  // no error
```

## Install TypeScript globally using npm

```sh
npm install -g typescript
```

## Check version 

```sh
tsc -v
```

## Example

main.ts

```tsx
function sum(a: number, b: number) {
	return a + b;
}

console.log(sum(10, 3));
```

Compile `main.ts` using Typescript compiler.

```sh
tsc main
```

After transpiling.

main.js

```js
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 3));
```

## Error

```tsx
function sum(a: number, b: number) {
	return a + b;
}

console.log(sum(10, "3"));
```

Compile `main.ts` using Typescript compiler. But, it Will not generate JavaScript until all errors are fixed.

```sh
tsc main --noEmitOnError true
```

```sh
main.ts:5:21 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

5 console.log(sum(10, "3"));
                      ~~~


Found 1 error.
```

## Using a config file

tsconfig.json
```json
{
	"compilerOptions": {
		"baseUrl": ".", //transpile .ts files in the currebt folder
		"outDir": "./dist", // save the .js generated file in the dist folder
		"noEmitOnError": true, // if there are any compilaton error then don't generate .js files
		"target": "es5", // transfile into es5 syntax
		"watch": true, // on every file change new .js files will be generated automatically
		"lib": ["dom"] // other libraries
	}
}
```

```sh
tsc
```

## Create a TypeScript project

```sh
tsc --init
```



## Function

```tsx
function sum(a: number, b: number): number {
	return a + b;
}
```

```tsx
function sum(a: number, b: number): void {
	print(a + b);
}
```

## Array

```tsx
const person: Person[] = [];
```

## Type annotations


| Syntax      | Description |
| ----------- | ----------- |
| string      | text                                    |
| boolean     | true/false                              |
| number      | number                                  |
| symbol      |                                         |
| any         | can hold different types of data        |
| unknown     |                                         |
| never       |                                         |
| void        |                                         |

### Union type

```tsx
let id = string | number;
```

### Custom type

```tsx
type TileType = "Mr" | "Mrs" | "Miss";

let title : TileType;
```

```tsx
type Person {
  title: TileType;
  first: string;
  last: string;
}

let p1 : Person = {
  title: "Mr",
  first: "Mahbub",
  last: "Zaman"
}
```

## Interface

```tsx
interface Person {
  title: TileType;
  first: string;
  last: string;
}

const p1 : Person = {
  title: "Mr",
  first: "Mahbub",
  last: "Zaman"
}
```

### Optional property

```tsx
interface Person {
	title: TileType;
	first: string;
	last: string;
	age?: number;
}

const p1: Person = {
	title: "Mr",
	first: "Mahbub",
	last: "Zaman"
};
```


### Add aditinal property

```tsx
interface Person {
	title: TileType;
	first: string;
	last: string;
	[key: string]: any;
}

const p1: Person = {
	title: "Mr",
	first: "Mahbub",
	last: "Zaman",
	id: 10,
	dob: "1 Jan 2000",
};
```

### Satisfies

todo


### Generics

todo



# Resources
1. https://www.totaltypescript.com/
