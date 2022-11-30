# gulp-sass Changelog

## v5.0.0

**June 25, 2021**

<https://github.com/dlmanning/gulp-sass/releases/tag/v5.0.0>

## v4.1.1

**June 24, 2021**

<https://github.com/dlmanning/gulp-sass/releases/tag/v4.1.1>

## v4.1.0

**April 23, 2020**

<https://github.com/dlmanning/gulp-sass/releases/tag/v4.1.0>

## v4.0.2

**October 16, 2018**

<https://github.com/dlmanning/gulp-sass/releases/tag/v4.0.2>

## v4.0.1

**Apr 8, 2018**

<https://github.com/dlmanning/gulp-sass/releases/tag/v4.0.1>

## v4.0.0

**April 5, 2018**

<https://github.com/dlmanning/gulp-sass/releases/tag/v4.0.0>

## v3.2.1

**March 24, 2018**

<https://github.com/dlmanning/gulp-sass/releases/tag/v3.2.1>

## v3.2.0

**March 12, 2018**

<https://github.com/dlmanning/gulp-sass/releases/tag/v3.2.0>

## v3.1.0

**January 9, 2017**

<https://github.com/dlmanning/gulp-sass/releases/tag/v3.1.0>

## v3.0.0

**January 9, 2017**

<https://github.com/dlmanning/gulp-sass/releases/tag/v3.0.0>

## v2.3.2

**June 15, 2016**

<https://github.com/dlmanning/gulp-sass/releases/tag/v2.3.2>

## v2.3.1

**April 22, 2016**

<https://github.com/dlmanning/gulp-sass/releases/tag/v2.3.1>

## v2.3.0

**April 21, 2016**

<https://github.com/dlmanning/gulp-sass/releases/tag/v2.3.0>

## v2.3.0-beta.1

**February 4, 2016**

<https://github.com/dlmanning/gulp-sass/releases/tag/v2.3.0-beta.1>

## v2.2.0

**February 4, 2016**

<https://github.com/dlmanning/gulp-sass/releases/tag/v2.2.0>

## v2.1.0

**November 2, 2015**

<https://github.com/dlmanning/gulp-sass/releases/tag/v2.1.0>

## v2.1.0-beta

**September 21, 2015**

* **Change** Updated to `node-sass` 3.4.0-beta1

## v2.0.4

**July 15, 2015**

* **Fix** Relative file path now uses `file.relative` instead of arcane `split('/').pop` magic. Resolves lots of issues with source map paths.
* **Fix** Empty partials no longer copied to CSS folder

## v2.0.3

**June 27, 2015**

* **Fix** Empty partials are no longer copied to CSS folder

## v2.0.2

**June 25, 2015**

* **Fix** Error in watch stream preventing watch from continuing

## v2.0.1

**May 13, 2015**

* **Fix** Source maps now work as expected with Autoprefixer
* **Fix** Current file directory `unshift` onto includePaths stack so it's checked first
* **Fix** Error message returned is unformatted so as to not break other error handling (*i.e.* `gulp-notify`)

## v2.0.0

**May 6, 2015**

* **Change** Updated to `node-sass` 3.0.0

## v2.0.0-alpha.1

**March 26, 2015**

* **New** Added `renderSync` option that can be used through `sass.sync()`

### March 24, 2015

* **Change** Updated to `node-sass` 3.0.0-alpha.1
* **New** Added support for `gulp-sourcemaps` including tests
* **New** Added `.editorconfig` for development consistency
* **New** Added linting and test for said linting
* **Change** Updated the README
* **New** `logError` function to make streaming errors possible instead of breaking the stream

### 1.3.3

* updated to `node-sass` 2.0 (final)
* should now work with Node.js 0.12 and io.js

### 1.3.2

* fixed `errLogToConsole`

### 1.3.1

* bug fix

## Version 1.3.0

* Supports `node-sass` 2.0 (thanks laurelnaiad!)
