const goat = {
    team : "Borussia Dortmund",
    name : "julian brandt",
    address :{
        city: "Dortmund"
    }
}

//console.log(goat.name,goat.address.city);

const { name, team, address: { city } } = goat;

console.log(`${team}'s number 10 german international ${name} lives in ${city}`);