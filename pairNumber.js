function pairNumber(num) {
  let n = num.length;
  let count = 0;
  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (num[i] === num[j] && i < j) {
        count = count + 1;
      }
    }

    if (count % 2 !== 0) {
      result = result + 1;
    }
    count = 0;
  }
  console.log(Math.floor(result));
}

pairNumber([5, 7, 7, 9, 10, 4, 5, 10, 6, 5]);
pairNumber([10, 20, 20, 10, 10, 30, 50, 10, 20]);
pairNumber([6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]);
pairNumber([1, 1, 3, 1, 2, 1, 3, 3, 3, 3]);
