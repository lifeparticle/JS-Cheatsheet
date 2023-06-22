```shell
mkdir sb-rollup
cd sb-rollup
npm init

# package name: (sb-rollup)
# version: (1.0.0)
# description: sb-rollup
# entry point: (index.js)
# test command:
# git repository:
# keywords:
# author: MZ
# license: (ISC) MIT

npm install --save-dev react react-dom @types/react typescript
npx tsc --init
npx sb init

mkdir components
cd components
touch index.ts
```

Add the following config inside the `package.json` file.

```json
"peerDependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
}
```
