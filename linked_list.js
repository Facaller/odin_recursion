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
            this.head = newNode;
            return;
        }
        
        let currentNode = this.head;
        
        while (currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = newNode;
    }

    prepend (value) {
        let newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        newNode.nextNode = this.head;
        this.head = newNode;
    }

    size () {
        let nodes = 0;
        let currentNode = this.head;

        while (currentNode !== null) {
            currentNode = currentNode.nextNode;
            nodes++;
        }
        return nodes;
    }

    head () {
        if (!this.head) return;
        return this.head;
    }

    tail () {
        if (!this.head) return;
        let currentNode = this.head;
        
        while (currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    at (index) {
        if (index < 0 || this.head === null) return;

        let counter = 0;
        let currentNode = this.head;

        while (counter !== index) {
            currentNode = currentNode.nextNode;
            if (currentNode === null) return
            counter++;
        }
        return currentNode;
    }

    pop () {
        if (!this.head) return;
        // if (this.head.nextNode !== null) this.head = null; this is wrong


    }
}