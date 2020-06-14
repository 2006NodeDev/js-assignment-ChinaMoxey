/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    //create an empty string that will host the new crested string
   let newString ="";

    //for loop
    // i is equal to the length if the string minus 1
    // corresponds to the last character of the string
    //As long as i is greater than or equals 0, the loop will go on we decrement i after
    //after each iteration
   for(let i = someStr.length -1; i >=0; i--){
       newString+=someStr[i];
   }
   //reutrn the reverse string
   return newString;
}
 console.log(reverseStr('back'));