
showNumbers(10);

function showNumbers(limit) {
    for (let i = 0; i<= limit; i++) {
        if (i % 2 === 0) 
        document.write(i, ' EVEN <br>');
        else document.write(i, ' ODD <br>');
    }
}


