function findMax(arr) {
	let maxAmount = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > maxAmount) {
			maxAmount = arr[i]
		}
	}
	return maxAmount;
}
module.exports = findMax;