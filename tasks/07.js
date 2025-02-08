function createLogger() {
    let logs = [];
    return {
        log: (message) => {
            logs.push(message);
        },

        getLogs: () => {
            logs.forEach((log) => console.log(log));
            return logs;
        },
    };
}

let logger = createLogger();
logger.log("some text");
logger.log("ahother");
logger.getLogs();

function createRandomGenerator(min, max) {
    return function () {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
}

let random = createRandomGenerator(20, 100);
console.log(random());
