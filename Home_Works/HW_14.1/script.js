function waitForTime(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Ожидание завершено через " + time + " мс.");
        }, time);
    });
}   

waitForTime(3000).then((result) => console.log(result));
waitForTime(5000).then((result) => console.log(result));