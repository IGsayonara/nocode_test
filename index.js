const task1 = (n) => {
    const getBaseLog = (x, y) => {
        return Math.log(y) / Math.log(x);
    }

    for (let i = 1; i <= n; i++) {
        console.log(Number.isInteger(getBaseLog(2, i)) ? "POWER" : i);
    }
}

const task3 = (s, c) => {
    let i = 1;
    let sum = 0;
    while (i < s.length) {
        if (s[i - 1] === s[i]) {
            let j = i - 1;
            let max = c[j];

            while (s[j] === s[i]) {
                max = Math.max(max, c[j]);
                sum += c[j];
                j++;
            }

            sum -= max;
            i = j + 1;
        } else {
            i++;
        }
    }
    return sum;
}

const task4_alternative = (n) => {

    const sumOfDigits = (a) => {
        return a.toString().split('').map(n => parseInt(n)).reduce((a, b) => a + b);
    }
    const next = (a, b) => {
        return sumOfDigits(a) + sumOfDigits(b);
    }

    const stack = []
    stack.push(0)
    stack.push(1)
    let i = 2;
    while (i <= n) {
        stack.push(next(stack[i - 1], stack[i - 2]))
        i++
    }
    return stack.at(n)
}

const task4 = (n) => {
    const firstNums = [0, 1, 1]
    if (n < 3){
        return firstNums[n]
    }
    const sequence = [2, 3, 5, 8, 13, 12, 7, 10, 8, 9, 17, 17, 16, 15, 13, 10, 5, 6, 11, 8, 10, 9, 10, 10]
    return sequence[(n - firstNums.length) % sequence.length]
}

// task1(128);
// console.log(task3("abccbd", [0, 1, 2, 3, 4, 5])) // 2
// console.log(task3("ababa", [10, 5, 10, 5, 10])) // 0
// console.log(task3("aaaa", [3, 4, 5, 6])) // 12
// console.log(task3("aabbcc", [1, 2, 1, 2, 1, 2])) // 3

// for (let i = 0; i <= 26; i++) {
//     console.log(task4(i), task4_alternative(i))
// }

