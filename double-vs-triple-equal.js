// == check only value ----- true
const first = 2;
const second = '2';

if(first == second){
    console.log('condition is true');
}
else { 
    console.log('condition is false');
}



//  === check value and type ---- false
const third = 3;
const fourth = '3';

if(third === fourth){
    console.log('condition is true');
}
else { 
    console.log('condition is false');
}
// true = 1 in javascript same as 0 = false ...... but in === it wil  be false as it is checked as type and value.
const num1= 1;
const num2 = true;
if(num1==num2){
    console.log('true');
}
else{
    console.log('false');
}


{/* <br /> <br /> if (‘2’===2){<br /> console.log(“Inside if”);<br /> }<br /> else{<br /> console.log(“Inside else”);<br /> } */}