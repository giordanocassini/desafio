function primesBeforMe(number) {
    if (!number > 2) return [];
    a = 2;
    const primesBeforMe = [];
    while (a < number) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(a); i++) {
            if (a % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primesBeforMe.push(a);
        a++;
    }
    return primesBeforMe;
}

console.log(primesBeforMe(100));