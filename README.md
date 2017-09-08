# content-type-to-ext [![Build Status][build]](https://circleci.com/gh/bcherny/content-type-to-ext) [![npm]](https://www.npmjs.com/package/content-type-to-ext) [![mit]](https://opensource.org/licenses/MIT)

[build]: https://img.shields.io/circleci/project/bcherny/content-type-to-ext.svg?branch=master&style=flat-square
[npm]: https://img.shields.io/npm/v/content-type-to-ext.svg?style=flat-square
[mit]: https://img.shields.io/npm/l/content-type-to-ext.svg?style=flat-square

> Map Content-Type to file extension (and vice-versa)

## Installation

```sh
# Using Yarn:
yarn add content-type-to-ext

# Or, using NPM:
npm install content-type-to-ext --save
```

## Usage

```js
import { getContentType, getExtension } from 'content-type-to-ext'

getContentType('jpg')       // image/jpeg
getExtension('image/jpeg')  // jpg
```

## Tests

```sh
npm test
```

## License

MIT
