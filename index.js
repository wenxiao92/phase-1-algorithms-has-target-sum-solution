function hasTargetSum(array, target) {
  // Write your algorithm here
  let seenNumbers = []

  for(let n = 0; n <array.length; n++){
    let complement = target - array[n]

    //check if any key on our object is the complement
    if(seenNumbers[complement]) return true //looks up that value's complement to see if it's true. if not it will move on to next number and assign true
    //otherwise, add that number to the object and assign a "true" to it
    seenNumbers[array[n]] = true
  }

return false //after all iterations and there's no true in the seenNumbers object, returns false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  use the target number to subtract the first position of the array to get the 'compliment.' Then search through the array for the compliment, if it does not exist, then move onto the next index
  save the seen value as a true (as opposed to putting it in an array and looking up that number in the array).
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
