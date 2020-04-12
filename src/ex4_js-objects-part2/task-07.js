function makeStringShorter(string, number) {
	if ((typeof string !== "string")&&(typeof string !== "object")||(typeof number !== "number")) {
		return undefined;
	}
	if (string.length > number) {
		return string.substring(0, number - 1) + "…";
	}
	
	return undefined;
}
module.exports = makeStringShorter;