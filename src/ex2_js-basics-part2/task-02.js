function printElements(array) {
	for (let i = 0; i < array.length; i++) {
		console.log(`${i+1} элемент:`,array[i]);
	}
	console.log(`Общее число элементов: ${array.length}`);
    return undefined;
}
module.exports = printElements; 