# Setup

1. Create a tenant or use an existing  one
2. Create an application
<img src="https://user-images.githubusercontent.com/1612112/200739936-8e4f5ccc-81fd-4510-9ef2-111ea04c72c0.png" height=300 width=400 />

3. Click the settings tab and fill in the following values

- 3.1 Allowed Callback URLs: `http://localhost:3000`
- 3.2 Allowed Logout URLs: `http://localhost:3000`
- 3.3 Allowed Web Origins: `http://localhost:3000`
- 3.4 Scroll down and click save changes

4. Open the React project, and create a `.env` file under the project directory:

- 4.1 Inside the `.env` file 

```
REACT_APP_AUTH0_DOMAIN=
REACT_APP_AUTH0_CLIENT_ID=
```

5. Install the follwing auth0 SDK and react router dom

```shell
npm install @auth0/auth0-react
yarn add @auth0/auth0-react

yarn add react-router-dom
```

6. Create the file `src/auth/auth0-provider-with-history.js` and populate with the following:

```tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
	const domain = process.env.REACT_APP_AUTH0_DOMAIN;
	const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

	const navigate = useNavigate();

	const onRedirectCallback = (appState) => {
		navigate((appState && appState.returnTo) || window.location.pathname);
	};

	return (
		<Auth0Provider
			domain={domain}
			clientId={clientId}
			redirectUri={window.location.origin}
			onRedirectCallback={onRedirectCallback}
		>
			{children}
		</Auth0Provider>
	);
};

export default Auth0ProviderWithHistory;
```

# Resources
1. [complete-guide-to-react-user-authentication](https://auth0.com/blog/complete-guide-to-react-user-authentication/)
2. [React Authentication in 5 Minutes](https://www.youtube.com/watch?v=aRBgA8N0ioM)
3. [cra-react-router](https://github.com/auth0/auth0-react/tree/master/examples/cra-react-router)
