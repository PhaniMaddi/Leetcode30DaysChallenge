var romanToInt = function (s) {
  let romanToIntMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  let number = 0;

  for (let i = 0; i < s.length; i++) {
    let curr = romanToIntMap[s[i]];
    let next = romanToIntMap[s[i + 1]];

    if (curr < next) {
      let roman = s[i] + "" + s[i + 1];
      number += romanToIntMap[roman];
      i++;
    } else {
      number += romanToIntMap[s[i]];
    }
  }

  return number;
};

console.log(romanToInt("MCMXCIV"));
