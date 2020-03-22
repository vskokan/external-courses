function insertSubstring(string, substring, number) {
	if ((typeof string !== "string")&&(typeof string !== "object")||(typeof substring !== "string")&&(typeof substring !== "object")||(typeof number !== "number")) {
		return undefined;
	}

	let stringArray = string.split(" ");
	let newString = "";

	if (number > stringArray.length) {
		return undefined;
	} else if (number === stringArray.length) {
		newString = string + " " + substring;
	} else if (number === 0) {
        newString = substring + " " + string;
    } else {
		newString = stringArray.slice(0, number+1).join(" ") + " " + substring + " " + stringArray.slice(number+1).join(" ");
	}

	return newString;	    
}
module.exports = insertSubstring;