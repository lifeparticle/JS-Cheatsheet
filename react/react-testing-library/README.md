```js
import {render, screen} from '@testing-library/react'

test('should show login form', () => {
	render(<Login />);
	// debug document
	screen.debug()
})
```
