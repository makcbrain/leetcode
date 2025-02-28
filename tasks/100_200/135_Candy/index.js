/**
 * @param {number[]} ratings
 * @return {number}
 */
const candy = (ratings) => {
	const candies = new Array(ratings.length).fill(1);

	for (let i = 1; i < ratings.length; i++) {
		const prevRating = ratings[i - 1];
		const rating = ratings[i];

		if (rating > prevRating) {
			candies[i] = candies[i - 1] + 1;
		}
	}

	for (let i = ratings.length - 2; i >= 0; i--) {
		const rating = ratings[i];
		const prevRating = ratings[i + 1];

		if (rating > prevRating && candies[i] <= candies[i + 1]) {
			candies[i] = candies[i + 1] + 1;
		}
	}

	return candies.reduce((acc, num) => acc + num, 0);
};
