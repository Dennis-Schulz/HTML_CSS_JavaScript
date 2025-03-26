let count = 0;

function getRandomColor() {
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return color;
}

function changeColor() {
    document.getElementById("text2").style.color = getRandomColor();
};

document.getElementById("button").addEventListener("click", () => {
    count++;
    if (count <= 10) {
        document.getElementById("text").innerHTML = `Вы кликнули ${count} раз`;
        document.getElementById("text").style.backgroundColor = getRandomColor();
        if (count % 5 === 0) {
            document.body.style.backgroundColor = getRandomColor();
        }
    }
    if (count === 10) {
        document.getElementById("text2").innerHTML = `Поздравляем! Вы достигли 10 кликов!`;
        setInterval(changeColor, 500);
    }
});