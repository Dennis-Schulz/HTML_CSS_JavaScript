// Задание 1

const movies = [
    { title: "Inception", year: 2010 },
    { title: "The Dark Knight", year: 2008 },
    { title: "Interstellar", year: 2014 },
    { title: "The Matrix", year: 1999 }
];

movies.sort((a, b) => {
    return a.year - b.year;
});

console.log(movies);


// задание 2

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
];

console.log(people);
const newPeople = people.reduce((acc, person, index) =>{
    if (index === 0) {
        return person.name;
    } else {
        return acc + ", " + person.name;
    } 
}, "")

console.log(newPeople); 