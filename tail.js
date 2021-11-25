const tail = function(array) {
  array = array.slice[1];
  return (array);
};


const assertEqual = function(actual, expected) {
  if ( actual === expected ) {
      console.log ("Assertion Passed:");
  }
  else {
      console.log ("Assertion Failed");
  }
  };


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array has 3 elements!