function isEqual(array) {
	let isEqual = true;
	for (let i = 0; i < array.length - 1; i++) {
		if (array[i] !== array[i+1]) {
			isEqual = false;
		}
	}
	return isEqual;
}
module.exports = isEqual;