function calculation() {
    let score = parseInt(document.getElementById("score").value);
    let grade;
if (score < 0 || score > 100) {
    document.getElementById("result").innerText= "Вы должны ввести число от 0 до 100";
    return;
}

if (score < 60) {
    grade = "F";
} else if (score < 70) {
    grade = "D";
} else if (score < 80) {
    grade ="C";
} else if (score < 90) {
    grade = "B";
} else if (score <= 100) {
    grade = "A";
} else {
    grade = "Вы должны ввести число от 0 до 100";
}
document.getElementById("result").innerText= "Ваша оценка: " + grade;
}

function calculation2() {
    let dayOfWeek = parseInt(document.getElementById("score2").value);
    let day;
switch (dayOfWeek) {
    case 1:
        day = "Понедельник";
        break;
    case 2:
        day = "Вторник";
        break;    
    case 3:
        day = "Среда";
        break;
    case 4:
        day = "Четверг";
        break;
    case 5:
        day = "Пятница";
        break;
    case 6:
        day = "Суббота";
        break;
    case 7:
        day = "Воскресенье";
        break;
    default:
        day = "Вы должны ввести число от 1 до 7";
}
document.getElementById("result2").innerText= "День недели: " + day;
}
