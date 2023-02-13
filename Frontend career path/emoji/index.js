// Push the emoji into the myEmoji's array, and clear the input field
// However, if the input value is empty, don't do anything

const myEmojis = ["👨‍💻", "🎮", "⚽", "🥊" ,"🐊"]
const emojiContainer = document.getElementById("emoji-container")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const emojiInput = document.getElementById("emoji-input")
const shiftBtn = document.getElementById("shift-btn")
const popBtn = document.getElementById("pop-btn")


function renderEmojis(val) {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
}}

renderEmojis()

pushBtn.addEventListener("click", function push(){
    if (emojiInput.value) {
        
        myEmojis.push(emojiInput.value)
        renderEmojis(emojiInput.value)
        emojiInput.value = ""
        
        
    
    
    }
})

unshiftBtn.addEventListener("click", function unshift(){
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        renderEmojis(emojiInput.value)
        emojiInput.value = ""
        
        
    
    
    }
})

shiftBtn.addEventListener("click", function shift(){
  
        myEmojis.shift(emojiInput.value)
        renderEmojis(emojiInput.value)
   
        
        
    
    
    
})

popBtn.addEventListener("click", function pop(){
    
        myEmojis.pop(emojiInput.value)
        renderEmojis(emojiInput.value)
      
        
        
    
    
    
})



/*
RENDER EMOJIS

for(let i=0; i < myEmojis.length; i++) {
    emojicont.innerHTML += `<span> ${myEmojis[i]} </span>`
}


for (let i = 0; i < myEmojis.length; i++) {
    // write your code here
    const emoji = document.createElement('span')
    emoji.textContent = myEmojis[i]
    emojiContainer.append(emoji)
}*/


