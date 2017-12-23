# XComponent Dev Center

## Prerequisites

### NPM

https://nodejs.org/

### Angular CLI

```
npm install -g @angular/cli
```

## Build

```
ng build
```

## Run

```
ng serve
```

Once started, you can access the application from http://localhost:4200

# Release

Release a new version of XComponent Dev Center requires the `angular-cli-ghpages`. 
It can be installed with the following command :

```
npm i -g angular-cli-ghpages
```

The following command will build and upload the project to Github Pages :

```
ng build --prod --base-href "https://xcomponent.github.io/xcomponent-dev-center/"
angular-cli-ghpages
```