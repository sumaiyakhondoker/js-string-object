// system 1========================
// ---------------(1)-------
/*
const sentence = "I am learning web dev.";
let reverse = '';
for(const letter of sentence){
    // console.log(letter);
    reverse = letter + reverse;
}
console.log(reverse);
*/

// ----------------------(2)
/*
const numbers = "1 2 3 4 5";
let reverse = '';
for(const number of numbers){
    // console.log(number);
    reverse = number + reverse;

}
console.log(reverse);
*/

// =============== system 2 ==============
/*
const sentence = 'I am learning web dev.';
let rev = '';
for(let i = 0; i < sentence.length; i++){
    // console.log(i);
    // console.log(sentence[i]);
    const letter = sentence[i];
    rev =  letter + rev;
}
console.log(rev);
*/

// ============ system 3 (shortcut) =========
const sentence = "I am a student of GAI";
const reversed = sentence.split('').reverse().join('');
console.log(reversed);