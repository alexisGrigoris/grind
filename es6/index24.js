/*
Classes
*/
class footballer {
    constructor(goals, assists) {
        this.goals = goals;
        this.assists = assists;
    }

    goalCelebration(celeb = "Greedy"){
        console.log(celeb);
    }

    get metaData() {
        return `Goals :  ${this.goals}, Assists :  ${this.assists}`;
    } 

    static goat(){                      //?
        return"reus is the goat" ;
    }
}

class Conor extends footballer {
    goalCelebration(celeb = "BigMan"){
        console.log(celeb);
    }
}

let julian = new Conor(24,22);
let sancho = new footballer(60,29);


julian.goalCelebration();
julian.goalCelebration("Flex");
console.log(julian.metaData);
console.log(footballer.goat());
sancho.goalCelebration();
console.log(sancho.metaData);
console.log(julian.goals);
console.log(julian.assists);