function getDiceRollArray(diceCount) {
  return new Array(diceCount).fill(0).map(function(){
      return Math.floor(Math.random() * 6) + 1
  })    
}

// CHALLENGE 
// 1. Add this function as a method of our character constructor
// 2. Make a small change to getCharacterHtml to make the app work again

function getDiceHtml(diceCount) {
  return getDiceRollArray(diceCount).map(function(num){ 
      return  `<div class="dice">${num}</div>`
  }).join('')
}

const hero = {
  elementId: "hero",
  name: "Wizard",
  avatar: "images/wizard.png",
  health: 60,
  diceCount: 3
}

const monster = {
  elementId: "monster",
  name: "Orc",
  avatar: "images/orc.png",
  health: 10,
  diceCount: 1
}

function Character(data){

  Object.assign(this, data)
  this.getCharacterHtml = function() {
    const { elementId, name, avatar, health, diceCount } = this;
    const diceHtml = getDiceHtml(diceCount)
    document.getElementById(elementId).innerHTML =
      `<div class="character-card">
          <h4 class="name"> ${this.name} </h4>
          <img class="avatar" src="${this.avatar}" />
          <div class="health">health: <b> ${this.health} </b></div>
          <div class="dice-container">    
              ${diceHtml}
          </div>
      </div>`;
  }

}

const manster1 = new Character(monster)
const hero1 =  new Character(hero)
manster1.getCharacterHtml()
hero1.getCharacterHtml()

