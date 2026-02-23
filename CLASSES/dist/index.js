
console.log("Hey bubu !!!!!!");
export {};
//# sourceMappingURL=index.js.map

class Player{
    // constructor(){
    //     console.log("in constructor ")
    // }
    static description = "player in game"; // same for all
     score = 0;    // CLASS fIELD
     lives = 10;   // CLASS fIELD
     #marks = 89;  // PRIVATE FIELD CAN BE ACCESSED ONLY FROM THE CLASS like getmarks
    constructor(first,last){  // CONSTRUCTOR
       this.first = first;
       this.last = last;
    //    this.score = 0;
    //    this.lives = 10;
    }
    taunt(){
        console.log("BUbuuuuuuu");
    }
    get fullName(){                         // GETTER
        return `${this.first} ${this.last}`
    }

    set fullName(newName){
         const [first,last] = newName.split("");
         this.first = first;
         this.last = last;
    }

    getMarks(){
        return this.#marks;
    }

    set score (newScore){
        if(newScore < 0){
             throw new Error("score must be valid")
        }
        this.score = newScore;
    }

    setMarks(newMarks){
        this.#marks = newMarks;
    }
    looseLife(){
        this.lives -= 1;
    }
};

const player1 = new Player("jack",'sparrow');
player1.taunt();
console.log(player1);
player1.looseLife();
console.log(player1);
console.log(player1.first);
console.log(player1.last);
console.log(player1.getMarks());
player1.setMarks(76);
console.log(player1.getMarks());
console.log(player1.fullName);  // call the getter as property not as method

const player2 = new Player("bubu","dudu");
player2.taunt();

console.log(Player.description);

class AdminPlayer extends Player{
    isAdmin = true;
    constructor(first,last,powers){
        super(first,last); // inherits parent class constructor
        this.powers = powers;
    }
}

const admin = new AdminPlayer("ra","vi",["shakthi","maruthi"]);
console.log(admin);
admin.taunt();
admin.isadmin;