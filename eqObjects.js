const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const prop in object1) {
    if (Array.isArray(object1[prop])) {
      if (!eqArrays(object1[prop], object2[prop])) {
        return false;
      }
      /* */
    } else if (typeof object1[prop] === 'object' && object1[prop] !== null) {
      return eqObjects(object1[prop], object2[prop]);

    } else if (object1[prop] !== object2[prop]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;

// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);


