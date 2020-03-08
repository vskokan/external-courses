function reverseString(string) {
	if ((typeof string !== "string")&&(typeof string !== "object")) {
		return "Неправильный тип параметра";
	}
	let newString = "";
	for (let i = string.length - 1; i >= 0; i--) {
		newString += string.charAt(i);
	}
	return newString;
}
module.exports = reverseString;