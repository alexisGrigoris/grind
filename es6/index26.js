/*
trailing commas
*/

function add(param1,) { //this "param1," would bring an error before es6
    const first = {
        name: "alex", //same here because its the last property of the object
    }
    console.log(first);

}

add();