# p-queue [![Build Status](https://travis-ci.org/sindresorhus/p-queue.svg?branch=master)](https://travis-ci.org/sindresorhus/p-queue)

> Promise queue with concurrency control

Useful for rate-limiting async operations. For example, when interacting with a REST API or when doing CPU/memory intensive tasks.


## Install

```
$ npm install --save p-queue
```


## Usage

Here we run only one promise at the time. For example, set `concurrency` to 4 to run four promises at the time.

```js
const PQueue = require('p-queue');
const got = require('got');

const queue = new PQueue({concurrency: 1});

queue.add(() => got('sindresorhus.com')).then(() => {
	console.log('Done: sindresorhus.com');
});

queue.add(() => got('ava.li')).then(() => {
	console.log('Done: ava.li');
});

getUnicornTask().then(task => queue.add(task)).then(() => {
	console.log('Done: Unicorn task');
});
```


## API

### PQueue([options])

Returns a new `queue` instance.

#### options

Type: `Object`

##### concurrency

Type: `number`<br>
Default: `Infinity`<br>
Minimum: `1`

Concurrency limit.

##### queueClass

Type: `Function`

Class with a `enqueue` and `dequeue` method, and a `size` getter. See the [Custom QueueClass](#custom-queueclass) section.

### queue

`PQueue` instance.

#### .add(fn, [options])

Returns the promise returned by calling `fn`.

##### fn

Type: `Function`

Promise-returning/async function.

#### options

Type: `Object`

##### priority

Type: `number`<br>
Default: `0`

Priority of operation. Operations with greater priority will be scheduled first.

#### .addAll(fns, [options])

Same as `.add`, but accepts array of async functions and returns promise, that resolves when all async functions are resolved.

#### .onEmpty()

Returns a promise that settles when the queue becomes empty.

Can be called multiple times. Useful if you for example add additional items at a later time.

#### .clear()

Clear the queue.

#### .size

Size of the queue.

#### .pending

Number of pending promises.


## Advanced example

A more advanced example to help you understand the flow.

```js
const delay = require('delay');
const PQueue = require('p-queue');

const queue = new PQueue({concurrency: 1});

delay(200).then(() => {
	console.log(`8. Pending promises: ${queue.pending}`);
	//=> '8. Pending promises: 0'

	queue.add(() => Promise.resolve('🐙')).then(console.log.bind(null, '11. Resolved'));

	console.log('9. Added 🐙');

	console.log(`10. Pending promises: ${queue.pending}`);
	//=> '10. Pending promises: 1'

	queue.onEmpty().then(() => {
		console.log('12. Queue is empty again');
	});
});

queue.add(() => Promise.resolve('🦄')).then(console.log.bind(null, '5. Resolved'));
console.log('1. Added 🦄');

queue.add(() => Promise.resolve('🐴')).then(console.log.bind(null, '6. Resolved'));
console.log('2. Added 🐴');

queue.onEmpty().then(() => {
	console.log('7. Queue is empty');
});

console.log(`3. Queue size: ${queue.size}`);
//=> '3. Queue size: 1`
console.log(`4. Pending promises: ${queue.pending}`);
//=> '4. Pending promises: 1'
```

```
$ node example.js
1. Added 🦄
2. Added 🐴
3. Queue size: 1
4. Pending promises: 1
5. Resolved 🦄
6. Resolved 🐴
7. Queue is empty
8. Pending promises: 0
9. Added 🐙
10. Pending promises: 1
11. Resolved 🐙
12. Queue is empty again
```


## Custom QueueClass

For implementing more complex scheduling policies, you can provide a QueueClass in the options:

```js
class QueueClass {
	constructor() {
		this._queue = [];
	}
	enqueue(run, options) {
		this._queue.push(run);
	}
	dequeue() {
		return this._queue.shift();
	}
	get size() {
		return this._queue.length;
	}
}
```

`p-queue` will call corresponding methods to put and get operations from this queue.


## Related

- [p-limit](https://github.com/sindresorhus/p-limit) - Run multiple promise-returning & async functions with limited concurrency
- [p-throttle](https://github.com/sindresorhus/p-throttle) - Throttle promise-returning & async functions
- [p-debounce](https://github.com/sindresorhus/p-debounce) - Debounce promise-returning & async functions
- [p-all](https://github.com/sindresorhus/p-all) - Run promise-returning & async functions concurrently with optional limited concurrency
- [More…](https://github.com/sindresorhus/promise-fun)


## Created by

- [Sindre Sorhus](https://github.com/sindresorhus)
- [Vsevolod Strukchinsky](https://github.com/floatdrop)


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
