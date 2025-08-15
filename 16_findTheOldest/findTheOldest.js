const findTheOldest = function(persons) {
  let oldestPerson = null;
  let oldestAge = 0;

  const yearToday = new Date().getFullYear();

  persons.forEach(person => {
    const personsAge = (person.yearOfDeath ?? yearToday) - person.yearOfBirth;
    
    if (personsAge > oldestAge) {
      oldestAge = personsAge;
      oldestPerson = person;
    }
  });

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
