/**
 * @param {number[][]} points
 * @return {number}
 */
const maxPoints = (points) => {
	if (points.length <= 2) {
		return points.length;
	}

	let maxPoints = 2;
	const calculatedPoints = new Set();
	const getSegmentName = (pointA, pointB) => {
		return `${pointA[0]},${pointA[1]};${pointB[0]},${pointB[1]}`;
	};

	for (let i = 0; i < points.length; i++) {
		const maxPointsByAngleForCurrentLine = new Map();

		for (let j = 0; j < points.length; j++) {
			if (i === j) {
				continue;
			}

			const pointA = points[i];
			const pointB = points[j];

			if (calculatedPoints.has(getSegmentName(pointA, pointB))) {
				continue;
			}

			const yDiff = pointB[1] - pointA[1];
			const xDiff = pointB[0] - pointA[0];

			const angleCoeff = yDiff === 0 ? 0 : xDiff === 0 ? Infinity : yDiff / xDiff;

			let pointsWithCurrentAngle = maxPointsByAngleForCurrentLine.get(angleCoeff);

			if (!pointsWithCurrentAngle) {
				pointsWithCurrentAngle = 2;
			} else {
				pointsWithCurrentAngle++;
			}

			maxPointsByAngleForCurrentLine.set(angleCoeff, pointsWithCurrentAngle);

			calculatedPoints.add(getSegmentName(pointB, pointA));
		}

		maxPoints = Math.max(maxPoints, Math.max(...maxPointsByAngleForCurrentLine.values()));
	}

	return maxPoints;
};
