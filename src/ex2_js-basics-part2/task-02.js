function printElements(array) {
	if (!Array.isArray(array)) {
		return "Аргумент не является массивом";
	}
	for (let i = 0; i < array.length; i++) {
		console.log(`${i+1} элемент:`,array[i]);
	}
	console.log(`Общее число элементов: ${array.length}`);
    return undefined;
}
module.exports = printElements; 