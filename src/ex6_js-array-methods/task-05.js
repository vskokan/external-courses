function mapArray(array, callback) {
	let resultsArray = new Array();
	for (let i = 0; i < array.length; i++) {
		resultsArray.push(callback(array[i], i, array));
	}
	return resultsArray;
}
module.exports = mapArray;