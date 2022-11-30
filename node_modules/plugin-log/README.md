# plugin-log

[![Build Status](https://travis-ci.org/stevelacy/plugin-log.png?branch=master)](https://travis-ci.org/stevelacy/plugin-log)
[![NPM version](https://badge.fury.io/js/plugin-log.png)](http://badge.fury.io/js/plugin-log)

> Legacy logging for gulp plugins - gulp-util.log

## Information

<table>
<tr>
<td>Package</td><td>plugin-log</td>
</tr>
<tr>
<td>Description</td>
<td>Legacy logging for gulp plugins - gulp-util.log</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.9</td>
</tr>
</table>

## Usage

#### Replaces all `gulp-util.log()`

#### Install

```sh
$ npm install --save-dev plugin-log
```

## Examples

```js
var log = require('plugin-log');

log('Ran file: ' + log.colors.cyan(path.basename(file.path)));


```


## LICENSE [MIT](LICENSE)
