const inputBtn = document.getElementById("input-btn")
const inputf = document.getElementById("input-el")
let myLeads = [1,2,3,4]
const ulEl = document.getElementById("ulEl")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputf.value)
    
})

// 1. Create a variable, listItems, to hold all the HTML for the list items
let listItems = ulEl.innerHTML
listItems = ""
// Assign it to an empty string to begin with
for (let i = 0; i < myLeads.length; i++) {
    // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
    listItems +="<li>" + myLeads[i] + "</li>"
}
// 3. Render the listItems inside the unordered list using ulEl.innerHTML

ulEl.innerHTML = listItems 

