class TreeNode {
	constructor(val, left, right) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

/**
 * @param {TreeNode} root
 */
class BSTIterator {
	#inOrderArr = [];
	#position = -1;

	constructor(root) {
		const traverseInOrder = (node) => {
			if (!node) {
				return;
			}

			traverseInOrder(node.left);
			this.#inOrderArr.push(node.val);
			traverseInOrder(node.right);
		};

		traverseInOrder(root);
	}

	/**
	 * @return {number}
	 */
	next() {
		this.#position++;

		return this.#inOrderArr[this.#position];
	}

	/**
	 * @return {boolean}
	 */
	hasNext() {
		return this.#inOrderArr[this.#position + 1] !== undefined;
	}
}
