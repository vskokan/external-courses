function countEvenOdd(array) {
	let result = [0,0,0];
	for (let i = 0; i < array.length; i++) {
		if ((typeof array[i] === "number") && (!isNaN(array[i])) ) {
			if (array[i] === 0) {
				result[2]++;
			}
			else if (arr[i] % 2 === 0) {
				result[0]++;
			}
			else {
				result[1]++;
			}
		}
	}
	return result;
}
module.exports = countEvenOdd;