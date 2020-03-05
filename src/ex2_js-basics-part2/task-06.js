function checkPrimeComposite(number) {
	if ((typeof number !== "number") || (number > 1000) || (isNaN(number))) {
		return ("Данные неверны");
	}
	if ((number === 0) || (number === 1)) {
		return (`Число ${number} - не простое и не составное`);
	}
	let dividersAmount = 0;
	for (let i = 1; i <= number; i++) {
		if (!(number % i)) {
			++dividersAmount;
		}
	}
	if (dividersAmount > 2) {
		return (`Число ${number} - составное число`);
	}
	return (`Число ${number} - простое число`); 
}
module.exports = checkPrimeComposite; 