import { menuArray } from './data.js'

function displayItems(){
    let items = ""
    menuArray.forEach(function(item){

        items += `
        <div class="item"> 
        ${item.name}
        ${item.emoji}
        ${item.ingredients}
        ${item.emoji}
        <h1>212 </h1>



        <div>
        `

    })
    return items 

    
}

function render(){
    document.getElementById('itemsFeed').innerHTML = displayItems()
}

render()