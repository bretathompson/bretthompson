

let address = createAddress('main', 'bobo', '1111');

console.log(address);

function createAddress(street, city, zipCode) {
   return {
      street,
      city,
      zipCode
   };
}

// let address = new Address('main', 'bobo', '1111');

// function Address(street, city, zipCode) {
//  this.street = street;
//  this.city = city;
//  this.zipCode = zipCode;
// }
