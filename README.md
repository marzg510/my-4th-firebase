# my-4th-firebase

## Refer sites

- <https://devsakaso.com/nuxt-firebase-installation/>

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