class LinkedListElement {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;

		if (this.next) {
			this.min = Math.min(this.next.min, this.value);
		} else {
			this.min = this.value;
		}
	}
}

class MinStack {
	constructor() {
		this.head = null;
	}

	/**
	 * @param {number} val
	 * @return {void}
	 */
	push(val) {
		this.head = new LinkedListElement(val, this.head);
	}

	/**
	 * @return {void}
	 */
	pop() {
		const element = this.head;
		this.head = element.next;

		return element.value;
	}

	/**
	 * @return {number}
	 */
	top() {
		return this.head.value;
	}

	/**
	 * @return {number}
	 */
	getMin() {
		return this.head.min;
	}
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
