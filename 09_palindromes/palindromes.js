const palindromes = function (str) {
    if (typeof str === 'string') {
        const regex = /[\W_]/g;
        cleanedStr = str.replace(regex, '').toLowerCase();
        reverseStr = cleanedStr.split('').reverse().join('');
        if (cleanedStr === reverseStr) {
            return true;
        } else {
            return false;
        }
    } else {
        throw new TypeError('Input must be a string');
    }
};

// Do not edit below this line
module.exports = palindromes;
