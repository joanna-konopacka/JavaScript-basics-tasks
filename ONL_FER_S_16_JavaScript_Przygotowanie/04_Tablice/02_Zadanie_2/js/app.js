let randomNumbersArray = [];
let evenNumbersArray = [];

for (let i = 0; i < 10; i++) {
	randomNumbersArray.push(Math.floor(Math.random() * (60 - 1 + 1) + 1));

	if (randomNumbersArray[i] % 2 == 0) {
		evenNumbersArray.push(randomNumbersArray[i]);
	} else {
		evenNumbersArray.push(randomNumbersArray[i] + 1);
	}
}
console.log(randomNumbersArray);
console.log(evenNumbersArray);
