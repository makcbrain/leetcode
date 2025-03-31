/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */

const zeroCode = '0'.charCodeAt(0);
const nineCode = '9'.charCodeAt(0);

const isDigit = (value) => {
	if (value.length !== 1) {
		throw new Error('One symbol string is expected');
	}

	const code = value.charCodeAt(0);

	return code >= zeroCode && code <= nineCode;
};

/**
 * @param {string} str
 * @return {NestedInteger}
 */
const deserialize = (str) => {
	let i = 0;

	const skipWhitespace = () => {
		while (str[i] === ' ') {
			i++;
		}
	};

	const parseArray = () => {
		i++; // skip [

		const list = new NestedInteger();

		while (true) {
			skipWhitespace();

			if (str[i] === ']') {
				i++;
				break;
			}

			const val = parseValue();

			list.add(val);

			skipWhitespace();

			if (str[i] === ',') {
				i++;
				continue;
			} else if (str[i] === ']') {
				i++;
				break;
			} else {
				throw new Error(`Unexpected end of array at ${i}: (${str[i]})`);
			}
		}

		return list;
	};

	const parseValue = () => {
		skipWhitespace();

		if (str[i] === '[') {
			return parseArray();
		}

		if ((str[i] && isDigit(str[i])) || str[i] === '-') {
			let numStr = str[i];
			i++;

			while (str[i] && isDigit(str[i])) {
				numStr += str[i];
				i++;
			}

			const integer = new NestedInteger();
			integer.setInteger(Number(numStr));

			return integer;
		}

		throw new Error(`Unexpected token at ${i}: (${str[i]})`);
	};

	skipWhitespace();

	const val = parseValue();

	if (i !== str.length) {
		throw Error(`Unexpected symbols after literal at ${i}: (${str.slice(i)})`);
	}

	return val;
};
