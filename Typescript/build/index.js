// here is an array of strings
let dogArray = ["Atlas", "Ranger", "Trix"];
let numArray = [14, 21, 22];
let movieArr = [];
// function
// data types for params and args
// data types
const getAge = (num, fname = "I", isMarried = false) => {
    return num * 4;
};
let result = getAge(20);
console.log(result);
