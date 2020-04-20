var groupAnagrams = function (strs) {
  let anagramMap = new Map();

  for (let i = 0; i < strs.length; i++) {
    let sorted = sortedWord(strs[i]);

    if (anagramMap.has(sorted)) {
      let newValue = [...anagramMap.get(sorted), strs[i]];
      anagramMap.set(sorted, newValue);
    } else {
      anagramMap.set(sorted, [strs[i]]);
    }
  }

  return Array.from(anagramMap.values());
};

let sortedWord = function (str) {
  return str.split("").sort().join("");
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
