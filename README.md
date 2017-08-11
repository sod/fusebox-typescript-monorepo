```bash
git clone git@github.com:sod/fusebox-typescript-monorepo.git
cd fusebox-typescript-monorepo/app
npm install
node fust.js
```

Then open http://localhost:4444

Open console and see

```log
app.js:10 Uncaught TypeError: Cannot read property 'foo' of undefined
    at Number.<anonymous> (app.js:10)
    at c (app.js:35)
    at Function.r.import (app.js:35)
    at app.js:32
    at app.js:35

app.js:35 lib_a/src/foo does not provide a module
```

Couldn't import typescript file from typescript lib. It's actually in the build as `lib_a/src/foo.ts` but the does `require('lib_a/src/foo')` 
