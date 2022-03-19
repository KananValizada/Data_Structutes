class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.ar];
  }
  push(value) {
    this.array.unshift(value);
  }
  pop() {
    this.array.shift();
  }
  //isEmpty
}

const myStack = new Stack();
myStack.push("google");
myStack.push("Udemy");
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack.peek());
//Discord
//Udemy
//google
