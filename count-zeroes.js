// function countZeroes (arr, leftIdx = 0, val = 1) {
// 	let sortedArr = arr.sort();
// 	let rightIdx = sortedArr.length - 1;

// 	while (leftIdx <= rightIdx) {
// 		let middleIdx = Math.floor((rightIdx + leftIdx) / 2);
// 		let middleVal = sortedArr[middleIdx];

// 		if (middleVal < val) {
// 			leftIdx = middleIdx + 1;
// 		} else if (middleVal === val) {
// 			rightIdx = middleIdx - 1;
// 			return sortedArr[rightIdx] === val ? rightIdx : middleIdx;
// 		}
// 	}
// 	return sortedArr.length;
// }

function countZeroes (arr, val = 0, leftIdx = 0, rightIdx = arr.length - 1) {
	let count = 0;

	// if (arr[leftIdx] === val && arr[rightIdx] === val) {
	// 	count += 2;
	// } else if (arr[leftIdx] === val || arr[rightIdx] === val) {
	// 	count++;
	// } else {
	// 	count;
	// }
	console.log("leftIdx", arr[leftIdx], "rightIdx", arr[rightIdx], "count", count);

	while (leftIdx <= rightIdx) {
		if (arr[leftIdx] === val && arr[rightIdx] === val) {
			count += 2;
			console.log("leftIdx", arr[leftIdx], "rightIdx", arr[rightIdx], "count", count);
		} else if (arr[leftIdx] === val || arr[rightIdx] === val) {
			count++;
			// console.log("leftIdx", arr[leftIdx], "rightIdx", arr[rightIdx], "count", count);
		}
		// else if (arr[rightIdx] === val) {
		// 	count++;
		// 	console.log("leftIdx", arr[leftIdx], "rightIdx", arr[rightIdx], "count", count);
		// }
		leftIdx++;
		rightIdx--;
	}

	return count;
}

// module.exports = countZeroes;

console.log(countZeroes([ 1, 0, 0, 0, 1, 1 ])); // 3
console.log(countZeroes([ 0, 0, 0, 1, 1 ])); // 3
// console.log(countZeroes([ 1, 1, 1, 1 ])); // 0
