function getPropertyFromPrototype(property, object) {
	if ((typeof object !== "object") || (typeof property !== "string")) {
		return undefined;
	}
  	if (Object.getPrototypeOf(object).hasOwnProperty(property)) {
		return Object.getPrototypeOf(object)[property];
  	}
  	
  	return undefined;
}
module.exports = getPropertyFromPrototype;