function convertToLowerCamelCase(string) {
	if ((typeof string !== "string")&&(typeof string !== "object")) {
		return "Неправильный тип параметра";
	}
	let stringArray = string.split(" ");
	stringArray[0] = stringArray[0].replace(stringArray[0].charAt(0), stringArray[0].charAt(0).toLowerCase());
	for (let i = 1; i < stringArray.length; i++) {
		stringArray[i] = stringArray[i].toLowerCase();
		stringArray[i] = stringArray[i].replace(stringArray[i].charAt(0), stringArray[i].charAt(0).toUpperCase());
	}
	return stringArray.join("");
}
module.exports = convertToLowerCamelCase;