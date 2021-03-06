const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');


eqArrays([1, 2, 3], [1, 2, 3]); 
eqArrays([1, 2, 3], [3, 2, 1]); 

eqArrays(["1", "2", "3"], ["1", "2", "3"]); 
eqArrays(["1", "2", "3"], ["1", "2", 3]); 

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // 
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false);//
assertEqual(eqArrays([1, 2, false], [1, 2, 3]), false); //
assertEqual(eqArrays([1, 2, 3], [1, undefined, 3]), false); //
assertEqual(eqArrays(["hi", 2, 3], [1, 2, 3]), false); //