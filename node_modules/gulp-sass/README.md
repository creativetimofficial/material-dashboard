# gulp-sass ![npm package version](https://img.shields.io/npm/v/gulp-sass?label=npm%20version) [![Build Status](https://img.shields.io/github/workflow/status/dlmanning/gulp-sass/CI/master)](https://github.com/dlmanning/gulp-sass/actions?query=workflow%3ACI+branch%3Amaster) [![Join the chat at https://gitter.im/dlmanning/gulp-sass](https://img.shields.io/gitter/room/dlmanning/gulp-sass?color=%2346b091&label=chat&logo=gitter)](https://gitter.im/dlmanning/gulp-sass) ![Node.js support](https://img.shields.io/node/v/gulp-sass)

Sass plugin for [Gulp](https://github.com/gulpjs/gulp).

**_Before filing an issue, please make sure you have [updated to the latest version of `gulp-sass`](https://github.com/dlmanning/gulp-sass/wiki/Update-to-the-latest-Gulp-Sass) and have gone through our [Common Issues and Their Fixes](https://github.com/dlmanning/gulp-sass/wiki/Common-Issues-and-Their-Fixes) section._**

**Migrating your existing project to version 5? Please read our (short!) [migration guide](#migrating-to-version-5).**

## Support

Only [Active LTS and Current releases](https://github.com/nodejs/Release#release-schedule) are supported.

## Installation

To use `gulp-sass`, you must install both `gulp-sass` itself *and* a Sass compiler. `gulp-sass` supports both [Dart Sass][] and [Node Sass][], although Node Sass is [deprecated](https://sass-lang.com/blog/libsass-is-deprecated). We recommend that you use Dart Sass for new projects, and migrate Node Sass projects to Dart Sass when possible.

Whichever compiler you choose, it's best to install these as dev dependencies:

```sh
npm install sass gulp-sass --save-dev
```

### Importing it into your project

`gulp-sass` must be imported into your gulpfile, where you provide it the compiler of your choice. To use `gulp-sass` in a CommonJS module (which is most Node.js environments), do something like this:

```js
const sass = require('gulp-sass')(require('sass'));
```

To use `gulp-sass` in an ECMAScript module (which is supported in newer Node.js 14 and later), do something like this:

```js
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
```

## Usage

**Note:** These examples are written for CommonJS modules and assume you're using Gulp 4. For examples that work with Gulp 3, [check the docs for an earlier version of `gulp-sass`](https://github.com/dlmanning/gulp-sass/tree/v4.1.1).

`gulp-sass` must be used in a Gulp task. Your task can call `sass()` (to asynchronously render your CSS), or `sass.sync()` (to synchronously render your CSS). Then, export your task with the `export` keyword. We'll show some examples of how to do that.

**⚠️ Note:** When using Dart Sass, **synchronous rendering is twice as fast as asynchronous rendering**. The Sass team is exploring ways to improve asynchronous rendering with Dart Sass, but for now, you will get the best performance from `sass.sync()`. If performance is critical, you can use `node-sass` instead, but bear in mind that `node-sass` may not support modern Sass features you rely on.

### Render your CSS

To render your CSS with a build task, then watch your files for changes, you might write something like this:

```js
'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
};

exports.buildStyles = buildStyles;
exports.watch = function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
};
```

With synchronous rendering, that Gulp task looks like this:

```js
function buildStyles() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
};
```

### Render with options

To change the final output of your CSS, you can pass an options object to your renderer. `gulp-sass` supports [Node Sass's render options](https://github.com/sass/node-sass#options), with two unsupported exceptions:

- The `data` option, which is used by `gulp-sass` internally.
- The `file` option, which has undefined behavior that may change without notice.

For example, to compress your CSS, you can call `sass({outputStyle: 'compressed'}`. In the context of a Gulp task, that looks like this:

```js
function buildStyles() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
};

exports.buildStyles = buildStyles;
```

Or this for synchronous rendering:

```js
function buildStyles() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
};

exports.buildStyles = buildStyles;
```

### Include a source map

`gulp-sass` can be used in tandem with [`gulp-sourcemaps`](https://github.com/gulp-sourcemaps/gulp-sourcemaps) to generate source maps for the Sass-to-CSS compilation. You will need to initialize `gulp-sourcemaps` _before_ running `gulp-sass`, and write the source maps after.

```js
const sourcemaps = require('gulp-sourcemaps');

function buildStyles() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
}

exports.buildStyles = buildStyles;
```

By default, `gulp-sourcemaps` writes the source maps inline, in the compiled CSS files. To write them to a separate file, specify a path relative to the `gulp.dest()` destination in the `sourcemaps.write()` function.

```js
const sourcemaps = require('gulp-sourcemaps');

function buildStyles() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./css'));
};

exports.buildStyles = buildStyles;
```

<h2 id="migrating-to-version-5">Migrating to version 5</h2>

`gulp-sass` version 5 requires Node.js 12 or later, and introduces some breaking changes. Additionally, changes in Node.js itself mean that Node fibers can no longer be used to speed up Dart Sass in Node.js 16.

### Setting a Sass compiler

As of version 5, `gulp-sass` _does not include a default Sass compiler_, so you must install one (either `node-sass` or `sass`) along with `gulp-sass`.

```sh
npm install sass gulp-sass --save-dev
```

Then, you must explicitly set that compiler in your gulpfille. Instead of setting a `compiler` prop on the `gulp-sass` instance, you pass the compiler into a function call when instantiating `gulp-sass`.

These changes look something like this:

```diff
- const sass = require('gulp-sass'));
- const compiler = require('sass');
- sass.compiler = compiler;
+ const sass = require('gulp-sass')(require('sass'));
```

If you're migrating an ECMAScript module, that'll look something like this:

```diff
import dartSass from 'sass';
- import sass from 'gulp-sass';
- sass.compiler = dartSass;

import dartSass from 'sass';
+ import gulpSass from 'gulp-sass';
+ const sass = gulpSass(dartSass);
```

### What about fibers?

We used to recommend Node fibers as a way to speed up asynchronous rendering with Dart Sass. Unfortunately, [Node fibers are discontinued](https://sass-lang.com/blog/node-fibers-discontinued) and will not work in Node.js 16. The Sass team is exploring its options for future performance improvements, but for now, you will get the best performance from `sass.sync()`.

## Issues

`gulp-sass` is a light-weight wrapper around either [Dart Sass][] or [Node Sass][] (which in turn is a Node.js binding for [LibSass][]. Because of this, the issue you're having likely isn't a `gulp-sass` issue, but an issue with one those projects or with [Sass][] as a whole.

If you have a feature request/question about how Sass works/concerns on how your Sass gets compiled/errors in your compiling, it's likely a Dart Sass or LibSass issue and you should file your issue with one of those projects.

If you're having problems with the options you're passing in, it's likely a Dart Sass or Node Sass issue and you should file your issue with one of those projects.

We may, in the course of resolving issues, direct you to one of these other projects. If we do so, please follow up by searching that project's issue queue (both open and closed) for your problem and, if it doesn't exist, filing an issue with them.

[Dart Sass]: https://sass-lang.com/dart-sass
[LibSass]: https://sass-lang.com/libsass
[Node Sass]: https://github.com/sass/node-sass
[Sass]: https://sass-lang.com
