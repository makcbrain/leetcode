class TreeNode {
	constructor(val, left, right) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

function* treeGenerator(root) {
	const stack = [];
	let node = root;

	while (node || stack.length > 0) {
		while (node) {
			stack.push(node);
			node = node.left;
		}

		node = stack.pop();

		yield node.val;

		node = node.right;
	}
}

/**
 * @param {TreeNode} root
 */
class BSTIterator {
	#generator;
	#value;
	#done;

	constructor(root) {
		this.#generator = treeGenerator(root);
		this.#callNext();
	}

	#callNext() {
		const { value, done } = this.#generator.next();
		this.#value = value;
		this.#done = done;
	}

	/**
	 * @return {number}
	 */
	next() {
		const result = this.#value;
		this.#callNext();

		return result;
	}

	/**
	 * @return {boolean}
	 */
	hasNext() {
		return this.#done !== true;
	}
}
