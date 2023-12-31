/* Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

Examples:
num_of_digits(1000) ➞ 4
num_of_digits(12) ➞ 2
num_of_digits(1305981031) ➞ 10
*/

const numOfDigits = (num: number): number => num.toString().length;

console.log(numOfDigits(1000));
console.log(numOfDigits(12));
console.log(numOfDigits(1305981031));
