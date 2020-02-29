function copyObject(objId) {
	if (typeof objId !== "object") { 
		console.log("Неверный тип аргумента функции");
	}
	return Object.assign({}, objId); 
}
module.exports = copyObject;