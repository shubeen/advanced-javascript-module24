const numbers = [3,4,5,6,7,8];
const output = [];

for( let i = 0; i< numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}

console.log(output);


const nums = [1,2,3,5,6,7]

// function square(element){
//     return element*element;
// }

// square = element => element*element
 
 const result1 = nums.map(function(element){
    return element*element;
})
console.log(result1);

// using map and pass the function of sqaure using x => x * x
const num = [2,4,5,2,6,9]
const result2 = num.map(x => x * x);
console.log(result2);


//  filter from the array using x => x>5---- output = 6,9 
const result3 = num.filter(x => x>5);
console.log(result3);

