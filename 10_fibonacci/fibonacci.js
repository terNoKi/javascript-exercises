let fibb = [1, 1];
let number = 0

const fibonacci = function(position) {
    let positionNumber = Number(position)
    if (positionNumber < 0){
        return "OOPS"
    }else{
        for (i = 1; i <= positionNumber-2; i++){
            fibb.push(fibb[i-1]+fibb[i])
        }
        number = fibb[positionNumber-1]
        return number
    }


};

console.log(fibonacci(25))




// Do not edit below this line
module.exports = fibonacci;
