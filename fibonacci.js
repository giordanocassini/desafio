function findFibonacciPosition(number) {
    if (number < 0) throw new Error('Input number invalid');
    if (number === 0) return 0;

    let a = 0;
    let b = 1;
    let position = 1;

    while (b < number) {
        const temp = b;
        b = a + b;
        a = temp;
        position++;
    }

    if (b === number) return position;

    throw new Error('Input number is not part of fibonacci sequence');
}

function findFibonacciPositionRecursive(number, a = 0, b = 1, position = 1) {
    if (b === number) {
        return position;
    } else if (b > number) {
        throw new Error('Input number is not part of fibonacci sequence');
    } else {
        return findFibonacciPositionRecursive(number, b, a + b, position + 1);
    }
}

const inputNumber = 89;
console.log('recursive : ' + findFibonacciPositionRecursive(inputNumber));
console.log('linear: ' + findFibonacciPosition(inputNumber));
