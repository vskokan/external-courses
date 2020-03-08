function deleteFirstAndLastSpace(string) {
	if ((typeof string !== "string")&&(typeof string !== "object")) {
		return "Неправильный тип параметра";
	}
	return string.trim();
}
module.exports = deleteFirstAndLastSpace;