// Contamination #1 -String-
// 8 kyu

 function contamination(text, char){
    //text before = "abc"
    //character   = "z"
    //text after  = "zzz"
    
    let infectedText = [];
    for (let i=0; i<text.length; i++) {
      infectedText.push(char)
    }
    return infectedText.join('');
  }
  
  console.log(contamination('will', 'z'));

// You only need one - Beginner
// 8 kyu

  function check(a, x) {
    // your code here
    let status = false;
    for (let i=0; i < a.length; i++) {
      if (x === a[i]) {
        status = true;
      }
    }
    return status;
  }

  console.log(check(['a',4], 5))

  const checkRF = (a,x) => a.includes(x);

  console.log(checkRF(['a',4],5))


/* 
I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
*/


console.log(howMuchILoveYou(1))

function howMuchILoveYou(nbPetals) {
  let arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
  for (let i = 0; i <= nbPetals; i++){
    //creates a for loop to iterate through every petal
    //arr. push replicates the array by adding each repeating element as needed
  arr.push(arr[i]);
  }
  //returns the index of the number of petals, - 1 , to give the element we end on
  return arr[nbPetals-1];
 }

// Beginner - Lost Without a Map
// 8 kyu

 function maps(x){
  let dub = x.map(v => v*2);
  return dub;
}

console.log(maps([1,5,3]))




//Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Sum of positive
// 8 kyu

function positiveSum(arr) {
    let sumArr = 0;
    for (let i=0; i<arr.length; i++) {
      if (arr[i] >= 0) {
        sumArr+=(arr[i])
      }
    }
    return sumArr
}

console.log(positiveSum([11,2,3]))

//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
function abbrevName(name){
  let initials = [];
  // input name, return Initials
  //input  will always be two words sep. by space
  //loop through, and take value 0, and the space + 1 value?
  for (let i=0; i<name.length; i++) {
    if (i===0) {
      initials.push(name[i]);
    }
    else if (name[i] == ' ') {
      initials.push(name[i + 1])
    }
  }
  let polishedInitials = initials.join('.');
    return(polishedInitials)
}
console.log(abbrevName('Will Newton'))

// powers of 2
function powersOfTwo(n){
  let powerList = []
// this list will house the new arr
  for ( let i=0; i<=n; i++) {
    powerList.push(2**i)
  }

  return powerList;
}

console.log(powersOfTwo())

/* refactor
function powersOfTwo(n){
  var myArray = [];
  for (var i=0; i<=n; i++){
    myArray.push(2**i);
  }
  return myArray
}

const result = powersOfTwo(2)
console.log(result)
*/


function invert(array) {
  var inversedArr = [];
  for (let i=0; i<array.length; i++){
    inversedArr.push(-array[i]);
  } 
   return inversedArr;
}
console.log(invert([1,2,3]))


function multiply(x,y) {
  return x*y;
}

function nameShuffler(str){
  return str.split(' ').reverse().join(' ');
}

console.log(nameShuffler('Will Newton'))


function sumMix(x){

  for (i=0; i<x.length; i++) {
    
  }
}

console.log(sumMix([2,3,4]))


//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// "String"      -> "SSttrriinngg"

function doubleChar(str) {
let newStr = [];
for (let i=0; i<str.length; i++) {
  newStr.push(str[i] +str[i]);
}
return newStr.join('')
}

console.log(doubleChar('opTimus'))

//refactored below

const doubleCharRF = (str) => str.split("").map(c => c + c).join("");
// this is creating our new arr, taking str as input, splitting that str
//then mapping through, changing each element to x2, then rejonining
console.log(doubleCharRF('opTimus'))


function unusualFive() {
  return 'jolly'.length;
}
// wow lol, proud of myself for finally figuring this one out. Overthinking
// at it's finest.

console.log(unusualFive('3'))

// Reversed sequence
// 8 kyu 
//Build a function that returns an array of integers from n to 1 where n>0.

const reverseSeq = n => {
  let numbers = [];
  //for loop to index each number
  for (let i=n; i>0; i--) {
    numbers.push(i);
  }
  return numbers;
};

console.log(reverseSeq(5))

//Convert a Boolean to a String
//8 kyu
//Implement a function which convert the given boolean value into its string representation.

function booleanToString(b){
  if (b == true) {
    return 'true';
  }
  else if (b == false) {
    return 'false';
  }
}

// refactor to simply return b.toString()

console.log(booleanToString(false))

// Switcheroo 
//7 kyu
//'acb' --> 'bca' 'aabacbaa' --> 'bbabcabb'
//Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

function switcheroo(x){
  // we are given a string 'aabbcc', and need 'bbaacc';
  let switched = [];
  // loop through x, and if char is a, push b into new arr
  for (let i=0; i<x.length;i++) {
    if (x[i] == 'a') {
      switched.push('b'); 
    }
    else if (x[i] == 'b') {
      switched.push('a'); 
    }
    else {
    switched.push(x[i]); 
    }
  }
  //return joined arr
  return switched.join('');
}

console.log(switcheroo('aaabbbc'))


// Binary Addition
// 7kyu

function addBinary(a,b) {
  let sum = (a + b);
  return sum.toString(2);
  }

console.log(addBinary(3,4))


// Breaking chocolate problem
// 7 kyu

function breakChocolate(n,m) {
// breaks will be detrmnd by n-1; per dimension
// ex, if n = 3. 2 breaks needed. if m = 5, 4 more. 6 total
  return (n-1)+(m-1);
}

console.log(breakChocolate(5,5))


// 6 kyu
// Alphabet war - airstrike - letters massacre

// alphabetWar("zzzz*s*");       //=> Right side wins!
// alphabetWar("www*www****z");  //=> Left side wins!

function alphabetWar(fight){
//create 2 var, leftScore and rightScore

  const leftSide = {
    'm': 4,
    'q':3,
    'd':2,
    'z':1   
  }
  const rightSide = {
    'w': 4,
    'p':3,
    'b':2,
    's':1    
  }    
  let leftCount = 0;
  let rightCount = 0;
  let results = '';

  for(let char of fight) {
    if (char in leftSide){
      leftCount += leftSide[char]
    } 
    if (char in rightSide){
      rightCount += rightSide[char]
    } 
  }
  if (leftCount > rightCount) {
     results = 'left side wins!'
  }
  if (rightCount > leftCount) {
     results = 'right side wins!'
  }
  if (rightCount == leftCount) {
    results = 'keep fighting until a winneris decided!'
 }

  return results;
} 


console.log(alphabetWar(''))

//m - 4    w - 4
//q - 3    p - 3
//d - 2    b - 2
//z - 1    s - 1