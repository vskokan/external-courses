function convertAllFirstsToUpper(string) {
	if ((typeof string !== "string")&&(typeof string !== "object")) {
		return "Неправильный тип параметра";
	}
	let stringArray = string.split(" ");
	for (let i = 0; i < stringArray.length; i++) {
		stringArray[i] = stringArray[i].replace(stringArray[i].charAt(0), stringArray[i].charAt(0).toUpperCase());
	}
	return stringArray.join(" ");
}
module.exports = convertAllFirstsToUpper;