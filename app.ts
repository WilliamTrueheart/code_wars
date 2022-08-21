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
    let strNum = int.toString();;
    let line =strNum.repeat(int)
    return line;
  }

console.log(generateShape(3))

  