// -------------slice()
const address = "andorkilla";
const part = address.slice(2,7);
// console.log(part);


// ----------split();
const sentence = "I am a good and hard working person";
// console.log(sentence.split('s'));

const friendsStr = 'Mahim, lahim, dahim, sahim,fahim';
const friends = friendsStr.split(',');
// console.log(friends);

// -----------------join()
const realFriends = [ 'Mahim', ' lahim', ' dahim', ' sahim', 'fahim' ];
// console.log(realFriends.join('-'));


// -------------concat()
const first = 'Abid';
const last = 'Navid';
// console.log(first + ' ' + last);

// console.log(first.concat(last));
// console.log(first.concat(' ').concat(last));


// -----------------includes()
console.log(first.includes('d'));
console.log(first.includes('m'));
