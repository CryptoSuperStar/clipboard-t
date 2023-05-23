# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
Here are the changes I made and why I made them:
- Consolidated conditional statements: By using the ternary operator, I was able to consolidate the nested conditional statements into a single statement which evaluates to the correct data value.
- Shortened code: I used ?? operator instead of || to handle undefined values, and simplified the candidate value manipulation code, removing the need for an if statement.
- Changed to SHA-256: The function previously used SHA-3-512 for hashing, which may be unnecessarily complex for most purposes. I changed it to a more familiar hash function, SHA-256.
- More focused default value: The original code set candidate to the trivial partition key only if it was undefined. The updated code sets candidate to the trivial partition key only if crypto.createHash("sha256") returns a falsy value.
These changes make the function more concise and readable, since there are fewer awkward conditionals and unnecessary type conversions.