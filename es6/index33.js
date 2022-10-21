/*
SETS
*/

const firstSet = new Set([1,1,1,9,8,9,1]);

firstSet.add(6).add(5);
console.log(firstSet.delete(16)); 
//.delete brings up true or false. in this case its false because there is no 16 in the array


console.log(firstSet.delete(1)); 

console.log(firstSet.has(9));

console.log(firstSet.size);

firstSet.clear(); //.clear clears the set and resets it.

console.log(firstSet.size);

//Set ignores the same values in an array.