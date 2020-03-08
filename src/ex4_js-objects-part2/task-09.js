function insertSubstring(string, substring, number) {
	if ((typeof string !== "string")&&(typeof string !== "object")||(typeof substring !== "string")&&(typeof substring !== "object")||(typeof number !== "number")) {
		return "Неправильный тип параметра";
	}
	let stringArray = string.split(" ");
	let newString = "";
	if (number >= stringArray.length) {
		return "Неправильная позиция вставки"
	}
	else if (number === stringArray.length - 1) {
		newString = string + " " + substring;
	}
	else {
		for (let i = 0; i < stringArray.length; i++) {	
            newString += " " + stringArray[i];
        	if (i === number) {
        		newString += " " + substring;
        	}
		}
	}
	return newString.trim();	    
}
module.exports = insertSubstring;