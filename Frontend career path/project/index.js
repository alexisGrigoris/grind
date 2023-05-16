import { menuArray } from './data.js'

function displayItems(){
    let items = ""
    menuArray.forEach(function(item){

        items += `
        <div class="item"> 
        
        <p class="item-name">${item.name} </p>
        <p class="item-emoji">${item.emoji}</p>
        <p class="item-ing">${item.ingredients}</p>
        <p class="item-price">${item.price} </p>
        
        <button id="add-item"> + </button>



        </div>
        `

    })
    return items 

    
}

function render(){
    document.getElementById('itemsFeed').innerHTML = displayItems()
}

render()