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
        if (this.head.nextNode === null) {
            this.head = null;
            return;
        } 

        let currentNode = this.head;
        let poppedNode;
        
        while (currentNode.nextNode !== null) {
            if (currentNode.nextNode.nextNode === null) {
                poppedNode = currentNode.nextNode;
                currentNode.nextNode = null;
                return poppedNode;
            } else {
                currentNode = currentNode.nextNode;
            }
        }
    }

    contains (value) {
        if (!this.head) return;

        let currentNode = this.head;
        
        while (currentNode !== null) {
            if (currentNode.value === value) return true;
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    find (value) {
        if (!this.head) return;

        let currentNode = this.head;
        let index = 0

        while (currentNode !== null) {
            if (currentNode.value === value) return index;
            currentNode = currentNode.nextNode;
            index++;
        }
        return null;
    }

    toString () {
        if (!this.head) return null;

        let currentNode = this.head;
        let nodeValue;
        let nodeString = '';

        while (currentNode !== null) {
            nodeValue = currentNode.value;
            nodeString = nodeString + `${nodeValue} -> `;
            currentNode = currentNode.nextNode;
        }
        return `${nodeString}null`
    }

    insertAt (value, index) {
        const listSize = this.size();
        if (index < 0 || this.head === null || index > listSize) return;

        const newNode = new Node(value);
        let counter = 0;
        let currentNode = this.head;
        let previousNode;

        if (index === 0) {
            newNode.nextNode = this.head;
            this.head = newNode;
            return;
        }

        while (counter !== index) {
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
            if (currentNode === null) return;
            counter++;
        }

        if (index === listSize) {
            previousNode.nextNode = newNode;
            newNode.nextNode = null;
            return;
        }
        
        previousNode.nextNode = newNode;
        newNode.nextNode = currentNode;
    }
}