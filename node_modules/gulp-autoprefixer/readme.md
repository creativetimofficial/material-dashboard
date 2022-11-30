# gulp-autoprefixer [![Build Status](https://travis-ci.org/sindresorhus/gulp-autoprefixer.svg?branch=master)](https://travis-ci.org/sindresorhus/gulp-autoprefixer)

> Prefix CSS with [Autoprefixer](https://github.com/postcss/autoprefixer)

*Issues with the output should be reported on the Autoprefixer [issue tracker](https://github.com/postcss/autoprefixer/issues).*


## Install

```
$ npm install --save-dev gulp-autoprefixer
```


## Usage

```js
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

exports.default = () => (
	gulp.src('src/app.css')
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(gulp.dest('dist'))
);
```


## API

### autoprefixer(options?)

#### options

Type: `object`

See the Autoprefixer [options](https://github.com/postcss/autoprefixer#options).


## Source Maps

Use [gulp-sourcemaps](https://github.com/gulp-sourcemaps/gulp-sourcemaps) like this:

```js
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');

exports.default = () => (
	gulp.src('src/**/*.css')
		.pipe(sourcemaps.init())
		.pipe(autoprefixer())
		.pipe(concat('all.css'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist'))
);
```


## Tip

If you use other PostCSS based tools, like `cssnano`, you may want to run them together using [`gulp-postcss`](https://github.com/postcss/autoprefixer#gulp) instead of `gulp-autoprefixer`. It will be faster, as the CSS is parsed only once for all PostCSS based tools, including Autoprefixer.
