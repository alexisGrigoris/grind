const inputBtn = document.getElementById("input-btn")
let inputf = document.getElementById("input-el")
let myLeads = []
const ulEl = document.getElementById("ulEl")

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
