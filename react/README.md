# Introduction

React is a JavaScript library for building composable user interfaces. React uses only one HTML file called `index.html` to load the entire application. That is why it's called a single page application. We can use [React Router](https://github.com/remix-run/react-router) to navigate between components.

# JSX

JSX (JavaScript XML) is used to describe the UI using React. It creates React elements.


```tsx
const element = <h1>Hello, world!</h1>;
```


# Props

```tsx

```

# Fragment

```tsx
<>
</>
```

# Higher order component

Higher order component us a function that takes a component and returns a new component

```tsx

```

# Hooks

```tsx

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

# React router dom

[Learn React Router v6 In 45 Minutes](https://www.youtube.com/watch?v=Ul3y1LXxzdU)

# Important things
1. [Bug: useEffect runs twice on component mount (StrictMode, NODE_ENV=development)](https://github.com/facebook/react/issues/24502)
2. [Roadmap.sh/react](https://roadmap.sh/react)


# Books
1. [React the road to enterprise](https://theroadtoenterprise.com/books/react-the-road-to-enterprise)
