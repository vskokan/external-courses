function filterArray(array, callback) {
	let filteredArray = new Array();
	for (let i = 0; i < array.length; i++) {
		if (callback(array[i], i, array)) {
			filteredArray.push(array[i]);
		}
	}
	return filteredArray;
}
module.exports = filterArray;