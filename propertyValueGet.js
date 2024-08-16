const person = {
    name: 'sodor uddin',
    profession : 'developer',
    age : 25,
    salary : 25000,
    married : true,
    'fav places' : ['bandorban','saintmartin', 'kuakata']
}
// console.log(person);


// -------------dot notation------------
// console.log(person.profession);
const income= person.salary;
// console.log(income);

// --------------bracket notation -----------
// console.log(person['profession']);
// const boyosh = person['age'];
// console.log(boyosh);

// console.log(person['fav places']);

const keyName = 'profession'
console.log(person[keyName])

