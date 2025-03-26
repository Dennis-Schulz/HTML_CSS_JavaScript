function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            if (b === 0) {
                result = 'Ошибка: деление на ноль';
            } else {
                result = a / b;
            }
            break;
        default:
            result = 'Ошибка: неверный оператор';
    }
    document.getElementById('result').textContent = `Результат: ${result}`;
}

function calculateSum() {
    let arr = document.getElementById('input2').value.split(' ');
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += parseFloat(arr[i]);
    }
    document.getElementById('result2').textContent = `Результат: ${sum}`;
}

const students = [
    {
        name: "Иван",
        age: 20,
        kurs: 2
    },
    {
        name: "Мария",
        age: 19,
        kurs: 1
    },
    {
        name: "Алексей",
        age: 21,
        kurs: 3
    },
    {
        name: "Ольга",
        age: 22,
        kurs: 4
    },
    {
        name: "Дмитрий",
        age: 20,
        kurs: 2
    }
];



function displayStudentInfo(name) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].name === name) {
            document.getElementById('result3').innerText =
             `Имя: ${students[i].name} 
              Возраст: ${students[i].age}
              Курс: ${students[i].kurs}`;
            break
        }
    }
}