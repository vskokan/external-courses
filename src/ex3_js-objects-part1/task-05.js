function copyObject(object) {
	if (typeof object !== "object") { 
		console.log("Неверный тип аргумента функции");
	}
	return Object.assign({}, object); 
}
module.exports = copyObject;