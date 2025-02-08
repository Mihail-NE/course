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
