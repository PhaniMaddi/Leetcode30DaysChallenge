/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this.auxilaryStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x);

  if (
    this.auxilaryStack.length === 0 ||
    x <= this.auxilaryStack[this.auxilaryStack.length - 1]
  ) {
    this.auxilaryStack.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let x = this.stack.pop();

  if (x === this.auxilaryStack[this.auxilaryStack.length - 1]) {
    this.auxilaryStack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.auxilaryStack[this.auxilaryStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 */
let obj = new MinStack();
// obj.push(1);
obj.push(3);
obj.push(5);
obj.push(2);
obj.push(9);
obj.push(8);
obj.pop();
// let param_3 = obj.top();
let param_4 = obj.getMin();
console.log(param_4);

/**
 * 2D array approach
 * min will be added in each push
 * on first push x will be min
 *
 */

class MinStack {
  constructor() {
    this.stack = [];
  }

  push(x) {
    const min = this.stack.length > 0 ? Math.min(x, this.getMin()) : x;
    this.stack.push([x, min]);
  }

  pop() {
    this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1][0];
  }

  getMin() {
    return this.stack[this.stack.length - 1][1];
  }
}

let newStack = new Stack();
newStack.push(-2);
newStack.push(0);
newStack.push(-3);
console.log(newStack.getMin());
newStack.pop();
console.log(newStack.top());
console.log(newStack.getMin());
