'use strict';

// Port of lower_bound from http://en.cppreference.com/w/cpp/algorithm/lower_bound
// Used to compute insertion index to keep queue sorted after insertion
function lowerBound(array, value, comp) {
	let first = 0;
	let count = array.length;

	while (count > 0) {
		const step = (count / 2) | 0;
		let it = first + step;

		if (comp(array[it], value) <= 0) {
			first = ++it;
			count -= step + 1;
		} else {
			count = step;
		}
	}

	return first;
}

class PriorityQueue {
	constructor() {
		this._queue = [];
	}
	enqueue(run, opts) {
		opts = Object.assign({
			priority: 0
		}, opts);

		const element = {priority: opts.priority, run};

		if (this.size && this._queue[this.size - 1].priority >= opts.priority) {
			this._queue.push(element);
			return;
		}

		const index = lowerBound(this._queue, element, (a, b) => b.priority - a.priority);
		this._queue.splice(index, 0, element);
	}
	dequeue() {
		return this._queue.shift().run;
	}
	get size() {
		return this._queue.length;
	}
}

class PQueue {
	constructor(opts) {
		opts = Object.assign({
			concurrency: Infinity,
			queueClass: PriorityQueue
		}, opts);

		if (opts.concurrency < 1) {
			throw new TypeError('Expected `concurrency` to be a number from 1 and up');
		}

		this.queue = new opts.queueClass(); // eslint-disable-line new-cap
		this._queueClass = opts.queueClass;
		this._pendingCount = 0;
		this._concurrency = opts.concurrency;
		this._resolveEmpty = () => {};
	}
	_next() {
		this._pendingCount--;

		if (this.queue.size > 0) {
			this.queue.dequeue()();
		} else {
			this._resolveEmpty();
		}
	}
	add(fn, opts) {
		return new Promise((resolve, reject) => {
			const run = () => {
				this._pendingCount++;

				fn().then(
					val => {
						resolve(val);
						this._next();
					},
					err => {
						reject(err);
						this._next();
					}
				);
			};

			if (this._pendingCount < this._concurrency) {
				run();
			} else {
				this.queue.enqueue(run, opts);
			}
		});
	}
	addAll(fns, opts) {
		return Promise.all(fns.map(fn => this.add(fn, opts)));
	}
	clear() {
		this.queue = new this._queueClass(); // eslint-disable-line new-cap
	}
	onEmpty() {
		return new Promise(resolve => {
			const existingResolve = this._resolveEmpty;
			this._resolveEmpty = () => {
				existingResolve();
				resolve();
			};
		});
	}
	get size() {
		return this.queue.size;
	}
	get pending() {
		return this._pendingCount;
	}
}

module.exports = PQueue;
