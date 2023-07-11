function cekPalindrom(string) {
    let reversedString = string.split('').reverse().join('');  
    if (string === reversedString) {
      return true;
    } else {
      return false;
    }
  }
  
  let inputString = ("kasur rusak");
  if (cekPalindrom(inputString)) {
    console.log("String adalah palindrom");
  } else {
    console.log("String bukan palindrom");
  }
  