function hasSubstring(string, substring) {
	if ((typeof string !== "string")&&(typeof string !== "object")||(typeof substring !== "string")&&(typeof substring !== "object")) {
		return "Неправильный тип параметра";
	}
	return string.includes(substring);
}
module.exports = hasSubstring;