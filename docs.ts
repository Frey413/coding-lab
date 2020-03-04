class animal {
    public size;
    private color: string = "blue";
    public breed;

    constructor(boible) {
        console.log("was born")
        this.size = "2 lbs"
        this.breed = boible
    }

    public dye(farbe: string) {
        this.color = farbe
    }
    public see() {
        return this.color
    }
}

class dog extends animal {
    public bark() {
        console.log("bark bark!!!");
    }
}

let pidgeon: animal = new animal("african")

console.log(pidgeon.see())

let doogle: dog = new dog("terrier");
console.log(doogle);
doogle.dye("red");
console.log(doogle.see());
doogle.bark();