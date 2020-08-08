function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
const clock1= stopWatch();
const clock2 = stopWatch();
//  call the function from the function stopWatch and every time it increases by one = 1,2,3,4......
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

// same as clock1 but this time different name like clock2. = 1,2
console.log(clock2());
console.log(clock2());

// again call clock1 that get output as continution of previous ouput = .... 5,6
console.log(clock1());
console.log(clock1());