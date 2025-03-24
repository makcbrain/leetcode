/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = (preorder, inorder) => {
	if (!preorder.length || !inorder.length) {
		return null;
	}

	const root = preorder[0];
	const rootIndex = inorder.indexOf(root);

	const leftInorder = inorder.slice(0, rootIndex);
	const rightInorder = inorder.slice(rootIndex + 1);

	const leftPreorder = preorder.slice(1, leftInorder.length + 1);
	const rightPreorder = preorder.slice(leftInorder.length + 1);

	const node = new TreeNode(root);

	node.left = buildTree(leftPreorder, leftInorder);
	node.right = buildTree(rightPreorder, rightInorder);

	return node;
};

class TreeNode {
	constructor(val, left, right) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

const a = !(!false && !true);
