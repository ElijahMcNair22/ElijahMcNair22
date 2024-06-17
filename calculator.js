
document.write("<table>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");


let results = [];

while (true) {
    let x = prompt("Enter the first number:");
    if (x === null) break;
    let y = prompt("Enter the second number:");
    if (y === null) break;
    let operator = prompt("Enter an operator (+, -, *, /, %):");
    if (operator === null) break;

    let result;
    if (isNaN(x) || isNaN(y)) {
        result = "Error: Non-numeric input";
    } else {
        x = parseFloat(x);
        y = parseFloat(y);
        switch (operator) {
            case '+':
                result = x + y;
                break;
            case '-':
                result = x - y;
                break;
            case '*':
                result = x * y;
                break;
            case '/':
                result = y !== 0 ? x / y : "Error: Division by zero";
                break;
            case '%':
                result = y !== 0 ? x % y : "Error: Division by zero";
                break;
            default:
                result = "Error: Invalid operator";
                break;
        }
    }

    if (typeof result === "number") {
        results.push(result);
    }

    document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");
}

document.write("</table>");

if (results.length > 0) {
    let min = Math.min(...results);
    let max = Math.max(...results);
    let total = results.reduce((acc, val) => acc + val, 0);
    let avg = total / results.length;

    document.write("<table>");
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>");
    document.write("</table>");
} else {
    document.write("<p>No valid results to display in the summary.</p>");
}