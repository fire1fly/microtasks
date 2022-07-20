const groupBy = (arr, callback) => {
  let result = {};
  arr.forEach((el, i) => {
    let changedEl = callback(el);
    result[changedEl]
      ? result[changedEl].push(arr[i])
      : result[changedEl] = [arr[i]];
  });
  console.log(result);
}

groupBy([6.1, 4.2, 6.3, 6.7, 6.8, 6.9, 7.2], Math.round);


