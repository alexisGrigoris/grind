import { menuArray } from './data.js'




function displayItems(){
    let items = ""
    menuArray.forEach(function(item){

        items += `
        <div class="item"> 
        <div class="item-prop">
        <p class="item-emoji">${item.emoji}</p>        
        </div>
        <div class="item-prop">
        <p class="item-name">${item.name} </p>
        <p class="item-ing">${item.ingredients}</p>
        <p class="item-price">$${item.price} </p>
       </div>
       
       <div class="item-prop">
        <button id="add-item"> + </button>
        </div>


        </div>
        `

    })
    return items 

    
}


const addItemBtn = document.getElementById('add-item')

function render(){
    document.getElementById('itemsFeed').innerHTML = displayItems()
}

render()
