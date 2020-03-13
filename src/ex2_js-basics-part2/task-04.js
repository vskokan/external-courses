function isEqual(array) {
	if (!Array.isArray(array)) {
		return "Аргумент не является массивом";
	}
	for (let i = 0; i < array.length - 1; i++) {
		if (array[i] !== array[i+1]) {
			return false;
		}
	}
	return true;
}
module.exports = isEqual;