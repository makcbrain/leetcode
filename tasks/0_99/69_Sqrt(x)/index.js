/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x) => {
	if (x <= 1) {
		return x;
	}

	let minValue = 1;
	let maxValue = Math.ceil(x / 2);

	while (maxValue - minValue > 1) {
		const middle = (maxValue - minValue) / 2 + minValue;
		const pow = middle * middle;

		if (pow > x) {
			maxValue = Math.ceil(middle);
		} else if (pow < x) {
			minValue = Math.floor(middle);
		} else {
			return middle;
		}
	}

	return maxValue * maxValue <= x ? maxValue : minValue;
};
