function findFloor (arr, val, left = 0, right = arr.length - 1) {
	while (left <= right) {
		let middle = Math.floor((left + right) / 2);
		let mValue = arr[middle];
		if (mValue < val) {
			left = middle + 1;
		} else if (mValue > val) {
			right = middle - 1;
		} else {
			return middle;
		}
	}
	return arr[right] !== undefined ? arr[right] : -1;
}

module.exports = findFloor;
