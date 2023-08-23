import {getDiceRollArray, getDicePlaceholderHtml} from './utils.js'

/*
Challenge
1. In the getDiceHtml method, map over currentDiceScore 
to return this string of html template for each element:
<div class="dice">${num}</div>`. Save this new array
to diceArray.
2. Modify the attack() function in index.js to get our 
app working again.
*/

function Character(data) {
    Object.assign(this, data)

    this.diceArray = getDicePlaceholderHtml(this.diceCount)
    
    this.getDiceHtml = function(diceCount) {
        this.currrentDiceScore = getDiceRollArray(this.diceCount).map(this.currrentDiceScore)
    }

    this.getCharacterHtml = function () {
        const { name, avatar, health, diceCount, diceArray } = this;      
        let diceHtml = this.getDiceHtml(diceCount);
        
           return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                <div class="dice-container">
                    ${diceArray}
                </div>
            </div>`;
    }  
}

export default Character