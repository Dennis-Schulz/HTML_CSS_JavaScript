const inputName = document.getElementById('regName');
const inputPhoneNumber = document.getElementById('regTel');
const inputEmail = document.getElementById('regMail');
const inputPassword = document.getElementById('regPasswrord');
const signUpBtn = document.getElementById('sign-up');
const inputLogin = document.getElementById('authMail');
const inputPasswordLogin = document.getElementById('authPasswrord');
const logBtn = document.getElementById('log-in');
const body = document.querySelector('body');
const popupReg = document.getElementById("register");
const popupAuth = document.getElementById("authorization");
const openBtnReg = document.querySelector(".open-popup-reg");
const openBtnAuth = document.querySelector(".open-popup-auth");
const closeBtnReg = document.querySelector(".close-popup-reg");
const closeBtnAuth = document.querySelector(".close-popup-auth");
const regShow = document.querySelector('.open-popup-reg');
const authShow = document.querySelector('.open-popup-auth');
const profile = document.querySelector('#user');
const logOut = document.querySelector('#log-out');
const users = JSON.parse(localStorage.getItem('users')) || [];
const account = JSON.parse(localStorage.getItem('account')) || [];

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
});

document.addEventListener("DOMContentLoaded", (e) => {
  const account = JSON.parse(localStorage.getItem('account')) || [];
  if (account.name!== undefined) {
        regShow.classList.add('hid');
        authShow.classList.add('hid');
  profile.textContent =`Добро пожаловать, ${account.name}`; 
} else return;
});


function defaultFormReg() {
    inputName.style.border = "1px solid #ccc";
    inputPhoneNumber.style.border = "1px solid #ccc";
    inputEmail.style.border = "1px solid #ccc";
    inputPassword.style.border = "1px solid #ccc";
    form.reset();
}

function defaultFormAuth() {
    inputLogin.style.border = "1px solid #ccc";
    inputPasswordLogin.style.border = "1px solid #ccc";
    form.reset();
}

function checkFormReg() {
    function validateInput(input) {
        if (input.value.trim() === '') {
            input.style.border = "2px solid red";
        } else {
            input.style.border = "2px solid green";
        }
    }
    validateInput(inputName);
    validateInput(inputPhoneNumber);
    validateInput(inputEmail);
    validateInput(inputPassword);
    const error = document.createElement('p');
    error.textContent = 'Вы заполнили не все поля';
    document.querySelector('.popup-content').appendChild(error);
    setTimeout(() => {
        error.remove();
    }, 4000);
}

function checkFormAuth() {
    function validateInput(input) {
        if (input.value.trim() === '') {
            input.style.border = "2px solid red";
        } else {
            input.style.border = "2px solid green";
        }
    }
    validateInput(inputLogin);
    validateInput(inputPasswordLogin);
}

function errorReg(){
    inputEmail.style.border = "2px solid red";
    const error = document.createElement('p');
    error.textContent = 'Пользователь с таким email уже зарегистрирован';
    document.querySelector('.popup-content').appendChild(error);
    setTimeout(() => {
        error.remove();
    }, 4000);
};

function errorAuth(){
    const error = document.createElement('p');
    error.textContent = 'Неправильный логин или пароль';
    document.querySelector('.popup-content.popup-content-auth').appendChild(error);
    setTimeout(() => {
        error.remove();
    }, 4000);
};


signUpBtn.addEventListener('click', () => {
    if (inputName.value.trim() === '' || inputPhoneNumber.value.trim() === '' || inputEmail.value.trim() === '' || inputPassword.value.trim() === '') {
        checkFormReg();
    } else if (users.some(user => user.email === inputEmail.value)) {
      errorReg();
    } else {
        const user = {
            name: inputName.value,
            phoneNumber: inputPhoneNumber.value,
            email: inputEmail.value,
            password: inputPassword.value,
        };
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        const error = document.createElement('p');
        error.style.color = 'green';
        error.textContent = 'Ваш аккаунт успешно зарегистрирован';
        document.querySelector('.popup-content').appendChild(error);
        defaultFormReg();
        setTimeout(() => {
            error.remove();
            popupReg.classList.remove("show");
        }, 2000)
    }
})

logBtn.addEventListener('click', () => {
    const user = users.find(user => user.email === inputLogin.value && user.password === inputPasswordLogin.value);
    if (user) {
        popupAuth.classList.remove("show");
        defaultFormReg();
        regShow.classList.add('hid');
        authShow.classList.add('hid');
        profile.textContent = `Добро пожаловать, ${user.name}`;
        localStorage.setItem('account', JSON.stringify(user));
    } else {
        checkFormAuth();
        errorAuth();
    }
})

inputName.addEventListener('input', () => {
    let regex = /^[a-zA-Zа-яА-Я\s-]+$/;
    if (inputName.value.length < 2 || inputName.value.length > 24 || !regex.test(inputName.value)) {
        inputName.style.border = '2px solid red';
    } else {
        inputName.style.border = '2px solid green';
    }
})

inputPhoneNumber.addEventListener('input', () => {
    let regex = /^\+\d+$/;
    if (inputPhoneNumber.value.length < 8 || inputPhoneNumber.value.length > 12 || !regex.test(inputPhoneNumber.value)) {
        inputPhoneNumber.style.border = '2px solid red';
    } else {
        inputPhoneNumber.style.border = '2px solid green';
    }
});

inputEmail.addEventListener('input', () => {
    if (inputEmail.value.length < 7 || !inputEmail.value.includes('@')) {
        inputEmail.style.border = '2px solid red';
    } else {
        inputEmail.style.border = '2px solid green';
    }
});

inputLogin.addEventListener('input', () => {
    if (inputLogin.value.length < 7 || !inputLogin.value.includes('@')) {
        inputLogin.style.border = '2px solid red';
    } else {
        inputLogin.style.border = '2px solid green';
    }
});

inputPassword.addEventListener('input', () => {
    if (inputPassword.value.length < 5 || inputPassword.value.length > 26) {
        inputPassword.style.border = '2px solid red';
    } else {
        inputPassword.style.border = '2px solid green';
    }
});

inputPasswordLogin.addEventListener('input', () => {
    if (inputPasswordLogin.value.length < 5 || inputPasswordLogin.value.length > 26) {
        inputPasswordLogin.style.border = '2px solid red';
    } else {
        inputPasswordLogin.style.border = '2px solid green';
    }
});

openBtnReg.addEventListener("click", function () {
    popupReg.classList.add("show");
});

openBtnAuth.addEventListener("click", function () {
    popupAuth.classList.add("show");
});

closeBtnReg.addEventListener("click", function () {
    popupReg.classList.remove("show");
    defaultFormReg();
});

closeBtnAuth.addEventListener("click", function () {
    popupAuth.classList.remove("show");
    defaultFormAuth();
});

popupReg.addEventListener("click", function (e) {
    if (e.target === popupReg) {
        popupReg.classList.remove("show");
        defaultFormReg();
    }
});

popupAuth.addEventListener("click", function (e) {
    if (e.target === popupAuth) {
        popupAuth.classList.remove("show");
        defaultFormAuth();
    }
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        popupReg.classList.remove("show");
        defaultFormReg();
    }
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        popupAuth.classList.remove("show");
        defaultFormAuth();
    }
});

logOut.addEventListener('click', () => {
    profile.textContent = ``;
    regShow.classList.remove('hid');
    authShow.classList.remove('hid');
    defaultFormAuth();
    localStorage.removeItem('account');
})




