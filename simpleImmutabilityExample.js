const object1 = {
   id: 111,
   value: 1,
   wow: "wow",
};

const newObject = {
   ...object1,
   value: object1.value + 1,
};

console.log("object1-", object1);
console.log("newObject-", newObject);
console.log(object1 === newObject);

// summary: we have created a new object and also changed its value
// without mutating the main object.

/**
 * Key Points:

Spread Operator (...): The spread operator is used to create a shallow copy of object1. This means that newObject starts as an identical copy of object1.

Updating Properties: In the newObject, the value property is then updated by adding 1 to the existing value from object1. This creates a new object with the updated value property while leaving object1 unchanged.

Immutability:

object1 remains unchanged. It still has its original value of 1.
newObject is a new object with the same properties as object1, except for the value, which has been incremented.
Equality Check: The check object1 === newObject will return false because newObject is a new object in memory, distinct from object1.

Summary:

Proper Mutation: Yes, this is a proper approach to mutating an object immutably. You’ve created a new object with updated properties without altering the original object.
Immutability Preserved: By using the spread operator, you preserve immutability, ensuring that changes do not affect the original object.
This approach is essential in functional programming and state management (like in React and Redux), where immutability is a key concept.
 * 
 * */
