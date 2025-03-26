const products = [
    { name: "Яблоки", price: 30 },
    { name: "Бананы", price: 80 },
    { name: "Апельсины", price: 40 },
    { name: "Мандарины", price: 90 },
    { name: "Виноград", price: 200 }
];

function hasExpensiveItem(products) {
    return products.some(products => products.price > 50);
}

console.log(hasExpensiveItem(products));