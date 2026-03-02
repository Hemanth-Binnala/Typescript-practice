import Dog from "./Dog"
import {add,multiply,divide} from "./utils"
import ShelterDog from "./ShelterDog";




console.log("from index")

const rlton = new Dog("chiku","Aussie",9);

rlton.bark();

console.log(add(3,4))
console.log(multiply(3,4))
console.log(divide(3,4))

const buffy = new ShelterDog('ba', " tommy",2,"hut");
console.log("from indexxxxxxxxxxx")