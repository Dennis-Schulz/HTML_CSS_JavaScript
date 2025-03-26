async function getData() {
try {
    const result = await fetch('https://sonplaceholder.typicode.com/posts?userId=1')
    if (!result.ok) {
        throw new Error('Ошибка в запросе по адресу ')
    }
    const data = await result.json();
    console.table(data);
} catch (error) {
    console.log("Произошла ошибка:", error.message);
} finally {
    console.log('К сожалению не удалось подключиться к серверу');
}
}

getData();

function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error('На ноль делить нельзя');
        }
        return a / b;
    } catch (error) {
        console.log(error.message);
        return NaN;
    }
}

console.log(divide(5, 2));
console.log(divide(5, 0));