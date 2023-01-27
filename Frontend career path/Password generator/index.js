const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let field1 = document.getElementById("1")
let field2 = document.getElementById("2")

function passgen() {
    for (i=0; i < 16; i++) {
    let rn = Math.floor(Math.random() * characters.length);
    let newpass = characters[rn];
    field1.textContent +=  newpass
    }
    refresh.textContent = "Refresh page for new passwords"
}

function passgen2() {
    for (i=0; i < 16; i++) {
    let rn = Math.floor(Math.random() * characters.length);
    let newpass = characters[rn];
    field2.innerHTML += newpass 

    }
    field2.innerHTML += ("<button onclick='copy()' id='copy2'> 1 </button>")
}

let refresh = document.getElementById("refresh")

