function printKeysProperties(objId) {
	if (typeof objId === "object") { 
		for (let key in objId) {
			if(objId.hasOwnProperty(key)) {
				console.log(key, ":", objId[key]);
			}
		}	
	}
	else {
		console.log("Неправильный тип параметра");
	}
	return;
}
module.exports = printKeysProperties;