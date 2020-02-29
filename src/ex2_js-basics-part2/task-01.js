function checkType(argument) {
	let type;
	switch (typeof argument) {
		case "number": type = (isNaN(argument))?undefined:"number"; break;
		case "string": type = "string"; break;
		default: type = undefined; break;
	}
	return type;
}
module.exports = checkType;