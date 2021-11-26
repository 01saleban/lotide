const eqArrays = function(firstArr,secondArr) {
  if (firstArr.length === secondArr.length) {
    for (let i = 0; i < firstArr.length; i++) {
      if (firstArr[i] !== secondArr[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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


// TEST CODE

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

const dd = { a: [1, 2], b: [3, 4] };
const cc = { a: [1, 2], b: [3, 4] };
assertEqual(eqObjects(dd, cc), true); // => true

const ccc = { a: [1, 2], b: [3, 5] };
assertEqual(eqObjects(dd, ccc), false); // => false

const ddd = { a: [1, 2], b: 3 };
assertEqual(eqObjects(dd, ddd), false); // => false

const dddd = { a: [1, 2], b: 3 };
assertEqual(eqObjects(dd, dddd), false); // => false