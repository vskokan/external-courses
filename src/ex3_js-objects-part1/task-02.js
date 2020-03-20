function printKeysProperties(object) {
	if (typeof object === "object") { 
		for (let key in object) {
			if(object.hasOwnProperty(key)) {
				console.log(key, ":", object[key]);
			}
		}	
	}
	else {
		console.log("Неправильный тип параметра");
	}
	return;
}
module.exports = printKeysProperties;