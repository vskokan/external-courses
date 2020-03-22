function addTwoNumbers(number1, number2) {
	if ((typeof number1 !== "number")&&(typeof number1 !== "object")||(typeof number2 !== "number")&&(typeof number2 !== "object")||(isNaN(number1))||(isNaN(number2))) {
		return undefined;
	}

	return parseFloat((number1 + number2).toPrecision(4));
}
module.exports = addTwoNumbers;