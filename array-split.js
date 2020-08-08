const number = [1,2,3,4,5,6,7,8,9];

// slice consists of start and end position. = [3,4,5]
// const part = number.slice(2,5);
// console.log(part);

// splice consists of start position number and end with counting number means how many it can also inject new number in that position
const remove = number.splice(2,3, 10);
console.log(remove);
// console.log(number);

const add = number.join(' me ');
console.log(add);