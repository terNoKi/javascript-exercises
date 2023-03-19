const sumAll = function(number1, number2) {
    let sum = 0;
    let isError = false;
    if (!Number.isInteger(number1) || !Number.isInteger(number2) || number1 < 0 || number2 < 0){
        isError = true
    }else{
        if (number1 > number2){
            for(i = number2; i <= number1; i++){
                sum += i
            }
        }else{
            for(i = number1; i <= number2; i++){
                sum += i
            }
        }
    }
    if (isError === true){
        return "ERROR"
    }else{
        return sum
    }
};

// Do not edit below this line
module.exports = sumAll;
