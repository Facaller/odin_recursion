Great question — and you're thinking about this in exactly the right way.

Here’s the key idea:

Unlike arrays, linked lists don’t have built-in methods like .slice() or .pop() (the way JavaScript arrays do). You're working with custom node objects, so you have to manage the connections yourself.

🔧 So, what methods or operations can you use to remove the last node?

There’s no built-in delete() method on a node — because a node doesn't know about the list it's in. You have to manually unlink the last node by updating the second-to-last node's nextNode to null.

✅ What you need to do conceptually:

If the list is empty → return (you already do this ✅)

If the list has only one node → set this.head = null

Otherwise, traverse to the second-to-last node

Set secondLastNode.nextNode = null → This is what "removes" the last node from the list

📌 Key operations (methods or tools) you might use:
Purpose	What You Use
Check if list is empty	if (!this.head)
Check if there's only one node	if (this.head.nextNode === null)
Traverse the list	while (currentNode.nextNode !== null)
Unlink a node	currentNode.nextNode = null
Optional: Keep track of previous node	let prevNode = null;
❌ What not to look for:

❌ currentNode.delete() → not a real method

❌ .slice() / .pop() → only apply to arrays

❌ delete currentNode → not necessary or helpful here; you just need to sever the link

✅ TL;DR

To “remove” a node from a linked list, you:

Find the node before the one you want to remove

Set its nextNode to null

That's it! Once no other node is pointing to that node, it's effectively removed from the list and will be garbage collected in JavaScript.

You're on the right track. Want to run your pop() logic by me when you're done with it?