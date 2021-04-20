function findRotationCount (arr, leftIdx = 0, rightIdx = arr.length - 1) {
	while (leftIdx <= rightIdx) {
		let midIdx = Math.floor((leftIdx + rightIdx) / 2);
		let midVal = arr[midIdx];
		let leftVal = arr[leftIdx];
		let rightVal = arr[rightIdx];
		if (leftVal < rightVal) return 0;
		if (leftVal < rightVal) return leftIdx;

		if (midIdx < rightIdx && arr[midIdx + 1] < midVal) {
			return midIdx + 1;
		}

		if (midIdx > leftIdx && midVal < arr[midIdx - 1]) {
			return midIdx;
		}
		if (rightVal > midVal) {
			rightIdx = midIdx - 1;
		}
		leftIdx = midIdx + 1;
	}
}

module.exports = findRotationCount;
