/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
//There are three different ways that we can acheive a fibonacci sequence 

//Loopiing 
function fib(n) {
 let a =1, b= 0, temp;

 while(n >= 0){
     temp = a;
     a=a+b;
     b=temp;
     n--;
}
return b;
}

//Recursive,
/* checking if the value is less than zero for return the 2 first cases
*/
function fib_two(n){
    if(n <= 1) return 1;
    return fib_two(n-1) + fib_two(n-2);
}

//Memoization
/* an optimization technique used to primarily to speed up computer programs by 
    storing the results of expensive function calls
*/
function fib_three(n,memo){
    memo = memo || {};

    if(memo[n]) return memo[n];
    if(n<=1) return 1;

    return memo[n] = fib_three(n-1,memo)+fib_three(n-2, memo);
}


console.log(fib(20));
console.log(fib_two(20));
console.log(fib_three(20,3));

