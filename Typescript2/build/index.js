"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let people = [
    {
        fname: "George",
        lname: "Jungle",
        isMarried: true,
        children: [],
        getFullName: function () {
            return `${this.fname} ${this.lname}`;
        },
        getAge: function (num, fname) {
            return num;
        }
    }
];
console.log(people[0].getFullName());
console.log(people[0].getAge(34, "George"));
