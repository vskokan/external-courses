function checkType(argument) {
	if (typeof argument === "string") {
		return "string";
	} 
	if ((typeof argument === "number") && (!isNaN(argument))) {
		return "number";
	}
	return undefined;
}
module.exports = checkType;