import {Person} from "./helper"

let people: Person[] = [
    {
        fname: "George",
        lname: "Jungle",
        isMarried: true,
        children:[],
        getFullName: function () {
            return `${this.fname} ${this.lname}`
        },
        getAge: function(num, fname) {
            return num;
        }
        
    }
]

console.log(people[0].getFullName());
console.log(people[0].getAge(34,"George"));
