class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(element) {
    const node = new Node(element);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  insertAt(element, location) {
    if (location < 0 || location > this.size) {
      return console.log(`${location} is not a valid index`);
    } else {
      const node = new Node(element);
      let curr, prev;
      curr = this.head;
      if (location === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        let it = 0;
        while (it < location) {
          it++;
          prev = curr;
          curr = curr.next;
        }
        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }
  // removeFrom(location)
  // removeElement(element)

  //Helper functions
  // isEmpty
  // size_Of_List
  printList() {
    let curr = this.head;
    let str = "";
    while (curr) {
      str += curr.element + " ";
      curr = curr.next;
    }
    console.log(str);
  }
}

const list = new LinkedList();
list.add("111");
list.add("222");
list.add("333");
list.add("444");
list.add("555");
list.add("666");
// list.printList();
// console.log(list.head);

const reverseList = (head) => {
  if (head === null || head.next === null) return head;
  let p = reverseList(head.next);
  console.log(p);
  head.next.next = head;
  head.next = null;
  return p;
};

// reverseList(list.head);
