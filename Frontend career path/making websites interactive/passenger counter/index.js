//document.getElementById("count-el").innerText = 6

let count = 0;

let countEl = document.getElementById("count-el");

function increment(){
    count = count + 1 ;
   countEl.innerText = count;
}

