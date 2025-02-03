const operations = {
    multiply: "*",
    divide: "/",
    add: "+",
    subtract: "-",
};

function calculate(num1, num2, operation) {
    switch (operation) {
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
    }
}
// const selectedOperation = "multiply";
const selectedOperation = "divide";
console.log(calculate(6, 3, operations[selectedOperation]));
