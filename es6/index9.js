/*
FOR
OF
LOOP
*/

const salaries = [30000,40000,35000];
let totalMoney = 0;

for (salary of salaries){
    console.log(salary);
    totalMoney += salary;
   
}

console.log("All salaries combined are " + totalMoney + "$");


//same with strings
const fullName = "king julian brandt";
for(char of fullName){
    console.log(fullName);
}