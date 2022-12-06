# Introduction

# Installation

```shell
yarn add --dev eslint
```

```shell
npx eslint --init
Need to install the following packages:
  @eslint/create-config
Ok to proceed? (y) y
√ How would you like to use ESLint? · style # To check syntax, find problems, and enforce code style       
√ What type of modules does your project use? · esm # JavaScript modules (import/export)
√ Which framework does your project use? · react # React
√ Does your project use TypeScript? · No / Yes # Yes
√ Where does your code run? · browser # Browser
√ How would you like to define a style for your project? · guide # Use a popular style guide
√ Which style guide do you want to follow? · standard-with-typescript # Standard: https://github.com/standard/eslint-config-standard-with-typescript
√ What format do you want your config file to be in? · JSON # JSON
Checking peerDependencies of eslint-config-standard-with-typescript@latest
The config that you've selected requires the following dependencies:
```
Remove the following code block from package.json file.

```json
"eslintConfig": {
  "extends": [
    "react-app",
    "react-app/jest"
  ]
},
```

# Resources

1. 
