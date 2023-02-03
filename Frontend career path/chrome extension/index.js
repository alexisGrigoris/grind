const inputBtn = document.getElementById("input-btn")
let inputf = document.getElementById("input-el")
let myLeads = []
const ulEl = document.getElementById("ulEl")

localStorage.setItem("myName", "Alexis Grigoris")



let name = localStorage.getItem("myName")
console.log(name)

 localStorage.clear()


// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage



inputBtn.addEventListener("click", function() {
    if (inputf.value != '') {
        myLeads.push(inputf.value)
        renderLeads()
        inputf.value =''
    }   else {
    }
})

function renderLeads(){
listItems = ""
for (let i = 0; i < myLeads.length; i++) {

    listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
}
ulEl.innerHTML = listItems 
}
