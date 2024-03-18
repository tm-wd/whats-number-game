![project](https://img.shields.io/badge/project-TMX%20WNG-blue)

# What's the number game

![Size](https://img.shields.io/github/repo-size/tjmelo/whats-number-game) ![Version](https://img.shields.io/github/package-json/v/tjmelo/whats-number-game) ![Release](https://img.shields.io/github/v/release/tjmelo/whats-number-game) ![Last Commit](https://img.shields.io/github/last-commit/tjmelo/whats-number-game/main)
<!-- ![Passing](https://img.shields.io/github/actions/workflow/status/tjmelo/whats-number-game/checkout-ci.yml) -->

## Table of content

- [About app](#about-app)
- [Preview Screens](#preview-screens)
- [Project details](#project-details)
  - [CSS](#css)
  - [Build](#build)
  - [Simple Develop Process](#simple-develop-process)
  - [Docker Develop Process](#docker-develop-process)
  - [NPM Package](#npm-package)

# About app

### Interacting what's the number game

Simple game for choosing a number among several possibilities. Go ahead until found the correct number. Enjoy it!

Choose a number! If not correct, try again. It might be smaller or bigger in each attempt. Continue interacting until you get right!


# Preview Screens
Start app
![Preview](/public/img/What-s-number-screen-1.jpeg)
![Preview](/public/img/wng-screen.webm)


### Project Details

This app uses:

- [x] HTML
- [x] JavaScript
- [x] Typescript
- [ ] Redux
- [x] Babel
- [x] Sass
- [x] Webpack
- [x] Docker

## CSS

To compile CSS in the development process:

```sh
npm run css
```

## Tests

To generate suite tests:

```sh
npm test
```

## Build

To generate build:

```sh
npm run build
```

## Simple Develop Process

<!-- [![Tasks TMX Venus runner](https://github.com/tjmelo/whats-number-game/actions/workflows/checkout-ci.yml/badge.svg)](https://github.com/tjmelo/whats-number-game/actions/workflows/checkout-ci.yml) -->

Download the project

Clone or fork this repository

```sh
git clone https://github.com/tjmelo/whats-number-game.git

cd whats-number-game

git checkout -b develop

npm install && npm start
```

## Docker Develop Process

[![image-docker-ci](https://github.com/tjmelo/whats-number-game/actions/workflows/ghpckg-image-ci.yml/badge.svg)](https://github.com/tjmelo/whats-number-game/actions/workflows/ghpckg-image-ci.yml)

```sh
git clone https://github.com/tjmelo/whats-number-game.git

cd whats-number-game

docker compose up -d
```

Install from the command line

```
docker pull ghcr.io/tjmelo/tmx-wng:latest
```

or image in **Docker Hub** for optional download

```
docker pull tmwd/tmx-wng
```

Open the app on a browser http://localhost:3000

