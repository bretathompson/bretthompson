
let links = [document.getElementById('sumlink'),
            document.getElementById('statslink'),
            document.getElementById('comlink')
],
    divs = [document.getElementById('sumdiv'),
            document.getElementById('statsdiv'),
            document.getElementById('comdiv'),
];

function change_div(count) {
    links[count].addEventListener('click', function(event) {
        event.preventDefault();
        divs[count].style.display = 'block';
        for (let i = 0; i < divs.length; i++) {
            if (i === count) {
                continue;
            } else {
                divs[i].style.display = 'none';
            }
        }
    }, false);
}

for (let j = 0; j < links.length; j++) {
    change_div(j);
}

divs[1].style.display = 'none';
divs[2].style.display = 'none';