/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
    //if the number is less than 0 we have to return -1; in order to reject it.
   if(sumNum < 0)
    return -1;
    //if the number is equal to 0 we have to return 1
   else if(sumNum==0)
    return 1;
    //else we run this equations
   else{
       return(sumNum*factorial(sumNum-1));
   }
}
console.log(factorial(10));