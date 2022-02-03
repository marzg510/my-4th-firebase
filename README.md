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

