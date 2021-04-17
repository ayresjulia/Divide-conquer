function findRotatedIndex (arr, val, leftIdx = 0, rightIdx = arr.length - 1) {
	while (leftIdx <= rightIdx) {
		if (arr[leftIdx] == val) {
			return leftIdx;
		} else if (arr[rightIdx] == val) {
			return rightIdx;
		}
		leftIdx++;
		rightIdx--;
	}

	return -1;
}

module.exports = findRotatedIndex;
