function pairNumber(arr) {
  arr.sort();
  let res = 0;
  let i = 0;
  let n = arr.length;
  while (i < n) {
    let number = arr[i];
    let count = 1;
    i++;

    while (i < n && arr[i] == number) {
      count++;
      i++;
    }
    if (count >= 2) {
      res = res + Math.floor(count / 2);
    }
  }
  return res;
}
console.log("NO 1");
console.log(cntgloves([5, 7, 7, 9, 10, 4, 5, 10, 6, 5]));
console.log(cntgloves([10, 20, 20, 10, 10, 30, 50, 10, 20]));
console.log(cntgloves([6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]));
console.log(cntgloves([1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));
console.log("===============================================");

function checkLetter(sentence) {
  let arr = sentence.split(" ");
  let result = arr.length;
  let temp = 0;

  var format = /[ `!@#$%^&*()_+\=\[\]{};':"\\|<>\/~]/;
  arr.map((e) => {
    if (format.test(e)) {
      temp = temp + 1;
    }
  });
  result = result - temp;
  console.log(result);
}

console.log("NO 2");
checkLetter("Saat meng*ecat tembok, Agung dib_antu oleh Raihan.");
checkLetter("Berapa u(mur minimal[ untuk !mengurus ktp?");
checkLetter("Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.");
