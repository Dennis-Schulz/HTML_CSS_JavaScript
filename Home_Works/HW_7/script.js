
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}



const arr2 = [4, 2, 23, 6, 12, 18, 21, 24, 20, 22, 8, 19, 6, 9];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > 8 && arr2[i] < 20) {
        console.log(arr2[i]);
    }
}



let arr3 = [6754, 100, 564, 676, 34, 54387, 65, 97, 676567, 43, 68745, 121, 65, 87543, 56, 54, 25, 78];
let min = arr3[0];
for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] < min) {
        min = arr3[i];
    }
}
console.log(min);



let arr4 = [2, 5, 8, 2, 6, 7, 4, 9, 6, 4, 9];
arr4[3] = 10;
console.log(arr4);


let arr5 = ["помидор", "огурец", "перец", "хрен", "редька", "картофель", "горошек"];
let arr5max = arr5[0].length;
let longestWord = arr5[0];

for (let i = 0; i < arr5.length; i++) {
    if (arr5[i].length > arr5max) {
        arr5max = arr5[i].length;
        longestWord = arr5[i]; 
    }
}
console.log("Самое длинное слово:" + longestWord + " - " + arr5max + " букв");





