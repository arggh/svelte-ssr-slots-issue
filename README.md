### SSR troubles with slots

Including named slots with a component that exposes variables breaks in SSR, but not in client.

### How to run

```
$ git clone
$ yarn install
$ yarn build
$ node build/index.js
```

### How it will break

`ReferenceError: pageNum is not defined`