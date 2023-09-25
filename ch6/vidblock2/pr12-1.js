

function sum (...items) { 
    if (items.length === 1 && Array.isArray(items[0]))
    items = [...items[0]];

    return items.reduce((a, b) => a + b);        
}
document.write(sum(1, 2, 3, 4));

