const putWord = (string, word, maxWidth) => {
	if (string.length + word.length + 1 <= maxWidth) {
		return `${string} ${word}`;
	}

	return false;
};

const alignStringCentre = (string, maxWidth) => {
	const words = string.split(' ');

	if (words.length === 1) {
		return string.padEnd(maxWidth, ' ');
	}

	const countWhitespases = words.length - 1;
	const restLegth = maxWidth - string.length;
	const numberOfWhitespaces = Math.floor(restLegth / countWhitespases);
	let restWhitespaces = restLegth - numberOfWhitespaces * countWhitespases;

	for (let i = 0; i < words.length - 1; i++) {
		let word = words[i] + ' '.repeat(numberOfWhitespaces);

		if (restWhitespaces) {
			word += ' ';
			restWhitespaces--;
		}

		words[i] = word;
	}

	return words.join(' ');
};

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
const fullJustify = (words, maxWidth) => {
	const strings = [words[0]];

	for (let i = 1; i < words.length; i++) {
		const word = words[i];
		const lastSring = strings.at(-1);

		const stringWithWord = putWord(lastSring, word, maxWidth);

		if (stringWithWord) {
			strings[strings.length - 1] = stringWithWord;
			continue;
		}

		strings[strings.length - 1] = alignStringCentre(lastSring, maxWidth);
		strings.push(word);
	}

	strings[strings.length - 1] = strings[strings.length - 1].padEnd(maxWidth, ' ');

	return strings;
};
