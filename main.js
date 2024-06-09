const arrNum = [2, 456, 0, 300, 5, 0, 22, 2, 8, 1, 4.5, 2, 8, 8, 101, 8, 8, 8, 1, 1, 1, 1, 8, 8, 8, 0, 0, 0, 1, 1, 1, 4.5];
const arrDublNum = [];

arrNum.forEach((element, index) => {
    (index !== arrNum.lastIndexOf(element) && !arrDublNum.includes(element)) && arrDublNum.push(element);
});

console.log(arrDublNum);