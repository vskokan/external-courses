function printElements(Arr) {
	for (let i = 0; i < Arr.length; i++) {
		console.log(`${i+1} элемент:`,Arr[i]);
	}
	console.log(`Общее число элементов: ${Arr.length}`);
}
module.exports = printElements;