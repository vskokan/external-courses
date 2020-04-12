function getRandom(min, max) {
	if ((typeof min !== "number")&&(typeof min !== "object")||(typeof max !== "number")&&(typeof max !== "object")||(isNaN(min))||(isNaN(max))) {
		return undefined;
	}
	
	return Math.round(Math.random()*(max - min) + min);
}
module.exports = getRandom;