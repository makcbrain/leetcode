/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = (path) => {
	const resultPath = [];
	const pathElements = path.replace(/\/+/g, '/').split('/');

	for (pathElement of pathElements) {
		if (pathElement === '.' || pathElement === '') {
			continue;
		} else if (pathElement === '..') {
			resultPath.pop();
		} else {
			resultPath.push(pathElement);
		}
	}

	return `/${resultPath.join('/')}`;
};
