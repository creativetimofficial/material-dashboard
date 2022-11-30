# buffer-equal <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Return whether two buffers are equal.

## example

``` js
var bufferEqual = require('buffer-equal');

console.dir(bufferEqual(
    new Buffer([253,254,255]),
    new Buffer([253,254,255])
));
console.dir(bufferEqual(
    new Buffer('abc'),
    new Buffer('abcd')
));
console.dir(bufferEqual(
    new Buffer('abc'),
    'abc'
));
```

output:

```js
true
false
undefined
```

## methods

```js
var bufferEqual = require('buffer-equal');
```

bufferEqual(a, b)
-----------------

Return whether the two buffers `a` and `b` are equal.

If `a` or `b` is not a buffer, return `undefined`.

## install

With [npm](http://npmjs.org) do:

```
npm install buffer-equal
```

## license

MIT

[package-url]: https://npmjs.org/package/buffer-equal
[npm-version-svg]: https://versionbadg.es/inspect-js/buffer-equal.svg
[deps-svg]: https://david-dm.org/inspect-js/buffer-equal.svg
[deps-url]: https://david-dm.org/inspect-js/buffer-equal
[dev-deps-svg]: https://david-dm.org/inspect-js/buffer-equal/dev-status.svg
[dev-deps-url]: https://david-dm.org/inspect-js/buffer-equal#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/buffer-equal.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/buffer-equal.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/buffer-equal.svg
[downloads-url]: https://npm-stat.com/charts.html?package=buffer-equal
[codecov-image]: https://codecov.io/gh/inspect-js/buffer-equal/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/inspect-js/buffer-equal/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/inspect-js/buffer-equal
[actions-url]: https://github.com/inspect-js/buffer-equal/actions
