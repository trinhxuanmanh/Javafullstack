const numbers = [10,4,-7,9,100,3,-21,0,33];
let min = numbers[0];
let max = numbers[0];
for(let number of numbers){
    if(number < min){
        min=number;
    }
    if(number >max){
        max=number;
    }
}
// console.log('min:', min);
// console.log('max:',max);

let sum =0 ;
for(let number of numbers){
    sum=sum+number;
}
// console.log('tong :',sum);
const avg = sum/numbers.length;
// console.log('trung bình công',avg);
