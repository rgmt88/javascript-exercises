const findTheOldest = function(peopleArray) {
    const currentYear = new Date().getFullYear();

    peopleArray.sort((a, b) => {
        const ageA = (a.yearOfDeath || currentYear) - a.yearOfBirth;
        const ageB = (b.yearOfDeath || currentYear) - b.yearOfBirth;
        return ageB - ageA;
    });

    return peopleArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
