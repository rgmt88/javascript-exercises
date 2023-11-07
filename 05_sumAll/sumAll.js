const sumAll = function(num1, num2) {

    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    };

    if (typeof(num1) !== "number" || typeof(num2) !== "number") {
        return "ERROR";
    };
    
    let result = 0;
    
    let mayor, menor;
    
    if (num1 > num2) {
        mayor = num1
        menor = num2
    } else {
        mayor = num2
        menor = num1
    };

    for (let i = menor; i <= mayor; i++) {
        result = result + i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
