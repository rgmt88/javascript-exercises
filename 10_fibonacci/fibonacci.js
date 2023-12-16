const fibonacci = function(index) {
    index = +index;
    let fibo = [1, 1];
    
    if(index <= 0) {
        return 'OOPS';
    };

    if(index === 1 || index === 2) {
        return 1;
    } else {
        for(let i = 2; i < index; i++) {
            fibo.push(fibo[i - 1] + fibo[i - 2]);
        }
    }
    return fibo[index - 1];
};

// Do not edit below this line
module.exports = fibonacci;
