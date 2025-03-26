const users = [
    { name: "admin", password: "admin123" },
    { name: "user1", password: "pass123" },
    { name: "user2", password: "qwerty" },
    { name: "user3", password: "123456" },
    { name: "user4", password: "password" }
];


document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
});

document.getElementById("button").addEventListener("click", () => {
 if (document.getElementById("checkbox").checked)
    { saveUser(); }
 else
    { autorization(); }
});

function saveUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmedPassword = prompt("Пожалуйста, подтвердите пароль");

    if ( confirmedPassword!== document.getElementById("password").value) {
        alert("Пароли не совпадают");
        return;
    } 

    if (username === "" || password === "") {
        alert("Введите логин и пароль");
        return;
    } else if (users.find(user => user.name === username)) {
        alert("Пользователь c именем " + username + " уже существует");
        return;
    }

    const newUser = { name: username, password: password };
    users.push(newUser);
    alert("Пользователь c именем " + username + " успешно сохранен");
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("checkbox").checked = false;
    document.getElementById("button").textContent = "Войти";
};

document.getElementById("checkbox").addEventListener("change", () => {
   if (document.getElementById("checkbox").checked)
    { document.getElementById("button").textContent = "Сохранить";}
   else
    { document.getElementById("button").textContent = "Войти"; }
});

function autorization() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username === "" || password === "") {
        alert("Введите логин и пароль");
        return;
    }
    
    const user = users.find(user => user.name === username && user.password === password);
    
    if (user) {
        alert("Добро пожаловать, " + username);
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    } else {
        alert("Неверный логин или пароль");
        }
    };

