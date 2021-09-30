require('dotenv').config();

const mongoose = require('mongoose');
const mongoUri = process.env.MONGO_URI;
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

const { Schema } = mongoose;

const personSchema = new Schema({
  name:  { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

const Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  const name = 'Isaac Asimov';
  const age = 72;
  const favoriteFoods = ['bacon', 'egg', 'meat'];
  const person1 = new Person({name, age, favoriteFoods});
  person1.save((error, data) => {
    if (error) {
      return console.error(error);
    }
    done(null, data);
  });
};

const arrayOfPeople = [
  {'name': 'Isaac Asimov', 'age': 72, 'favoriteFoods': ['bacon', 'egg']},
  {'name': 'Isaac Asimov Clone', 'age': -0, 'favoriteFoods': ['Uranium']}
];

const createManyPeople = (arrayOfPeople, done) => {
  for (const key in arrayOfPeople) {
    const {name, age, favoriteFoods} = arrayOfPeople[key];
    const currentPerson = new Person({name, age, favoriteFoods});
    currentPerson.save((error, data) => {
      if (error) {
        return console.error(error);
      }
      done(null, data);
    });
  }
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, (error, personFound) => {
    if (error) {
      return console.log(error);
    }
    done(null, personFound);
  });
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
