const cookie = document.getElementById("modal")
const closeButton = document.getElementById("modal-close-btn")
const form = document.getElementById("consent-form")

setTimeout (function(){
    cookie.style.display = 'inline'
}, 1500)


closeButton.addEventListener("click",function(){
    cookie.style.display='none'
})

form.addEventListener("submit",function(e){
    e.preventDefault()

})
