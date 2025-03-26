const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const colors = ['#ff0000', '#00ff00', '#0000ff'];
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function render() {
    ctx.clearRect(300, 200, 200, 200); 
    ctx.fillStyle = getRandomColor(); 
    ctx.fillRect(300, 200, 200, 200); 
}

setInterval(render, 1000);

render();
