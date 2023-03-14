const cookie = document.getElementById("modal")
const closeButton = document.getElementById("modal-close-btn")
const form = document.getElementById("consent-form")
const text = document.getElementById("modal-text")
const acceptBtn = document.getElementById("accept-btn")

setTimeout (function(){
    cookie.style.display = 'inline'
}, 1500)


closeButton.addEventListener("click",function(){
    cookie.style.display='none'
})

form.addEventListener("submit",function(e){
    e.preventDefault()
      
    const  formInfo = new FormData(form)
    const formName = formInfo.get('fullname')

    text.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>` 
    setTimeout(function(){
        document.getElementById('upload-text').innerText = "Making the sale..."
    }, 1500)
    setTimeout(function(){
        document.getElementById('modal-inner').innerHTML = `
        <h2>Thanks <span class="modal-display-name">${formName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/bob.gif">
        </div>
    ` 
    }, 3000)
    
})

