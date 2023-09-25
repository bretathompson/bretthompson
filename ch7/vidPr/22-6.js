

const numbers = [1, 2, 3, 4];

const max = getMax([1, 2, 2, 1, 3]);


function getMax(array) {
    if (array.length === 0) 
        return undefined;

    let max = array[0];

    for (let i = 1; i < array.length; i++)
        if (array[i] > max)
        max = array[1];

    return max;
}

document.write(max);



// array.reduce((accumulator, current) => {
//     if (current > accumulator) 
//         return current;
//     return accumulator;

//     return (current > accumulator) ? current : accumulator;
// });
// }


