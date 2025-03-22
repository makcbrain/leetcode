/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxPathSum = (root) => {
	let globalMax = -Infinity;

	const findMaxPath = (treeNode) => {
		if (treeNode === null) {
			return 0;
		}

		const leftMax = Math.max(0, findMaxPath(treeNode.left));
		const rightMax = Math.max(0, findMaxPath(treeNode.right));

		globalMax = Math.max(globalMax, treeNode.val + leftMax + rightMax);

		return treeNode.val + Math.max(leftMax, rightMax);
	};

	findMaxPath(root);

	return globalMax;
};
