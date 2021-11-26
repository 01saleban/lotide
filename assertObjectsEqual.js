const count = (object) => {
  const arrayOfKeys = Object.keys(object);
  let count = 0;
  for (let i = 0; i < arrayOfKeys.length; i++) {
    count += 1;
  }
  return count;
};

const eqObjects = function(object1, object2) {

  const key1 = Object.keys(object1);
  if (count(object1) === count(object2)) {

    for (const key of key1) {
      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key],object2[key])) {
          return false;
        }

      } else if (object1[key] !== object2[key]) {
        return false;
      }
      
    }
    return true;
 
  }
  return false;
};
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line

    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  };