# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.1.0"></a>
# [1.1.0](https://github.com/slushjs/gulp-install/compare/v1.0.1...v1.1.0) (2017-03-23)


### Features

* add callback support (closes [#17](https://github.com/slushjs/gulp-install/issues/17) [#31](https://github.com/slushjs/gulp-install/issues/31)) ([2e58f84](https://github.com/slushjs/gulp-install/commit/2e58f84))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/slushjs/gulp-install/compare/v1.0.0...v1.0.1) (2017-03-23)


### Bug Fixes

* allow spaces in commands (fixes [#39](https://github.com/slushjs/gulp-install/issues/39)) ([1b7c6d5](https://github.com/slushjs/gulp-install/commit/1b7c6d5))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/slushjs/gulp-install/compare/v0.6.0...v1.0.0) (2017-03-23)


### Bug Fixes

* add support for Typings (fixes [#37](https://github.com/slushjs/gulp-install/issues/37)) ([07276a6](https://github.com/slushjs/gulp-install/commit/07276a6))
* limit concurrency to 1 per command, also pass args as is (fixes [#38](https://github.com/slushjs/gulp-install/issues/38) and [#45](https://github.com/slushjs/gulp-install/issues/45)) ([d084aa0](https://github.com/slushjs/gulp-install/commit/d084aa0))


### Features

* add support for composer install (fixes [#47](https://github.com/slushjs/gulp-install/issues/47)) ([02ad620](https://github.com/slushjs/gulp-install/commit/02ad620))
* add support for running any command for any file (fixes [#23](https://github.com/slushjs/gulp-install/issues/23), [#42](https://github.com/slushjs/gulp-install/issues/42)) (closes [#43](https://github.com/slushjs/gulp-install/issues/43)) ([1366fc9](https://github.com/slushjs/gulp-install/commit/1366fc9))
* add support for settings args per command (closes [#46](https://github.com/slushjs/gulp-install/issues/46), [#33](https://github.com/slushjs/gulp-install/issues/33)) ([4c9ff4f](https://github.com/slushjs/gulp-install/commit/4c9ff4f))


### BREAKING CHANGES

* args are passed as is and not prepended with dashes anymore. Also the code uses ES2015 syntax and requires at least NodeJS v6 from now on.
