class CopyEntity {
    static copyObject(object) {
        return Array.isArray(object) ? [...object] : { ...object };
    }
}
const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
}

const array = ["a", "b", "c", "d", "e"];


const newObj = CopyEntity.copyObject(obj);
const newArray = CopyEntity.copyObject(array);

array[0] = "F";
obj.a = 999;

console.log("Базовый объект", obj);
console.log("Копия объекта", newObj);

console.log("Базовый массив", array);
console.log("Копия массива", newArray);
