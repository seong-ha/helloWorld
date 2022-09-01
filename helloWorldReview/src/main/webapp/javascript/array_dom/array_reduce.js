const numbers = [2, 3, 8, 5, 1];

let sum = numbers.reduce((acc, val) => {
    return acc + val;
}, 0);

console.log(sum);

let sumTwo = numbers.reduce((acc, val) => {
    acc.push(val + 2);
    return acc;
}, []);

console.log(sumTwo);


let ul = numbers.reduce((acc, val, idx) => {
    if (idx == 0) {
        acc += '<ul>';
    }

    acc += `<li>${val}</li>`;

    if (idx == numbers.length - 1) {
        acc += '</ul>';
    }

    return acc;
}, '');

document.write(ul);

let max = numbers.reduce((acc, val) => {
    return acc < val ? val : acc;
}, numbers[0]);

console.log(max);