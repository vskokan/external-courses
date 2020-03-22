function deleteFirstAndLastSpace(string) {
	if ((typeof string !== "string")&&(typeof string !== "object")) {
		return undefined;
	}
	
	return string.trim();
}
module.exports = deleteFirstAndLastSpace;