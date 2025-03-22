const squares = new Array(10).fill(0).map((value, index) => index * index);

const getSum = (num) => {
	let sum = 0;

	while (num > 0) {
		sum += squares[num % 10];
		num = Math.floor(num / 10);
	}

	return sum;
};

const isHappy = (num) => {
	const sums = new Set();
	let sum = getSum(num);
	sums.add(sum);

	while (sum !== 1) {
		sum = getSum(sum);

		if (sums.has(sum)) {
			return false;
		}

		sums.add(sum);
	}

	return true;
};
