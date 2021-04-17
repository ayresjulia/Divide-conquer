function countZeroes (arr, leftIdx = 0, val = 1) {
	let sortedArr = arr.sort();
	let rightIdx = sortedArr.length - 1;

	while (leftIdx <= rightIdx) {
		let middleIdx = Math.floor((rightIdx + leftIdx) / 2);
		let middleVal = sortedArr[middleIdx];

		if (middleVal < val) {
			leftIdx = middleIdx + 1;
		} else if (middleVal === val) {
			rightIdx = middleIdx - 1;
			return sortedArr[rightIdx] === val ? rightIdx : middleIdx;
		}
	}
	return sortedArr.length;
}

module.exports = countZeroes;
