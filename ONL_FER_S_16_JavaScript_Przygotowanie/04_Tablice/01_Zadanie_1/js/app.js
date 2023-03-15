const numbers = [4, 4, 1, 2, 5, 40];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
	sum += numbers[i];
}
console.log(sum / numbers.length);
