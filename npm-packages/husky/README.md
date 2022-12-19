# Introduction

Husky uses [git hooks](https://github.com/lifeparticle/Git-Cheatsheet/blob/master/README.md#git-hooks)

# Installation

```shell
npx husky-init && npm install       # npm
npx husky-init && yarn              # Yarn 1
yarn dlx husky-init --yarn2 && yarn # Yarn 2+
pnpm dlx husky-init && pnpm install # pnpm
```

[Source](https://typicode.github.io/husky/#/)

## React, Husky, Lint-staged, Es-lint, Prettier, Eslint-config-prettier, Stylelint and Stylelint-config-prettier-scss

```shell
# create a react app called react-husky with typescript
yarn create react-app react-husky --template typescript
```

```shell
# create a folder called .husky with pre-commit hook script
npx husky-init && yarn
```

The abvoe commands should generate the following code inside the `package.json` file:

`package.json`

```json
{
  "scripts": {
    "prepare": "husky install"
  }
}
```

```shell
yarn add --dev lint-staged
```

`.husky\pre-commit`

```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged && yarn test --watchAll=false
```

```shell
yarn add --dev eslint
npx eslint --init
```

```shell
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

Remove the following code block from `package.json` file.

```json
"eslintConfig": {
  "extends": [
    "react-app",
    "react-app/jest"
  ]
},
```

Add the following code block inside the `package.json` file to automatically fix problems.

```json 
"lint-staged": {
  "*.{js,ts,tsx}": "eslint --fix"
}
```

[Source](https://eslint.org/docs/latest/user-guide/getting-started)

```shell
yarn add --dev --exact prettier
```

`.prettierrc.json`

```json
{
	"tabWidth": 4,
	"useTabs": true,
	"bracketSpacing": true,
	"semi": true
}
```

[Source](https://prettier.io/docs/en/index.html)

Turns off all rules that are unnecessary or might conflict with Prettier.

```shell
yarn add --dev eslint-config-prettier
```

 Add `prettier` to the `extends` array inside the .eslintrc.* file. Make sure to put it last, so it gets the chance to override other configs.
 
 ```json
{
  "extends": [
    "some-other-config-you-use",
    "prettier"
  ]
}
```

[Source](https://github.com/prettier/eslint-config-prettier)


`.eslintrc.json`

```json
{
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": ["plugin:react/recommended", "standard-with-typescript", "prettier"],
	"settings": {
		"react": {
			"version": "detect"
		}
	},
	"overrides": [],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module",
		"project": ["./tsconfig.json"]
	},
	"plugins": ["react", "unused-imports"],
	"rules": { "unused-imports/no-unused-imports": "error" }
}
```

`package.json`

```json
"scripts": {
	"start": "react-scripts start",
	"build": "react-scripts build",
	"test": "react-scripts test",
	"eject": "react-scripts eject",
	"prepare": "husky install",
	"lint": "eslint ./src/**/*.{js,jsx,ts,tsx,json}",
	"lint:fix": "eslint --fix ./src/**/*.{js,jsx,ts,tsx,json}",
	"prettier:check": "prettier --config ./.prettierrc --check ./src/**/*.{js,jsx,ts,tsx,json,css,scss,md}",
	"prettier:fix": "prettier --config ./.prettierrc --write ./src/**/*.{js,jsx,ts,tsx,json,css,scss,md} "
},
"lint-staged": {
	"./src/**/*.{js,jsx,ts,tsx}": "eslint --fix",
	"./src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": "prettier --write --ignore-unknown"
},
```

```shell
yarn add --dev stylelint stylelint-config-standard-scss
```

Turns off all CSS and SCSS rules that are unnecessary or might conflict with prettier.

```shell
yarn add --dev stylelint-config-prettier-scss
```

Append stylelint-config-prettier-scss to the extends array in your .stylelintrc.* file. Make sure to put it last, so it will override other configs.

`.stylelintrc.json`

```json
{
	"extends": [
		"stylelint-config-standard-scss",
		"stylelint-config-prettier-scss"
	]
}
```

[Source](https://www.npmjs.com/package/stylelint-config-prettier-scss)

# Additional

```shell
yarn add --dev eslint-plugin-unused-imports@latest
```

[Source](https://github.com/sweepline/eslint-plugin-unused-imports)

# Resources

1. 
