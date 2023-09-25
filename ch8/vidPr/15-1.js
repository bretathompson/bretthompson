

let address = {
   street: 'main',
   city: 'bobo',
   zipCode: '1111',
};
   
function showAddress(address) {
      for (let key in address)
      console.log(key, address[key]);
}
   showAddress(address);
   






