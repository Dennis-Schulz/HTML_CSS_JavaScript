// задание 1

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 15 }
];

const newPeople = people.map(person => ({
    ...person,
    status: person.age > 18 ? "взрослый" : "ребенок"
}));

console.log(newPeople);

// задание 2 

const movies = [
    { title: "Inception", rating: 4.9 },
    { title: "The Dark Knight", rating: 3.0 },
    { title: "Interstellar", rating: 4.8 },
    { title: "The Matrix", rating: 4.5 }
];

movies.forEach((movie) => {
    if  (movie.rating > 4) {
        console.log(`Название фильма: ${movie.title}`
            + ` с рейтингом ${movie.rating}`);
    }
});
