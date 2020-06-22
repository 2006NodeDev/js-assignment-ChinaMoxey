/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
   
   if(startIndex<0||someStr.length<startIndex){
        throw("start input is incorrect");
   }else if(endIndex<startIndex||someStr.length<=endIndex){
        throw("end input is incorrect");
   }else{
       makeString="";
       for(i = startIndex;i<endIndex;++i){
            makeString+=someStr[i];
       }
       return makeString;
   }
}
let myString = "Hello";
console.log(substring(myString,0,3));