/*
Classes (challenge)

Create a class Player with the following:
- Add a Name and Country properties
- Add a function that when it runs should print into the console ("Messi was born in Argentina");
- Make sure to adapt this function to receive dynamic Names and Clubs.

Create a Subclass called TennisPlayer that extends from the class Player
- Add a new property Age.
- Add a function that when it runs should print into the console something similar ("Rafael Nadal is 34 years old and knows how to play Tennis");
- Make sure the Name and Age are dynamic.
*/

class player{
    constructor(name,country){
        this.name = name;
        this.country = country;
    }

    get playerData(){
        return `${this.name} was born in ${this.country}`;
    }

}

class Boxer extends player {
    constructor(name,country,age){
        super(name,country); // we need super to call the properties from the initial constructor (in this case player) and then we can add properties
        this.age = age;
       
    }

    get BoxerData(){
        return `${this.name} is ${this.age} years old and was born in ${this.country}`;
    }
}

class player1{
    constructor(name,country){
        this.name = name;
        this.country = country;
    }

    get playerData1(){
        return `${this.name} was born in ${this.country}`;
    }

}



let julian = new player("julian","germany");
let ggg = new Boxer("Golovkin","Khazakstan",40);
let can = new player1("gggg","wow");
console.log(julian.playerData);
console.log(ggg.BoxerData);
console.log(ggg.playerData); //NOTE I CAN ALSO run ggg from on the player class too. Only because it is extended. 
console.log(can.playerData1);
console.log(can.playerData);// This does not ward beucase Player1 class does not exted Player class. If it did it would run normally.