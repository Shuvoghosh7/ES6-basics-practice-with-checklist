const numbers = [2,3,4,5,6,7,8];
const fiveTime = num =>num*5;
const result= numbers.map(fiveTime);
// console.log(result);

// find even number of array using filter
const numberss = [2,3,4,5,6,7,8];
const evenNumber = num=>num%2 
const output = numberss.filter(evenNumber)
console.log(output);