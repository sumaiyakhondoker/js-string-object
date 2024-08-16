/*Task-1
Access the golden rod color value in output.
*/

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

// console.log(colors['golden rod']);

// Task-2
// For this object below add a property named passenger capacity with value 5

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

car['passenger capacity'] = 5;
// console.log(car);

// Task-3
// Display the physics marks as output.
/*
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

const mark = student.physics.marks;
// console.log(mark);



*/

// Task-4
// Count the number of properties.
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
const keys = Object.keys(student);
// console.log(keys)
const propertyNum = keys.length;
// console.log(propertyNum);



// Task-5 (Hard)
// Loop through an object and print the key-value pairs with their types

let myObject = {
name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

/*output mile gece------------
key: name | type:  string
key: age | type:  number
key: city | type:  string
key: isStudent | type:  boolean
*/

for(const prop in myObject){
    // console.log(prop);
    const value =  myObject[prop];
    const valueType = typeof value;
    console.log('key: ',prop, '|', 'type: ', valueType);
}


