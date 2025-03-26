function createCard(element) {
    const id = element.id;
    const username = element.username;
    const email = element.email;
    const phone = element.phone;
    const address = element.address.city;
    const company = element.company.name;
    const container = document.querySelector(".container");
    const card = document.createElement("div");
    card.style.backgroundColor = randomColor();
    card.classList.add("card", "shadow");
    card.innerHTML = `
    <h2>${id}</h2>
    <h3>${username}</h3>
    <p>${email}</p>
    <p>${phone}</p>
    <p>${address}</p>
    <p>${company}</p>
`;

    container.appendChild(card);
    card.addEventListener("mouseover", (e) => {
        document.body.style.backgroundColor = card.style.backgroundColor;
        card.classList.remove("shadow");
    })
};

function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        data.forEach(element => {
            createCard(element);
        });
    })
    .catch(error => console.error("Fetch error:", error));



