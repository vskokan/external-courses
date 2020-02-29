function countEvenOdd(arr) {
	let result = [0,0,0];
	for (let i = 0; i < arr.length; i++) {
		if ((typeof arr[i] === "number") && (!isNaN(arr[i])) ) {
			if (arr[i] === 0) {
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