function printCharacterAmount(string) {
	if ((typeof string !== "string")&&(typeof string !== "object")) {
		return undefined;
	}

	let tempString = string;

	for (let i = 0; i < tempString.length;) {

		let characterAmount = 0;
        let currentCharacter = tempString.charAt(i);
        
		for (let j = i; j < tempString.length; j++) {
			if (currentCharacter === tempString.charAt(j)) {
				++characterAmount;
			}
		}
		console.log(`Символ ${currentCharacter} встречается в строке ${characterAmount} раз`);
        for (let k = 0; k < characterAmount; k++) {
        	tempString = tempString.replace(currentCharacter, "");
        }
	}

	return undefined;
}
module.exports = printCharacterAmount;