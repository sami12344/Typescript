function add(n1:number,n2:number){
 console.log(typeof(number1));
// if(typeof n1 !== 'number'|| typeof n2 !== 'number'){
//  throw new Error('Incorrect type!')
// }
 return n1+n2
}
const number1 = 5
const number2 = 2.8
const result = add(number1,number2)
console.log(result);


// The diffrence between js and ts :
//JS uses 'dynamic types' (resolved at runtime)
//TS uses 'static types' (set during development)