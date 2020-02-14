function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum){
    return startNum
  }
  let a = rangeOfNumbers(startNum, endNum-1)
  return endNum
}

console.log(rangeOfNumbers(1, 3));


let a = [1, 3, 4]
console.log(a.push(5));

console.log(a)

a.push([9][0])
console.log(a);
