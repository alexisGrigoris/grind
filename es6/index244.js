class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }
    
    makeNoise(sound = 'Loud Noise') {
        console.log(sound);
    }
    
    get metaData() {
        return `Type: ${this.type}, Legs: ${this.legs}`;
    }
    
    static return10() {
        return 10;
    }
}

class Cat extends Animal {
    makeNoise(sound = "meow") {
        console.log(sound);
    }
}

let cat = new Cat('Cat', 4);

cat.makeNoise();

console.log(cat.metaData);
console.log(cat.return10());