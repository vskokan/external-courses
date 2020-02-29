function checkPrimeComposite(num) {
	if ((typeof num !== "number") || (num > 1000) || (isNaN(num))) {
		return ("Данные неверны");
	}
	if ((num === 0) || (num === 1)) {
		return (`Число ${num} - не простое и не составное`);
	}
	let dividersAmount = 0;
	for (let i = 1; i <= num; i++) {
		if (!(num % i)) {
			++dividersAmount;
		}
	}
	if (dividersAmount > 2) {
		return (`Число ${num} - составное число`);
	}
	return (`Число ${num} - простое число`); 
}
module.exports = checkPrimeComposite;