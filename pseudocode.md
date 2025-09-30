What You Did Right:

Proper handling of index === 0:

You now insert at the head and immediately return. Perfect. ✔️

Initialization and traversal logic:

You're correctly using a while loop with a counter.

You're tracking the previous and current nodes. ✔️

❌ Issue: Redundant + Conflicting Assignment at the End

Look closely at the end of your method:

if (counter === index) {
    previousNode.nextNode = newNode;
    newNode.nextNode = null;
}
previousNode.nextNode = newNode;
newNode.nextNode = currentNode;


There are two sets of assignments to previousNode.nextNode and newNode.nextNode. This leads to a few problems:

❗️Problem 1: The first block is unnecessary

You've already ensured the loop only exits when counter === index. So there's no need to check it again — that if block will always run.

Then, right after that, you assign the pointers again, potentially overriding the correct ones.

❗️Problem 2: You're overwriting newNode.nextNode

First you set it to null, then immediately set it to currentNode.

This is a logic conflict and may cause bugs (especially when inserting in the middle of the list).

🧠 What You Should Do (in plain logic):

After your loop exits:

You are at the correct position (counter === index).

previousNode points to the node before where you want to insert.

currentNode is the node currently at index (or null if inserting at the end).

So:

Make previousNode.nextNode point to the new node.

Make the new node point to currentNode.

That’s it — two pointer assignments, no conditions, and no duplication.

✅ What to Remove:

The extra if (counter === index) block — it's unnecessary.

The conflicting assignments inside it — especially newNode.nextNode = null.

⚠️ Still Missing: Inserting at the End (Tail)

You haven't tackled the case where index === size of the list. Right now, if currentNode === null (i.e. you're past the last node), your method exits early and does nothing.

You’ll want to allow currentNode to be null, as long as you've reached the correct index.

That means removing the if (currentNode === null) return line inside the loop, or adjusting its logic.

📦 TL;DR Recap
Area	Status	Action Needed
Insert at head (index === 0)	✅	Perfect
Inserting in the middle	⚠️	Remove the extra if (counter === index) block and redundant assignments
Inserting at end (tail)	❌	Currently not handled; will exit early
Out-of-bounds handling (index > size)	🚧	Still needs implementation (you know this)

Let me know if you want to write out the logic flow together before you try another version — happy to help you reason it out step-by-step.