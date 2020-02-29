function hasProperty(propId, objId) {
	if (typeof objId !== "object") { 
		console.log("Неверный тип аргумента функции");
	}
	return (propId in objId);
}
module.exports = hasProperty;