function deleteFirstAndLastSpace(string) {
	if ((typeof string !== "string")&&(typeof string !== "object")) {
		return undefined;
	}
	if ((string.charAt(0) === " ") && (string.charAt(string.length - 1) === " ")) {
		return string.slice(1,-1);
	}

	return undefined;
}
module.exports = deleteFirstAndLastSpace;