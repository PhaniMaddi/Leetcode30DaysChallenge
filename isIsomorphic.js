var isIsomorphic = function (s, t) {
  var checkStr = (str) => {
    let obj = {};
    let ansStr = "";
    let len = str.length;

    for (let i = 0; i < len; i++) {
      if (!obj.hasOwnProperty(str[i])) {
        obj[str[i]] = i;
      }
      ansStr += obj[str[i]];
      console.log(ansStr);
    }

    return ansStr;
  };

  return checkStr(s) === checkStr(t);
};

console.log(isIsomorphic("ab", "ca"));
