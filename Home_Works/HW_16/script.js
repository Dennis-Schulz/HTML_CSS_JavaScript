async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.table(data);
}
getData();

async function getData2() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const data = await response.json();
    console.table(data);
}
getData2();
