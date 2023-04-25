// console.log('HELLO WORLD!');

// for(var i = 0; i < 500; i++){
//   console.log("HELLO WORLD!");		
// }

// install faker = npm install --save-dev @faker-js/faker;
//const randomEmail = console.log(faker.internet.email());


const {faker} = require('@faker-js/faker');

// console.log(faker.internet.email());
// console.log(faker.date.past());
// console.log(faker.date.past().toString());
// console.log(faker.address.city());

function generateAddress(){
  console.log(faker.address.streetAddress());
  console.log(faker.address.city());
  console.log(faker.address.state());
}

generateAddress();



