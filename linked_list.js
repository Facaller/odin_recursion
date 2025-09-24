class Node {
    constructor (value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor () {
        this.head = null;
    }

    append (value) {
        let newNode = new Node(value);

        if (!this.head) {
            this.head = newNode
            return;
        }
        
        let currentNode = this.head;
        
        while (currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode
        }

        currentNode.nextNode = newNode;
    }

    prepend (value) {

    }

    size () {

    }
}