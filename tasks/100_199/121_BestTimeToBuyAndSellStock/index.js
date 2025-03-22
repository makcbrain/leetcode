/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
	let maxProfit = 0;
	let minPrice = Number.POSITIVE_INFINITY;

	for (const price of prices) {
		if (price < minPrice) {
			minPrice = price;
		} else {
			maxProfit = Math.max(maxProfit, price - minPrice);
		}
	}

	return maxProfit;
};
