function reverseString(string) {
	if ((typeof string !== "string")&&(typeof string !== "object")) {
		return undefined;
	}

	let newString = string.split("");
	
	return newString.reverse().join("");
}
module.exports = reverseString;