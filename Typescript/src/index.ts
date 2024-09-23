// here is an array of strings
let dogArray: string[] = ["Atlas", "Ranger", "Trix"];
let numArray: number[] = [14,21,22];
let movieArr: object[] = [];

// function
// data types for params and args
// data types

const getAge = (num:number, fname:string = "I", isMarried:boolean = false): number => {
    return num * 4;
}

let result = getAge(20);
console.log(result);
