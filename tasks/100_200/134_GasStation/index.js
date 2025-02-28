/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = (gas, cost) => {
	let tank = 0;
	let candidate = null;
	let candidateTank = 0;

	for (let i = 0; i < gas.length; i++) {
		tank += gas[i];
		candidateTank += gas[i];

		if (candidate === null && gas[i] >= cost[i]) {
			candidate = i;
			candidateTank = gas[i];
		}

		tank -= cost[i];
		candidateTank -= cost[i];

		if (candidate !== null && candidateTank < 0) {
			candidate = null;
		}
	}

	if (tank < 0) {
		return -1;
	}

	return candidate === null ? -1 : candidate;
};
