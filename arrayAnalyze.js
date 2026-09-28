export const array = {
  length(arr) {
    return arr.length;
  },
  average(arr) {
    let total = 0;

    for (let i = 0; i <= arr.length - 1; i++) {
      total += arr[i];
    }
    const average = total / arr.length;
    return average;
  },
  max(arr) {
    let maxNumber = 0;
    for (i = 0; i <= arr.length - 1; i++) {
      if (arr[i] > maxNumber) {
        maxNumber = arr[i];
      }
    }
    return maxNumber;
  },
  min(arr) {
    let minNumber = arr[0];
    for (i = 0; i <= arr.length - 1; i++) {
      if (arr[i] < minNumber) {
        minNumber = arr[i];
      }
    }
    return minNumber;
  },
};
