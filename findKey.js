const assertArraysEqual = function(firstArr,secondArr) {
  if (firstArr.length === secondArr.length) {
    for (let i = 0; i < firstArr.length; i++) {
      if (firstArr[i] !== secondArr[i]) {
        return console.log(`❌❌❌ Assertion Failed: ${firstArr} !== ${secondArr}`);
      }
    }
    return console.log(`✅✅✅ Assertion Passed: ${firstArr} === ${secondArr}`);
  }
  return console.log(`❌❌❌ Assertion Failed: ${firstArr} !== ${secondArr}`);
  
};

module.exports = assertArraysEqual;

const findKey = function(obj, callback) {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

const r1 = (findKey(
  {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 5 }
}, x => x.stars === 5));

const r2 = (findKey(
  { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  }, x => x === "The Wire"));

const r3 = (findKey(
  {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 10));

assertEqual(r1,"Akelarre");
assertEqual(r2,"drama");
assertEqual(r3, undefined);