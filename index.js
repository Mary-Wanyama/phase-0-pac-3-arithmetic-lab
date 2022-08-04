
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a/b;
}
function increment(n) {
    return n++;
}
increment(Math.floor(Math.random() * 1000));
function decrement(n) {
    return n--;
}
decrement(Math.floor(Math.random() * 1000));
function makeInt(n) {
    return parseInt(n, 10);
}
makeInt(4);
function preserveDecimal(n) {
    return parseFloat(n);
}
preserveDecimal(100.7676767664);