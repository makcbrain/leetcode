class TreeNode {
	constructor(val, left, right) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
	let maxDepth = 0;

	const processNode = (node, depth) => {
		if (!node) {
			return;
		}

		maxDepth = Math.max(maxDepth, depth);

		processNode(node.left, depth + 1);
		processNode(node.right, depth + 1);
	};

	processNode(root, 1);

	return maxDepth;
};
