const posts = [
    {
        name: "Thomas Shelby ",
        username: "TommyOBE",
        location: "Small Heath, Birmingham",
        avatar: "images/tomAv.jpg",
        post: "images/tomPost.jpeg",
        comment: "You can change what you do, but you can't change what you want.",
        likes: 2131
    },
    {
        name: "Arthur Shelby",
        username: "Peaky Blinder",
        location: "The Garrison Pub, Birmingham",
        avatar: "images/arthurAv.png",
        post: "images/arthurPost.jpg",
        comment: "Fast women and slow horses will ruin your life",
        likes: 432
    },
        {
        name: "John Shelby",
        username: "JonnyBoy",
        location: "The Garrison Pub, Birmingham",
        avatar: "images/johnAv.png",
        post: "images/johnPost.jpeg",
        comment: "The force will be with you. Always",
        likes: 1523
    }
]

const body = document.getElementById("feed")





function render(newPosts) {

    let feed = `<header>
                    <div class="container">
                        <h1> Instagram </h1>
                        <img src="images/vataman2.jpg" class="vata" alt="A picture of the creator of this project">
                    </div>
                </header>`
    for (let i = 0; i < posts.length; i++) {
     
        feed += `
        
        <section class="post-info">
            <div class="container">
                <img src="${posts[i].avatar}" class="postAvatar" alt="User's Avatar">
                <p id="name"> ${posts[i].name}</p>
                <p id="location"> ${posts[i].location}</p>
                
            </div>
        </section>

        <section class="post-img">
            <div class="container">
                <img src="${posts[i].post}" class="imgPost">
            </div>
        </section>

        <section class="post-details">
            <div class="container">
            <button> <img src="images/heart.png"  class="btn-img like-btn"> </button>
            <button> <img src="images/comment.png" class="btn-img"> </button>
            <button> <img src="images/share.png" class="btn-img" > </button>
                
            <p id="likes"> ${posts[i].likes} likes</p>
            <p id="username"> ${posts[i].username} </p>
            <p id="caption"> ${posts[i].comment}  </p>
            </div>
        </section>
        `
        
        
        
    }
    body.innerHTML = feed
   

   

}


render(posts)

let likeBtn = document.querySelector(".like-btn")
let likesno = document.getElementById("likes")
likeBtn.addEventListener("click",function(){
    likesno.innerHTML = `${(posts[0].likes+1)} likes`;
    likeBtn.src="images/liked.png";
})