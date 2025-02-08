function createRandomGenerator(min, max) {
    return function () {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
}

var random = createRandomGenerator(20, 100);
console.log(random());
