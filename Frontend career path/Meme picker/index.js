import { catsData } from './data.js'

const emotionRadios = document.getElementById('emotion-radios')
const test = document.getElementById('test')
const getImgBtn = document.querySelector('.get-image-btn');
const checkbox = document.getElementById('gifs-only-option')


emotionRadios.addEventListener('change', highlightCheckedOption)
getImgBtn.addEventListener('click',getMatchingCatsArray) 

function highlightCheckedOption(e){

    const radios = document.getElementsByClassName('radio')
    for (let radio of radios) {
        radio.classList.remove('highlight');
    }

document.getElementById(e.target.id).parentElement.classList.add('highlight')

}

function getMatchingCatsArray() {

    const gifOnly = checkbox.checked

if(document.querySelector('input[type="radio"]:checked')){    
    const val = document.querySelector('input[type=radio]:checked').value;
    test.textContent = val + gifOnly
    }
    

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