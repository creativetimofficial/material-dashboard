# gulp-install [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

> Automatically install npm, bower, tsd, typings, composer and pip packages/dependencies if the relative configurations are found in the gulp file stream respectively

<!-- MDTOC maxdepth:6 firsth1:2 numbering:0 flatten:0 bullets:1 updateOnSave:1 -->

- [Primary objective](#primary-objective)   
- [Installation](#installation)   
   - [For global use with slush](#for-global-use-with-slush)   
   - [For local use with gulp](#for-local-use-with-gulp)   
- [Usage](#usage)   
   - [In your `slushfile.js`:](#in-your-slushfilejs)   
   - [In your `gulpfile.js`:](#in-your-gulpfilejs)   
- [API](#api)   
   - [`inject([options] [, callback])`](#injectoptions-callback)   
- [Options](#options)   
   - [options.`<command>`](#optionscommand)   
   - [options.commands](#optionscommands)   
   - [options.production](#optionsproduction)   
   - [options.ignoreScripts](#optionsignorescripts)   
   - [options.noOptional](#optionsnooptional)   
   - [options.allowRoot](#optionsallowroot)   
   - [options.args](#optionsargs)   
- [License](#license)   

<!-- /MDTOC -->

| File Found | Command run|  
| --- | --- |  
|`package.json` | `npm install`|  
|`bower.json` | `bower install`|  
|`tsd.json` | `tsd reinstall --save`|  
|`typings.json` | `typings install`|  
|`composer.json` | `composer install`|  
|`requirements.txt` | `pip install -r requirements.txt`|  

It will run the command in the directory it finds the file, so if you have configs nested in a lower directory than your `slushfile.js`/`gulpfile.js`, this will still work.

**NOTE** since `v1.0.0` gulp-install requires at least NodeJS v6.

## Primary objective

Used as the install step when using [`slush`](https://www.npmjs.org/package/slush) as a Yeoman replacement.

## Installation

### For global use with slush

Install `gulp-install` as a dependency:

```shell
npm install --save gulp-install
```

### For local use with gulp

Install `gulp-install` as a development dependency:

```shell
npm install --save-dev gulp-install
```

## Usage

### In your `slushfile.js`:

```javascript
var install = require("gulp-install");

gulp.src(__dirname + '/templates/**')
  .pipe(gulp.dest('./'))
  .pipe(install());
```

### In your `gulpfile.js`:

```javascript
var install = require("gulp-install");

gulp.src(['./bower.json', './package.json'])
  .pipe(install());
```

## API

### `inject([options] [, callback])`

| Param | Type | Description |
| --- | --- | --- |
| options | `Object` | Any [option](#options) |
| callback | `Function` | Called when install is finished (not on failures) |

## Options

To not trigger the install use `--skip-install` as CLI parameter when running `slush` or `gulp`.

### options.`<command>`

**Type:** `Array|String|Object`

**Default:** `null`


Use this option(s) to specify any arguments for any command, e.g:

```javascript
var install = require("gulp-install");

gulp.src(__dirname + '/templates/**')
  .pipe(gulp.dest('./'))
  .pipe(install({
    npm: '--production', // Either a single argument as a string
    bower: {allowRoot: true}, // Or arguments as an object (transformed using Dargs: https://www.npmjs.com/package/dargs)
    pip: ['--target', '.'] // Or arguments as an array
  }));
```

### options.commands

**Type:** `Object`

**Default:** `null`


Use this option to add any command to be run for any file, e.g:

```javascript
var install = require("gulp-install");

gulp.src(__dirname + '/templates/**')
  .pipe(gulp.dest('./'))
  .pipe(install({
    commands: {
      'package.json': 'yarn'
    },
    yarn: ['--extra', '--args', '--here']
  }));
```

### options.production

**Type:** `Boolean`

**Default:** `false`


Set to `true` if `npm install` should be appended with the `--production` parameter when stream contains `package.json`.

**Example:**

```javascript
var install = require("gulp-install");

gulp.src(__dirname + '/templates/**')
  .pipe(gulp.dest('./'))
  .pipe(install({production: true}));  
```

### options.ignoreScripts

**Type:** `Boolean`

**Default:** `false`


Set to `true` if `npm install` should be appended with the `--ignore-scripts` parameter when stream contains `package.json`. Useful for skipping `postinstall` scripts with `npm`.

**Example:**

```javascript
var install = require("gulp-install");

gulp.src(__dirname + '/templates/**')
  .pipe(gulp.dest('./'))
  .pipe(install({ignoreScripts: true}));
```

### options.noOptional

**Type:** `Boolean`

**Default:** `false`

Set to `true` if `npm install` should be appended with the `--no-optional` parameter which will prevent optional dependencies from being installed.

**Example:**

```javascript
var install = require("gulp-install");

gulp.src(__dirname + '/templates/**')
  .pipe(gulp.dest('./'))
  .pipe(install({noOptional: true}));
```

### options.allowRoot

**Type:** `Boolean`

**Default:** `false`


Set to `true` if `bower install` should be appended with the `--allow-root` parameter when stream contains `bower.json`.

**Example:**

```javascript
var install = require("gulp-install");

gulp.src(__dirname + '/templates/**')
  .pipe(gulp.dest('./'))
  .pipe(install({allowRoot: true}));  
```

### options.args

**Type:** `Array or String`

**Default:** `undefined`


Specify additional arguments that will be passed to the install command(s).

**Example:**

```javascript
var install = require("gulp-install");

gulp.src(__dirname + '/templates/**')
  .pipe(gulp.dest('./'))
  .pipe(install({
      args: ['dev', '--no-shrinkwrap' ]} // npm install --dev --no-shrinkwrap
    ));  
```


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-install
[npm-image]: https://badge.fury.io/js/gulp-install.png

[travis-url]: http://travis-ci.org/slushjs/gulp-install
[travis-image]: https://secure.travis-ci.org/slushjs/gulp-install.png?branch=master

[depstat-url]: https://david-dm.org/slushjs/gulp-install
[depstat-image]: https://david-dm.org/slushjs/gulp-install.png
