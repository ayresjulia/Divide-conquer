function countZeroes (arr, leftIdx = 0, rightIdx = arr.length - 1) {
	if (arr[leftIdx] === 1 && arr[rightIdx] === 1) {
		return 0;
	}

	while (leftIdx <= rightIdx) {
		let midIdx = Math.floor((rightIdx + leftIdx) / 2);
		let midVal = arr[midIdx];
		if (midVal > arr[rightIdx]) {
			leftIdx = midIdx + 1;
		} else if (midVal === arr[rightIdx] && arr[midIdx - 1] === arr[rightIdx]) {
			rightIdx = midIdx - 1;
		} else {
			return arr.length - midIdx;
		}
	}
}

module.exports = countZeroes;
