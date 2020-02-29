function createIfApsent(propId, objId) {
	if (typeof objId !== "object") { 
		console.log("Неверный тип аргумента функции");
	}
	if (!(propId in objId)) {
		objId[propId] = 'new'; // eslint-disable-line
	}
	return objId;
}
module.exports = createIfApsent;