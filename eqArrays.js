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




module.exports = eqArrays;
