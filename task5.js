function createCounter() {
    // Реализуйте функцию, чтобы программа вывела на консоль ожидаемый результат
    let counter = 0;
    return function() {
        counter++;
        return counter;
    }
}

const count = createCounter();

count(); // 1
count(); // 2
count(); // 3
count(); // 4

console.log(count()); // 5