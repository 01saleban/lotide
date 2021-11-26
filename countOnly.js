const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  console.log(results);
  return results;
};

const firstNames = [
  "Mike",
  "Ibby",
  "Sarah",
  "Keith",
  "Sam",
  "Britteny",
  "Jennifier",
  "Julia",
  "Joe"
];

const result1 = countOnly(firstNames, { "Julia": true, "Sam": true, "Ibby": true, "Britteny": false });

assertEqual(result1["Julia"], 1);
assertEqual(result1["Sam"], undefined);
assertEqual(result1["Ibby"], 2);
assertEqual(result1["Britteny"], undefined);