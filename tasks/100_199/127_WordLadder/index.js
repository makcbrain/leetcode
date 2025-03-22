/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = (beginWord, endWord, wordList) => {
	const words = new Set(wordList);

	if (!words.has(endWord)) {
		return 0;
	}

	words.delete(beginWord);

	const graph = buildGraph(beginWord, words);

	const graphNode = findInGraph(graph, endWord);

	return graphNode ? graphNode.level + 1 : 0;
};

function findInGraph(node, word) {
	const queue = new Queue1();

	queue.add(node);

	while (queue.size()) {
		const node = queue.get();

		if (node.value === word) {
			return node;
		}

		if (node.children.length) {
			for (const child of node.children) {
				queue.add(child);
			}
		}
	}

	return undefined;
}

class Queue1 {
	#queue = [];

	add(value) {
		this.#queue.push(value);
	}

	get() {
		return this.#queue.shift();
	}

	size() {
		return this.#queue.length;
	}
}

class GraphNode {
	constructor(value, level, children) {
		this.value = value;
		this.level = level;
		this.children = children || [];
	}
}

function buildGraph(word, words) {
	const wordsInGraph = new Set();
	const queue = new Queue1();
	const rootNode = new GraphNode(null, -1);

	const symbols = 'qwertyuioplkjhgfdsazxcvbnm';

	queue.add([word, rootNode]);

	while (queue.size()) {
		const [word, parentNode] = queue.get();

		if (wordsInGraph.has(word)) {
			continue;
		}

		const node = new GraphNode(word, parentNode.level + 1);
		wordsInGraph.add(word);
		parentNode.children.push(node);

		for (let i = 0; i < word.length; i++) {
			for (const symbol of symbols) {
				const candidateWord = word.slice(0, i) + symbol + word.slice(i + 1);

				if (!wordsInGraph.has(candidateWord) && words.has(candidateWord)) {
					queue.add([candidateWord, node]);
				}
			}
		}
	}

	return rootNode.children[0];
}
