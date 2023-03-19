const reverseString = function(word) {
    let string = word;
    let list = [];
    let reversedString = ""
    for (i = 0; i < string.length; i++ ){
        list.push(string.substr(i,1));
    }
    let reversedList = list.reverse()
    for (i = 0; i < reversedList.length; i++){
        reversedString += reversedList[i]
    }
    return reversedString
};
// Do not edit below this line
module.exports = reverseString;
