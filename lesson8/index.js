const listNumber = [10, 20, 30, 40, 50];
// console.log(listNumber[3]);
// console.log(listNumber[4]);
// console.log(listNumber[10]);
// console.log(listNumber);
// [10, 20, 3, 40, 50]
// listNumber[2] = 3;
// console.log(listNumber);
// console.log(listNumber.length);

// Duyệt mảng c1
// for (let i = 0; i < listNumber.length; i++) {
// 	console.log(listNumber[i]);
// }
// Duyệt mảng c2
// for (let number of listNumber) {
//     console.log(number);
// }

console.log(listNumber);
// Thêm
// listNumber.push(60);
// listNumber.push(70);
// listNumber.push(80);
// listNumber.push(60, 70, 80);

// listNumber.unshift(0);
// listNumber.unshift(-10);
// listNumber.unshift(-10, 0);

// Xóa
// listNumber.pop();
// listNumber.pop();

// listNumber.shift();

// Splice
// listNumber.splice(2, 1);

listNumber.splice(3, 0, 31, 32, 33, 34, 35);
console.log(listNumber);
