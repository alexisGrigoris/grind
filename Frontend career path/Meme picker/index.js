import { catsData } from './data.js'

const emotionRadios = document.getElementById('emotion-radios')
const test = document.getElementById('test')


emotionRadios.addEventListener('change', highlightCheckedOption)

function highlightCheckedOption(e){
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
/*
Challenge:
1. highlightCheckedOption should take control 
   of the selected radio input and add the CSS
   class of "highlight" to its classlist
*/
    console.log(e.target.id)
}
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
        emotionRadios.innerHTML = radioItems
    }

    renderEmotionsRadios(catsData)