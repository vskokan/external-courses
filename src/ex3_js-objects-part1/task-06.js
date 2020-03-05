function copyObjectDeep(object) {
	if (typeof object !== "object") { 
		console.log("Неверный тип аргумента функции");
		return undefined;
	}
	let objectCopy = Array.isArray(object)?[]:{}; 
	for (let key in object) {
		if (typeof object[key] === "object") {
			objectCopy[key] = copyObjectDeep(object[key]);
		}
		else {
			objectCopy[key] = object[key];
		}
	}
	return object;		
}
module.exports = copyObjectDeep;