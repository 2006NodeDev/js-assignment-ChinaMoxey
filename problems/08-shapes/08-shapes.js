/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height,character) {
 
    switch (shape) {
      case "Square":
        for(let i = 1;i<=height;i++){
          console.log(character+character+character);
        }
        break;
      case "Triangle":
        for(let i = 0; i<=height; i++){
            for(let j = 1; j<=i;j++){
              character+=character;
              console.log(character);
            }
            console.log("");
        }
      
      break;
      case "Diamond":
        for(let i = height; i > -height; i--)
      {
         for(let j = 0; j < i; j++)
         {
            console.log(" ");
         }
         for(let j = 0; j >= i; j--)
         {
            console.log(" ");
         }
         console.log(shape);
        }
        break;
      default:
        break;
    }
}
printShape("Square",3,"%")
printShape("Triangle",2,"*")
printShape("Daimond",10,"*")
