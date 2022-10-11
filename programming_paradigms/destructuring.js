let {PI} = Math; // here i destructured PI which is a property of Math object into a PI variable in my code
console.log(PI); // 3.1416

// if we were to call let {pi} = Math; it would not work, because it does not exist in Math object

// this would return undefined

PI === Math.PI;

// this is true, is the same type and has the same value as math object pi property