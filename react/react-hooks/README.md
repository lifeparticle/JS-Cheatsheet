# Introduction

# Rules of Hooks

# Hooks

## 1. useEffect

The `useEffect` hook run as a result of rendering and we can use this hook to synchronize a component with an external system (side effects) with the state of the component. For example:

- Based on the state, control a non-React component
- Establish connection to a chat server
- Send analytics logs
  
Therefore, the `useEffect` hook should synchronise your components with an external system. However, in other cases, such as when you need to change one state based on another and there is no external system, you may not need an Effect. The `useEffect` hook takes two arguments, **a setup function** and **a list of dependencies**. For example, if we want to connect to a chatroom we need to provide following two arguments:

- A setup function with setup code that connects to a chat server. Also, it should return a cleanup function with cleanup code that disconnects from the chat server
- A list of dependencies (`[serverUrl, roomId]`). It should include all the value from your component used inside the setup and cleanup functions

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
- #### 2. After every re-render (due the dependencies have changed) of the component the setup and cleanup function are called:
  - 2.1 First, the cleanup code runs with the old props and state
  - 2.2 Second, the setup code runs with the new props and state
- #### 3. The cleanup code inside the cleanup function runs after the component is removed from the page (unmounts)

There are three ways we can write a `useEffect` hook

```jsx
useEffect(() => {
  // This runs after every render for every state changes
});
```

```jsx
useEffect(() => {
  // This runs only on mount
}, []);
```

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

## 2. useState

## 3. useLayoutEffect

## 4. todo


# Resources

1. https://beta.reactjs.org/apis/react/useEffect#useeffect
2. https://epicreact.dev/myths-about-useeffect/
3. https://github.com/facebook/react/issues/24502





