// Задание 1

const array = [1, 2, 3, 4, 5];

function calculate(arr) {
    let sum = 1;
    for (let i = 0; i < array.length; i++) {
        sum *= array[i];
    }
    return sum;
}
const result = calculate(array);
console.log(`Произведение всех элементов массива: ${result}`);



// Задание 2

function calculate2(arr) {
    let sum = 0;
    i=0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    return sum;
}

const result2 = calculate2(array);
console.log(`Сумма всех элементов массива: ${result2}`);
