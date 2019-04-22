<h1 align="center">eslint-plugin-prefer-type-alias</h1>

<p align="center">
  <a href="https://github.com/otofu-square/eslint-plugin-prefer-type-alias/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/eslint-plugin-prefer-type-alias.svg?style=flat-square" alt="GitHub license" /></a>
  <a href="https://www.npmjs.com/package/eslint-plugin-prefer-type-alias"><img src="https://img.shields.io/npm/v/eslint-plugin-prefer-type-alias.svg?style=flat-square" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/eslint-plugin-prefer-type-alias"><img src="https://img.shields.io/npm/dm/eslint-plugin-prefer-type-alias.svg?style=flat-square" alt="NPM Downloads" /></a>
  <a href="https://travis-ci.com/otofu-square/eslint-plugin-prefer-type-alias" id="status-image-popup" title="Latest push build on default branch: " name="status-images" class="open-popup" data-ember-action="" data-ember-action-58="58"><img src="https://travis-ci.com/otofu-square/eslint-plugin-prefer-type-alias.svg?branch=master" alt="build:"></a>
</p>

## What's this?

Prefer a type alias over an interface declaration in TypeScript.

## Examples

```js
// correct
type A = { a: string };

type A = { a: string } & { b: number };

type A = { a: string } & B & C;

interface A extends B {
  a: string;
}
```

```js
// incorrect
interface A {
  a: string;
}
```

## Getting started

### Install

```sh
$ yarn add -D @typescript-eslint/eslint-plugin eslint-plugin-prefer-type-alias
# or
$ npm i -D @typescript-eslint/eslint-plugin eslint-plugin-prefer-type-alias
```

### Edit `.eslintrc.js`

```js
module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prefer-type-alias/recommended"
  ]
};
```

## LICENSE

MIT
