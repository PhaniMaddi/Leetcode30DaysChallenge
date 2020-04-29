/**
 * @param {number[]} nums
 */

class FirstUnique {
  constructor(nums) {
    this.integerMap = new Map();

    for (let i = 0; i < nums.length; i++) {
      let item = this.integerMap.get(nums[i]);
      if (item) {
        this.integerMap.set(nums[i], item + 1);
      } else {
        this.integerMap.set(nums[i], 1);
      }
    }
  }

  showFirstUnique() {
    for (let [key, value] of this.integerMap) {
      if (value === 1) {
        return key;
      }
    }

    return -1;
  }

  add(value) {
    let item = this.integerMap.get(value);

    if (item) {
      this.integerMap.delete(value);
      this.integerMap.set(value, item + 1);
    } else {
      this.integerMap.set(value, 1);
    }
  }
}

// let firstUnique = new FirstUnique([2, 3, 5]);
// console.log(firstUnique.showFirstUnique()); // return 2
// firstUnique.add(5); // the queue is now [2,3,5,5]
// console.log(firstUnique.showFirstUnique()); // return 2
// firstUnique.add(2); // the queue is now [2,3,5,5,2]
// firstUnique.showFirstUnique(); // return 3
// firstUnique.add(3); // the queue is now [2,3,5,5,2,3]
// console.log(firstUnique.showFirstUnique()); // return -1

let firstUnique = new FirstUnique([7, 7, 7, 7, 7, 7]);
firstUnique.showFirstUnique(); // return -1
firstUnique.add(7); // the queue is now [7,7,7,7,7,7,7]
firstUnique.add(3); // the queue is now [7,7,7,7,7,7,7,3]
firstUnique.add(3); // the queue is now [7,7,7,7,7,7,7,3,3]
firstUnique.add(7); // the queue is now [7,7,7,7,7,7,7,3,3,7]
firstUnique.add(17); // the queue is now [7,7,7,7,7,7,7,3,3,7,17]
console.log(firstUnique.showFirstUnique()); // return 17
