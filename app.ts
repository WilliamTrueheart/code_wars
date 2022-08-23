export function squareSum(numbers: number[]): number {
    let squaredSum = 0;

    numbers.map(num => {
        squaredSum += num*num;
    })
    return squaredSum;
}

console.log(squareSum([1,2,3]));

// Build a Square
// 7 kyu

export function generateShape(int: number): string { 
    let line ='+'.repeat(int);
    // i need the first iteration to be +, then \n++, etc..

    return line;
  }

console.log(generateShape(4))

// Ordered Count of Chars
// 7 kyu
// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]


// Mexican Wave
// 6 kyu
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

export function wave(str: string): Array<string>{
    // arr to house the iterations
    let waveArr :string[] = [];
    let strLen = str.length;
    // loop through str, upperCase the index value, and push to new arr
    for (let i=0; i<str.length; i++) {   
      if (str[i] == ' ') {
        continue
      } 
      waveArr.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1, strLen))
    }
    return waveArr;
  }
 
  console.log(wave('two words'))