/*
ASYNC
&
AWAIT
*/

const photos = [];

async function photoUpload(){
    let uploadStatus = new Promise ( (resolve, reject) => {
        setTimeout( () =>{ 
            photos.push("Birthday photo");
            resolve("Photo uploaded");

        }, 3000)
    } )

    let result = await uploadStatus;

    console.log(result);
    console.log(photos.length);
}

photoUpload();

//So js runs the code syncrhronously which means from top to bottom on row at the time. Now that we set the timeout on 3s it wont wait for the upload status to be resolved 
//So to fix that we use async so it wont run synchronously and await on the uploadStatus so it first awaits it to be resolved and  then we get the result we want.