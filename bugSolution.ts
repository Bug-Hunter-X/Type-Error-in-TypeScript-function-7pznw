function add(a: number, b: number): number {
  return a + b;
}

let result1 = add(1, 2); // Correct

function addString(a: number, b: string): number {
  return a + parseInt(b); 
}

let result2 = addString(1, "2"); // Correct

function addUnion(a: number | string, b: number | string): number {
  if (typeof a === 'string' || typeof b === 'string') {
    return parseInt(a.toString()) + parseInt(b.toString());
  } else {
    return a + b;
  }
}

let result3 = addUnion(1, "2"); // Correct