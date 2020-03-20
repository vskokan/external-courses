function createProperty(property, object) {
	if (typeof object !== "object") { 
		console.log("Неверный тип аргумента функции");
	}
	let modifiedObject = object;
	if (!(property in modifiedObject)) {
		modifiedObject[property] = 'new'; 
	}
	else {
		return "Такое свойство уже есть";
	}
	return modifiedObject;
}
module.exports = createIfApsent;