import { menuArray } from './data.js'



document.addEventListener('click', function(e){
    if(e.target.dataset.addbtn) {
        handleAddBtn(e.target.dataset.addbtn)
    }
    else{

    }
})

function handleAddBtn(itemId) {
    const targetItemObject = menuArray.filter(function(item){
        return item.id === itemId && item.price
                
    })
    if (targetItemObject.price){
        test.innerHTML = `<h1>${itemId}</h1>`
    }
    else{
        test.innerHTML = `<h2> ${itemId} xaxa </h2>`
    }
    render()
}

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
        <button id="add-item" data-addbtn=${item.id}> + </button>
        </div>


        </div>
        `

    })
    return items 

    
}

function render(){
    document.getElementById('itemsFeed').innerHTML = displayItems()
}

render()
