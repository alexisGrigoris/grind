// Push the emoji into the myEmoji's array, and clear the input field
// However, if the input value is empty, don't do anything

const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emoji-container")

function renderEmojis(val) {
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
}}

renderEmojis()
const pushBtn = document.getElementById("push-btn")
pushBtn.addEventListener("click", function(){
    const emojiInput = document.getElementById("emoji-input")
    if (emojiInput.value) {
        
        myEmojis.push(emojiInput.value)
        emojiContainer.innerHTML = ""
        renderEmojis(emojiInput.value)
        emojiInput.value = ""
        
        
    
    
    }
})

/*for(let i=0; i < myEmojis.length; i++) {
    emojicont.innerHTML += `<span> ${myEmojis[i]} </span>`
}


for (let i = 0; i < myEmojis.length; i++) {
    // write your code here
    const emoji = document.createElement('span')
    emoji.textContent = myEmojis[i]
    emojiContainer.append(emoji)
}*/


