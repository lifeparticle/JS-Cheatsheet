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

4.1 Inside the `.env` file 

```
REACT_APP_AUTH0_DOMAIN=
REACT_APP_AUTH0_CLIENT_ID=
```

5. Install the follwing auth0 SDK

```
npm install @auth0/auth0-react
yarn add @auth0/auth0-react
```


# Resources
1. [complete-guide-to-react-user-authentication](https://auth0.com/blog/complete-guide-to-react-user-authentication/)
