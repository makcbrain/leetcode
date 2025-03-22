const priorities = { '+': 10, '-': 10, '*': 20, '/': 20, unaMinus: 30 };

class PrattParser {
	constructor(expression) {
		this.tokens = expression.match(/\d+|\+|-|\*|\/|\(|\)/g);
		this.pos = 0;
	}

	current() {
		return this.tokens[this.pos] || null;
	}

	next() {
		return this.tokens[this.pos++] || null;
	}

	parse(minPriority = 0) {
		const token = this.next();
		let left;

		if (/\d+/.test(token)) {
			left = Number(token);
		} else if (token === '(') {
			left = this.parse();
			this.next();
		} else if (token === '-') {
			left = this.parse(this.getPriority('unaMinus')) * -1;
			left;
		}

		while (true) {
			const operator = this.current();

			if (!operator || operator === ')') {
				break;
			}

			const priority = this.getPriority(operator);

			if (priority <= minPriority) {
				break;
			}

			this.next();
			const right = this.parse(priority);

			switch (operator) {
				case '+':
					left += right;
					break;
				case '-':
					left -= right;
					break;
				case '*':
					left *= right;
					break;
				case '/':
					left /= right;
					break;
			}
		}

		return left;
	}

	getPriority(operator) {
		return priorities[operator] || -1;
	}
}

const calculate = (s) => new PrattParser(s).parse();
