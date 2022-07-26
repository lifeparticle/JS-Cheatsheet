### Move a module from dependencies to devDependencies :

```shell
yarn remove typescript && yarn add typescript --dev
```

### Move a module from devDependencies to dependencies :

```shell
yarn remove typescript --dev && yarn add typescript
```
