// ----------------1----------------

const human = {
    name: "Dennis",
    age: 42
}
console.log(`Имя: ${human.name}, возраст: ${human.age}`);

// ----------------2----------------

const books = [
    {
        title: "Алиса в Стране чудес",
        author: "Льюис Кэрролл",
        genre: "Детская литература"
    },
    {
        title: "Мастер и Маргарита",
        author: "Михаил Булгаков",
        genre: "Роман"
    },
    {
        title: "Преступление и наказание",
        author: "Фёдор Достоевский",
        genre: "Психологический роман"
    },
    {
        title: "Гарри Поттер и философский камень",
        author: "Джоан Роулинг",
        genre: "Фэнтези"
    },
    {
        title: "Война и мир",
        author: "Лев Толстой",
        genre: "Исторический роман"
    }
];

for (let i = 0; i < books.length; i++) {
    console.log(`Название книги: ${books[i].title}`);
    console.log(`Автор: ${books[i].author}`);
    console.log(`Жанр: ${books[i].genre}`);
    console.log(`________________________`);
}

// ----------------3----------------

const rectangle = {
    a: 10,
    b: 35
}
rectangle.s = rectangle.a * rectangle.b;
rectangle.p = rectangle.a + rectangle.b;
console.log(rectangle);
console.log(`Площадь прямоугольника: ${rectangle.s}`);
console.log(`Периметр прямоугольника: ${rectangle.p}`);

// ----------------4----------------

fruits = [
    {
        name: "яблоко",
        color: "красный"
    },
    {
        name: "банан",
        color: "желтый"
    },
    {
        name: "апельсин",
        color: "оранжевый"
    },
    {
        name: "киви",
        color: "зеленый"
    },
    {
        name: "виноград",
        color: "фиолетовый"
    },
    {
        name: "гранат",
        color: "красный"
    }
]
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].color === "красный") {
        console.log(`Фрукт ${fruits[i].name} красным цветом`);
    }
}

// ----------------5----------------

const playlist = {
    name: "Мой плейлист",
    songs: [
        {
            title: "The Emptiness Machine",
            artist: "Subtropica, Blaikz, Cepaque",
            duration: "3:18",
        },
        {
            title: "Бобр",
            artist: "Slava Skripka",
            duration: "2:45"
        },
        {
            title: "Pedro",
            artist: "Jaxomy, Agatino Romero, Raffaella Carra",
            duration: "2:25"
        },
        {
            title: "It's Personal",
            artist: "STXRSHOV",
            duration: "2:04",
        },
    ]
};
console.log(`Название плейлиста: ${playlist.name}`);
for (let i = 0; i < playlist.songs.length; i++) {
    console.log(`Название песни: ${playlist.songs[i].title}`);
    console.log(`Исполнитель: ${playlist.songs[i].artist}`);
    console.log(`Длительность: ${playlist.songs[i].duration}`);
    console.log(`---------------------------`);
}
