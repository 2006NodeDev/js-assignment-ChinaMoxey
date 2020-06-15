/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */

//Using bitwise AND (&) operator to check if a number is even or odd
function isEven(someNum) {
    if((someNum & 1) == 0){
        return "This number is even";
    }
    else{
        return "This number is odd";
    }
}
console.log(isEven(5));