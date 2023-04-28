/* 1. Create a JavaScript program that defines an array called "shoppingList" and populates it with at least five items you might
 buy at a grocery store.*/


const shoppingList = ["Rice", "Fruits", "toothpaste", "Maggie", "Biscuit"]

console.log(shoppingList)


/* 2.Next, use the forEach() method to loop through the array and use console.log() to display each item in the list. */


shoppingList.forEach(item => console.log(item))

/* 3.Then, use the push() method to add another item to the end of the array. */

shoppingList.push("Egg")

console.log(shoppingList)


/* 4.Next, use the pop() method to remove the last item from the array. */

shoppingList.pop()

console.log(shoppingList)

/* 5. Then, use the shift() method to remove the first item from the array. */

shoppingList.shift()

console.log(shoppingList)

/* 6. Next, use the unshift() method to add a new item to the beginning of the array. */

shoppingList.unshift("Cake")

console.log(shoppingList)

/* 7.Then, use the filter() method to create a new array called "shortList" that only includes items with less than six characters 
in their name */

let shortList = shoppingList.filter(item => item.length < 6)
console.log(shortList)


/* 8.Next, use the map() method to create a new array called "capitalList" that includes all the items in the original list, 
but with the first letter capitalised */


let capitalList = shoppingList.map(item => item.charAt(0).toUpperCase() + item.slice(1));
console.log(capitalList)

/* 9.Then, use the reduce() method to calculate the total number of characters in all the items in the original list.*/
let totalChars = shoppingList.reduce((total, item) => total + item.length, 0);


/* 10.Next, use the slice() method to create a new array called "partialList" that includes the first three items in the original list.*/
let partialList = shoppingList.slice(0, 3);


/* 11.Then, use the splice() method to remove the second and third items from the original list.*/
shoppingList.splice(1, 2);

/* 12.Finally, use the sort() method to sort the remaining items in the original list in alphabetical order. Use console.log() to
 display the sorted list */
shoppingList.sort();


console.log(shoppingList);





