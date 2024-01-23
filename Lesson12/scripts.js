// Default parameters
// function sumMultipleNumber(number1, number2 = 0, number3 = 0) {
// 	const sum = number1 + number2 + number3;
// 	console.log('giá trị number1: ', number1);
// 	console.log('giá trị number2: ', number2);
// 	console.log('giá trị number3: ', number3);
// 	console.log('Tổng 3 số là: ', sum);
// }

// sumMultipleNumber(1, 4, 9);
// sumMultipleNumber(1, 4);
// sumMultipleNumber(1);

// Template literals
// const multipleString = `
// Dòng 1
// Dòng 2
// Dòng 3`;
// console.log('multipleString: ', multipleString);

// const course1 = 'HTML';
// const course2 = 'CSS';
// const course3 = 'JAVASCRIPT';
// 'Bạn đang tham gia khóa học course1, course2 và course3';

// const result =
// 	'Bạn đang tham gia khóa học ' + course1 + ', ' + course2 + ' và ' + course3;
// const result = `Bạn đang tham gia khóa học ${course1}, ${course2} và ${course3}`;
// console.log(result);

// Destructuring
const fruits = ['apple', 'orange', 'banana'];

// const firstFruit = fruits[0];
// const secondFruit = fruits[1];

// let [firstFruit, secondFruit] = fruits;
// firstFruit = 'potato';
// console.log(firstFruit);
// console.log(fruits);

// const person = {
// 	name: 'John',
// 	age: 30,
// 	gender: 'boy',
// };

// const name = person.name;
// const age = person.age;

// const { name: personName,
//     age: personAge,
//     gender = 'girl' }
// = person;

// console.log(personName);
// console.log(personAge);
// console.log(gender);

// const nameStudent = 'Dũng';
// const ageStudent = 18;

// const student = {
// 	nameStudent,
// 	ageStudent,
// };

// console.log(student);

// function sum(a, b) {
// 	return a + b;
// }

// const sum = (a, b) => {
// 	return a + b;
// };

// const sum = (a, b) => console.log(a + b);

// console.log(sum(3, 6));

import number, { PI as PI_SECOND, sum } 
from './features.js';

// const PI = 3;

console.log(PI_SECOND);
console.log(sum(3, 5));
console.log(number);
