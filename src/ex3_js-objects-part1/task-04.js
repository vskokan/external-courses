function createIfApsent(property, object) {
	if (typeof object !== "object") { 
		console.log("Неверный тип аргумента функции");
	}
	if (!(property in object)) {
		object[property] = 'new'; // eslint-disable-line
	}
	return object;
}
module.exports = createIfApsent;