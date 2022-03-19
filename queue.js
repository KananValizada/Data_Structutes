class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;

    this.length = 0;
  }
  peek() {
    return this;
  }
  push(value) {
    let newNode = new Node(value);
    if (this.length == 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      this.bottom.next = newNode;
      this.bottom = newNode;
    }

    this.length++;
  }
  pop() {
    if (this.length == 0) {
      return null;
    }
    if (this.length < 2) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.top.first;
    }

    this.length--;
  }
  //isEmpty
}

const myStack = new Stack();
myStack.push("google");
myStack.push("Udemy");
myStack.push("Udemy");
// myStack.pop();
// myStack.pop();

console.log(myStack.peek());
//Discord
//Udemy
//google
