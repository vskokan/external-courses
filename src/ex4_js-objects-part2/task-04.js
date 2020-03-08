function convertFisrtToUpperсase(string) {
	if ((typeof string !== "string")&&(typeof string !== "object")) {
		return "Неправильный тип параметра";
	}
	return string.replace(string.charAt(0), string.charAt(0).toUpperCase());
}
module.exports = convertFisrtToUpperсase;