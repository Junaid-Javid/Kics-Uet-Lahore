input=fizzBuzz(45);
console.log(input);

function fizzBuzz(input){
if (typeof input !== "number"){
    return "Not A Number"
}
 if (input % 3 === 0 && input %5 === 0){
    return "FizzBuzz";
}
else if (input % 3 !== 0 && input %5 !== 0){
    return input;
}
else if (input % 3 === 0){
    return "Fizz";
}
else if (input % 5 === 0){
    return "Buzz";
}
}