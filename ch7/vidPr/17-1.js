

const numbers = arrayFromRange(-10, -4);


function arrayFromRange(min, max) {
   const range = [];
   for (let i = min; i <= max; i++)
   range.push(i);
   return range;
}

document.write(numbers);






