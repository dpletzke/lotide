
const findKey = (obj, check) => {
  for (const key in obj) {
    if (check(obj[key])) {
      return key;
    }
  }
  return null;
};

module.exports = findKey;

// const obj = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// };

// assertEqual(findKey(obj, x => x.stars === 2), 'noma');
// assertEqual(findKey(obj, x => x.stars === 3), 'Akaleri');



