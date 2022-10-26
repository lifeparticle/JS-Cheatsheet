# React Component Lifecycle Using Class

## Mounting

1. constructor()
2. static getDerivedStateFromProps()
3. render()
4. componentDidMount()

## Updating

1. static getDerivedStateFromProps()
2. shouldComponentUpdate()
3. render()
4. getSnapshotBeforeUpdate()
5. componentDidUpdate()

## Unmounting

1. componentWillUnmount()

# React Component Lifecycle Using Hooks

## Mounting

1. Lazy initialization -> The function you pass to `useState`, which will be called when the component is initially rendered
2. Render
3. React updates DOM
4. Cleanup layoutEffects
5. Run useLayoutEffect
6. Browser paints screen
7. Cleanup useEffect
8. Run useEffect

## Updating

1. Render
2. React updates DOM
3. Cleanup layoutEffects
4. Run useLayoutEffect
5. Browser paints screen
6. Cleanup useEffect
7. Run useEffect

## Unmounting

1. Cleanup layoutEffects
2. Cleanup useEffect


[Source](https://github.com/donavon/hook-flow)
