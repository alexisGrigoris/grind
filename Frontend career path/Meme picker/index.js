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

    if(document.querySelector('input[type="radio"]:checked')){    
        const selectedEmotion = document.querySelector('input[type=radio]:checked').value;
        const gifOnly = checkbox.checked
        
        const matchingCatsArray = catsData.filter(function(cat){
            if (gifOnly) { // if gifOnly alone equals to if gifOnly === true
                return cat.emotionTags.includes(selectedEmotion) && cat.isGif
            }else{
                return cat.emotionTags.includes(selectedEmotion)
            }
            /*
Challenge:
1. Change the .filter() method's function so it returns an 
   array that only has GIFs if the 'GIFs only' option is 
   checked. If the 'GIFs only' option is not checked, it
   should return an array of all matches as it does now.
*/ 



        })
        

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