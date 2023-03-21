
const findTheOldest = function(people) {
    let birth = [];
    let death = [];
    let age = [];
    let oldest = [];
    const date = new Date().getFullYear()
    for (i = 0; i < people.length; i++){
        birth[i] = people[i].yearOfBirth;
        death[i] = people[i].yearOfDeath || date;
        age[i] = death[i] - birth[i];
    }
    let maxAge = Math.max(...age);
    for (i = 0; i < people.length; i++){
        if (age[i] === maxAge){
            oldest.push(people[i])
        }
    }
    let name = oldest[0].name;
    return name
}

// Do not edit below this line
module.exports = findTheOldest;
