# my-4th-firebase

## Refer sites

- <https://devsakaso.com/nuxt-firebase-installation/>
- <https://firebase.nuxtjs.org/>
- <https://deha.co.jp/magazine/nuxt-js/>

## node.js version

```bash
nvm use 12
```

## Create PJ

#### Web App

```bash
npx create-nuxt-app webapp

create-nuxt-app v4.0.0
✨  Generating Nuxt.js project in front
? Project name: front
? Programming language: JavaScript
? Package manager: Npm
? UI framework: Bootstrap Vue
? Nuxt.js modules: Progressive Web App (PWA)
? Linting tools: ESLint
? Testing framework: Jest
? Rendering mode: Single Page App
? Deployment target: Server (Node.js hosting)
? Development tools: jsconfig.json (Recommended for VS Code if you're not using typescript)
? Continuous integration: None
? Version control system: Git
```

## Install firebase

```
npm install firebase
npm install @nuxtjs/firebase --save

```


## Create New Firebase Project

Firebase Console
 -> New Project
   -> my-4th-firebase
 -> Add WebApp
   -> MyWebApp -> Entry
     -> SDK : npm -> Console

## config firebase

plugins/firebase.js(API OPEN OK)
```
```

### generate static page

```bash
npm run generate
```

### init firebase

```bash
$ firebase init
? Please select an option: Use an existing project
? Select a default Firebase project for this directory: my-4th-firebase (my-4th-firebase)
i  Using project my-4th-firebase (my-4th-firebase)

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? public
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? No
```

```bash
$ firebase deploy
...
Project Console: https://console.firebase.google.com/project/my-4th-firebase/overview
Hosting URL: https://my-4th-firebase.web.app
```

## functon

```
npm install --save plugins/firebase
```

## firebase functions


```bash
$ firebase init
...
=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add, 
but for now we'll just set up a default project.

? Please select an option: Use an existing project
? Select a default Firebase project for this directory: my-4th-firebase (my-4th-firebase)
i  Using project my-4th-firebase (my-4th-firebase)

=== Functions Setup

A functions directory will be created in your project with sample code
pre-configured. Functions can be deployed with firebase deploy.


? What language would you like to use to write Cloud Functions? JavaScript
? Do you want to use ESLint to catch probable bugs and enforce style? No
✔  Wrote functions/package.json
✔  Wrote functions/index.js
✔  Wrote functions/.gitignore
? Do you want to install dependencies with npm now? Yes
...
```

- index.js
```js
const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
```

- functionsのアカウントをアップグレードしておく（従量制・Blazeプラン)

```
$ firebase deploy
...
✔  functions[helloWorld(asia-northeast1)] Successful create operation.
Function URL (helloWorld(asia-northeast1)): https://asia-northeast1-my-4th-firebase.cloudfunctions.net/helloWorld
i  functions: cleaning up build files...

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/my-4th-firebase/overview
```

## axios

- https://nodejs.kimama-it.blog/nuxtjs%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6api%E5%91%BC%E3%81%B3%E5%87%BA%E3%81%97%E3%81%AE%E5%87%A6%E7%90%86%E3%82%92%E8%A1%8C%E3%81%A3%E3%81%A6%E3%81%BF%E3%82%8B/#st-toc-h-1

```
npm install --save axios
```