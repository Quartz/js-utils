# Quartz JavaScript utilities

[![npm version](https://badge.fury.io/js/%40quartz%2Fjs-utils.svg)](https://www.npmjs.com/package/@quartz/js-utils)

A collection of reusable JavaScript utilities for Quartz products, with optional TypeScript support.

All functions are written in TypeScript and transpiled into ES2017 JavaScript (with type definitions).

## Installation

`npm i @quartz/js-utils`

## Usage

Import functions from the js-utils package, e.g.

`import { arrayFromRange, resizeWPImage } from '@quartz/js-utils'`

TypeScript hints are available if the file into which the functions are imported is a `.ts` or `.tsx` file.

## Contributing

Functions must be written in TypeScript whenever possible.

Export one function per file with a test suite (`.test.js`).

### Before opening a pull request

- Export any new functions to `src/index.ts`
- Add a test suite for any new functions
- Ensure tests pass (`npm t`)
- Increment the `package.json` version using `npm version`

## Deploying

Use `npm publish` to publish the package to npm. TypeScript will be built on publish (via `npm run build`).
