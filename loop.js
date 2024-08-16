const mobile = {
    brand : 'samsung',
    price : 25000,
    color: 'black',
    camera: '12 mp',
    isNew : true
}

// for(const prop in mobile){
//     console.log(prop);
//     console.log(mobile[prop]);
// }

/*
for(const prop in mobile){
    // console.log(prop);
// console.log(mobile[prop])
console.log(prop, ':' , mobile[prop]);
}
*/

// ============= object.keys() use kore same kaj korte pari
const keys = Object.keys(mobile)
console.log(keys);
for(const key of keys){
    console.log(key,':', mobile[key])
}

