# Introduction

TODO

# Rules of Hooks

- We can call Hooks at the Top Level (Don’t call Hooks inside loops, conditions, or nested functions)
- We can call Hooks from React function components (Don't call Hooks from regular JavaScript functions)
- We can create a custom Hook (a JavaScript function). The name starts with `use` and that may call other Hooks

# Hooks

## A) State managment

### 1. useState


### 2. useReducer


## B) State monitoring

### 3. useEffect

The `useEffect` hook run as a result of rendering and we can use this hook to synchronize a component with an external system (side effects) with the state of the component and it's not a lifecycle hook. For example:

- Based on the state, control a non-React component
- Establish connection to a chat server
- Send analytics logs
  
Therefore, the `useEffect` hook should synchronise your components with an external system. However, in other cases, such as when you need to change one state based on another and there is no external system, you may not need an Effect. The `useEffect` hook takes two arguments, **a setup function** and **a list of dependencies**.

```jsx
useEffect(() => {
   /* setup function */
  return () => {
    /* cleanup function */
  };
}, [/* dependencies */]);
```

For example, if we want to connect to a chatroom we need to provide the following two arguments:

- A setup function with setup code that connects to a chat server. Also, it should return a cleanup function with a cleanup code that disconnects from the chat server
- A list of dependencies (`[serverUrl, roomId]`). It should include all the values from your component used inside the setup and cleanup functions

```jsx
useEffect(() => {
  const connection = createConnection(serverUrl, roomId);
  connection.connect();
  return () => {
    connection.disconnect();
  };
}, [serverUrl, roomId]);
```

Amazing, we know how to write a `useEffect` hook. Now we need to understand when React calls the setup and cleanup functions.

- #### 1. The setup code inside the setup function runs when the component is added to the page (mounts)
- #### 2. After every re-render (due to the dependencies changes) of the component the setup and cleanup functions are called.
  - 2.1 First, the cleanup code runs with the old props and state
  - 2.2 Second, the setup code runs with the new props and state
- #### 3. Finally, the cleanup code inside the cleanup function runs after the component is removed from the page (unmounts)

So it is clear that React will call the cleanup function each time before the setup functions runs and during the unmount

There are three ways we can write a `useEffect` hook

All state

```jsx
useEffect(() => {
  // This runs after every render for all state changes
});
```

No state

```jsx
useEffect(() => {
  // This runs only on mount
}, []);
```

Particuler states

```jsx
useEffect(() => {
  // This runs on mount *and also* if either a or b have changed since the last render
}, [a, b]);
```


The following code will result in an infinite loop:

```jsx
const [count, setCount] = useState(0);
useEffect(() => {
  // Code here will run after *every* render
  setCount(count + 1);
});
```

### 4. useMemo

### 5. useCallback



Both `useMemo` and `useCallback` takes two arguments, an array of dependencies and a function. When dependencies change, `useCallback` returns its function, however `useMemo` calls its function and returns the output. 





### 6. useLayoutEffect

### 7. todo


# Resources

1. https://beta.reactjs.org/apis/react/useEffect#useeffect
2. https://epicreact.dev/myths-about-useeffect/
3. https://github.com/facebook/react/issues/24502
4. https://beta.reactjs.org/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development
5. [before-you-memo](https://overreacted.io/before-you-memo/)





