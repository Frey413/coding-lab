class animal {
    public size;
    private color: string = "blue";
    public breed;

    constructor(boible) {
        this.breed = boible;
        console.log(this.breed + " was born");
        this.size = "2 lbs";
    }

    public dye(dyeColor: string) {
        this.color = dyeColor;
    }
    public see() {
        return this.color;
    }
}

class dog extends animal {
    public bark() {
        console.log("bark bark!!!");
    }
}

let pidgeon: animal = new animal("african");
let otherPidgeon: animal = new animal("european");
console.log(pidgeon);
console.log(otherPidgeon);

let doogle: dog = new dog("terrier");
console.log(doogle);
doogle.dye("red");
console.log(doogle.see());
doogle.bark();