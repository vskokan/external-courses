function reduceArray(array, callback, initialValue) {
	let previousValue, begin, sum = 0;

	if (arguments.length === 2) {
		previousValue = array[0];
		begin = 1;
	} else {
		previousValue = initialValue;
		begin = 0;
	}
	for (let i = begin; i < array.length; i++) {
		previousValue = callback(previousValue, array[i], i, array);
	}
	
	return previousValue;
}
module.exports = reduceArray;