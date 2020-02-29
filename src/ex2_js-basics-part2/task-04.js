function isEqual(arr) {
	let isEqual = true;
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] !== arr[i+1]) {
			isEqual = false;
		}
	}
	return isEqual;
}
module.exports = isEqual;