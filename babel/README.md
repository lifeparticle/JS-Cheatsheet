We can use the Babel tool to write code in the most recent JavaScript version. Babel will compile our code to a supported version for wider Browser compatibility.

In

```js
// ES2020 nullish coalescing
function greet(input) {
  return input ?? "Hello world";
}
```

Out

```js
function greet(input) {
  return input != null ? input : "Hello world";
}
```

[Source](https://github.com/babel/babel)
