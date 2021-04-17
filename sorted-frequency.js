function sortedFrequency (arr, val) {
	let firstIdx = findFirst(arr, val);
	if (firstIdx == -1) return firstIdx;
	let lastIdx = findLast(arr, val);
	return lastIdx - firstIdx + 1;
}

function findFirst (arr, val, leftIdx = 0, rightIdx = arr.length - 1) {
	if (leftIdx <= rightIdx) {
		let middleIdx = Math.floor((rightIdx + leftIdx) / 2);
		let middleVal = arr[middleIdx];
		let leftVal = arr[middleIdx - 1];

		if ((middleIdx === 0 || leftVal < val) && middleVal === val) {
			return middleIdx;
		} else if (middleVal < val) {
			return findFirst(arr, val, middleIdx + 1, rightIdx);
		} else {
			return findFirst(arr, val, leftIdx, middleIdx - 1);
		}
	}
	return -1;
}

function findLast (arr, val, leftIdx = 0, rightIdx = arr.length - 1) {
	if (leftIdx <= rightIdx) {
		let middleIdx = Math.floor((rightIdx + leftIdx) / 2);
		let middleVal = arr[middleIdx];
		let rightVal = arr[middleIdx + 1];
		if ((middleIdx === arr.length - 1 || val < rightVal) && middleVal === val) {
			return middleIdx;
		} else if (val < middleVal) {
			return findLast(arr, val, leftIdx, middleIdx - 1);
		} else {
			return findLast(arr, val, middleIdx + 1, rightIdx);
		}
	}
	return -1;
}

module.exports = sortedFrequency;
