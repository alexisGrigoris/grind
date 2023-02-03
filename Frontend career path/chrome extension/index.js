const inputBtn = document.getElementById("input-btn")
let inputf = document.getElementById("input-el")
let myLeads = []
const ulEl = document.getElementById("ulEl")

// Get the leads from the localStorage - PS: JSON.parse()
// Store it in a variable, leadsFromLocalStorage
// Log out the variable

let leadsFromLocalStorage = JSON.parse(localStorage.getItem(myLeads))






inputBtn.addEventListener("click", function() {
    if (inputf.value != '') {
        myLeads.push(inputf.value)
                // Save the myLeads array to localStorage 
    // PS: remember JSON.stringify()
            localStorage.setItem("myLeads", JSON.stringify(myLeads))

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
