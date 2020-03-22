function copyArray(array, begin, end) {

	let newArray = [];

	switch (arguments.length) {
		case 1: {
			newArray = array; 
			break;
		}
		case 2: {
			for (let i = begin; i < array.length; i++) {
				newArray.push(array[i]);
			}	
			break; 
		}
		default: {
			if (begin*end >= 0) {
				if (begin & end >= 0) {
					for (let i = begin; i < end; i++) {
						newArray.push(array[i]);
					}
				} else {
					for (let i = array.length - Math.abs(begin); i < Math.abs(end) + 1; i++) {
						newArray.push(array[i]);
					}
				}
			} else if (begin < 0) {
				for (let i = array.length - begin; i < end; i++) {
					newArray.push(array[i]);
				}
			} else if (end < 0) {
				for (let i = begin; i < array.length - end; i++) {
					newArray.push(array[i]);
				}
			}
			break;	
		} 
	}
	
	return newArray;
}
module.exports = copyArray;