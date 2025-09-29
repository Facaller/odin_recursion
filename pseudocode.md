Your Understanding So Far:

You're right that once your loop finishes (counter === index), you're at the node that currently occupies that index. You want to insert the new node before it, which means:

You want:

previousNode.nextNode = newNode

newNode.nextNode = currentNode

But since you're using a singly linked list, the nodes only point forward — there’s no .prevNode, so yes:

Should I create a variable that keeps track of the previous node?

👉 Yes. You absolutely should.

🔍 What’s Missing in Your Loop?

Right now, your loop just moves currentNode along. But once you're at the right index, you've lost track of the node before it, which you need in order to reconnect the chain.

💡 Guidance for the Logic:

Declare a previousNode variable.

Inside the loop, before moving currentNode = currentNode.nextNode, assign previousNode = currentNode.

When the loop finishes:

previousNode.nextNode = newNode

newNode.nextNode = currentNode

⚠️ Edge Case: Inserting at Index 0

In this case, there is no previous node. You'll need to:

Set newNode.nextNode = this.head

Set this.head = newNode

✅ Final Tips:

Think of a linked list like a chain: to insert a new link, you have to grab the link before the target, cut the chain there, and hook in your new link.

Drawing it out on paper or a whiteboard can help you visualize it more clearly.

You're doing well. Keep pushing — linked lists are tricky at first, but once you get these insertions down, everything else builds on this foundation.