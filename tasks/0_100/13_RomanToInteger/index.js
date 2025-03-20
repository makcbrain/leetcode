/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
	let num = 0;
	let i = 0;

	while (i < s.length) {
		const symbol = s[i];
		const nextSymbol = s[i + 1];

		switch (symbol) {
			case 'I':
				if (nextSymbol === 'V') {
					num += 4;
					i++;
				} else if (nextSymbol === 'X') {
					num += 9;
					i++;
				} else {
					num += 1;
				}
				break;
			case 'V':
				num += 5;
				break;
			case 'X':
				if (nextSymbol === 'L') {
					num += 40;
					i++;
				} else if (nextSymbol === 'C') {
					num += 90;
					i++;
				} else {
					num += 10;
				}
				break;
			case 'L':
				num += 50;
				break;
			case 'C':
				if (nextSymbol === 'D') {
					num += 400;
					i++;
				} else if (nextSymbol === 'M') {
					num += 900;
					i++;
				} else {
					num += 100;
				}
				break;
			case 'D':
				num += 500;
				break;
			case 'M':
				num += 1000;
				break;
		}

		i++;
	}

	return num;
};
