function findMax(array) {
	let maxAmount = array[0];
	for (let i = 0; i < array.length; i++) {
		if (array[i] > maxAmount) {
			maxAmount = array[i]
		}
	}
	return maxAmount;
}
module.exports = findMax;