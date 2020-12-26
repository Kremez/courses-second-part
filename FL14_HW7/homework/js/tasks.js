// Your code goes here

function maxElement(arr) {
    return Math.max(...arr);
}


function copiedArray(arr) {
    let newArr = [...arr];
    return newArr;
}


function regroupObject(obj) {
    let newObject = Object.assign({}, obj);
    return newObject;
}


function findUniqueElements(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return result;
}


let nuberphone = '0123456789';

function hideNumber() {
    let numberArr = nuberphone.split('');
    numberArr.splice(0, 6, '*', '*', '*', '*', '*', '*');
    let numberStr = numberArr.join('');
    return numberStr;
}
