/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    let splicing = someArr.splice(index,1);
    return splicing;
}
spliceElement([1,7,4,6],2);
