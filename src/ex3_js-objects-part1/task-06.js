function copyObjectDeep(objId) {
	if (typeof objId !== "object") { 
		console.log("Неверный тип аргумента функции");
		return undefined;
	}
	let objCopy = Array.isArray(objId)?[]:{}; 
	for (let key in objId) {
		if (typeof objId[key] === "object") { //шаг рекурсии: если свойство объекта само явл. объектом, вызываем функцию 
			objCopy[key] = copyObjectDeep(objId[key]);
		}
		else {
			objCopy[key] = objId[key]; //база рекурсии: если свойство объекта является примитивом, просто копируем его 
		}
	}
	return objCopy;		
}
module.exports = copyObjectDeep;