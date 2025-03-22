function RandomizedSet() {
	this.arr = [];
	this.map = new Map();
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
	if (this.map.has(val)) {
		return false;
	}

	this.arr.push(val);
	this.map.set(val, this.arr.length - 1);

	return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
	if (!this.map.has(val)) {
		return false;
	}

	const index = this.map.get(val);
	const lastIndex = this.arr.length - 1;
	const lastValue = this.arr[lastIndex];

	this.arr[index] = lastValue;
	this.map.set(lastValue, index);

	this.map.delete(val);
	this.arr.pop();

	return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
	const randIndex = Math.floor(Math.random() * this.arr.length);

	return this.arr[randIndex];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
