const person = {
    name: 'sodor uddin',
    profession : 'developer',
    age : 25,
    salary : 25000,
    married : true,
    'fav places' : ['bandorban','saintmartin', 'kuakata']
}
person.salary = 35000;
person['age'] = 30;
person['fav places'] = ['maldives', 'bali','pataya'];


const propName = 'profession';
person[propName] = 'devops'
console.log(person);