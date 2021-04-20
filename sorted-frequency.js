function sortedFrequency (arr, val) {
	let first = firstOcc(arr, val);
	let last = lastOcc(arr, val);
	if (first === -1 && last === -1) return -1;
	return first === -1 || last === -1 ? 1 : last - first + 1;
}

function firstOcc (arr, val, leftIdx = 0, rightIdx = arr.length - 1) {
	while (leftIdx <= rightIdx) {
		let midIdx = Math.floor((rightIdx + leftIdx) / 2);
		if (midIdx === 0 || (val > arr[midIdx - 1] && arr[midIdx] === val)) {
			return midIdx;
		} else if (val > arr[midIdx]) {
			leftIdx = midIdx + 1;
		} else {
			rightIdx = midIdx - 1;
		}
	}
	return -1;
}

function lastOcc (arr, val, leftIdx = 0, rightIdx = arr.length - 1) {
	while (leftIdx <= rightIdx) {
		let midIdx = Math.floor((rightIdx + leftIdx) / 2);
		if (midIdx === 0 || (val < arr[midIdx + 1] && arr[midIdx] === val)) {
			return midIdx;
		} else if (val < arr[midIdx]) {
			rightIdx = midIdx - 1;
		} else {
			leftIdx = midIdx + 1;
		}
	}
	return -1;
}

module.exports = sortedFrequency;
