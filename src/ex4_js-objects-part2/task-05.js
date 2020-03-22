function hasSubstring(string, substring) {
	if ((typeof string !== "string")&&(typeof string !== "object")||(typeof substring !== "string")&&(typeof substring !== "object")) {
		return undefined;
	}

	return string.includes(substring);
}
module.exports = hasSubstring;