const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

  const transformedArr = [];
  let isPrevDiscarded = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "--discard-next") {
      isPrevDiscarded = true;
      i++;
      continue;    
    }
    else if (arr[i] == "--discard-prev") {
      if (isPrevDiscarded || i == 0) continue;

      transformedArr.pop();
    }
    else if (arr[i] == "--double-next") {
      if (i == arr.length - 1) continue;

      transformedArr.push(arr[i + 1]);
      transformedArr.push(arr[i + 1]);

      i++;
    }
    else if (arr[i] == "--double-prev") {
      if (isPrevDiscarded || i == 0) continue;

      transformedArr.push(arr[i - 1]);
    }
    else {
      transformedArr.push(arr[i]);
    }

    isPrevDiscarded = false;
  }

  return transformedArr;
}

module.exports = {
  transform
};
