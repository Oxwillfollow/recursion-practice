export const mergeSort = (arr) => {
  // BASE CASE
  // If array size is 1 or 0, compare it to the other array value if passed and return array size of 1, with the smaller value
  if (arr.length <= 1) return arr;

  // CUT ARRAY IN HALF
  // ~ in this case, the left side will always be smaller when dealing with odd quantities
  let arrayHalfPoint = Math.trunc(arr.length / 2);
  let arrayLeftHalf = arr.slice(0, arrayHalfPoint);
  let arrayRightHalf = arr.slice(arrayHalfPoint, arr.length);

  let result = [];
  // merge them together
  result = result.concat(
    merge(mergeSort(arrayLeftHalf), mergeSort(arrayRightHalf)),
  );

  return result;
};

function merge(arr1, arr2) {
  let result = [];

  while (arr1.length > 0 || arr2.length > 0) {
    if (arr1.length === 0) {
      result = result.concat(arr2);
      break;
    }
    if (arr2.length === 0) {
      result = result.concat(arr1);
      break;
    }

    if (arr1[0] < arr2[0]) result.push(arr1.shift());
    else result.push(arr2.shift());
  }

  return result;
}
