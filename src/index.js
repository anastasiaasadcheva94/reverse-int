module.exports = function reverse (n) {
    if (n < 0){
        var number = n * -1;
        return Number(number.toString().split('').reverse().join(''));
    } else {
        return Number(n.toString().split('').reverse().join(''));
    }
}
