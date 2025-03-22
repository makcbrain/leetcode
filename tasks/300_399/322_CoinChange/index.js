/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
	if (amount === 0) {
		return 0;
	}

	const sortedCoins = coins.slice(0).sort((a, b) => a - b);
	const coinsBySum = new Array(amount + 1).fill(Infinity);
	coinsBySum[0] = 0;

	for (coin of sortedCoins) {
		for (let i = coin; i <= amount; i++) {
			coinsBySum[i] = Math.min(coinsBySum[i], coinsBySum[i - coin] + 1);
		}
	}

	return coinsBySum[amount] === Infinity ? -1 : coinsBySum[amount];
};
