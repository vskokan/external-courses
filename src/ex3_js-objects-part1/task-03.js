function hasProperty(property, object) {
	if (typeof object !== "object") { 
		console.log("Неверный тип аргумента функции");
	}
	return (property in object);
}
module.exports = hasProperty;