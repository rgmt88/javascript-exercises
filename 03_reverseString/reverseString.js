const reverseString = function(string) {
    let result = "";
    let length = string.length

    for (let i = 0; i < length; i++) {
        result = result + string.charAt(length - 1 - i)
    };

    return result;
};

// Do not edit below this line
module.exports = reverseString;
