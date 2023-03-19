const removeFromArray = function(array, ...inputs) {
    let list = array;
    let filtered = list.filter(included => !inputs.includes(included))
    return filtered
};

// Do not edit below this line
module.exports = removeFromArray;
