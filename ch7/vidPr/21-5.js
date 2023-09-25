
const numbers = [1, 2, 3, 4, 1];

const count = countOccurrences(numbers, 1);


function countOccurrences(array, searchElement) {
    let count = 0;
    for (let element of array)
        if (element === searchElement)
        count++;
    return count;
}

document.write(count);

//  return array.reduce((accumulator, current) => {
//     const occurrence = (current === searchElement) ? 1 : 0;
//     document.write(accumulator, current, searchElement);
//     return accumulator + occurrence;
//  }, 0);
// }














