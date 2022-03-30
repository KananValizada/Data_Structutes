class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newNode = {
      value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  unshift(value) {
    let newNode = {
      value,
      next: null,
    };

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(value, index) {
    if (index > this.length) {
      return;
    }

    let newNode = {
      value,
      next: null,
    };

    let temp = this.head;
    for (let i = 0; i < index - 1; i++) {
      temp = temp.next;
    }
    console.log(temp);
    let imit = temp.next;
    temp.next = newNode;
    newNode.next = imit;
    this.length++;
    // this.head = temp;
    // this.length++;
  }

  shift() {
    this.head = this.head.next;
    this.length--;
  }

  pop() {
    let pre = this.head;
    let temp = this.head.next;
    while (temp.next != null) {
      pre = pre.next;
      temp = temp.next;
    }

    pre.next = null;
    this.tail = pre;
    this.length--;
  }

  rotate() {
    let first = this.head;
    let second = this.head.next;

    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
  }

  look() {
    let arr = [];
    let temp = this.head;

    while (temp) {
      arr.push(temp.value);
      temp = temp.next;
    }
    console.log(arr);
  }
}

let linkList = new LinkedList(5);
linkList.push(10);
linkList.push(15);
linkList.look();
linkList.unshift(20);
linkList.look();
linkList.insert(2, 2);
linkList.insert(17, 3);
linkList.look();
linkList.shift();
linkList.look();
// linkList.pop();
// linkList.pop();
// linkList.look();
linkList.rotate();
linkList.look();
