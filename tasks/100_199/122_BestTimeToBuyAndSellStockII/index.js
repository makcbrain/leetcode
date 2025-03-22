/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
	let profit = 0;
	let isBought = false;
	let buyPrice = 0;

	for (let i = 0; i < prices.length; i++) {
		const price = prices[i];
		const nexPrice = prices[i + 1];

		if (nexPrice === undefined) {
			if (isBought) {
				profit += price - buyPrice;
			}

			break;
		}

		if (isBought) {
			if (nexPrice < price) {
				profit += price - buyPrice;
				isBought = false;
			}
		} else {
			if (nexPrice > price) {
				isBought = true;
				buyPrice = price;
			}
		}
	}

	return profit;
};
