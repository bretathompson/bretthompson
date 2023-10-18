
let qform = document.getElementById("qform"),

    qs = [document.getElementById("q1"),
        document.getElementById("q2"),
        document.getElementById("q3")
],

ans = [4, 2550, 4958],
grade = document.getElementById("grade");

qform.addEventListener("submit", function(event) {
    let num_correct = 0,
    num_questions = qs.length,
    grade_HTML = "";
    score = 0;
    event.preventDefault();

    for (let i = 0; i < num_questions; i++) {
        if (+qs[i].value === ans[i]) {
            num_correct += 1;
        }
    }
    score = Math.round(num_correct / num_questions * 100);
    grade_HTML = '<progress max="100' ;
    grade_HTML += 'value="' + score + '">';
    grade_HTML += score + '%</progress> ';
    grade_HTML += 'Grade: ' + score + '%';
    grade.innerHTML = grade_HTML;
}, false);




