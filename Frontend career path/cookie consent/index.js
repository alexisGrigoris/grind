const cookie = document.getElementById("modal")
const xBtn = document.getElementById("modal-close-btn")
const form = document.getElementById("consent-form")

setTimeout (function(){
    cookie.style.display = 'inline'
}, 1500)


xBtn.addEventListener("click",function(){
    cookie.style.display='none'
})

form.addEventListener("submit",function(e){
    e.preventDefault()

})
/*
Challenge:
1. Take control of the form element. 
2. Add an eventListener to the form to listen for a
   "submit" event.
3. When a user clicks "accept", prevent the default
   behaviour that triggers the refresh.
4. Log out "form submitted".
*/  

