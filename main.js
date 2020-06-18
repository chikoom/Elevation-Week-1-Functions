// Exercise 1
exDivider(1);

const calcAge = (yearA, yearB) => {
  return Math.abs(yearA - yearB);
};
const age = calcAge(2017, 1989);
console.log(age);

// Exercise 2
exDivider(2);
const calcAgeAvg = (yearA, yearB) => {
  const age = Math.abs(yearA - yearB);
  console.log(`You are either ${age} or ${age - 1}`);
};
const AvgAge = calcAgeAvg(2017, 1989);

// Exercise 3
exDivider(3);

const isEven = (number) => {
  return number % 2 ? false : true;
};

const num1 = 2;
const num2 = 3;
console.log(`${num1} is ${isEven(num1) ? "even" : "odd"}`);
console.log(`${num2} is ${isEven(num2) ? "even" : "odd"}`);

// Exercise 4
exDivider(4);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const printOdds = (numsArray) => {
  for (num of numsArray) {
    if (!isEven(num)) console.log(num);
  }
};

printOdds(nums);

// Exercise 5
exDivider(5);

const numsArrayToCheck = [1, 2, 2, 3, 3, 4, 5, 6];

const checkExists = (numsArray, number) => {
  let doesExist = false;
  for (num of numsArray) {
    if (num === number) {
      doesExist = true;
    }
  }
  return doesExist;
};

console.log(checkExists(numsArrayToCheck, 5));
console.log(checkExists(numsArrayToCheck, 11));

// Exercise 6
exDivider(6);

const calculator = {
  add: (num1, num2) => {
    return num1 + num2;
  },
  subtract: (num1, num2) => {
    return num1 - num2;
  },
};

const result1 = calculator.add(20, 1);
const result2 = calculator.subtract(30, 9);

console.log(calculator.add(result1, result2));

// Exercise 7
exDivider(7);

const increaseByNameLength = (money, name) => {
  return money * name.length;
};

const makeRegal = (name) => {
  return `Royal Highness, ${name}`;
};

const turnToKing = function (name, money) {
  name = name.toUpperCase();
  money = increaseByNameLength(money, name);
  name = makeRegal(name);

  console.log(name + " has " + money + " gold coins");
};

turnToKing("martin luther", 100);
// should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

// Exercise 8- SPLICE()
exDivider(8);

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// overriding the native splice method
Array.prototype.splice = function () {
  console.log("Using implemented slice");

  const removedItems = []; // Will hold the items to return
  if (!arguments.length) return removedItems; // Just called splice()

  const originalLength = this.length; // Keep track of the original array length
  const helperArray = [...this]; // Create an helper arary - copy of the original

  let startIndex = arguments[0] ? arguments[0] : 0; // Initialize start index to remove

  let deleteCount = arguments[1] ? arguments[1] : originalLength; // If there is no 2nd argument remove all elements
  arguments[1] === 0 && (deleteCount = 0); // If the second argument is explicitly set to 0, remove zero elements

  // Insert the new items into helper array
  const itemsToEnter = []; 
  if (arguments.length > 2) {
    for (let i = 2; i < arguments.length; i++) {
      itemsToEnter.push(arguments[i]);
    }
  }
  let hasEntered = false; // A mark to know if new items has entered

  // Remove all items from original array
  for (let i = 0; i < originalLength; i++) {
    this.pop();
  }

  // The actual operation:
  for (let i = 0; i < originalLength; i++) {

    // Insert the new items into the end of the original array
    if (!hasEntered && i === startIndex) {
      this.push(...itemsToEnter);
      hasEntered = true;
    }

    // Insert back all other items either to the original array or to the removed items array 
    if (i === startIndex && deleteCount) {
      removedItems.push(helperArray[i]);
      startIndex++;
      deleteCount--;
    } else {
      this.push(helperArray[i]);
    }
  }

  return removedItems;
};

//console.log(testArray.splice(2,2))
//testArray.splice(3,4,'hay','hoe')
//console.log(testArray)

// remove 1 element
let arr = [1, 2, 3];
arr.splice(0, 1);
console.log(arr); //should be [2,3]

// add 1 element
arr = [1, 2, 3];
arr.splice(0, 0, 0);
console.log(arr); //should be [0,1,2,3]

// replace 1 element
arr = [1, 2, 3];
arr.splice(1, 1, 55);
console.log(arr); //should be [1,55,3]

// delete all elements from index to end
arr = [1, 2, 3, 4, 5];
arr.splice(1);
console.log(arr); //should be [1]

// returns array of deleted elements
arr = [1, 2, 3];
let deleted = arr.splice(1);
console.log(deleted); //should be [2,3]

// returns an array of the deleted element (1 element)
arr = [1, 2, 3];
deleted = arr.splice(1, 1);
console.log(deleted); //should be [2]

// returns an empty array when no elements are deleted
arr = [1, 2, 3];
deleted = arr.splice(1, 0, 5);
console.log(deleted); //should be []

function exDivider(number) {
  console.log(" ");
  console.log(" ");
  console.log("==========================");
  console.log("Exercise " + number);
  console.log("==========================");
  console.log(" ");
}
