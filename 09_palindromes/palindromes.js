const palindromes = function (word) {
    let string = word.toLowerCase();
    let editedString = ""
    let list = [];
    let reversedString = ""
    let isPalindrome = false
    for (i = 0; i < string.length; i++ ){
        if (string.substr(i,1) != " " && string.substr(i,1) != "," && string.substr(i,1) != "." && string.substr(i,1) != "!" && string.substr(i,1) != "?" && string.substr(i,1) != "'"){
            list.push(string.substr(i,1));
        }
    }
    for (i = 0; i < list.length; i++){
      editedString += list[i]
    }
    let reversedList = list.reverse()
    for (i = 0; i < reversedList.length; i++){
        reversedString += reversedList[i]
    }
    if (editedString === reversedString){
        isPalindrome = true
    }

    return isPalindrome
};

// Do not edit below this line
module.exports = palindromes;
