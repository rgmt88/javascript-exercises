const removeFromArray = function(arr, remove1, remove2, remove3, remove4) {
    
    let result = [];
    let length = arr.length;

    for (let i = 0; i < length; i++) {
        if (arr[i] !== remove1 && arr[i] !== remove2 && arr[i] !== remove3 && arr[i] !== remove4) {
            result.push(arr[i]);
        };
    };
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
