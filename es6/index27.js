/*
PROMISES
*/

const goalPrize = () => {
    return new Promise ( (goal, nogoal) => {
        setTimeout( () => {
            const miss = true;

            if (miss) {
                nogoal("Sorry you missed");
            } else {
                goal ("congratulations. you scored");
                }
        }, )
    }) 
}

goalPrize()
.then( (tor) => console.log(tor))
.catch((fail) => console.log(fail)); 
