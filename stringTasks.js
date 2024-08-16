// Task-1:
// Count how many times a string has the letter a
/*
const fruit = 'bananaaaanaaana';
let count = 0;
for(let i = 0; i < fruit.length; i++){
    if(fruit[i] === 'a'){
       count = count + 1;
    }
    
    
}
console.log(count)

*/



// Task-2:
// Count how many times a string has the letter a or A
/*
let count = 0;
const string = "Ami banglay gaan gAi , Ami bAnglay gaan gaan gai";
for(let i = 0; i < string.length; i++){
    if(string[i] === 'a' || string[i] === "A"){
        count ++;
    }
}
console.log(count)

*/

// Task-3:
// Check whether a string contains all the vowels a, e, i, o, u

const result = [];
const sentence = "jdfjaeiou sdfdjhsjieri";
const vowels = "aeiou";
for(const letter of sentence){
    if(vowels.includes(letter)){
        result.push(letter);
    }
}
console.log(result);
console.log("The number of vowels in the sentence is: " ,result.length)



// Task-4:
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

// Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.

/*
let string = "rahi";
if(string.includes('x')){

    let newString = string.replace('x','y');
    console.log(newString)
}
else if(string.includes('X')){
    let newString = string.replace('X','Y');
    console.log(newString);
}
else{
    console.log("x or X is not found")
}

*/

// Task-5:
// Capitalize Every first Letter of each word in a String

/*
const sentence = "i am learning web development";

const arr = sentence.split(" ");


const newArr = arr.map((field)=>{
    field = field[0].toUpperCase() + field.slice(1);
    return field;
});

const result = newArr.join(" ");
console.log(result);

*/