import { catsData } from './data.js'
const radiosField = document.getElementById('emotion-radios')

function getEmotionsArray(cats){
    const catsEmotes = []

    for (let cat of cats){
        for(let emote of cat.emotionTags){
           if (!catsEmotes.includes(emote)){
            catsEmotes.push(emote)
            }
        }
        
    }

    return catsEmotes
}

console.log(getEmotionsArray(catsData)) 

function renderEmotionsRadios(cats){
    const emotions = getEmotionsArray(cats)
    let radioItems = ``
    for(let emote of emotions) {
        radioItems += `
        <div class="radio">

            <label for = "${emote}"> ${emote} </label>

            <input 
            type = "radio"
            value = "${emote}"
            id = "${emote}"
            name = "emotions">
            
           

        </div>
        `
    }
        radiosField.innerHTML = radioItems
    }

    renderEmotionsRadios(catsData)