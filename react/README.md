- [How to learn React - Pick as you like](#how-to-learn-react---pick-as-you-like)
  * [Create a React project](#create-a-react-project)
- [Introduction](#introduction)
- [Virtual DOM](#virtual-dom)
- [Lifecycle](#lifecycle)
- [JSX](#jsx)
- [Components and Props](#components-and-props)
  * [Controlled vs UnControlled Components](#controlled-vs-uncontrolled-components)
- [Fragment](#fragment)
- [Higher order component](#higher-order-component)
- [Hooks](#hooks)
- [State](#state)
- [Context](#context)
- [React performance](#react-performance)
  * [Memo](#memo)
  * [Code spliting](#code-spliting)
- [Suspense and Error Boundaries](#suspense-and-error-boundaries)
- [React router dom](#react-router-dom)
- [Miscellaneous](#miscellaneous)
- [Books](#books)
- [My React Articles](#my-react-articles)
- [Blogs](#blogs)
- [Courses](#courses)
- [Resources](#resources)

# Latest news

1. [Introducing-react-dev](https://react.dev/blog/2023/03/16/introducing-react-dev)
2. ["React from Another Dimension" by Dan Abramov at #RemixConf 2023](https://www.youtube.com/watch?v=zMf_xeGPn6s&ab_channel=Remix)

# How to learn React - Pick as you like
1. JavaScript
2. https://beta.reactjs.org/
3. YouTube - Video Tutorials
4. Scrimba - Video Tutorials and coding practice
5. Books i.e., React road to enterprise
6. Other blogs i.e., https://overreacted.io/
7. Mentors i.e., https://www.codementor.io/
8. Read other code i.e., GitHub
9. Online course i.e. https://epicreact.dev/
10. Something else???

## Create a React project
- Idea -> Base64 converter
- Requirements -> Encode, Decode, Clear etc
- Mockups -> Low fidelity design -> High fidelity
- Implementation
  - Create a react app -> npm, yarn or pnpm
  - Code the UI -> You may want to use a react component library i.e., mantine, to fast track the development process
  - Add logic - react hooks and custom functions 
    - If you're stuck, then search for specific react or javascript tutorials, i.e., how to convert base64 in react
    - Ask questions on StackOverflow or GitHub
    - Ask someone else
   - Deploy i.e, On Netlify via GitHub

# Introduction

React is a JavaScript library for building composable user interfaces. React uses only one HTML file called `index.html` to load the entire application. That is why it's called a single page application (SPA). We can use [React Router](https://github.com/remix-run/react-router) to navigate between components.


React mounts components twice (in development only!) when Strict Mode is enabled to stress-test your Effects.

```
Mounts
Unmounts
Mounts
```

# Virtual DOM

React creates a copy of the actual DOM called a virtual dom (in-memory representation of the real DOM). When there is a change (state change), React creates a new virtual dom (second virtual DOM), compares it with the previous virtual dom by runing the diffing algorithm, and finally updates a specific part of the actual DOM rather than updating the whole. This process makes rendering faster and more efficent.

```
Second virtual DOM  <==== Diff algo =====> First virtual DOM = Changes (if any) -----> Updates the actual DOM (specific parts only)
```

Rendering option in the browser.

![image](https://user-images.githubusercontent.com/1612112/198919716-14d0132b-c77b-497b-840d-72f30fd39e22.png)


# Lifecycle

[Lifecycle](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/react/react-lifecycle)

# JSX

JSX (JavaScript XML) is used to describe the UI using React. It creates React elements.


```tsx
const element = <h1>Hello, world!</h1>;
```

# Components and Props

In React components are like JavaScript functions and they takes any number of inputs (properties or props in short). A component returns React elements which appear on the screen.

```tsx
function Hello(props) {
  return <h1>Hello, {props.name}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Hello name="Bob" />;
root.render(element);
```

## Controlled vs UnControlled Components

[Source](https://stackoverflow.com/questions/42522515/what-are-react-controlled-components-and-uncontrolled-components)

# Fragment

We can use a Fragment to wrap a list of children without adding extra nodes to the DOM.

```tsx
function Hello(props) {
	return (
		<>
			<h1>Hello, {props.name}</h1>
			<h1>Hello, {props.name}</h1>
			<h1>Hello, {props.name}</h1>
		</>
	);
}
```

# Higher order component

Higher order component is a function that takes a component and returns a new component. This way we can reuse component logic

```tsx
function HocBox({title, message, children}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{message}</p>
      {children}
    </div>
  )
}

function Button() {
  return <button>Submit</button>
}


function App() {
  return (
    <>
      <h1>Hello world!</h1>
      <HocBox title={"Title 1"} message={"Message 1"}> <Button/> </HocBox>
      <HocBox title={"Title 1"} message={"Message 1"}> <Button/> </HocBox>
      <HocBox title={"Title 1"} message={"Message 1"}> <Button/> </HocBox>
    </>
  )
}
```

# Hooks

In 16.8 hooks were introduced. We can use state and other React features without writing a class.

```tsx
const App = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			App1
			<h1>{count}</h1>
			<button onClick={() => setCount((c) => c + 1)}>Count</button>
		</>
	);
};
```

# State

```tsx
const [isLoading, setIsloading] = useState(true);

useEffect(() => {
	const timer = setTimeout(() => {
		setIsloading(false);
	}, 100);
	return () => clearTimeout(timer);
});
```

# Context

Data can be passed parent to child (top to down) components via props. But when the data is required by many child components such as UI theme then using props can be cumbersome. In this case we can use context to share data between components without passing props. When possible we need to avoid using context, because it makes more difficult to resue components. If you want to avoid passing props through many levels the pass down the component itself.


```tsx
const ThemeContext = createContext(null);

const App = () => {
	const [theme, setTheme] = useState("#f0eded");
	return (
		<div>
			<ThemeContext.Provider value={theme}>
				<Button />
				<br />
				<br />
				<input
					type="checkbox"
					checked={theme === "#7d7d7d"}
					onChange={(e) => {
						setTheme(e.target.checked ? "#7d7d7d" : "#f0eded");
					}}
				/>
			</ThemeContext.Provider>
		</div>
	);
};

function Button() {
	const theme = useContext(ThemeContext);
	return <button style={{ backgroundColor: theme }}>Log In</button>;
}
```

[Source](https://beta.reactjs.org/apis/react/useContext)

# React performance

## Memo

[Source](https://reactjs.org/docs/react-api.html#reactmemo)

## Code spliting

[Source](https://reactjs.org/docs/code-splitting.html)

# Suspense and Error Boundaries
 
[Suspense and Error Boundaries](https://github.com/lifeparticle/JS-Cheatsheet/tree/main/react/react-error-boundaries)

# React router dom

[Learn React Router v6 In 45 Minutes](https://www.youtube.com/watch?v=Ul3y1LXxzdU)

# Miscellaneous

1. public/manifest.json

[Source](https://developer.mozilla.org/en-US/docs/Web/Manifest)

# Books
1. [React the road to enterprise](https://theroadtoenterprise.com/books/react-the-road-to-enterprise)
2. https://www.patterns.dev/

# My React Articles
1. [How to Deploy a React Application to Render](https://javascript.plainenglish.io/how-to-deploy-a-react-application-to-render-611ef3aca84a)
2. [How to Create a React Application With Deno](https://medium.com/geekculture/how-to-create-a-react-application-with-deno-4518db39c5ab)
3. [How to Create a React Application Using Vite](https://javascript.plainenglish.io/how-to-create-a-react-application-using-vite-cc3e9910a3f3)
4. [How To Create Tauri Desktop Applications Using React](https://medium.com/geekculture/how-to-create-tauri-desktop-applications-using-react-8541e42b1f22)
5. [How To Show Data Using Infinite Scroll in React](https://towardsdatascience.com/how-to-show-data-using-infinite-scroll-in-react-7c7c8540d5b4)
6. [How to Deploy a React Application to Netlify](https://javascript.plainenglish.io/how-to-deploy-a-react-application-to-netlify-e120d2de2654)
7. [How to Deploy a React Application to Cloudflare Pages](https://javascript.plainenglish.io/how-to-deploy-a-react-application-to-cloudflare-pages-e334466109c3)

# Netlify
1. https://create-react-app.dev/docs/deployment/#netlify

# Render
1. https://render.com/docs/deploy-create-react-app#using-client-side-routing

# Tools

1. https://www.codux.com/

# Blogs

1. [taniarascia](https://www.taniarascia.com/blog)
2. [Overreacted](https://overreacted.io/)

# Courses

1. [Reactsimplified](https://reactsimplified.com/)
2. [Useeffect](https://useeffect.dev/)
3. [Epicreact](https://epicreact.dev/)
4. [Fireship](https://fireship.io/pro)

# Resources
1. [Bug: useEffect runs twice on component mount (StrictMode, NODE_ENV=development)](https://github.com/facebook/react/issues/24502)
2. [Roadmap.sh/react](https://roadmap.sh/react)
3. [spa-fatigue](https://macwright.com/2020/05/10/spa-fatigue.html)
4. [how-to-build-your-first-saas](https://www.freecodecamp.org/news/how-to-build-your-first-saas/)
5. [awesome-react](https://github.com/enaqx/awesome-react)
6. [storybook](https://storybook.js.org/)
7. [React statuscode](https://react.statuscode.com/)
8. [React.js: The Documentary](https://www.youtube.com/watch?v=8pDqJVdNa44)
9. http://swannodette.github.io/2013/12/17/the-future-of-javascript-mvcs/
10. https://archive.jlongster.com/Removing-User-Interface-Complexity,-or-Why-React-is-Awesome
