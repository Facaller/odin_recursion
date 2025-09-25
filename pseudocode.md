Step-by-step thinking process
✅ Step 1: Validate the input

What if the list is empty?

What if the index is negative?

What if the index is greater than the size of the list?

You should handle those edge cases somehow. You can return null, undefined, or throw an error — the behavior depends on your design decision, but you should think about them.

🔁 Step 2: Traverse the list node by node

You can’t jump to index i like in an array.

You have to start at the head, and walk forward one node at a time.

For each step, increment a counter.

When the counter reaches the desired index, you’re at the right node.

Think of it like counting steps on a path: you walk node by node, counting as you go.

🛑 Step 3: Stop when you hit the index

As soon as the counter matches the index, stop walking.

Return the current node you’re on.

❌ Step 4: Handle index out of bounds

If you reach the end of the list (null) before the counter reaches the index, it means the index is too high.

In that case, return null or undefined.

For example, in a 3-node list, valid indexes are 0, 1, and 2. Asking for at(3) should fail gracefully.

🔄 What you’re doing in this method:

You’re simulating a manual for-loop with:

A current node (like an iterator)

A counter (tracking how far you've walked)

A stop condition: when the counter matches the desired index

A fail condition: when you run out of nodes before reaching the index

🧪 How you can test your logic

Test it against:

A list with 1 item → try at(0) (valid) and at(1) (invalid)

A list with multiple items → try various indexes

An empty list → any index should fail

Negative indexes → decide if you want to allow or reject them

🧠 Mental image

Imagine this:

You’re on a stepping stone path where each stone has a value written on it. You're told:

"Walk forward index number of steps and tell me what's written on the stone you land on."

You start at the first stone (this.head)

Walk forward one at a time, counting steps

When the count matches index, you stop and return that stone (the node)

If you fall off the path before reaching index → return null or undefined

✅ Summary checklist for at(index):

 Start at the head

 Initialize a counter

 Walk through the list, incrementing the counter

 Stop and return the node when the counter equals the target index

 If you hit the end of the list before reaching the index → return null

 Decide how to handle invalid inputs (negative index, empty list)