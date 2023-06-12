/*
Challenge
1. Create a function called getDiceRollArray that uses a 
   for loop to return an array of random numbers between 1-6. 
2  The function should have diceCount as a parameter and the 
   array it returns should be diceCount length.
3  For testing purposes, call the function with a diceCount of 
   3 and log out the result. 
** check out hint.md for extra help! **
*/

function getDiceRollArray(diceCount){


  return newArray(diceCount).fill(0).map(function(){
   return Math.floor(Math.random()*6) +1
})



}



function getDiceHtml(diceCount){
  return getDiceRollArray(diceCount).map(function(val){
     return `<div class="dice">${val}</div>`
  }).join(' ')
}

const hero = {
  elementId: "hero",
  name: "Wizard",
  avatar: "images/wizard.png",
  health: 60,
  diceRoll: [3, 1, 4],
  diceCount: 3
}

const monster = {
  elementId: "monster",
  name: "Orc",
  avatar: "images/orc.png",
  health: 10,
  diceRoll: [6],
  diceCount: 1
}




function renderCharacter(data) {
  const { elementId, name, avatar, health, diceRoll, diceCount } = data;
  const diceHtml = getDiceHtml(diceCount )
  document.getElementById(elementId).innerHTML =
      `<div class="character-card">
          <h4 class="name"> ${name} </h4>
          <img class="avatar" src="${avatar}" />
          <div class="health">health: <b> ${health} </b></div>
          <div class="dice-container">
              ${diceHtml}
          </div>
      </div>`
}

renderCharacter(hero);
renderCharacter(monster);