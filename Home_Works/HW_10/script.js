document.querySelector("div").addEventListener("mouseover", (event) => {
    event.target.style.cssText = "background: red; transition: background 1s ease-in-out";
});
document.querySelector("div").addEventListener("mouseout", (event) => {
    event.target.style.cssText = "background: blue; transition: background 1s ease-in-out";
});

function RandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById("colorButton").addEventListener("click", () => {
    document.getElementById("colorBlock").style.cssText = "background: " + RandomColor() + "; transition: background 1s ease-in-out";
});