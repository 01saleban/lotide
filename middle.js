const middle = function(array) {
  const length = array.length;
  const low = 0;
  const high = length - 1;
  const middle = Math.floor((low + high) / 2);
  const newArr = [];
  if (length > 2) {
    if (length % 2 !== 0) {
      newArr.push(array[middle]);
      return newArr;
    } else {
      newArr.push(array[middle]);
      newArr.push(array[middle + 1]);
      return newArr;
    }
    
  } else {
    return newArr;
  }

};

module.exports = middle;